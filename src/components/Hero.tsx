import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Enso } from "@/components/JIcon";
import heroMountains from "@/assets/jp/hero-mountains.jpg";
import inkStroke from "@/assets/jp/ink-stroke.png";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="photo-backdrop relative isolate overflow-hidden border-b border-border"
      style={{ backgroundImage: `url(${heroMountains})` }}
    >
      {/* extra washi top + bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(48 22% 97% / 0.55) 0%, transparent 30%, transparent 65%, hsl(48 22% 97%) 100%)",
        }}
      />

      {/* enso ornament — single quiet brand mark, only here */}
      <div
        className={`absolute top-16 ${isRtl ? "left-16" : "right-16"} hidden md:block opacity-60 text-primary pointer-events-none`}
        aria-hidden="true"
      >
        <Enso size={260} />
      </div>

      {/* large ink-stroke under headline */}
      <div
        aria-hidden="true"
        className="ink-stroke-bg hidden md:block"
        style={{
          backgroundImage: `url(${inkStroke})`,
          left: isRtl ? "auto" : "0",
          right: isRtl ? "0" : "auto",
          top: "55%",
          width: "60%",
          height: "120px",
          transform: isRtl ? "scaleX(-1)" : "none",
        }}
      />

      <div className="container relative px-6 pt-32 pb-40 lg:pt-44 lg:pb-56">
        <div className="eyebrow animate-fade-up">
          <span>{t("eyebrows.workshops")}</span>
          <span className="jp">研修</span>
        </div>

        <div className="hairline-short mt-8 mb-6 animate-fade-up" />

        {/* tagline — short, bold, defines the company in 5–7 words */}
        <p
          className="text-sm md:text-base font-medium text-foreground/80 mb-6 animate-fade-up"
          style={{ animationDelay: "60ms", letterSpacing: isRtl ? 0 : "0.04em" }}
        >
          {t("hero.tagline")}
        </p>

        <h1
          className="display-jp text-4xl md:text-6xl lg:text-7xl max-w-4xl text-balance animate-fade-up relative"
          style={{ animationDelay: "120ms" }}
        >
          {t("hero.title")}
        </h1>

        <p
          className="mt-10 max-w-xl text-base md:text-lg leading-[1.9] text-foreground/90 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {t("hero.subtitle")}
        </p>

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
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-medium border border-foreground/60 bg-background/70 backdrop-blur-sm text-foreground hover:border-foreground hover:bg-background transition-colors duration-500"
          >
            {t("hero.requestConsultation")}
            <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </section>
  );
};
