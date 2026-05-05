const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const security = require('./security');
const sms = require('./sms');
const email = require('./email');
const moderation = require('./moderation');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(express.json({ limit: '5mb' }));

// ── Security headers ──
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.gstatic.com https://unpkg.com; " +
    "style-src 'self' 'unsafe-inline' https://unpkg.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com; " +
    "font-src 'self' data:; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'"
  );
  next();
});

// ── Rate limits ──
const apiLimit = rateLimit({ windowMs: 60000, max: 30, message: { error: 'Maombi mengi. Subiri kidogo.' } });
const writeLimit = rateLimit({ windowMs: 3600000, max: 10, message: { error: 'Umejaribu mara nyingi.' } });
const payLimit = rateLimit({ windowMs: 3600000, max: 5, message: { error: 'Maombi mengi ya malipo.' } });
const otpLimit = rateLimit({ windowMs: 600000, max: 3, message: { error: 'Subiri dakika 10.' } });

app.use('/api/', apiLimit);

// ── Config ──
const ZENOPAY_API_KEY = process.env.ZENOPAY_API_KEY || '';
const ZENOPAY_WEBHOOK_SECRET = process.env.ZENOPAY_WEBHOOK_SECRET || '';
const ZENOPAY_BASE = 'https://zenoapi.com/api/payments';
const PRICING = { listing: 5000, verified: 10000, featured: 15000 };

// In-memory revenue tally (move to DB)
let revenueTally = 0;

// ── Admin auth middleware ──
function requireAdmin(req, res, next) {
  const token = req.headers['x-admin-token'] || req.body?.token;
  if (token !== security.ADMIN_TOKEN) return res.status(403).json({ error: 'Unauthorized' });
  next();
}

// ────────────────────────────────────────────────
// LISTINGS — pre-flight security check
// ────────────────────────────────────────────────
app.post('/api/listings/check', writeLimit, async (req, res) => {
  const { phone, userId, title, description, images } = req.body || {};
  const ip = req.ip;

  const phoneErr = security.validateTzPhone(phone || '');
  if (phoneErr) return res.status(400).json({ error: phoneErr });

  if (security.isBlocked({ phone, userId, ip })) {
    return res.status(403).json({ error: 'Akaunti imezuiwa. Wasiliana na customer service.' });
  }

  const cleanTitle = security.sanitizeText(title, 100);
  const cleanDesc = security.sanitizeText(description, 1000);
  const scam = security.containsScamContent(cleanTitle + ' ' + cleanDesc);
  if (scam) return res.status(400).json({ error: 'Maudhui yenye shaka: ' + scam });

  // Image moderation (first 3 images only — speed)
  if (Array.isArray(images) && images.length) {
    for (const img of images.slice(0, 3)) {
      try {
        const m = await moderation.moderateImage(img);
        if (!m.ok) return res.status(400).json({ error: `Picha haifai: ${m.issues.join(', ')}` });
      } catch (e) { console.warn('Moderation error:', e.message); }
    }
  }

  res.json({ ok: true, sanitized: { title: cleanTitle, description: cleanDesc } });
});

// ────────────────────────────────────────────────
// REPORTS
// ────────────────────────────────────────────────
app.post('/api/report', writeLimit, (req, res) => {
  const { listingId, reporterId, reason } = req.body || {};
  if (!listingId || !reason) return res.status(400).json({ error: 'Missing fields' });
  const result = security.reportListing(listingId, reporterId || 'anon', security.sanitizeText(reason, 200));
  res.json({ ok: true, reportCount: result.count, flagged: security.shouldAutoFlag(listingId) });
});

app.get('/api/reports/:id', (req, res) => {
  res.json({ count: security.getReportCount(req.params.id) });
});

// ────────────────────────────────────────────────
// REVIEWS
// ────────────────────────────────────────────────
app.get('/api/reviews/:listingId', (req, res) => {
  res.json(security.getReviews(req.params.listingId));
});

app.post('/api/reviews', writeLimit, (req, res) => {
  const { listingId, reviewerId, rating, comment } = req.body || {};
  if (!listingId || !reviewerId) return res.status(400).json({ error: 'Missing fields' });
  const r = Number(rating);
  if (!(r >= 1 && r <= 5)) return res.status(400).json({ error: 'Rating must be 1-5' });
  const cleanComment = security.sanitizeText(comment, 500);
  const scam = security.containsScamContent(cleanComment);
  if (scam) return res.status(400).json({ error: 'Maudhui yenye shaka: ' + scam });
  const result = security.addReview(listingId, reviewerId, r, cleanComment);
  res.json({ ok: true, ...result });
});

app.delete('/api/reviews/:listingId/:reviewId', writeLimit, (req, res) => {
  const { reviewerId } = req.body || req.query || {};
  const ok = security.deleteReview(req.params.listingId, req.params.reviewId, reviewerId);
  if (!ok) return res.status(403).json({ error: 'Not allowed' });
  res.json({ ok: true });
});

