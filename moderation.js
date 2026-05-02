// Image moderation via Google Cloud Vision SafeSearch
// Sign up: https://console.cloud.google.com → enable Vision API → API key
// Free tier: 1,000 requests/month
const fetch = require('node-fetch');

const GCP_VISION_KEY = process.env.GCP_VISION_API_KEY || '';

async function moderateImage(imageBase64OrUrl) {
  if (!GCP_VISION_KEY) return { ok: true, simulated: true };

  const isUrl = /^https?:\/\//.test(imageBase64OrUrl);
  const image = isUrl
    ? { source: { imageUri: imageBase64OrUrl } }
    : { content: imageBase64OrUrl.replace(/^data:image\/\w+;base64,/, '') };

  const r = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GCP_VISION_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      requests: [{ image, features: [{ type: 'SAFE_SEARCH_DETECTION' }] }]
    })
  });
  const data = await r.json();
  const safe = data.responses?.[0]?.safeSearchAnnotation;
  if (!safe) return { ok: true };

  const blocked = ['LIKELY', 'VERY_LIKELY'];
  const issues = [];
  if (blocked.includes(safe.adult)) issues.push('adult');
  if (blocked.includes(safe.violence)) issues.push('violence');
  if (blocked.includes(safe.racy)) issues.push('racy');
  if (blocked.includes(safe.medical)) issues.push('medical');

  return { ok: issues.length === 0, issues, safe };
}

module.exports = { moderateImage };
