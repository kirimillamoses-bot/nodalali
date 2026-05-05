# Nodalali — Environment Variables Setup

Set these on Render (or any host) → Settings → Environment.

---

## ⚠️ External setup still required (you must do these)

These are the items that can't be solved in code alone — they need accounts/keys you create.

| # | What | Why blocking | How |
|---|------|--------------|-----|
| 1 | **M-Pesa keys** (`ZENOPAY_API_KEY` + `ZENOPAY_WEBHOOK_SECRET`) | Real payments, paid features, featured listings | Sign up at https://zenoapi.com |
| 3 | **SMS** (`BEEM_API_KEY` + `BEEM_SECRET_KEY`) | OTP, listing alerts | Sign up at https://beem.africa |
| 3 | **Email** (`BREVO_API_KEY`) | Booking/lead notifications | Sign up at https://brevo.com |
| 3 | **Image moderation** (`GCP_VISION_API_KEY`) | Auto-block scam/inappropriate photos | https://console.cloud.google.com → enable Vision API |
| 4 | **Counter.dev analytics ID** | Page views/funnel tracking | Sign up at https://counter.dev → set `window.__COUNTER_ID` in your inline script before page load (e.g. via a `<script>window.__COUNTER_ID="abc123"</script>` injected per-environment) |
| 5 | **Real owner verification** | The ✓ badge currently fake-seeded | Build admin flow: landlord uploads NIDA, you review, set `verifiedBadge:true` on their listings |
| 6 | **Image upload storage** (Supabase or Firebase Storage) | Photos in post form go nowhere | Already half-wired — see `FINISH_SUPABASE.md`. Set `SUPABASE_URL` + `SUPABASE_ANON_KEY` |
| 7 | **Phone OTP flow** | No proof landlord owns the WhatsApp number | After SMS keys are set, wire `sms.js sendOtp()` into the post flow |
| 8 | **In-app messaging** | Chat lives only in WhatsApp | Add Firestore `messages` collection — schema sketch needed |
| 17 | **Real Tanzanian house photos** | Unsplash photos look foreign | Hire a local photographer / source from Tanzanian stock |
| 18 | **Video uploads** | Premium tour feature | Wire after image storage works |

---

## 🔴 REQUIRED for production

### `ADMIN_TOKEN`
Random secret for admin panel access.
**Generate:** `openssl rand -hex 32`
**Use:** Visit `/admin` → enter this token to log in.

### `ZENOPAY_API_KEY` — M-Pesa payments
1. Sign up: https://zenoapi.com (free)
2. Dashboard → API Keys → copy
3. Set here.
**Without this:** All payments simulated (won't actually charge users).

### `ZENOPAY_WEBHOOK_SECRET`
Set this in your ZenoPay dashboard AND here. Server verifies HMAC signature on `/api/webhook`.
**Without this:** Webhook accepts ANY POST = fraud risk.

## 🟡 IMPORTANT

### `BEEM_API_KEY` + `BEEM_SECRET_KEY` — SMS OTP
1. Sign up: https://beem.africa
2. Get API key + secret
3. Top up TZS 10,000 (~300 SMS)
**Without this:** OTP shown in console only (dev mode).

### `BREVO_API_KEY` — Transactional email
1. Sign up: https://brevo.com (free 300/day)
2. SMTP & API → create API key v3
**Without this:** Emails logged but not sent.

### `GCP_VISION_API_KEY` — Image moderation
1. https://console.cloud.google.com → New project → Enable Vision API
2. Credentials → API key
3. Free 1,000 requests/month
**Without this:** All uploaded images accepted without scanning.

## 🟢 ANDROID SIGNING (for APK builds)

### `NODALALI_KEYSTORE_PATH`
Default: `../../nodalali-release.keystore`

### `NODALALI_KEYSTORE_PASSWORD`
Default: `Nodalali2024!` (CHANGE THIS BEFORE PRODUCTION!)

### `NODALALI_KEY_ALIAS`
Default: `nodalali`

### `NODALALI_KEY_PASSWORD`
Default: `Nodalali2024!`

**To rotate:** Create new keystore with `keytool -genkeypair...` and update env vars.

## 📋 Quick render.com Setup

```
ADMIN_TOKEN=<run: openssl rand -hex 32>
ZENOPAY_API_KEY=<from zenoapi.com>
ZENOPAY_WEBHOOK_SECRET=<from zenoapi.com>
BEEM_API_KEY=<from beem.africa>
BEEM_SECRET_KEY=<from beem.africa>
BEEM_SENDER=NODALALI
BREVO_API_KEY=<from brevo.com>
FROM_EMAIL=noreply@nodalali.tz
GCP_VISION_API_KEY=<from cloud.google.com>
NODE_VERSION=20
```

## 🧪 Test Locally

```bash
ADMIN_TOKEN="test123" \
PORT=3030 \
node server.js
```

Then visit `http://localhost:3030/admin` and use token `test123`.
