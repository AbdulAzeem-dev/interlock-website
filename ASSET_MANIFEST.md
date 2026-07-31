# INTERLOCK — Asset Manifest
Internal planning document. Not published on the website.

## Logo
- Source: `assets/logo.png` (authoritative, approved mark — wordmark + markhor symbol
  + "Since 1982" + "Fine Knitwear Manufacturers"). Used as-is, not redesigned.
- `assets/helping logo material.png` is a supplementary brand-guide sheet (palette,
  typography, application mockups). Used only as a reference for colour values and
  the Cormorant Garamond / Montserrat type pairing. Its badge variant shows "1983" in
  one corner seal graphic — this is inconsistent with the confirmed 1982 founding date
  and is NOT used anywhere on the site. Only `logo.png` (which correctly reads
  "Since 1982") is treated as authoritative.
- Web variants derived (crop/export only, no redesign): full lock-up (footer, about),
  horizontal nav lock-up at reduced scale, icon-only markhor mark (favicon, small UI
  contexts), monochrome ivory-on-navy version for dark sections.

## Real photography (status: available in project after sourcing pass)
Sourced from properly licensed origins (Wikimedia Commons CC0/CC-BY/public domain or
equivalent free-licence stock). Full source/licence/creator log recorded in
`ASSET_SOURCING_LOG.md` at the repo root. These are generic, honest illustrative
photographs of yarn, knitting machinery, knit texture, and one finished-product
category (scarf) - never captioned or implied to be INTERLOCK's own specific
facility, staff, or client output, per the brief's authenticity rules (Section 8).

**Disclosure fix applied during the buyer audit (see BUYER_AUDIT.md):** every use of
one of these photos in a trust-critical position (hero, manufacturer-proof section,
quality section, manufacturing page, about page, and every product page that uses
the scarf photo) now carries a small on-page caption stating it is illustrative and
not an INTERLOCK photograph, in addition to the sitewide footer credit line. A
skeptical sourcing/QA buyer who reverse-image-searches a hero photo will find the
same disclosure already on the page, not a surprise.

Target files: `public/media/hero/hero-poster.jpg`,
`public/media/process/{knitting-machine,yarn-cones,finishing-hands}.jpg`,
`public/media/texture/knit-rib-macro.jpg`,
`public/media/products/{sweater,cardigan,socks,gloves,scarf,cotton-shirt,wool-texture}.jpg`.

## Decorative CSS/SVG assets (generated, not photographic — honest by construction)
Used only where the brief explicitly allows generated media: abstract knit-stitch
line patterns, subtle rib-texture background washes, a fine SVG divider motif drawn
from the logo's interlace motion. Built as inline SVG/CSS, not raster AI generation,
so there is no ambiguity about authenticity. Used in: section dividers, the private
label section background, card hover states.

## Explicitly NOT generated or faked
- No fictional factory photography presented as "our facility."
- No generated workers presented as employees.
- No fabricated heritage/archive photography (see Heritage section below).
- No certificates, client logos, or inspection reports of any kind.

## Heritage section — honest treatment
No real 1982-era INTERLOCK photograph exists in this project and none is fabricated
or substituted with a generic "old factory" stock photo pretending to be INTERLOCK's
own archive. The Heritage/About timeline is built typographically (large-numeral
year markers, short factual copy) rather than propped up with a fake historical
image. `REQUIRED_BUSINESS_INPUTS.md` lists the real archival photography that would
upgrade this section once supplied by the owner.

## Video
No real factory video exists in this project. The hero uses a static, high-quality
`hero-poster.jpg` (real, sourced photography) instead of a fabricated video loop.
Building a fake "factory video" would violate the authenticity rules outright.
`REQUIRED_BUSINESS_INPUTS.md` specifies the real 8-15 second silent loop the brief
recommends, to be dropped into `MediaBlock` as a drop-in upgrade (component already
supports a `video` prop with `poster` fallback) once filmed.

## Favicon
Generated from the markhor icon crop of the authoritative logo (PNG -> ICO/PNG set).

## OG / social preview image
Generated at build time from the primary logo lock-up on a navy background
(`app/opengraph-image.tsx`), not a photograph, so it never risks misrepresenting
factory reality.
