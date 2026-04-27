## Goal

Use the newly uploaded photo of Sharon on the `/sharon-aizen` page and redesign the hero so the image is showcased properly (the current layout was built for a tall/portrait crop and would cut off her face).

## Changes

### 1. Replace the image asset
- Copy `user-uploads://hf_20260427_121439_b9a3085c-ae19-4de4-94cd-17e8c422fd7e.png` → `src/assets/sharon-aizen.png` (overwrite existing).

### 2. Rework the hero in `src/pages/Sharon.tsx`

Switch from a 2-column hero (image left, text right) to a **stacked hero** that better fits a landscape photo:

```text
┌────────────────────────────────────────────────┐
│                                                │
│           [ Wide cinematic photo ]             │  ← full-width banner
│              gradient overlay                  │     ~420px tall
│                                                │
│   SHARON AIZEN              (name overlay,     │
│   Speaker • Mentor • CEO     bottom-left,      │
│                              gold accent)      │
└────────────────────────────────────────────────┘
│  3 badge cards (Mic / Radio / Tv)              │
│  Keynote red ribbon                            │
└────────────────────────────────────────────────┘
```

Specifics:
- Photo rendered as a full-width banner inside the navy card, height `h-[380px] lg:h-[460px]`, `object-cover object-center` so her face stays visible at every breakpoint.
- Dark gradient overlay (`from-[#070d22]/90 via-[#070d22]/40 to-transparent`) on the bottom-left so the name text is readable on top of the photo.
- Name + tagline overlaid bottom-left (or bottom-right in RTL) with the existing gold (`#c9a64e`) treatment.
- Move the 3 badge cards (Mic / Radio / Tv) and the red "Keynote" ribbon to a row **below** the photo banner, full width — no longer competing with the image.
- Keep the gold vertical accent line, but as a thin top border under the banner.

### 3. Keep everything else unchanged
- All other sections (intro, quote, takeaways, problem/solution, framework, audience, contact) stay exactly as they are.
- All translations (he/en/ja) and routing untouched.
- RTL mirroring preserved (overlay aligns to right in Hebrew, left in English/Japanese).

## Files touched
- `src/assets/sharon-aizen.png` (replaced)
- `src/pages/Sharon.tsx` (hero section only)
