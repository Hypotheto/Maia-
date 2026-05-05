# Maia Screenshot Inventory — 2026-05-03

Purpose: prove intake coverage against the Maia site/tracker so no screenshot batch items are silently missed or duplicated.

## Canonical intake batch checked
Folder:
- `projects/maia/intake/2026-04-07`

Files found:
- `IMG-20260331-WA0000.jpg`
- `IMG-20260331-WA0001.jpg`
- `IMG-20260331-WA0002.jpg`
- `IMG-20260331-WA0003.jpg`
- `IMG-20260331-WA0004.jpg`
- `IMG-20260331-WA0005.jpg`
- `IMG-20260331-WA0006.jpg`
- `IMG-20260331-WA0007.jpg`
- `IMG-20260331-WA0008.jpg`
- `IMG-20260331-WA0009.jpg`
- `IMG-20260331-WA0010.jpg`
- `IMG-20260331-WA0011.jpg`
- `IMG-20260331-WA0012.jpg`
- `IMG-20260331-WA0013.jpg`
- `IMG-20260331-WA0014.jpg`
- `IMG-20260331-WA0015.jpg`

Total screenshots: **16**

## Site asset folder checked
Folder:
- `projects/maia/site/assets`

Files found there:
- `2x4-first-screenshot.jpg`
- `british-museum-junior-graphic-designer-first-screenshot.jpg`
- `crafts-council-first-screenshot.jpg`
- `geoffrey-bawa-trust-first-screenshot.jpg`
- `imagineers-film-first-screenshot.jpg`
- `latin-elephant-first-screenshot.jpg`
- `rawdaisies-first-screenshot.jpg`
- `stupid-jones-first-screenshot.jpg`
- `vivienne-westwood-showroom-intern-first-screenshot.jpg`
- `whip-creative-studio-first-screenshot.jpg`

Total local site assets: **10**

Important distinction:
- `site/assets` shows only screenshots already copied into the current site build
- `intake/2026-04-07` is the raw source-of-truth batch for “did we process every screenshot?”

## Intake-to-opportunity mapping

| Intake file | Mapped item | Current representation status |
|---|---|---|
| WA0000 | The British Museum | On site + dedicated report page + local site asset |
| WA0001 | Whip Creative Studio | On site + dedicated report page + local site asset |
| WA0002 | Maynard | On site as unsorted/source item; no dedicated report page |
| WA0003 | Tate | On site as low-priority unsorted card; no dedicated report page |
| WA0004 | QUEERCIRCLE | On site as low-priority unsorted card; no dedicated report page |
| WA0005 | Vivienne Westwood | On site + dedicated report page + local site asset |
| WA0006 | The New Farm Centre | On site as unsorted/source item; no dedicated report page |
| WA0007 | Imagineers Film | On site + dedicated report page + local site asset |
| WA0008 | Stupid Jones | On site + dedicated report page + local site asset |
| WA0009 | Archived Dreams / Puma | On site as unsorted/source item; no dedicated report page |
| WA0010 | Latin Elephant | On site + dedicated report page + local site asset |
| WA0011 | Frist Art Museum | On site as unsorted/source item; no dedicated report page |
| WA0012 | Oh Boy Records | On site as unsorted/source item; no dedicated report page |
| WA0013 | Manual | On site as unsorted/source item; no dedicated report page |
| WA0014 | Creative Lives in Progress | Confirmed on manual visual check; on site as source/discovery item |
| WA0015 | Meanwhile Space | On site as unsorted/source item; no dedicated report page |

## Coverage result

### Proven accounted-for count
- Intake screenshots: **16 / 16 accounted for**
- Confirmed duplicates/missed items from this batch: **none found in the mapping**

### Representation split
- With dedicated report pages and local site assets: **9 screenshot-derived items + 2x4/Crafts/Geoffrey/Latin/Raw etc. already established site pages**
- Represented only as homepage unsorted/source/low-priority cards: **Maynard, Tate, QUEERCIRCLE, The New Farm Centre, Archived Dreams / Puma, Frist Art Museum, Oh Boy Records, Manual, Creative Lives in Progress, Meanwhile Space**

## Important current truth
All 16 screenshots from the April 7 intake batch are now accounted for in the Maia system.

That does **not** mean all 16 deserve full opportunity pages.
The current evidence-first rule is:
- full opportunity page only when the lead is strong enough or useful enough to justify one
- otherwise keep it on the homepage as a clearly labelled low-priority / source / hold / reference item

## Current gaps that still matter
1. Some represented-on-site items still do not have copied files in `site/assets`; for the unsorted queue, the homepage now points directly to the raw screenshots in `intake/2026-04-07` so the original deadline/details remain visible.
2. Some weaker items still need better official-source enrichment if they are ever to move beyond hold/source status.
3. Homepage wording was updated to reflect verified org status for Maynard, Manual, and Meanwhile Space, but those are still not promoted to full pages because role/source verification remains weak.
4. The unsorted/source cards now include their original screenshots directly from the intake folder so Maia can inspect missing deadline/details without leaving the board.

## Evidence-quality notes from the latest pass
- **Maynard** — real org verified (`maynard.design`), role still unverified
- **Manual** — real org verified (`manualcreative.com`), role still unverified
- **Meanwhile Space** — real org verified, official site + `/careers/` + `Work with us` path verified, specific role still under-detailed
- **Creative Lives in Progress** — official site and `/opportunities` route verified reachable; keep as source/discovery item, not a normal job role
- **Tate** — official organisation site verified; checked `https://www.tate.org.uk/about-us/jobs` returned a Tate 404 page, and Zad later confirmed the opening is expired, so keep it as reference only
- **QUEERCIRCLE** — official organisation site verified; checked `/jobs` and `/opportunities` returned 404, so the screenshot role is not independently source-verified from the current audit pass
- **Frist Art Museum** — official organisation site verified; internship remains expired screenshot-level evidence
- **Oh Boy Records** — official site/store verified; checked `/pages/careers` and `/pages/jobs` both returned 404, so internship remains unresolved screenshot-level evidence
- **The New Farm Centre** — search results junk, still weak hold

## Bottom line
If the question is: **“Did we go through every screenshot in `intake/2026-04-07`?”**
Current answer: **yes, 16 out of 16 are now accounted for.**

If the question is: **“Does every one of those deserve a full opportunity page?”**
Current answer: **no, and that is deliberate under the evidence-first standard.**
