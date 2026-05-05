// Pull photo URLs from script.js DEMO_LISTINGS and update Supabase rows by title
require('dotenv').config();
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } });

const src = fs.readFileSync('./script.js', 'utf8');
const m = src.match(/const DEMO_LISTINGS = (\[[\s\S]*?\n\]);/);
if (!m) { console.error('DEMO_LISTINGS not found'); process.exit(1); }
const DEMO = eval(m[1]);
console.log(`Loaded ${DEMO.length} demo listings from script.js`);

(async () => {
  let ok = 0, miss = 0, err = 0;
  for (const d of DEMO) {
    if (!d.images || d.images.length === 0) continue;
    const { data, error } = await sb.from('listings')
      .update({ photos: d.images })
      .eq('title', d.title)
      .select('id');
    if (error) { err++; console.error(d.title, error.message); }
    else if (!data || data.length === 0) { miss++; }
    else ok++;
  }
  console.log(`✅ ${ok} updated, 🔍 ${miss} not found in DB, ❌ ${err} errors`);
})();
