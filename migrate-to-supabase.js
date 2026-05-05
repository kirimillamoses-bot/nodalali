// Pulls all 60 listings from Firestore and inserts them into Supabase.
// Run once: node migrate-to-supabase.js
//
// Requires .env with:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// And gcloud auth (already used by seed.js) for reading Firestore.

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { execSync } = require('child_process');

const PROJECT = 'no-dalali-2d927';
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supa = createClient(SUPA_URL, SUPA_KEY, { auth: { persistSession: false } });

function fromFirestoreFields(doc) {
  const out = {};
  for (const [k, v] of Object.entries(doc.fields || {})) {
    if (v.stringValue !== undefined)  out[k] = v.stringValue;
    else if (v.integerValue !== undefined) out[k] = parseInt(v.integerValue, 10);
    else if (v.doubleValue !== undefined)  out[k] = v.doubleValue;
    else if (v.booleanValue !== undefined) out[k] = v.booleanValue;
    else if (v.arrayValue) out[k] = (v.arrayValue.values || []).map(x => x.stringValue);
  }
  return out;
}

(async () => {
  const token = execSync('gcloud auth print-access-token').toString().trim();
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/listings?pageSize=300`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, 'x-goog-user-project': PROJECT }
  });
  const json = await res.json();
  const docs = (json.documents || []).map(fromFirestoreFields);
  console.log(`Pulled ${docs.length} listings from Firestore`);

  let ok = 0, bad = 0;
  for (const d of docs) {
    const row = {
      title:       d.title,
      area:        d.area || d.city,
      city:        d.city,
      rent_type:   d.type || d.rent_type || 'house',
      category:    d.category || 'rental',
      price:       d.price,
      whatsapp:    d.whatsapp,
      description: d.description || null,
      photos:      d.photos || [],
      lat:         d.lat || null,
      lng:         d.lng || null,
      campus:      d.campus || null,
      verified:    !!d.verified,
      paid:        !!d.paid
    };
    const { error } = await supa.from('listings').insert(row);
    if (error) { bad++; console.error(d.title, error.message); }
    else ok++;
  }
  console.log(`✅ ${ok} migrated, ❌ ${bad} failed`);
})();
