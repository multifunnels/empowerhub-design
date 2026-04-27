import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setStoredLang, type SupportedLang } from "@/i18n";

const LABELS: Record<SupportedLang, string> = {
  he: "עברית",
  en: "English",
  ja: "日本語",
};

const SHORT: Record<SupportedLang, string> = {
  he: "HE",
  en: "EN",
  ja: "日本語",
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = (["he", "en", "ja"].includes(i18n.language)
    ? i18n.language
    : "en") as SupportedLang;

  const change = (lang: SupportedLang) => {
    setStoredLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <Globe className="h-4 w-4" />
          <span className="text-sm">{SHORT[current]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(["he", "en", "ja"] as SupportedLang[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => change(lang)}
            className={current === lang ? "font-semibold" : ""}
          >
            {LABELS[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
