import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
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
    "border-purple-700 bg-purple-700 text-white shadow-sm shadow-purple-950/20 hover:-translate-y-0.5 hover:bg-purple-800 hover:shadow-md focus-visible:outline-purple-700 dark:border-purple-400 dark:bg-purple-400 dark:text-zinc-950 dark:shadow-black/20 dark:hover:bg-purple-300 dark:focus-visible:outline-purple-300",
  secondary:
    "border-purple-200 bg-white text-zinc-950 shadow-sm shadow-purple-950/10 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900 hover:shadow-md dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-black/20 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200",
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
  const className = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-200 motion-reduce:transition-none ${actionStyles[variant]}`;

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
  const photo = profile.photo;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(221,214,254,0.95),_transparent_34rem),linear-gradient(180deg,_#fbf7ff_0%,_#fffafe_58%,_#f6effc_100%)] py-16 dark:bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.24),_transparent_34rem)] sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#fffafe]/85 dark:to-zinc-950/80"
        aria-hidden="true"
      />
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)]">
          <Reveal className="max-w-3xl text-center sm:text-start">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">
              {getLocalizedText(hero.eyebrow, locale)}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
              {getLocalizedText(hero.headline, locale)}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:mx-0 sm:text-lg">
              {getLocalizedText(hero.description, locale)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
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
          </Reveal>

          <aside
            className="relative isolate mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:justify-self-end"
            aria-label={locale === "en" ? "Profile snapshot" : "لمحة سريعة"}
          >
            <Reveal delayMs={120}>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-purple-300/45 blur-3xl dark:bg-purple-500/20" />

              <div className="overflow-hidden rounded-[2rem] border border-purple-200/80 bg-white p-3 shadow-2xl shadow-purple-950/20 backdrop-blur dark:border-purple-400/20 dark:bg-zinc-900/80 dark:shadow-black/30">
                {photo ? (
                  <figure className="overflow-hidden rounded-[1.5rem] bg-purple-50 ring-1 ring-purple-200/80 dark:bg-purple-400/10 dark:ring-purple-400/20">
                    <Image
                      src={photo.src}
                      alt={getLocalizedText(photo.alt, locale)}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 26rem, (min-width: 640px) 28rem, 100vw"
                      loading="eager"
                      fetchPriority="high"
                      className="aspect-[4/4.6] w-full object-cover object-top sm:aspect-[4/5]"
                    />
                  </figure>
                ) : null}

                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
                    {locale === "en" ? "Profile snapshot" : "لمحة سريعة"}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {profile.displayName}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {getLocalizedText(profile.role, locale)}
                  </p>

                  <dl className="mt-5 grid gap-3 border-t border-purple-200/80 pt-5 dark:border-white/10 min-[420px]:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {profile.about.highlights.map((highlight) => (
                      <div key={getLocalizedText(highlight.label, locale)}>
                        <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                          {getLocalizedText(highlight.label, locale)}
                        </dt>
                        <dd className="mt-1 text-sm font-medium leading-5 text-zinc-950 dark:text-zinc-100">
                          {getLocalizedText(highlight.value, locale)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
