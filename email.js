// Email via Brevo (sendinblue) — free tier 300 emails/day
// Sign up: https://brevo.com → API key → set BREVO_API_KEY
const fetch = require('node-fetch');

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@nodalali.tz';
const FROM_NAME = 'Nodalali';

async function sendEmail({ to, subject, html, text }) {
  if (!BREVO_API_KEY) {
    console.log(`[EMAIL DEMO] To ${to} | ${subject}`);
    return { simulated: true };
  }
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: to }],
      subject, htmlContent: html, textContent: text
    })
  });
  if (!r.ok) throw new Error('Email send failed');
  return await r.json();
}

const templates = {
  newInquiry: (landlordName, listingTitle, tenantPhone) => ({
    subject: `Mtu mpya anavutiwa na nyumba yako: ${listingTitle}`,
    html: `<h2>Habari ${landlordName},</h2><p>Mpangaji mpya amewasiliana nawe kuhusu nyumba yako "<b>${listingTitle}</b>".</p><p>Namba ya WhatsApp: <b>${tenantPhone}</b></p><p>— Timu ya Nodalali</p>`,
    text: `Habari ${landlordName}, mpangaji mpya: ${tenantPhone} kuhusu ${listingTitle}`
  }),
  paymentConfirmed: (name, plan, amount) => ({
    subject: `Malipo yamethibitishwa: TZS ${amount.toLocaleString()}`,
    html: `<h2>Asante ${name}!</h2><p>Malipo yako ya <b>TZS ${amount.toLocaleString()}</b> kwa ajili ya <b>${plan}</b> yamefaulu.</p><p>Tangazo lako sasa lipo hewani.</p>`,
    text: `Malipo TZS ${amount} ya ${plan} yamefaulu`
  }),
  listingFlagged: (landlord, listingTitle, count) => ({
    subject: `⚠️ Tangazo lako limeripotiwa mara ${count}`,
    html: `<h2>Habari ${landlord},</h2><p>Tangazo lako "<b>${listingTitle}</b>" limeripotiwa mara <b>${count}</b> na watumiaji. Tafadhali hakikisha taarifa zote ni za kweli.</p>`,
    text: `Tangazo "${listingTitle}" limeripotiwa mara ${count}`
  })
};

module.exports = { sendEmail, templates };
