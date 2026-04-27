import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import sharonImg from "@/assets/sharon-aizen.png";
import {
  Mic,
  Tv as TvIcon,
  Newspaper,
  Lightbulb,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Building2,
  DollarSign,
  Network,
  Mail,
  Globe,
  Linkedin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// Color palette inspired by the reference poster
const NAVY_DEEP = "#040a1f";
const NAVY = "#0a1535";
const NAVY_MID = "#102050";
const GOLD = "#d4a84a";
const GOLD_LIGHT = "#e7c87a";

const STEP_COLORS = [
  { ring: "#3b82f6", glow: "rgba(59,130,246,0.18)" }, // blue
  { ring: "#14b8a6", glow: "rgba(20,184,166,0.18)" }, // teal
  { ring: "#a855f7", glow: "rgba(168,85,247,0.18)" }, // purple
  { ring: "#f59e0b", glow: "rgba(245,158,11,0.18)" }, // amber
];

const STEP_ICONS = [
  <Lightbulb className="h-9 w-9" strokeWidth={1.5} />,
  <Users className="h-9 w-9" strokeWidth={1.5} />,
  <Target className="h-9 w-9" strokeWidth={1.5} />,
  <TrendingUp className="h-9 w-9" strokeWidth={1.5} />,
];

const AUDIENCE_ICONS = [
  <Rocket className="h-5 w-5" />,
  <Building2 className="h-5 w-5" />,
  <DollarSign className="h-5 w-5" />,
  <Network className="h-5 w-5" />,
];

const Sharon = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const framework = t("sharon.framework", { returnObjects: true }) as Array<{
    label: string;
    sub: string;
    text: string;
  }>;
  const takeaways = t("sharon.takeaways", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const audience = t("sharon.audience", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />

      <div className="container mx-auto px-4 py-10">
        <article
          dir={isRtl ? "rtl" : "ltr"}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          style={{
            color: "#fff",
            background: `
              radial-gradient(1200px 600px at 50% 95%, ${NAVY_MID} 0%, transparent 60%),
              radial-gradient(900px 500px at 85% 30%, rgba(59,130,246,0.18) 0%, transparent 55%),
              linear-gradient(160deg, ${NAVY_DEEP} 0%, ${NAVY} 55%, ${NAVY_DEEP} 100%)
            `,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {/* City-lights horizontal glow band */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-1/3 h-px opacity-60"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(212,168,74,0.25) 30%, rgba(59,130,246,0.5) 50%, rgba(212,168,74,0.25) 70%, transparent 100%)",
              boxShadow:
                "0 0 80px 30px rgba(59,130,246,0.18), 0 0 200px 60px rgba(168,85,247,0.08)",
            }}
          />
          {/* Faux city skyline silhouette using stripes */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-30"
            style={{
              background: `
                repeating-linear-gradient(90deg,
                  transparent 0 12px,
                  rgba(255,255,255,0.04) 12px 14px,
                  transparent 14px 30px),
                linear-gradient(180deg, transparent 0%, ${NAVY_DEEP} 90%)
              `,
              maskImage:
                "linear-gradient(180deg, transparent 0%, #000 60%, #000 100%)",
            }}
          />

          {/* TOP SECTION: headline + photo */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-0">
            {/* Left: headline + bio */}
            <div className="px-8 lg:px-12 pt-10 lg:pt-14 pb-2 relative z-10">
              <h1
                className="font-display font-light tracking-[0.05em] leading-none text-white"
                style={{ fontSize: "clamp(2.25rem, 5.4vw, 4.75rem)" }}
              >
                {t("sharon.name")}
              </h1>
              <p
                className="mt-3 font-display uppercase tracking-[0.2em] text-sm lg:text-base"
                style={{ color: GOLD_LIGHT }}
              >
                {t("sharon.tagline")}
              </p>

              <div className="mt-8">
                <h2
                  className="font-display font-bold leading-[0.95] tracking-tight"
                  style={{
                    fontSize: "clamp(2rem, 4.6vw, 4rem)",
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #6aa6ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("sharon.headline1")}
                </h2>
                <h2
                  className="font-display font-bold leading-[0.95] tracking-tight mt-1"
                  style={{
                    fontSize: "clamp(2rem, 4.6vw, 4rem)",
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #6aa6ff 60%, #2563eb 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("sharon.headline2")}
                </h2>
                <p
                  className="mt-4 text-lg lg:text-xl"
                  style={{ color: GOLD_LIGHT }}
                >
                  {t("sharon.sectionTitle")}
                </p>
              </div>

              <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/85">
                <p className={align}>{t("sharon.intro1")}</p>
                <p className={align}>
                  <span className="font-semibold text-white">
                    {t("sharon.name")},
                  </span>{" "}
                  {t("sharon.intro2")}
                </p>
              </div>
            </div>

            {/* Right: photo + "as seen on" card */}
            <div className="relative lg:min-h-[600px]">
              {/* photo wrapper — owns its own height on mobile so the card can flow below */}
              <div className="relative h-[60vh] min-h-[360px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
                {/* feathered photo */}
                <img
                  src={sharonImg}
                  alt={t("sharon.name")}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    objectPosition: isRtl ? "left center" : "right center",
                    WebkitMaskImage: isRtl
                      ? "linear-gradient(90deg, transparent 0%, #000 30%, #000 100%)"
                      : "linear-gradient(270deg, transparent 0%, #000 30%, #000 100%)",
                    maskImage: isRtl
                      ? "linear-gradient(90deg, transparent 0%, #000 30%, #000 100%)"
                      : "linear-gradient(270deg, transparent 0%, #000 30%, #000 100%)",
                  }}
                />
                {/* navy bottom blend so photo melts into the card */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 60%, ${NAVY} 100%)`,
                  }}
                />
              </div>

              {/* As seen & heard on — flows below photo on mobile, absolute on lg+ */}
              <div
                className={`relative mt-6 mx-6 lg:mt-0 lg:mx-0 lg:absolute lg:top-6 ${isRtl ? "lg:left-6" : "lg:right-6"} z-10 rounded-lg backdrop-blur-sm`}
                style={{
                  border: `1px solid ${GOLD}55`,
                  background: "rgba(4,10,31,0.55)",
                  boxShadow: `0 0 0 1px ${GOLD}22 inset`,
                  padding: "14px 18px",
                  width: "auto",
                  maxWidth: "min(280px, 100%)",
                  marginInline: "auto",
                }}
              >
                <div
                  className="text-[10px] font-display uppercase tracking-[0.25em] text-center pb-2 mb-2"
                  style={{
                    color: GOLD_LIGHT,
                    borderBottom: `1px solid ${GOLD}33`,
                  }}
                >
                  {t("sharon.seenOnTitle")}
                </div>
                <div className="grid grid-cols-2 gap-3 items-start">
                  <div className="flex flex-col gap-1">
                    <div
                      className="font-display font-bold text-2xl leading-none"
                      style={{ color: "#e23b3b" }}
                    >
                      106<span className="text-base">FM</span>
                    </div>
                    <div className="text-[10px] text-white/80 leading-tight">
                      {t("sharon.seenOnRadio")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TvIcon className="h-7 w-7 text-white/85" strokeWidth={1.4} />
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-white/90 leading-tight">
                      {t("sharon.seenOnTv")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 pt-2 mt-1" style={{ borderTop: `1px solid ${GOLD}22` }}>
                    <Newspaper className="h-7 w-7 text-white/85" strokeWidth={1.4} />
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-white/90 leading-tight">
                      {t("sharon.seenOnPress")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FRAMEWORK SECTION */}
          <div className="relative px-8 lg:px-12 pt-4 pb-10">
            <div className="flex items-center gap-4 mb-8">
              <h3
                className="font-display uppercase tracking-[0.15em] text-lg lg:text-xl whitespace-nowrap"
                style={{ color: GOLD }}
              >
                {t("sharon.frameworkTitle")}
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: `linear-gradient(90deg, ${GOLD}88, transparent)` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
              {framework.map((f, i) => {
                const c = STEP_COLORS[i];
                const isLast = i === framework.length - 1;
                return (
                  <div key={i} className="relative">
                    <div
                      className="rounded-xl p-5 h-full transition-transform hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        border: `1px solid ${c.ring}55`,
                        boxShadow: `0 0 40px ${c.glow}, inset 0 0 0 1px rgba(255,255,255,0.02)`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="h-9 w-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                          style={{
                            background: c.ring,
                            color: NAVY_DEEP,
                            boxShadow: `0 0 20px ${c.glow}`,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div
                            className="font-display font-bold uppercase tracking-wide text-sm leading-tight"
                            style={{ color: c.ring }}
                          >
                            {f.label}
                          </div>
                          <div className="text-[11px] text-white/55 leading-tight mt-0.5">
                            {f.sub}
                          </div>
                        </div>
                      </div>

                      <div
                        className="my-4 flex justify-center"
                        style={{ color: c.ring }}
                      >
                        {STEP_ICONS[i]}
                      </div>

                      <p className={`text-[13px] leading-relaxed text-white/80 ${align}`}>
                        {f.text}
                      </p>
                    </div>

                    {/* Dashed connector arrow */}
                    {!isLast && (
                      <div
                        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${
                          isRtl ? "-left-3" : "-right-3"
                        } items-center z-10`}
                        aria-hidden
                      >
                        <Arrow
                          className="h-5 w-5"
                          style={{ color: `${GOLD}cc` }}
                          strokeWidth={1.5}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM ROW: takeaways + audience + book/quote */}
          <div className="relative px-8 lg:px-12 pb-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr] gap-8">
            {/* Takeaways */}
            <div>
              <h3
                className="font-display uppercase tracking-[0.15em] text-base lg:text-lg mb-5"
                style={{ color: GOLD }}
              >
                {t("sharon.takeawayTitle")}
              </h3>
              <ul className="space-y-3">
                {takeaways.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 shrink-0"
                      style={{ color: "#3b82f6" }}
                      strokeWidth={1.8}
                    />
                    <p className={`text-[13.5px] leading-relaxed ${align}`}>
                      <span className="font-semibold text-white">
                        {it.title}:
                      </span>{" "}
                      <span className="text-white/75 italic">{it.text}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div>
              <h3
                className="font-display uppercase tracking-[0.15em] text-base lg:text-lg mb-5"
                style={{ color: GOLD }}
              >
                {t("sharon.audienceTitle")}
              </h3>
              <ul className="space-y-3.5">
                {audience.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(59,130,246,0.12)",
                        border: `1px solid ${STEP_COLORS[i % 4].ring}66`,
                        color: STEP_COLORS[i % 4].ring,
                      }}
                    >
                      {AUDIENCE_ICONS[i]}
                    </div>
                    <div className={align}>
                      <div className="font-semibold text-white text-[14px] leading-tight">
                        {a.title}
                      </div>
                      <div className="text-[12.5px] text-white/65 italic leading-snug">
                        {a.text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book + Quote */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                {/* CSS book mockup */}
                <div
                  className="relative shrink-0"
                  style={{
                    width: 110,
                    height: 160,
                    perspective: "800px",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-sm overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)",
                      boxShadow:
                        "0 20px 40px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset -3px 0 0 rgba(0,0,0,0.15)",
                      transform: "rotateY(-12deg)",
                      transformOrigin: "left center",
                    }}
                  >
                    {/* Top title */}
                    <div
                      className="absolute top-3 left-0 right-0 text-center font-display font-bold text-[11px] tracking-tight leading-tight"
                      style={{ color: "#1a1a1a" }}
                    >
                      CREATING
                      <br />
                      RESULTS
                    </div>
                    {/* Swirl */}
                    <div
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "55%",
                        transform: "translate(-50%, -50%)",
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background:
                          "conic-gradient(from 200deg, #f59e0b, #ef4444, #a855f7, #3b82f6, #14b8a6, #f59e0b)",
                        filter: "blur(0.5px)",
                        maskImage:
                          "radial-gradient(circle, #000 30%, transparent 75%)",
                      }}
                    />
                    <div
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "55%",
                        transform: "translate(-50%, -50%)",
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                    {/* Author */}
                    <div
                      className="absolute bottom-3 left-0 right-0 text-center font-display font-semibold text-[9px] tracking-wider"
                      style={{ color: "#1a1a1a" }}
                    >
                      SHARON AIZEN
                    </div>
                  </div>
                </div>

                <div className={align}>
                  <div
                    className="font-display uppercase text-[11px] tracking-[0.2em] mb-1"
                    style={{ color: GOLD_LIGHT }}
                  >
                    {t("sharon.bookTitle")}
                  </div>
                  <div className="font-display font-bold text-white text-lg leading-tight">
                    "{t("sharon.bookName")}"
                  </div>
                  <div className="text-[12.5px] text-white/65 italic mt-1.5 leading-snug">
                    {t("sharon.bookSubtitle")}
                  </div>
                </div>
              </div>

              <div
                className="relative pl-5 pr-5 py-3"
                style={{
                  borderLeft: !isRtl ? `2px solid ${GOLD}66` : undefined,
                  borderRight: isRtl ? `2px solid ${GOLD}66` : undefined,
                }}
              >
                <p
                  className={`italic text-[14px] leading-relaxed text-white/90 ${align}`}
                >
                  <span className="text-2xl leading-none" style={{ color: GOLD }}>
                    "
                  </span>
                  {t("sharon.quote")}
                  <span className="text-2xl leading-none" style={{ color: GOLD }}>
                    "
                  </span>
                </p>
                <div
                  className={`mt-1 text-[12px] ${align}`}
                  style={{ color: GOLD_LIGHT }}
                >
                  {t("sharon.quoteAuthor")}
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT STRIP */}
          <div
            className="relative px-8 lg:px-12 py-6"
            style={{
              borderTop: `1px solid ${GOLD}33`,
              background: "rgba(4,10,31,0.5)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <a
                href="mailto:sharoni@tsinspire.com"
                className="flex items-center gap-3 group"
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    border: `1px solid ${GOLD}66`,
                    color: GOLD_LIGHT,
                  }}
                >
                  <Mail className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-white text-sm group-hover:underline">
                  sharoni@tsinspire.com
                </span>
              </a>

              <a
                href="https://www.sharonaizen.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group md:justify-center"
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${GOLD}66`, color: GOLD_LIGHT }}
                >
                  <Globe className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-white text-sm group-hover:underline">
                  www.sharonaizen.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/sharonizen/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group md:justify-end"
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "#0a66c2",
                    color: "#fff",
                  }}
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <span className="text-white text-sm group-hover:underline">
                  linkedin.com/in/sharonizen
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Sharon;
