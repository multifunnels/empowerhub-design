import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { KanjiMenu } from "@/components/JIcon";

type NavLink = {
  to: string;
  key: string;
  home?: boolean;
  children?: Array<{ to: string; key: string }>;
};

const LINKS: NavLink[] = [
  { to: "/", key: "nav.home", home: true },
  { to: "/courses", key: "nav.courses" },
  {
    to: "/about",
    key: "nav.about",
    children: [{ to: "/sharon-aizen", key: "nav.sharon" }],
  },
  { to: "/recommendations", key: "nav.recommendations" },
  { to: "/lectures", key: "nav.lectures" },
  { to: "/contact", key: "nav.contact" },
];

export const SiteNav = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = i18n.dir() === "rtl";
  const { pathname } = useLocation();

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  const linkClasses = (active: boolean) =>
    `relative inline-flex items-center px-3 py-2 text-[11px] uppercase tracking-[0.28em] font-medium transition-colors duration-500 ${
      active ? "text-primary" : "text-foreground/75 hover:text-foreground"
    }`;

  const underline = (active: boolean) =>
    `absolute left-3 right-3 -bottom-[1px] h-px transition-all duration-500 ${
      active ? "bg-primary scale-x-100" : "bg-foreground scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" aria-label="TSI">
            <img
              src="/lovable-uploads/1a610ffa-c35b-4929-9459-6294e1153521.png"
              alt="TSI Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => {
              const active = isActive(link.to);
              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.to} className="flex items-center group">
                    <Link to={link.to} className={linkClasses(active)}>
                      {t(link.key)}
                      <span className={underline(active)} />
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className="h-8 w-6 inline-flex items-center justify-center text-foreground/60 hover:text-primary transition-colors duration-500"
                        aria-label={`${t(link.key)} submenu`}
                      >
                        <ChevronDown className="h-3 w-3" strokeWidth={1.25} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align={isRtl ? "end" : "start"}
                        className="bg-background border border-border rounded-none shadow-none min-w-[180px] p-0"
                      >
                        {link.children.map((child) => (
                          <DropdownMenuItem
                            key={child.to}
                            asChild
                            className="rounded-none focus:bg-muted/60 px-4 py-3"
                          >
                            <Link
                              to={child.to}
                              className="cursor-pointer text-[12px] uppercase tracking-[0.22em] text-foreground/80 hover:text-primary"
                            >
                              {t(child.key)}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              return (
                <Link key={link.to} to={link.to} className={`group ${linkClasses(active)}`}>
                  {t(link.key)}
                  <span className={underline(active)} />
                </Link>
              );
            })}
            <div className="ms-4 ps-4 border-s border-border">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="p-2 text-foreground/80 hover:text-primary transition-colors"
                  aria-label={t("eyebrows.menu")}
                >
                  <KanjiMenu size={22} />
                </button>
              </SheetTrigger>
              <SheetContent
                side={isRtl ? "right" : "left"}
                className="w-[320px] bg-background border-border p-0"
              >
                <div className="flex flex-col gap-1 mt-12 px-8">
                  <div className="eyebrow mb-10">
                    <span>{t("eyebrows.menu")}</span>
                    <span className="jp">目次</span>
                  </div>
                  {LINKS.map((link) => (
                    <div key={link.to} className="flex flex-col">
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`py-3 text-[13px] uppercase tracking-[0.28em] border-b border-border ${
                          isActive(link.to) ? "text-primary" : "text-foreground/80 hover:text-primary"
                        } transition-colors`}
                      >
                        {t(link.key)}
                      </Link>
                      {link.children?.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setIsOpen(false)}
                          className={`py-3 ps-6 text-[12px] uppercase tracking-[0.22em] border-b border-border text-muted-foreground hover:text-primary transition-colors`}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
