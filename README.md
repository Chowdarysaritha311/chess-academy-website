# Sankar Chess Academy — Website + Admin Backend

Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion frontend, with a real backend:
SQLite database (via Prisma), session-based admin login, and an admin dashboard for managing
leads from the demo booking and registration forms.

## 1. Install

```bash
npm install
```

`npm install` automatically runs `prisma generate` afterward (via `postinstall`) — this needs
internet access to download Prisma's query engine, so make sure you're online the first time.

## 2. Set up environment variables

Copy the example file and fill it in:

```bash
cp .env.example .env
```

At minimum, set:
- `JWT_SECRET` — any long random string (e.g. `openssl rand -base64 32`)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the login you'll use for `/admin`

`DATABASE_URL="file:./dev.db"` works as-is for local development (SQLite, zero setup).

## 3. Create the database and admin account

```bash
npm run db:push    # creates dev.db with the Lead and Admin tables
npm run db:seed    # creates the admin login from your .env values
```

## 4. Run it

```bash
npm run dev
```

- Public site: http://localhost:3000
- Admin dashboard: http://localhost:3000/admin/login — sign in with the `ADMIN_EMAIL` /
  `ADMIN_PASSWORD` you set in `.env`

## What the backend actually does

- **`/contact`** demo booking form and **`/register`** registration form both POST to
  `/api/leads`, which writes a row to the `Lead` table (no payment, no auth needed — these are
  public lead-capture endpoints).
- **`/admin`** is protected by middleware (`src/middleware.ts`) — it checks a signed, httpOnly
  session cookie set on login. Unauthenticated visitors are redirected to `/admin/login`.
- The dashboard shows total/new/enrolled/demo-request counts and a live table of every lead,
  with inline status updates (New → Contacted → Enrolled → Closed) and delete.
- Sessions last 7 days and are signed with `JWT_SECRET` using `jose` (works in Next.js
  middleware, which runs on the Edge runtime).
- Passwords are hashed with `bcryptjs` — never stored in plain text.

## Project structure (what's new since the frontend-only version)

```
prisma/
  schema.prisma        Admin + Lead models
  seed.js               Creates the admin account from .env
src/
  lib/
    prisma.ts            Prisma client singleton
    auth.ts              JWT session creation/verification
  middleware.ts          Protects /admin pages and /api/admin/* routes
  app/
    (marketing)/         Route group — all public pages, wrapped in Navbar/Footer/WhatsApp
      register/           NEW: registration form with batch selection
      ...                 (about, programs, achievements, etc. — unchanged, just moved here)
    admin/
      layout.tsx           Minimal admin shell (no public nav/footer)
      login/page.tsx        Admin sign-in
      page.tsx               Dashboard (stats + leads table)
    api/
      leads/route.ts                 POST — public, creates a Lead
      admin/login/route.ts            POST — verifies credentials, sets session cookie
      admin/logout/route.ts           POST — clears session cookie
      admin/leads/route.ts            GET — list all leads (protected)
      admin/leads/[id]/route.ts       PATCH/DELETE a lead (protected)
  components/
    admin/
      AdminHeader.tsx       Header with conditional sign-out button
      LeadsTable.tsx        Filterable table, inline status updates
```

## Going to production

1. **Switch the database.** SQLite's file storage does not persist on serverless platforms
   (Vercel, Railway's ephemeral containers, etc). Get a free Postgres instance from
   [Neon](https://neon.tech) or [Railway](https://railway.app), then:
   - In `prisma/schema.prisma`, change `provider = "sqlite"` to `provider = "postgresql"`
   - Set `DATABASE_URL` to the real connection string in your hosting provider's environment
     variables
   - Run `npx prisma db push` once against that database
2. **Set real environment variables** on your host (Vercel/Railway dashboard): `DATABASE_URL`,
   `JWT_SECRET` (a fresh long random string, not the dev one), and run the seed script once
   (or seed manually) to create the real admin login.
3. **Change the default admin password** before going live — re-run `npm run db:seed` with a
   new `ADMIN_PASSWORD` to rotate it.

## Still not built (unchanged from before)

Payment gateway, live class integration (Zoom/Meet/LMS), a real tactics-trainer engine, and
certificate generation are separate, larger pieces of work — this phase covers accounts,
the registration database, and the admin dashboard only, as scoped.
