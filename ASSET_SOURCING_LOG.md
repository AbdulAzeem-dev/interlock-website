# Asset Sourcing Log

Sourced by background research fork on 2026-07-31. All images are real photographs
(no AI generation), filtered to commercial-use-compatible licences. None of these
depict WINTEX's own facility, staff, or products — they are generic illustrative
photography only. Do not caption any of them as "our factory," "our team," or
"our product" — use category-level, non-specific captions (e.g. "Circular knitting
in progress", "Yarn selection", "Ribbed knit structure").

## Downloaded and placed

| File | Subject | Source page | Direct file URL | Creator | Licence |
|---|---|---|---|---|---|
| `public/media/hero/hero-poster.jpg` | Modern circular-knitting factory floor, yarn creel, cones in operation | https://commons.wikimedia.org/wiki/File:Circular_knitting_machine.jpg | https://upload.wikimedia.org/wikipedia/commons/7/78/Circular_knitting_machine.jpg | Elkagye (Wikimedia Commons) | Public Domain |
| `public/media/process/knitting-machine.jpg` | Vintage circular knitting machine, textile museum exhibit | https://commons.wikimedia.org/wiki/File:As_2017_P09_circular_knitting_machine.jpg | https://upload.wikimedia.org/wikipedia/commons/2/26/As_2017_P09_circular_knitting_machine.jpg | Fallaner (Wikimedia Commons) | CC BY-SA 4.0 |
| `public/media/process/yarn-cones.jpg` | Cones of coloured yarn, mill context | https://www.flickr.com/photos/10710442@N08/5368538485 | https://live.staticflickr.com/5009/5368538485_b68981d5dd_b.jpg | Steve Snodgrass | CC BY 2.0 |
| `public/media/texture/knit-rib-macro.jpg` | Macro cable/rib knit fabric texture | https://www.flickr.com/photos/145712985@N08/32051224793 | https://live.staticflickr.com/2716/32051224793_c036da266d_b.jpg | Tinker & Rove | CC BY 2.0 |
| `public/media/texture/wool-texture.jpg` | Dyed wool yarn balls, colour range | https://www.flickr.com/photos/56218409@N03/14052424953 | https://live.staticflickr.com/2936/14052424953_b8f338c768_b.jpg | mripp | CC BY 2.0 |
| `public/media/products/scarf.jpg` | Knitted gradient scarf, ribbed structure | https://www.flickr.com/photos/81876892@N00/535699668 | https://live.staticflickr.com/225/535699668_9dafc4f025_b.jpg | Breibeest | CC BY 2.0 |

Attribution note: CC BY / CC BY-SA images require credit. Recommend a single
consolidated "Photography credits" line in the site footer or an `/attributions`
note rather than on-image captions, e.g. "Illustrative photography: Elkagye, Fallaner,
Steve Snodgrass, Tinker & Rove, mripp, Breibeest — via Wikimedia Commons / Flickr,
CC BY / CC BY-SA / Public Domain."

Important orientation note: `hero-poster.jpg` is portrait (1169x1575), not
landscape. It works best as the image half of a split-screen hero (image right,
copy left) rather than a full-bleed landscape banner — cropping it hard to
landscape loses the yarn creel detail that makes it convincing.

## Deliberately NOT downloaded (and why)

- **Sweaters (plain, unbranded product shot):** no clean, unbranded, commercially-licensed
  result found. Every viable candidate was either a visible competing brand's
  garment (see cardigan below) or amateur home photography inconsistent with the
  site's editorial standard.
- **Cardigan:** best-matching candidate ("Argyle Cardigan," CC BY 2.0, Menswear
  Market) clearly shows a Polo Ralph Lauren logo on the chest. Rejected: using it
  would misattribute a competitor's branded product to WINTEX.
- **Socks:** candidates were casual selfie-style photos of someone's feet indoors.
  Rejected as inconsistent with a B2B manufacturing site's tone.
- **Gloves:** best candidate was a single fingerless glove, amateur phone photo on
  a couch. Rejected for quality/consistency.
- **Knitted cotton shirt:** only clean commercially-licensed result was a hand-drawn
  ink/watercolour illustration of a polo shirt, not a photograph. Rejected: presenting
  an illustration as product photography would be misleading and inconsistent in
  style with the rest of the site.
- **Finishing/inspection hands:** no suitable commercially-licensed real photo found
  in the time available.

**Recommendation:** leave these six as clearly-labelled placeholder slots (per the
design skill's own fallback guidance) until WINTEX supplies real product and
factory photography. The data layer should keep these as named, swappable media
references so dropping in real photos later is a one-line change per category, not
a redesign.

## Tooling note
`sharp` failed to load in this sandbox (native binding error, `format.jp2` undefined
in the installed `@img/sharp-libvips-linux-x64` build). Fell back to Python's Pillow
(pre-installed) for resizing/re-encoding — worked without issue. `sharp` was
installed via `npm install sharp --no-save` and is NOT in package.json; safe to
remove `node_modules/sharp` and related `@img/*` packages, or leave for later use
once the platform binding issue is resolved.
