# Sankar Chess Academy — Website

Production frontend for a premium, conversion-focused chess academy site. Built with Next.js 15
(App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                  Routes (App Router) — one folder per page
    layout.tsx          Fonts, global SEO metadata, JSON-LD schema
    page.tsx            Home
    about/ programs/ achievements/ testimonials/ gallery/ contact/
    blog/ blog/[slug]/   Listing + dynamic post pages
    sitemap.ts robots.ts SEO files (auto-generate /sitemap.xml, /robots.txt)
    globals.css         Theme tokens, .btn-gold / .card-luxe / .input-luxe utility classes
  components/
    layout/             Navbar, Footer, WhatsAppButton
    ui/                 SectionHeading, Accordion
    sections/           Hero, ProgramsOverview, TestimonialsSection, DemoBookingForm, etc.
  lib/data.ts           ALL site content lives here: programs, testimonials, achievements,
                         FAQs, blog posts, contact info. Edit this file to update copy/pricing
                         without touching any component code.
```

## Before going live — replace these placeholders

1. **Founder photo** — `/about` currently shows a placeholder box. Drop a real photo into
   `public/images/` and reference it in `src/app/about/page.tsx`.
2. **Phone / WhatsApp / email / address** — all in one place: `site` object at the top of
   `src/lib/data.ts`.
3. **Gallery photos** — `src/app/gallery/page.tsx` renders placeholder tiles. Replace with real
   `next/image` calls once you have photos categorized.
4. **Domain** — update `siteUrl` in `src/app/layout.tsx` and `src/app/sitemap.ts` to your real
   domain once registered, so Open Graph tags and the sitemap resolve correctly.
5. **Google Maps** — the embed in `/contact` uses a text query (`site.mapsEmbedQuery`). Swap for
   an exact Place ID embed once the academy has a verified Google Business listing.

## What's intentionally NOT built yet (per current scope)

This is the marketing/conversion frontend only. The demo booking form on `/contact` is fully
functional client-side (validation + success state) but logs to console instead of hitting a
real API — see the `TODO` comment in `src/components/sections/DemoBookingForm.tsx` for exactly
where to wire it to a backend endpoint. Student/parent/admin dashboards, payment gateway, LMS,
and tournament engine are separate, larger builds — happy to scope those next once this frontend
is approved.

## SEO

- Per-page `metadata` exports (title/description) on every route.
- `EducationalOrganization` JSON-LD structured data in the root layout.
- Auto-generated `/sitemap.xml` (includes blog posts) and `/robots.txt`.
- Target keywords (Chess Academy Vizag, Chess Coaching Visakhapatnam, etc.) are woven into
  page titles, meta descriptions, and body copy — not stuffed.
