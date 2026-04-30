## Goal

Update the Sharon Aizen page with the latest copy (T.E.D.C methodology, refreshed intro, sharper "Execution Gap" framing) across all 3 languages, and replace her portrait with the newly uploaded photo.

## 1. Replace the portrait image

- Copy `user-uploads://pic-left-300dpi.png` → `src/assets/sharon-aizen.png` (overwrite the existing file). The component already imports `sharonImg` from this path, so no code change is required for the swap.
- The existing right-side photo container already feathers the photo into the navy background and positions it `object-cover` with `objectPosition: right center` (LTR) / `left center` (RTL) — the new portrait (subject framed slightly right of center, looking toward viewer-left) will work with both directions without code changes.

## 2. Update copy in all 3 i18n files

Files: `src/i18n/locales/en.json`, `src/i18n/locales/he.json`, `src/i18n/locales/ja.json` — same `sharon.*` keys in each.

### Keys kept as-is
`name`, `tagline`, `keynoteLabel`, `keynoteTitle`, `headline1`, `headline2`, `sectionTitle`, `quote`, `quoteAuthor`, `seenOn*`, `bookTitle`, `bookName`, `bookSubtitle`, `contactTitle`, `email`, `website`, `linkedin`, `audienceTitle`, `takeawayTitle`, `audience` array (4 items unchanged), `takeaways` array (4 items unchanged), `badges`, `problemTitle`, `problemIntro`, `problems` array (3 items — already match the new copy).

### Keys updated

- `intro1` → reflect the explicit "Infrastructure ➔ Ecosystem ➔ Application" progression and the "missing layer" framing.
- `intro2` → keep author/radio/TV credentials but tighten to match the new wording ("works with leaders on that crucial missing layer, defining exactly how human capital and AI agents actually operate together…").
- `solutionTitle` → "The Solution: The T.E.D.C Methodology".
- `solutionText` → introduces T.E.D.C as a transformative paradigm tailored for integrating deep-tech and AI ecosystems into the human workforce.
- `frameworkTitle` → "The T.E.D.C Methodology" (replaces "The 4-Step 'Creating Results' Framework for Tech Leaders"). 
- `framework` array (4 items) → relabel to T / E / D / C with the new descriptions:
  1. **Thinking** (sub: "Mindset / מחשבה" — keep Hebrew/Japanese sub script per-locale) — analyzing the organizational infrastructure and defining the ultimate sustainable outcome before deploying new technologies.
  2. **Emotion** (sub: "People / רגש") — psychological safety and emotional intelligence to motivate teams to embrace new tools.
  3. **Doing** (sub: "Action / פעולה") — application phase, defining daily workflows where humans and AI operate seamlessly together.
  4. **Communication** (sub: "Scale / תקשורת") — transparent communication ensures the integrated AI infrastructure scales and delivers measurable results.

The single-letter T/E/D/C will appear as the step number in the existing colored circles. To preserve the numbered-circle visual, we keep the numeric `{i + 1}` in the circle and surface T/E/D/C as part of the `label` (e.g., label "T — Thinking"). No component code change needed.

### Localization

- **Hebrew (`he.json`)**: full RTL Hebrew translation of the same content; T.E.D.C labels rendered as "T — חשיבה", "E — רגש", "D — עשייה", "C — תקשורת".
- **Japanese (`ja.json`)**: equivalent translation; labels "T — 思考", "E — 感情", "D — 実行", "C — 伝達".

## 3. No component / styling changes

`src/pages/Sharon.tsx` already renders every key listed above. The mobile cube fix, the book image, the photo mask, the framework grid, takeaways, audience, contact strip — all stay intact.

## Out of scope

- No changes to layout, colors, fonts, or the book cover image.
- No changes to any other page or to the navigation.
- No new keys/components added.

## Technical notes

- Hebrew/Japanese files mirror the English `sharon.*` shape exactly — same key names and array lengths — to keep `t(...returnObjects)` calls consistent.
- After the image overwrite, Vite will pick up the new asset on next build automatically (filename unchanged).
