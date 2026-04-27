import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import he from "./locales/he.json";
import en from "./locales/en.json";
import ja from "./locales/ja.json";

const STORAGE_KEY = "tsi-lang";
export const SUPPORTED_LANGS = ["he", "en", "ja"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

const isSupported = (l: string | null | undefined): l is SupportedLang =>
  !!l && (SUPPORTED_LANGS as readonly string[]).includes(l);

const getStoredLang = (): SupportedLang | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isSupported(v) ? v : null;
  } catch {
    return null;
  }
};

export const setStoredLang = (lang: SupportedLang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
};

const initialLang: SupportedLang = getStoredLang() ?? "en";

i18n.use(initReactI18next).init({
  resources: {
    he: { translation: he },
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

const applyDocumentLang = (lang: SupportedLang) => {
  const dir = lang === "he" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.documentElement.classList.toggle("font-jp", lang === "ja");
};

applyDocumentLang(initialLang);

i18n.on("languageChanged", (lng) => {
  if (isSupported(lng)) applyDocumentLang(lng);
});

// Geo-detect on first visit only.
export const detectLanguageFromGeo = async () => {
  if (getStoredLang()) return;
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) throw new Error("geo failed");
    const data = await res.json();
    const country: string = data.country_code || data.country || "";
    let lang: SupportedLang = "en";
    if (country === "IL") lang = "he";
    else if (country === "JP") lang = "ja";
    setStoredLang(lang);
    if (i18n.language !== lang) await i18n.changeLanguage(lang);
  } catch {
    // Default to English on any failure; persist so we don't keep retrying.
    setStoredLang("en");
    if (i18n.language !== "en") await i18n.changeLanguage("en");
  }
};

export default i18n;
