## מה משתנה

החלפת ה-mockup של הספר ב-`Sharon.tsx` (שורות 414–480) בתמונת הכריכה האמיתית שהעלית (`creating-results-book.png` — "יוצרים תוצאות / שרון אייזן" עם דיאגרמת 4 העיגולים).

## ביצוע

1. **נכס**: התמונה כבר הועתקה ל-`src/assets/creating-results-book.png`.
2. **`src/pages/Sharon.tsx`**:
   - הוספת import: `import bookCover from "@/assets/creating-results-book.png";`
   - החלפת בלוק ה-CSS mockup (שורות 414–480) ב-`<img src={bookCover} />` ברוחב 110px, עם אותו `rotateY(-12deg)` ו-`box-shadow` כדי לשמור על אפקט הטיה תלת-ממדי הקיים.
   - שמירה על `loading="lazy"` ו-`decoding="async"` בהתאם לתבנית האתר.
   - גובה אוטומטי לפי יחס התמונה — ללא חיתוך.

## מה לא משתנה

- שאר העמוד (headlines, framework, takeaways, audience, contact, "as seen on") — ללא שינוי.
- מפתחות ה-i18n של הספר (`bookTitle`, `bookName`, `bookSubtitle`) נשארים כפי שהם וממשיכים להופיע לצד התמונה.
- הקונטיינר עם הצל/הזווית — נשמר כדי שהספר ימשיך להיראות תלת-ממדי.

## מחוץ ל-scope

- שינוי טקסט הספר, המסגרת או שאר הפריסה.
