import { useState } from "react";
import { Menu, Home, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/lovable-uploads/1a610ffa-c35b-4929-9459-6294e1153521.png"
                alt="TSI Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.to} className="flex items-center">
                    <Button variant="ghost" asChild className="pr-1">
                      <Link to={link.to}>{t(link.key)}</Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 -ml-1"
                          aria-label={`${t(link.key)} submenu`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align={isRtl ? "end" : "start"}
                        className="bg-white"
                      >
                        {link.children.map((child) => (
                          <DropdownMenuItem key={child.to} asChild>
                            <Link to={child.to} className="cursor-pointer">
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
                <Button key={link.to} variant="ghost" asChild>
                  <Link to={link.to}>
                    {link.home && (
                      <Home className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                    )}
                    {t(link.key)}
                  </Link>
                </Button>
              );
            })}
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={isRtl ? "right" : "left"} className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-2 mt-8">
                  {LINKS.map((link) => (
                    <div key={link.to} className="flex flex-col">
                      <Button
                        variant="ghost"
                        className={isRtl ? "justify-end" : "justify-start"}
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to={link.to}>
                          {link.home && (
                            <Home className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                          )}
                          {t(link.key)}
                        </Link>
                      </Button>
                      {link.children?.map((child) => (
                        <Button
                          key={child.to}
                          variant="ghost"
                          size="sm"
                          className={`${
                            isRtl ? "justify-end pr-8" : "justify-start pl-8"
                          } text-muted-foreground`}
                          asChild
                          onClick={() => setIsOpen(false)}
                        >
                          <Link to={child.to}>{t(child.key)}</Link>
                        </Button>
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
