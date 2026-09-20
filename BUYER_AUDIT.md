# WINTEX — Buyer Audit
Internal planning document. Not published on the website. This is a genuine
critical pass against the built site (not a plan), run after implementation.

## Personas
- A: US private-label fashion brand sourcing sweaters/cardigans.
- B: UK school-uniform distributor needing colour consistency and repeat orders.
- C: European sourcing/QA manager verifying WINTEX is a real factory.
- D: UAE/Saudi institutional supplier needing jerseys, sweaters, socks, gloves.
- E: Australian wholesaler seeking a flexible long-term manufacturing partner.

## Finding 1 (fixed): unlabelled stock photography in trust-critical positions
**Persona most affected:** C, then A.
As first built, the homepage hero and the "Proof is in the process" and "Quality"
sections used real, properly-licensed but non-WINTEX photography (a circular
knitting machine, yarn cones, knit texture) with no on-page disclosure — only a
small credit line buried in the footer. A skeptical sourcing/QA manager (Persona C)
routinely reverse-image-searches supplier photography during due diligence. Finding
that a "factory" hero photo is actually a public Wikimedia photo of an unrelated
mill, with no disclosure on the page itself, is worse for trust than showing no
photo at all — it reads as the exact "trader dressing up as a factory" problem the
brief explicitly warns against.
**Fix applied:** every one of these photos now carries a small on-page caption
("Illustrative circular-knitting process, not an WINTEX facility photograph.")
directly under the image, in addition to the footer credit line. See
`ASSET_MANIFEST.md`. This does not remove the underlying limitation (WINTEX has
no published photography of its own yet) but it removes the deception risk, and a
caption that proactively says "this is illustrative" reads as more credible than
either silence or an implied claim.
**Residual risk:** honest, but not as persuasive as real factory photography would
be. This remains the single highest-value pre-launch upgrade (REQUIRED_BUSINESS_INPUTS
item 4).

## Finding 2 (not fixed, documented): six of nine product categories show no photo
Sweaters, cardigans, uniform knitwear, military/institutional knitwear, cotton
shirts, socks, and gloves have no licensed real photo that met the site's quality
and honesty bar (see `ASSET_SOURCING_LOG.md` for what was rejected and why — a
competitor-branded cardigan, amateur phone photos of socks and a single glove, and
an illustration mistaken for a product photo). These categories currently show a
tasteful abstract knit-pattern placeholder with the category name.
**Why not fixed:** the alternative was using a low-quality or falsely-branded photo,
which is a worse trust failure than an honest placeholder. This was a deliberate
trade-off, not an oversight.
**Impact:** Persona A (fashion buyer scanning for sweaters/cardigans specifically)
will notice the two categories they care about most have no photo, which reads as
incomplete rather than fraudulent, but still costs some conversion confidence. This
is the second-highest-value pre-launch upgrade after Finding 1's underlying cause,
same root fix: real WINTEX product photography.

## Finding 3 (not fixed, out of scope): no working contact channel yet
`enquiries@wintexknits.com` and the RFQ form's webhook are both unconfirmed
placeholders (REQUIRED_BUSINESS_INPUTS items 1 and 17). The form itself is fully
functional (validates, shows success/error states, logs server-side), but nothing
sent through it reaches a real inbox until `RFQ_WEBHOOK_URL` is set and a real email
address is confirmed. This is a hard launch blocker for actually receiving enquiries,
even though it does not block the site from being reviewed or demoed.

## Finding 4 (fixed during build): the military/institutional category needed careful wording
Initial instinct was to lean on the military-style production history for
credibility with Persona D. Copy was written and re-checked to say WINTEX
manufactured through a Pakistani export partner and never claims a direct
government or military supply relationship, per the brief's hard constraint. This
wording should still get an owner sign-off before launch given its sensitivity
(REQUIRED_BUSINESS_INPUTS item 14) — flagged, not fully closeable by this process
alone.

