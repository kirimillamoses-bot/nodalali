// ============== I18N (20 languages) ==============
const LANGUAGES = [
  { code: 'sw', name: 'Kiswahili',  flag: '🇹🇿' },
  { code: 'en', name: 'English',    flag: '🇬🇧' },
  { code: 'fr', name: 'Français',   flag: '🇫🇷' },
  { code: 'es', name: 'Español',    flag: '🇪🇸' },
  { code: 'pt', name: 'Português',  flag: '🇵🇹' },
  { code: 'de', name: 'Deutsch',    flag: '🇩🇪' },
  { code: 'it', name: 'Italiano',   flag: '🇮🇹' },
  { code: 'ar', name: 'العربية',     flag: '🇸🇦' },
  { code: 'zh', name: '中文',         flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी',         flag: '🇮🇳' },
  { code: 'ja', name: '日本語',        flag: '🇯🇵' },
  { code: 'ko', name: '한국어',         flag: '🇰🇷' },
  { code: 'ru', name: 'Русский',     flag: '🇷🇺' },
  { code: 'tr', name: 'Türkçe',      flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands',  flag: '🇳🇱' },
  { code: 'pl', name: 'Polski',      flag: '🇵🇱' },
  { code: 'fa', name: 'فارسی',        flag: '🇮🇷' },
  { code: 'id', name: 'Indonesia',   flag: '🇮🇩' },
  { code: 'vi', name: 'Tiếng Việt',  flag: '🇻🇳' },
  { code: 'th', name: 'ไทย',          flag: '🇹🇭' }
];

const I18N = {
  sw: { tagline:'Pangisha bila dalali 🇹🇿', login:'Ingia', logout:'Toka', search:'🔍 Tafuta', map:'🗺️ Ramani', favorites:'❤️ Pendwa', nearme:'📍 Karibu Nami', students:'🎓 Wanafunzi', mine:'🏠 Zangu', post:'➕ Tangaza', showMap:'🗺️ Onyesha Ramani', hideMap:'✕ Ficha Ramani', perMonth:'/mwezi', perNight:'/usiku', book:'📅 Book Sasa', leaveReview:'Toa Review', rateThis:'Toa kura yako', submit:'Wasilisha', bookNow:'Book Sasa', checkIn:'Tarehe ya kuingia', checkOut:'Tarehe ya kutoka', nights:'usiku', total:'Jumla', yourName:'Jina lako', phone:'Simu (255...)', translate:'🌐 Tafsiri', original:'Onyesha asili' },
  en: { tagline:'Rent without brokers 🇹🇿', login:'Sign in', logout:'Sign out', search:'🔍 Search', map:'🗺️ Map', favorites:'❤️ Saved', nearme:'📍 Near Me', students:'🎓 Students', mine:'🏠 Mine', post:'➕ Post', showMap:'🗺️ Show Map', hideMap:'✕ Hide Map', perMonth:'/month', perNight:'/night', book:'📅 Book Now', leaveReview:'Leave Review', rateThis:'Rate this', submit:'Submit', bookNow:'Book Now', checkIn:'Check-in', checkOut:'Check-out', nights:'nights', total:'Total', yourName:'Your name', phone:'Phone (255...)', translate:'🌐 Translate', original:'Show original' },
  fr: { tagline:'Louer sans intermédiaires 🇹🇿', login:'Connexion', logout:'Déconnexion', search:'🔍 Rechercher', map:'🗺️ Carte', favorites:'❤️ Favoris', nearme:'📍 Près de moi', students:'🎓 Étudiants', mine:'🏠 Mes biens', post:'➕ Publier', showMap:'🗺️ Voir carte', hideMap:'✕ Masquer carte', perMonth:'/mois', perNight:'/nuit', book:'📅 Réserver', leaveReview:'Donner avis', rateThis:'Notez', submit:'Envoyer', bookNow:'Réserver', checkIn:'Arrivée', checkOut:'Départ', nights:'nuits', total:'Total', yourName:'Votre nom', phone:'Téléphone (255...)', translate:'🌐 Traduire', original:'Voir original' },
  es: { tagline:'Alquila sin intermediarios 🇹🇿', login:'Entrar', logout:'Salir', search:'🔍 Buscar', map:'🗺️ Mapa', favorites:'❤️ Favoritos', nearme:'📍 Cerca de mí', students:'🎓 Estudiantes', mine:'🏠 Míos', post:'➕ Publicar', showMap:'🗺️ Ver mapa', hideMap:'✕ Ocultar mapa', perMonth:'/mes', perNight:'/noche', book:'📅 Reservar', leaveReview:'Dejar reseña', rateThis:'Calificar', submit:'Enviar', bookNow:'Reservar', checkIn:'Llegada', checkOut:'Salida', nights:'noches', total:'Total', yourName:'Tu nombre', phone:'Teléfono (255...)', translate:'🌐 Traducir', original:'Ver original' },
  pt: { tagline:'Alugue sem intermediários 🇹🇿', login:'Entrar', logout:'Sair', search:'🔍 Pesquisar', map:'🗺️ Mapa', favorites:'❤️ Favoritos', nearme:'📍 Perto de mim', students:'🎓 Estudantes', mine:'🏠 Meus', post:'➕ Publicar', showMap:'🗺️ Ver mapa', hideMap:'✕ Ocultar', perMonth:'/mês', perNight:'/noite', book:'📅 Reservar', leaveReview:'Avaliar', rateThis:'Avalie', submit:'Enviar', bookNow:'Reservar', checkIn:'Check-in', checkOut:'Check-out', nights:'noites', total:'Total', yourName:'Seu nome', phone:'Telefone (255...)', translate:'🌐 Traduzir', original:'Ver original' },
  de: { tagline:'Mieten ohne Makler 🇹🇿', login:'Anmelden', logout:'Abmelden', search:'🔍 Suchen', map:'🗺️ Karte', favorites:'❤️ Favoriten', nearme:'📍 In der Nähe', students:'🎓 Studenten', mine:'🏠 Meine', post:'➕ Inserieren', showMap:'🗺️ Karte zeigen', hideMap:'✕ Karte ausblenden', perMonth:'/Monat', perNight:'/Nacht', book:'📅 Buchen', leaveReview:'Bewerten', rateThis:'Bewerten', submit:'Senden', bookNow:'Buchen', checkIn:'Anreise', checkOut:'Abreise', nights:'Nächte', total:'Gesamt', yourName:'Ihr Name', phone:'Telefon (255...)', translate:'🌐 Übersetzen', original:'Original anzeigen' },
  it: { tagline:'Affitta senza intermediari 🇹🇿', login:'Accedi', logout:'Esci', search:'🔍 Cerca', map:'🗺️ Mappa', favorites:'❤️ Preferiti', nearme:'📍 Vicino a me', students:'🎓 Studenti', mine:'🏠 I miei', post:'➕ Pubblica', showMap:'🗺️ Mostra mappa', hideMap:'✕ Nascondi mappa', perMonth:'/mese', perNight:'/notte', book:'📅 Prenota', leaveReview:'Recensione', rateThis:'Valuta', submit:'Invia', bookNow:'Prenota', checkIn:'Check-in', checkOut:'Check-out', nights:'notti', total:'Totale', yourName:'Il tuo nome', phone:'Telefono (255...)', translate:'🌐 Traduci', original:'Mostra originale' },
  ar: { tagline:'إيجار بدون وسطاء 🇹🇿', login:'تسجيل دخول', logout:'خروج', search:'🔍 بحث', map:'🗺️ خريطة', favorites:'❤️ المفضلة', nearme:'📍 بالقرب مني', students:'🎓 طلاب', mine:'🏠 ملكي', post:'➕ نشر', showMap:'🗺️ إظهار الخريطة', hideMap:'✕ إخفاء الخريطة', perMonth:'/شهر', perNight:'/ليلة', book:'📅 احجز', leaveReview:'اترك تقييم', rateThis:'قيّم', submit:'إرسال', bookNow:'احجز الآن', checkIn:'تسجيل الوصول', checkOut:'تسجيل المغادرة', nights:'ليالي', total:'الإجمالي', yourName:'اسمك', phone:'هاتف (255...)', translate:'🌐 ترجم', original:'الأصل' },
  zh: { tagline:'无中介租房 🇹🇿', login:'登录', logout:'退出', search:'🔍 搜索', map:'🗺️ 地图', favorites:'❤️ 收藏', nearme:'📍 附近', students:'🎓 学生', mine:'🏠 我的', post:'➕ 发布', showMap:'🗺️ 显示地图', hideMap:'✕ 隐藏地图', perMonth:'/月', perNight:'/晚', book:'📅 预订', leaveReview:'写评论', rateThis:'评分', submit:'提交', bookNow:'立即预订', checkIn:'入住', checkOut:'退房', nights:'晚', total:'总计', yourName:'您的姓名', phone:'电话 (255...)', translate:'🌐 翻译', original:'显示原文' },
  hi: { tagline:'बिना दलाल किराए पर 🇹🇿', login:'साइन इन', logout:'साइन आउट', search:'🔍 खोजें', map:'🗺️ नक्शा', favorites:'❤️ पसंदीदा', nearme:'📍 मेरे पास', students:'🎓 छात्र', mine:'🏠 मेरे', post:'➕ पोस्ट', showMap:'🗺️ नक्शा दिखाएं', hideMap:'✕ नक्शा छिपाएं', perMonth:'/माह', perNight:'/रात', book:'📅 बुक करें', leaveReview:'समीक्षा दें', rateThis:'रेट करें', submit:'जमा करें', bookNow:'अभी बुक करें', checkIn:'चेक-इन', checkOut:'चेक-आउट', nights:'रात', total:'कुल', yourName:'आपका नाम', phone:'फोन (255...)', translate:'🌐 अनुवाद', original:'मूल दिखाएं' },
  ja: { tagline:'仲介なしで賃貸 🇹🇿', login:'ログイン', logout:'ログアウト', search:'🔍 検索', map:'🗺️ 地図', favorites:'❤️ お気に入り', nearme:'📍 近くの', students:'🎓 学生', mine:'🏠 マイ', post:'➕ 投稿', showMap:'🗺️ 地図を表示', hideMap:'✕ 地図を隠す', perMonth:'/月', perNight:'/泊', book:'📅 予約', leaveReview:'レビュー', rateThis:'評価', submit:'送信', bookNow:'予約する', checkIn:'チェックイン', checkOut:'チェックアウト', nights:'泊', total:'合計', yourName:'お名前', phone:'電話 (255...)', translate:'🌐 翻訳', original:'原文を表示' },
  ko: { tagline:'중개인 없이 임대 🇹🇿', login:'로그인', logout:'로그아웃', search:'🔍 검색', map:'🗺️ 지도', favorites:'❤️ 즐겨찾기', nearme:'📍 내 근처', students:'🎓 학생', mine:'🏠 내 것', post:'➕ 게시', showMap:'🗺️ 지도 보기', hideMap:'✕ 지도 숨기기', perMonth:'/월', perNight:'/박', book:'📅 예약', leaveReview:'리뷰 작성', rateThis:'평가', submit:'제출', bookNow:'지금 예약', checkIn:'체크인', checkOut:'체크아웃', nights:'박', total:'총계', yourName:'이름', phone:'전화 (255...)', translate:'🌐 번역', original:'원본 보기' },
  ru: { tagline:'Аренда без посредников 🇹🇿', login:'Войти', logout:'Выйти', search:'🔍 Поиск', map:'🗺️ Карта', favorites:'❤️ Избранное', nearme:'📍 Рядом', students:'🎓 Студенты', mine:'🏠 Мои', post:'➕ Разместить', showMap:'🗺️ Карта', hideMap:'✕ Скрыть', perMonth:'/мес', perNight:'/ночь', book:'📅 Забронировать', leaveReview:'Оставить отзыв', rateThis:'Оценить', submit:'Отправить', bookNow:'Забронировать', checkIn:'Заезд', checkOut:'Выезд', nights:'ночей', total:'Итого', yourName:'Ваше имя', phone:'Телефон (255...)', translate:'🌐 Перевести', original:'Оригинал' },
  tr: { tagline:'Aracısız kiralayın 🇹🇿', login:'Giriş', logout:'Çıkış', search:'🔍 Ara', map:'🗺️ Harita', favorites:'❤️ Favoriler', nearme:'📍 Yakınımda', students:'🎓 Öğrenciler', mine:'🏠 Benim', post:'➕ İlan ver', showMap:'🗺️ Harita göster', hideMap:'✕ Haritayı gizle', perMonth:'/ay', perNight:'/gece', book:'📅 Rezervasyon', leaveReview:'Yorum yap', rateThis:'Puanla', submit:'Gönder', bookNow:'Rezerve et', checkIn:'Giriş', checkOut:'Çıkış', nights:'gece', total:'Toplam', yourName:'Adınız', phone:'Telefon (255...)', translate:'🌐 Çevir', original:'Orijinali göster' },
  nl: { tagline:'Huren zonder makelaars 🇹🇿', login:'Inloggen', logout:'Uitloggen', search:'🔍 Zoeken', map:'🗺️ Kaart', favorites:'❤️ Favorieten', nearme:'📍 Dichtbij', students:'🎓 Studenten', mine:'🏠 Mijn', post:'➕ Plaatsen', showMap:'🗺️ Kaart tonen', hideMap:'✕ Kaart verbergen', perMonth:'/maand', perNight:'/nacht', book:'📅 Boek', leaveReview:'Beoordeel', rateThis:'Beoordeel', submit:'Verstuur', bookNow:'Nu boeken', checkIn:'Check-in', checkOut:'Check-out', nights:'nachten', total:'Totaal', yourName:'Uw naam', phone:'Telefoon (255...)', translate:'🌐 Vertaal', original:'Origineel' },
  pl: { tagline:'Wynajem bez pośredników 🇹🇿', login:'Zaloguj', logout:'Wyloguj', search:'🔍 Szukaj', map:'🗺️ Mapa', favorites:'❤️ Ulubione', nearme:'📍 Blisko mnie', students:'🎓 Studenci', mine:'🏠 Moje', post:'➕ Dodaj', showMap:'🗺️ Pokaż mapę', hideMap:'✕ Ukryj mapę', perMonth:'/miesiąc', perNight:'/noc', book:'📅 Rezerwuj', leaveReview:'Dodaj opinię', rateThis:'Oceń', submit:'Wyślij', bookNow:'Zarezerwuj', checkIn:'Zameldowanie', checkOut:'Wymeldowanie', nights:'nocy', total:'Razem', yourName:'Twoje imię', phone:'Telefon (255...)', translate:'🌐 Tłumacz', original:'Oryginał' },
  fa: { tagline:'اجاره بدون واسطه 🇹🇿', login:'ورود', logout:'خروج', search:'🔍 جستجو', map:'🗺️ نقشه', favorites:'❤️ علاقه‌مندی‌ها', nearme:'📍 نزدیک من', students:'🎓 دانشجویان', mine:'🏠 موارد من', post:'➕ ثبت آگهی', showMap:'🗺️ نمایش نقشه', hideMap:'✕ پنهان کردن', perMonth:'/ماه', perNight:'/شب', book:'📅 رزرو', leaveReview:'نظر دادن', rateThis:'امتیاز دهید', submit:'ارسال', bookNow:'هم اکنون رزرو کنید', checkIn:'ورود', checkOut:'خروج', nights:'شب', total:'مجموع', yourName:'نام شما', phone:'تلفن (255...)', translate:'🌐 ترجمه', original:'متن اصلی' },
  id: { tagline:'Sewa tanpa perantara 🇹🇿', login:'Masuk', logout:'Keluar', search:'🔍 Cari', map:'🗺️ Peta', favorites:'❤️ Favorit', nearme:'📍 Dekat saya', students:'🎓 Pelajar', mine:'🏠 Milik saya', post:'➕ Pasang', showMap:'🗺️ Tampilkan peta', hideMap:'✕ Sembunyikan', perMonth:'/bulan', perNight:'/malam', book:'📅 Pesan', leaveReview:'Beri ulasan', rateThis:'Nilai', submit:'Kirim', bookNow:'Pesan sekarang', checkIn:'Masuk', checkOut:'Keluar', nights:'malam', total:'Total', yourName:'Nama Anda', phone:'Telepon (255...)', translate:'🌐 Terjemah', original:'Asli' },
  vi: { tagline:'Thuê không qua môi giới 🇹🇿', login:'Đăng nhập', logout:'Đăng xuất', search:'🔍 Tìm kiếm', map:'🗺️ Bản đồ', favorites:'❤️ Yêu thích', nearme:'📍 Gần tôi', students:'🎓 Sinh viên', mine:'🏠 Của tôi', post:'➕ Đăng', showMap:'🗺️ Hiện bản đồ', hideMap:'✕ Ẩn bản đồ', perMonth:'/tháng', perNight:'/đêm', book:'📅 Đặt', leaveReview:'Đánh giá', rateThis:'Đánh giá', submit:'Gửi', bookNow:'Đặt ngay', checkIn:'Nhận phòng', checkOut:'Trả phòng', nights:'đêm', total:'Tổng', yourName:'Tên của bạn', phone:'Điện thoại (255...)', translate:'🌐 Dịch', original:'Bản gốc' },
  th: { tagline:'เช่าโดยไม่ผ่านนายหน้า 🇹🇿', login:'เข้าสู่ระบบ', logout:'ออก', search:'🔍 ค้นหา', map:'🗺️ แผนที่', favorites:'❤️ รายการโปรด', nearme:'📍 ใกล้ฉัน', students:'🎓 นักศึกษา', mine:'🏠 ของฉัน', post:'➕ ลงประกาศ', showMap:'🗺️ แสดงแผนที่', hideMap:'✕ ซ่อนแผนที่', perMonth:'/เดือน', perNight:'/คืน', book:'📅 จอง', leaveReview:'เขียนรีวิว', rateThis:'ให้คะแนน', submit:'ส่ง', bookNow:'จองเลย', checkIn:'เช็คอิน', checkOut:'เช็คเอาท์', nights:'คืน', total:'รวม', yourName:'ชื่อของคุณ', phone:'โทรศัพท์ (255...)', translate:'🌐 แปล', original:'ต้นฉบับ' }
};

let currentLang = localStorage.getItem('nodalali_lang') || 'sw';

function t(key) { return I18N[currentLang][key] || key; }

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[currentLang]?.[key]) el.textContent = I18N[currentLang][key];
  });
  // Tab labels
  const tabMap = {
    browse: 'search', map: 'map', favorites: 'favorites',
    nearme: 'nearme', students: 'students', 'my-listings': 'mine', post: 'post'
  };
  document.querySelectorAll('.tab').forEach(tab => {
    const k = tabMap[tab.dataset.tab];
    if (k) tab.textContent = t(k);
  });
  const authBtn = document.getElementById('authBtn');
  if (authBtn && !currentUser) authBtn.textContent = t('login');
  const lang = LANGUAGES.find(l => l.code === currentLang);
  document.getElementById('langBtn').textContent = lang?.flag || '🌐';
}

