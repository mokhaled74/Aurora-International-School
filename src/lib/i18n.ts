import en from "@/messages/en.json";
import ar from "@/messages/ar.json";
export type Locale = "en" | "ar";
export type Dict = typeof en;
export const dicts: Record<Locale, Dict> = { en, ar };
export const asLocale = (l: string): Locale => (l === "ar" ? "ar" : "en");
