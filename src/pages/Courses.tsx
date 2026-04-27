import { Lightbulb, Brain, MessageSquare, Briefcase, UserRound, Headphones, ArrowRight, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JIcon } from "@/components/JIcon";
import { useTranslation } from "react-i18next";
import kyotoAlley from "@/assets/jp/kyoto-alley.jpg";

const ICONS = [Lightbulb, Brain, MessageSquare, Briefcase, UserRound, Headphones];

const Courses = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const items = t("courses.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>Programs</span>
            <span className="jp">講座</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h1 className="display-jp text-4xl md:text-6xl max-w-3xl">
            {t("coursesPage.title")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((course, index) => {
            const Icon = ICONS[index] ?? ICONS[0];
            return (
              <article
                key={index}
                className="group bg-background p-10 lg:p-12 flex flex-col"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="idx text-3xl">{String(index + 1).padStart(2, "0")}</span>
                  <JIcon icon={Icon} size={20} className="group-hover:text-primary transition-colors duration-500" />
                </div>
                <h2 className="display-jp text-xl md:text-2xl mb-5 leading-snug">
                  {course.title}
                </h2>
                <p className="text-sm leading-[1.9] text-muted-foreground flex-1">
                  {course.description}
                </p>
                <div className="mt-10 relative h-px bg-border overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground/80 group-hover:text-primary transition-colors duration-500 self-start"
                >
                  {t("courses.learnMore")}
                  <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" strokeWidth={1.25} />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Courses;
