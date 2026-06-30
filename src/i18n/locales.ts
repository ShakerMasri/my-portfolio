import { siteConfig } from "@/config/site";
import type { Locale, LocalizedText } from "@/types/portfolio";

export type TextDirection = "ltr" | "rtl";

export const rtlLocales: readonly Locale[] = ["ar"];

export function isLocale(value: string): value is Locale {
  return siteConfig.supportedLocales.includes(value as Locale);
}

export function getTextDirection(locale: Locale): TextDirection {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text[siteConfig.defaultLocale];
}
