## Goal

Redesign `/sharon-aizen` to closely match the attached poster ("From Infrastructure To Results"), and swap in the new portrait. Keep the page as a locked poster (per project memory) — the Japan design system does not apply here.

## 1. Swap portrait

- Copy `user-uploads://pic-rithe-300dpi.png` → `src/assets/sharon-aizen.png` (overwrites). Import path stays the same.

## 2. Rebuild `src/pages/Sharon.tsx` as a poster

Single deep-navy hero/poster card containing:

- **Top bar**: TSI logo (left) with thin vertical divider, right side shows "SHARON AIZEN" in wide-tracked cyan caps and "Keynote Speaker | Author | Executive Workshops". Circular portrait (new `sharon-aizen.png`) clipped into a cyan-ringed disc on the top-right, overlaying a faint blue dotted-globe + flowing-lines background graphic.
- **Hero headline**: huge white "From Infrastructure" / "To " + cyan "Results" (display weight).
- **Lede paragraph**: "Aligning people, decisions, communication, and AI-driven workflows to turn advanced capability into **real execution and measurable results.**" (bold highlight in cyan).
- **Pull-quote tile** with double chevron »: "Technology creates capability. Human alignment turns it into results. **Execution does.**" — thin cyan border, transparent fill.
- **3-column block** with thin vertical hairlines between columns, each column has a small circular outline icon + cyan section title + body. Columns:
  1. **WHY NOW** — clock icon. 3 short paragraphs separated by hairlines.
  2. **WHAT SHARON BRINGS** — people icon. 3 check-bulleted items (cyan circle-check).
  3. **WHAT ORGANIZATIONS GAIN** — bar-chart icon. 4 check-bulleted items.
- **Offer row** (3 columns, icon + label + tagline): Keynotes / Executive Sessions / Leadership Workshops.
- **Contact strip** (bottom rounded bar): email `sharoni@tsinspire.com` and phone `+972 54 668 8430` with envelope/phone icons separated by a divider.

## 3. Background graphic

Use a pure-CSS / inline-SVG decoration on the right side: a radial dotted-globe (concentric arcs of small dots) plus a few cyan flowing curves. No external asset.

## 4. Localization

Update `sharon.*` keys in `en.json`, `he.json`, `ja.json` to the new copy. Replace old `framework` / `takeaways` / `audience` arrays with the new structures:

- `whyNow.items` (3 strings)
- `brings.items` (3 strings, first phrase bold-rendered via a fixed prefix)
- `gains.items` (4 strings)
- `offers` (3 × {label, tagline})
- `pullQuote` and `lede` strings, plus `headline1`/`headline2` ("From Infrastructure" / "To Results"), `subline` ("Keynote Speaker | Author | Executive Workshops").

Hebrew and Japanese mirror the structure with translated copy; RTL is already handled by the page wrapper.

## 5. Styling notes

- Palette: deep navy `#040a1f` → `#0a1535` gradient bg, cyan accent `#00B6E6` (project TSI cyan), white text, muted slate for body.
- Use existing TSI cyan token where possible; keep the page self-contained (no global token changes).
- Fully responsive: 3-column block collapses to 1 column on mobile; portrait shrinks; background graphic hides below `md`.
- Remove now-unused imports (book cover, old step icons, framework rendering).

## Out of scope

- No nav/footer changes, no other pages, no new routes, no design-system token edits.
