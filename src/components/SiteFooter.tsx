import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const SiteFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">tsionline</h3>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t("nav.about")}</li>
              <li>{t("nav.courses")}</li>
              <li>{t("footer.resources")}</li>
              <li>{t("nav.contact")}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t("footer.linkedin")}</li>
              <li>{t("footer.twitter")}</li>
              <li>{t("footer.facebook")}</li>
              <li>{t("footer.instagram")}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.newsletter")}</h4>
            <p className="text-gray-400 mb-4">{t("footer.newsletterText")}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="px-4 py-2 rounded bg-gray-800 text-white"
              />
              <Button>{t("footer.subscribe")}</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
