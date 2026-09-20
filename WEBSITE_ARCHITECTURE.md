# WINTEX — Website Architecture
Internal planning document. Not published on the website.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- next/font for Cormorant Garamond + Montserrat (self-hosted, no runtime Google Fonts calls)
- No component library needed — this is a bespoke editorial marketing site, not a
  product UI. Native Tailwind + hand-built components per the design-taste-frontend skill.
- Icons: Phosphor (`@phosphor-icons/react`), one family only.
- Motion: CSS transitions + a small `motion/react` reveal wrapper for scroll-in. No GSAP,
  no scroll hijacking, no pinning — the brief explicitly bans scroll gimmicks.

## Routes
```
/                          Home
/products                  Product range overview
/products/[slug]           Category detail (sweaters, cardigans, uniform-knitwear,
                            military-institutional-knitwear, knitted-cotton-shirts,
                            socks, gloves, mufflers-scarves, private-label)
/manufacturing             Manufacturing capability page
/industries                Industries served
/private-label             Private-label / custom development
/about                     Heritage and company story
/contact                   RFQ / enquiry form
/privacy                   Privacy policy
/terms                     Terms of use
/sitemap.xml, /robots.txt  generated
404                        Custom not-found page
```
`/private-label` is also listed as a product category (for the range grid) and as a
standalone page (for the deeper collaboration-process narrative) — the category
card links to the standalone page rather than duplicating content.

## Data layer (single source of truth, editable without touching markup)
```
src/content/
  site.ts          company facts, nav labels, CTA labels, contact placeholders
  products.ts       9 category records (slug, name, summary, applications,
                    customization, gallery refs, related categories)
  industries.ts     5 industry records (name, concerns, relevant categories)
  capabilities.ts   process/capability list used on Manufacturing + Home
  heritage.ts       timeline milestones (only confirmed facts)
  faq.ts            optional — only if content justifies it
```
Pages and components read from this layer. No copy is hard-coded inside JSX beyond
structural labels.

## Component inventory
`Header, MobileNav, Footer, Logo (variant prop), Button, Hero, SectionHeading,
TrustStrip, ProductCategoryCard, ProductGallery, ProcessStep, IndustryBlock,
HeritageTimeline, MediaBlock (image/video with honest placeholder mode), RFQForm,
FileUpload, Reveal (scroll-in wrapper), StructuredData.`

## RFQ form handling
Client component, server action for submission. Fields per brief section 14.
Honeypot field for spam. Server-side validation (required: name, email, country,
product category; rest optional). No live email service credentials exist yet —
submission handler is wired to `RFQ_WEBHOOK_URL` / `RFQ_TO_EMAIL` env vars with a
clear fallback (log + success state) so the form is fully functional in structure
and only needs credentials at launch. Documented in `.env.example`.

## Rendering strategy
Static generation for all marketing pages (content is not user-specific). RFQ route
handler runs server-side. No client-side data fetching needed.
