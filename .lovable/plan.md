# Japan-Inspired Redesign — keeping TSI logo blue

## Design philosophy

A redesign of the marketing site in the spirit of **Japanese work culture and design tradition** — Ma (間, intentional emptiness), Kanso (簡素, simplicity), Shibui (渋い, restrained beauty), Wabi-Sabi (侘寂, beauty in imperfection) — while keeping TSI's brand identity (the **logo cyan ~#00B6E6** and **slate-grey text ~#666**).

The result should feel like a refined Japanese corporate site (Muji, Issey Miyake, Toyota corporate, JR rail) — generous whitespace, hairline borders, ultra-thin typography, restrained interactions, deliberate silence between elements. **No shadows, no gradients, no pastel washes, no rounded oversized cards.** The TSI cyan becomes a precise accent, not a flood color.

## Visual system changes

### 1. Color tokens — `src/index.css`
```text
--background        FAFAF8   off-white "washi" paper
--foreground        1A1A1A   sumi ink black
--muted             F2F1ED   light stone
--muted-foreground  6B6B6B   mid grey (matches logo text)
--border            E5E3DD   hairline beige-grey
--primary           00B6E6   TSI logo cyan (kept exactly)
--primary-foreground FFFFFF
--accent            E8F7FB   palest cyan tint
--ring              00B6E6
--radius            0.125rem (2px)
```
All tokens stay in HSL form per design rules.

### 2. Typography
- Add **Noto Serif JP** (display) + **Noto Sans JP** (body) + **Inter** (Latin body).
- `font-display` → Noto Serif JP, `font-sans` → Inter / Noto Sans JP fallback.
- Headings thin (300), wide letter-spacing for eyebrows, `tracking-tight` for large display.
- Body 15–16px, line-height 1.8 (Japanese reading rhythm).
- Eyebrow labels: tiny uppercase Latin + Japanese kanji separated by `｜`.

### 3. Layout & spacing — Ma (間)
- Sections `py-24 lg:py-32`.
- Paragraphs `max-w-2xl` for breath.
- Replace shadow cards with **hairline-bordered tiles**.
- Hero is a near-empty stage: thin horizontal rule, eyebrow, giant quiet headline, generous gap, ghost CTAs.

### 4. UX & interaction — Japanese restraint
- **Motion**: replace bouncy/scale hover effects with tiny, slow shifts (1–2px translate, 400ms ease-out). No springy bounces. Buttons reveal a thin underline rather than bg color flips.
- **Cursor & focus**: thin 1px focus ring in cyan, no glow.
- **Buttons**: ghost-style by default — text + thin arrow `→` + 1px border. Primary CTA = solid cyan but flat (no shadow, square corners). Secondary = text-only with hairline underline on hover.
- **Forms**: input = bottom hairline only (no box), label as eyebrow above, helper text in muted grey, error in a low-saturation red. The Contact page becomes a vertical sequence of single-line fields with wide spacing — like a tea-ceremony order form.
- **Loading**: replace spinners with a thin growing horizontal cyan line (kakejiku style).
- **Hover-states on cards**: only the index number deepens to cyan + a hairline grows from left to right under the title. No card lift, no shadow.
- **Section transitions**: very gentle fade-up on scroll with `prefers-reduced-motion` respected; no parallax, no zoom-in.
- **Density**: information is broken into shorter passages with more vertical silence between them rather than denser cards.

### 5. Components touched

| File | Change |
|---|---|
| `src/index.css` | Palette + base styles: hairline rules, `.eyebrow` helper, ensō CSS, vertical-text helper, kakejiku loading bar. |
| `tailwind.config.ts` | fontFamily `display`, `jp`. Re-bind `primary` to logo HSL. Smaller radius. |
| `index.html` | Load Noto Serif JP + Noto Sans JP + Inter. |
| `src/components/Hero.tsx` | Rewrite minimal; **the Unsplash tech-pattern background image is removed** and replaced with whitespace + ensō ornament + a generated washi-paper texture (very subtle). |
| `src/components/CourseCard.tsx` | Hairline tile; index `01–06` cyan, thin title, hairline divider, `詳しく → / Learn more` link. |
| `src/components/FeatureSection.tsx` | 4-col hairline grid, no card backgrounds; index numbers + thin titles. |
| `src/components/Testimonial.tsx` | Large open-quote in cyan, italic body, hairline rule, author small caps. |
| `src/components/SiteNav.tsx` | Thinner font, wider spacing, hairline bottom border. Active = thin cyan underline. |
| `src/components/SiteFooter.tsx` | Washi-tone footer, 4 thin columns, hairline top rule, kanji/Latin eyebrows. |
| `src/pages/Index.tsx` | Section eyebrows, more rhythm, left-aligned thin display headlines. |
| `src/pages/About.tsx`, `Contact.tsx`, `Courses.tsx`, `Lectures.tsx`, `Recommendations.tsx` | Apply the eyebrow + hairline-tile + thin-headline + hairline-form pattern. |

