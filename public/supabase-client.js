// Supabase wrapper for Nodalali — talks to Postgres via REST.
// Mirrors the Firebase API used in script.js so we can A/B between backends.

(function () {
  const cfg = window.supabaseConfig || {};
  if (!cfg.url || cfg.url.startsWith('PASTE_')) {
    console.warn('[supabase] not configured — skipping');
    window.supabase = null;
    return;
  }

  // Loaded via <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  const { createClient } = window.supabase || {};
  if (!createClient) {
    console.error('[supabase] SDK not loaded — add the CDN script tag');
    return;
  }
  const sb = createClient(cfg.url, cfg.anonKey, {
    auth: { persistSession: true, autoRefreshToken: true }
  });

  window.nodalaliSupabase = {
    async listListings({ city, category, campus } = {}) {
      let q = sb.from('listings').select('*').order('created_at', { ascending: false });
      if (city)     q = q.eq('city', city);
      if (category) q = q.eq('category', category);
      if (campus)   q = q.eq('campus', campus);
      const { data, error } = await q;
      if (error) { console.error(error); return []; }
      return data;
    },

    async createListing(listing) {
      const { data, error } = await sb.from('listings').insert(listing).select().single();
      if (error) throw error;
      return data;
    },

    async listReviews(listingId) {
      const { data } = await sb.from('reviews').select('*').eq('listing_id', listingId);
      return data || [];
    },

    async createReview(r) {
      const { data, error } = await sb.from('reviews').insert(r).select().single();
      if (error) throw error;
      return data;
    },

    async createBooking(b) {
      const { data, error } = await sb.from('bookings').insert(b).select().single();
      if (error) throw error;
      return data;
    },

    async favorite(listingId) {
      const user = (await sb.auth.getUser()).data.user;
      if (!user) throw new Error('not signed in');
      const { error } = await sb.from('favorites').insert({ user_id: user.id, listing_id: listingId });
      if (error) throw error;
    },

    async signInWithEmail(email, password) {
      return sb.auth.signInWithPassword({ email, password });
    },
    async signUpWithEmail(email, password) {
      return sb.auth.signUp({ email, password });
    },
    async signOut() { return sb.auth.signOut(); },

    raw: sb
  };

  console.log('[supabase] ready');
})();
