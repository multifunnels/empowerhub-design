## Goal

Make the entire site available in three languages — Hebrew (current), English, and Japanese — and automatically pick the right language based on the visitor's country, while keeping a manual switcher so anyone can override the choice.

## What the user will experience

- A visitor from **Israel** → site loads in Hebrew (RTL), exactly as today.
- A visitor from **Japan** → site loads in Japanese.
- A visitor from **any other country** (US, UK, Germany, etc.) → site loads in English.
- A small **language switcher** (🌐 HE / EN / 日本語) appears in the top navigation on every page. Picking a language overrides the auto-detection and is remembered for next visits (stored in localStorage).
- Direction (RTL/LTR) flips automatically: Hebrew = RTL, English & Japanese = LTR.
- All visible text translates: navigation, hero, course cards, "Why choose us", testimonials, footer, contact form labels/messages, About page (vision/differentiation/clients), Recommendations page, Lectures page, Courses page, toasts, and button labels.

## How it works (technical)

**1. i18n library**
- Add `react-i18next` + `i18next` + `i18next-browser-languagedetector`.
- Create `src/i18n/index.ts` to initialize i18next with three resource bundles.
- Create translation JSON files:
  - `src/i18n/locales/he.json`
  - `src/i18n/locales/en.json`
  - `src/i18n/locales/ja.json`
- All strings currently hardcoded in components get keys (e.g. `nav.home`, `hero.title`, `hero.subtitle`, `courses.items.results.title`, `features.flexibleSchedule.description`, `contact.form.name`, etc.). Arrays (course list, feature list, testimonials, lecture list, client categories) live in the JSON as arrays so the component just maps over `t('courses.items', { returnObjects: true })`.

**2. Geo detection**
- On first visit (no stored preference), call a free IP geolocation endpoint such as `https://ipapi.co/json/` (no key required, HTTPS, returns `country_code`).
- Mapping rule:
  - `IL` → `he`
  - `JP` → `ja`
  - everything else (and on fetch failure) → `en`
- Save the detected language in `localStorage` under `tsi-lang` so subsequent visits skip the lookup.
- If the user manually picks a language from the switcher, that choice is written to `localStorage` and always wins over geo detection.

**3. Direction & font handling**
- A `LanguageProvider` wrapper (or a `useEffect` in `App.tsx`) sets `document.documentElement.lang` and `document.documentElement.dir` (`rtl` for `he`, `ltr` for `en`/`ja`) whenever language changes.
- Existing components that hardcode `dir="rtl"` get switched to read direction from i18n (`i18n.dir()`) so the layout flips correctly.
- For Japanese, add the Noto Sans JP Google Font in `index.html` and apply it conditionally so Japanese text renders nicely.

**4. Language switcher component**
- New `src/components/LanguageSwitcher.tsx`: a small dropdown (using existing shadcn `DropdownMenu`) showing 🌐 + current language; options HE / EN / 日本語.
- Placed in the desktop nav bar and inside the mobile `Sheet` menu on every page (`Index`, `About`, `Courses`, `Contact`, `Lectures`, `Recommendations`).

**5. Files that change**
- `package.json` – add 3 deps.
- `src/main.tsx` – import `./i18n`.
- `src/i18n/index.ts` (new) + 3 locale JSON files (new).
- `src/components/LanguageSwitcher.tsx` (new).
- `src/components/Hero.tsx`, `FeatureSection.tsx`, `CourseCard.tsx`, `Testimonial.tsx` – replace hardcoded strings with `t(...)`.
- `src/pages/Index.tsx`, `About.tsx`, `Courses.tsx`, `Contact.tsx`, `Lectures.tsx`, `Recommendations.tsx` – translate strings, drop the hardcoded `dir="rtl"`, add the `LanguageSwitcher` to navs.
- `index.html` – add Japanese font + remove the static `lang="he"`/`dir="rtl"` (now set dynamically).

## Translation scope & quality

- Hebrew bundle = exact current copy (no rewording).
- English & Japanese bundles = professional, natural translations of every visible string, including the long About-page paragraphs, the vision section, client category names, the 6 course titles/descriptions, the 4 "why choose us" cards, the 6 lecture entries, contact form, footer, and toast messages.
- Names of real organizations on the About page (ministries, banks, hospitals, universities) get standard English/Japanese renderings; brand names like TSI, Microsoft, HP stay as-is.

## Out of scope

- No translation of the logo image itself.
- No SEO/hreflang `<link>` tags or per-language URLs (e.g. `/en/about`) — language is selected client-side. (Can be added later if you want each language indexed separately by Google.)
- No translation admin UI — translations live in JSON files in the codebase.

## Open question

The auto-detection uses `ipapi.co` (free tier ~1,000 requests/day per IP, no API key). If you expect heavy traffic and want a more robust provider, say the word and I'll swap it for a paid one or move detection server-side.