// ============== FIREBASE INIT (with offline demo fallback) ==============
let db = null, auth = null, useFirebase = false;
try {
  if (window.firebaseConfig && window.firebaseConfig.apiKey !== 'YOUR_API_KEY') {
    firebase.initializeApp(window.firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    useFirebase = true;
  }
} catch (e) { console.warn('Firebase not configured, using demo mode', e); }

// ============== DEMO DATA (works without Firebase) ==============
const DEMO_LISTINGS = [
  // ── DAR ES SALAAM ──
  { id: 'd1', title: 'Nyumba ya vyumba 3 Mikocheni B', city: 'Dar es Salaam', area: 'Mikocheni B',
    bedrooms: 3, bathrooms: 2, price: 800000, type: 'house',
    description: 'Nyumba nzuri yenye maji ya bomba, umeme wa LUKU, parking ya gari mbili, fence na getti la chuma.',
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
    lat: -6.7610, lng: 39.2553, whatsapp: '255712345678', ownerId: 'demo' },
  { id: 'd2', title: 'Self contained Sinza Mori', city: 'Dar es Salaam', area: 'Sinza',
    bedrooms: 1, bathrooms: 1, price: 250000, type: 'self',
    description: 'Self contained safi, eneo la utulivu, karibu na daladala stand.',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    lat: -6.7707, lng: 39.2156, whatsapp: '255712345679', ownerId: 'demo' },
  { id: 'd3', title: 'Apartment Masaki - sea view', city: 'Dar es Salaam', area: 'Masaki',
    bedrooms: 2, bathrooms: 2, price: 2500000, type: 'apartment',
    description: 'Apartment ya kifahari ghorofa ya 5, generator, lift, security 24/7, bahari mbele.',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
    lat: -6.7457, lng: 39.2807, whatsapp: '255712345680', ownerId: 'demo' },
  { id: 'd5', title: 'Chumba kimoja Kariakoo', city: 'Dar es Salaam', area: 'Kariakoo',
    bedrooms: 1, bathrooms: 1, price: 150000, type: 'room',
    description: 'Karibu na soko la Kariakoo, transport rahisi, maji na umeme.',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    lat: -6.8161, lng: 39.2724, whatsapp: '255712345682', ownerId: 'demo' },
  { id: 'd7', title: 'Vyumba 4 Mbezi Beach', city: 'Dar es Salaam', area: 'Mbezi Beach',
    bedrooms: 4, bathrooms: 3, price: 1500000, type: 'house',
    description: 'Nyumba kubwa ya familia, swimming pool, generator, gardener, mlinzi.',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    lat: -6.7180, lng: 39.2310, whatsapp: '255713111201', ownerId: 'demo' },
  { id: 'd8', title: 'Apartment Upanga - mji mzima', city: 'Dar es Salaam', area: 'Upanga',
    bedrooms: 2, bathrooms: 2, price: 1200000, type: 'apartment',
    description: 'Karibu na hospitali, shule, na ofisi. Lift, mlinzi 24/7, parking.',
    images: ['https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800'],
    lat: -6.8090, lng: 39.2820, whatsapp: '255713111202', ownerId: 'demo' },
  { id: 'd9', title: 'Self contained Tegeta', city: 'Dar es Salaam', area: 'Tegeta',
    bedrooms: 1, bathrooms: 1, price: 180000, type: 'self',
    description: 'Mpya kabisa, maji ya bomba, umeme wa LUKU, karibu na daladala.',
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'],
    lat: -6.6520, lng: 39.1880, whatsapp: '255713111203', ownerId: 'demo' },
  { id: 'd10', title: 'Nyumba 3BR Kinondoni Mkwajuni', city: 'Dar es Salaam', area: 'Kinondoni',
    bedrooms: 3, bathrooms: 2, price: 700000, type: 'house',
    description: 'Eneo la utulivu, parking, fence, karibu na shule za msingi na sekondari.',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'],
    lat: -6.7740, lng: 39.2400, whatsapp: '255713111204', ownerId: 'demo' },
  { id: 'd11', title: 'Apartment Oysterbay luxury', city: 'Dar es Salaam', area: 'Oysterbay',
    bedrooms: 3, bathrooms: 3, price: 3500000, type: 'apartment',
    description: 'Penthouse, view ya bahari, swimming pool ya juu, gym, parking 2.',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    lat: -6.7530, lng: 39.2890, whatsapp: '255713111205', ownerId: 'demo' },
  { id: 'd12', title: 'Chumba Magomeni Mwembechai', city: 'Dar es Salaam', area: 'Magomeni',
    bedrooms: 1, bathrooms: 1, price: 120000, type: 'room',
    description: 'Bei nafuu, karibu na barabara kuu, maji na umeme tayari.',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800'],
    lat: -6.8030, lng: 39.2540, whatsapp: '255713111206', ownerId: 'demo' },
  { id: 'd13', title: 'Ofisi Posta City Centre', city: 'Dar es Salaam', area: 'Posta',
    bedrooms: 0, bathrooms: 1, price: 1800000, type: 'commercial',
    description: 'Ofisi mpya ghorofa ya 3, AC, lift, parking, internet fiber.',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    lat: -6.8170, lng: 39.2895, whatsapp: '255713111207', ownerId: 'demo' },
  { id: 'd14', title: 'Nyumba Kigamboni 2BR', city: 'Dar es Salaam', area: 'Kigamboni',
    bedrooms: 2, bathrooms: 1, price: 350000, type: 'house',
    description: 'Karibu na bahari, hewa safi, parking, fence ndogo.',
    images: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800'],
    lat: -6.8470, lng: 39.3140, whatsapp: '255713111208', ownerId: 'demo' },
  { id: 'd15', title: 'Self Tabata Kimanga', city: 'Dar es Salaam', area: 'Tabata',
    bedrooms: 1, bathrooms: 1, price: 200000, type: 'self',
    description: 'Karibu na bus stand, maji ya bomba, umeme, security gate.',
    images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800'],
    lat: -6.8390, lng: 39.2210, whatsapp: '255713111209', ownerId: 'demo' },

  // ── ARUSHA ──
  { id: 'd4', title: 'Nyumba ya vyumba 2 Njiro', city: 'Arusha', area: 'Njiro',
    bedrooms: 2, bathrooms: 1, price: 400000, type: 'house',
    description: 'Nyumba ya familia, bustani ndogo, maji ya kisima na bomba.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    lat: -3.4039, lng: 36.7059, whatsapp: '255712345681', ownerId: 'demo' },
  { id: 'd16', title: 'Apartment Sakina Arusha', city: 'Arusha', area: 'Sakina',
    bedrooms: 2, bathrooms: 2, price: 550000, type: 'apartment',
    description: 'Karibu na ofisi za UN na NGOs, parking, mlinzi 24/7.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    lat: -3.3680, lng: 36.6820, whatsapp: '255713111210', ownerId: 'demo' },

  // ── DODOMA ──
  { id: 'd6', title: 'Apartment Dodoma City', city: 'Dodoma', area: 'Area C',
    bedrooms: 2, bathrooms: 2, price: 600000, type: 'apartment',
    description: 'Karibu na ofisi za serikali, parking, mlinzi.',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    lat: -6.1729, lng: 35.7516, whatsapp: '255712345683', ownerId: 'demo' },
  { id: 'd17', title: 'Nyumba 3BR Dodoma Area D', city: 'Dodoma', area: 'Area D',
    bedrooms: 3, bathrooms: 2, price: 450000, type: 'house',
    description: 'Karibu na bunge na ofisi za serikali, parking 2, fence.',
    images: ['https://images.unsplash.com/photo-1600573472556-e636c2acda88?w=800'],
    lat: -6.1820, lng: 35.7460, whatsapp: '255713111211', ownerId: 'demo' },

  // ── MWANZA ──
  { id: 'd18', title: 'Apartment Mwanza Capripoint', city: 'Mwanza', area: 'Capripoint',
    bedrooms: 2, bathrooms: 2, price: 500000, type: 'apartment',
    description: 'View ya Ziwa Victoria, parking, mlinzi, karibu na mji.',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    lat: -2.5160, lng: 32.9170, whatsapp: '255713111212', ownerId: 'demo' },
  { id: 'd19', title: 'Nyumba Mwanza Nyamagana', city: 'Mwanza', area: 'Nyamagana',
    bedrooms: 3, bathrooms: 2, price: 350000, type: 'house',
    description: 'Karibu na soko na hospitali, parking, maji na umeme tayari.',
    images: ['https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'],
    lat: -2.5290, lng: 32.9000, whatsapp: '255713111213', ownerId: 'demo' },

  // ── MBEYA ──
  { id: 'd20', title: 'Nyumba 2BR Mbeya Iyunga', city: 'Mbeya', area: 'Iyunga',
    bedrooms: 2, bathrooms: 1, price: 280000, type: 'house',
    description: 'Hewa baridi, eneo la utulivu, parking, fence.',
    images: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800'],
    lat: -8.9090, lng: 33.4540, whatsapp: '255713111214', ownerId: 'demo' },

  // ── ZANZIBAR ──
  { id: 'd21', title: 'Apartment Zanzibar Stone Town', city: 'Zanzibar', area: 'Stone Town',
    bedrooms: 1, bathrooms: 1, price: 700000, type: 'apartment',
    description: 'Stone Town historic, karibu na bahari, AC, fully furnished.',
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
    lat: -6.1631, lng: 39.1898, whatsapp: '255713111215', ownerId: 'demo' },
  { id: 'd22', title: 'Villa Nungwi Zanzibar', city: 'Zanzibar', area: 'Nungwi',
    bedrooms: 3, bathrooms: 3, price: 2000000, type: 'house',
    description: 'Beach villa, bahari mbele, swimming pool, fully furnished.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    lat: -5.7270, lng: 39.2980, whatsapp: '255713111216', ownerId: 'demo' }
];

let allListings = [...DEMO_LISTINGS];
let currentUser = null;
let favorites = JSON.parse(localStorage.getItem('nodalali_favs') || '[]');
let mapInstance = null;
let mapMarkers = [];

// ============== TABS ==============
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    const view = document.getElementById(tab.dataset.tab);
    view.classList.add('active');
    if (tab.dataset.tab === 'map') setTimeout(initMap, 100);
    if (tab.dataset.tab === 'favorites') renderFavorites();
    if (tab.dataset.tab === 'my-listings') renderMyListings();
  });
});

