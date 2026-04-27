
# סבב פוליש — Breadcrumbs, 404, Lazy מלא, WebP

ארבעה תיקונים קצרים שמסיימים את שכבת ה-UX-quality. עמוד שרון אייזן לא משתנה.

## 1. WebP לכל התמונות

הנכסים ב-`src/assets/jp/` מסתכמים ב-~2.2MB. המרה ל-WebP חוסכת ~70%.

- ממירים בעזרת `nix run nixpkgs#libwebp -- cwebp` (JPG ב-q=82, PNG בעלי שקיפות עם cwebp שומר alpha).
- יוצרים גרסאות חדשות באותה תיקייה: `hero-mountains.webp`, `kyoto-alley.webp`, `tatami-engawa.webp`, `zen-garden.webp`, `washi-paper.webp`, `ink-stroke.webp`, `kanji-mark.webp`.
- מעדכנים את ה-imports בכל הקבצים שמשתמשים בהם (`Hero.tsx`, `Index.tsx`, `About.tsx`, `SiteFooter.tsx`, `main.tsx`, ו-`Recommendations.tsx`/`Courses.tsx`/`Lectures.tsx`/`Contact.tsx` אם משתמשים).
- מוחקים את ה-JPG/PNG הישנים אחרי אימות שה-build עובר.

## 2. Lazy-load מלא לתמונות מתחת לקפל

כרגע תמונות המוצגות כ-`backgroundImage` ב-`<div>` נטענות מיד (CSS לא מבצע lazy). אעביר את התמונות שמתחת לקפל ל-`<img loading="lazy" decoding="async">` בשכבת absolute, עם `object-cover` ו-veil על גביהן.

מקרים:
- `Index.tsx` — `photo-strip` של zen-garden (mid-page).
- `Recommendations.tsx`, `Courses.tsx`, `Lectures.tsx`, `Contact.tsx` — אם יש שם backgrounds מתחת לקפל.

החריגים שנשארים eager: `Hero.tsx` (above the fold), `About.tsx` hero (above the fold כשמגיעים לעמוד).

## 3. עמוד 404 מותאם

יוצר `src/pages/NotFound.tsx` עם זהות יפנית עקבית:
- Header: `SiteNav`.
- Center hero: kanji ענק `迷` (מבולבל/אבוד) ב-watermark, ensō, hairline-short.
- Headline: i18n key `notFound.title` ("העמוד לא נמצא" / "Page not found" / "ページが見つかりません").
- Subtitle + 2 CTAs: "חזרה לעמוד הבית" / "צור קשר".
- `SiteFooter`.
- ב-`App.tsx` — מוסיף `<Route path="*" element={<NotFound />} />`.
- ב-`i18n/locales/*` — חבילה חדשה `notFound: { title, subtitle, backHome, contact }`.

## 4. Breadcrumbs

קומפוננט חדש `src/components/Breadcrumbs.tsx` שמופק אוטומטית מ-`useLocation().pathname`:
- מבנה: `Home › Courses` (בעברית: "עמוד הבית ‹ קורסים").
- סטייל: hairline tile עליונה תחת ה-nav, eyebrow-style typography (`text-[11px]`, tracking התאם לשפה), `text-muted-foreground` עם הפריט האחרון `text-foreground`.
- מפריד: `›` ב-LTR, `‹` ב-RTL (עם `dir`-aware logic).
- Mapping: לוקח את ה-segment ומתרגם דרך i18n (`nav.courses`, `nav.about` וכו'). אם אין mapping — נופל לטקסט raw.
- Schema.org: `aria-label="Breadcrumb"`, `<ol>` סמנטי, ו-`itemtype="BreadcrumbList"` ל-SEO.
- מוסיפים את הקומפוננטה ב-`Index.tsx` לא (כי זה ה-home), ובכל שאר העמודים: `About`, `Courses`, `Lectures`, `Recommendations`, `Contact` בין `<SiteNav />` ל-hero של העמוד.

## קבצים שיתעדכנו

- `src/assets/jp/*.webp` — 7 קבצים חדשים (תוצרי המרה).
- `src/components/Hero.tsx`, `SiteFooter.tsx`, `main.tsx` — imports.
- `src/pages/Index.tsx`, `About.tsx`, `Courses.tsx`, `Lectures.tsx`, `Recommendations.tsx`, `Contact.tsx` — imports + breadcrumbs + lazy `<img>` עבור backgrounds מתחת לקפל.
- `src/components/Breadcrumbs.tsx` — קומפוננטה חדשה.
- `src/pages/NotFound.tsx` — עמוד חדש.
- `src/App.tsx` — route catch-all.
- `src/i18n/locales/{he,en,ja}.json` — `notFound.*`, `breadcrumbs.home`.

## מחוץ ל-scope

- Skeleton states, code-splitting (chunk size warning), קומפוננטה מובחנת לתמונה רספונסיבית עם srcSet.
