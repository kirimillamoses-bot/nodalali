// Seed demo listings into Firestore via REST API
// Usage: node seed.js
const { execSync } = require('child_process');

const PROJECT = 'no-dalali-2d927';
const TOKEN = execSync('gcloud auth print-access-token').toString().trim();

// Pull demo data from script.js by extracting the array
const fs = require('fs');
const scriptContent = fs.readFileSync('./script.js', 'utf8');
const match = scriptContent.match(/const DEMO_LISTINGS = (\[[\s\S]*?\n\]);/);
if (!match) { console.error('Could not find DEMO_LISTINGS'); process.exit(1); }
const DEMO_LISTINGS = eval(match[1]);

console.log(`Seeding ${DEMO_LISTINGS.length} listings...`);

function toFirestoreFields(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) continue;
    if (typeof v === 'string') fields[k] = { stringValue: v };
    else if (typeof v === 'number' && Number.isInteger(v)) fields[k] = { integerValue: String(v) };
    else if (typeof v === 'number') fields[k] = { doubleValue: v };
    else if (typeof v === 'boolean') fields[k] = { booleanValue: v };
    else if (Array.isArray(v)) fields[k] = { arrayValue: { values: v.map(x => ({ stringValue: String(x) })) } };
  }
  return fields;
}

(async () => {
  let success = 0, failed = 0;
  for (const listing of DEMO_LISTINGS) {
    const enriched = {
      ...listing,
      createdAt: Date.now(),
      verified: false,
      paid: true, // demo seed considered paid
      ownerId: listing.ownerId || 'demo'
    };
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/listings?documentId=${listing.id}`;
    const body = JSON.stringify({ fields: toFirestoreFields(enriched) });
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'x-goog-user-project': PROJECT,
          'Content-Type': 'application/json'
        },
        body
      });
      if (res.ok) { success++; }
      else {
        // Try PATCH (upsert) if doc exists
        const patchUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/listings/${listing.id}`;
        const patchRes = await fetch(patchUrl, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'x-goog-user-project': PROJECT,
            'Content-Type': 'application/json'
          },
          body
        });
        if (patchRes.ok) success++;
        else { failed++; const e = await patchRes.text(); console.error(listing.id, e.slice(0, 200)); }
      }
    } catch (e) { failed++; console.error(listing.id, e.message); }
  }
  console.log(`✅ ${success} seeded, ❌ ${failed} failed`);
})();
