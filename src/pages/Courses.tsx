
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Book, GraduationCap, Target, MessageSquare, Menu, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const coursesData = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "פיתוח מנהיגות",
    description: "שלוט במיומנויות מנהיגות חיוניות למקום העבודה המודרני",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "פתרון קונפליקטים",
    description: "למד אסטרטגיות יעילות לניהול קונפליקטים במקום העבודה",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "בניית צוות",
    description: "בנה ותחזק צוותים בעלי ביצועים גבוהים",
  },
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "כישורי תקשורת",
    description: "שפר את מיומנויות התקשורת האישית והבינישית",
  }
];

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
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
                    <Button variant="ghost" className="justify-end" onClick={() => setIsOpen(false)}>משאבים</Button>
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

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">הקורסים שלנו</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  {course.icon}
                </div>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{course.description}</p>
                <Button variant="ghost" className="mt-4">
                  למד עוד
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
