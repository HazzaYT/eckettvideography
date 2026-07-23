## Goal
Drop the Kit page entirely and replace it with a short "Approach" band on the home page that signals industry-standard capability without naming brands.

## Changes

**Remove the Kit page**
- Delete `src/routes/kit.tsx`.
- Remove the `{ to: "/kit", label: "Kit" }` entry from the nav in `src/routes/__root.tsx`.
- Remove the `/kit` entry from `src/routes/sitemap[.]xml.ts`.

**Add an "Approach" section to `src/routes/index.tsx`**
Insert between the Services strip and the Clients grid. Keep it typographic — no photos, no brand names — three short capability statements in a horizontal band:

```text
────────────────────────────────────────────────
 How I shoot                     A short line of
                                 supporting copy
────────────────────────────────────────────────
 Cinema-grade cameras  │  Licensed aerial platform  │  Colour-graded in a pro suite
 Full-frame and Super 35    CAA-registered drone       Delivered broadcast-ready
 sensors for a filmic look  work, insured and legal    from a calibrated finish
────────────────────────────────────────────────
```

Copy avoids brand names but implies the tier: "cinema-grade", "full-frame / Super 35", "CAA-registered", "insured", "broadcast-ready", "calibrated finish". Result: clients read *professional* without a spec sheet.

## Out of scope
- Portfolio, Contact, Clients grid, hero — untouched.
- No new images or assets.
