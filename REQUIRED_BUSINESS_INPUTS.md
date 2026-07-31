# INTERLOCK — Required Business Inputs
Internal planning document. Not published on the website. Everything below is
missing information the site currently handles with honest, non-specific language.
The site is safe to launch without these, but each upgrade makes specific pages
stronger. Nothing here is exposed as visible "TODO" text on the live site.

| # | Missing item | Why buyers need it | Where it appears | Question for the owner | Safe to launch without it? |
|---|---|---|---|---|---|
| 1 | Real contact email | Buyers need a working address to submit RFQs | Footer, Contact page, RFQ form fallback | What is the monitored B2B enquiry inbox? | Yes — form has a structural success state; wire the address before go-live |
| 2 | Phone / WhatsApp number | International buyers often prefer WhatsApp for fast first contact | Footer, Contact page | What number should be published, and is WhatsApp active on it? | Yes — omitted cleanly until supplied |
| 3 | Physical factory address / city | Specific (not vague) location builds credibility without overclaiming | Footer, About, Contact | What is the exact city/address to publish? | Yes — "Pakistan" used generally in the meantime |
| 4 | Real factory photography and short video | Strongest trust signal for skeptical buyers; current placeholders are honest but generic | Hero, Manufacturing, About | Can photography/video be arranged at the facility? | Yes — site works without it, but this is the single highest-impact upgrade |
| 5 | Machine count / types / gauges | Buyers assess capability by equipment specifics | Manufacturing page | What knitting/linking/finishing equipment is on the floor? | Yes — capability described qualitatively instead |
| 6 | Monthly/annual production capacity | Wholesalers and distributors size opportunities against capacity | Manufacturing, Home credibility strip | What is a defensible capacity range? | Yes — omitted rather than guessed |
| 7 | Minimum order quantity policy | Buyers self-qualify before enquiring | Products, Private Label | Is there a real MOQ, and does it vary by category? | Yes — form allows "approximate quantity" instead of a published fixed MOQ |
| 8 | Typical sampling and production lead times | Directly affects buyer planning | Manufacturing, Private Label | What are honest current lead times? | Yes — process described in stages, not days |
| 9 | Certifications / compliance standards held | Institutional and defence-adjacent buyers often require this | Manufacturing, About | Are there any current certifications (ISO, social compliance, etc.)? | Yes — omitted; do not imply certification that doesn't exist |
| 10 | Any nameable existing clients (with permission) | Real, named social proof outperforms generic claims | Home, Industries | Can any current customer (even unnamed by category, e.g. "a premium school system in Lahore") be referenced with permission? | Yes — no fake logos or names used meanwhile |
| 11 | Export/RFQ response-time commitment | Buyers want to know what happens after they submit | Contact, Private Label CTA | What response time can the team realistically commit to? | Yes — copy avoids promising a specific window (e.g. no fabricated "within 24 hours") |
| 12 | Company registration / legal entity name | Needed for Terms page and buyer due-diligence | Terms, footer legal line | What is the registered legal entity name? | Yes — Terms uses "INTERLOCK" with a placeholder note structure that's easy to complete |
| 13 | Real archival photography from 1982 onward | Would substantially strengthen the Heritage section | About | Does any archival photo, order book, label, or early workshop image exist? | Yes — Heritage section is built typographically without fabricated imagery |
| 14 | Confirmed military-export-partner wording | Legal/reputational sensitivity around this claim | About, Industries | Is the current careful phrasing ("manufacturing experience for specification-led military knitwear through an export partner") accurate and approved? | Yes, but this specific wording should be owner-reviewed before launch given its sensitivity |
| 15 | Social/LinkedIn presence | International B2B buyers often verify via LinkedIn before enquiring | Footer | Does INTERLOCK have or want a LinkedIn company page? | Yes — omitted until it exists |
| 16 | Confirmed production domain name | `site.url` in `src/content/site.ts` currently uses a placeholder (`interlockknits.com`) for canonical URLs, sitemap, and structured data | Sitewide metadata, sitemap.xml, robots.txt, JSON-LD | What domain will the site launch on? | Yes to build/preview; update `site.url` before the real domain goes live so canonical URLs and structured data are correct |
| 17 | RFQ delivery destination | The enquiry form currently logs submissions server-side with no webhook configured | Contact form backend | Should submissions go to an email inbox, a CRM, or a Slack/Teams channel? Provide the webhook URL or SMTP details | Yes — set `RFQ_WEBHOOK_URL` in production env before relying on the form for real enquiries |

## Launch blocker check
None of the above block a functional launch. Item 4 (real photography) and item 1
(monitored email) are the two highest-priority upgrades before actively driving paid
traffic to the site.
