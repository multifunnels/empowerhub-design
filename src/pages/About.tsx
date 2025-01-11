import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4c1deaf2-aeb2-4d36-b3cd-ead85754e3a9.png" 
                alt="TSI Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  console.error('Error loading logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
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
        <h1 className="text-4xl font-bold text-center mb-8">אודות TSI</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">החזון שלנו</h2>
            <p className="text-gray-700 leading-relaxed">
              TSI מחויבת להעצמת ארגונים וצוותים באמצעות הכשרה מקצועית ברמה הגבוהה ביותר. אנו מאמינים בפיתוח מנהיגות, יצירת תרבות ארגונית חיובית, ושיפור מתמיד של ביצועים.
            </p>
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