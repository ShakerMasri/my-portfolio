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
    "border-zinc-950 bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-950",
  secondary:
    "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50",
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
    <section className="bg-[radial-gradient(circle_at_top_left,_#e4e4e7,_transparent_32rem)] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
              {getLocalizedText(hero.eyebrow, locale)}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {getLocalizedText(hero.headline, locale)}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
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

          <aside className="rounded-[2rem] border border-zinc-200 bg-white/85 p-6 shadow-sm backdrop-blur sm:p-8">
            <p className="text-sm font-medium text-zinc-500">
              {locale === "en" ? "Profile snapshot" : "لمحة سريعة"}
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-zinc-950">
              {profile.displayName}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {getLocalizedText(profile.role, locale)}
            </p>

            <dl className="mt-6 space-y-4 border-t border-zinc-200 pt-6">
              {profile.about.highlights.map((highlight) => (
                <div key={getLocalizedText(highlight.label, locale)}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {getLocalizedText(highlight.label, locale)}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-950">
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
