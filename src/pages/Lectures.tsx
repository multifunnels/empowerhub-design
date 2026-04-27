import { BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useTranslation } from "react-i18next";

const Lectures = () => {
  const { t } = useTranslation();
  const lectures = t("lectures.items", { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <div className="container mx-auto py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("lectures.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("lectures.subtitle")}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lectures.map((lecture, idx) => (
            <Card key={idx} className="flex flex-col h-full hover:shadow-md transition-shadow">
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
                  {t("lectures.readMore")}
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
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
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

      <SiteFooter />
    </div>
  );
};

export default Lectures;
