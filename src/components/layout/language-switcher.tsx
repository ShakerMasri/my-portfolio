"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/portfolio";

const languageLabels = {
  en: "English",
  ar: "العربية",
} as const satisfies Record<Locale, string>;

type LanguageSwitcherProps = Readonly<{
  locale: Locale;
}>;

function getAlternateLocalePath(pathname: string, locale: Locale, alternateLocale: Locale) {
  const localePrefix = `/${locale}`;

  if (pathname === localePrefix) {
    return `/${alternateLocale}`;
  }

  if (pathname.startsWith(`${localePrefix}/`)) {
    return `/${alternateLocale}${pathname.slice(localePrefix.length)}`;
  }

  return `/${alternateLocale}`;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = locale === "en" ? "ar" : "en";
  const alternateHref = getAlternateLocalePath(pathname, locale, alternateLocale);

  return (
    <Link
      href={alternateHref}
      hrefLang={alternateLocale}
      className="inline-flex min-h-10 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
      aria-label={
        locale === "en" ? "Switch language to Arabic" : "تغيير اللغة إلى الإنجليزية"
      }
    >
      {languageLabels[alternateLocale]}
    </Link>
  );
}
