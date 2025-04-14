
import React from 'react';
import { Button } from "@/components/ui/button";
import { Book, GraduationCap, Target, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    description: "שפר את מיומנויות התקשורת האישית והבינאישית",
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
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
