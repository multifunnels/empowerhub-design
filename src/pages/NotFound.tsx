import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Enso } from "@/components/JIcon";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1 relative isolate overflow-hidden flex items-center justify-center">
        {/* large kanji watermark — 迷 (lost) */}
        <span
          aria-hidden="true"
          className="absolute select-none pointer-events-none text-foreground/[0.04]"
          style={{
            fontFamily: '"Noto Serif JP", serif',
            fontSize: "clamp(280px, 50vw, 640px)',",
            lineHeight: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          迷
        </span>

        {/* enso ornament */}
        <div
          className="absolute opacity-30 text-primary pointer-events-none"
          style={{ top: "12%", [isRtl ? "left" : "right"]: "10%" }}
          aria-hidden="true"
        >
          <Enso size={180} />
        </div>

        <div className="container px-6 py-24 lg:py-32 relative text-center">
          <div className="eyebrow justify-center">
            <span>404</span>
            <span className="jp">迷子</span>
          </div>
          <div className="hairline-short mt-6 mb-10 mx-auto" />

          <h1 className="display-jp text-5xl md:text-7xl lg:text-8xl text-balance mb-8">
            {t("notFound.title")}
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg leading-[1.9] text-foreground/85 mb-14">
            {t("notFound.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.28em] font-medium border border-primary hover:bg-foreground hover:border-foreground transition-colors duration-500"
            >
              {t("notFound.backHome")}
              <ArrowIcon className="h-3 w-3" strokeWidth={1.25} />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-medium border border-foreground/60 bg-background/70 text-foreground hover:border-foreground hover:bg-background transition-colors duration-500"
            >
              {t("notFound.contact")}
              <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default NotFound;
