import { MessageSquare, Lightbulb, Brain, Briefcase, UserRound, Headphones } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useTranslation } from "react-i18next";

const ICONS = [
  <Lightbulb className="h-8 w-8 text-primary" />,
  <Brain className="h-8 w-8 text-primary" />,
  <MessageSquare className="h-8 w-8 text-primary" />,
  <Briefcase className="h-8 w-8 text-primary" />,
  <UserRound className="h-8 w-8 text-primary" />,
  <Headphones className="h-8 w-8 text-primary" />,
];

const Index = () => {
  const { t } = useTranslation();
  const courses = (t("courses.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>).map((c, i) => ({ ...c, icon: ICONS[i] ?? ICONS[0] }));
  const testimonials = t("testimonials", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.coursesTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      <FeatureSection />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.testimonialsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((tst, i) => (
            <Testimonial key={i} quote={tst.quote} author={tst.author} role={tst.role} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
