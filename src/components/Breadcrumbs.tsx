import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Auto-generates breadcrumbs from the current pathname.
 * Skipped on the home page. Last segment is the current page (non-link).
 */
const SEGMENT_KEY: Record<string, string> = {
  about: "nav.about",
  courses: "nav.courses",
  lectures: "nav.lectures",
  recommendations: "nav.recommendations",
  contact: "nav.contact",
  "sharon-aizen": "nav.sharon",
};

export const Breadcrumbs = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isRtl = i18n.dir() === "rtl";

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const sep = isRtl ? "‹" : "›";

  const crumbs = [
    { label: t("nav.home"), to: "/" },
    ...segments.map((seg, i) => ({
      label: SEGMENT_KEY[seg] ? t(SEGMENT_KEY[seg]) : seg,
      to: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-background/60"
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="container mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-[11px] tracking-[0.2em] uppercase"
      >
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li
              key={c.to}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {isLast ? (
                <span
                  itemProp="name"
                  className="text-foreground"
                  aria-current="page"
                >
                  {c.label}
                </span>
              ) : (
                <Link
                  to={c.to}
                  itemProp="item"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <span itemProp="name">{c.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
              {!isLast && (
                <span aria-hidden="true" className="text-muted-foreground/60">
                  {sep}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
