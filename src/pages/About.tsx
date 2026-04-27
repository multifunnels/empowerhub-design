import React, { useState } from "react";
import {
  Building,
  Building2,
  Briefcase,
  GraduationCap,
  Hospital,
  Landmark,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JIcon, KanjiBullet } from "@/components/JIcon";
import { useTranslation } from "react-i18next";
import tatamiEngawa from "@/assets/jp/tatami-engawa.webp";

type CatId = "government" | "academic" | "companies" | "banks" | "health" | "municipalities";

const CATEGORY_ICONS: Record<CatId, typeof Building> = {
  government: Building,
  academic: GraduationCap,
  companies: Briefcase,
  banks: Landmark,
  health: Hospital,
  municipalities: Building2,
};

const CATEGORY_IDS: CatId[] = [
  "government",
  "academic",
  "companies",
  "banks",
  "health",
  "municipalities",
];

const About = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<"all" | CatId>("all");
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  const categoryNames = t("about.categories", { returnObjects: true }) as Record<CatId, string>;
  const clientLists = t("about.clientLists", { returnObjects: true }) as Record<CatId, string[]>;
  const visionWords = t("about.visionWords", { returnObjects: true }) as string[];
  const winThree = t("about.winThreeTimes", { returnObjects: true }) as string[];

  const renderedCategories =
    activeCategory === "all"
      ? CATEGORY_IDS
      : CATEGORY_IDS.filter((id) => id === activeCategory);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <Breadcrumbs />

      {/* Hero with tatami-engawa photograph */}
      <section
        className="photo-backdrop relative border-b border-border overflow-hidden"
        style={{ backgroundImage: `url(${tatamiEngawa})` }}
      >
        <div className="container mx-auto px-6 py-32 lg:py-40">
          <div className={align}>
            <div className="eyebrow">
              <span>{t("eyebrows.about")}</span>
              <span className="jp">会社案内</span>
            </div>
            <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
            <h1 className="display-jp text-4xl md:text-6xl max-w-4xl text-balance">
              {t("about.title")}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Intro */}
          <section className={align}>
            <p className="text-base md:text-lg leading-[2] text-foreground/90">
              {t("about.intro")}
            </p>
          </section>

          {/* Vision */}
          <section className={align}>
            <div className="eyebrow mb-6">
              <span>{t("eyebrows.vision")}</span>
              <span className="jp">理念</span>
            </div>
            <h2 className="display-jp text-3xl md:text-5xl mb-12">{t("about.visionTitle")}</h2>

            <div className="flex justify-center gap-12 mb-12 text-primary text-2xl md:text-3xl tracking-[0.2em]"
                 style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 300 }}>
              {visionWords.map((w, i) => (
                <React.Fragment key={i}>
                  <span>{w}</span>
                  {i < visionWords.length - 1 && (
                    <span className="text-foreground/30 self-center">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="space-y-10 text-base leading-[2] text-foreground/90">
              <div className="border-s-2 border-primary ps-6">
                <p>
                  <strong className="text-primary font-medium">
                    {t("about.visionLeadHighlight")}
                  </strong>{" "}
                  {t("about.visionLead").replace(t("about.visionLeadHighlight"), "")}
                </p>
              </div>

              <p className="text-muted-foreground">{t("about.visionParagraph")}</p>

              <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-8">
                  <div className="eyebrow mb-4">
                    <span>{t("about.ourGoalTitle")}</span>
                    <span className="jp">目標</span>
                  </div>
                  <p className="text-sm leading-[1.9] text-muted-foreground">
                    {t("about.ourGoalText")}
                  </p>
                </div>
                <div className="bg-background p-8">
                  <div className="eyebrow mb-4">
                    <span>{t("about.successMeasuredTitle")}</span>
                    <span className="jp">成功</span>
                  </div>
                  <p className="text-sm leading-[1.9] text-muted-foreground">
                    {t("about.successMeasuredText")}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground">{t("about.connectionText")}</p>

              <div className="border-s-2 border-foreground/20 ps-6">
                <div className="eyebrow mb-3">
                  <span>{t("about.missionTitle")}</span>
                  <span className="jp">使命</span>
                </div>
                <p>{t("about.missionText")}</p>
                <p className="mt-4 italic text-muted-foreground"
                   style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {t("about.confuciusQuote")}
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="display-jp text-xl mb-8">{t("about.winThreeTimesTitle")}</h3>
                <ul className="space-y-6">
                  {winThree.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-5">
                      <span className="idx text-2xl shrink-0 leading-none mt-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-[1.9]">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Differentiation */}
          <section className={align}>
            <div className="eyebrow mb-6">
              <span>{t("eyebrows.difference")}</span>
              <span className="jp">違い</span>
            </div>
            <h2 className="display-jp text-3xl md:text-5xl mb-12">
              {t("about.differentiationTitle")}
            </h2>

            <div className="space-y-10 text-base leading-[2] text-foreground/90">
              <div className="border-s-2 border-primary ps-6">
                <p>
                  <span className="text-primary font-medium">
                    {t("about.differentiationLeadHighlight")}
                  </span>{" "}
                  {t("about.differentiationLead")}
                </p>
              </div>

              <div className="tile p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-px h-10 bg-primary" />
                  <h3 className="display-jp text-xl text-primary">
                    {t("about.serviceCardTitle")}
                  </h3>
                </div>
                <p className="text-sm leading-[1.9] text-muted-foreground">
                  {t("about.serviceCardText")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-8">
                  <p className="text-sm leading-[1.9] text-muted-foreground">
                    {t("about.experienceText")}
                  </p>
                </div>
                <div className="bg-background p-8">
                  <p className="text-sm leading-[1.9] text-muted-foreground">
                    {t("about.missionText2")}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground">{t("about.advisingText")}</p>
            </div>
          </section>
        </div>

        {/* Clients */}
        <section className={`mt-32 ${align} max-w-6xl mx-auto`}>
          <div className="eyebrow mb-6">
            <span>{t("eyebrows.clients")}</span>
            <span className="jp">取引先</span>
          </div>
          <h2 className="display-jp text-3xl md:text-5xl mb-12">{t("about.clientsTitle")}</h2>

          {/* Filter — hairline tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 border-b border-border pb-4">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`text-[11px] uppercase tracking-[0.28em] pb-3 -mb-[17px] border-b-2 transition-colors duration-500 ${
                activeCategory === "all"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("about.all")}
            </button>
            {CATEGORY_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] pb-3 -mb-[17px] border-b-2 transition-colors duration-500 ${
                  activeCategory === id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <JIcon icon={CATEGORY_ICONS[id]} size={14} className="text-current" />
                {categoryNames[id]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {renderedCategories.map((id) => (
              <div key={id} className="bg-background p-8 lg:p-10">
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-border">
                  <JIcon icon={CATEGORY_ICONS[id]} size={18} className="text-primary" />
                  <h3 className="display-jp text-base">{categoryNames[id]}</h3>
                </div>
                <ul className="space-y-3 text-sm text-foreground/80">
                  {(clientLists[id] ?? []).map((client, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <KanjiBullet size={6} className="text-primary" />
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="display-jp text-lg mb-10 text-center">
              {t("about.clientsSampleTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
              {Array.from({ length: 10 }).map((_, i) => {
                const Icon =
                  i % 5 === 0
                    ? Building
                    : i % 5 === 1
                    ? Briefcase
                    : i % 5 === 2
                    ? Landmark
                    : i % 5 === 3
                    ? GraduationCap
                    : Hospital;
                return (
                  <div
                    key={i}
                    className="bg-background aspect-square flex flex-col items-center justify-center gap-2 text-foreground/40 hover:text-primary transition-colors duration-500"
                  >
                    <JIcon icon={Icon} size={26} className="text-current" />
                    <span className="text-[10px] uppercase tracking-[0.22em]">
                      {t("about.clientsLogoLabel")}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] tracking-[0.18em] text-muted-foreground mt-6 text-center">
              {t("about.clientsLogoNote")}
            </p>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
};

export default About;
