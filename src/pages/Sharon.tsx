import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import { Card } from "@/components/ui/card";
import sharonImg from "@/assets/sharon-aizen.png";
import {
  Mic,
  Radio,
  Tv,
  Target,
  DollarSign,
  Users,
  Lightbulb,
  Heart,
  Cog,
  TrendingUp,
  ClipboardCheck,
  Compass,
  ShieldCheck,
  Award,
  Rocket,
  Building2,
  LineChart,
  UsersRound,
  Mail,
  Globe,
  Linkedin,
  Quote,
} from "lucide-react";

const Sharon = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";

  const badges = t("sharon.badges", { returnObjects: true }) as Array<{ title: string; subtitle: string }>;
  const problems = t("sharon.problems", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const framework = t("sharon.framework", { returnObjects: true }) as Array<{ label: string; sub: string; text: string }>;
  const takeaways = t("sharon.takeaways", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const audience = t("sharon.audience", { returnObjects: true }) as Array<{ title: string; text: string }>;

  const badgeIcons = [<Mic className="h-6 w-6" />, <Radio className="h-6 w-6" />, <Tv className="h-6 w-6" />];
  const problemIcons = [<Target className="h-5 w-5" />, <DollarSign className="h-5 w-5" />, <Users className="h-5 w-5" />];
  const frameworkIcons = [
    <Lightbulb className="h-8 w-8" />,
    <Heart className="h-8 w-8" />,
    <Cog className="h-8 w-8" />,
    <TrendingUp className="h-8 w-8" />,
  ];
  const takeawayIcons = [
    <ClipboardCheck className="h-5 w-5" />,
    <Compass className="h-5 w-5" />,
    <ShieldCheck className="h-5 w-5" />,
    <Award className="h-5 w-5" />,
  ];
  const audienceIcons = [
    <Rocket className="h-6 w-6" />,
    <Building2 className="h-6 w-6" />,
    <LineChart className="h-6 w-6" />,
    <UsersRound className="h-6 w-6" />,
  ];

  // Dark navy + gold theme inline (matches reference card)
  const navy = "#0b1430";
  const navyDeep = "#070d22";
  const gold = "#c9a64e";
  const goldLight = "#e7c87a";
  const accentRed = "#7a1a2b";

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />

      <div className="container mx-auto px-4 py-10">
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${navyDeep} 0%, ${navy} 100%)`, color: "#fff" }}
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0">
            <div className="relative bg-black/20 min-h-[380px] lg:min-h-[420px]">
              <img
                src={sharonImg}
                alt={t("sharon.name")}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="hidden lg:block absolute top-0 bottom-0 w-1"
                style={{ background: gold, [isRtl ? "left" : "right"]: 0 } as React.CSSProperties}
              />
            </div>

            <div className="p-8 lg:p-10">
              <h1
                className="text-4xl lg:text-6xl font-extrabold tracking-tight"
                style={{ color: gold, letterSpacing: "0.02em" }}
              >
                {t("sharon.name")}
              </h1>
              <p className="mt-2 text-sm lg:text-base uppercase tracking-widest text-white/80">
                {t("sharon.tagline")}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {badges.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border px-4 py-3"
                    style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
                  >
                    <div
                      className="shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ background: gold, color: navyDeep }}
                    >
                      {badgeIcons[i]}
                    </div>
                    <div className={`text-xs leading-tight ${align}`}>
                      <div className="font-semibold uppercase tracking-wide" style={{ color: goldLight }}>
                        {b.title}
                      </div>
                      <div className="text-white/80">{b.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 px-5 py-2 inline-block text-sm uppercase tracking-widest font-semibold rounded"
                style={{ background: accentRed, color: "#fff" }}
              >
                {t("sharon.keynoteLabel")}: {t("sharon.keynoteTitle")}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left intro + quote + takeaways */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-xl font-bold" style={{ color: gold }}>
                {t("sharon.sectionTitle")}
              </h2>
              <p className={`text-sm leading-relaxed text-white/85 ${align}`}>{t("sharon.intro1")}</p>
              <p className={`text-sm leading-relaxed text-white/85 ${align}`}>
                <span style={{ color: goldLight, fontWeight: 600 }}>{t("sharon.name")}</span> — {t("sharon.intro2")}
              </p>

              <div
                className="rounded-lg border p-5"
                style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
              >
                <Quote className="h-6 w-6 mb-2" style={{ color: gold }} />
                <p className="italic text-base leading-relaxed">{t("sharon.quote")}</p>
                <div className="mt-2 text-sm" style={{ color: goldLight }}>
                  {t("sharon.quoteAuthor")}
                </div>
              </div>

              <div
                className="rounded-lg border p-5"
                style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
              >
                <h3 className="font-bold uppercase tracking-wide mb-4" style={{ color: gold }}>
                  {t("sharon.takeawayTitle")}
                </h3>
                <ul className="space-y-3">
                  {takeaways.map((it, i) => (
                    <li key={i} className="flex gap-3">
                      <div
                        className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
                        style={{ background: gold, color: navyDeep }}
                      >
                        {takeawayIcons[i]}
                      </div>
                      <div className={`text-sm ${align}`}>
                        <span className="font-semibold" style={{ color: goldLight }}>
                          {it.title}:
                        </span>{" "}
                        <span className="text-white/85">{it.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: problem + solution + framework */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="rounded-lg border p-5"
                  style={{ borderColor: `${accentRed}aa`, background: "rgba(122,26,43,0.15)" }}
                >
                  <h3 className="font-bold uppercase tracking-wide mb-3" style={{ color: goldLight }}>
                    {t("sharon.problemTitle")}
                  </h3>
                  <p className={`text-sm text-white/85 mb-4 ${align}`}>{t("sharon.problemIntro")}</p>
                  <ul className="space-y-3">
                    {problems.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <div
                          className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
                          style={{ background: accentRed, color: "#fff" }}
                        >
                          {problemIcons[i]}
                        </div>
                        <div className={`text-sm ${align}`}>
                          <span className="font-semibold" style={{ color: goldLight }}>
                            {p.title}:
                          </span>{" "}
                          <span className="text-white/85">{p.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-lg border p-5"
                  style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
                >
                  <h3 className="font-bold uppercase tracking-wide mb-3" style={{ color: gold }}>
                    {t("sharon.solutionTitle")}
                  </h3>
                  <p className={`text-sm text-white/85 ${align}`}>{t("sharon.solutionText")}</p>
                </div>
              </div>

              <div
                className="rounded-lg border p-6"
                style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
              >
                <h3 className="font-bold uppercase tracking-wide mb-6" style={{ color: gold }}>
                  {t("sharon.frameworkTitle")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {framework.map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center mb-3 text-base font-bold"
                        style={{ background: gold, color: navyDeep }}
                      >
                        {i + 1}
                      </div>
                      <div className="mb-3" style={{ color: goldLight }}>
                        {frameworkIcons[i]}
                      </div>
                      <div className="font-bold text-sm uppercase tracking-wide" style={{ color: goldLight }}>
                        {f.label}
                      </div>
                      <div className="text-xs mb-2 text-white/60">{f.sub}</div>
                      <p className="text-xs leading-relaxed text-white/80">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Audience + Contact */}
          <div className="px-8 lg:px-10 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              className="lg:col-span-2 rounded-lg border p-6"
              style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
            >
              <h3 className="font-bold uppercase tracking-wide mb-4" style={{ color: gold }}>
                {t("sharon.audienceTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audience.map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className="shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ background: accentRed, color: "#fff" }}
                    >
                      {audienceIcons[i]}
                    </div>
                    <div className={`text-sm ${align}`}>
                      <div className="font-semibold uppercase tracking-wide" style={{ color: goldLight }}>
                        {a.title}
                      </div>
                      <div className="text-white/80">{a.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg border p-6"
              style={{ borderColor: `${gold}55`, background: "rgba(255,255,255,0.03)" }}
            >
              <h3 className="font-bold uppercase tracking-wide mb-4" style={{ color: gold }}>
                {t("sharon.contactTitle")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 mt-0.5" style={{ color: goldLight }} />
                  <div className={align}>
                    <div className="text-white/60 text-xs uppercase tracking-wide">{t("sharon.email")}</div>
                    <a href="mailto:sharoni@tsinspire.com" className="hover:underline" style={{ color: "#fff" }}>
                      sharoni@tsinspire.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Globe className="h-5 w-5 mt-0.5" style={{ color: goldLight }} />
                  <div className={align}>
                    <div className="text-white/60 text-xs uppercase tracking-wide">{t("sharon.website")}</div>
                    <a
                      href="https://www.sharonaizen.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline break-all"
                      style={{ color: "#fff" }}
                    >
                      www.sharonaizen.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Linkedin className="h-5 w-5 mt-0.5" style={{ color: goldLight }} />
                  <div className={align}>
                    <div className="text-white/60 text-xs uppercase tracking-wide">{t("sharon.linkedin")}</div>
                    <a
                      href="https://www.linkedin.com/in/sharonizen/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline break-all"
                      style={{ color: "#fff" }}
                    >
                      linkedin.com/in/sharonizen
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharon;
