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

Real photos are in place for the logo, all project galleries, `site-team.jpg`, `structure-frame.jpg`,
`rebar-slab.jpg`, `excavation.jpg`, and 5 certificates (incorporation, NCA road works license,
NCA road works registration, and both KRA tax compliance certificates, 2022 and 2025).

Note: the project photos (`mtwapa-pride-*`, `pride3-*`, `velma-*`, `jerop-*`) were assigned
from a batch of uploaded site photos that weren't individually labelled by project — they're
real JAYFEL site photos, but the specific pairing of photo to project name wasn't confirmed.
Swap any of them for a better match any time by dropping a same-named `.jpg` into
`src/assets/` — no code changes needed, since `src/assets/images.ts` maps every filename
already used across the site.

**Still placeholder (2 remaining):**
- `interior-kitchen.jpg` — general interior shot used on the Services page
- `cert-nca-building.jpg` — NCA registration, Building Works (Category NCA5)

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
