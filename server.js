const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const security = require('./security');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(express.json({ limit: '2mb' }));

// ── Security headers ──
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});

// ── Rate limits (per IP) ──
const apiLimit = rateLimit({
  windowMs: 60 * 1000,        // 1 min
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Maombi mengi sana. Subiri kidogo.' }
});
const writeLimit = rateLimit({
  windowMs: 60 * 60 * 1000,   // 1 hour
  max: 10,
  message: { error: 'Umejaribu mara nyingi. Jaribu tena baada ya saa moja.' }
});
const payLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Maombi mengi ya malipo. Jaribu tena baadaye.' }
});

app.use('/api/', apiLimit);

// ── M-Pesa pricing ──
const ZENOPAY_API_KEY = process.env.ZENOPAY_API_KEY || '';
const ZENOPAY_BASE = 'https://zenoapi.com/api/payments';
const PRICING = { listing: 5000, verified: 10000, featured: 15000 };

// ── Listing pre-flight: scam + block check ──
app.post('/api/listings/check', writeLimit, (req, res) => {
  const { phone, userId, title, description } = req.body || {};
  const ip = req.ip;

  // 1. Phone validation
  const phoneErr = security.validateTzPhone(phone || '');
  if (phoneErr) return res.status(400).json({ error: phoneErr });

  // 2. Block check
  const blockedReason = security.isBlocked({ phone, userId, ip });
  if (blockedReason) return res.status(403).json({ error: 'Imekataliwa: namba/akaunti imezuiwa' });

  // 3. Sanitize + scam detection
  const cleanTitle = security.sanitizeText(title, 100);
  const cleanDesc = security.sanitizeText(description, 1000);
  const scam = security.containsScamContent(cleanTitle + ' ' + cleanDesc);
  if (scam) return res.status(400).json({ error: 'Maudhui yenye shaka: ' + scam });

  res.json({ ok: true, sanitized: { title: cleanTitle, description: cleanDesc } });
});

// ── Report a listing ──
app.post('/api/report', writeLimit, (req, res) => {
  const { listingId, reporterId, reason } = req.body || {};
  if (!listingId || !reason) return res.status(400).json({ error: 'Missing fields' });
  if (reason.length > 200) return res.status(400).json({ error: 'Reason too long' });
  const result = security.reportListing(listingId, reporterId || 'anon', security.sanitizeText(reason, 200));
  res.json({
    ok: true,
    reportCount: result.count,
    flagged: security.shouldAutoFlag(listingId)
  });
});

// ── Get report counts (frontend uses this to hide flagged listings) ──
app.get('/api/reports/:id', (req, res) => {
  res.json({ count: security.getReportCount(req.params.id) });
});

// ── Admin: block / unblock ──
app.post('/api/admin/block', (req, res) => {
  const { token, type, value } = req.body || {};
  let ok = false;
  if (type === 'phone') ok = security.blockPhone(value, token);
  else if (type === 'user') ok = security.blockUser(value, token);
  if (!ok) return res.status(403).json({ error: 'Unauthorized or invalid' });
  res.json({ ok: true });
});

app.post('/api/admin/unblock', (req, res) => {
  const { token, type, value } = req.body || {};
  const map = { phone: 'phones', user: 'userIds', ip: 'ips' };
  if (!map[type]) return res.status(400).json({ error: 'Bad type' });
  const ok = security.unblock(value, map[type], token);
  if (!ok) return res.status(403).json({ error: 'Unauthorized or not found' });
  res.json({ ok: true });
});

// ── M-Pesa pay (rate-limited harder) ──
app.post('/api/pay', payLimit, async (req, res) => {
  const { phone, listingId, plan, userId } = req.body || {};
  const phoneErr = security.validateTzPhone(phone || '');
  if (phoneErr) return res.status(400).json({ error: phoneErr });
  if (!PRICING[plan]) return res.status(400).json({ error: 'Plan haijulikani' });
  if (security.isBlocked({ phone, userId, ip: req.ip })) {
    return res.status(403).json({ error: 'Akaunti imezuiwa' });
  }
  if (!ZENOPAY_API_KEY) {
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

app.post('/api/webhook', (req, res) => {
  console.log('💰 Payment webhook:', req.body);
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

// ── Static files (after /api routes so they don't match) ──
app.use(express.static(__dirname));
app.use((req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`🏠 Nodalali running on http://localhost:${PORT}`);
  console.log(`   M-Pesa: ${ZENOPAY_API_KEY ? 'LIVE' : 'DEMO MODE'}`);
  console.log(`   Security: rate-limit + scam-filter + blocklist active`);
  console.log(`   Admin token: ${security.ADMIN_TOKEN === 'change-me-in-production' ? '⚠️  default (set ADMIN_TOKEN env var)' : '✓ custom'}`);
});
