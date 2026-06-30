import Link from "next/link";
import type { Locale } from "@/types/portfolio";

const languageLabels = {
  en: "English",
  ar: "العربية",
} as const satisfies Record<Locale, string>;

type LanguageSwitcherProps = Readonly<{
  locale: Locale;
}>;

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const alternateLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href={`/${alternateLocale}`}
      hrefLang={alternateLocale}
      className="inline-flex min-h-10 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:text-zinc-950"
      aria-label={
        locale === "en" ? "Switch language to Arabic" : "تغيير اللغة إلى الإنجليزية"
      }
    >
      {languageLabels[alternateLocale]}
    </Link>
  );
}
