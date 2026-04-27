import { Users2, Calendar, Award, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { JIcon } from "@/components/JIcon";

const ICONS = [Users2, Calendar, Award, BookOpen];

export const FeatureSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const items = t("features.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="relative py-24 lg:py-32 bg-muted/40 border-y border-border">
      <div className="container px-6">
        <div className={`mb-20 ${isRtl ? "text-right" : "text-left"}`}>
          <div className="eyebrow">
            <span>Why Us</span>
            <span className="jp">理由</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h2 className="display-jp text-3xl md:text-5xl max-w-3xl">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {items.map((feature, index) => {
            const Icon = ICONS[index] ?? ICONS[0];
            return (
              <div
                key={index}
                className="group bg-background p-8 lg:p-10 transition-colors duration-500 hover:bg-muted/30"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="idx text-2xl">{String(index + 1).padStart(2, "0")}</span>
                  <JIcon icon={Icon} size={20} className="group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="display-jp text-lg mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm leading-[1.9] text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
