
import { Book, BookOpen, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";

const LECTURES = [
  {
    id: 1,
    title: "פיתוח מיומנויות מנהיגות בצוותים מבוזרים",
    excerpt: "כיצד להוביל צוותים שעובדים מרחוק וליצור תרבות של אחריות ואמון",
    author: "ד״ר אביב ישראלי",
    date: "15.03.2025",
    category: "מנהיגות"
  },
  {
    id: 2,
    title: "תקשורת אפקטיבית במצבי לחץ",
    excerpt: "אסטרטגיות לשמירה על תקשורת ברורה ואמפתית בסביבות עבודה דינמיות",
    author: "מיכל כהן",
    date: "22.04.2025",
    category: "תקשורת"
  },
  {
    id: 3,
    title: "בניית צוותים רב-תרבותיים",
    excerpt: "כיצד לנצל את היתרונות של צוותים מגוונים ולגשר על פערים תרבותיים",
    author: "יעקב לוי",
    date: "10.05.2025",
    category: "גיוון והכלה"
  },
  {
    id: 4,
    title: "חדשנות וחשיבה עיצובית בארגונים",
    excerpt: "כלים מעשיים להטמעת תהליכי חדשנות ופתרון בעיות יצירתי",
    author: "נועה שפירא",
    date: "03.06.2025",
    category: "חדשנות"
  },
  {
    id: 5,
    title: "ניהול קונפליקטים בצוותי עבודה",
    excerpt: "טכניקות אפקטיביות לזיהוי וניהול קונפליקטים בסביבת העבודה",
    author: "רועי כהן",
    date: "17.07.2025",
    category: "ניהול צוות"
  },
  {
    id: 6,
    title: "אינטליגנציה רגשית במקום העבודה",
    excerpt: "פיתוח מודעות עצמית ומיומנויות רגשיות להצלחה מקצועית",
    author: "שרה אהרוני",
    date: "29.08.2025",
    category: "פיתוח אישי"
  }
];

const Lectures = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                  onError={e => {
                    console.error('Error loading logo:', e);
                    e.currentTarget.style.display = 'none';
                  }} 
                />
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

      <div className="container mx-auto py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">הרצאות מקצועיות</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הרצאות מתחלפות בנושאי מנהיגות, תקשורת ופיתוח צוותים
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LECTURES.map(lecture => (
            <Card key={lecture.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-sm text-blue-600 mb-2">{lecture.category}</div>
                <CardTitle className="text-xl">{lecture.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {lecture.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{lecture.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{lecture.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  קרא עוד
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

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
    </div>
  );
};

export default Lectures;
