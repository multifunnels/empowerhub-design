import { MessageSquare, Lightbulb, Brain, Briefcase, UserRound, Headphones } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JIcon } from "@/components/JIcon";
import { useTranslation } from "react-i18next";

const ICONS = [Lightbulb, Brain, MessageSquare, Briefcase, UserRound, Headphones];

const Index = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  const courses = (t("courses.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>).map((c, i) => ({
    ...c,
    icon: <JIcon icon={ICONS[i] ?? ICONS[0]} size={20} />,
  }));

  const testimonials = t("testimonials", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />

      {/* Courses */}
      <section className="py-24 lg:py-32 container px-6">
        <div className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>Programs</span>
            <span className="jp">講座</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h2 className="display-jp text-3xl md:text-5xl max-w-3xl text-balance">
            {t("home.coursesTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {courses.map((course, index) => (
            <div key={index} className="bg-background">
              <CourseCard {...course} index={index} />
            </div>
          ))}
        </div>
      </section>

      <FeatureSection />

      {/* Testimonials */}
      <section className="py-24 lg:py-32 container px-6">
        <div className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>Voices</span>
            <span className="jp">お客様の声</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h2 className="display-jp text-3xl md:text-5xl max-w-3xl">
            {t("home.testimonialsTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {testimonials.slice(0, 3).map((tst, i) => (
            <div key={i} className="bg-background">
              <Testimonial quote={tst.quote} author={tst.author} role={tst.role} />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
