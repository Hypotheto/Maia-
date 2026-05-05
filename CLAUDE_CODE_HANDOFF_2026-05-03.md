# Maia — Claude Code Handoff

Last updated: 2026-05-03
Status: local working state only, not yet published/live

## 1) What Maia is

Maia is a small static opportunities board plus per-opportunity report pages.

Purpose:
- collect creative / exhibition / design / culture opportunities that may fit Maia
- let her scan quickly from a homepage board
- click deeper into a dedicated report page only when something is worth attention

Current strategic correction:
- the site had drifted into over-promoting weak screenshot leads
- current audit work is correcting it toward an evidence-first board
- the right distinction is:
  - verified role
  - research lead
  - reference-only / expired / constrained
  - noisy source item that should not be treated like a real opportunity

Core rule now:
**Do not present a screenshot-only lead as a normal opportunity unless the page explicitly says it is still only screenshot-level / unverified.**

---

## 2) Project structure

Important files/folders:
- `OPPORTUNITIES.md` — structured tracker for all captured opportunities/leads
- `QUALITY_AUDIT.md` — current audit truth, evidence standard, corrected classifications
- `reports/HOLD.md` — intake/holding queue for weak or unresolved leads
- `site/index.html` — homepage board
- `site/opportunities/*.html` — individual opportunity report pages
- `site/assets/` — screenshots/images used in cards and report pages
- `intake/2026-04-07/` — canonical raw screenshot dump from the April intake batch
- `SCREENSHOT_INVENTORY_2026-05-03.md` — verified mapping of the 16 raw intake screenshots to their current representation status

This is a static site. No framework/build system is currently in play from what was used in this pass; edits were direct HTML/markdown edits.

---

## 3) High-level current state

### Published status
Nothing in this handoff confirms that the current local changes have been published.
Treat all changes below as **local/unpublished unless separately deployed**.

### Current goal of the project
The current workstream is **quality correction**, not expansion.
That means:
- stop pretending weak leads are stronger than they are
- demote expired or under-verified items
- preserve useful leads, but label them honestly
- keep the board useful without filling it with junk

### Current homepage intent
The homepage is now meant to say, in plain English:
- evidence status matters
- `High interest` should be earned, not ornamental
- `Worth reviewing` is not the same as application-ready
- `Unsorted / source items` are research queue, not validated opportunities

---

## 4) Current evidence standard

Every opportunity should be judged across these separate questions:
1. **Organisation verified?**
2. **Role verified from an official/source page?**
3. **Timing/current status verified?**
4. **Fit for Maia actually strong?**
5. **Action status:** application-ready / research lead / reference only / low priority / remove/demote

This separation matters because several leads are real organisations with weak role verification.
That is not the same as “fake,” but it is also not good enough for strong promotion.

---

## 5) Files definitely modified in the current audit wave

Confirmed local modifications relevant to this Maia pass:
- `projects/maia/OPPORTUNITIES.md`
- `projects/maia/reports/HOLD.md`
- `projects/maia/QUALITY_AUDIT.md`
- `projects/maia/site/index.html`
- `projects/maia/site/opportunities/2x4.html`
- `projects/maia/site/opportunities/imagineers-film.html`
- `projects/maia/site/opportunities/whip-creative-studio.html`

Potentially other files may also exist in repo, but the ones above are the important current audit artifacts.

---

## 6) What has already been corrected

### A) 2x4
Previous problem:
- it was framed too much like a current high-interest active opening

What was verified:
- official 2x4 jobs pages exist
- pages include concrete timing around April / April 3 / April starts
- that captured Summer 2026 cycle now appears passed

Correct current status:
- **strong reference / future-cycle target**
- **not a safely current active opening**

Local file updated:
- `site/opportunities/2x4.html`

Homepage also reflects that it is timing-passed/reference-grade rather than truly live.

### B) Imagineers Film
Previous problem:
- it implied a cleaner opportunity than the evidence supported

What was verified:
- company website exists: `https://www.imagineersfilm.com/`
- about page exists
- company is real
- direct `/careers` check returned 404
- role itself remains screenshot-level / Instagram-level evidence

Correct current status:
- **company verified, role unverified**
- **research lead, not application-ready**

Local file updated:
- `site/opportunities/imagineers-film.html`

Homepage card was also tightened to reflect this.

### C) Whip Creative Studio
Previous problem:
- it was known to have a real internships page, but role confirmation was still too vague

What was verified:
- official internships page exists
- direct source text from the official page confirmed at least one real role:
  - `Art Direction and Production Intern`
- logistics like paid/location/mode/current-live status are still not cleanly extracted

Correct current status:
- **real opportunity with incomplete logistics verification**
- strongest of the current direct creative leads, but still should not overclaim details not actually verified

