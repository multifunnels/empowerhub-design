import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Building,
  Building2,
  Briefcase,
  GraduationCap,
  Hospital,
  Landmark,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { SiteNav } from "@/components/SiteNav";
import { useTranslation } from "react-i18next";

type CatId = "government" | "academic" | "companies" | "banks" | "health" | "municipalities";

const CATEGORY_ICONS: Record<CatId, JSX.Element> = {
  government: <Building className="h-5 w-5" />,
  academic: <GraduationCap className="h-5 w-5" />,
  companies: <Briefcase className="h-5 w-5" />,
  banks: <Landmark className="h-5 w-5" />,
  health: <Hospital className="h-5 w-5" />,
  municipalities: <Building2 className="h-5 w-5" />,
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

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">{t("about.title")}</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <p className={`text-gray-700 leading-relaxed ${align}`}>{t("about.intro")}</p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${align}`}>{t("about.visionTitle")}</h2>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex justify-center gap-8 text-primary text-2xl font-bold">
                  {visionWords.map((w, i) => (
                    <span key={i}>{w}</span>
                  ))}
                </div>
                <Separator className="w-1/2 bg-[#9b87f5] h-0.5" />
              </div>

              <div className={`text-gray-700 leading-relaxed ${align} max-w-2xl space-y-6`}>
                <p
                  className={`bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg ${
                    isRtl ? "border-r-4" : "border-l-4"
                  } border-primary`}
                >
                  <strong className="text-primary">{t("about.visionLeadHighlight")}</strong>{" "}
                  {t("about.visionLead").replace(t("about.visionLeadHighlight"), "")}
                </p>

                <p className="bg-purple-50 p-4 rounded-lg">{t("about.visionParagraph")}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#E5DEFF] p-4 rounded-lg">
                    <h3 className={`font-semibold text-primary mb-2 ${align}`}>
                      {t("about.ourGoalTitle")}
                    </h3>
                    <p>{t("about.ourGoalText")}</p>
                  </div>

                  <div className="bg-[#D3E4FD] p-4 rounded-lg">
                    <h3 className={`font-semibold text-primary mb-2 ${align}`}>
                      {t("about.successMeasuredTitle")}
                    </h3>
                    <p>{t("about.successMeasuredText")}</p>
                  </div>
                </div>

                <p className="bg-[#FDE1D3] p-4 rounded-lg">{t("about.connectionText")}</p>

                <div
                  className={`bg-gradient-to-r from-white to-purple-50 p-4 rounded-lg ${
                    isRtl ? "border-r-4" : "border-l-4"
                  } border-secondary`}
                >
                  <h3 className={`font-semibold text-primary mb-2 ${align}`}>
                    {t("about.missionTitle")}
                  </h3>
                  <p>{t("about.missionText")}</p>
                  <p className="mt-2 italic text-purple-700">{t("about.confuciusQuote")}</p>
                </div>

                <div className="bg-[#F1F0FB] p-4 rounded-lg mt-6">
                  <h3 className="font-semibold text-center text-primary mb-4">
                    {t("about.winThreeTimesTitle")}
                  </h3>
                  <ul className="space-y-2">
                    {winThree.map((line, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${align}`}>
              {t("about.differentiationTitle")}
            </h2>
            <div className={`space-y-6 text-gray-700 ${align}`}>
              <div
                className={`bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg ${
                  isRtl ? "border-r-4" : "border-l-4"
                } border-primary`}
              >
                <p className="leading-relaxed">
                  <span className="font-semibold text-primary">
                    {t("about.differentiationLeadHighlight")}
                  </span>{" "}
                  {t("about.differentiationLead")}
                </p>
              </div>

              <Card className="border-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-10 bg-primary rounded-full" />
                    <h3 className="text-xl font-medium text-primary">
                      {t("about.serviceCardTitle")}
                    </h3>
                  </div>
                  <p className="leading-relaxed">{t("about.serviceCardText")}</p>
                </CardContent>
              </Card>

              <div className="flex gap-6 flex-col md:flex-row">
                <div className="bg-[#E5DEFF] p-5 rounded-lg flex-1">
                  <p className="leading-relaxed">{t("about.experienceText")}</p>
                </div>
                <div className="bg-[#D3E4FD] p-5 rounded-lg flex-1">
                  <p className="leading-relaxed">{t("about.missionText2")}</p>
                </div>
              </div>

              <div className="bg-[#FDE1D3] p-5 rounded-lg">
                <p className="leading-relaxed">{t("about.advisingText")}</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${align}`}>{t("about.clientsTitle")}</h2>

            <div className="mb-8">
              <div className="flex flex-wrap justify-start gap-3 mb-6">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => setActiveCategory("all")}
                  className="rounded-full"
                >
                  {t("about.all")}
                </Button>
                {CATEGORY_IDS.map((id) => (
                  <Button
                    key={id}
                    variant={activeCategory === id ? "default" : "outline"}
                    onClick={() => setActiveCategory(id)}
                    className="rounded-full flex gap-2 items-center"
                  >
                    {CATEGORY_ICONS[id]}
                    {categoryNames[id]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderedCategories.map((id) => (
                <Card
                  key={id}
                  className="overflow-hidden border-primary/10 hover:shadow-md transition-shadow"
                >
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">{CATEGORY_ICONS[id]}</div>
                    <h3 className={`text-lg font-semibold text-primary ${align}`}>
                      {categoryNames[id]}
                    </h3>
                  </div>
                  <CardContent className="pt-4">
                    <ul className={`space-y-2 text-gray-700 ${align}`}>
                      {(clientLists[id] ?? []).map((client, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div
                            className={`bg-primary/5 p-1 rounded-full ${isRtl ? "ml-2" : "mr-2"}`}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          </div>
                          <span>{client}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-lg p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-center mb-6 text-primary">
                {t("about.clientsSampleTitle")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm p-4 aspect-square flex items-center justify-center"
                  >
                    <div className="text-primary/60 flex flex-col items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity">
                      {i % 5 === 0 ? (
                        <Building className="w-12 h-12" />
                      ) : i % 5 === 1 ? (
                        <Briefcase className="w-12 h-12" />
                      ) : i % 5 === 2 ? (
                        <Landmark className="w-12 h-12" />
                      ) : i % 5 === 3 ? (
                        <GraduationCap className="w-12 h-12" />
                      ) : (
                        <Hospital className="w-12 h-12" />
                      )}
                      <span className="text-xs mt-2 text-gray-500">
                        {t("about.clientsLogoLabel")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                {t("about.clientsLogoNote")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
