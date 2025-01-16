import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h2 className="text-2xl font-semibold mb-4 text-right">בידול</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
              <div className="grid grid-cols-1 gap-4">
                <img
                  src="/lovable-uploads/1c0823c4-1d90-40f7-8b7d-28cd1798d458.png"
                  alt="TSI הרצאות וסדנאות"
                  className="rounded-lg shadow-md w-full object-cover"
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