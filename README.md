# Sunshine Youth Association — Ganesh Utsav Website

Scaffold for the public website: Next.js (App Router) + TypeScript +
Tailwind CSS on the frontend, Supabase (Postgres + Auth + Storage) on the
backend. Built from the product spec — see "What's included" below for
what's real vs. what's a placeholder to wire up next.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Supabase project URL/keys
npm run dev
```

Open http://localhost:3000.

## Set up Supabase

1. Create a project at https://supabase.com.
2. In the SQL editor, run `supabase/migrations/0001_init.sql` — this
   creates every table from the spec (years, albums, media, events,
   announcements, sponsors, donations, expenses, volunteers, audit_logs,
   etc.) plus starter row-level-security policies.
3. Create two storage buckets: `media-public` (web-optimized derivatives,
   readable by anon) and `media-originals` (protected, signed URLs only).
4. Copy your project URL and anon key into `.env.local`.
5. For admin accounts, use Supabase Auth (email/password to start; add
   MFA before launch) and insert rows into `user_roles` linking to the
   `roles` table.

Video is intentionally **not** stored in Supabase — plan to add a
dedicated video streaming provider (e.g. Mux, Cloudflare Stream,
Bunny Stream) for resumable upload + transcoding + adaptive playback,
per the spec's media architecture. `.env.example` has placeholders for
its API key and webhook secret.

## What's included

- **Public pages** for every route in the spec's MVP scope: home, about,
  utsav index + `/utsav/[year]`, gallery index + `/gallery/[year]`,
  events, sponsors, donate, volunteer, contact.
- **Design system**: a festival-specific palette and type scale in
  `tailwind.config.ts` (marigold / vermillion / brass / banana-leaf on a
  warm ivory ground, `Fraunces` display + `Karla` body) — deliberately
  not the generic cream-and-terracotta SaaS look.
- **Database schema**: `supabase/migrations/0001_init.sql` mirrors every
  table in the spec, with enums for status fields and starter RLS
  policies (public read of published/public rows only; writes are
  admin-only once auth roles are wired in).
- **Supabase client helpers**: `lib/supabase.ts` (browser) and
  `lib/supabase-server.ts` (server components / route handlers).

## What's still placeholder — next steps

- All page content currently uses hard-coded sample data (clearly
  commented) instead of live Supabase queries. Wire each page to its
  table once the schema is deployed.
- No admin dashboard yet (`/admin/*` routes from the spec). Suggest
  building this next: auth-gated layout, media manager with
  resumable/direct-to-storage upload, and the year/album/event/sponsor/
  donation CRUD screens from the spec.
- No resumable upload flow yet — needs direct-to-storage signed uploads
  (Supabase Storage resumable uploads or the chosen video provider's
  upload API) so large files never pass through the Next.js server.
- No auth/login screen, rate limiting, or CAPTCHA on public forms
  (volunteer, contact, sponsor enquiry) — required before launch.
- No image derivative pipeline (thumbnail/medium/web sizes) — can be a
  Supabase Edge Function or storage trigger.

## Project structure

```text
app/                 Routes (App Router)
  about/
  contact/
  donate/
  events/
  gallery/[year]/
  sponsors/
  utsav/[year]/
  volunteer/
  layout.tsx         Root layout — fonts, header, footer
  page.tsx           Homepage
  globals.css
components/
  SiteHeader.tsx
  SiteFooter.tsx
lib/
  supabase.ts         Browser client
  supabase-server.ts  Server client (cookies-based session)
supabase/
  migrations/0001_init.sql
```
