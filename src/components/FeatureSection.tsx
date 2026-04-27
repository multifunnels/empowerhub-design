import { Users2, Calendar, Award, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [
  <Users2 className="h-8 w-8" />,
  <Calendar className="h-8 w-8" />,
  <Award className="h-8 w-8" />,
  <BookOpen className="h-8 w-8" />,
];

export const FeatureSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const items = t("features.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("features.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0 mx-auto md:mx-0">
                  {ICONS[index] ?? ICONS[0]}
                </div>
                <div className={`flex-1 text-center ${isRtl ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
