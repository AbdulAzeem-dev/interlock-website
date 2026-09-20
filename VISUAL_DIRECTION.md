# WINTEX — Visual Direction
Internal planning document. Not published on the website.

## Design read (design-taste-frontend Section 0.B)
Reading this as: a B2B manufacturing trust site for international sourcing/procurement
audiences (fashion buyers, uniform distributors, institutional and defence-adjacent
contractors, wholesalers), with a restrained heritage-manufacturing editorial language,
leaning toward Tailwind v4 + the brand's own Cormorant Garamond/Montserrat pairing +
asymmetric editorial layout, real-photography-first with an honest placeholder system
where real photography does not yet exist.

## Dials
- `DESIGN_VARIANCE: 6` — editorial asymmetry (split heroes, offset galleries,
  alternating light/dark sections) without artsy chaos. A procurement buyer should
  never feel the layout is decoration for its own sake.
- `MOTION_INTENSITY: 4` — fluid CSS transitions, gentle scroll reveals, slow image
  crops on hover. No scroll hijacking, no pinning, no parallax gimmicks — explicitly
  prohibited by the brief and inappropriate for a trust-first manufacturing buyer.
- `VISUAL_DENSITY: 3` — generous whitespace, product- and process-led, not a
  cockpit of stats.

Reasoning: this is closer to the brief's own "trust-first" band than to a consumer
premium band. Editorial richness is allowed (Section 7 of the brief explicitly asks
for it) but every visual must earn its place with a specific manufacturing or product
purpose — never decoration.

## Palette (sampled from the supplied logo + brand guide)
- Deep Navy `#0B1D2D` — primary authority colour, header, dark sections, body text on light.
- Antique Gold `#C6A25B` — restrained accent only: dividers, small labels, stat
  numbers, hover states, logo details. Never a large fill.
- Parchment Beige `#E9E2D6` — secondary section background, warm neutral.
- Warm Ivory `#F6F3EC` — primary light background.
- Sage Grey `#8A948A` — muted supporting text / captions on dark.
- Charcoal `#252525` — body copy on light backgrounds (softer than pure navy for
  long-form reading).
One accent colour only (gold). No AI-purple, no gradients, no neon. Locked per
design-taste-frontend Section 4.2.

## Typography
- Display/headlines: **Cormorant Garamond** — justified override of the "no serif
  default" rule because the brand's own approved brand guide specifies it. This is
  a heritage manufacturing brand; a refined serif is correct, not decorative.
- Body/UI: **Montserrat** — neutral, highly legible for an international,
  non-native-English-reading audience.
- Display sizes stay controlled: `text-4xl md:text-5xl lg:text-6xl` for hero,
  never above `text-6xl`, per the skill's hero font-scale discipline.

## Section rhythm
Alternate Warm Ivory / Parchment Beige / Deep Navy backgrounds to create pacing
without ever inverting theme in a jarring way (navy sections keep gold/ivory text,
light sections keep navy/charcoal text — one locked theme system, not a flip).
No more than one consecutive pair of image+text split sections before the layout
family changes (full-width media, grid, stat strip, timeline).

## What we deliberately avoid
Black-and-gold luxury cliché, glassmorphism, glowing gradients, bento grids with
empty cells, three-equal-card feature rows, AI-purple, oversized hero type fighting
the hero image, stock "handshake" corporate photography, generic factory icons,
scroll-hijacked storytelling, marquees (used at most once, for the product range
category strip on mobile only if needed).

## Motion
Reveal-on-scroll (`whileInView`, once, modest translate + fade) for section entries.
Hover: slow `scale-105` image crops (700ms), gold underline draw on links, `-translate-y-px`
tactile press on buttons. All wrapped in `useReducedMotion` fallbacks per Section 6.B.
