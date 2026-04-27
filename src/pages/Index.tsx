import { MessageSquare, Lightbulb, Brain, Briefcase, UserRound, Headphones } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JIcon } from "@/components/JIcon";
import { useTranslation } from "react-i18next";
import zenGarden from "@/assets/jp/zen-garden.jpg";

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
            <span>{t("eyebrows.programs")}</span>
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

      {/* Philosophy — quiet light section (no longer a sumi-panel; footer is the rest-point) */}
      <section className="py-28 lg:py-36 border-y border-border relative">
        <div className={`container px-6 relative ${align}`}>
          <div className="eyebrow">
            <span>{t("eyebrows.philosophy")}</span>
            <span className="jp">哲学</span>
          </div>
          <div className={`hairline-short mt-6 mb-12 ${isRtl ? "ms-auto" : ""}`} />
          <blockquote
            className="display-jp text-2xl md:text-4xl lg:text-5xl leading-[1.4] max-w-4xl text-balance"
          >
            <span className="text-primary">「</span>
            {t("about.confuciusQuote").replace(/^"|"$/g, "").replace(/^"|"$/g, "")}
            <span className="text-primary">」</span>
          </blockquote>
          <p className="mt-10 text-[11px] uppercase tracking-[0.32em] text-primary/90" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            想 ・ 成 ・ 啓 — Think · Success · Inspire
          </p>
        </div>
      </section>

      {/* Voices — single subtle photo strip above */}
      <div
        className="photo-strip"
        style={{ backgroundImage: `url(${zenGarden})`, height: "120px" }}
        aria-hidden="true"
      />
      <section className="py-24 lg:py-32 container px-6">
        <div className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>{t("eyebrows.voices")}</span>
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
