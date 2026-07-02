import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/config/profile";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, PortfolioLink } from "@/types/portfolio";

type HeroSectionProps = Readonly<{
  locale: Locale;
}>;

type ActionLinkProps = Readonly<{
  link: PortfolioLink;
  locale: Locale;
  variant: "primary" | "secondary";
}>;

const actionStyles = {
  primary:
    "border-purple-700 bg-purple-700 text-white hover:bg-purple-800 focus-visible:outline-purple-700 dark:border-purple-400 dark:bg-purple-400 dark:text-zinc-950 dark:hover:bg-purple-300 dark:focus-visible:outline-purple-300",
  secondary:
    "border-zinc-300 bg-white text-zinc-950 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200",
} as const;

function getInternalHref(href: PortfolioLink["href"], locale: Locale) {
  if (href.startsWith("#")) {
    return href;
  }

  if (href.startsWith(`/${locale}`)) {
    return href;
  }

  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }

  return href;
}

function ActionLink({ link, locale, variant }: ActionLinkProps) {
  const label = getLocalizedText(link.label, locale);
  const href = getInternalHref(link.href, locale);
  const className = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition ${actionStyles[variant]}`;

  if (href.startsWith("https://") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

export function HeroSection({ locale }: HeroSectionProps) {
  const hero = profile.hero;

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,_#ede9fe,_transparent_32rem)] py-16 dark:bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.24),_transparent_34rem)] sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">
              {getLocalizedText(hero.eyebrow, locale)}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
              {getLocalizedText(hero.headline, locale)}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              {getLocalizedText(hero.description, locale)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink
                link={hero.primaryAction}
                locale={locale}
                variant="primary"
              />
              <ActionLink
                link={hero.secondaryAction}
                locale={locale}
                variant="secondary"
              />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-purple-100 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-purple-400/20 dark:bg-zinc-900/80 sm:p-8">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {locale === "en" ? "Profile snapshot" : "لمحة سريعة"}
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              {profile.displayName}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {getLocalizedText(profile.role, locale)}
            </p>

            <dl className="mt-6 space-y-4 border-t border-zinc-200 pt-6 dark:border-white/10">
              {profile.about.highlights.map((highlight) => (
                <div key={getLocalizedText(highlight.label, locale)}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {getLocalizedText(highlight.label, locale)}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-100">
                    {getLocalizedText(highlight.value, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
