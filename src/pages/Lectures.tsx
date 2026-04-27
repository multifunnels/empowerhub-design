import { BookOpen, Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JIcon } from "@/components/JIcon";
import { useTranslation } from "react-i18next";
import inkStroke from "@/assets/jp/ink-stroke.webp";
import tatamiEngawa from "@/assets/jp/tatami-engawa.webp";

const Lectures = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const lectures = t("lectures.items", { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
  }>;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <Breadcrumbs />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <header className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>{t("nav.lectures")}</span>
            <span className="jp">講演</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h1 className="display-jp text-4xl md:text-6xl max-w-3xl mb-6">
            {t("lectures.title")}
          </h1>
          <p className="text-base md:text-lg leading-[1.9] text-muted-foreground max-w-2xl">
            {t("lectures.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-20">
          {lectures.map((lecture, idx) => (
            <article key={idx} className="group bg-background p-10 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <span className="idx text-2xl">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-primary">
                  {lecture.category}
                </span>
              </div>
              <h2 className="display-jp text-xl mb-5 leading-snug">{lecture.title}</h2>
              <p className="text-sm leading-[1.9] text-muted-foreground line-clamp-3 flex-1">
                {lecture.excerpt}
              </p>
              <dl className="mt-8 pt-6 border-t border-border space-y-2 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <JIcon icon={User} size={14} />
                  <span>{lecture.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <JIcon icon={Calendar} size={14} />
                  <span>{lecture.date}</span>
                </div>
              </dl>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground/80 group-hover:text-primary transition-colors duration-500 self-start"
              >
                <JIcon icon={BookOpen} size={14} />
                {t("lectures.readMore")}
                <ArrowIcon className="h-3 w-3" strokeWidth={1.25} />
              </button>
            </article>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="rounded-none" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="rounded-none">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-none">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-none">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="rounded-none" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Lectures;
