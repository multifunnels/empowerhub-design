# Japan-Inspired Redesign — keeping TSI logo blue

## Design philosophy

A redesign of the marketing site in the spirit of **Japanese work culture and design tradition** — Ma (間, intentional emptiness), Kanso (簡素, simplicity), Shibui (渋い, restrained beauty) — while keeping TSI's brand identity (the **logo cyan/blue ~#00B6E6** and **slate-grey text ~#666**).

The result should feel like a refined Japanese corporate site (think Muji, Issey Miyake, Toyota corporate, JR rail) — generous whitespace, hairline borders, ultra-thin typography, restrained interactions, deliberate silence between elements. **No shadows, no gradients, no pastel washes, no rounded oversized cards.** The TSI cyan becomes a precise accent, not a flood color.

## Visual system changes

### 1. Color tokens — `src/index.css`
Lock the entire site to a Japanese-monochrome palette anchored on the logo blue:
```text
--background        FAFAF8   off-white "washi" paper
--foreground        1A1A1A   sumi ink black
--muted             F2F1ED   light stone
--muted-foreground  6B6B6B   mid grey (matches logo text)
--border            E5E3DD   hairline beige-grey
--primary           00B6E6   TSI logo cyan (kept exactly)
--primary-foreground FFFFFF
--accent            E8F7FB   palest cyan tint (used very sparingly)
--ring              00B6E6
--radius            0.125rem (2px — almost square)
```
All tokens stay in HSL form per design rules.

### 2. Typography — `index.html`, `tailwind.config.ts`, `src/index.css`
- Add Google Fonts **Noto Serif JP** (display) + keep **Noto Sans JP** (body) + **Inter** (Latin body).
- New family tokens: `font-display` → Noto Serif JP for headings, `font-sans` → Inter / Noto Sans JP fallback.
- Headings: thin weight (300), **wide letter-spacing** (`tracking-[0.18em]` for small caps eyebrow lines, `tracking-tight` for large display).
- Body: 15–16px, line-height 1.8 (Japanese reading rhythm).
- Eyebrow labels above every section: tiny uppercase Latin + Japanese kanji equivalent in muted grey, separated by a thin vertical bar `｜`.

### 3. Layout & spacing — Ma (間)
- Sections: vertical padding `py-24 lg:py-32` (was `py-16`).
- Container kept centered; max content widths shrink to encourage breath (e.g. paragraphs `max-w-2xl`).
- Replace large rounded shadow cards with **hairline-bordered tiles** (`border border-border` + `bg-background`, no shadow, no rounding beyond 2px).
- Hero loses the photo background + gradient — becomes a **near-empty stage** with a single thin horizontal rule, eyebrow text, an enormous quiet headline, and a generous gap before the CTAs. A subtle ensō (円相) circle motif in cyan at very low opacity appears top-right as the only ornament.

### 4. Components touched

| File | Change |
|---|---|
| `src/index.css` | Palette + add base styles: hairline rules, Japanese eyebrow helper class `.eyebrow`, ensō CSS, vertical-text helper. |
| `tailwind.config.ts` | Add fontFamily `display: ['Noto Serif JP', ...]`, `jp: ['Noto Sans JP', ...]`. Re-bind `primary` to logo HSL. Smaller default radius. |
| `index.html` | Load Noto Serif JP + Inter fonts. |
| `src/components/Hero.tsx` | Rewrite: minimal, eyebrow line `Workshops 研修｜TSI`, thin-weight giant headline, single thin rule, ensō ornament, ghost-style CTAs (text + arrow, hairline border). |
| `src/components/CourseCard.tsx` | Replace shadow card with hairline tile; number index `01–06` in cyan, thin title, body grey, hairline divider, "詳しく → / Learn more" link instead of button. |
| `src/components/FeatureSection.tsx` | 4-column hairline grid, no card backgrounds; index numbers + thin titles. |
| `src/components/Testimonial.tsx` | Strip styling: large open-quote glyph in cyan, italic body, hairline rule, author small caps. |
| `src/components/SiteNav.tsx` | Reduce visual weight: thinner font, wider letter-spacing, hairline bottom border, remove shadow. Active state = thin cyan underline. Drop the bg-primary highlight on submenu trigger. |
| `src/components/SiteFooter.tsx` | Replace dark slab with washi-tone footer (`bg-muted`), 4 columns of thin text, single hairline top rule, kanji/Latin eyebrow per column. |
| `src/pages/Index.tsx` | Section eyebrows (Latin + JP), increase rhythm, swap centered titles for left-aligned thin display headlines with kanji subscript. |
| `src/pages/About.tsx` | Same treatment — left-aligned thin display headlines, kanji eyebrows, hairline category tabs. |
| `src/pages/Contact.tsx`, `src/pages/Courses.tsx`, `src/pages/Lectures.tsx`, `src/pages/Recommendations.tsx` | Apply the same eyebrow + hairline-tile + thin-headline pattern by adjusting the page-level wrappers (no logic changes). |

`src/pages/Sharon.tsx` stays as it is — it's the poster page.

### 5. New translation keys (he/en/ja)
Add a small `eyebrow` section per page mapping a Japanese kanji label to the English label (e.g. `home.eyebrow = "Workshops｜研修"`, `about.eyebrow = "About｜会社案内"`, `courses.eyebrow = "Programs｜講座"`, `recommendations.eyebrow = "Voices｜お客様の声"`, `lectures.eyebrow = "Lectures｜講演"`, `contact.eyebrow = "Contact｜お問い合わせ"`). For all 3 languages the kanji portion is preserved (it is part of the visual identity), the Latin portion is translated.

### 6. Ornament — the ensō
A pure CSS circle (SVG inline) drawn with a single thin cyan stroke, slightly broken at the top-left as the traditional ensō does. Used **once per page** as a quiet brand mark — never decorative on every section.

## What stays the same
- All routes, navigation structure, i18n setup, RTL/LTR behavior.
- Existing copy and translations (only adds eyebrow keys).
- Sharon Aizen page (already a designed poster).
- Logo asset.

## Out of scope
- Replacing imagery / photography.
- Adding new pages or features.
- Backend / Cloud changes.