## Per-persona read of the finished site
**A (US fashion/private-label):** Understands the offer within five seconds (hero
states manufacturer, categories, 1982, Pakistan). Private Label page and the
sweaters/cardigans category pages answer "how do I start" clearly. Weakness:
Finding 2 (no sweater/cardigan photo yet).

**B (UK uniform distributor):** Uniform Knitwear category page and the "Industries"
page speak directly to colour consistency, sizing, and seasonal reliability, in
their own words rather than generic quality language. No major objection found.

**C (EU sourcing/QA manager):** This is the persona the site had to work hardest to
satisfy, and the one that surfaced Finding 1. After the caption fix, the site no
longer makes an implicit claim it cannot back up. It also does not overclaim
capacity, certifications, or headcount anywhere (checked: no invented numbers exist
in `src/content/`). This persona would likely file the site as "credible but early
digital presence, needs a site visit or video call to fully verify" — a reasonable,
recoverable position, not a disqualifying one.

**D (UAE/Saudi institutional):** Military & Institutional Knitwear category page
addresses specification control and confidentiality directly. The careful wording
from Finding 4 holds up under a skeptical read: it neither oversells nor hides the
real capability.

**E (Australian wholesaler):** Industries and Products pages demonstrate range
breadth without any category (school uniforms or military work) visually dominating
the whole brand, which was an explicit risk called out in the brief. Confirmed by
checking the homepage product grid renders all nine categories at equal visual
weight (same card size, same grid), not a hero treatment for one category.

## Scores (honest, not aspirational)
| Category | Score /10 | Why not higher |
|---|---|---|
| Authenticity | 9 | No fabricated claims anywhere; only reason not 10 is Finding 1's underlying cause (no WINTEX-owned photography exists yet, even though it's now honestly disclosed) |
| Visual quality | 8 | Editorial layout, restrained palette, real typography from the brand guide; held back one point by the placeholder tiles in Finding 2 |
| Manufacturing credibility | 7 | Process description is specific and confident; credibility is capped until real photography or a verifiable fact (capacity, certification) exists |
| Content clarity | 9 | Every page answers what/who/how within the first screen; no jargon, no filler |
| International professionalism | 9 | Consistent voice, no Pakistani-market-only framing, no over-symbolism |
| Product understanding | 8 | Nine categories clearly explained; two of nine (Finding 2) lean on text alone |
| Buyer confidence | 7 | Honest but not yet backed by the strongest possible proof (real photos, a named reference, or a certification) |
| Mobile experience | 8 | Verified via responsive Tailwind breakpoints and code review of every layout; not verified with an actual device/browser screenshot in this environment (see below) |
| Inquiry experience | 8 | Form is complete, validates, has clear states; one point held back until it actually delivers to a real inbox (Finding 3) |
| Overall willingness to contact | 8 | A serious buyer doing initial screening would likely enquire; a buyer requiring photographic or certified proof before first contact might wait for a follow-up email with more material |

None of these are below the brief's 9/10 bar by more than two points, and every
gap traces to a specific, named, fixable cause already logged in
`REQUIRED_BUSINESS_INPUTS.md` — not a vague or unaddressed weakness.

## What would move every score to 9+
1. Real WINTEX factory and product photography (closes Findings 1 and 2 at the root).
2. A working contact channel (closes Finding 3).
3. One verifiable fact beyond "established 1982" — a certification, a machine count, or a permitted client reference.

## Testing limitations, stated plainly
This environment has no headless browser or screenshot tool. Responsive behaviour
was verified by: (a) reading every layout's Tailwind breakpoint classes for
mobile-first collapse rules, (b) confirming no fixed pixel widths that could cause
horizontal overflow, (c) running the production build and fetching every route's
HTML over HTTP to confirm correct rendering, image resolution, and status codes.
It was not verified by looking at the site in an actual mobile browser. This should
be done manually (or with `npm run dev` on a real device) before launch.
