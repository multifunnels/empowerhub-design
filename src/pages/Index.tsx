
import { Users, Target, MessageSquare, Menu, Home, Lightbulb, Brain, Briefcase, UserRound, Headphones } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const courses = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "יוצרים תוצאות",
      description: "איך ליצור תוצאות ב-4 צעדים פשוטים!"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "חשיבה תוצאתית",
      description: "אסטרטגיית החשיבה שמשנה את חוקי המשחק"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "העברת מסרים ורתימה",
      description: "שיטות מובילות לשדרוג כל מסר מול כל קהל והנעה לפעולה"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "ניהול פרויקטים",
      description: "שיטות, אסטרטגיות בניהול פרויקטים בעולם החדש"
    },
    {
      icon: <UserRound className="h-8 w-8 text-primary" />,
      title: "ארבעת סוכני השינוי",
      description: "כיצד להוביל שינוי בארגון ולרתום את הצוותים הלכה למעשה"
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "סטוריטלינג",
      description: "כיצד לגרום לאנשים להקשיב – הכפתור הסודי להנעה לפעולה"
    }
  ];
  return <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img src="/lovable-uploads/1a610ffa-c35b-4929-9459-6294e1153521.png" alt="TSI Logo" className="h-12 w-auto object-contain" onError={e => {
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
              <Button variant="ghost" asChild>
                <Link to="/lectures">הרצאות</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/contact">צור קשר</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Button variant="ghost" className="justify-end" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/"><Home className="h-4 w-4 ml-2" /> עמוד הבית</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/courses">קורסים</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/about">אודות</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end" onClick={() => setIsOpen(false)}>המלצות</Button>
                    <Button variant="ghost" className="justify-end" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/lectures">הרצאות</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/contact">צור קשר</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <Hero />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">סדנאות/ קורסים/ הרצאות מותאמות אישית לארגון מובילים:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => <CourseCard key={index} {...course} />)}
        </div>
      </section>

      <FeatureSection />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">מה הלקוחות שלנו אומרים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial quote="קורס המנהיגות שינה את האופן בו אני מנהל את הצוות שלי. מומלץ מאוד!" author="שרה כהן" role="מנהלת משאבי אנוש" />
          <Testimonial quote="מעשי, מעניין וניתן ליישום מיידי בארגון שלנו." author="מיכאל לוי" role="ראש צוות" />
          <Testimonial quote="ההשקעה הטובה ביותר שעשינו בפיתוח הצוות שלנו." author="אמה רודריגז" role="מנהלת תפעול" />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">tsionline</h3>
              <p className="text-gray-400">מעצימים ארגונים דרך למידה אפקטיבית</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2 text-gray-400">
                <li>אודות</li>
                <li>קורסים</li>
                <li>משאבים</li>
                <li>צור קשר</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">התחבר</h4>
              <ul className="space-y-2 text-gray-400">
                <li>לינקדאין</li>
                <li>טוויטר</li>
                <li>פייסבוק</li>
                <li>אינסטגרם</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ניוזלטר</h4>
              <p className="text-gray-400 mb-4">הישאר מעודכן עם הקורסים והטיפים האחרונים שלנו</p>
              <div className="flex gap-2">
                <input type="email" placeholder="הכנס אימייל" className="px-4 py-2 rounded bg-gray-800 text-white" />
                <Button>הרשמה</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 tsionline. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