function toggleLang() {
  // Build a popup language picker
  const existing = document.getElementById('langModal');
  if (existing) { existing.remove(); return; }
  const modal = document.createElement('div');
  modal.id = 'langModal';
  modal.className = 'modal open';
  modal.innerHTML = `
    <div class="modal-content" style="max-width:420px">
      <button class="modal-close" onclick="document.getElementById('langModal').remove()">✕</button>
      <h2>🌐 Chagua Lugha / Choose Language</h2>
      <div class="lang-grid">
        ${LANGUAGES.map(l => `
          <button class="lang-card ${l.code === currentLang ? 'active' : ''}" onclick="setLang('${l.code}')">
            <div class="lang-flag">${l.flag}</div>
            <div class="lang-name">${l.name}</div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
window.toggleLang = toggleLang;

function setLang(code) {
  currentLang = code;
  localStorage.setItem('nodalali_lang', currentLang);
  applyI18n();
  document.getElementById('langModal')?.remove();
  const lang = LANGUAGES.find(l => l.code === code);
  toast(`${lang.flag} ${lang.name}`);
  // Apply RTL for Arabic & Persian
  document.documentElement.dir = (code === 'ar' || code === 'fa') ? 'rtl' : 'ltr';
  renderListings();
  if (activeCampus) renderCampusListings();
}
window.setLang = setLang;

// ============== THEME (light + dark) ==============
let currentTheme = localStorage.getItem('nodalali_theme') || 'light';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeBtn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('nodalali_theme', currentTheme);
  applyTheme();
  toast(currentTheme === 'dark' ? '🌙 Dark mode' : '☀️ Light mode');
}
window.toggleTheme = toggleTheme;

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
    lat: -5.7270, lng: 39.2980, whatsapp: '255713111216', ownerId: 'demo' },

  // ── STUDENT HOUSING (near universities) ──
  { id: 's1', title: 'Chumba kwa wanafunzi UDSM', city: 'Dar es Salaam', area: 'Mwenge',
    bedrooms: 1, bathrooms: 1, price: 100000, type: 'room',
    description: 'Karibu na UDSM (5 min walking). Maji, umeme LUKU, WiFi optional. Yafaa wanafunzi.',
    images: ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'],
    lat: -6.7720, lng: 39.2200, whatsapp: '255713200001', ownerId: 'demo' },
  { id: 's2', title: 'Self contained Mlimani City', city: 'Dar es Salaam', area: 'Mlimani',
    bedrooms: 1, bathrooms: 1, price: 220000, type: 'self',
    description: 'Karibu na Mlimani City Mall na UDSM. Salama, mlinzi 24/7, parking ya pikipiki.',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    lat: -6.7800, lng: 39.2150, whatsapp: '255713200002', ownerId: 'demo' },
  { id: 's3', title: 'Vyumba 2 Ubungo (Ardhi)', city: 'Dar es Salaam', area: 'Ubungo',
    bedrooms: 2, bathrooms: 1, price: 350000, type: 'house',
    description: 'Karibu na Ardhi University na bus stand ya Ubungo. Inafaa wanafunzi 2-3.',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    lat: -6.7780, lng: 39.2110, whatsapp: '255713200003', ownerId: 'demo' },
  { id: 's4', title: 'Chumba MUHAS Upanga', city: 'Dar es Salaam', area: 'Upanga',
    bedrooms: 1, bathrooms: 1, price: 180000, type: 'room',
    description: 'Karibu na MUHAS na Muhimbili. Inafaa wanafunzi wa udaktari na wauguzi.',
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'],
    lat: -6.8100, lng: 39.2820, whatsapp: '255713200004', ownerId: 'demo' },
  { id: 's5', title: 'Self contained IFM', city: 'Dar es Salaam', area: 'Shaaban Robert',
    bedrooms: 1, bathrooms: 1, price: 250000, type: 'self',
    description: 'Karibu sana na IFM. WiFi, security, parking. Mtaa wa utulivu.',
    images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800'],
    lat: -6.8140, lng: 39.2870, whatsapp: '255713200005', ownerId: 'demo' },
  { id: 's6', title: 'Hostel ya wanafunzi UDOM', city: 'Dodoma', area: 'Chimwaga',
    bedrooms: 1, bathrooms: 1, price: 80000, type: 'room',
    description: 'Hostel ya UDOM, vyumba vya kushiriki au binafsi. Karibu na chuo, transport rahisi.',
    images: ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'],
    lat: -6.1900, lng: 35.7920, whatsapp: '255713200006', ownerId: 'demo' },
  { id: 's7', title: 'Vyumba 3 SUA Mazimbu', city: 'Morogoro', area: 'Mazimbu',
    bedrooms: 3, bathrooms: 2, price: 280000, type: 'house',
    description: 'Karibu na SUA campus. Inafaa wanafunzi 3 wa kushiriki.',
    images: ['https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'],
    lat: -6.8500, lng: 37.6620, whatsapp: '255713200007', ownerId: 'demo' },
  { id: 's8', title: 'Chumba Mzumbe University', city: 'Morogoro', area: 'Mzumbe',
    bedrooms: 1, bathrooms: 1, price: 90000, type: 'room',
    description: 'Karibu sana na Mzumbe University. Bei nafuu, maji na umeme.',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800'],
    lat: -6.9140, lng: 37.4790, whatsapp: '255713200008', ownerId: 'demo' },
  { id: 's9', title: 'Self CBE Dodoma', city: 'Dodoma', area: 'CBE',
    bedrooms: 1, bathrooms: 1, price: 150000, type: 'self',
    description: 'Karibu na CBE Dodoma. Mpya, salama, karibu na bus stand.',
    images: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800'],
    lat: -6.1730, lng: 35.7420, whatsapp: '255713200009', ownerId: 'demo' },
  { id: 's10', title: 'Apartment ya wanafunzi UDSM', city: 'Dar es Salaam', area: 'Mlimani',
    bedrooms: 2, bathrooms: 1, price: 400000, type: 'apartment',
    description: 'Apartment mpya, vyumba 2 vya kushiriki, WiFi, security, karibu sana na UDSM.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    lat: -6.7790, lng: 39.2120, whatsapp: '255713200010', ownerId: 'demo' },

  // ── GUEST HOUSES, B&Bs & LOUNGES ──
  // Moshi - Mjohoroni & nearby
  { id: 'gh1', title: 'Mjohoroni Guest House', city: 'Moshi', area: 'Mjohoroni',
    bedrooms: 1, bathrooms: 1, price: 35000, type: 'guesthouse',
    description: 'Guest house safi Mjohoroni Moshi. Kitanda, shuka, breakfast, parking.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'],
    lat: -3.3520, lng: 37.3320, whatsapp: '255744300001', ownerId: 'demo' },
  { id: 'gh2', title: 'Kilimanjaro View B&B Mjohoroni', city: 'Moshi', area: 'Mjohoroni',
    bedrooms: 1, bathrooms: 1, price: 65000, type: 'bnb',
    description: 'View ya Mlima Kilimanjaro, breakfast asubuhi, AC, WiFi, hot shower.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -3.3500, lng: 37.3340, whatsapp: '255744300002', ownerId: 'demo' },
  { id: 'lo1', title: 'Mjohoroni Lounge & Bar', city: 'Moshi', area: 'Mjohoroni',
    bedrooms: 0, bathrooms: 2, price: 1500000, type: 'lounge',
    description: 'Lounge inakodishwa kwa harusi, parties, conferences. Sound system, kitchen.',
    images: ['https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800'],
    lat: -3.3510, lng: 37.3350, whatsapp: '255744300003', ownerId: 'demo' },
  { id: 'gh3', title: 'KCMC Guest House', city: 'Moshi', area: 'KCMC',
    bedrooms: 1, bathrooms: 1, price: 40000, type: 'guesthouse',
    description: 'Karibu na hospitali ya KCMC. Inafaa wagonjwa na ndugu zao.',
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'],
    lat: -3.3530, lng: 37.3370, whatsapp: '255744300004', ownerId: 'demo' },
  { id: 'gh4', title: 'Moshi Town Lodge', city: 'Moshi', area: 'Moshi Town',
    bedrooms: 1, bathrooms: 1, price: 50000, type: 'guesthouse',
    description: 'Karibu na sokoni na bus stand. Hot shower, breakfast, security.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    lat: -3.3490, lng: 37.3320, whatsapp: '255744300005', ownerId: 'demo' },
  { id: 'lo2', title: 'Moshi Town Lounge', city: 'Moshi', area: 'Moshi Town',
    bedrooms: 0, bathrooms: 2, price: 1200000, type: 'lounge',
    description: 'Lounge ya CBD Moshi, capacity 200, parking, sound, lighting.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    lat: -3.3485, lng: 37.3315, whatsapp: '255744300006', ownerId: 'demo' },

  // Dar es Salaam
  { id: 'gh5', title: 'Mikocheni Guest House', city: 'Dar es Salaam', area: 'Mikocheni',
    bedrooms: 1, bathrooms: 1, price: 60000, type: 'guesthouse',
    description: 'Guest house safi, AC, WiFi, breakfast, parking, security.',
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'],
    lat: -6.7610, lng: 39.2553, whatsapp: '255744300007', ownerId: 'demo' },
  { id: 'gh6', title: 'Masaki Beach B&B', city: 'Dar es Salaam', area: 'Masaki',
    bedrooms: 1, bathrooms: 1, price: 120000, type: 'bnb',
    description: 'Karibu na bahari, breakfast, AC, swimming pool, fully furnished.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -6.7457, lng: 39.2807, whatsapp: '255744300008', ownerId: 'demo' },
  { id: 'lo3', title: 'Mikocheni Wedding Lounge', city: 'Dar es Salaam', area: 'Mikocheni',
    bedrooms: 0, bathrooms: 4, price: 3000000, type: 'lounge',
    description: 'Wedding & event lounge, capacity 500, AC, generator, parking.',
    images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800'],
    lat: -6.7620, lng: 39.2540, whatsapp: '255744300009', ownerId: 'demo' },
  { id: 'gh7', title: 'Kariakoo Backpackers', city: 'Dar es Salaam', area: 'Kariakoo',
    bedrooms: 1, bathrooms: 1, price: 25000, type: 'guesthouse',
    description: 'Bei nafuu, karibu na soko la Kariakoo, breakfast.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    lat: -6.8161, lng: 39.2724, whatsapp: '255744300010', ownerId: 'demo' },

  // Arusha
  { id: 'gh8', title: 'Njiro Guest House', city: 'Arusha', area: 'Njiro',
    bedrooms: 1, bathrooms: 1, price: 45000, type: 'guesthouse',
    description: 'Karibu na ofisi za UN, hot shower, WiFi, parking.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'],
    lat: -3.4039, lng: 36.7059, whatsapp: '255744300011', ownerId: 'demo' },
  { id: 'gh9', title: 'Arusha Safari B&B', city: 'Arusha', area: 'Sakina',
    bedrooms: 1, bathrooms: 1, price: 80000, type: 'bnb',
    description: 'Safari briefing room, breakfast, transport to parks, WiFi.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -3.3680, lng: 36.6820, whatsapp: '255744300012', ownerId: 'demo' },
  { id: 'lo4', title: 'Arusha Event Lounge', city: 'Arusha', area: 'Themi',
    bedrooms: 0, bathrooms: 3, price: 1800000, type: 'lounge',
    description: 'Event lounge, harusi, conferences, capacity 300.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    lat: -3.3760, lng: 36.6920, whatsapp: '255744300013', ownerId: 'demo' },

  // Mwanza
  { id: 'gh10', title: 'Mwanza Lake View Guest House', city: 'Mwanza', area: 'Capripoint',
    bedrooms: 1, bathrooms: 1, price: 50000, type: 'guesthouse',
    description: 'View ya Ziwa Victoria, breakfast, AC, WiFi.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    lat: -2.5160, lng: 32.9170, whatsapp: '255744300014', ownerId: 'demo' },
  { id: 'gh11', title: 'Bugando B&B', city: 'Mwanza', area: 'Bugando',
    bedrooms: 1, bathrooms: 1, price: 70000, type: 'bnb',
    description: 'Karibu na hospitali ya Bugando, breakfast, hot shower.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -2.5170, lng: 32.9070, whatsapp: '255744300015', ownerId: 'demo' },
  { id: 'lo5', title: 'Mwanza Lounge', city: 'Mwanza', area: 'Nyamagana',
    bedrooms: 0, bathrooms: 2, price: 1000000, type: 'lounge',
    description: 'Wedding & party lounge, capacity 250, parking.',
    images: ['https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800'],
    lat: -2.5290, lng: 32.9000, whatsapp: '255744300016', ownerId: 'demo' },

  // Dodoma
  { id: 'gh12', title: 'Dodoma Capital Guest House', city: 'Dodoma', area: 'Area C',
    bedrooms: 1, bathrooms: 1, price: 45000, type: 'guesthouse',
    description: 'Karibu na Bunge na ofisi za serikali, AC, WiFi.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'],
    lat: -6.1729, lng: 35.7516, whatsapp: '255744300017', ownerId: 'demo' },
  { id: 'lo6', title: 'Dodoma Event Lounge', city: 'Dodoma', area: 'Area D',
    bedrooms: 0, bathrooms: 2, price: 1500000, type: 'lounge',
    description: 'Event lounge, capacity 400, sound system, generator.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    lat: -6.1820, lng: 35.7460, whatsapp: '255744300018', ownerId: 'demo' },

  // Mbeya
  { id: 'gh13', title: 'Mbeya Highland Guest House', city: 'Mbeya', area: 'Iyunga',
    bedrooms: 1, bathrooms: 1, price: 40000, type: 'guesthouse',
    description: 'Hewa baridi, breakfast, parking, WiFi.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    lat: -8.9090, lng: 33.4540, whatsapp: '255744300019', ownerId: 'demo' },

  // Tanga
  { id: 'gh14', title: 'Tanga Beach Guest House', city: 'Tanga', area: 'Tanga',
    bedrooms: 1, bathrooms: 1, price: 55000, type: 'guesthouse',
    description: 'Karibu na bahari ya Tanga, AC, breakfast, parking.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'],
    lat: -5.0700, lng: 39.0980, whatsapp: '255744300020', ownerId: 'demo' },

  // Bukoba
  { id: 'gh15', title: 'Bukoba Lake View B&B', city: 'Bukoba', area: 'Bukoba',
    bedrooms: 1, bathrooms: 1, price: 50000, type: 'bnb',
    description: 'View ya Ziwa Victoria, breakfast, WiFi, fishing tour.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -1.3320, lng: 31.8120, whatsapp: '255744300021', ownerId: 'demo' },

  // Iringa
  { id: 'gh16', title: 'Iringa Highland Guest House', city: 'Iringa', area: 'Iringa',
    bedrooms: 1, bathrooms: 1, price: 35000, type: 'guesthouse',
    description: 'Bei nafuu, hewa baridi, breakfast, hot water.',
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'],
    lat: -7.7700, lng: 35.6900, whatsapp: '255744300022', ownerId: 'demo' },

  // Morogoro
  { id: 'gh17', title: 'Morogoro Mountain Guest House', city: 'Morogoro', area: 'Morogoro',
    bedrooms: 1, bathrooms: 1, price: 40000, type: 'guesthouse',
    description: 'View ya Mlima Uluguru, breakfast, parking, WiFi.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    lat: -6.8240, lng: 37.6610, whatsapp: '255744300023', ownerId: 'demo' },

  // Zanzibar
  { id: 'gh18', title: 'Stone Town Backpackers', city: 'Zanzibar', area: 'Stone Town',
    bedrooms: 1, bathrooms: 1, price: 60000, type: 'guesthouse',
    description: 'Stone Town historic, breakfast, AC, walking distance to beach.',
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
    lat: -6.1631, lng: 39.1898, whatsapp: '255744300024', ownerId: 'demo' },
  { id: 'gh19', title: 'Nungwi Beach B&B', city: 'Zanzibar', area: 'Nungwi',
    bedrooms: 1, bathrooms: 1, price: 150000, type: 'bnb',
    description: 'Bahari mbele, breakfast, swimming, snorkeling tours.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    lat: -5.7270, lng: 39.2980, whatsapp: '255744300025', ownerId: 'demo' },

  // Mtwara
  { id: 'gh20', title: 'Mtwara Guest House', city: 'Mtwara', area: 'Mtwara',
    bedrooms: 1, bathrooms: 1, price: 35000, type: 'guesthouse',
    description: 'Karibu na bahari, breakfast, AC, WiFi.',
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'],
    lat: -10.2680, lng: 40.1080, whatsapp: '255744300026', ownerId: 'demo' },

  // Songea
  { id: 'gh21', title: 'Songea Town Guest House', city: 'Songea', area: 'Songea',
    bedrooms: 1, bathrooms: 1, price: 30000, type: 'guesthouse',
    description: 'Bei nafuu, breakfast, hot water, parking.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'],
    lat: -10.6850, lng: 35.6520, whatsapp: '255744300027', ownerId: 'demo' },

  // Kigoma
  { id: 'gh22', title: 'Kigoma Lake Tanganyika B&B', city: 'Kigoma', area: 'Kigoma',
    bedrooms: 1, bathrooms: 1, price: 55000, type: 'bnb',
    description: 'View ya Ziwa Tanganyika, breakfast, fishing, AC.',
    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
    lat: -4.8770, lng: 29.6260, whatsapp: '255744300028', ownerId: 'demo' }
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
    if (tab.dataset.tab === 'students') renderCampuses();
    if (tab.dataset.tab === 'nearme') initNearMe();
  });
});

// ============== NEAR ME (geolocation) ==============
let userLocation = null;
let nearmeMapInstance = null;
let nearmeMapMarkers = [];

function initNearMe() {
  const status = document.getElementById('nearmeStatus');
  if (!userLocation) {
    status.innerHTML = '👆 Bonyeza "Pata Eneo Langu" kuanza';
  } else {
    renderNearMe();
  }
}

function setManualLocation(value) {
  if (!value) return;
  const [lat, lng] = value.split(',').map(Number);
  userLocation = { lat, lng };
  const label = document.querySelector(`#nearmeCityPicker option[value="${value}"]`)?.textContent || 'eneo';
  document.getElementById('nearmeStatus').innerHTML = `📍 Eneo: <b>${label}</b>`;
  renderNearMe();
}
window.setManualLocation = setManualLocation;

function findNearMe() {
  const status = document.getElementById('nearmeStatus');
  if (!navigator.geolocation) {
    status.innerHTML = '❌ Browser yako haitumii geolocation. Chagua eneo kutoka dropdown.';
    return;
  }

  // HTTP-only sites can't use GPS in modern browsers; warn user
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    status.innerHTML = '⚠️ GPS inahitaji HTTPS. Tumia dropdown chini kuchagua eneo.';
    return;
  }

  status.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:32px;animation:mePulse 1.5s infinite;display:inline-block">📡</div><br>
      <b>Inatafuta eneo lako...</b><br>
      <small>Toa ruhusa kwenye browser ikiomba</small>
    </div>
  `;

  // Try high-accuracy first, fallback to network-based
  const tryLocate = (highAccuracy = true) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const accuracy = Math.round(pos.coords.accuracy);
        const accuracyText = accuracy < 100 ? '✅ GPS sahihi'
          : accuracy < 1000 ? '⚠️ GPS takriban'
          : '🌐 IP/WiFi tu';
        status.innerHTML = `
          ${accuracyText} (±${accuracy < 1000 ? accuracy + ' m' : (accuracy/1000).toFixed(1) + ' km'})<br>
          📍 <b>${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}</b><br>
          <small><a href="#" onclick="autoExpandToFindResults();return false">📈 Panua hadi nipate matokeo</a></small>
        `;
        renderNearMe();
        autoExpandIfEmpty();
      },
      (err) => {
        // If high-accuracy timed out, retry with low-accuracy
        if (highAccuracy && err.code === err.TIMEOUT) {
          status.innerHTML = '🌐 GPS imechelewa, tunajaribu IP/WiFi...';
          tryLocate(false);
          return;
        }

        let msg = '';
        if (err.code === err.PERMISSION_DENIED) {
          msg = `❌ <b>Umekataa ruhusa ya eneo.</b><br>
            <small>Fungua tena: Chrome → Bonyeza 🔒 / 🔐 karibu na URL bar → Site settings → Location → Allow</small>`;
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          msg = '❌ Eneo halipatikani. Hakikisha GPS au WiFi ipo wazi.';
        } else if (err.code === err.TIMEOUT) {
          msg = '❌ Subiri muda mrefu. Jaribu tena.';
        } else {
          msg = '❌ ' + err.message;
        }

        status.innerHTML = `
          ${msg}<br><br>
          <button class="btn-primary" onclick="findNearMe()" style="margin-right:8px">🔄 Jaribu tena</button>
          <small>Au chagua eneo kutoka dropdown chini ↓</small>
        `;
      },
      { enableHighAccuracy: highAccuracy, timeout: highAccuracy ? 8000 : 15000, maximumAge: 0 }
    );
  };
  tryLocate(true);
}
window.findNearMe = findNearMe;
window.renderNearMe = renderNearMe;

// Auto-expand radius if no listings found nearby
function autoExpandIfEmpty() {
  if (!userLocation) return;
  const radiusEl = document.getElementById('nearmeRadius');
  const sizes = [5, 10, 20, 50, 200];
  for (const r of sizes) {
    const found = allListings.filter(l => l.lat && l.lng &&
      distanceKm(userLocation.lat, userLocation.lng, l.lat, l.lng) <= r).length;
    if (found > 0) {
      if (Number(radiusEl.value) < r) {
        radiusEl.value = String(Math.min(r, 50));
        renderNearMe();
      }
      return;
    }
  }
}

function autoExpandToFindResults() {
  if (!userLocation) return;
  const sorted = allListings.filter(l => l.lat && l.lng)
    .map(l => ({ ...l, _d: distanceKm(userLocation.lat, userLocation.lng, l.lat, l.lng) }))
    .sort((a, b) => a._d - b._d);
  if (sorted.length === 0) return;
  const nearestKm = Math.ceil(sorted[0]._d);
  const radiusEl = document.getElementById('nearmeRadius');
  // Find smallest preset radius that includes nearest
  const sizes = [2, 5, 10, 20, 50];
  const fit = sizes.find(s => s >= nearestKm) || 50;
  // If even 50 isn't enough, just override DOM with custom value
  if (nearestKm > 50) {
    // Add a custom option
    if (!radiusEl.querySelector(`option[value="${nearestKm + 5}"]`)) {
      const opt = document.createElement('option');
      opt.value = nearestKm + 5;
      opt.textContent = `Hadi ${nearestKm + 5} km (kufikia karibu zaidi)`;
      radiusEl.appendChild(opt);
    }
    radiusEl.value = String(nearestKm + 5);
  } else {
    radiusEl.value = String(fit);
  }
  renderNearMe();
  toast(`📍 Karibu zaidi ni ${nearestKm} km — radius imepanuliwa`);
}
window.autoExpandToFindResults = autoExpandToFindResults;

function renderNearMe() {
  if (!userLocation) return;
  const type = document.getElementById('nearmeType').value;
  const radius = Number(document.getElementById('nearmeRadius').value);

  let nearby = allListings
    .filter(l => l.lat && l.lng)
    .map(l => ({ ...l, _distance: distanceKm(userLocation.lat, userLocation.lng, l.lat, l.lng) }))
    .filter(l => l._distance <= radius)
    .filter(l => type === 'all' || l.type === type)
    .sort((a, b) => a._distance - b._distance);

  // Render map
  const mapEl = document.getElementById('nearmeMap');
  mapEl.classList.add('active');
  if (!nearmeMapInstance) {
    nearmeMapInstance = L.map('nearmeMap').setView([userLocation.lat, userLocation.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OSM' }).addTo(nearmeMapInstance);
  } else {
    nearmeMapInstance.invalidateSize();
    nearmeMapInstance.setView([userLocation.lat, userLocation.lng], 14);
  }
  nearmeMapMarkers.forEach(m => nearmeMapInstance.removeLayer(m));
  nearmeMapMarkers = [];

  // User pin
  const meIcon = L.divIcon({
    className: '',
    html: '<div style="background:#2563eb;border:3px solid #fff;border-radius:50%;width:22px;height:22px;box-shadow:0 0 0 6px rgba(37,99,235,.3);animation:mePulse 1.5s infinite"></div>',
    iconSize: [22, 22]
  });
  const meMarker = L.marker([userLocation.lat, userLocation.lng], { icon: meIcon }).addTo(nearmeMapInstance).bindPopup('📍 Wewe uko hapa');
  nearmeMapMarkers.push(meMarker);

  // Radius circle
  const circle = L.circle([userLocation.lat, userLocation.lng], {
    radius: radius * 1000, color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.08, weight: 1
  }).addTo(nearmeMapInstance);
  nearmeMapMarkers.push(circle);

  // Listings
  nearby.forEach(l => {
    const priceShort = l.price >= 1000000 ? (l.price/1000000).toFixed(1)+'M' : Math.round(l.price/1000)+'k';
    const icon = L.divIcon({ className: 'price-marker', html: `TZS ${priceShort}`, iconSize: null });
    const marker = L.marker([l.lat, l.lng], { icon }).addTo(nearmeMapInstance);
    marker.bindPopup(`
      <div style="min-width:180px">
        <img src="${(l.images && l.images[0]) || 'icon-192.png'}" style="width:100%;height:100px;object-fit:cover;border-radius:6px;margin-bottom:6px" />
        <strong>${l.title}</strong><br>
        <span style="color:#0f766e;font-weight:700">${formatPrice(l.price, l.type)}</span><br>
        <span class="dist-badge">${l._distance.toFixed(1)} km</span><br>
        <a href="#" onclick="closeDetail();openDetail('${l.id}');return false;" style="color:#0f766e;font-weight:600">Ona zaidi →</a>
      </div>
    `);
    nearmeMapMarkers.push(marker);
  });

  // List
  const out = document.getElementById('nearmeListings');
  if (!nearby.length) {
    out.innerHTML = `
      <div class="empty">
        Hakuna kitu ndani ya ${radius} km.<br><br>
        <button class="btn-primary" onclick="autoExpandToFindResults()">📈 Panua kufikia karibu zaidi</button>
      </div>
    `;
    return;
  }
  out.innerHTML = `
    <p style="margin:14px 0;color:var(--muted);font-size:13px">📍 ${nearby.length} matokeo ndani ya ${radius} km</p>
    <div class="grid">
      ${nearby.map(l => `
        <div class="card" onclick="openDetail('${l.id}')">
          <div class="card-image" style="background-image:url('${(l.images && l.images[0]) || 'icon-192.png'}')">
            <span class="card-badge">${l.type}</span>
            <span class="dist-badge" style="position:absolute;bottom:8px;left:8px">${l._distance.toFixed(1)} km</span>
          </div>
          <div class="card-body">
            <div class="card-price">${formatPrice(l.price, l.type)}</div>
            <div class="card-title">${l.title}</div>
            <div class="card-meta"><span>📍 ${l.area}, ${l.city}</span></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ============== STUDENT HOUSING ==============
const CAMPUSES = [
  // ── DAR ES SALAAM (22) ──
  { id: 'udsm',     name: 'UDSM (Mlimani)',                 city: 'Dar es Salaam', area: 'Mlimani',          lat: -6.7787, lng: 39.2106, color: '#dc2626', icon: '🏛️' },
  { id: 'ardhi',    name: 'Ardhi University (ARU)',          city: 'Dar es Salaam', area: 'Ubungo',           lat: -6.7720, lng: 39.2092, color: '#0f766e', icon: '🏗️' },
  { id: 'muhas',    name: 'MUHAS',                          city: 'Dar es Salaam', area: 'Upanga',           lat: -6.8085, lng: 39.2814, color: '#7c3aed', icon: '⚕️' },
  { id: 'ifm',      name: 'IFM',                            city: 'Dar es Salaam', area: 'Shaaban Robert',   lat: -6.8120, lng: 39.2890, color: '#1e40af', icon: '💼' },
  { id: 'out',      name: 'Open University (OUT)',           city: 'Dar es Salaam', area: 'Kinondoni',        lat: -6.7720, lng: 39.2390, color: '#0891b2', icon: '📖' },
  { id: 'duce',     name: 'DUCE',                           city: 'Dar es Salaam', area: 'Chang\'ombe',       lat: -6.8400, lng: 39.2700, color: '#be185d', icon: '🎓' },
  { id: 'dit',      name: 'DIT (Inst of Technology)',        city: 'Dar es Salaam', area: 'Bibi Titi',        lat: -6.8170, lng: 39.2780, color: '#1d4ed8', icon: '🔧' },
  { id: 'tudarco',  name: 'TUDARCo (Tumaini Dar)',           city: 'Dar es Salaam', area: 'Mikocheni',        lat: -6.7700, lng: 39.2580, color: '#0f766e', icon: '⛪' },
  { id: 'kiu-dar',  name: 'KIU Dar es Salaam',              city: 'Dar es Salaam', area: 'Mikocheni',        lat: -6.7600, lng: 39.2540, color: '#ea580c', icon: '🌍' },
  { id: 'hkmu',     name: 'Hubert Kairuki Memorial Univ',    city: 'Dar es Salaam', area: 'Mikocheni',        lat: -6.7640, lng: 39.2560, color: '#9333ea', icon: '⚕️' },
  { id: 'imtu',     name: 'IMTU',                           city: 'Dar es Salaam', area: 'Mbweni',           lat: -6.6800, lng: 39.1800, color: '#16a34a', icon: '⚕️' },
  { id: 'aku-dar',  name: 'Aga Khan University',            city: 'Dar es Salaam', area: 'Upanga',           lat: -6.8060, lng: 39.2810, color: '#0d9488', icon: '⚕️' },
  { id: 'nit',      name: 'NIT (Transport)',                 city: 'Dar es Salaam', area: 'Mabibo',           lat: -6.8390, lng: 39.2280, color: '#1d4ed8', icon: '🚌' },
  { id: 'st-joseph',name: 'St Joseph University',           city: 'Dar es Salaam', area: 'Boko',             lat: -6.7250, lng: 39.1900, color: '#7c2d12', icon: '✝️' },
  { id: 'tia-dar',  name: 'Tanzania Institute of Acc (TIA)', city: 'Dar es Salaam', area: 'Bibi Titi',        lat: -6.8120, lng: 39.2790, color: '#a16207', icon: '📊' },
  { id: 'cbe-dar',  name: 'CBE Dar es Salaam',              city: 'Dar es Salaam', area: 'Bibi Titi',        lat: -6.8170, lng: 39.2810, color: '#be185d', icon: '💼' },
  { id: 'iaa-dar',  name: 'IAA Dar Centre',                 city: 'Dar es Salaam', area: 'Posta',            lat: -6.8150, lng: 39.2895, color: '#9a3412', icon: '📊' },
  { id: 'tpsc',     name: 'TPSC (Public Service College)',   city: 'Dar es Salaam', area: 'Magogoni',         lat: -6.8200, lng: 39.2920, color: '#dc2626', icon: '🏛️' },
  { id: 'mzumbe-dar',name:'Mzumbe University Dar Campus',   city: 'Dar es Salaam', area: 'Mbezi',            lat: -6.7100, lng: 39.1700, color: '#0891b2', icon: '📚' },
  { id: 'tsj',      name: 'Tanzania School of Journalism',   city: 'Dar es Salaam', area: 'Kinondoni',        lat: -6.7780, lng: 39.2470, color: '#dc2626', icon: '📰' },
  { id: 'esami',    name: 'ESAMI',                          city: 'Dar es Salaam', area: 'Mwanjelwa',        lat: -6.7900, lng: 39.2280, color: '#16a34a', icon: '💼' },
  { id: 'cfr',      name: 'CFR (Foreign Relations)',         city: 'Dar es Salaam', area: 'Kurasini',         lat: -6.8550, lng: 39.2720, color: '#1e40af', icon: '🌍' },
  { id: 'veta-dar', name: 'VETA Chang\'ombe',                city: 'Dar es Salaam', area: 'Chang\'ombe',       lat: -6.8430, lng: 39.2680, color: '#a16207', icon: '🔨' },

  // ── DODOMA (6) ──
  { id: 'udom',     name: 'UDOM (University of Dodoma)',     city: 'Dodoma',        area: 'Chimwaga',         lat: -6.1881, lng: 35.7900, color: '#f59e0b', icon: '🏛️' },
  { id: 'cbe-dod',  name: 'CBE Dodoma',                     city: 'Dodoma',        area: 'CBE',              lat: -6.1714, lng: 35.7401, color: '#be185d', icon: '💼' },
  { id: 'irdp',     name: 'IRDP (Rural Development)',        city: 'Dodoma',        area: 'Nala',             lat: -6.1530, lng: 35.7510, color: '#16a34a', icon: '🌱' },
  { id: 'sjut',     name: "St John's University (SJUT)",     city: 'Dodoma',        area: 'Mlimwa',           lat: -6.1640, lng: 35.7270, color: '#7c2d12', icon: '✝️' },
  { id: 'lita-dod', name: 'LITA Dodoma',                    city: 'Dodoma',        area: 'Mpwapwa Rd',       lat: -6.1860, lng: 35.7600, color: '#16a34a', icon: '🐄' },
  { id: 'veta-dod', name: 'VETA Dodoma',                    city: 'Dodoma',        area: 'Veta',             lat: -6.1620, lng: 35.7580, color: '#dc2626', icon: '🔨' },

  // ── MOROGORO (5) ──
  { id: 'sua',      name: 'SUA (Sokoine Agriculture)',       city: 'Morogoro',      area: 'Mazimbu',          lat: -6.8489, lng: 37.6597, color: '#16a34a', icon: '🌾' },
  { id: 'mzumbe',   name: 'Mzumbe University',              city: 'Morogoro',      area: 'Mzumbe',           lat: -6.9128, lng: 37.4769, color: '#0891b2', icon: '📚' },
  { id: 'jordan',   name: 'Jordan University College',       city: 'Morogoro',      area: 'Morogoro',         lat: -6.8240, lng: 37.6610, color: '#a855f7', icon: '🎓' },
  { id: 'mmuc',     name: 'Morogoro Muslim University',     city: 'Morogoro',      area: 'Mji Mkuu',         lat: -6.8200, lng: 37.6620, color: '#16a34a', icon: '☪️' },
  { id: 'veta-mor', name: 'VETA Morogoro',                  city: 'Morogoro',      area: 'Kihonda',          lat: -6.8500, lng: 37.6850, color: '#dc2626', icon: '🔨' },

  // ── ARUSHA (10) ──
  { id: 'nm-aist',  name: 'NM-AIST (Mandela Institute)',     city: 'Arusha',        area: 'Tengeru',          lat: -3.3914, lng: 36.7965, color: '#dc2626', icon: '🔬' },
  { id: 'makumira', name: 'Tumaini Univ Makumira',          city: 'Arusha',        area: 'Makumira',         lat: -3.3650, lng: 36.8030, color: '#0f766e', icon: '⛪' },
  { id: 'iaa',      name: 'IAA Arusha',                      city: 'Arusha',        area: 'Njiro',            lat: -3.4050, lng: 36.7050, color: '#9a3412', icon: '📊' },
  { id: 'ua',       name: 'University of Arusha',            city: 'Arusha',        area: 'Usa River',        lat: -3.3700, lng: 36.8550, color: '#0e7490', icon: '🎓' },
  { id: 'atc',      name: 'ATC (Arusha Technical College)',   city: 'Arusha',        area: 'Themi',            lat: -3.3760, lng: 36.6920, color: '#1d4ed8', icon: '🔧' },
  { id: 'patandi',  name: 'Patandi Teachers\' College',       city: 'Arusha',        area: 'Patandi',          lat: -3.3850, lng: 36.7800, color: '#7c3aed', icon: '🎓' },
  { id: 'cuea-aru', name: 'CUEA Arusha Campus',              city: 'Arusha',        area: 'Sakina',           lat: -3.3680, lng: 36.6820, color: '#7c2d12', icon: '✝️' },
  { id: 'veta-aru', name: 'VETA Arusha',                     city: 'Arusha',        area: 'Oljoro',           lat: -3.3950, lng: 36.7220, color: '#a16207', icon: '🔨' },
  { id: 'mtkili',   name: 'Mt Kilimanjaro University',       city: 'Arusha',        area: 'Tengeru',          lat: -3.3900, lng: 36.8000, color: '#0891b2', icon: '⛰️' },
  { id: 'iccs-aru', name: 'ICCS Arusha',                     city: 'Arusha',        area: 'Arusha CBD',       lat: -3.3680, lng: 36.6900, color: '#9333ea', icon: '💻' },

  // ── MOSHI / KILIMANJARO (12) ──
  { id: 'kcmc',     name: 'KCMUCo (Christian Medical)',      city: 'Moshi',         area: 'KCMC',             lat: -3.3520, lng: 37.3360, color: '#7c3aed', icon: '⚕️' },
  { id: 'mocu',     name: 'MoCU (Co-operative)',            city: 'Moshi',         area: 'Sokoine Rd',       lat: -3.3475, lng: 37.3380, color: '#16a34a', icon: '💰' },
  { id: 'mwecau',   name: 'Mwenge Catholic University',     city: 'Moshi',         area: 'Mwenge',           lat: -3.3540, lng: 37.3420, color: '#7c2d12', icon: '✝️' },
  { id: 'stefano',  name: 'Stefano Moshi Memorial Univ',     city: 'Moshi',         area: 'Mawenzi',          lat: -3.3650, lng: 37.3250, color: '#a16207', icon: '⛪' },
  { id: 'ksp',      name: 'Kilimanjaro School of Pharmacy',  city: 'Moshi',         area: 'Sango',            lat: -3.3380, lng: 37.3450, color: '#ec4899', icon: '💊' },
  { id: 'kicom',    name: 'KICoM (Comm Med Centre)',        city: 'Moshi',         area: 'Kibong\'oto',       lat: -3.3010, lng: 37.0240, color: '#0e7490', icon: '⚕️' },
  { id: 'kit',      name: 'Kilimanjaro Inst of Technology',  city: 'Moshi',         area: 'Karanga',          lat: -3.3780, lng: 37.3120, color: '#1d4ed8', icon: '🔧' },
  { id: 'kith',     name: 'KITH (Tourism & Hospitality)',    city: 'Moshi',         area: 'Moshi Town',       lat: -3.3490, lng: 37.3320, color: '#0891b2', icon: '🏨' },
  { id: 'tcdc',     name: 'Tengeru Inst Comm Dev (TICD)',    city: 'Moshi',         area: 'Tengeru',          lat: -3.3914, lng: 36.9070, color: '#16a34a', icon: '🌱' },
  { id: 'out-mos',  name: 'OUT Moshi Centre',               city: 'Moshi',         area: 'Moshi Town',       lat: -3.3500, lng: 37.3400, color: '#0891b2', icon: '📖' },
  { id: 'sjtc-mos', name: "St Joseph Teachers' College",     city: 'Moshi',         area: 'Old Moshi',        lat: -3.3120, lng: 37.3680, color: '#7c2d12', icon: '🎓' },
  { id: 'veta-kil', name: 'VETA Kilimanjaro',                city: 'Moshi',         area: 'Pasua',            lat: -3.3700, lng: 37.3580, color: '#a16207', icon: '🔨' },

  // ── MWANZA (8) ──
  { id: 'saut',     name: 'SAUT (St Augustine)',            city: 'Mwanza',        area: 'Malimbe',          lat: -2.5350, lng: 32.9180, color: '#7c2d12', icon: '✝️' },
  { id: 'bugando',  name: 'CUHAS Bugando',                  city: 'Mwanza',        area: 'Bugando',          lat: -2.5160, lng: 32.9050, color: '#7c3aed', icon: '⚕️' },
  { id: 'kiu-mw',   name: 'KIU Mwanza',                     city: 'Mwanza',        area: 'Mwanza',           lat: -2.5180, lng: 32.9220, color: '#ea580c', icon: '🌍' },
  { id: 'mwanza-poly',name:'Mwanza Polytechnic',            city: 'Mwanza',        area: 'Nyegezi',          lat: -2.5750, lng: 32.9050, color: '#1d4ed8', icon: '🔧' },
  { id: 'tia-mw',   name: 'TIA Mwanza',                     city: 'Mwanza',        area: 'Pamba Rd',         lat: -2.5170, lng: 32.9080, color: '#a16207', icon: '📊' },
  { id: 'veta-mw',  name: 'VETA Mwanza',                    city: 'Mwanza',        area: 'Nyegezi',          lat: -2.5780, lng: 32.9020, color: '#dc2626', icon: '🔨' },
  { id: 'mw-health',name: 'Mwanza College of Health Sciences',city: 'Mwanza',      area: 'Bugando',          lat: -2.5170, lng: 32.9070, color: '#0d9488', icon: '⚕️' },
  { id: 'cu-mw',    name: 'Catholic University Mwanza',     city: 'Mwanza',        area: 'Igoma',            lat: -2.4980, lng: 32.9320, color: '#7c2d12', icon: '✝️' },

  // ── MBEYA (5) ──
  { id: 'must',     name: 'MUST (Science & Tech)',          city: 'Mbeya',         area: 'Iyunga',           lat: -8.9090, lng: 33.4540, color: '#1e40af', icon: '🔬' },
  { id: 'teku',     name: 'Teofilo Kisanji University',     city: 'Mbeya',         area: 'Mbeya',            lat: -8.9050, lng: 33.4470, color: '#a855f7', icon: '🎓' },
  { id: 'tukuyu-tc',name: 'Tukuyu Teachers\' College',      city: 'Mbeya',         area: 'Tukuyu',           lat: -9.2500, lng: 33.6500, color: '#7c3aed', icon: '🎓' },
  { id: 'veta-mbe', name: 'VETA Mbeya',                     city: 'Mbeya',         area: 'Iyunga',           lat: -8.9120, lng: 33.4520, color: '#dc2626', icon: '🔨' },
  { id: 'mbe-iat',  name: 'Mbeya Inst of Sci & Tech',       city: 'Mbeya',         area: 'Mbeya',            lat: -8.9000, lng: 33.4500, color: '#1d4ed8', icon: '🔧' },

  // ── IRINGA (5) ──
  { id: 'muce',     name: 'MUCE (Mkwawa Education)',        city: 'Iringa',        area: 'Mkwawa',           lat: -7.7700, lng: 35.6900, color: '#0891b2', icon: '📚' },
  { id: 'rucu',     name: 'RUCU (Ruaha Catholic)',          city: 'Iringa',        area: 'Iringa',           lat: -7.7660, lng: 35.6950, color: '#7c2d12', icon: '✝️' },
  { id: 'uoi',      name: 'University of Iringa',            city: 'Iringa',        area: 'Iringa',           lat: -7.7700, lng: 35.7000, color: '#0f766e', icon: '🎓' },
  { id: 'veta-iri', name: 'VETA Iringa',                    city: 'Iringa',        area: 'Iringa',           lat: -7.7800, lng: 35.6850, color: '#dc2626', icon: '🔨' },
  { id: 'iringa-tc',name: 'Iringa Teachers\' College',      city: 'Iringa',        area: 'Mkwawa',           lat: -7.7720, lng: 35.6920, color: '#a855f7', icon: '🎓' },

  // ── TANGA / LUSHOTO (6) ──
  { id: 'sekomu',   name: 'SEKOMU (Sebastian Kolowa)',      city: 'Tanga',         area: 'Lushoto',          lat: -4.7900, lng: 38.2810, color: '#16a34a', icon: '⛪' },
  { id: 'eckernfor',name: 'Eckernforde Tanga University',   city: 'Tanga',         area: 'Tanga',            lat: -5.0700, lng: 39.0980, color: '#0e7490', icon: '🌊' },
  { id: 'korogwe-tc',name:'Korogwe Teachers\' College',     city: 'Tanga',         area: 'Korogwe',          lat: -5.1500, lng: 38.4830, color: '#7c2d12', icon: '🎓' },
  { id: 'lushoto-tc',name:'Lushoto Teachers\' College',     city: 'Tanga',         area: 'Lushoto',          lat: -4.7860, lng: 38.2790, color: '#a16207', icon: '🎓' },
  { id: 'tanga-iat',name: 'Tanga Institute of Accountancy',  city: 'Tanga',         area: 'Tanga CBD',        lat: -5.0680, lng: 39.0950, color: '#9a3412', icon: '📊' },
  { id: 'veta-tng', name: 'VETA Tanga',                     city: 'Tanga',         area: 'Mwakidila',        lat: -5.0830, lng: 39.0780, color: '#dc2626', icon: '🔨' },

  // ── BUKOBA / KAGERA (5) ──
  { id: 'st-anthony',name:'St Anthony of Padua University', city: 'Bukoba',        area: 'Kagondo',          lat: -1.3300, lng: 31.8200, color: '#7c2d12', icon: '✝️' },
  { id: 'kagera-poly',name:'Kagera Polytechnic',            city: 'Bukoba',        area: 'Bukoba',           lat: -1.3320, lng: 31.8120, color: '#1d4ed8', icon: '🔧' },
  { id: 'bukoba-tc',name: 'Bukoba Teachers\' College',      city: 'Bukoba',        area: 'Kashai',           lat: -1.3450, lng: 31.8270, color: '#7c3aed', icon: '🎓' },
  { id: 'cu-bukoba',name: 'Catholic University Bukoba',     city: 'Bukoba',        area: 'Nyakato',          lat: -1.3180, lng: 31.8050, color: '#7c2d12', icon: '✝️' },
  { id: 'veta-buk', name: 'VETA Bukoba',                    city: 'Bukoba',        area: 'Bukoba',           lat: -1.3370, lng: 31.8130, color: '#dc2626', icon: '🔨' },

  // ── SONGEA / RUVUMA (3) ──
  { id: 'peramiho', name: 'Peramiho Major Seminary',         city: 'Songea',        area: 'Peramiho',         lat: -10.5630, lng: 35.4280, color: '#7c2d12', icon: '⛪' },
  { id: 'songea-tc',name: 'Songea Teachers\' College',      city: 'Songea',        area: 'Songea',           lat: -10.6850, lng: 35.6520, color: '#a855f7', icon: '🎓' },
  { id: 'veta-songea',name:'VETA Songea',                  city: 'Songea',        area: 'Mletele',          lat: -10.6750, lng: 35.6480, color: '#dc2626', icon: '🔨' },

  // ── MTWARA / LINDI (3) ──
  { id: 'stella-maris',name:'Stella Maris Mtwara University',city:'Mtwara',        area: 'Mikindani',        lat: -10.2680, lng: 40.1080, color: '#7c2d12', icon: '⛪' },
  { id: 'mtwara-tc',name: 'Mtwara Teachers\' College',      city: 'Mtwara',        area: 'Mtwara',           lat: -10.2630, lng: 40.1850, color: '#a855f7', icon: '🎓' },
  { id: 'veta-mtw', name: 'VETA Mtwara',                    city: 'Mtwara',        area: 'Mtwara',           lat: -10.2750, lng: 40.1820, color: '#dc2626', icon: '🔨' },

  // ── KIGOMA / TABORA / SUMBAWANGA (4) ──
  { id: 'kigoma-tc',name: 'Kigoma Teachers\' College',      city: 'Kigoma',        area: 'Kigoma',           lat: -4.8770, lng: 29.6260, color: '#a855f7', icon: '🎓' },
  { id: 'veta-kig', name: 'VETA Kigoma',                    city: 'Kigoma',        area: 'Kigoma',           lat: -4.8830, lng: 29.6320, color: '#dc2626', icon: '🔨' },
  { id: 'tabora-tc',name: 'Tabora Teachers\' College',      city: 'Tabora',        area: 'Tabora',           lat: -5.0150, lng: 32.8050, color: '#7c3aed', icon: '🎓' },
  { id: 'veta-sum', name: 'VETA Sumbawanga',                city: 'Sumbawanga',    area: 'Sumbawanga',       lat: -7.9650, lng: 31.6120, color: '#a16207', icon: '🔨' },

  // ── SINGIDA / MANYARA (2) ──
  { id: 'veta-sin', name: 'VETA Singida',                   city: 'Singida',       area: 'Singida',          lat: -4.8170, lng: 34.7470, color: '#dc2626', icon: '🔨' },
  { id: 'veta-many',name: 'VETA Manyara',                   city: 'Babati',        area: 'Babati',           lat: -4.2120, lng: 35.7480, color: '#a16207', icon: '🔨' },

  // ── ZANZIBAR (5) ──
  { id: 'suza',     name: 'SUZA (State Univ Zanzibar)',     city: 'Zanzibar',      area: 'Tunguu',           lat: -6.2570, lng: 39.2680, color: '#dc2626', icon: '🏛️' },
  { id: 'zu',       name: 'Zanzibar University',            city: 'Zanzibar',      area: 'Tunguu',           lat: -6.2580, lng: 39.2710, color: '#0d9488', icon: '🎓' },
  { id: 'sumait',   name: 'SUMAIT University',              city: 'Zanzibar',      area: 'Chukwani',         lat: -6.2230, lng: 39.2050, color: '#16a34a', icon: '☪️' },
  { id: 'znz-edu',  name: 'Zanzibar Institute of Education', city: 'Zanzibar',      area: 'Beit el-Ras',      lat: -6.1450, lng: 39.1850, color: '#7c3aed', icon: '🎓' },
  { id: 'veta-znz', name: 'VETA Zanzibar',                  city: 'Zanzibar',      area: 'Mtoni',            lat: -6.1380, lng: 39.1980, color: '#dc2626', icon: '🔨' }
];

let activeCity = 'all';

let activeCampus = null;

function renderCampuses() {
  const grid = document.getElementById('campusGrid');
  const cities = ['all', ...new Set(CAMPUSES.map(c => c.city))];

  // City filter chips
  const filterHtml = `
    <div class="city-filter">
      ${cities.map(city => `
        <button class="city-chip ${activeCity === city ? 'active' : ''}"
                onclick="filterByCity('${city}')">
          ${city === 'all' ? `🇹🇿 Vyote (${CAMPUSES.length})` : `${city} (${CAMPUSES.filter(c => c.city === city).length})`}
        </button>
      `).join('')}
    </div>
  `;

  // Filter campuses
  const filtered = activeCity === 'all' ? CAMPUSES : CAMPUSES.filter(c => c.city === activeCity);

  grid.innerHTML = filterHtml + `
    <div class="campus-cards-grid">
      ${filtered.map(c => `
        <button class="campus-card ${activeCampus?.id === c.id ? 'active' : ''}"
                style="border-color:${c.color}"
                onclick="selectCampus('${c.id}')">
          <div class="campus-icon" style="background:${c.color}">${c.icon}</div>
          <div class="campus-name">${c.name}</div>
          <div class="campus-city">${c.area}, ${c.city}</div>
        </button>
      `).join('')}
    </div>
  `;

  if (activeCampus) renderCampusListings();
  else document.getElementById('campusListings').innerHTML = '<p class="hint" style="text-align:center;padding:30px">👆 Chagua chuo chako kuona nyumba za karibu</p>';
}

function filterByCity(city) {
  activeCity = city;
  renderCampuses();
}
window.filterByCity = filterByCity;

function selectCampus(id) {
  activeCampus = CAMPUSES.find(c => c.id === id);
  renderCampuses();
  setTimeout(renderCampusMap, 100);
}
window.selectCampus = selectCampus;

let campusMapInstance = null;
let campusMapMarkers = [];

function renderCampusMap() {
  if (!activeCampus) return;
  const el = document.getElementById('campusMap');
  el.classList.add('active');

  if (!campusMapInstance) {
    campusMapInstance = L.map('campusMap').setView([activeCampus.lat, activeCampus.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '© OpenStreetMap'
    }).addTo(campusMapInstance);
  } else {
    campusMapInstance.invalidateSize();
    campusMapInstance.setView([activeCampus.lat, activeCampus.lng], 14);
  }

  campusMapMarkers.forEach(m => campusMapInstance.removeLayer(m));
  campusMapMarkers = [];

  // Campus marker (big, distinctive)
  const campusIcon = L.divIcon({
    className: 'campus-pin',
    html: activeCampus.icon,
    iconSize: [38, 38]
  });
  const campusMarker = L.marker([activeCampus.lat, activeCampus.lng], { icon: campusIcon })
    .addTo(campusMapInstance)
    .bindPopup(`<strong>${activeCampus.name}</strong><br><small>${activeCampus.area}, ${activeCampus.city}</small>`)
    .openPopup();
  campusMapMarkers.push(campusMarker);

  // Nearby house markers
  const nearby = allListings
    .filter(l => l.lat && l.lng && l.city === activeCampus.city)
    .map(l => ({ ...l, _distance: distanceKm(activeCampus.lat, activeCampus.lng, l.lat, l.lng) }))
    .filter(l => l._distance <= 8);

  nearby.forEach(l => {
    const priceShort = l.price >= 1000000
      ? (l.price / 1000000).toFixed(1) + 'M'
      : Math.round(l.price / 1000) + 'k';
    const icon = L.divIcon({
      className: 'price-marker',
      html: `TZS ${priceShort}`,
      iconSize: null
    });
    const marker = L.marker([l.lat, l.lng], { icon }).addTo(campusMapInstance);
    marker.bindPopup(`
      <div style="min-width:180px">
        <img src="${(l.images && l.images[0]) || 'icon-192.png'}" style="width:100%;height:100px;object-fit:cover;border-radius:6px;margin-bottom:6px" />
        <strong>${l.title}</strong><br>
        <span style="color:#0f766e;font-weight:700">${formatPrice(l.price, l.type)}</span><br>
        <span class="dist-badge">${l._distance.toFixed(1)} km</span><br>
        <a href="#" onclick="closeDetail();openDetail('${l.id}');return false;" style="color:#0f766e;font-weight:600">Ona zaidi →</a>
      </div>
    `);
    campusMapMarkers.push(marker);
  });

  if (campusMapMarkers.length > 1) {
    const group = L.featureGroup(campusMapMarkers);
    campusMapInstance.fitBounds(group.getBounds().pad(0.15));
  }
}

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) ** 2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function renderCampusListings() {
  if (!activeCampus) return;
  const nearby = allListings
    .filter(l => l.lat && l.lng && l.city === activeCampus.city)
    .map(l => ({ ...l, _distance: distanceKm(activeCampus.lat, activeCampus.lng, l.lat, l.lng) }))
    .filter(l => l._distance <= 8)
    .sort((a, b) => a._distance - b._distance);

  const out = document.getElementById('campusListings');
  if (!nearby.length) {
    out.innerHTML = `<div class="empty">Bado hakuna nyumba karibu na ${activeCampus.name}. Tangaza yako kwanza!</div>`;
    return;
  }
  out.innerHTML = `
    <p style="margin:14px 0;color:var(--muted);font-size:13px">📍 ${nearby.length} nyumba ndani ya 8km kutoka <b>${activeCampus.name}</b></p>
    <div class="grid">
      ${nearby.map(l => listingCard(l).replace('</div>\n        <div class="card-meta">\n          <span>📍',
        `<span class="dist-badge">${l._distance.toFixed(1)} km kutoka chuo</span></div><div class="card-meta"><span>📍`)).join('')}
    </div>
  `;
}

// ============== RENDER LISTINGS ==============
function formatPrice(p, type) {
  const isShort = ['guesthouse', 'bnb'].includes(type);
  const suffix = isShort ? t('perNight') : t('perMonth');
  return 'TZS ' + Number(p).toLocaleString('en-US') + suffix;
}

function isBookable(type) {
  return ['guesthouse', 'bnb'].includes(type);
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
        <div class="card-price">${formatPrice(l.price, l.type)}</div>
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
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function openDetail(id) {
  const l = allListings.find(x => x.id === id);
  if (!l) return;
  const wa = String(l.whatsapp || '').replace(/\D/g, '');
  const msg = encodeURIComponent(`Habari, nimevutiwa na nyumba yako "${l.title}" kwenye Nodalali.`);
  const trustBadge = getTrustBadge(l);

  // Check report count
  let reportCount = 0;
  try {
    const r = await fetch(`/api/reports/${id}`);
    reportCount = (await r.json()).count || 0;
  } catch {}
  const flagged = reportCount >= 3;

  document.getElementById('detailBody').innerHTML = `
    ${flagged ? `<div class="warn-banner">⚠️ Tangazo hili limeripotiwa na watumiaji ${reportCount}. Kuwa makini sana!</div>` : ''}
    <img src="${escapeHtml((l.images && l.images[0]) || 'icon-192.png')}" class="detail-img" />
    <div class="trust-row">${trustBadge}</div>
    <div class="card-price">${formatPrice(l.price, l.type)}</div>
    <h2 id="detailTitle_${id}" style="margin:8px 0">${escapeHtml(l.title)}</h2>
    <p class="hint">📍 ${escapeHtml(l.area)}, ${escapeHtml(l.city)}</p>
    <div class="card-meta">
      <span>🛏 Vyumba ${l.bedrooms}</span>
      <span>🚿 Bafu ${l.bathrooms}</span>
      <span>🏷 ${escapeHtml(l.type)}</span>
    </div>
    ${currentLang !== 'sw' ? `<button id="translateBtn_${id}" class="btn-translate" onclick="translateListingDetail('${id}')">${t('translate')}</button>` : ''}
    <p id="detailDesc_${id}" style="margin:16px 0;line-height:1.5">${escapeHtml(l.description || '')}</p>

    ${(l.lat && l.lng) ? `<div id="detailMiniMap" class="detail-mini-map"></div>` : ''}

    <div class="safety-box">
      <strong>🛡️ KANUNI ZA USALAMA</strong>
      <ul>
        <li>✅ Tembelea nyumba kabla ya kulipa</li>
        <li>✅ Kutana na mwenye nyumba ana kwa ana</li>
        <li>❌ USIWAHI kulipa amana kabla ya kuona nyumba</li>
        <li>❌ USIWAHI kutuma OTP au password yako</li>
        <li>❌ USIWAHI kulipa kwa Bitcoin, gift cards, au Western Union</li>
      </ul>
    </div>

    ${isBookable(l.type) ? renderBookingBox(l, wa) : ''}

    <div class="contact-row">
      <a href="https://wa.me/${wa}?text=${msg}" target="_blank" class="btn-wa">💬 WhatsApp</a>
      <a href="tel:+${wa}" class="btn-call">📞 Piga simu</a>
    </div>
    <button class="btn-report" onclick="openReport('${id}')">🚩 Ripoti tangazo hili</button>

    <div id="reviewsSection_${id}" class="review-list">
      <h3 style="margin:18px 0 8px">⭐ ${currentLang === 'sw' ? 'Maoni ya Wateja' : 'Reviews'}</h3>
      <div id="reviewsContent_${id}">${currentLang === 'sw' ? 'Inapakia...' : 'Loading...'}</div>
      <div class="review-form">
        <strong>${t('leaveReview')}</strong>
        <div class="star-picker" id="starPicker_${id}" data-rating="0">
          ${[1,2,3,4,5].map(i => `<span class="star" onclick="setStarRating('${id}', ${i})">★</span>`).join('')}
        </div>
        <textarea id="reviewComment_${id}" placeholder="${currentLang === 'sw' ? 'Andika maoni yako (hiari)' : 'Write your comment (optional)'}" rows="2" style="width:100%;margin-top:8px"></textarea>
        <button class="btn-primary" style="margin-top:8px" onclick="submitReview('${id}')">${t('submit')}</button>
      </div>
    </div>
  `;
  setTimeout(() => loadReviews(id), 100);
  document.getElementById('detailModal').classList.add('open');

  // Render mini-map for this listing if coordinates exist
  if (l.lat && l.lng) {
    setTimeout(() => {
      const el = document.getElementById('detailMiniMap');
      if (!el || el._leaflet_id) return;
      const miniMap = L.map('detailMiniMap', { zoomControl: false, scrollWheelZoom: false })
        .setView([l.lat, l.lng], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(miniMap);
      L.marker([l.lat, l.lng]).addTo(miniMap)
        .bindPopup(`<strong>${escapeHtml(l.title)}</strong>`).openPopup();
    }, 200);
  }
}

function getTrustBadge(l) {
  const badges = [];
  if (l.verified) badges.push('<span class="badge-trust verified">✓ Verified</span>');
  if (l.featured) badges.push('<span class="badge-trust featured">⭐ Featured</span>');
  const ageMs = Date.now() - (l.createdAt || Date.now());
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  if (ageDays < 1) badges.push('<span class="badge-trust new">🆕 Mpya</span>');
  if (!l.verified && ageDays < 0.1) badges.push('<span class="badge-trust unverified">⚠ Haijathibitishwa</span>');
  return badges.join(' ');
}

// ============== REVIEWS ==============
// ============== LIVE TRANSLATOR (MyMemory free API, no key) ==============
const translationCache = new Map();
async function translateText(text, targetLang, sourceLang = 'sw') {
  if (!text || sourceLang === targetLang) return text;
  const cacheKey = `${sourceLang}|${targetLang}|${text.slice(0, 100)}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 500))}&langpair=${sourceLang}|${targetLang}`;
    const r = await fetch(url);
    const data = await r.json();
    const translated = data.responseData?.translatedText || text;
    translationCache.set(cacheKey, translated);
    return translated;
  } catch (e) {
    console.warn('Translation failed:', e);
    return text;
  }
}

async function translateListingDetail(listingId) {
  if (currentLang === 'sw') return toast('Tayari iko kwenye Kiswahili');
  const l = allListings.find(x => x.id === listingId);
  if (!l) return;
  const titleEl = document.getElementById('detailTitle_' + listingId);
  const descEl = document.getElementById('detailDesc_' + listingId);
  const btn = document.getElementById('translateBtn_' + listingId);
  if (!titleEl || !descEl) return;

  // Toggle: if already translated, restore original
  if (titleEl.dataset.translated === 'true') {
    titleEl.textContent = titleEl.dataset.original;
    descEl.textContent = descEl.dataset.original;
    titleEl.dataset.translated = 'false';
    btn.textContent = t('translate');
    return;
  }

  btn.textContent = '⏳ ...';
  const [tt, td] = await Promise.all([
    translateText(l.title, currentLang),
    translateText(l.description || '', currentLang)
  ]);
  titleEl.dataset.original = l.title;
  descEl.dataset.original = l.description || '';
  titleEl.textContent = tt;
  descEl.textContent = td;
  titleEl.dataset.translated = 'true';
  btn.textContent = t('original');
}
window.translateListingDetail = translateListingDetail;

async function loadReviews(listingId) {
  try {
    const r = await fetch('/api/reviews/' + listingId);
    const data = await r.json();
    const el = document.getElementById('reviewsContent_' + listingId);
    if (!el) return;
    if (!data.count) {
      el.innerHTML = `<p class="hint">${currentLang === 'sw' ? 'Bado hakuna maoni. Kuwa wa kwanza!' : 'No reviews yet. Be the first!'}</p>`;
      return;
    }
    const stars = '★'.repeat(Math.round(data.avg)) + '☆'.repeat(5 - Math.round(data.avg));
    el.innerHTML = `
      <div class="rating-row">
        <span class="rating-stars">${stars}</span>
        <strong>${data.avg.toFixed(1)}</strong>
        <small class="hint">(${data.count} ${currentLang === 'sw' ? 'maoni' : 'reviews'})</small>
      </div>
      ${data.reviews.slice(0, 5).map(r => `
        <div class="review-item">
          <div class="review-meta">
            <span class="rating-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            <span>${new Date(r.createdAt).toLocaleDateString()}</span>
          </div>
          ${r.comment ? `<div class="review-comment">${escapeHtml(r.comment)}</div>` : ''}
        </div>
      `).join('')}
    `;
  } catch (e) { console.warn('reviews', e); }
}

function setStarRating(listingId, rating) {
  const picker = document.getElementById('starPicker_' + listingId);
  picker.dataset.rating = rating;
  picker.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('active', i < rating);
  });
}
window.setStarRating = setStarRating;

async function submitReview(listingId) {
  if (!currentUser) { toast(currentLang === 'sw' ? 'Ingia kwanza' : 'Sign in first'); openAuth(); return; }
  const picker = document.getElementById('starPicker_' + listingId);
  const rating = Number(picker.dataset.rating);
  const comment = document.getElementById('reviewComment_' + listingId).value;
  if (!rating) { toast(currentLang === 'sw' ? 'Chagua nyota' : 'Pick stars'); return; }
  try {
    const r = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, reviewerId: currentUser.uid, rating, comment })
    });
    const data = await r.json();
    if (data.ok) {
      toast(currentLang === 'sw' ? '✓ Asante kwa maoni yako!' : '✓ Thanks for your review!');
      document.getElementById('reviewComment_' + listingId).value = '';
      loadReviews(listingId);
    } else toast('❌ ' + (data.error || 'Hitilafu'));
  } catch (e) { toast('❌ ' + e.message); }
}
window.submitReview = submitReview;

// ============== BOOKING ==============
function renderBookingBox(l, wa) {
  const today = new Date().toISOString().slice(0, 10);
  return `
    <div class="booking-box">
      <h3>📅 ${currentLang === 'sw' ? 'Book hii nyumba' : 'Book this place'}</h3>
      <div class="booking-row">
        <label>
          <small>${t('checkIn')}</small>
          <input type="date" id="bookCheckIn_${l.id}" min="${today}" onchange="updateBookingTotal('${l.id}', ${l.price})" />
        </label>
        <label>
          <small>${t('checkOut')}</small>
          <input type="date" id="bookCheckOut_${l.id}" min="${today}" onchange="updateBookingTotal('${l.id}', ${l.price})" />
        </label>
      </div>
      <div class="booking-summary" id="bookSummary_${l.id}">
        ${currentLang === 'sw' ? 'Chagua tarehe' : 'Pick dates'}
      </div>
      <input type="text" id="bookGuestName_${l.id}" placeholder="${t('yourName')}" style="width:100%;padding:8px;margin:4px 0;border:1px solid #f59e0b;border-radius:6px" />
      <input type="tel" id="bookGuestPhone_${l.id}" placeholder="${t('phone')}" pattern="255[0-9]{9}" style="width:100%;padding:8px;margin:4px 0;border:1px solid #f59e0b;border-radius:6px" />
      <button class="btn-primary" style="width:100%" onclick="submitBooking('${l.id}', ${l.price}, '${wa}', '${l.title.replace(/'/g, '')}')">${t('bookNow')}</button>
    </div>
  `;
}

function updateBookingTotal(listingId, price) {
  const ci = document.getElementById('bookCheckIn_' + listingId).value;
  const co = document.getElementById('bookCheckOut_' + listingId).value;
  const summary = document.getElementById('bookSummary_' + listingId);
  if (!ci || !co) { summary.textContent = currentLang === 'sw' ? 'Chagua tarehe' : 'Pick dates'; return; }
  const nights = Math.round((new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24));
  if (nights < 1) { summary.textContent = currentLang === 'sw' ? '⚠️ Tarehe zisizo sahihi' : '⚠️ Invalid dates'; return; }
  const total = nights * price;
  summary.textContent = `${nights} ${t('nights')} × TZS ${price.toLocaleString()} = ${t('total')}: TZS ${total.toLocaleString()}`;
}
window.updateBookingTotal = updateBookingTotal;

async function submitBooking(listingId, price, wa, title) {
  const ci = document.getElementById('bookCheckIn_' + listingId).value;
  const co = document.getElementById('bookCheckOut_' + listingId).value;
  const guestName = document.getElementById('bookGuestName_' + listingId).value.trim();
  const guestPhone = document.getElementById('bookGuestPhone_' + listingId).value.trim();
  if (!ci || !co) return toast(currentLang === 'sw' ? 'Chagua tarehe' : 'Pick dates');
  if (!guestName || !guestPhone) return toast(currentLang === 'sw' ? 'Jaza taarifa zako' : 'Fill your info');
  if (!/^255[67][0-9]{8}$/.test(guestPhone)) return toast('Phone: 255...');
  const nights = Math.round((new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24));
  if (nights < 1) return toast(currentLang === 'sw' ? 'Tarehe zisizo sahihi' : 'Invalid dates');
  const total = nights * price;

  try {
    const r = await fetch('/api/bookings', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, guestName, guestPhone, checkIn: ci, checkOut: co, nights, total })
    });
    const data = await r.json();
    if (data.ok) {
      toast(currentLang === 'sw' ? '✓ Booking imefanywa! Wasiliana na mwenye nyumba.' : '✓ Booking made! Contact host.');
      const msg = encodeURIComponent(`Habari, nimeBOOK "${title}" kwenye Nodalali.\nCheck-in: ${ci}\nCheck-out: ${co}\nUsiku: ${nights}\nJumla: TZS ${total.toLocaleString()}\nJina: ${guestName}\nSimu: ${guestPhone}`);
      window.open(`https://wa.me/${wa}?text=${msg}`, '_blank');
    } else toast('❌ ' + (data.error || 'Hitilafu'));
  } catch (e) { toast('❌ ' + e.message); }
}
window.submitBooking = submitBooking;

async function openReport(listingId) {
  const reasons = [
    'Ni utapeli (scam)',
    'Picha za uongo',
    'Bei sio sahihi',
    'Mwenye nyumba haisemi ukweli',
    'Tangazo limechelewa (lipo tayari kupanga)',
    'Maudhui yasiyofaa',
    'Mengineyo'
  ];
  const choice = prompt(`🚩 Sababu ya kuripoti tangazo hili?\n\n${reasons.map((r,i)=>`${i+1}. ${r}`).join('\n')}\n\nIngiza nambari (1-${reasons.length}):`);
  if (!choice) return;
  const reason = reasons[parseInt(choice)-1];
  if (!reason) return toast('Chaguo si sahihi');

  try {
    const r = await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, reporterId: currentUser?.uid || 'anon', reason })
    });
    const data = await r.json();
    if (data.ok) {
      toast(`✓ Asante! Tangazo limeripotiwa (${data.reportCount} ripoti)`);
      if (data.flagged) toast('⚠️ Tangazo sasa limeashiriwa kwa ukaguzi wa msimamizi');
    } else toast('❌ ' + (data.error || 'Hitilafu'));
  } catch (e) { toast('❌ Mtandao tatizo'); }
}
window.openReport = openReport;
function closeDetail() { document.getElementById('detailModal').classList.remove('open'); }

