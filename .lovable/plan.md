
# תיקוני UI/UX — סבב מקצועי

תיקון 10 הליקויים הקריטיים והגבוהים מהביקורת. עמוד שרון אייזן לא משתנה.

## 1. קריאות וטיפוגרפיה (קריטי)

### 1.1 ניגודיות טקסט גוף
ב־`src/index.css`:
- `--muted-foreground` מ־`0 0% 42%` ל־`0 0% 30%` (עובר 4.5:1 על washi).
- במקומות שבהם נעשה שימוש ב־`text-foreground/85` ו־`/75` בפסקאות גוף (Hero subtitle, About, Vision) — להעלות ל־`/90`.

### 1.2 טיפוגרפיה עברית
Noto Serif JP לא תומך עברית — כותרות display בעברית נופלות ל־Inter במשקל 200 ונראות שבורות.
- ב־`index.html`: להוסיף `Frank Ruhl Libre` (display עברי קלאסי, מתאים לאסתטיקה היפנית הדקה) ו־`Heebo` (sans body).
- ב־`tailwind.config.ts` + `src/index.css`: stack פונטים מותנה. `[lang="he"] h1,h2,h3,h4 { font-family: "Frank Ruhl Libre", "Noto Serif JP", serif; font-weight: 400; }` ול־body `[lang="he"] body { font-family: "Heebo", "Inter", sans-serif; }`.
- `i18n/index.ts` כבר מגדיר `dir`; לוודא ש־`document.documentElement.lang` מתעדכן (אם לא — להוסיף).

### 1.3 letter-spacing ו־uppercase על עברית
- ב־`src/index.css`: `[dir="rtl"] .eyebrow { letter-spacing: 0.08em; text-transform: none; }` ועל כל הכפתורים והניווט: `[dir="rtl"] .uppercase, [dir="rtl"] [class*="tracking-["] { text-transform: none; letter-spacing: 0.04em; }` באופן ממוקד דרך utility class חדש `.label-track` שיחליף את `tracking-[0.28em] uppercase` בכל המקומות הרלוונטיים.

## 2. אינטראקציות שבורות (קריטי)

### 2.1 CourseCard לא קליקבילי
`src/components/CourseCard.tsx` — לעטוף ב־`<Link to="/courses">` (או prop `href`). הכפתור הפנימי הופך ל־span. ה־card כולו cursor-pointer.

### 2.2 Newsletter form ללא handler
`src/components/SiteFooter.tsx` — להוסיף `useState` + `onSubmit` עם validation בסיסי + הודעת toast (`sonner`) "תודה, נשלח". בלי backend אמיתי בשלב זה — רק UX feedback אמין.

## 3. היררכיה ויזואלית

### 3.1 Hero חלש מהפוטר — להעצים Hero, להרגיע פוטר
- `Hero.tsx`: להוסיף שורת tagline קצרה מעל הכותרת (key חדש `hero.tagline` ב־i18n: בעברית "סדנאות, קורסים והרצאות לארגונים מובילים") במשקל בולט.
- `SiteFooter.tsx`: להקטין `kanji-mark-bg` מ־640px ל־420px, להסיר את ה־ensō השני (כפילות עם Hero/About). הפוטר נשאר sumi אבל שקט יותר.

### 3.2 ensō חוזר 3×
להשאיר ensō רק ב־Hero. להסיר מ־`About.tsx` ומ־`SiteFooter.tsx`. במקומם — hairline-short פשוט.

### 3.3 יותר מדי rest-points
ב־`src/pages/Index.tsx`: להפוך את ה־`sumi-panel` של Philosophy ל־light section עם הציטוט על washi (hairline בורדר עליון/תחתון בלבד). הפוטר הוא ה־sumi היחיד בעמוד.

### 3.4 Photo strips ריקים
ב־`Index.tsx`: להעיף את ה־`photo-strip` של Kyoto-alley לפני Programs (אין הצדקה תוכנית). להשאיר רק את zen-garden לפני Voices, ולהוריד ל־`height: 120px` עם opacity-veil חזק יותר כך שזה רגיש כברק חולף, לא דקור.

