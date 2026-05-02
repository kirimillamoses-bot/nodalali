// SMS OTP via Beem Africa (https://beem.africa) — TZ leading SMS provider
// Sign up free → get API_KEY + SECRET_KEY → set as Render env vars
const fetch = require('node-fetch');

const BEEM_API_KEY = process.env.BEEM_API_KEY || '';
const BEEM_SECRET_KEY = process.env.BEEM_SECRET_KEY || '';
const BEEM_SENDER = process.env.BEEM_SENDER || 'NODALALI';

// In-memory OTP store (move to Firestore in production)
const otpStore = new Map();

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function sendOtp(phone) {
  if (!/^255[67][0-9]{8}$/.test(phone)) throw new Error('Invalid phone');
  const code = generateOtp();
  otpStore.set(phone, { code, expires: Date.now() + 10 * 60 * 1000, attempts: 0 });

  const message = `Nodalali: Code yako ya uthibitisho ni ${code}. Usimpe mtu yeyote. Inakwisha baada ya dakika 10.`;

  if (!BEEM_API_KEY) {
    console.log(`[SMS DEMO] To ${phone}: ${message}`);
    return { success: true, simulated: true, code }; // dev only — remove in prod
  }

  const auth = Buffer.from(`${BEEM_API_KEY}:${BEEM_SECRET_KEY}`).toString('base64');
  const r = await fetch('https://apisms.beem.africa/v1/send', {
    method: 'POST',
    headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source_addr: BEEM_SENDER,
      schedule_time: '',
      encoding: 0,
      message,
      recipients: [{ recipient_id: 1, dest_addr: phone }]
    })
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data.message || 'SMS send failed');
  return { success: true, request_id: data.request_id };
}

function verifyOtp(phone, code) {
  const entry = otpStore.get(phone);
  if (!entry) return { ok: false, error: 'Hakuna OTP iliyotumwa' };
  if (entry.expires < Date.now()) { otpStore.delete(phone); return { ok: false, error: 'OTP imekwisha muda' }; }
  if (entry.attempts >= 5) { otpStore.delete(phone); return { ok: false, error: 'Majaribio mengi' }; }
  entry.attempts++;
  if (entry.code !== code) return { ok: false, error: 'OTP si sahihi' };
  otpStore.delete(phone);
  return { ok: true };
}

module.exports = { sendOtp, verifyOtp };