// ============== MAP ==============
let browseMapInstance = null;
let browseMapMarkers = [];

function initMap() {
  if (mapInstance) { mapInstance.invalidateSize(); return; }
  mapInstance = L.map('leafletMap').setView([-6.7924, 39.2083], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
  }).addTo(mapInstance);
  refreshMapMarkers(mapInstance, mapMarkers);
}

function initBrowseMap() {
  if (browseMapInstance) { browseMapInstance.invalidateSize(); return; }
  browseMapInstance = L.map('leafletMapBrowse').setView([-6.7924, 39.2083], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
  }).addTo(browseMapInstance);
  refreshMapMarkers(browseMapInstance, browseMapMarkers);
}

function refreshMapMarkers(map, markers) {
  if (!map) return;
  markers.forEach(m => map.removeLayer(m));
  markers.length = 0;
  const valid = allListings.filter(l => l.lat && l.lng);
  valid.forEach(l => {
    const priceShort = l.price >= 1000000
      ? (l.price / 1000000).toFixed(1) + 'M'
      : Math.round(l.price / 1000) + 'k';
    const icon = L.divIcon({
      className: 'price-marker',
      html: `TZS ${priceShort}`,
      iconSize: null
    });
    const marker = L.marker([l.lat, l.lng], { icon }).addTo(map);
    marker.bindPopup(`
      <div style="min-width:180px">
        <img src="${(l.images && l.images[0]) || 'icon-192.png'}" style="width:100%;height:100px;object-fit:cover;border-radius:6px;margin-bottom:6px" />
        <strong>${l.title}</strong><br>
        <span style="color:#0f766e;font-weight:700">${formatPrice(l.price, l.type)}</span><br>
        <small>📍 ${l.area}, ${l.city}</small><br>
        <a href="#" onclick="closeDetail();openDetail('${l.id}');return false;" style="color:#0f766e;font-weight:600">Ona zaidi →</a>
      </div>
    `);
    markers.push(marker);
  });
  if (valid.length) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

function toggleMapView() {
  const split = document.getElementById('splitView');
  const btn = document.getElementById('toggleMapBtn');
  split.classList.toggle('with-map');
  if (split.classList.contains('with-map')) {
    btn.textContent = '✕ Ficha Ramani';
    setTimeout(initBrowseMap, 100);
  } else {
    btn.textContent = '🗺️ Onyesha Ramani';
  }
}
window.toggleMapView = toggleMapView;

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

  // ── SECURITY: server-side scam + block check before publishing ──
  try {
    const check = await fetch('/api/listings/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: fd.get('whatsapp'),
        userId: currentUser.uid,
        title: fd.get('title'),
        description: fd.get('description')
      })
    });
    const checkData = await check.json();
    if (!check.ok) { toast('🛡️ ' + (checkData.error || 'Imekataliwa')); return; }
  } catch (err) { console.warn('Security check skipped:', err); }

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
applyTheme();
applyI18n();
renderListings();