// ============== RENDER LISTINGS ==============
function formatPrice(p) {
  return 'TZS ' + Number(p).toLocaleString('en-US') + '/mwezi';
}

function listingCard(l) {
  const img = (l.images && l.images[0]) || 'icon.svg';
  const isFav = favorites.includes(l.id);
  return `
    <div class="card" onclick="openDetail('${l.id}')">
      <div class="card-image" style="background-image:url('${img}')">
        <span class="card-badge">${l.type}</span>
        <button class="card-fav" onclick="event.stopPropagation();toggleFav('${l.id}')">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="card-body">
        <div class="card-price">${formatPrice(l.price)}</div>
        <div class="card-title">${l.title}</div>
        <div class="card-meta">
          <span>📍 ${l.area}, ${l.city}</span>
        </div>
        <div class="card-meta">
          <span>🛏 ${l.bedrooms}</span>
          <span>🚿 ${l.bathrooms}</span>
        </div>
      </div>
    </div>
  `;
}

function renderListings() {
  const city = document.getElementById('searchCity').value.toLowerCase();
  const beds = document.getElementById('filterBedrooms').value;
  const maxPrice = document.getElementById('filterPrice').value;

  const filtered = allListings.filter(l => {
    if (city && !(`${l.city} ${l.area}`.toLowerCase().includes(city))) return false;
    if (beds && (beds === '4' ? l.bedrooms < 4 : l.bedrooms != beds)) return false;
    if (maxPrice && l.price > Number(maxPrice)) return false;
    return true;
  });

  const grid = document.getElementById('listingsGrid');
  grid.innerHTML = filtered.length
    ? filtered.map(listingCard).join('')
    : '<div class="empty">Hakuna nyumba zilizopatikana. Jaribu vichujio vingine.</div>';
}

