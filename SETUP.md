# Nodalali — Setup Guide

## ✅ What's Done
- Full PWA: index.html / style.css / script.js (all in Swahili)
- Firebase rules: firestore.rules
- M-Pesa server: server.js with /api/pay, /api/webhook, /api/pricing
- Capacitor Android project: android/
- Signed release APK: ~/Desktop/Nodalali.apk (3.0 MB)
- Debug APK: ~/Desktop/Nodalali-debug.apk
- Keystore: nodalali-release.keystore (alias: nodalali, password: Nodalali2024!)

## 🔑 Step 1 — Firebase
1. Go to https://console.firebase.google.com
2. Create project "nodalali"
3. Enable: Authentication (Email/Password), Firestore, Storage
4. Copy web config into firebase-config.js
5. Deploy rules: `firebase deploy --only firestore:rules`

## 💰 Step 2 — M-Pesa (ZenoPay)
1. Sign up at https://zenoapi.com (free tier)
2. Get API key
3. Set env var: `ZENOPAY_API_KEY=your_key`

## 🚀 Step 3 — Deploy
**Railway free limit hit.** Options:
- Upgrade Railway ($5/mo) and run: `railway up`
- Render (free): connect this repo at https://render.com → New Web Service
- Fly.io (free tier): `flyctl launch`
- Vercel (frontend only): `vercel deploy`

## 📱 Step 4 — Install APK on phone
1. Email or AirDrop ~/Desktop/Nodalali.apk to your Android phone
2. Settings → enable "Install unknown apps"
3. Tap the APK to install
4. Open Nodalali — works offline!

## 🛠 Local Dev
```bash
cd /Users/moses/Developer/nodalali
node server.js      # http://localhost:3000
```

## 🔁 Rebuild APK
```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
npm run build       # copies to www/, syncs Capacitor
cd android && ./gradlew assembleRelease
cp app/build/outputs/apk/release/app-release.apk ~/Desktop/Nodalali.apk
```
