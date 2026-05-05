-- Nodalali initial schema (mirrors Firestore collections, with Postgres + RLS)

create extension if not exists "pgcrypto";

-- ── LISTINGS ──────────────────────────────────────────────
create table public.listings (
  id            uuid primary key default gen_random_uuid(),
  owner_id      uuid references auth.users(id) on delete cascade,
  title         text not null check (char_length(title) between 1 and 100),
  area          text not null check (char_length(area) between 1 and 60),
  city          text not null check (city in (
                  'Dar es Salaam','Arusha','Mwanza','Dodoma','Mbeya',
                  'Zanzibar','Morogoro','Tanga','Iringa','Kigoma','Tabora','Moshi')),
  rent_type     text not null check (rent_type in ('house','apartment','room','self','commercial')),
  category      text not null default 'rental' check (category in ('rental','stay','lounge')),
  price         numeric not null check (price > 0 and price <= 999999999),
  whatsapp      text not null check (whatsapp ~ '^255[67][0-9]{8}$'),
  description   text,
  photos        text[] default '{}',
  lat           double precision,
  lng           double precision,
  campus        text,
  verified      boolean not null default false,
  paid          boolean not null default false,
  created_at    timestamptz not null default now()
);
create index on public.listings (city);
create index on public.listings (category);
create index on public.listings (campus);

-- ── REVIEWS ───────────────────────────────────────────────
create table public.reviews (
  id           uuid primary key default gen_random_uuid(),
  listing_id   uuid references public.listings(id) on delete cascade,
  reviewer_id  uuid references auth.users(id) on delete cascade,
  rating       int not null check (rating between 1 and 5),
  comment      text,
  created_at   timestamptz not null default now(),
  unique (listing_id, reviewer_id)
);

-- ── BOOKINGS ──────────────────────────────────────────────
create table public.bookings (
  id           uuid primary key default gen_random_uuid(),
  listing_id   uuid references public.listings(id) on delete cascade,
  guest_id     uuid references auth.users(id) on delete cascade,
  guest_phone  text not null check (guest_phone ~ '^255[67][0-9]{8}$'),
  check_in     date not null,
  check_out    date not null,
  status       text not null default 'pending' check (status in ('pending','confirmed','cancelled')),
  created_at   timestamptz not null default now(),
  check (check_out > check_in)
);

-- ── FAVORITES ─────────────────────────────────────────────
create table public.favorites (
  user_id      uuid references auth.users(id) on delete cascade,
  listing_id   uuid references public.listings(id) on delete cascade,
  created_at   timestamptz not null default now(),
  primary key (user_id, listing_id)
);

-- ── PAYMENTS ──────────────────────────────────────────────
create table public.payments (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references auth.users(id) on delete cascade,
  listing_id   uuid references public.listings(id),
  amount       numeric not null check (amount > 0),
  currency     text not null default 'TZS',
  provider     text not null,
  reference    text not null unique,
  status       text not null default 'pending' check (status in ('pending','success','failed')),
  created_at   timestamptz not null default now()
);

-- ── REPORTS (abuse) ───────────────────────────────────────
create table public.reports (
  id           uuid primary key default gen_random_uuid(),
  listing_id   uuid references public.listings(id) on delete cascade,
  reporter_id  uuid references auth.users(id) on delete set null,
  reason       text not null,
  created_at   timestamptz not null default now()
);

-- ── ROW LEVEL SECURITY ────────────────────────────────────
alter table public.listings  enable row level security;
alter table public.reviews   enable row level security;
alter table public.bookings  enable row level security;
alter table public.favorites enable row level security;
alter table public.payments  enable row level security;
alter table public.reports   enable row level security;

create policy "listings public read"   on public.listings for select using (true);
create policy "listings owner insert"  on public.listings for insert with check (auth.uid() = owner_id);
create policy "listings owner update"  on public.listings for update using (auth.uid() = owner_id);
create policy "listings owner delete"  on public.listings for delete using (auth.uid() = owner_id);

create policy "reviews public read"    on public.reviews for select using (true);
create policy "reviews own insert"     on public.reviews for insert with check (auth.uid() = reviewer_id);
create policy "reviews own update"     on public.reviews for update using (auth.uid() = reviewer_id);
create policy "reviews own delete"     on public.reviews for delete using (auth.uid() = reviewer_id);

create policy "bookings own read"      on public.bookings for select
  using (auth.uid() = guest_id or auth.uid() in (select owner_id from public.listings where id = listing_id));
create policy "bookings own insert"    on public.bookings for insert with check (auth.uid() = guest_id);

create policy "favorites own all"      on public.favorites for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "payments own read"      on public.payments for select using (auth.uid() = user_id);
create policy "payments own insert"    on public.payments for insert with check (auth.uid() = user_id);

create policy "reports insert"         on public.reports for insert with check (auth.uid() is not null);
