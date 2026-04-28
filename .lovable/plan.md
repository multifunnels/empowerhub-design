## מה משתנה

עדכון תוכן בלבד לעמוד `/sharon-aizen` — המבנה הוויזואלי, הפריסה, הצבעים, האייקונים והרכיבים נשארים **בדיוק כפי שהם**. רק מחרוזות התרגום ב-3 קבצי i18n מתעדכנות לטקסט החדש (Bridging the Gap Between Vision and Reality / Human-AI Synchronization / The Missing Layer).

## מיפוי תוכן חדש → מפתחות i18n קיימים

המבנה הקיים (4 שלבי framework, 4 takeaways, 4 audience, headlines, intro, quote, "as seen on", book) מתאים אחד-לאחד לתוכן החדש — אין צורך בהוספת/מחיקת מפתחות. רק החלפת ערכים:

| מפתח | תוכן חדש (תקציר אנגלית) |
|---|---|
| `tagline` | Global Innovation Strategist \| Author \| Keynote Speaker |
| `keynoteLabel` | Keynote Topic |
| `keynoteTitle` | Bridging the Gap Between Vision and Reality |
| `headline1` / `headline2` | "Bridging the Gap" / "Between Vision and Reality" |
| `sectionTitle` | Turning AI Infrastructure into Real Results through Human-AI Synchronization |
| `intro1` | פסקה על שלושת העמודים (infrastructure / ecosystem / application) ועל "ה-missing layer" — סנכרון בין אנשים למערכות |
| `intro2` | על "Creating Results", 106FM, טלוויזיה, ועל יישור קו בין אנשים, החלטות והתנהגויות לתרבות הארגון |
| `problemTitle` | The Core Problem: The "Execution Gap" |
| `problems[0]` | The Missing Layer — פריסת AI ללא אסטרטגיה לשיתוף פעולה אדם-AI |
| `problems[1]` | Loss of Focus — "shiny object syndrome" |
| `problems[2]` | Resource Drain — בזבוז מימון וזמן (במקום "שחיקת תרבות") |
| `solutionTitle` | The Solution: Result-Oriented Innovation |
| `solutionText` | פרדיגמת "Result-Oriented Thinking" — מ-doing things ל-achieving outcomes |
| `frameworkTitle` | The 4-Step "Creating Results" Framework for Tech Leaders |
| `framework[0]` | Visionary Clarity (Thought / מחשבה) — defining sustainable outcome before deploying applications |
| `framework[1]` | Driven Culture (Emotion / רגש) — psychological safety, alignment with culture during ecosystem adoption |
| `framework[2]` | Precision Execution (Action / פעולה) — **חדש: סנכרון מעשי בין הון אנושי לסוכני AI**, workflows משותפים |
| `framework[3]` | Sustainable Impact (Results / תוצאות) — תשתית AI שלא רק מושקת אלא מתממשת ומיתרגמת לתוצאות מדידות |
| `takeawayTitle` | What the Audience Will Take Away |
| `takeaways[0]` | Practical Blueprint — מתודולוגיה לגישור בין השקעות בתשתית לאימוץ אנושי |
| `takeaways[1]` | Enhanced Decision-Making — יישור AI עם תרבות והתנהגות ארגונית |
| `takeaways[2]` | Leadership Resilience — תרבות מבוססת ביצוע שמסתגלת לשינויים טכנולוגיים |
| `takeaways[3]` | Investor Confidence — מסלול ROI דרך human-AI synchronization |
| `audienceTitle` | Target Audience |
| `audience[0]` | Corporate Innovation & R&D Leads (התווסף — קהל ראשי חדש) |
| `audience[1]` | Startup Founders & Entrepreneurs |
| `audience[2]` | Venture Capitalists & Investors |
| `audience[3]` | Tech Ecosystem Builders — Policymakers & hub directors |
| `seenOnTitle` / `seenOnRadio` / `seenOnTv` / `seenOnPress` | ללא שינוי |
| `bookTitle` / `bookName` / `bookSubtitle` | ללא שינוי (Creating Results) |
| `quote` | "Innovation without execution is merely a hallucination. Let's build the bridge to reality." |
| `quoteAuthor` | — Sharon Aizen |
| `contactTitle` / email / website / linkedin | ללא שינוי |

## מה לא משתנה

- `Sharon.tsx` — שום שינוי בקוד, JSX, סטיילים, אייקונים, רשת, או פריסה.
- מפתחות הניווט/footer של שרון בקבצי i18n — לא נוגעים.
- כל שאר הקבצים בפרויקט.

## ביצוע בפועל

עדכון 3 קבצים בלבד, כל אחד מקבל את אותה סדרת הערכים (HE = עברית, EN = אנגלית, JA = יפנית), כל הלוקאלים נשארים מסונכרנים מבחינת מבנה:

- `src/i18n/locales/he.json` — עדכון בלוק `sharon` (שורות ~193 והלאה).
- `src/i18n/locales/en.json` — עדכון בלוק `sharon` המקביל.
- `src/i18n/locales/ja.json` — עדכון בלוק `sharon` המקביל (תרגום נאמן ליפנית של אותו תוכן).

לאחר העדכון: בדיקת build כדי לוודא שאין שבירת JSON.

## מחוץ ל-scope

- שינויי עיצוב/פריסה/צבעים בעמוד.
- הוספה/הסרה של רכיבים ויזואליים (ספר, "as seen on", connector arrows וכו').
- שינוי תמונת שרון או ה-meta של העמוד.
