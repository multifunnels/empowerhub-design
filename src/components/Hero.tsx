import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Enso } from "@/components/JIcon";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* faint mountain ink-wash silhouette anchored bottom */}
      <div className="mountain-ink absolute inset-x-0 bottom-0 h-[55%] pointer-events-none" />

      {/* enso ornament — single quiet brand mark */}
      <div
        className={`absolute top-12 ${isRtl ? "left-12" : "right-12"} hidden md:block opacity-50 text-primary pointer-events-none`}
        aria-hidden="true"
      >
        <Enso size={240} />
      </div>

      <div className="container relative px-6 pt-32 pb-40 lg:pt-44 lg:pb-56">
        {/* Eyebrow: Latin｜kanji */}
        <div className="eyebrow animate-fade-up">
          <span>Workshops</span>
          <span className="jp">研修</span>
        </div>

        {/* thin hairline */}
        <div className="hairline-short mt-8 mb-10 animate-fade-up" />

        {/* giant quiet headline */}
        <h1
          className="display-jp text-4xl md:text-6xl lg:text-7xl max-w-4xl text-balance animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {t("hero.title")}
        </h1>

        {/* subtitle */}
        <p
          className="mt-10 max-w-xl text-base md:text-lg leading-[1.9] text-muted-foreground animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTAs — ghost links with hairline borders */}
        <div
          className="mt-14 flex flex-col sm:flex-row gap-6 sm:gap-10 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <Link
            to="/courses"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.28em] font-medium border border-primary hover:bg-foreground hover:border-foreground transition-colors duration-500"
          >
            {t("hero.browseCourses")}
            <ArrowIcon className="h-3 w-3" strokeWidth={1.25} />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-medium border border-border text-foreground hover:border-foreground transition-colors duration-500"
          >
            {t("hero.requestConsultation")}
            <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
          </Link>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="hairline" />
    </section>
  );
};