## 4. מערכת עיצוב — עקביות

### 4.1 Hover states מבודלים
ב־`src/index.css` — להגדיר 3 רמות:
- `.hover-cta` (primary CTA): hover → `bg-foreground` (כבר קיים).
- `.hover-link`: רק underline ב־primary.
- `.hover-tile`: border-color → primary/55 + עליית translate-y-[-2px] עדינה.
ולהחיל בקומפוננטות בהתאם.

### 4.2 Padding כרטיסיות אחיד
`CourseCard` ו־`Testimonial` שניהם `p-10` (במובייל `p-8`). אותו ריתמוס: eyebrow → תוכן → footer-meta.

## 5. ביצועים

### 5.1 Lazy-load לתמונות
- כל ה־`backgroundImage` של תמונות מתחת לקפל (kyoto-alley, zen-garden, kanji-mark, tatami-engawa) → להעביר ל־`<img loading="lazy" decoding="async">` ב־absolute layer במקום `style.backgroundImage`. רק `hero-mountains` נטען מיד.
- ב־`src/index.css`: `body { background-attachment: scroll; } @media (min-width: 1024px) { body { background-attachment: fixed; } }` — מתקן jank ב־iOS.

## 6. תוכן ו־i18n

### 6.1 Eyebrows בלטינית בעמוד עברי
ה־eyebrow כרגע hardcoded ("Workshops", "Programs", "Why Us"...). להעביר ל־i18n keys: `eyebrows.workshops`, `eyebrows.programs` וכו'. בעברית: "סדנאות 研修", "תוכניות 講座" וכו'. הקנג'י נשאר עקבי.

### 6.2 צמצום קנג'י
לבחור 3 קנג'י קבועים לאתר (想 · 成 · 啓 שכבר במנייפסטו). ה־watermarks הגדולים (Hero, Footer, Philosophy) — כולם משתמשים באותו קנג'י (`想`). ה־eyebrows יכולים להישאר עם קנג'י מגוונים כי הם מיקרו, אבל ה־watermark הגדול אחיד.

## קבצים שיתעדכנו

- `index.html` — הוספת Frank Ruhl Libre + Heebo.
- `tailwind.config.ts` — fontFamily חדשים.
- `src/index.css` — ניגודיות, letter-spacing RTL, font-stacks per lang, hover utilities, body bg-attachment.
- `src/i18n/index.ts` — לוודא `document.documentElement.lang` מתעדכן.
- `src/i18n/locales/{he,en,ja}.json` — `hero.tagline`, `eyebrows.*`.
- `src/components/Hero.tsx` — tagline, ensō יחיד.
- `src/components/SiteNav.tsx` — `.label-track` במקום `uppercase tracking-[0.28em]`.
- `src/components/SiteFooter.tsx` — newsletter handler + toast, watermark מוקטן, ensō הוסר, eyebrow מ־i18n.
- `src/components/CourseCard.tsx` — עטוף ב־Link, padding אחיד.
- `src/components/Testimonial.tsx` — padding אחיד.
- `src/components/FeatureSection.tsx` — eyebrow מ־i18n.
- `src/pages/Index.tsx` — הסרת sumi-panel philosophy, צמצום photo-strips, eyebrows מ־i18n.
- `src/pages/About.tsx` — ensō הוסר, eyebrows מ־i18n, contrast fixes.
- `src/pages/{Courses,Lectures,Recommendations,Contact}.tsx` — eyebrows מ־i18n + contrast fixes.

## מחוץ ל־scope (לסבב הבא)
- Breadcrumbs, 404 page מותאם, skeleton states, focus-ring משודרג ל־2px, תמיכת ניווט במובייל ל־lg בעברית, המרת PNG ל־WebP. נטפל אחרי שהקריטי יושלם.
