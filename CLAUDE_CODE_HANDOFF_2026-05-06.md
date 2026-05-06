# Maia Project — Claude Handoff Document
**Date:** 2026-05-06  
**Supersedes:** CLAUDE_CODE_HANDOFF_2026-05-03.md  
**Purpose:** Complete state snapshot so any Claude session (or human) can take over without losing context.

---

## What this project is

Maia is a design student looking for a placement year / junior role in London's creative, exhibition, and cultural design sector. Her teacher curated Instagram posts and forwarded them via WhatsApp. This project turns those screenshots into an evidence-first opportunity tracker: a static HTML site that honestly labels what's verified vs. screenshot-level, and tracks her application progress.

**Maia's lane:** creative direction, exhibition design, art direction, editorial/cultural graphic design. Not pure commercial branding. Not tech. Not fashion unless strongly design-adjacent.

---

## Project structure

```
maia/
├── site/                        ← the HTML site (open index.html in browser)
│   ├── index.html               ← main board (31 cards, action system, tracker)
│   ├── styles.css               ← all styles
│   ├── app.js                   ← localStorage action system (states, notes, export)
│   ├── review.html              ← dropped items audit (86 → 31 explanation)
│   ├── assets/                  ← screenshots used on cards
│   └── opportunities/           ← 18 detail pages (one per promoted opportunity)
├── reports/                     ← markdown reports (older format, pre-site)
├── intake/
│   ├── 2026-04-07/REVIEW.md     ← first batch intake review
│   └── 2026-05-05/
│       ├── IMAGE_BATCH_REVIEW.md ← full triage of all 86 WhatsApp images
│       └── REVIEW.md
├── OPPORTUNITIES.md             ← master tracker table (all items, all statuses)
├── QUALITY_AUDIT.md             ← evidence audit log (classify each item)
├── WORKFLOW.md                  ← intake pipeline steps
├── REPORT_TEMPLATE.md           ← template for new opportunity pages
├── SAFETY.md                    ← what not to do (don't over-promote weak leads)
└── CLAUDE_CODE_HANDOFF_2026-05-06.md  ← this file
```

---

## The site

**Open:** `site/index.html` in any browser.

**31 cards** organised into sections:
- **High interest** (4): All Purpose Studio (urgent), Luke Halls, TwoSee, Bompas & Parr
- **Worth reviewing** (14): Jack Nimble, ARRCC, Hachette, Art & Graft, Fraser Muggeridge, HarperCollins, CMDS, Geoffrey Bawa, Latin Elephant, Whip, 2x4, Imagineers, Stupid Jones, Vivienne Westwood
- **Low priority** (1): Crafts Council
- **Expired / constrained** (2): British Museum, Raw Daisies
- **Unsorted / source items** (10): Creative Lives, Maynard, Manual, Meanwhile Space, Oh Boy, New Farm Centre, Tate, QUEERCIRCLE, Frist, Archived Dreams/Puma

**18 detail pages** in `site/opportunities/` — one per promoted item. Each has:
- Action panel at top (states: active / shortlisted / applied / watching / not-a-fit / archived)
- Deadline countdown (where deadline is known)
- Last-checked date
- Notes field (persists in browser localStorage)
- Verification log

**`review.html`** — the dropped items audit. Shows every image that didn't become a card, with reason and any links found. Five categories: carousel slides, expired, aggregator junk, confirmed existing entries, items needing a second look.

---

## The action system (app.js)

- All state stored in **browser localStorage** — device/browser specific (Maia uses one laptop, this is fine)
- States: `active` → `shortlisted` → `applied` → `watching` → `not-fit` → `archived`
- `active` = default, shows on main board
- `not-fit` and `archived` = faded on homepage (use "Show archived / not a fit" toggle to reveal)
- `shortlisted`, `applied`, `watching` = show in the Tracker section at the bottom of the homepage
- Export/import buttons on both homepage and detail pages — JSON file, preserves all states and notes
- **Card IDs:** each card has `data-card-id="slug"` on the homepage div; detail pages declare their ID via `<meta name="card-id">`. The JS uses these to sync state between pages.

---

## Image source

