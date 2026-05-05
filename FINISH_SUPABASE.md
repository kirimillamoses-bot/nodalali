# Finish Supabase setup — 2 min

Everything is wired except the keys. To complete:

## Step 1 — Get keys from Supabase dashboard
Go to your project → **Settings** (gear icon) → **API**.

Copy:
- **Project URL** → `https://xxxxx.supabase.co`
- **anon public** key → `eyJhbGc...`
- **service_role** key → `eyJhbGc...` (KEEP SECRET)

Plus the **DB password** you set when creating the project.

## Step 2 — Paste into 2 files

**`supabase-config.js`** (browser-side, safe to ship):
```js
window.supabaseConfig = {
  url: 'https://xxxxx.supabase.co',
  anonKey: 'eyJhbGc...'
};
```

**`.env`** (server-side, NEVER commit):
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
SUPABASE_DB_PASSWORD=your-db-password
```

## Step 3 — Push schema + migrate data
```bash
cd /Users/moses/Developer/nodalali
supabase login                       # opens browser
supabase link --project-ref <ref>    # ref is the xxxxx in your URL
supabase db push                     # creates 6 tables on your live DB
node migrate-to-supabase.js          # copies 60 listings from Firebase
```

## Step 4 — Create the `listings` storage bucket (for image uploads)
The post-form image uploader writes JPEGs to a Supabase Storage bucket called `listings`.

1. Supabase dashboard → **Storage** → **New bucket**
2. Name: `listings`
3. **Public bucket**: ✅ ON (so listing photos are viewable without auth)
4. File size limit: 5 MB (matches client compress)
5. Allowed MIME types: `image/jpeg, image/png, image/webp`

### Storage policies
On the bucket → **Policies** tab, add:

```sql
-- Anyone can read (public listings)
create policy "public read" on storage.objects
  for select using (bucket_id = 'listings');

-- Authenticated users can upload to their own folder
create policy "auth upload" on storage.objects
  for insert with check (
    bucket_id = 'listings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

-- Owners can delete their own files
create policy "owner delete" on storage.objects
  for delete using (
    bucket_id = 'listings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
```

**If the bucket isn't created**, the upload will fail silently and the listing will fall back to embedding the photo as an inline base64 data URL (works but bloats records).

## Step 5 — Add the `messages` table (for in-app chat)

The Ujumbe (💬) tab works locally via localStorage by default. To enable real cross-device chat with realtime push, add this table:

```sql
create table if not exists public.messages (
  id           text primary key,
  thread_id    text not null,
  listing_id   text not null,
  sender_id    text not null,
  recipient_id text not null,
  body         text not null,
  created_at   timestamptz not null default now(),
  read_at      timestamptz
);
create index if not exists idx_messages_thread on public.messages (thread_id, created_at);
create index if not exists idx_messages_recipient on public.messages (recipient_id, read_at);

alter table public.messages enable row level security;

-- Read: only the two participants
create policy "msg read"   on public.messages for select
  using (auth.uid()::text = sender_id or auth.uid()::text = recipient_id);

-- Send: only as yourself
create policy "msg insert" on public.messages for insert
  with check (auth.uid()::text = sender_id);

-- Mark read: only recipient can update read_at
create policy "msg update" on public.messages for update
  using (auth.uid()::text = recipient_id);

-- Realtime
alter publication supabase_realtime add table public.messages;
```

After running this:
- Signed-in users get realtime delivery + cross-device sync
- Anonymous (not signed in) users keep using localStorage — chats stay on that device

Done.