['searchCity', 'filterBedrooms', 'filterPrice'].forEach(id => {
  document.getElementById(id).addEventListener('input', renderListings);
});

// ============== FAVORITES ==============
function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) { favorites.splice(idx, 1); toast('Imeondolewa kwa pendwa'); }
  else { favorites.push(id); toast('Imeongezwa kwa pendwa ❤️'); }
  localStorage.setItem('nodalali_favs', JSON.stringify(favorites));
  renderListings();
  renderFavorites();
}

function renderFavorites() {
  const favs = allListings.filter(l => favorites.includes(l.id));
  const grid = document.getElementById('favoritesGrid');
  grid.innerHTML = favs.length
    ? favs.map(listingCard).join('')
    : '<div class="empty">Bado hujaweka nyumba yoyote pendwa.</div>';
}

// ============== MY LISTINGS ==============
function renderMyListings() {
  const grid = document.getElementById('myListingsGrid');
  if (!currentUser) {
    grid.innerHTML = '<div class="empty">Ingia kwanza ili uone matangazo yako.</div>';
    return;
  }
  const mine = allListings.filter(l => l.ownerId === currentUser.uid);
  grid.innerHTML = mine.length
    ? mine.map(listingCard).join('')
    : '<div class="empty">Bado hujatangaza nyumba. Bonyeza "Tangaza" kuanza.</div>';
}

