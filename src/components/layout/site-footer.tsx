import Link from "next/link";
import { navigation, profile, siteConfig } from "@/config";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, NavigationItem } from "@/types/portfolio";
import { Container } from "@/components/ui/container";

function getLocalizedHref(item: NavigationItem, locale: Locale) {
  if (item.href.startsWith("#")) {
    return `/${locale}${item.href}`;
  }

  return `/${locale}${item.href}`;
}

type SiteFooterProps = Readonly<{
  locale: Locale;
}>;

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-zinc-950 dark:text-zinc-50">{profile.displayName}</p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {siteConfig.description[locale]}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400"
          aria-label={locale === "en" ? "Footer navigation" : "تنقل التذييل"}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(item, locale)}
              className="rounded-full transition hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:hover:text-purple-300 dark:focus-visible:outline-purple-300"
            >
              {getLocalizedText(item.label, locale)}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
