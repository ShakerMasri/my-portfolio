import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getProjectBySlug, projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { getLocalizedText, isLocale } from "@/i18n/locales";

type ProjectPageProps = Readonly<{
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}>;

const pageCopy = {
  en: {
    backToProjects: "Back to projects",
    metaLabel: "Project details",
    projectLinksLabel: "Project links",
    liveLabel: "Live demo",
    sourceLabel: "Source code",
    techLabel: "Tech stack",
    highlightsLabel: "Homepage highlights",
    supplementaryLabel: "Supporting project details",
    noScreenshots:
      "Screenshots and a short walkthrough can be added later after the project is recorded cleanly.",
  },
  ar: {
    backToProjects: "العودة إلى المشاريع",
    metaLabel: "تفاصيل المشروع",
    projectLinksLabel: "روابط المشروع",
    liveLabel: "الديمو المباشر",
    sourceLabel: "الكود المصدري",
    techLabel: "التقنيات المستخدمة",
    highlightsLabel: "أبرز نقاط العرض المختصر",
    supplementaryLabel: "تفاصيل إضافية عن المشروع",
    noScreenshots:
      "يمكن إضافة الصور وشرح قصير لاحقاً بعد تسجيل المشروع وتجهيزه بشكل مرتب.",
  },
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.supportedLocales.flatMap((locale) =>
    projects
      .filter((project) => project.caseStudy)
      .map((project) => ({
        locale,
        slug: project.slug,
      })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    return {};
  }

  const title = getLocalizedText(project.title, localeParam);
  const description = getLocalizedText(project.summary, localeParam);

  return {
    title,
    description,
    alternates: {
      languages: Object.fromEntries(
        siteConfig.supportedLocales.map((supportedLocale) => [
          supportedLocale,
          `/${supportedLocale}/projects/${project.slug}`,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "article",
      locale: localeParam,
      alternateLocale: siteConfig.supportedLocales.filter(
        (supportedLocale) => supportedLocale !== localeParam,
      ),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const copy = pageCopy[localeParam];
  const caseStudy = project.caseStudy;
  const projectTitle = getLocalizedText(project.title, localeParam);
  const liveLink = project.links?.live;
  const liveLabel = liveLink?.label ? getLocalizedText(liveLink.label, localeParam) : copy.liveLabel;
  const liveNote = liveLink?.note ? getLocalizedText(liveLink.note, localeParam) : undefined;
  const demoDataNotice = liveLink?.dataNotice
    ? getLocalizedText(liveLink.dataNotice, localeParam)
    : undefined;
  const repositoryNote = project.repository?.note
    ? getLocalizedText(project.repository.note, localeParam)
    : undefined;
  const hasProjectLinks = Boolean(liveLink || project.links?.source || project.repository);

  return (
    <>
      <section className="relative overflow-hidden border-t border-purple-100/80 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),_transparent_34rem),linear-gradient(180deg,_rgba(250,245,255,0.92),_rgba(255,255,255,0.78))] py-16 dark:border-white/10 dark:bg-zinc-950 dark:bg-none sm:py-24">
        <Container>
          <Reveal>
            <Link
              className="inline-flex rounded-full border border-purple-200 bg-white/85 px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-100 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/15 dark:focus-visible:outline-purple-300 motion-reduce:transition-none"
              href={`/${localeParam}#projects`}
            >
              {copy.backToProjects}
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
            <Reveal>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">
                  {getLocalizedText(caseStudy.eyebrow, localeParam)}
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                  {projectTitle}
                </h1>
                <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-zinc-800 dark:text-zinc-200">
                  {getLocalizedText(caseStudy.title, localeParam)}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                  {getLocalizedText(caseStudy.summary, localeParam)}
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <aside className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-xl shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {copy.metaLabel}
                </p>

                <dl className="mt-5 space-y-5">
                  {caseStudy.meta.map((item) => (
                    <div key={item.label.en}>
                      <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                        {getLocalizedText(item.label, localeParam)}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {getLocalizedText(item.value, localeParam)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-purple-100/80 bg-white/75 py-16 dark:border-white/10 dark:bg-zinc-950 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-start">
            <div className="space-y-6">
              {caseStudy.sections.map((section, index) => (
                <Reveal key={section.title.en} delayMs={Math.min(index * 50, 180)}>
                  <article className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 sm:p-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {getLocalizedText(section.title, localeParam)}
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
                      {section.body.map((paragraph) => (
                        <p key={paragraph.en}>{getLocalizedText(paragraph, localeParam)}</p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
                        {section.bullets.map((bullet) => (
                          <li key={bullet.en} className="flex gap-3">
                            <span
                              className="mt-3 size-1.5 shrink-0 rounded-full bg-purple-500"
                              aria-hidden="true"
                            />
                            <span>{getLocalizedText(bullet, localeParam)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            <aside
              className="order-last space-y-6 lg:sticky lg:top-24"
              aria-label={copy.supplementaryLabel}
            >
              {hasProjectLinks && (
                <Reveal delayMs={100}>
                  <div className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {copy.projectLinksLabel}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                      {liveLink && (
                        <a
                          className="rounded-full border border-purple-700 bg-purple-700 px-4 py-2 text-white shadow-sm shadow-purple-950/10 transition hover:-translate-y-0.5 hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-purple-400 dark:bg-purple-400 dark:text-zinc-950 dark:hover:bg-purple-300 dark:focus-visible:outline-purple-300 motion-reduce:transition-none"
                          href={liveLink.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {liveLabel}
                        </a>
                      )}

                      {project.links?.source && (
                        <a
                          className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-950 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-white/10 dark:text-zinc-100 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
                          href={project.links.source}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {copy.sourceLabel}
                        </a>
                      )}
                    </div>

                    {(liveNote || demoDataNotice) && (
                      <div className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {liveNote && <p>{liveNote}</p>}
                        {demoDataNotice && <p>{demoDataNotice}</p>}
                      </div>
                    )}

                    {project.repository && (
                      <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300">
                        <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                          {getLocalizedText(project.repository.label, localeParam)}
                        </p>
                        {repositoryNote && <p className="mt-1">{repositoryNote}</p>}
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

              <Reveal delayMs={120}>
                <div className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {copy.techLabel}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={copy.techLabel}>
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-purple-100/80 bg-purple-50/80 px-3 py-1.5 text-xs font-medium text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-100"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delayMs={160}>
                <div className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {copy.highlightsLabel}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight.en} className="flex gap-2">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-500"
                          aria-hidden="true"
                        />
                        <span>{getLocalizedText(highlight, localeParam)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/70 p-6 text-sm leading-6 text-purple-950 shadow-sm shadow-purple-950/5 dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-100 dark:shadow-black/20">
                  {copy.noScreenshots}
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