// ============== DETAIL MODAL ==============
function openDetail(id) {
  const l = allListings.find(x => x.id === id);
  if (!l) return;
  const wa = l.whatsapp.replace(/\D/g, '');
  const msg = encodeURIComponent(`Habari, nimevutiwa na nyumba yako "${l.title}" kwenye Nodalali.`);
  document.getElementById('detailBody').innerHTML = `
    <img src="${(l.images && l.images[0]) || 'icon.svg'}" class="detail-img" />
    <div class="card-price">${formatPrice(l.price)}</div>
    <h2 style="margin:8px 0">${l.title}</h2>
    <p class="hint">📍 ${l.area}, ${l.city}</p>
    <div class="card-meta">
      <span>🛏 Vyumba ${l.bedrooms}</span>
      <span>🚿 Bafu ${l.bathrooms}</span>
      <span>🏷 ${l.type}</span>
    </div>
    <p style="margin:16px 0;line-height:1.5">${l.description || ''}</p>
    <div class="contact-row">
      <a href="https://wa.me/${wa}?text=${msg}" target="_blank" class="btn-wa">💬 WhatsApp</a>
      <a href="tel:+${wa}" class="btn-call">📞 Piga simu</a>
    </div>
    <p class="hint" style="margin-top:12px">⚠️ Hakikisha unaona nyumba kwanza kabla ya kulipa chochote.</p>
  `;
  document.getElementById('detailModal').classList.add('open');
}
function closeDetail() { document.getElementById('detailModal').classList.remove('open'); }

// ============== MAP ==============
function initMap() {
  if (mapInstance) { mapInstance.invalidateSize(); return; }
  mapInstance = L.map('leafletMap').setView([-6.7924, 39.2083], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(mapInstance);
  refreshMapMarkers();
}

function refreshMapMarkers() {
  if (!mapInstance) return;
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];
  allListings.filter(l => l.lat && l.lng).forEach(l => {
    const marker = L.marker([l.lat, l.lng]).addTo(mapInstance);
    marker.bindPopup(`
      <strong>${l.title}</strong><br>
      ${formatPrice(l.price)}<br>
      <a href="#" onclick="closeDetail();openDetail('${l.id}');return false;">Ona zaidi →</a>
    `);
    mapMarkers.push(marker);
  });
}

// ============== IMAGE UPLOAD ==============
let uploadedImages = [];

const imageUploadInput = document.getElementById('imageUpload');
const imagePreviewEl = document.getElementById('imagePreview');

if (imageUploadInput) {
  imageUploadInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files).slice(0, 5 - uploadedImages.length);
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) { toast('Picha kubwa sana (max 5MB): ' + file.name); continue; }
      const compressed = await compressImage(file);
      uploadedImages.push(compressed);
    }
    renderImagePreviews();
    e.target.value = '';
  });
}

function renderImagePreviews() {
  if (!imagePreviewEl) return;
  imagePreviewEl.innerHTML = uploadedImages.map((src, i) => `
    <div class="thumb" style="background-image:url('${src}')">
      <button type="button" onclick="removeImage(${i})">✕</button>
    </div>
  `).join('');
}
window.removeImage = (i) => { uploadedImages.splice(i, 1); renderImagePreviews(); };

function compressImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const max = 1200;
        let w = img.width, h = img.height;
        if (w > h && w > max) { h = h * max / w; w = max; }
        else if (h > max) { w = w * max / h; h = max; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ============== POST LISTING ==============
document.getElementById('listingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUser) { toast('Ingia kwanza ili kutangaza'); openAuth(); return; }
  const fd = new FormData(e.target);
  const listing = {
    title: fd.get('title'),
    city: fd.get('city'),
    area: fd.get('area'),
    bedrooms: Number(fd.get('bedrooms')),
    bathrooms: Number(fd.get('bathrooms')),
    price: Number(fd.get('price')),
    type: fd.get('type'),
    description: fd.get('description'),
    images: [...uploadedImages],
    lat: fd.get('lat') ? Number(fd.get('lat')) : null,
    lng: fd.get('lng') ? Number(fd.get('lng')) : null,
    whatsapp: fd.get('whatsapp'),
    ownerId: currentUser.uid,
    createdAt: Date.now(),
    verified: false,
    paid: false
  };

  if (useFirebase) {
    try {
      const ref = await db.collection('listings').add(listing);
      listing.id = ref.id;
    } catch (err) { toast('Hitilafu: ' + err.message); return; }
  } else {
    listing.id = 'l' + Date.now();
  }

  allListings.unshift(listing);
  e.target.reset();
  uploadedImages = [];
  renderImagePreviews();
  document.querySelector('[data-tab="browse"]').click();
  renderListings();
  refreshMapMarkers();
  promptPayment(listing.id, listing.whatsapp);
});

// ============== M-PESA PAYMENT ==============
async function promptPayment(listingId, defaultPhone) {
  const phone = prompt('Lipa TZS 5,000 kupitia M-Pesa/Tigo Pesa/Airtel Money.\n\nIngiza namba ya simu (255...):', defaultPhone || '255');
  if (!phone) return toast('Tangazo limehifadhiwa lakini halijalipiwa.');
  toast('Inatuma ombi la malipo...');
  try {
    const r = await fetch('/api/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone, listingId, plan: 'listing',
        userId: currentUser?.uid || 'guest'
      })
    });
    const data = await r.json();
    if (data.success) {
      toast(data.simulated
        ? '✅ Demo: malipo yamefaulu (TZS 5,000)'
        : '✅ Angalia simu yako kuthibitisha malipo');
    } else {
      toast('❌ Hitilafu: ' + (data.error || 'jaribu tena'));
    }
  } catch (e) {
    toast('❌ Mtandao tatizo: ' + e.message);
  }
}

// ============== AUTH ==============
const authModal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');
const authForm = document.getElementById('authForm');
const authTitle = document.getElementById('authTitle');
const toggleAuth = document.getElementById('toggleAuth');
let isSignup = false;

function openAuth() { authModal.classList.add('open'); }
function closeAuth() { authModal.classList.remove('open'); }
function openSupport() { document.getElementById('supportModal').classList.add('open'); }
function closeSupport() { document.getElementById('supportModal').classList.remove('open'); }
window.openSupport = openSupport;
window.closeSupport = closeSupport;
window.closeAuth = closeAuth;
window.closeDetail = closeDetail;
window.openDetail = openDetail;
window.toggleFav = toggleFav;

authBtn.addEventListener('click', () => {
  if (currentUser) {
    if (useFirebase) auth.signOut();
    else { currentUser = null; authBtn.textContent = 'Ingia'; toast('Umetoka'); }
  } else openAuth();
});

toggleAuth.addEventListener('click', (e) => {
  e.preventDefault();
  isSignup = !isSignup;
  authTitle.textContent = isSignup ? 'Jisajili' : 'Ingia';
  toggleAuth.textContent = isSignup ? 'Una akaunti? Ingia' : 'Huna akaunti? Jisajili';
});

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const email = fd.get('email');
  const password = fd.get('password');
  if (useFirebase) {
    try {
      if (isSignup) await auth.createUserWithEmailAndPassword(email, password);
      else await auth.signInWithEmailAndPassword(email, password);
    } catch (err) { toast('Hitilafu: ' + err.message); return; }
  } else {
    currentUser = { uid: 'demo-' + email, email };
    authBtn.textContent = email.split('@')[0];
    toast(isSignup ? 'Umejisajili!' : 'Karibu!');
  }
  closeAuth();
  e.target.reset();
});

if (useFirebase) {
  auth.onAuthStateChanged(user => {
    currentUser = user;
    authBtn.textContent = user ? user.email.split('@')[0] : 'Ingia';
    if (user) loadFirebaseListings();
  });
}

async function loadFirebaseListings() {
  try {
    const snap = await db.collection('listings').orderBy('createdAt', 'desc').get();
    const fbListings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    allListings = [...fbListings, ...DEMO_LISTINGS];
    renderListings();
    refreshMapMarkers();
  } catch (e) { console.warn(e); }
}

// ============== TOAST ==============
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ============== SERVICE WORKER ==============
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ============== INITIAL RENDER ==============
renderListings();
