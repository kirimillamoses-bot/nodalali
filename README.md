# Nodalali — Pangisha Bila Dalali

Tanzania house-hunting PWA. Direct landlord ↔ tenant. No brokers.

## Features
- 🔍 Browse/search rentals in Dar, Arusha, Dodoma, Mwanza, Mbeya, Zanzibar
- 🗺️ Map view (Leaflet)
- ❤️ Save favorites
- 💬 WhatsApp + call directly to landlord
- 💰 M-Pesa payment for listings (ZenoPay)
- 📱 PWA + Android APK
- 🇹🇿 Swahili UI

## Pricing
- Post listing: TZS 5,000 (30 days)
- Verified badge: TZS 10,000
- Featured (top of search): TZS 15,000

## Stack
Vanilla JS PWA · Express · Firebase Firestore · Capacitor (Android) · Leaflet · ZenoPay

## Deploy

### Render (free)
1. Push this repo to GitHub
2. Go to https://render.com → New Web Service
3. Connect this repo → render.yaml is auto-detected
4. Set `ZENOPAY_API_KEY` env var
5. Deploy

### Local
```bash
npm install
node server.js  # http://localhost:3000
```

### Android APK
```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
npm run build
cd android && ./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release.apk
```

See [SETUP.md](SETUP.md) for full setup details.
