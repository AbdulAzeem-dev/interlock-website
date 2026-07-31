# Asset Sourcing Log 2 — Premium visual pass

Sourced by background research fork, second pass, after the owner explicitly asked
to replace remaining placeholder tiles with attractive real photography and accepted
the illustrative-caption disclosure approach used sitewide (see `ASSET_MANIFEST.md`
and `MediaBlock`'s `caption` prop). All real photographs, no AI generation. Every
candidate showing a competitor's visible brand/logo/tag was rejected and re-searched
(see rejections at the bottom).

## Downloaded and placed (all in `public/media/products/`)

| File | Subject | Source page | Direct file URL (as downloaded, w=2400) | Creator | Licence |
|---|---|---|---|---|---|
| `sweater.jpg` | Stack of folded knitted sweaters, neutral tones | https://www.pexels.com/photo/close-up-shot-of-knitted-sweaters-on-white-surface-5475173/ | https://images.pexels.com/photos/5475173/pexels-photo-5475173.jpeg | Tijana Drndarski | Pexels License |
| `cardigan.jpg` | Macro of grey ribbed cardigan, button and pocket detail | https://www.pexels.com/photo/close-up-shot-of-gray-knit-textile-with-button-6276043/ | https://images.pexels.com/photos/6276043/pexels-photo-6276043.jpeg | Karola G (kaboompics.com) | Pexels License |
| `uniform-knitwear.jpg` | Macro of navy cable-knit fabric texture | https://www.pexels.com/photo/6275938/ | https://images.pexels.com/photos/6275938/pexels-photo-6275938.jpeg | Karola G (kaboompics.com) | Pexels License |
| `military-institutional.jpg` | Macro of grey/sage ribbed wool knit texture | https://www.pexels.com/photo/5807038/ | https://images.pexels.com/photos/5807038/pexels-photo-5807038.jpeg | Ksenia Chernaya | Pexels License |
| `cotton-shirt.jpg` | Plain white folded cotton t-shirt, clean mockup-style | https://www.pexels.com/photo/12025472/ | https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg | Mr. Mockup | Pexels License |
| `socks.jpg` | Grey ribbed knitted socks with knit trouser cuffs, wooden floor | https://www.pexels.com/photo/5807032/ | https://images.pexels.com/photos/5807032/pexels-photo-5807032.jpeg | Ksenia Chernaya | Pexels License |
| `gloves.jpg` | White knitted gloves with matching yarn ball | https://www.pexels.com/photo/7266912/ | https://images.pexels.com/photos/7266912/pexels-photo-7266912.jpeg | Marija Makarova | Pexels License |
| `private-label.jpg` | Blank hang tag on rust/terracotta fabric | https://www.pexels.com/photo/8148725/ | https://images.pexels.com/photos/8148725/pexels-photo-8148725.jpeg | Vie Studio | Pexels License |

`scarf.jpg` is unchanged from the first sourcing pass (see `ASSET_SOURCING_LOG.md`).

All images resized to a 1800px long edge and re-encoded as JPEG (quality 72-82,
optimized) with Python Pillow. Final sizes: 63KB-593KB, all under 600KB.

Pexels License (per pexels.com/license): free to use, modification allowed, no
attribution legally required, but the site already carries a photography-credit
line in the footer (`site.photoCredits` in `src/content/site.ts`) — that line
should be extended to include Pexels alongside the existing Wikimedia/Flickr
credits. See "Follow-up needed" below.

## Rejected candidates (visible competitor branding — did not use)

- A "gray polo shirt on white table" (Unsplash, Lena Kudryavtseva) had a visible
  woven neck label reading "VITO & WILLY / HEARTMADE" — rejected for `cotton-shirt.jpg`.
- A "black crew neck sweater on white clothes hanger" (Unsplash, Caio Coelho) was
  shown on a wooden hanger printed with the "Barbour" logo — rejected for
  `uniform-knitwear.jpg`. Replaced with a macro texture shot instead (no hanger/tag
  visible by construction).
- A "gray crew neck shirt on white clothes hanger" (Unsplash, Moses Janga,
  supposedly WV80-Rf-a3A) resolved to an unrelated photo of a colourful sweater
  rack when fetched (photo ID mismatch from search-result metadata) — not used for
  `military-institutional.jpg` for that reason; replaced with a macro grey wool
  texture shot instead, which also sidesteps the tag-visibility problem entirely.
- A folded beige t-shirt (Pexels, "orange t-shirt with tag") had a visible blank
  tag on a string — visually fine (no brand name) but kept as backup only; the
  cleaner "Mr. Mockup" plain white t-shirt was preferred for `cotton-shirt.jpg`.

## Not attempted (deliberately skipped)

Bonus detail/gallery shots (rib cuff, stitching close-ups) mentioned as optional
in the directive were not sourced — the 8 required category slots took priority
given the time budget, and `scarf.jpg` from the first pass already serves as one
real detail-level product shot in the gallery.

## Follow-up needed (for whoever wires this into content/products.ts)

1. Update `src/content/products.ts`: change `media` (and `gallery` where relevant)
   for the `sweaters`, `cardigans`, `uniform-knitwear`, `military-institutional-knitwear`,
   `knitted-cotton-shirts`, `socks`, `gloves`, and `private-label` entries from
   `{ kind: "placeholder", ... }` to `{ kind: "photo", src: "/media/products/<file>.jpg", alt: "...", caption: "Illustrative ..., not an INTERLOCK photograph." }`,
   matching the pattern already used for `scarf.jpg`.
2. `uniform-knitwear.jpg` and `military-institutional.jpg` are both macro fabric
   textures (navy cable-knit vs. grey/sage ribbed knit) rather than full garment
   shots — worth a caption that reads naturally for a texture shot, e.g. "Cable-knit
   detail, illustrative" rather than implying a full garment photo.
3. Extend `site.photoCredits` in `src/content/site.ts` to credit: Tijana Drndarski,
   Karola G, Ksenia Chernaya, Mr. Mockup, Marija Makarova, Vie Studio (Pexels),
   alongside the existing Wikimedia/Flickr photographers.
