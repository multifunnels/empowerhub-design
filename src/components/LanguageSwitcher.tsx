import { useTranslation } from "react-i18next";
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
      <DropdownMenuTrigger
        className="inline-flex items-center gap-2 px-2 py-1 text-[11px] uppercase tracking-[0.28em] text-foreground/75 hover:text-primary transition-colors duration-500"
        aria-label="Change language"
      >
        <span style={{ fontFamily: '"Noto Serif JP", serif' }} className="text-[13px] tracking-normal">文</span>
        <span className="text-foreground/30">/</span>
        <span>{SHORT[current]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background border border-border rounded-none shadow-none min-w-[160px] p-0"
      >
        {(["he", "en", "ja"] as SupportedLang[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => change(lang)}
            className={`rounded-none px-4 py-3 text-[12px] uppercase tracking-[0.22em] focus:bg-muted/60 cursor-pointer ${
              current === lang ? "text-primary" : "text-foreground/80"
            }`}
          >
            {LABELS[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
