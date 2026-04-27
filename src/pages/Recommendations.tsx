import { Star, Award } from "lucide-react";
import { Testimonial } from "@/components/Testimonial";
import { SiteNav } from "@/components/SiteNav";
import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const { t } = useTranslation();
  const items = t("testimonials", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Star className="h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">{t("recommendations.title")}</h1>
            <p className="max-w-2xl text-lg mb-8">{t("recommendations.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((tst, index) => (
            <Testimonial key={index} quote={tst.quote} author={tst.author} role={tst.role} />
          ))}
        </div>
      </div>

      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t("recommendations.trustedBy")}</h2>
            <p className="max-w-2xl text-lg mb-12">{t("recommendations.trustedBySubtitle")}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24"
                >
                  <div className="text-gray-400 text-sm">
                    {t("recommendations.companyLogo")} {num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
