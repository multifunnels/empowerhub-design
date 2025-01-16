import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/4c1deaf2-aeb2-4d36-b3cd-ead85754e3a9.png" 
                  alt="TSI Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    console.error('Error loading logo:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost">קורסים</Button>
              <Button variant="ghost">אודות</Button>
              <Button variant="ghost">המלצות</Button>
              <Button variant="ghost">משאבים</Button>
              <Button variant="ghost">צור קשר</Button>
            </div>
            <Button onClick={() => window.location.href = 'https://academy.tsionline.org/'}>הרשמה</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">TSI - Think Success Inspire</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed text-right">
              צוות הדרכה מוביל בתחומו בהעברת סדנאות בהובלתה של שרון אייזן עם ניסיון צוותי של עשרות שנים כתחום עיסוק עיקרי המסור להון האנושי והצלחתו עם מקצועיות ברמות הגבוהות ביותר, הקשבה לצרכים והאתגרים מקסום הפוטנציאל האנושי כשליחות.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-right">חזון</h2>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex justify-center gap-8 text-primary text-2xl font-bold">
                  <span>חשיבה</span>
                  <span>הצלחה</span>
                  <span>השראה</span>
                </div>
                <Separator className="w-1/2 bg-[#9b87f5] h-0.5" />
              </div>
              <p className="text-gray-700 leading-relaxed text-right max-w-2xl">
                להוביל את ההון האנושי למצוינות ע"י אסטרטגיות חשיבה ויישום מתקדם בשדרוג ארגז הכלים הניהולי והפיקודי המובילים להצלחה ויוצרים השראה בסביבת העבודה ומחוצה לה.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-right">בידול</h2>
            <div>
              <p className="text-gray-700 leading-relaxed text-right">
                שמנו לנו למטרה להוביל בשירות, חדשנות ואיכות ללא פשרות בדרך העברת מסרים המשלבת אינטראקציה ויצירת עניין תוך קשירת הנושאים בהתאמה אישית לקהל היעד וצרכי הארגון. לפני כל סדנה מתקיימת שיחת הכנה על מנת לתת מענה באופן מיטבי יותר מיקוד במנהיגות, מצוינות והובלה.
              </p>
              <p className="text-gray-700 leading-relaxed text-right mt-4">
                הצוות שלנו מיומן ובעל ניסיון מצטבר של עשרות שנים כתחום פעילות עיקרי ונבחר בקפידה על סמך משובים והמלצות מהשטח.
              </p>
              <p className="text-gray-700 leading-relaxed text-right mt-4">
                אנו רואים בסדנאות שליחות המועדה לשרת את הארגון וההון האנושי למתן מענה בפעילות היום יומית ברמות הגבוהות ביותר.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-right">בין לקוחותינו</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <img
                  src="/lovable-uploads/5588557e-2e37-46df-894d-88e5da633294.png"
                  alt="לוגואים של לקוחות"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3 text-gray-700 leading-relaxed text-right">
                <p className="text-lg">
                  משרד ראש הממשלה, לשכת העיתונות הממשלתית, משרד הביטחון, הכנסת, משרד הרווחה, משרד האוצר, משרד הפנים, תעשיה אווירית, אלתה, משטרת ישראל, כבאות והצלה, אוניברסיטת תל אביב, אוניברסיטת בר אילן, אוניברסיטת אריאל, עיריית ת"א, עיריית ירושלים, עיריית חיפה, עיריית ראשון, משרד החינוך, מכללת אתגר, אנגלו סכסון, מכללת עתיד, מכללת אחוה, סמיקום, בית אקרשטיין, סינמה סיטי גלילות, סינמה סיטי ירושלים, מרכז אשכול, משרד האוצר, מרכז ישראלי לכלבי נחיה, קבוצת שקד, THI, UNET בית האקדמאים, אגודת ההנדסאים, בנק לאומי, בנק יהב, בנק מזרחי, מרכזי פסגה למורים, עמותת המורים, הולמס פלייס, קופ"ח לאומית, קופ"ח כללית, קופ"ח לאומית, הפניקס, מכון הלב – הדסה עין כרם, בית לוינשטיין, חברת יישום, האוניברסיטה העברית, משטרת ישראל, ההסתדרות קרן ידע, מכללת הישגים, משרד הבריאות, מייקרוסופט, מכללת כספים, בנק פאגי, HP ועוד...
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">המומחיות שלנו</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">פיתוח מנהיגות</h3>
                <p className="text-gray-600">תוכניות מותאמות אישית לפיתוח מנהיגים</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">אימון צוותים</h3>
                <p className="text-gray-600">בניית צוותים חזקים ואפקטיביים</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">תקשורת ארגונית</h3>
                <p className="text-gray-600">שיפור התקשורת והיעילות בארגון</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
