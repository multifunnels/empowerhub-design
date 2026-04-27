# Add depth & atmospheric imagery — staying Japanese

## Problem
The current redesign reads too pale: a flat washi paper from edge to edge with only a tiny ensō and a faint mountain wash. There is no real **rhythm of dark/light**, no photographic anchor, no sense of place. Japanese minimalism is not "empty" — it is **calibrated contrast** between Ma (silence) and dense textured moments (a ceramic, a stone garden, a temple roof, a sumi brush).

## Direction
Keep the washi palette, hairline borders, thin Noto Serif JP type and TSI cyan as accent. Add four new layers:
1. **Generated photographic backgrounds** (Nano banana), used as wide cinematic strips behind sections — desaturated, sepia-warm, never decorative on every section.
2. **A dark "sumi" panel** — at least one near-black section per page so the eye can rest and the cyan can sing.
3. **Painted SVG ornaments** — kanji watermarks, ensō evolutions, sumi brushstrokes with real ink-bleed texture.
4. **A subtle washi paper texture image** behind the whole site (replacing the current dot-noise) so every surface feels like real paper.

Sharon Aizen page stays untouched.

## What we will generate

Using the Lovable AI Gateway image model. All assets saved to `src/assets/jp/` and imported as ES modules so Vite hashes them.

| File | Subject | Treatment |
|---|---|---|
| `washi-paper.jpg` | Real handmade washi paper close-up | Warm-grey, fibers visible, neutral, tile-able. Used at 30% opacity as full-site background. |
| `hero-mountains.jpg` | Distant Japanese mountain ridges fading into mist (sumi-e mood) | Desaturated 80%, warm-grey, soft top-to-bottom fade to washi. Backs the Hero section. |
| `kyoto-alley.jpg` | A quiet narrow Kyoto street at dusk, lanterns, tall verticals | Sepia, low contrast, used as wide strip behind the Programs section. |
| `tatami-engawa.jpg` | Empty engawa veranda with shoji light falling on tatami | Very desaturated, used behind the About / Vision section. |
| `zen-garden.jpg` | Karesansui raked-stone garden top-down | Mono, used behind Voices / testimonials. |
| `ink-stroke-large.png` | A single horizontal sumi brushstroke with real ink bleed and dry-brush edge | Transparent PNG; placed behind major headlines. |
| `kanji-watermark.png` | Single hand-painted kanji 想 (thought) or 成 (achieve) — calligraphy style | Transparent PNG; floats huge behind footers / About hero at ~6% opacity. |

All photographic images are generated at 1600×900 (or 1600×600 for strips) and overlaid with:
- A washi-color veil (`background-color: hsl(48 22% 97% / 0.55)` on top) so they sit in the palette.
- A bottom-to-top fade into the page background so they never have a hard edge.

## Composition changes

### `src/components/Hero.tsx`
- Replace the empty stage with a **full-bleed mountain photograph** (desaturated, warm-tinted) covering the full hero, faded heavily into washi at top and bottom.
- Headline gains a giant translucent kanji `創` (create) painted behind it, vertical-rl, near the side.
- Eyebrow + hairline + headline stay; CTAs gain a small white-on-glass treatment so they read on the photo.
- Bottom hairline kept.

### `src/pages/Index.tsx`
- Programs section gets a thin Kyoto-alley strip across the top (60–80px tall) as a transition, then reverts to washi for the tile grid below.
- Insert a **new dark sumi panel** between FeatureSection and Voices: full-width, near-black `bg-foreground`, washi-paper texture at low opacity, a single short pull-quote from the founder in cyan + serif italic, big kanji watermark, lots of breathing room. Acts as the rest-point of the page.
- Voices section gets a faint zen-garden image at the very top fading out before the testimonial tiles.

### `src/pages/About.tsx`
- About hero gains the tatami-engawa photograph as background, washi veil on top.
- A vertical kanji `會社案内` runs down the right (or left in RTL) margin of the Vision section as a watermark.
- The dark sumi panel pattern is reused to set off the "Mission" / Confucius quote — making it feel like a tea-room interior.

### `src/pages/Recommendations.tsx`
- Hero strip gets the zen-garden photograph.
- Trusted-by section gets the dark sumi panel treatment so the client logos read like kamon (family crest) marks on a black banner.

### `src/pages/Lectures.tsx` and `src/pages/Courses.tsx`
- Each page hero gets a different photographic strip (Kyoto alley for Courses, calligraphy desk for Lectures) and a kanji watermark.
- Tile grids stay washi.

### `src/pages/Contact.tsx`
- Add a tatami-engawa strip behind the title.
- The form and info column stay washi for legibility.

### `src/components/SiteFooter.tsx`
- Convert the footer to the **dark sumi panel** as the page's final closure: near-black background, hairline cyan top rule, kanji watermark already there enlarged, columns become pale text on dark. This single strong dark zone gives the whole site weight.

### `src/index.css`
- Replace the dot-noise body texture with the generated `washi-paper.jpg` at low opacity, fixed background-attachment so it stays under all sections.
- Add `.sumi-panel` utility (near-black bg, washi texture overlay, cyan accent).
- Add `.photo-strip` utility for thin photographic dividers.
- Add `.kanji-watermark` helper for huge translucent kanji glyphs (CSS, no image needed).

## Technical details
- Image generation goes through the AI gateway model `google/gemini-2.5-flash-image` (Nano banana). Each image is generated, saved to `src/assets/jp/{name}.jpg` (or `.png` for transparent ornaments), then imported into the component that uses it. Generated on the dev server, not at runtime.
- Backgrounds use `bg-cover bg-center` with a dark overlay (`hsl(0 0% 10% / 0.55)`) for sumi panels or a washi overlay (`hsl(48 22% 97% / 0.55)`) for light panels — so text always reads.
- Sharon Aizen page is excluded from every change.
- `prefers-reduced-motion` still respected (no parallax, no zoom).

## What stays the same
- Color tokens, typography system, hairline tiles, kanji eyebrows, JIcon wrapper.
- All routes, navigation, i18n, RTL/LTR.
- The Sharon Aizen poster.

## Out of scope
- Carousels, parallax scroll, lottie/video.
- Replacing the logo or icon set.
- New pages or copy.
