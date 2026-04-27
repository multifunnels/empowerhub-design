import { useTranslation } from "react-i18next";
import { Enso } from "@/components/JIcon";

export const SiteFooter = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  return (
    <footer className="relative bg-muted/60 border-t border-border mt-24 overflow-hidden">
      {/* faint enso watermark */}
      <div
        className={`absolute -top-20 ${isRtl ? "-left-20" : "-right-20"} text-primary opacity-[0.07] pointer-events-none`}
        aria-hidden="true"
      >
        <Enso size={320} />
      </div>

      <div className="container px-6 py-20 lg:py-28 relative">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${align}`}>
          <div>
            <div className="eyebrow">
              <span>TSI</span>
              <span className="jp">会社</span>
            </div>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <div className="eyebrow">
              <span>{t("footer.quickLinks")}</span>
              <span className="jp">案内</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>{t("nav.about")}</li>
              <li>{t("nav.courses")}</li>
              <li>{t("footer.resources")}</li>
              <li>{t("nav.contact")}</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow">
              <span>{t("footer.connect")}</span>
              <span className="jp">繋がる</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>{t("footer.linkedin")}</li>
              <li>{t("footer.twitter")}</li>
              <li>{t("footer.facebook")}</li>
              <li>{t("footer.instagram")}</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow">
              <span>{t("footer.newsletter")}</span>
              <span className="jp">通信</span>
            </div>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
              {t("footer.newsletterText")}
            </p>
            <form className="mt-6 flex items-end gap-4">
              <input
                type="email"
                aria-label={t("footer.emailPlaceholder")}
                placeholder={t("footer.emailPlaceholder")}
                className="hairline-input flex-1 text-sm"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.28em] text-foreground hover:text-primary transition-colors duration-500 pb-3 border-b border-foreground/40 hover:border-primary"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            {t("footer.rights")}
          </p>
          <p className="text-[11px] tracking-[0.18em] text-muted-foreground/70" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            想 ・ 成 ・ 啓
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
