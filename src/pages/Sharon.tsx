import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import sharonImg from "@/assets/sharon-aizen.png";
import {
  Clock,
  Users,
  BarChart3,
  Mic,
  Presentation,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  ChevronsRight,
  ChevronsLeft,
  UserCog,
  CalendarDays,
  Target,
} from "lucide-react";

// Poster palette (locked — do not theme through tokens)
const NAVY_DEEP = "#04081f";
const NAVY = "#0a1438";
const NAVY_MID = "#101f55";
const CYAN = "#3ec6ff";
const CYAN_SOFT = "#7fd8ff";

const DottedGlobe = () => (
  // Decorative right-side dotted globe + flowing curves
  <svg
    aria-hidden="true"
    viewBox="0 0 700 700"
    className="pointer-events-none absolute -right-24 top-10 hidden h-[120%] w-[700px] opacity-70 md:block"
  >
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={CYAN} stopOpacity="0.25" />
        <stop offset="60%" stopColor={CYAN} stopOpacity="0.05" />
        <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="350" cy="350" r="320" fill="url(#glow)" />
    {Array.from({ length: 28 }).map((_, ringIdx) => {
      const r = 60 + ringIdx * 10;
      const dots = Math.round(r / 4);
      return Array.from({ length: dots }).map((_, i) => {
        const angle = (i / dots) * Math.PI * 2;
        const cx = 350 + Math.cos(angle) * r;
        const cy = 350 + Math.sin(angle) * r * 0.92;
        const opacity = 0.15 + Math.random() * 0.45;
        return (
          <circle
            key={`${ringIdx}-${i}`}
            cx={cx}
            cy={cy}
            r={1.1}
            fill={CYAN}
            opacity={opacity}
          />
        );
      });
    })}
    {/* flowing lines */}
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M -50 ${420 + i * 28} C 180 ${380 + i * 18}, 420 ${520 + i * 22}, 760 ${360 + i * 26}`}
        fill="none"
        stroke={CYAN}
        strokeOpacity={0.25 - i * 0.03}
        strokeWidth={1}
      />
    ))}
  </svg>
);

const ColumnDivider = () => (
  <div
    aria-hidden="true"
    className="hidden md:block w-px self-stretch"
    style={{ background: `linear-gradient(to bottom, transparent, ${CYAN}40, transparent)` }}
  />
);

type BringItem = { bold: string; text: string };
type OfferItem = { label: string; description: string };

const Sharon = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const Chevrons = isRtl ? ChevronsLeft : ChevronsRight;

  const whyNowItems = t("sharon.whyNowItems", { returnObjects: true }) as string[];
  const bringsItems = t("sharon.bringsItems", { returnObjects: true }) as BringItem[];
  const gainsItems = t("sharon.gainsItems", { returnObjects: true }) as string[];
  const offers = t("sharon.offers", { returnObjects: true }) as OfferItem[];
  const trustedBy = t("sharon.trustedBy", { returnObjects: true }) as string[];

  const OFFER_ICONS = [
    <UserCog className="h-6 w-6" strokeWidth={1.4} />,
    <Users className="h-6 w-6" strokeWidth={1.4} />,
    <Mic className="h-6 w-6" strokeWidth={1.4} />,
    <GraduationCap className="h-6 w-6" strokeWidth={1.4} />,
    <CalendarDays className="h-6 w-6" strokeWidth={1.4} />,
    <Target className="h-6 w-6" strokeWidth={1.4} />,
  ];

  return (
    <div className="min-h-screen" style={{ background: NAVY_DEEP }}>
      <SiteNav />

      <div className="container mx-auto px-3 py-8 sm:px-6 sm:py-12">
        <article
          dir={isRtl ? "rtl" : "ltr"}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: `linear-gradient(160deg, ${NAVY_DEEP} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`,
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          <DottedGlobe />

          <div className="relative z-10 px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            {/* Top bar */}
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/tsi-logo.png"
                  alt="TSI — Think Success Inspire"
                  className="h-14 w-auto sm:h-16"
                />
                <div
                  aria-hidden="true"
                  className="hidden h-14 w-px sm:block"
                  style={{ background: `${CYAN}55` }}
                />
              </div>

              <div className="flex flex-1 items-center justify-end gap-5">
                <div className="text-right">
                  <h1
                    className="text-xl font-light tracking-[0.28em] sm:text-2xl lg:text-3xl"
                    style={{ color: CYAN }}
                  >
                    {t("sharon.name")}
                  </h1>
                  <p className="mt-1 text-[11px] tracking-wide text-white/75 sm:text-sm">
                    {t("sharon.subline")}
                  </p>
                </div>
                <div
                  className="relative shrink-0 overflow-hidden rounded-full h-32 w-32 sm:h-44 sm:w-44 lg:h-56 lg:w-56"
                  style={{
                    border: `3px solid ${CYAN}`,
                    boxShadow: `0 0 0 6px ${NAVY}, 0 0 60px ${CYAN}66`,
                  }}
                >
                  <img
                    src={sharonImg}
                    alt="Sharon Aizen"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                    decoding="async"
                  />
                </div>
              </div>
            </header>

            {/* Hero headline */}
            <div className="mt-10 max-w-[640px]">
              <h2 className="font-bold leading-[1.05] text-white" style={{ fontSize: "clamp(2.2rem, 5.4vw, 4.2rem)" }}>
                {t("sharon.headlineA")}
                <br />
                {t("sharon.headlineB")}
                <br />
                <span style={{ color: CYAN }}>{t("sharon.headlineAccent")}</span>
              </h2>

              <div
                className={`mt-6 ${isRtl ? "border-r-2 pr-4" : "border-l-2 pl-4"} text-white/85`}
                style={{ borderColor: CYAN }}
              >
                <p className="text-base sm:text-lg">
                  {t("sharon.lede")}
                  <span className="font-semibold" style={{ color: CYAN_SOFT }}>
                    {t("sharon.ledeBold")}
                  </span>
                </p>
              </div>
            </div>

            {/* Pull-quote tile */}
            <div
              className="relative mt-8 max-w-[640px] rounded-xl px-5 py-5 sm:px-7 sm:py-6"
              style={{ border: `1px solid ${CYAN}55`, background: `${CYAN}08` }}
            >
              <div className="flex items-start gap-4">
                <Chevrons className="h-9 w-9 shrink-0" style={{ color: CYAN }} strokeWidth={2} />
                <div className="text-white/95">
                  <p className="text-base sm:text-lg leading-snug">{t("sharon.pullQuote1")}</p>
                  <p className="text-base sm:text-lg leading-snug">{t("sharon.pullQuote2")}</p>
                  <p className="mt-1 text-lg sm:text-xl font-semibold" style={{ color: CYAN_SOFT }}>
                    {t("sharon.pullQuote3")}
                  </p>
                </div>
              </div>
            </div>

            {/* Three columns */}
            <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6">
              {/* WHY NOW */}
              <div>
                <IconCircle><Clock className="h-6 w-6" strokeWidth={1.4} /></IconCircle>
                <h3 className="mt-4 text-sm font-semibold tracking-[0.22em]" style={{ color: CYAN }}>
                  {t("sharon.whyNowTitle")}
                </h3>
                <div className="mt-4 space-y-4 text-sm text-white/80 leading-relaxed">
                  {whyNowItems.map((item, i) => (
                    <div key={i}>
                      <p>{item}</p>
                      {i < whyNowItems.length - 1 && (
                        <div className="mt-4 h-px w-16" style={{ background: `${CYAN}55` }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <ColumnDivider />

              {/* WHAT SHARON BRINGS */}
              <div>
                <IconCircle><Users className="h-6 w-6" strokeWidth={1.4} /></IconCircle>
                <h3 className="mt-4 text-sm font-semibold tracking-[0.22em]" style={{ color: CYAN }}>
                  {t("sharon.bringsTitle")}
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-white/85 leading-relaxed">
                  {bringsItems.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: CYAN }} strokeWidth={1.6} />
                      <span>
                        {item.bold && <strong className="font-semibold text-white">{item.bold}</strong>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <ColumnDivider />

              {/* WHAT ORGANIZATIONS GAIN */}
              <div>
                <IconCircle><BarChart3 className="h-6 w-6" strokeWidth={1.4} /></IconCircle>
                <h3 className="mt-4 text-sm font-semibold tracking-[0.22em]" style={{ color: CYAN }}>
                  {t("sharon.gainsTitle")}
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-white/85 leading-relaxed">
                  {gainsItems.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: CYAN }} strokeWidth={1.6} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* How I can help — 6 offers */}
            <section className="mt-14">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: `${CYAN}40` }} />
                <h3 className="text-sm font-semibold tracking-[0.22em] sm:text-base" style={{ color: CYAN }}>
                  {t("sharon.offersTitle")}
                </h3>
                <div className="h-px flex-1" style={{ background: `${CYAN}40` }} />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {offers.map((o, i) => (
                  <div key={i} className="flex flex-col items-start gap-3">
                    <IconCircle>{OFFER_ICONS[i] ?? <Presentation className="h-6 w-6" strokeWidth={1.4} />}</IconCircle>
                    <div className="text-sm font-semibold text-white sm:text-base">{o.label}</div>
                    <p className="text-xs leading-relaxed text-white/70 sm:text-sm">{o.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Trusted-by strip + CTA */}
            <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
              <div>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1" style={{ background: `${CYAN}40` }} />
                  <h4 className="text-xs font-semibold tracking-[0.2em] sm:text-sm" style={{ color: CYAN }}>
                    {t("sharon.trustedByTitle")}
                  </h4>
                  <div className="h-px flex-1" style={{ background: `${CYAN}40` }} />
                </div>
                <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/85">
                  {trustedBy.map((name, i) => (
                    <li key={i} className="flex items-center gap-6">
                      {i > 0 && <span className="h-4 w-px" style={{ background: `${CYAN}55` }} aria-hidden />}
                      <span className={i === 0 ? "font-semibold tracking-wide text-white" : ""}>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ border: `1px solid ${CYAN}55`, background: `${CYAN}10` }}
              >
                <p className="text-sm font-semibold text-white sm:text-base">{t("sharon.ctaTitle")}</p>
                <p className="mt-2 text-xs text-white/80 sm:text-sm">{t("sharon.ctaBody")}</p>
                <a
                  href={`mailto:${t("sharon.email")}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                  style={{ background: CYAN, color: NAVY_DEEP }}
                >
                  {t("sharon.ctaButton")}
                  <Chevrons className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </section>

            {/* Contact strip */}
            <div
              className="mt-10 flex flex-col items-center justify-center gap-4 rounded-full border px-6 py-4 sm:flex-row sm:gap-8"
              style={{ borderColor: `${CYAN}55`, background: `${CYAN}08` }}
            >
              <a
                href={`mailto:${t("sharon.email")}`}
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white sm:text-base"
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ border: `1px solid ${CYAN}80`, color: CYAN }}
                >
                  <Mail className="h-4 w-4" strokeWidth={1.6} />
                </span>
                {t("sharon.email")}
              </a>
              <div className="hidden h-6 w-px sm:block" style={{ background: `${CYAN}55` }} />
              <a
                href={`tel:${(t("sharon.phone") as string).replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white sm:text-base"
                dir="ltr"
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ border: `1px solid ${CYAN}80`, color: CYAN }}
                >
                  <Phone className="h-4 w-4" strokeWidth={1.6} />
                </span>
                {t("sharon.phone")}
              </a>
              <div className="hidden h-6 w-px sm:block" style={{ background: `${CYAN}55` }} />
              <a
                href={`https://${t("sharon.website")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white sm:text-base"
                dir="ltr"
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ border: `1px solid ${CYAN}80`, color: CYAN }}
                >
                  <Globe className="h-4 w-4" strokeWidth={1.6} />
                </span>
                {t("sharon.website")}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const IconCircle = ({ children }: { children: React.ReactNode }) => (
  <span
    className="grid h-11 w-11 place-items-center rounded-full"
    style={{ border: `1px solid ${CYAN}80`, color: CYAN }}
  >
    {children}
  </span>
);

export default Sharon;
