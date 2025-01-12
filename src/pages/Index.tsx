import { Users, Target, MessageSquare } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const courses = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "פיתוח מנהיגות",
      description: "שלוט במיומנויות מנהיגות חיוניות למקום העבודה המודרני",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "פתרון קונפליקטים",
      description: "למד אסטרטגיות יעילות לניהול קונפליקטים במקום העבודה",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "בניית צוות",
      description: "בנה ותחזק צוותים בעלי ביצועים גבוהים",
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/1a610ffa-c35b-4929-9459-6294e1153521.png" 
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
              <Button variant="ghost" onClick={() => window.location.href = 'https://academy.tsionline.org/courses'}>קורסים</Button>
              <Button variant="ghost" asChild>
                <Link to="/about">אודות</Link>
              </Button>
              <Button variant="ghost">המלצות</Button>
              <Button variant="ghost">משאבים</Button>
              <Button variant="ghost">צור קשר</Button>
            </div>
            <Button onClick={() => window.location.href = 'https://academy.tsionline.org/start'}>הרשמה</Button>
          </div>
        </div>
      </nav>

      <Hero />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">קורסים מובילים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      <FeatureSection />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">מה הלקוחות שלנו אומרים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="קורס המנהיגות שינה את האופן בו אני מנהל את הצוות שלי. מומלץ מאוד!"
            author="שרה כהן"
            role="מנהלת משאבי אנוש"
          />
          <Testimonial
            quote="מעשי, מעניין וניתן ליישום מיידי בארגון שלנו."
            author="מיכאל לוי"
            role="ראש צוות"
          />
          <Testimonial
            quote="ההשקעה הטובה ביותר שעשינו בפיתוח הצוות שלנו."
            author="אמה רודריגז"
            role="מנהלת תפעול"
          />
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
                <input
                  type="email"
                  placeholder="הכנס אימייל"
                  className="px-4 py-2 rounded bg-gray-800 text-white"
                />
                <Button>הרשמה</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 tsionline. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;