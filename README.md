# WINTEX website

Next.js (App Router) + TypeScript + Tailwind CSS v4 marketing site for WINTEX,
a Pakistan-based knitwear manufacturer established in 1982.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in RFQ_WEBHOOK_URL before relying on the form
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Project structure

- `src/app/` — routes (App Router). Each folder is a page; `[slug]` handles
  product category detail pages.
- `src/content/` — all editable site copy and structured data (products,
  industries, capabilities, heritage, contact/nav config). Update copy here,
  not inside components.
- `src/components/layout/` — Header, Footer.
- `src/components/ui/` — reusable building blocks (Logo, Button, MediaBlock,
  RFQForm, etc).
- `src/lib/actions.ts` — the RFQ form's server action.
- `public/brand/` — logo variants derived from the approved `assets/logo.png`.
- `public/media/` — sourced/placeholder photography. See `ASSET_MANIFEST.md`
  for what is real vs. placeholder, and `ASSET_SOURCING_LOG.md` for licence
  and attribution details on every real photo used.

## Internal planning documents

Not published on the site, but describe the reasoning behind it:

- `BRAND_STRATEGY.md` — positioning, audiences, tone rules
- `WEBSITE_ARCHITECTURE.md` — routes, data layer, component inventory
- `VISUAL_DIRECTION.md` — design system, palette, typography, motion rules
- `CONTENT_STRATEGY.md` — voice, banned phrases, CTA labels
- `ASSET_MANIFEST.md` — what media is real, placeholder, or generated, and why
- `REQUIRED_BUSINESS_INPUTS.md` — every fact the site is missing, why it
  matters, and whether it blocks launch
- `BUYER_AUDIT.md` — critical review against five international buyer personas

## Before going live

See `REQUIRED_BUSINESS_INPUTS.md` for the full list. The two highest-priority
items: a monitored contact email/`RFQ_WEBHOOK_URL`, and real factory
photography to replace the honest placeholder slots in the product grid.
