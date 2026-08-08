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

## Placeholder images

Real photos were used for the logo and 3 certificates (incorporation, NCA road license,
NCA road registration). Everything else — the 16 project photos, the NCA building
certificate, and both tax compliance certificate scans — didn't come through in the
upload, so they're **branded placeholders** (charcoal + red, labelled with the filename)
so the site builds and looks intentional in the meantime.

Swap them out any time by dropping a same-named `.jpg` into `src/assets/` — no code
changes needed:

- `mtwapa-pride-aerial.jpg`, `mtwapa-pride-facade.jpg`, `mtwapa-pride-block.jpg`, `mtwapa-pride-front.jpg`
- `structure-frame.jpg`, `rebar-slab.jpg`, `excavation.jpg`, `interior-kitchen.jpg`
- `pride3-foundation.jpg`, `pride3-concrete.jpg`, `foundation-cages.jpg`, `site-team.jpg`
- `velma-render.jpg`, `velma-front.jpg`, `jerop-render.jpg`, `jerop-site.jpg`
- `cert-nca-building.jpg`, `cert-tax-compliance-2025.jpg`, `cert-tax-compliance.jpg`

Also add the two missing PDFs to `public/docs/`: `company-profile.pdf`, `projects-portfolio.pdf`
(`tax-compliance.pdf` is already included).

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
