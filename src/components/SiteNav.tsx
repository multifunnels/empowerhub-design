import { useState } from "react";
import { Menu, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const LINKS: Array<{ to: string; key: string; home?: boolean }> = [
  { to: "/", key: "nav.home", home: true },
  { to: "/courses", key: "nav.courses" },
  { to: "/about", key: "nav.about" },
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
            {LINKS.map((link) => (
              <Button key={link.to} variant="ghost" asChild>
                <Link to={link.to}>
                  {link.home && <Home className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />}
                  {t(link.key)}
                </Link>
              </Button>
            ))}
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
                <div className="flex flex-col gap-4 mt-8">
                  {LINKS.map((link) => (
                    <Button
                      key={link.to}
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