**`C:\Users\HypoClaw\Desktop\Maia Project Data\`** — 86 WhatsApp images forwarded by Maia's teacher.  
- 79 images from 2026-04-20 (timestamps 16:10–16:18)
- 3 images from 2026-04-27
- 4 images from 2026-04-28

All 86 were read and triaged. Full triage in `intake/2026-05-05/IMAGE_BATCH_REVIEW.md`.

---

## Evidence standard (must follow this)

For every opportunity, classify separately:
1. **Organisation verified?** — does the org/site clearly exist?
2. **Role verified?** — is the role on an official page, not only inferred from screenshot?
3. **Active/current?** — is the deadline still in the future?
4. **Fit for Maia?** — creative direction / exhibitions / design lane

**Do not publish as a normal opportunity** unless the role source is independently verified OR the page clearly says it's screenshot-level. Weak leads can still appear, but must be labelled honestly.

---

## Pending / next actions as of 2026-05-06

### Maia should act on now
| Item | Action | Contact |
|---|---|---|
| All Purpose Studio | Apply — May start, extremely urgent | jobs@allpurpose.studio |
| TwoSee Studio | Apply — posted late April, likely closing | INFO@TWO-SEE.COM |
| ARRCC | Deadline 17 May — decide if architecture/spatial design is in scope | Via @_arrcc Instagram |

### Verify deadlines before applying
| Item | Where to check |
|---|---|
| Art & Graft 2026 | artandgraft.com or @artandgraft Instagram |
| Fraser Muggeridge Studio | @frasermuggeridgestudio full caption or frasermuggeridge.co.uk |
| HarperCollins UK Design | harpercollins.co.uk/pages/careers or @harpercollinsuk_design slide 3 |
| Bompas & Parr | bompasandparr.com or @bompasandparr Instagram carousel slides 2–4 |
| Hachette Design Internship | hachette.co.uk |

### Items that need re-examination (teacher sent them, may have more value than logged)
| Item | Why to re-examine | Where |
|---|---|---|
| Stupid Jones | Teacher chose to send it — check @stupidjoneslondon and stupidsjones@gmail.com for current status | site/opportunities/stupid-jones.html |
| Vivienne Westwood | Paid £13.85/hr — source @socialfixt, verify directly at viviennewestwood.com | site/opportunities/vivienne-westwood-showroom-intern.html |
| Maynard | Org verified, role detail thin — check @maynarddesign for full post | Main board unsorted |
| Manual | Summer internship signal — check @manual_creative directly | Main board unsorted |
| Meanwhile Space | Hiring signal real — check meanwhile-space.com/careers | Main board unsorted |
| Hyld Studio | Art Director / PT role — verify hyldstudio.com, if real promote to Worth Reviewing | review.html Category 5 |
| Map Project Office | @gd_jobs repost — verify mapprojectoffice.com | review.html Category 5 |

### Git
Git push is **blocked from the Linux sandbox** — the `.git/config` file is unreadable across the NTFS filesystem boundary. Run from Windows PowerShell:
```powershell
cd C:\Users\HypoClaw\.openclaw\workspace\projects\maia
git add -A
git commit -m "Add action system, review page, 31 card IDs, tracker section, review thumbnails + links"
git push
```

---

## What Claude did in this session (2026-05-06)

1. Read all 86 WhatsApp images → full triage in `intake/2026-05-05/IMAGE_BATCH_REVIEW.md`
2. Built 8 new opportunity detail pages: All Purpose, Luke Halls, Jack Nimble, TwoSee, Bompas & Parr, Art & Graft, Fraser Muggeridge, HarperCollins
3. Added 7 new homepage cards: ARRCC, Hachette, Art & Graft, Fraser Muggeridge, HarperCollins, CMDS, Bompas & Parr
4. Updated QUALITY_AUDIT.md with all new items
5. Updated OPPORTUNITIES.md with 14 new rows
6. Built `app.js` — full localStorage action system (6 states, notes, export/import)
7. Updated `styles.css` with action system styles
8. Updated all 18 detail pages with action panel, meta tags (card-id, deadline, last-checked), script include
9. Updated `index.html` — all 31 cards tagged with data-card-id, deadline data where known, tracker section, 86→31 explainer, script include
10. Built `review.html` — dropped items audit in 5 categories
11. Added thumbnails to Category 1 rows in review.html (4 real images, 1 📷 placeholder for VMV)
12. Converted all 30 @handles across Categories 1–4 of review.html to clickable Instagram links
13. Added "How to complete the image mapping" guide at bottom of review.html
14. Wrote this handoff doc

---

## review.html thumbnail status (as of end of session 2)

Category 1 — **4 of 5 rows have real thumbnails:**
- `harpercollins-slide-1.jpg` ← `WhatsApp Image 2026-04-20 at 16.10.14 (4).jpeg`
- `harpercollins-slide-2.jpg` ← `WhatsApp Image 2026-04-20 at 16.10.16 (2).jpeg`
- `lordaeck-slide-1.jpg` ← `WhatsApp Image 2026-04-20 at 16.10.14.jpeg`
- `lordaeck-slide-2.jpg` ← `WhatsApp Image 2026-04-20 at 16.10.15 (1).jpeg`
- VMV Studio (5th row) — 📷 placeholder, needs image from 16:18 timestamp group

Categories 2, 3, 4 — all have Instagram links but **no thumbnails yet.** To add them:
1. Read `IMAGE_BATCH_REVIEW.md` to find which timestamp group each org falls in
2. Read the specific WhatsApp image file to confirm it shows that org
3. Copy to `site/assets/review/org-role-keyword.jpg`
4. In review.html, find that row's Source `<td>` and prepend: `<img src="../assets/review/FILENAME.jpg" style="width:110px;display:block;margin-bottom:4px;border-radius:3px;border:1px solid #e8e4dc;">`
5. The "How to complete" section at the bottom of review.html has the full guide

---

## Key files to read when starting a new session

1. **This file** — current state
2. **OPPORTUNITIES.md** — all items with status
3. **QUALITY_AUDIT.md** — evidence classification
4. **intake/2026-05-05/IMAGE_BATCH_REVIEW.md** — full image triage
5. **site/index.html** — the actual site

Do not re-read the 86 images from scratch — the IMAGE_BATCH_REVIEW.md has the complete triage. Only re-read a specific image if investigating a particular item.
