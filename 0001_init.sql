-- Sunshine Youth Association — initial schema
-- Run via `supabase db push` or the Supabase SQL editor.
-- Media files themselves live in Supabase Storage / a video streaming
-- service; only metadata and storage references are kept here.

create extension if not exists "uuid-ossp";

-- ---------- Enums ----------
create type media_type as enum ('photo', 'video', 'banner');
create type media_status as enum (
  'uploading', 'processing', 'pending_review', 'approved',
  'published', 'rejected', 'archived', 'deleted'
);
create type visibility as enum ('public', 'private');
create type announcement_priority as enum ('normal', 'important', 'urgent');
create type event_status as enum ('upcoming', 'live', 'completed', 'cancelled');
create type sponsor_tier as enum ('main', 'gold', 'silver', 'supporter');
create type enquiry_status as enum (
  'new', 'contacted', 'negotiating', 'confirmed', 'rejected', 'closed'
);
create type volunteer_status as enum ('new', 'contacted', 'approved', 'inactive');
create type submission_status as enum ('pending', 'approved', 'rejected');

-- ---------- Core identity ----------
create table roles (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  description text
);

create table user_roles (
  user_id uuid references auth.users(id) on delete cascade,
  role_id uuid references roles(id) on delete cascade,
  primary key (user_id, role_id)
);

-- ---------- Festival years ----------
create table years (
  id uuid primary key default uuid_generate_v4(),
  year integer unique not null,
  title text,
  description text,
  start_date date,
  end_date date,
  venue text,
  theme text,
  cover_media_id uuid,
  status text default 'draft',
  created_at timestamptz default now()
);

create table events (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  title text not null,
  slug text not null,
  description text,
  venue text,
  start_at timestamptz,
  end_at timestamptz,
  banner_media_id uuid,
  status event_status default 'upcoming',
  created_at timestamptz default now(),
  unique (year_id, slug)
);

create table announcements (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  title text not null,
  content text not null,
  priority announcement_priority default 'normal',
  image_id uuid,
  publish_at timestamptz default now(),
  expires_at timestamptz,
  status text default 'draft',
  created_by uuid references auth.users(id)
);

-- ---------- Media & galleries ----------
create table albums (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  event_id uuid references events(id) on delete set null,
  title text not null,
  slug text not null,
  description text,
  cover_media_id uuid,
  display_order integer default 0,
  status text default 'draft',
  created_at timestamptz default now(),
  unique (year_id, slug)
);

create table media (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  album_id uuid references albums(id) on delete set null,
  event_id uuid references events(id) on delete set null,
  type media_type not null,
  title text,
  description text,
  original_filename text,
  original_storage_path text,   -- protected bucket, signed URL only
  public_storage_path text,     -- web-optimized derivative
  thumbnail_path text,
  mime_type text,
  file_size bigint,
  width integer,
  height integer,
  duration_seconds integer,
  status media_status default 'uploading',
  visibility visibility default 'public',
  uploaded_by uuid references auth.users(id),
  published_at timestamptz,
  created_at timestamptz default now()
);

alter table albums
  add constraint albums_cover_media_fk
  foreign key (cover_media_id) references media(id) on delete set null;
alter table events
  add constraint events_banner_media_fk
  foreign key (banner_media_id) references media(id) on delete set null;
alter table years
  add constraint years_cover_media_fk
  foreign key (cover_media_id) references media(id) on delete set null;
alter table announcements
  add constraint announcements_image_fk
  foreign key (image_id) references media(id) on delete set null;

create table tags (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  slug text unique not null
);

create table media_tags (
  media_id uuid references media(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (media_id, tag_id)
);

create table media_submissions (
  id uuid primary key default uuid_generate_v4(),
  submitter_name text,
  contact text,
  media_id uuid references media(id) on delete set null,
  caption text,
  consent_confirmed boolean default false,
  status submission_status default 'pending',
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz default now()
);

-- ---------- Sponsors ----------
create table sponsors (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  name text not null,
  slug text not null,
  logo_media_id uuid references media(id) on delete set null,
  tier sponsor_tier not null,
  description text,
  website_url text,
  phone text,
  display_order integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

create table sponsor_enquiries (
  id uuid primary key default uuid_generate_v4(),
  sponsor_name text,
  contact_name text,
  phone text,
  email text,
  message text,
  status enquiry_status default 'new',
  created_at timestamptz default now()
);

-- ---------- Donations & expenses ----------
create table donations (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  contributor_name text,
  amount numeric not null,
  payment_method text,
  payment_reference text,
  donation_date date default current_date,
  public_visibility boolean default false,
  notes text,
  entered_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table expense_categories (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null
);

create table expenses (
  id uuid primary key default uuid_generate_v4(),
  year_id uuid references years(id) on delete cascade,
  category_id uuid references expense_categories(id),
  description text,
  amount numeric not null,
  expense_date date default current_date,
  receipt_path text,
  status text default 'pending',
  entered_by uuid references auth.users(id),
  created_at timestamptz default now()
);

-- ---------- Volunteers ----------
create table volunteers (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text,
  email text,
  locality text,
  interests jsonb default '[]',
  availability text,
  message text,
  status volunteer_status default 'new',
  created_at timestamptz default now()
);

-- ---------- Settings & audit ----------
create table site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

create table audit_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb,
  ip_address text,
  created_at timestamptz default now()
);

-- ---------- Row-level security ----------
-- Enable RLS everywhere; public (anon) role only ever gets read access
-- to published/public rows. All writes go through authenticated admin
-- roles. Tighten `roles`-based checks once the admin auth flow is wired
-- up — the policies below are a safe starting point, not final.

alter table years enable row level security;
alter table events enable row level security;
alter table announcements enable row level security;
alter table albums enable row level security;
alter table media enable row level security;
alter table sponsors enable row level security;
alter table donations enable row level security;
alter table expenses enable row level security;

create policy "Public can read published years" on years
  for select using (status = 'published');

create policy "Public can read published events" on events
  for select using (status in ('upcoming', 'live', 'completed'));

create policy "Public can read live announcements" on announcements
  for select using (
    status = 'published'
    and publish_at <= now()
    and (expires_at is null or expires_at > now())
  );

create policy "Public can read published albums" on albums
  for select using (status = 'published');

create policy "Public can read published public media" on media
  for select using (status = 'published' and visibility = 'public');

create policy "Public can read active sponsors" on sponsors
  for select using (active = true);

create policy "Public can read donations marked public" on donations
  for select using (public_visibility = true);

-- Expenses: summarized totals only should be exposed publicly; do this
-- via a view/RPC rather than direct table access, so keep the table
-- itself admin-only for now (no public select policy).
