# INTERLOCK buyer experience review

## Starting audit

The intended visitor is a fashion brand founder, designer or sourcing manager arriving from a cold email. They need to establish product fit, manufacturer credibility and a practical next step quickly.

Critical findings:
- The form returned success without an actual delivery destination; attachments were reduced to filenames. A successful-looking conversion could lose a real lead.
- Product divisions replaced one panel with another without a URL or useful browser history. Several activewear and headwear links led back to the generic catalog.
- Two product assets referenced in production had been deleted. Some categories showed a fabric texture without a useful garment view.
- The home page emphasized a wide supplier catalog and repeated manufacturing promises across many long sections, obscuring the offer to fashion brands.
- The 17-field first-contact form asked buyers to do too much before starting a conversation; category context was lost on the way to it.
- The image set mixes licensed stock, owner-supplied references and explicitly AI-generated concepts. None may be represented as factory proof without verification.
- Real contact details and a verified production domain are missing. The owner has explicitly requested editable placeholders for now.

## Design direction

Redesign with an authorized information architecture improvement, preserving existing route slugs and the supplied INTERLOCK mark. Retain navy and a restrained gold accent. Use a neutral, bright surface and confident sans-serif typography for product clarity; retain the established serif in the brand wordmark. No cinematic loading, rotating hero or scroll hijacking.

DESIGN_VARIANCE: 5. MOTION_INTENSITY: 3. VISUAL_DENSITY: 4.

Native CSS and the existing Tailwind foundation; existing Phosphor icons. Square image frames and a small, consistent control radius. Hover/focus feedback and reduced-motion support.

## Planned iterations

1. Rebuild the buyer journey: homepage, direct product catalog, useful product pages, shared navigation, company/process pages, short inquiry form, truthful delivery handling.
2. Challenge the result as a skeptical buyer: inspect image suitability, specificity, category context, unanswered commercial questions, mobile layout and contact friction. Fix weaknesses found.
3. Verify production build, lint, routes/assets, backend failure and success cases, keyboard/mobile interactions, and performance where the environment permits. Record actual outcomes below.

## Launch dependency

Placeholder contact details are intentional at the owner's request. Do not start an outreach campaign until a monitored inbox/WhatsApp, real factory address, correct domain and a tested inquiry delivery service are configured. This does not block local design review.

## Iteration record

### Pass 1: buyer journey

Replaced the hidden category interaction with a direct catalog, category filters and dedicated product pages. Every product page now carries its own commercial context and a quote link that preserves the selected category.

### Pass 2: skeptical buyer review

Reduced the first-contact form to the information needed to start a real conversation, added an honest delivery state, labelled illustrative photography, added company-supplied label artwork and separated manufacturing claims from proof that still needs to be supplied. Added a short FAQ and a visible four-step process to answer common first-call questions.

### Pass 3: production review

Checked desktop and narrow browser layouts, direct routes, contact prefill, accessibility tree labels, runtime errors, lint, TypeScript and the production build. Added eager loading to the first-view image surfaces after the browser flagged them as LCP candidates. The remaining launch work is operational: replace placeholders, verify the destination domain and connect a monitored inquiry endpoint.