Local file updated:
- `site/opportunities/whip-creative-studio.html`

Important note:
- the individual Whip page now uses a stronger badge/status (`Role verified`)
- but `site/index.html` still shows the Whip homepage card badge text as **`Better verified`**
- this is not catastrophic, but it is a small consistency cleanup still worth doing

---

## 7) Current homepage state

### General state
`site/index.html` has already been significantly tightened.
It now includes:
- a quality note explaining the evidence audit
- explicit claim that there may be no legitimate `High interest` item right now
- an empty `High interest` section by design
- stronger distinction between `Worth reviewing`, `Low priority`, `Expired / constrained`, and `Unsorted / source items`

### Important current truth on the homepage
The homepage currently says:
- `High interest` = intentionally empty
- `Worth reviewing` contains items that are interesting but not necessarily current/live/application-ready
- unsorted items remain visible as a research queue instead of disappearing

### Important inconsistency to know
`site/index.html` still includes some language that is stronger/older than the newest audit standard in a few spots.
Most important example observed directly:
- Whip homepage card badge still says `Better verified`
- Whip detail page says `Role verified`

That means the homepage is improved, but not yet perfectly normalized to the newest evidence terminology.

---

## 8) Current tracker state (`OPPORTUNITIES.md`)

### Strongest currently useful leads
These are not all equally verified, but they are the most worth keeping visible:
- **Whip Creative Studio** — direct official role verification for at least one internship role; logistics still incomplete
- **2x4** — strong reference/future-cycle target, but timing appears passed
- **Imagineers Film** — real company, role still unverified
- **Vivienne Westwood** — adjacent-fit paid showroom intern lead, still needs fuller role verification
- **Stupid Jones** — still screenshot/email-level only; worth preserving, not overclaiming
- **British Museum** — strong fit if live, but official live status still unclear and curl checks were blocked/failed

### Low-priority or reference-only items
- Tate — real role, weak fit
- QUEERCIRCLE — likely too senior
- Frist Art Museum — expired
- Crafts Council — real but wrong level/type
- Raw Daisies — expired reference
- Latin Elephant — real org, but likely passed timing / mixed fit
- Geoffrey Bawa Trust — real and culturally strong, but practical feasibility constrained

---

## 9) Unsorted / hold / under-verified items — current truth

These were the key unresolved items in the latest pass.

### 1. Maynard
Current evidence:
- official domain responds on Wix
- `maynard.design` / `www.maynard.design` confirmed as real organisation presence
- role itself still not source-verified from an original post or official job page

Correct status:
- **research lead / organisation verified / role unverified**

Do not do:
- do not promote as active/live without recovering the actual source post

### 2. Manual
Current evidence:
- official domain responds: `manualcreative.com`
- organisation verified
- internship details still only screenshot/reel-level in this workflow

Correct status:
- **research lead / organisation verified / role unverified**

Do not do:
- do not treat as real listing until original source is recovered

### 3. Meanwhile Space
Current evidence:
- official site verified: `https://meanwhilespace.com/`
- official `/careers/` page exists
- direct official `Work with us` funnel exists from structured page data / live site
- but the exact screenshot-discovered role details remain too thin to claim a clean verified listing

Correct status:
- **research lead / organisation verified / hiring signal real / role specifics unverified**

This is stronger than pure junk, but still not good enough for full promotion.

### 4. Oh Boy Records
Current evidence:
- still too thin
- search-engine results were noisy and substantively useless
- no clean official role confirmation recovered

Correct status:
- **hold / unresolved / not promotable**

### 5. The New Farm Centre
Current evidence:
- still too thin
- search-engine routes did not yield useful evidence
- no official-source role confirmation recovered

Correct status:
- **hold / unresolved / not promotable**

### 6. Creative Lives in Progress
Current evidence:
- confirmed directly from intake screenshot `IMG-20260331-WA0014.jpg`
- Creative Lives in Progress post calling for UK-based emerging creatives to share work
- not a normal job listing

Correct status:
- not a job post
- source/discovery item only

### 7. Archived Dreams / Puma
Correct status:
- ambiguous creative/campaign opportunity signal
- not clearly a normal job listing

---

## 10) What the failed/weak research attempts actually mean

Important: several searches “succeeded technically” but were useless as evidence.
Claude should preserve this distinction.

### Search-engine junk is not evidence
During this pass:
- DuckDuckGo HTML returned anti-bot / useless results in some routes
- Bing HTML was often noisy and low-value
- Bing RSS was cleaner structurally but often still returned irrelevant junk

Examples:
- Oh Boy Records search results devolved into unrelated `oh` language results
- The New Farm Centre search returned unrelated junk (including LM Studio / Zhihu noise)

