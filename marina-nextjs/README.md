# Marina Restaurant Cafe — Next.js 15

Premium, bilingual (Greek/English) marketing site for Marina Restaurant Cafe, Limenas
Chersonisou, Crete. Built with Next.js 15 (App Router), React 19, and TypeScript. No CSS
framework — plain CSS in `app/globals.css`, using the same class names as the original static
HTML build, so styling is easy to trace and edit.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx      Root layout — loads Fraunces & Manrope via next/font
  page.tsx         Assembles all sections, owns reservation modal state
  globals.css      All site styling (design tokens at the top as CSS variables)
components/
  Nav.tsx               Sticky nav + mobile menu
  Hero.tsx               Full-bleed hero with reservation & menu CTAs
  Tide.tsx               The wave-divider signature element between sections
  About.tsx              Story + 3 highlight cards
  Menu.tsx                Tabbed menu, reads from lib/menuData.ts
  Gallery.tsx             Masonry gallery + lightbox
  Testimonials.tsx        Auto-rotating review carousel
  Location.tsx            Map + contact info + contact form (mailto)
  Footer.tsx
  ReservationModal.tsx    Call / email modal opened from Nav & Hero
  Reveal.tsx               Small scroll-reveal wrapper (IntersectionObserver)
lib/
  menuData.ts             All dishes, prices & featured-dish photos — edit here
  galleryData.ts           Gallery photos & captions — edit here
  testimonialsData.ts      Reviews — edit here
```

## Editing content

- **Menu & prices**: edit `lib/menuData.ts`. Each category can have an optional `featured` dish
  (shown with a large photo) plus a list of `dishes` (name, note, price).
- **Gallery photos**: edit `lib/galleryData.ts`. `span2` / `row2` control the masonry layout.
- **Reviews**: edit `lib/testimonialsData.ts`.
- **Contact details / address / phone / hours**: currently hardcoded in `components/Location.tsx`,
  `components/Footer.tsx`, and `components/ReservationModal.tsx` (search for the phone number
  `+302897022783` to update everywhere at once).
- **Photos**: all images are currently hotlinked from Unsplash for the demo. Before going live,
  replace the URLs with your own photography — either drop files into `public/` and reference them
  as `/your-photo.jpg`, or use `next/image` for automatic optimization (the `next.config.mjs`
  already whitelists `images.unsplash.com` as a remote pattern if you want to keep using
  `next/image` there too).

## Notes

- The contact form uses a `mailto:` link (no backend) — swap `handleSubmit` in
  `components/Location.tsx` for a real API route or email service (Resend, SendGrid, etc.) when
  you're ready to wire it up server-side.
- The Google Map is a plain iframe embed — no API key required for the basic embed used here.
- No WhatsApp button, per the brief.