// ────────────────────────────────────────────────
// BOOKINGS (guest houses, B&Bs)
// ────────────────────────────────────────────────
const BOOKINGS_FILE = path.join(__dirname, 'bookings.json');
let bookingsStore = {};
try { bookingsStore = JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf8')); } catch {}
const saveBookings = () => fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookingsStore, null, 2));

app.get('/api/bookings/:listingId', (req, res) => {
  const list = bookingsStore[req.params.listingId] || [];
  res.json({ bookings: list, blockedDates: list.flatMap(b => b.dates) });
});

app.post('/api/bookings', writeLimit, (req, res) => {
  const { listingId, guestName, guestPhone, checkIn, checkOut, nights, total } = req.body || {};
  if (!listingId || !guestPhone || !checkIn || !checkOut) return res.status(400).json({ error: 'Missing fields' });
  const phoneErr = security.validateTzPhone(guestPhone);
  if (phoneErr) return res.status(400).json({ error: phoneErr });
  if (security.isBlocked({ phone: guestPhone, ip: req.ip })) return res.status(403).json({ error: 'Akaunti imezuiwa' });

  // Build the array of dates between checkIn and checkOut
  const dates = [];
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    dates.push(d.toISOString().slice(0, 10));
  }

  // Check conflicts
  const list = bookingsStore[listingId] || [];
  const blocked = new Set(list.flatMap(b => b.dates));
  const conflict = dates.find(d => blocked.has(d));
  if (conflict) return res.status(409).json({ error: `Tarehe ${conflict} imeshachukuliwa` });

  const booking = {
    id: 'b' + Date.now() + Math.random().toString(36).slice(2, 6),
    listingId,
    guestName: security.sanitizeText(guestName, 60),
    guestPhone, checkIn, checkOut, nights, total,
    dates, createdAt: Date.now(), status: 'pending'
  };
  if (!bookingsStore[listingId]) bookingsStore[listingId] = [];
  bookingsStore[listingId].push(booking);
  saveBookings();
  res.json({ ok: true, booking });
});

