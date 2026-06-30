import Link from "next/link";
import { navigation, profile } from "@/config";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, NavigationItem } from "@/types/portfolio";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "./language-switcher";

function getLocalizedHref(item: NavigationItem, locale: Locale) {
  if (item.href.startsWith("#")) {
    return `/${locale}${item.href}`;
  }

  return `/${locale}${item.href}`;
}

type SiteHeaderProps = Readonly<{
  locale: Locale;
}>;

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-background/90 backdrop-blur">
      <Container className="flex flex-col gap-3 py-3 md:min-h-16 md:flex-row md:items-center md:justify-between md:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="font-semibold tracking-tight text-zinc-950"
            aria-label={
              locale === "en" ? "Go to homepage" : "الانتقال إلى الصفحة الرئيسية"
            }
          >
            {profile.displayName}
          </Link>

          <div className="md:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <nav
          className="flex gap-1 overflow-x-auto pb-1 md:overflow-visible md:pb-0"
          aria-label={locale === "en" ? "Main navigation" : "التنقل الرئيسي"}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(item, locale)}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              {getLocalizedText(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} />
        </div>
      </Container>
    </header>
  );
}
