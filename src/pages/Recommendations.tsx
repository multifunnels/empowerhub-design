import { Testimonial } from "@/components/Testimonial";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JIcon, Enso } from "@/components/JIcon";
import { Building, Briefcase, Landmark, GraduationCap, Hospital } from "lucide-react";
import { useTranslation } from "react-i18next";
import zenGarden from "@/assets/jp/zen-garden.jpg";
import kanjiMark from "@/assets/jp/kanji-mark.png";

const LOGO_ICONS = [Building, Briefcase, Landmark, GraduationCap, Hospital];

const Recommendations = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  const items = t("testimonials", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero strip */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          className={`absolute top-12 ${isRtl ? "left-12" : "right-12"} hidden md:block opacity-40 text-primary pointer-events-none`}
          aria-hidden="true"
        >
          <Enso size={200} />
        </div>
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className={align}>
            <div className="eyebrow">
              <span>{t("eyebrows.voices")}</span>
              <span className="jp">お客様の声</span>
            </div>
            <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
            <h1 className="display-jp text-4xl md:text-6xl max-w-3xl mb-8">
              {t("recommendations.title")}
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-[1.9] text-muted-foreground">
              {t("recommendations.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="py-24 lg:py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((tst, index) => (
            <div key={index} className="bg-background">
              <Testimonial quote={tst.quote} author={tst.author} role={tst.role} />
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-t border-border bg-muted/40 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className={`mb-20 ${align}`}>
            <div className="eyebrow">
              <span>{t("eyebrows.clients")}</span>
              <span className="jp">取引先</span>
            </div>
            <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
            <h2 className="display-jp text-3xl md:text-5xl max-w-3xl mb-6">
              {t("recommendations.trustedBy")}
            </h2>
            <p className="max-w-2xl text-base leading-[1.9] text-muted-foreground">
              {t("recommendations.trustedBySubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-border border border-border">
            {Array.from({ length: 8 }).map((_, i) => {
              const Icon = LOGO_ICONS[i % LOGO_ICONS.length];
              return (
                <div
                  key={i}
                  className="bg-background h-28 flex flex-col items-center justify-center gap-2 text-foreground/40 hover:text-primary transition-colors duration-500"
                >
                  <JIcon icon={Icon} size={26} className="text-current" />
                  <span className="text-[10px] uppercase tracking-[0.22em]">
                    {t("recommendations.companyLogo")} {i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Recommendations;
