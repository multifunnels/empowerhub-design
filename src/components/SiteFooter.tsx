import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import kanjiMark from "@/assets/jp/kanji-mark.webp";

const emailSchema = z
  .string()
  .trim()
  .email()
  .max(255);

export const SiteFooter = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(t("footer.newsletterInvalid"));
      return;
    }
    setSubmitting(true);
    // No backend wired — show acknowledged feedback.
    setTimeout(() => {
      toast.success(t("footer.newsletterSuccess"));
      setEmail("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <footer className="sumi-panel relative border-t border-border mt-0 overflow-hidden">
      {/* large kanji watermark — calmed down from 640px to 420px */}
      <img
        src={kanjiMark}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute pointer-events-none select-none"
        style={{
          top: 0,
          [isRtl ? "left" : "right"]: "-4%",
          width: 420,
          height: 420,
          opacity: 0.08,
          mixBlendMode: "screen",
          objectFit: "contain",
        }}
      />

      <div className="container px-6 py-24 lg:py-32 relative">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${align}`}>
          <div>
            <div className="eyebrow">
              <span>{t("eyebrows.company")}</span>
              <span className="jp">会社</span>
            </div>
            <p className="mt-6 text-sm leading-[1.9] text-white/80 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <div className="eyebrow">
              <span>{t("footer.quickLinks")}</span>
              <span className="jp">案内</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
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
            <ul className="mt-6 space-y-3 text-sm text-white/85">
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
            <p className="mt-6 text-sm leading-[1.9] text-white/80">
              {t("footer.newsletterText")}
            </p>
            <form className="mt-6 flex items-end gap-4" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label={t("footer.emailPlaceholder")}
                placeholder={t("footer.emailPlaceholder")}
                maxLength={255}
                required
                className="flex-1 bg-transparent border-0 border-b border-white/40 px-0 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-primary transition-colors duration-300"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                disabled={submitting}
                className="text-[11px] uppercase tracking-[0.28em] text-white hover:text-primary transition-colors duration-500 pb-3 border-b border-white/50 hover:border-primary disabled:opacity-50"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
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