`src/pages/Sharon.tsx` stays as it is — poster page.

### 6. Imagery — backgrounds, photos and motifs

The site is text-heavy with very few images today; future additions need clear rules so they read Japanese in mood, not just the typography around them.

- **Removed:** the generic Unsplash "tech pattern" hero background in `Hero.tsx` — opposite of Kanso.
- **Generated background assets** (using the Lovable AI Gateway image model — Nano banana — saved into `src/assets/`):
  - `washi-texture.png` — very subtle off-white paper grain, used at ~6% opacity site-wide as `body::before`.
  - `enso.svg` — hand-drawn cyan ensō circle ornament, 1px stroke, broken at top-left, used once per page.
  - `sumi-stroke.png` — a single horizontal sumi-ink brushstroke behind major section headings (low opacity).
  - `kakejiku-divider.svg` — a vertical thin scroll-style divider used between sections at large breakpoints.
  - `hero-mountain.png` — extremely faint, desaturated ink-wash silhouette of distant mountains (sumi-e style) anchored bottom-right of the hero, max 8% opacity.
  - Optional `about-courtyard.png` for the About page header — empty Japanese courtyard / shoji light, desaturated, vertical aspect.
  All generated images go through a desaturation + warm-grey tint pass so they never compete with the cyan accent.
- **Photographic style guide** for any future photos:
  - Subjects: Japanese workplaces, tatami / shoji / engawa interiors, Kyoto streetscapes, calm hands-on craft (chadō, calligraphy, ikebana), or Ando-style architecture.
  - Composition: lots of negative space, off-center subject, never centered.
  - Color: desaturated ~70%, warm-grey/sepia tint. Cyan stays a UI accent only.
  - Treatment: 1–3% paper-grain overlay, faint vignette.
  - Aspect: tall verticals (kakejiku) or extreme widescreens, never square stock.
  - Forbidden: glossy western stock, suits-in-glass-offices, abstract circuit-board visuals, saturated gradients, on-camera smiles.

### 7. Icons — stroke iconography in the kanji spirit

The site currently uses Lucide (filled stroke, rounded line-caps). To match a Japanese hand:
- Site-wide override on Lucide via a wrapper `Icon` component: `strokeWidth={1}`, `strokeLinecap="square"`, `strokeLinejoin="miter"` — so every icon reads like a thin brush mark with kanji-like square terminals.
- Color: `currentColor` defaulting to `text-foreground/70`; cyan reserved for active/hover states only.
- Size: standard `16` and `20` only — no oversized hero icons.
- Replace certain Lucide icons with **custom inline SVGs** for cultural fit:
  - menu / hamburger → three thin horizontal strokes of unequal length (kanji 三 feel).
  - close → two thin diagonal strokes meeting precisely.
  - external link → a thin arrow `↗` glyph, no box.
  - language switch → small kanji `文 / A` toggle.
  - bullet markers → a thin diamond `◇` or square `▢` instead of round dots.
- Social-icon row in the footer redrawn as 1px monoline glyphs in muted grey, becoming cyan only on hover with a hairline underline.
- `lucide-react` is still used as the source library (no new dep); the wrapper applies the stroke + cap rules so every existing usage gets the Japanese treatment automatically.

### 8. New translation keys (he/en/ja)
Add an `eyebrow` block per page (e.g. `home.eyebrow = "Workshops｜研修"`, `about.eyebrow = "About｜会社案内"`, `courses.eyebrow = "Programs｜講座"`, `recommendations.eyebrow = "Voices｜お客様の声"`, `lectures.eyebrow = "Lectures｜講演"`, `contact.eyebrow = "Contact｜お問い合わせ"`). Across all 3 languages the kanji is preserved; only the Latin half is translated.

### 9. Ornament — the ensō
Inline SVG, single thin cyan stroke, broken at top-left. Used once per page as a quiet brand mark.

A short style note will also be saved to `mem://style/visual-identity` so future imagery and icon work stays on-brand.

## What stays the same
- All routes, navigation structure, i18n setup, RTL/LTR behavior.
- Existing copy and translations (only adds eyebrow keys).
- Sharon Aizen page.
- Logo asset.
- `lucide-react` dependency (only its default style is overridden).

## Out of scope
- New photographic assets beyond the few generated motifs above.
- New pages or features.
- Backend / Cloud changes.
