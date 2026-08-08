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

All site photos in `src/assets/` are real company/project photos, with two exceptions
where no matching photo exists yet:

- `mtwapa-pride-aerial.jpg` — no aerial shot was supplied, so this currently reuses the
  Mtwapa Pride II facade photo. Drop a real aerial photo in with this filename to replace it.
- `cert-tax-compliance-2025.jpg` — no scan of the 2025 tax compliance certificate was
  supplied, so this currently reuses the 2022 certificate photo as a placeholder thumbnail.
  The real 2025 certificate is linked as a PDF download on the Certifications page
  (`public/docs/tax-compliance.pdf`). Drop a real scan in with this filename to replace it.

Swapping either file is a same-named drop into `src/assets/` — no code changes needed.

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
