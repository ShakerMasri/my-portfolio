import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigation, profile } from "@/config";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, NavigationItem } from "@/types/portfolio";
import { LanguageSwitcher } from "./language-switcher";

function getLocalizedHref(item: NavigationItem, locale: Locale) {
  return `/${locale}${item.href}`;
}

type SiteHeaderProps = Readonly<{
  locale: Locale;
}>;

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-purple-200/70 bg-[#fffafe]/90 shadow-sm shadow-purple-950/10 backdrop-blur dark:border-white/10 dark:bg-background/90 dark:shadow-black/20">
      <Container className="flex min-h-16 flex-wrap items-center gap-2 py-2 lg:flex-nowrap lg:justify-between lg:py-0">
        <Link
          href={`/${locale}`}
          className="shrink-0 font-semibold tracking-tight text-zinc-950 transition hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:text-zinc-50 dark:hover:text-purple-300 dark:focus-visible:outline-purple-300"
          aria-label={
            locale === "en" ? "Go to homepage" : "الانتقال إلى الصفحة الرئيسية"
          }
        >
          {profile.displayName}
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <nav
            className="flex gap-1"
            aria-label={
              locale === "en" ? "Main navigation" : "التنقل الرئيسي"
            }
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item, locale)}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-purple-100/70 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:text-zinc-300 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
              >
                {getLocalizedText(item.label, locale)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle locale={locale} />
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="ms-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle locale={locale} />
          <LanguageSwitcher locale={locale} />
          <MobileNavigation locale={locale} />
        </div>
      </Container>
    </header>
  );
}
