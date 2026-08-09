# JAYFEL Engineering Limited — website

React + Vite + TypeScript + Tailwind CSS v4 + react-router-dom.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL.

## Build & deploy

```bash
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel or Cloudflare Pages.

## Images

Every image in `src/assets/` is now a real photo — none of Lovable's branded placeholder
graphics remain. That covers the logo, all project galleries, `site-team.jpg`,
`structure-frame.jpg`, `rebar-slab.jpg`, `excavation.jpg`, `interior-kitchen.jpg`, and all
6 certificates (incorporation, NCA building works, NCA road works, contractor license, and
both KRA tax compliance certificates, 2022 and 2025).

Note: the project photos (`mtwapa-pride-*`, `pride3-*`, `velma-*`, `jerop-*`) were largely
assigned from a batch of uploaded site photos that weren't individually labelled by project —
`mtwapa-pride-aerial.jpg`, `mtwapa-pride-front.jpg`, `velma-render.jpg` and `velma-front.jpg`
were confirmed (matching filenames and content — e.g. `velma-render`/`velma-front` are the
actual architectural elevation/render drawings), but the rest are a best-effort match rather
than a confirmed pairing. Swap any of them for a better match any time by dropping a
same-named `.jpg` into `src/assets/` — no code changes needed, since `src/assets/images.ts`
maps every filename already used across the site.

## What's in this build

- **Loading intro**: a full-screen charcoal splash with the JAYFEL logo, a pulsing glow and
  a red progress bar plays for ~1.5s on first load (`src/components/Loader.tsx`), then fades
  the site in.
- **Brand colors matched to the logo**: red `#E22730` / deep red `#A81E25` (from the roof),
  charcoal `#1C1D20` (from the outlines), white and gray — defined once as CSS variables in
  `src/index.css` and used everywhere via Tailwind's `@theme`, no hardcoded hex in components.
- All 7 pages (Home, About, Services, Projects, Certifications, Quote, Contact), sticky header,
  footer, WhatsApp float, scroll-to-top, scroll-reveal animations, animated stat counters,
  filterable project gallery with a keyboard-accessible lightbox, and SEO tags per page.