// ────────────────────────────────────────────────
// SMS OTP — phone verification
// ────────────────────────────────────────────────
app.post('/api/otp/send', otpLimit, async (req, res) => {
  const { phone } = req.body || {};
  const phoneErr = security.validateTzPhone(phone || '');
  if (phoneErr) return res.status(400).json({ error: phoneErr });
  if (security.isBlocked({ phone, ip: req.ip })) return res.status(403).json({ error: 'Namba imezuiwa' });
  try {
    const r = await sms.sendOtp(phone);
    res.json({ ok: true, simulated: r.simulated, demoCode: r.simulated ? r.code : undefined });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/otp/verify', writeLimit, (req, res) => {
  const { phone, code } = req.body || {};
  const result = sms.verifyOtp(phone, code);
  if (!result.ok) return res.status(400).json(result);
  res.json({ ok: true });
});

// ────────────────────────────────────────────────
// M-PESA PAYMENTS
// ────────────────────────────────────────────────
app.post('/api/pay', payLimit, async (req, res) => {
  const { phone, listingId, plan, userId } = req.body || {};
  const phoneErr = security.validateTzPhone(phone || '');
  if (phoneErr) return res.status(400).json({ error: phoneErr });
  if (!PRICING[plan]) return res.status(400).json({ error: 'Plan haijulikani' });
  if (security.isBlocked({ phone, userId, ip: req.ip })) return res.status(403).json({ error: 'Akaunti imezuiwa' });

  if (!ZENOPAY_API_KEY) {
    revenueTally += PRICING[plan];
    return res.json({
      success: true, simulated: true,
      orderId: 'sim-' + Date.now(),
      amount: PRICING[plan],
      message: 'Demo mode: payment simulated.'
    });
  }
  try {
    const orderId = `nd-${listingId || 'x'}-${Date.now()}`;
    const r = await fetch(`${ZENOPAY_BASE}/mobile_money_tanzania`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ZENOPAY_API_KEY },
      body: JSON.stringify({
        order_id: orderId,
        buyer_email: `${userId || 'user'}@nodalali.tz`,
        buyer_name: 'Nodalali User',
        buyer_phone: phone,
        amount: PRICING[plan],
        webhook_url: `${req.protocol}://${req.get('host')}/api/webhook`
      })
    });
    const data = await r.json();
    res.json({ success: r.ok, orderId, amount: PRICING[plan], ...data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Webhook with signature verification ──
app.post('/api/webhook', (req, res) => {
  if (ZENOPAY_WEBHOOK_SECRET) {
    const signature = req.headers['x-zenopay-signature'] || '';
    const expected = crypto
      .createHmac('sha256', ZENOPAY_WEBHOOK_SECRET)
      .update(JSON.stringify(req.body))
      .digest('hex');
    if (signature !== expected) {
      console.warn('⚠️ Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }
  }

  const { order_id, payment_status, amount } = req.body || {};
  if (payment_status === 'COMPLETED') {
    revenueTally += Number(amount) || 0;
    console.log(`✅ Payment confirmed: ${order_id} = TZS ${amount}`);
    // TODO: update Firestore listing.paid = true based on order_id
    // TODO: send confirmation email via email.sendEmail({...email.templates.paymentConfirmed(...)})
  }
  res.json({ received: true });
});

app.get('/api/pay/status/:orderId', async (req, res) => {
  if (!ZENOPAY_API_KEY) return res.json({ status: 'COMPLETED', simulated: true });
  try {
    const r = await fetch(`${ZENOPAY_BASE}/order-status?order_id=${req.params.orderId}`, {
      headers: { 'x-api-key': ZENOPAY_API_KEY }
    });
    res.json(await r.json());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/pricing', (_, res) => res.json(PRICING));

// ────────────────────────────────────────────────
// ADMIN
// ────────────────────────────────────────────────
app.get('/api/admin/stats', requireAdmin, (req, res) => {
  const reports = security.getAllReports ? security.getAllReports() : {};
  const blocklist = security.getBlocklist ? security.getBlocklist() : { phones: [], userIds: [], ips: [] };
  const reportArray = Object.entries(reports).map(([listingId, data]) => ({
    listingId, count: data.count, reasons: data.reasons
  })).sort((a, b) => b.count - a.count);
  res.json({
    listings: 0,
    openReports: reportArray.length,
    blockedPhones: blocklist.phones.length,
    revenue: revenueTally,
    reports: reportArray.slice(0, 50),
    blocklist,
    services: {
      sms: !!process.env.BEEM_API_KEY,
      email: !!process.env.BREVO_API_KEY,
      moderation: !!process.env.GCP_VISION_API_KEY,
      mpesa: !!ZENOPAY_API_KEY
    }
  });
});

app.post('/api/admin/block', requireAdmin, (req, res) => {
  const { type, value } = req.body || {};
  let ok = false;
  if (type === 'phone') ok = security.blockPhone(value, security.ADMIN_TOKEN);
  else if (type === 'user') ok = security.blockUser(value, security.ADMIN_TOKEN);
  if (!ok) return res.status(400).json({ error: 'Bad input' });
  res.json({ ok: true });
});

app.post('/api/admin/unblock', requireAdmin, (req, res) => {
  const { type, value } = req.body || {};
  const map = { phone: 'phones', user: 'userIds', ip: 'ips' };
  if (!map[type]) return res.status(400).json({ error: 'Bad type' });
  const ok = security.unblock(value, map[type], security.ADMIN_TOKEN);
  res.json({ ok });
});

app.post('/api/admin/reports/dismiss', requireAdmin, (req, res) => {
  const { listingId } = req.body || {};
  if (security.dismissReports) security.dismissReports(listingId);
  res.json({ ok: true });
});

// ────────────────────────────────────────────────
// STATIC + LEGAL
// ────────────────────────────────────────────────
app.get('/robots.txt', (_, res) => {
  res.type('text/plain').sendFile(path.join(__dirname, 'robots.txt'));
});
app.get('/sitemap.xml', (_, res) => {
  res.type('application/xml').sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/admin', (_, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/privacy', (_, res) => res.sendFile(path.join(__dirname, 'privacy.html')));
app.get('/terms', (_, res) => res.sendFile(path.join(__dirname, 'terms.html')));
app.get('/students', (_, res) => res.sendFile(path.join(__dirname, 'students.html')));
app.get('/install', (_, res) => res.sendFile(path.join(__dirname, 'install.html')));
app.get(['/wanafunzi', '/student'], (_, res) => res.redirect('/students'));

app.use(express.static(__dirname));
app.use((req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Refuse to start in production with default admin token
if (process.env.NODE_ENV === 'production' && security.ADMIN_TOKEN === 'change-me-in-production') {
  console.error('❌ FATAL: ADMIN_TOKEN env var must be set in production. Refusing to start.');
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`🏠 Nodalali on http://localhost:${PORT}`);
  console.log(`   M-Pesa: ${ZENOPAY_API_KEY ? 'LIVE' : 'demo'} | webhook: ${ZENOPAY_WEBHOOK_SECRET ? 'verified' : '⚠️ unsigned'}`);
  console.log(`   SMS: ${process.env.BEEM_API_KEY ? 'live' : 'demo'} | Email: ${process.env.BREVO_API_KEY ? 'live' : 'demo'} | Moderation: ${process.env.GCP_VISION_API_KEY ? 'live' : 'demo'}`);
  console.log(`   Admin: http://localhost:${PORT}/admin (token: ${security.ADMIN_TOKEN === 'change-me-in-production' ? '⚠️ DEFAULT (set ADMIN_TOKEN env)' : '✓ custom'})`);
});
