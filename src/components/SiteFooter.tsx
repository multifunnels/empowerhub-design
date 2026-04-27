import { useTranslation } from "react-i18next";
import { Enso } from "@/components/JIcon";
import kanjiMark from "@/assets/jp/kanji-mark.png";

export const SiteFooter = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  return (
    <footer className="sumi-panel relative border-t border-border mt-0 overflow-hidden">
      {/* large kanji watermark */}
      <div
        className="kanji-mark-bg"
        style={{
          backgroundImage: `url(${kanjiMark})`,
          top: "0",
          [isRtl ? "left" : "right"]: "-6%",
          width: "640px",
          height: "640px",
        }}
        aria-hidden="true"
      />
      {/* faint enso watermark */}
      <div
        className={`absolute -top-12 ${isRtl ? "-right-12" : "-left-12"} text-primary opacity-20 pointer-events-none`}
        aria-hidden="true"
      >
        <Enso size={260} />
      </div>

      <div className="container px-6 py-24 lg:py-32 relative">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${align}`}>
          <div>
            <div className="eyebrow">
              <span>TSI</span>
              <span className="jp">会社</span>
            </div>
            <p className="mt-6 text-sm leading-[1.9] text-white/65 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <div className="eyebrow">
              <span>{t("footer.quickLinks")}</span>
              <span className="jp">案内</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
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
            <ul className="mt-6 space-y-3 text-sm text-white/80">
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
            <p className="mt-6 text-sm leading-[1.9] text-white/65">
              {t("footer.newsletterText")}
            </p>
            <form className="mt-6 flex items-end gap-4">
              <input
                type="email"
                aria-label={t("footer.emailPlaceholder")}
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 bg-transparent border-0 border-b border-white/30 px-0 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors duration-300"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.28em] text-white hover:text-primary transition-colors duration-500 pb-3 border-b border-white/40 hover:border-primary"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
            {t("footer.rights")}
          </p>
          <p className="text-[11px] tracking-[0.18em] text-primary/90" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            想 ・ 成 ・ 啓
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
