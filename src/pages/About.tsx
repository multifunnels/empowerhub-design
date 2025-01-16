import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            <div className="flex items-center gap-4">
              <Button onClick={() => window.location.href = 'https://academy.tsionline.org/'}>הרשמה</Button>
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Button variant="ghost" className="justify-end">קורסים</Button>
                    <Button variant="ghost" className="justify-end">אודות</Button>
                    <Button variant="ghost" className="justify-end">המלצות</Button>
                    <Button variant="ghost" className="justify-end">משאבים</Button>
                    <Button variant="ghost" className="justify-end">צור קשר</Button>
                    <Button className="mt-4" onClick={() => window.location.href = 'https://academy.tsionline.org/'}>
                      הרשמה
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
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
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">משרדי ממשלה ורשויות</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>משרד ראש הממשלה</li>
                    <li>לשכת העיתונות הממשלתית</li>
                    <li>משרד הביטחון</li>
                    <li>הכנסת</li>
                    <li>משרד הרווחה</li>
                    <li>משרד האוצר</li>
                    <li>משרד הפנים</li>
                    <li>משטרת ישראל</li>
                    <li>כבאות והצלה</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">מוסדות אקדמיים</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>אוניברסיטת תל אביב</li>
                    <li>אוניברסיטת בר אילן</li>
                    <li>אוניברסיטת אריאל</li>
                    <li>האוניברסיטה העברית</li>
                    <li>מכללת אתגר</li>
                    <li>מכללת עתיד</li>
                    <li>מכללת אחוה</li>
                    <li>מכללת הישגים</li>
                    <li>מכללת כספים</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">חברות וארגונים</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>תעשיה אווירית</li>
                    <li>אלתה</li>
                    <li>סמיקום</li>
                    <li>בית אקרשטיין</li>
                    <li>סינמה סיטי</li>
                    <li>קבוצת שקד</li>
                    <li>THI</li>
                    <li>UNET</li>
                    <li>מייקרוסופט</li>
                    <li>HP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">בנקים ושירותי בריאות</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>בנק לאומי</li>
                    <li>בנק יהב</li>
                    <li>בנק מזרחי</li>
                    <li>בנק פאגי</li>
                    <li>קופ"ח לאומית</li>
                    <li>קופ"ח כללית</li>
                    <li>הפניקס</li>
                    <li>מכון הלב – הדסה עין כרם</li>
                    <li>בית לוינשטיין</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <img
                  src="/lovable-uploads/5588557e-2e37-46df-894d-88e5da633294.png"
                  alt="לוגואים של לקוחות"
                  className="w-3/4 rounded-lg shadow-md"
                />
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