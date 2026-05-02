const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// ============== M-PESA / ZENOPAY ENDPOINTS ==============
// ZenoPay aggregates M-Pesa, Tigo Pesa, Airtel Money, Halopesa.
// Get an API key at https://zenoapi.com (free tier available)
// Set ZENOPAY_API_KEY in Railway environment variables.

const ZENOPAY_API_KEY = process.env.ZENOPAY_API_KEY || '';
const ZENOPAY_BASE = 'https://zenoapi.com/api/payments';

const PRICING = {
  listing: 5000,      // TZS 5,000 — post a listing for 30 days
  verified: 10000,    // TZS 10,000 — verification badge
  featured: 15000     // TZS 15,000 — featured (top of search)
};

// Initiate payment (USSD push to user's phone)
app.post('/api/pay', async (req, res) => {
  const { phone, listingId, plan, userId } = req.body;
  if (!/^255[67][0-9]{8}$/.test(phone || '')) {
    return res.status(400).json({ error: 'Namba ya simu si sahihi (mfano: 255712345678)' });
  }
  if (!PRICING[plan]) return res.status(400).json({ error: 'Plan haijulikani' });
  if (!ZENOPAY_API_KEY) {
    // DEV MODE: simulate success
    return res.json({
      success: true,
      simulated: true,
      orderId: 'sim-' + Date.now(),
      amount: PRICING[plan],
      message: 'Demo mode: payment simulated. Set ZENOPAY_API_KEY for real M-Pesa.'
    });
  }
  try {
    const orderId = `nd-${listingId || 'x'}-${Date.now()}`;
    const r = await fetch(`${ZENOPAY_BASE}/mobile_money_tanzania`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ZENOPAY_API_KEY
      },
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
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Webhook for ZenoPay to confirm payment
app.post('/api/webhook', (req, res) => {
  console.log('💰 Payment webhook:', req.body);
  // TODO: update Firestore listing.paid = true based on order_id
  res.json({ received: true });
});

// Check payment status
app.get('/api/pay/status/:orderId', async (req, res) => {
  if (!ZENOPAY_API_KEY) return res.json({ status: 'COMPLETED', simulated: true });
  try {
    const r = await fetch(`${ZENOPAY_BASE}/order-status?order_id=${req.params.orderId}`, {
      headers: { 'x-api-key': ZENOPAY_API_KEY }
    });
    res.json(await r.json());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Pricing endpoint
app.get('/api/pricing', (_, res) => res.json(PRICING));

// SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🏠 Nodalali running on http://localhost:${PORT}`);
  console.log(`   M-Pesa: ${ZENOPAY_API_KEY ? 'LIVE' : 'DEMO MODE (set ZENOPAY_API_KEY)'}`);
});
