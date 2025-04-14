import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare, Menu, Building, Building2, Briefcase, Banknote, GraduationCap, Hospital, Bot, Landmark, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const clientCategories = [{
    id: "government",
    name: "משרדי ממשלה ורשויות",
    icon: <Building className="h-5 w-5" />
  }, {
    id: "academic",
    name: "מוסדות אקדמיים",
    icon: <GraduationCap className="h-5 w-5" />
  }, {
    id: "companies",
    name: "חברות וארגונים",
    icon: <Briefcase className="h-5 w-5" />
  }, {
    id: "banks",
    name: "בנקים",
    icon: <Landmark className="h-5 w-5" />
  }, {
    id: "health",
    name: "שירותי בריאות",
    icon: <Hospital className="h-5 w-5" />
  }, {
    id: "municipalities",
    name: "עיריות",
    icon: <Building2 className="h-5 w-5" />
  }];
  const clients = {
    government: ["משרד ראש הממשלה", "לשכת העיתונות הממשלתית", "משרד הביטחון", "נציבות המדינה", "הכנסת", "משרד הרווחה", "משרד האוצר", "משרד הפנים", "משרד העבודה", "משרד הכלכלה", "משרד החינוך", "המשרד לביטחון פנים", "כבאות והצלה"],
    academic: ["אוניברסיטת תל אביב", "אוניברסיטת בר אילן", "אוניברסיטת אריאל", "האוניברסיטה העברית", "מכללת אתגר", "מכללת עתיד", "מכללת אחוה", "מכללת הישגים", "מכללת כספים", "מכון מגיד"],
    companies: ["תעשיה אווירית", "אלתה", "סמיקום", "בית אקרשטיין", "סינמה סיטי", "קבוצת שקד", "THI", "UNET", "מייקרוסופט", "HP", "הפניקס"],
    banks: ["בנק לאומי", "בנק יהב", "בנק מזרחי", "בנק פאגי"],
    health: ["קופ\"ח לאומית", "קופ\"ח כללית", "קופ\"ח מכבי", "מכון הלב – הדסה עין כרם", "בית לוינשטיין", "המרכז הרפואי שמיר", "שערי צדק"],
    municipalities: ["עיריית ת\"א", "עיריית ראשון לציון", "עיריית ירושלים", "עיריית גבעתיים", "עיריית רמת גן", "עיריית מודיעין"]
  };
  return <div className="min-h-screen" dir="rtl">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img src="/lovable-uploads/4c1deaf2-aeb2-4d36-b3cd-ead85754e3a9.png" alt="TSI Logo" className="h-12 w-auto object-contain" onError={e => {
                console.error('Error loading logo:', e);
                e.currentTarget.style.display = 'none';
              }} />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost" asChild>
                <Link to="/"><Home className="h-4 w-4 mr-2" /> עמוד הבית</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/courses">קורסים</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/about">אודות</Link>
              </Button>
              <Button variant="ghost">המלצות</Button>
              <Button variant="ghost">משאבים</Button>
              <Button variant="ghost" asChild>
                <Link to="/contact">צור קשר</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Button variant="ghost" className="justify-end" asChild>
                      <Link to="/"><Home className="h-4 w-4 ml-2" /> עמוד הבית</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end" onClick={() => window.location.href = 'https://academy.tsionline.org/courses'}>קורסים</Button>
                    <Button variant="ghost" className="justify-end" asChild>
                      <Link to="/about">אודות</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end">המלצות</Button>
                    <Button variant="ghost" className="justify-end">משאבים</Button>
                    <Button variant="ghost" className="justify-end" asChild>
                      <Link to="/contact">צור קשר</Link>
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
            <p className="text-gray-700 leading-relaxed text-right">צוות הדרכה מוביל בתחומו בהובלתה של שרון אייזן עם ניסיון עשיר של עשרות שנים כתחום עיסוק עיקרי המסור להון האנושי והצלחתו עם מקצועיות ברמות הגבוהות ביותר, הקשבה לצרכים והאתגרים בשטח, התאמה מלאה ככפפה ליד למתן מענה אופטימלי. מקסום הפוטנציאל האנושי כשליחות ויצירת תוצאות הלכה למעשה באופן התואם לתרבות הארגונית ויישור קו עם החזון, הערכים, והיעדים של הארגון בהתאמה מלאה לצרכי הלקוח. TSI מונה עשרות מנחים מובילים בתחומם עם ניסיון עשיר בשטח ומשובים מעולים בהובלתה של שרון אייזן. ב TSI אנו מקפידים על איכות ללא פשרות בכל הארץ (מתן מענה מותאם בהתאם לצרכי הלקוח) בצפון, מרכז ודרום הארץ. ב TSI תוכלו למצוא מגוון עשיר של סדנאות, קורסים, הרצאות וימי עיון בהתאם לצרכים שלכם ברמות הגבוהות ביותר, מתן כלים וערך, והתאמה אישית לצרכים שלכם בכל תחום שתבחרו.</p>
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
              
              <div className="text-gray-700 leading-relaxed text-right max-w-2xl space-y-6">
                <p className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border-r-4 border-primary">
                  <strong className="text-primary">להוביל את ההון האנושי למצוינות</strong> ע"י אסטרטגיות חשיבה ויישום מתקדם בשדרוג ארגז הכלים הניהולי והפיקודי המובילים להצלחה ויוצרים השראה בסביבת העבודה ומחוצה לה.
                </p>
                
                <p className="bg-purple-50 p-4 rounded-lg">
                  ב-<strong className="text-primary">TSI</strong> אנו מתנהלים עפ"י חשיבה תוצאתית המותאמת לעולם החדש תוך חיסכון בזמן, משאבים וכסף בהתנהלות השוטפת. הן בעבודת ההון האנושי, הטמעה בשטח משכבות הניהול הבכירות ועד לרצפת הייצור. אנו עושים זאת ע"י הטמעת כלים מתקדמים בשילוב הבינה המלאכותית המותאמים לעולם החדש ומתכתבים עם צרכי הארגון הלכה למעשה.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#E5DEFF] p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2 text-right">המטרה שלנו</h3>
                    <p>ליצור תוצאות בארגון הלכה למעשה בדרך שתתכתב עם המצב המצוי בשטח ויצירת מפה התואמת לצרכים הלכה למעשה בדרך פרקטית, יעילה וישימה.</p>
                  </div>
                  
                  <div className="bg-[#D3E4FD] p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2 text-right">ההצלחה נמדדת</h3>
                    <p>לא רק בהשגת התוצאות הלכה למעשה אלא גם ביכולות הרתימה, המחוברות הארגונית והצוותית.</p>
                  </div>
                </div>
                
                <p className="bg-[#FDE1D3] p-4 rounded-lg">תחושת המחוברות קשורה גם להנאה מהעשיה, מקסום וחיבור לנקודות החוזקה של כל מנהל, של כל עובד. חלק בלתי נפרד ממצוינות היא לשמר כוח אדם שאוהב ומחובר לעשייתו ולארגון בו הוא נמצא תוך שהוא מרגיש חלק בלתי נפרד ממנו.</p>
                
                <div className="bg-gradient-to-r from-white to-purple-50 p-4 rounded-lg border-r-4 border-secondary">
                  <h3 className="font-semibold text-primary mb-2 text-right">המשימה שלנו - השראה</h3>
                  <p>להפוך את ההצלחה והעשיה להשראה הלכה למעשה. על מנת ליצוק משמעות, ערך, וחיבור בין החזון האישי/מקצועי לחזון הארגוני.</p>
                  <p className="mt-2 italic text-purple-700">"בחר/י לך עבודה את/ה אוהב/ת ולא תצטרך/י לעבוד אפילו יום אחד בחייך" - קונפוציוס</p>
                </div>
                
                <div className="bg-[#F1F0FB] p-4 rounded-lg mt-6">
                  <h3 className="font-semibold text-center text-primary mb-4">בכך נרוויח 3 פעמים:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
                      <span>עבור עצמנו בהגשמה האישית והמקצועית שלנו</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
                      <span>ניהיה נכס צאן וברזל לארגון בו אנו נמצאים (לרוב לא יוותרו עלינו)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
                      <span>נהווה השראה עבור אנשים אחרים שרוצים למקסם את היכולות שלהם</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-right">בידול</h2>
            <div className="space-y-6 text-gray-700 text-right">
              <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg border-r-4 border-primary">
                <p className="leading-relaxed">
                  <span className="font-semibold text-primary">שמנו לנו למטרה להוביל ביצירת תוצאות בארגון!</span> אנו עושים זאת ע"י מתן מענה מותאם אישית ללקוח בראיית הצרכים, האתגרים ומתן מענה תואם ככפפה ליד בראיה כוללת בהיבט מענה המתמקד בפיתוח מנהלים, פיתוח עובדים בארגון בהתאמה לתרבות ולשפה הארגונית.
                </p>
              </div>
              
              <Card className="border-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-10 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-medium text-primary">שירות, חדשנות ואיכות ללא פשרות</h3>
                  </div>
                  <p className="leading-relaxed">
                    בדרך העברת מסרים המשלבת אינטראקציה ויצירת עניין תוך קשירת הנושאים בהתאמה אישית לקהל היעד וצרכי הארגון. לפני כל סדנה/ קורס/ הרצאה/ יום עיון מתקיימת הכנה בהיקף הנדרש אל מול הארגון על מנת לתת מענה באופן מיטבי במיקוד במוצרי תוכן מובילים (פרונטליים/ אונליין - לבחירתכם) המותאמים לעולם החדש במגוון נושאים מתוך הקשבה לשטח ולצרכים העולים בזמן אמת.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex gap-6 flex-col md:flex-row">
                <div className="bg-[#E5DEFF] p-5 rounded-lg flex-1">
                  <p className="leading-relaxed">
                    הצוות שלנו מיומן ובעל ניסיון מצטבר של עשרות שנים כתחום פעילות עיקרי ונבחר בקפידה על סמך משובים והמלצות מהשטח.
                  </p>
                </div>
                <div className="bg-[#D3E4FD] p-5 rounded-lg flex-1">
                  <p className="leading-relaxed">
                    אנו רואים בסדנאות שליחות שנועדה לשרת את הארגון וההון האנושי למתן מענה בפעילות היום יומית ברמות הגבוהות ביותר. ליהנות מהדרך, ולהגדיל את המחוברות הארגונית הלכה למעשה.
                  </p>
                </div>
              </div>
              
              <div className="bg-[#FDE1D3] p-5 rounded-lg">
                <p className="leading-relaxed">
                  אנו נדע לייעץ ולהתאים לכם את התכנים המתאימים ביותר בהתאם לצרכים והיעדים שלכם. תוכלו לבחור את מה שמתאים לכם, להיעזר בנו בכל אחד מהשלבים בדרך על מנת לדייק את הדרך שלכם לעבר יצירת התוצאות ועמידה ביעדים בדרך מהנה, יצירתית ששמה את ההון האנושי במרכז ביצירת חוויה וערך בשילוב הלימה מלאה לצרכי הארגון.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-right">בין לקוחותינו</h2>
            
            <div className="mb-8">
              <div className="flex flex-wrap justify-start gap-3 mb-6">
                <Button variant={activeCategory === "all" ? "default" : "outline"} onClick={() => setActiveCategory("all")} className="rounded-full">
                  הכל
                </Button>
                {clientCategories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} onClick={() => setActiveCategory(category.id)} className="rounded-full flex gap-2 items-center">
                    {category.icon}
                    {category.name}
                  </Button>)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === "all" ? [...clientCategories].map(category => ({
              ...category,
              clients: clients[category.id]
            })) : [...clientCategories].filter(c => c.id === activeCategory).map(category => ({
              ...category,
              clients: clients[category.id]
            }))).map(category => <Card key={category.id} className="overflow-hidden border-primary/10 hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-primary text-right">{category.name}</h3>
                  </div>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-gray-700 text-right">
                      {category.clients.map((client, index) => <li key={index} className="flex items-center gap-2">
                          <div className="bg-primary/5 p-1 rounded-full ml-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          </div>
                          <span>{client}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-lg p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-center mb-6 text-primary">מתוך מגוון לקוחותינו</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, i) => <div key={i} className="bg-white rounded-lg shadow-sm p-4 aspect-square flex items-center justify-center">
                    <div className="text-primary/60 flex flex-col items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity">
                      {i % 5 === 0 ? <Building className="w-12 h-12" /> : i % 5 === 1 ? <Briefcase className="w-12 h-12" /> : i % 5 === 2 ? <Landmark className="w-12 h-12" /> : i % 5 === 3 ? <GraduationCap className="w-12 h-12" /> : <Hospital className="w-12 h-12" />}
                      <span className="text-xs mt-2 text-gray-500">לוגו לקוח</span>
                    </div>
                  </div>)}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">* הלוגואים מוצגים כדוגמה בלבד. יש להחליפם בלוגואים אמיתיים.</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
};
export default About;