Correct lesson:
- **technical command success != research success**
- these searches should not be treated as supporting evidence for promotion

### British Museum note
A direct curl route to the British Museum also failed due to network/connection issues in one attempt.
That is not proof the role is false.
It just means official verification was still incomplete in this workflow.

---

## 11) Known local inconsistencies / cleanup targets

### Confirmed inconsistency
Whip status language differs between files:
- `site/opportunities/whip-creative-studio.html` → `Role verified`
- `site/index.html` → `Better verified`

### Likely broader cleanup still needed
The homepage has been improved a lot, but the board may still contain some phrasing inherited from the earlier, more promotional pass.
Claude should read `site/index.html` with fresh eyes and normalize any copy that:
- implies application-readiness without evidence
- implies current-live status without timing verification
- collapses “real company” and “verified role” into the same thing

---

## 12) Recommended next actions for Claude Code

Best next sequence:

### Priority 1 — normalize homepage language
Review `site/index.html` and make the terminology fully consistent with `QUALITY_AUDIT.md`.
Especially:
- Whip badge wording
- any card that still sounds stronger than the verified evidence supports
- any wording that implies active/live status without proof

### Priority 2 — tighten the strongest pages first
Focus first on pages that are worth keeping live even under a stricter standard:
- `whip-creative-studio.html`
- `2x4.html`
- `imagineers-film.html`
- possibly British Museum / Vivienne Westwood / Stupid Jones depending on evidence review

### Priority 3 — decide whether to create more pages or keep leads in queue
For unresolved items like:
- Maynard
- Manual
- Meanwhile Space
- Oh Boy Records
- The New Farm Centre

Do **not** create or promote full opportunity pages unless role/source evidence improves.
If they stay weak, keep them on the homepage only as unsorted/source/research items.

### Priority 4 — prepare for one clean publish batch
Once enough wording is consistent and evidence status is honest across the board:
- publish one correction batch
- do not call the project “done” unless the site is actually live with those changes

This matters because a previous workflow mistake was calling Maia work “done” when it only existed locally.

---

## 13) Strong rules Claude should follow

1. **Do not overclaim.**
2. **Do not treat search-engine junk as evidence.**
3. **Separate org verification from role verification.**
4. **Separate role verification from current-live timing verification.**
5. **Keep screenshot-only leads visible if useful, but label them as such.**
6. **If something is only local, say it is local.**
7. **If publishing has not happened, do not imply the website is updated live.**

---

## 14) Concise status table for takeover

| Item | Current status | Key truth |
|---|---|---|
| Whip Creative Studio | Strongest current direct lead | Official internships page + at least one role directly confirmed; logistics incomplete |
| 2x4 | Strong reference / future-cycle target | Real, serious, but captured cycle appears passed |
| Imagineers Film | Research lead | Real company, role unverified, `/careers` = 404 |
| British Museum | Research lead | Strong if live, but current official verification incomplete |
| Vivienne Westwood | Adjacent worth-reviewing lead | Paid and interesting, but still under-verified |
| Stupid Jones | Research lead | Screenshot/email-level only |
| Maynard | Research lead | Real org verified, role unverified |
| Manual | Research lead | Real org verified, role unverified |
| Meanwhile Space | Research lead | Real org + careers/work-with-us path verified, role specifics unclear |
| Oh Boy Records | Hold | No usable evidence upgrade |
| The New Farm Centre | Hold | No usable evidence upgrade |
| Tate | Low priority | Real role, weak fit |
| QUEERCIRCLE | Low priority | Likely too senior |
| Frist Art Museum | Closed / expired | Passed timing |
| Creative Lives in Progress | Source item only | Not a job post |
| Archived Dreams / Puma | Hold / ambiguous | Not clearly a standard role |

---

## 15) If Claude wants to verify quickly before editing

Best local truth sources first:
- `QUALITY_AUDIT.md`
- `OPPORTUNITIES.md`
- `reports/HOLD.md`
- `site/index.html`
- `site/opportunities/2x4.html`
- `site/opportunities/imagineers-film.html`
- `site/opportunities/whip-creative-studio.html`

If external verification is resumed, prefer:
- direct official company/job pages
- structured site endpoints if visible pages are messy
- explicit caution around search results that are structurally available but substantively useless

---

## 16) Bottom line

The project is mid-correction, not mid-expansion.

The most important truth for takeover is this:
**the board should become smaller, tougher, and more honest before it becomes bigger.**

Whip got stronger.
2x4 got demoted from “live-looking” to reference/future-cycle.
Imagineers got corrected from overclaiming to honest research lead.
Maynard/Manual/Meanwhile Space improved at the organisation-verification level.
Oh Boy Records and The New Farm Centre did not improve enough and should remain weak holds.

That is the real state of Maia right now.
