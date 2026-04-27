import { Book, GraduationCap, Target, MessageSquare, Lightbulb, Brain, Briefcase, UserRound, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteNav } from "@/components/SiteNav";
import { useTranslation } from "react-i18next";

const ICONS = [
  <Lightbulb className="h-8 w-8 text-primary" />,
  <Brain className="h-8 w-8 text-primary" />,
  <MessageSquare className="h-8 w-8 text-primary" />,
  <Briefcase className="h-8 w-8 text-primary" />,
  <UserRound className="h-8 w-8 text-primary" />,
  <Headphones className="h-8 w-8 text-primary" />,
];

const Courses = () => {
  const { t } = useTranslation();
  const items = t("courses.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">{t("coursesPage.title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  {ICONS[index] ?? <Book className="h-8 w-8 text-primary" />}
                </div>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{course.description}</p>
                <Button variant="ghost" className="mt-4">
                  {t("courses.learnMore")}
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
