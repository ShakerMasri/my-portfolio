import type { Metadata } from "next";
import Image from "next/image";
import type {
  Locale,
  ProjectCaseStudyMedia,
  ProjectCaseStudyMediaVideo,
} from "@/types/portfolio";
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
    videoFallback: "Your browser does not support embedded videos.",
    openScreenshotLabel: "Open full screenshot",
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
    videoFallback: "المتصفح لا يدعم تشغيل الفيديو داخل الصفحة.",
    openScreenshotLabel: "فتح الصورة كاملة",
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

type ProjectMediaSectionProps = Readonly<{
  locale: Locale;
  media: ProjectCaseStudyMedia;
  titleId: string;
  videoFallback: string;
}>;

type DeviceVideoFrameProps = Readonly<{
  locale: Locale;
  video: ProjectCaseStudyMediaVideo;
  videoFallback: string;
  variant: "desktop" | "mobile";
}>;

type ProjectScreenshotGalleryProps = Readonly<{
  locale: Locale;
  openScreenshotLabel: string;
  screenshots: NonNullable<ProjectCaseStudyMedia["screenshots"]>;
}>;

type ScreenshotGalleryCardProps = Readonly<{
  locale: Locale;
  openScreenshotLabel: string;
  screenshot: NonNullable<ProjectCaseStudyMedia["screenshots"]>["images"][number];
  variant: "featured" | "secondary" | "compact";
}>;

function ProjectMediaSection({
  locale,
  media,
  titleId,
  videoFallback,
}: ProjectMediaSectionProps) {
  return (
    <section
      aria-labelledby={titleId}
      className="border-t border-purple-100/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(250,245,255,0.92))] py-16 dark:border-white/10 dark:bg-zinc-950 dark:bg-none sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-purple-100/80 bg-white/90 p-4 shadow-2xl shadow-purple-950/10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/30 sm:p-6 lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">
                  {getLocalizedText(media.eyebrow, locale)}
                </p>
                <h2
                  id={titleId}
                  className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
                >
                  {getLocalizedText(media.title, locale)}
                </h2>
              </div>

              <p className="max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8 lg:justify-self-end">
                {getLocalizedText(media.description, locale)}
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
              <DeviceVideoFrame
                locale={locale}
                variant="desktop"
                video={media.desktop}
                videoFallback={videoFallback}
              />
              <DeviceVideoFrame
                locale={locale}
                variant="mobile"
                video={media.mobile}
                videoFallback={videoFallback}
              />
            </div>

            {media.screenshots && (
              <ProjectScreenshotGallery
                locale={locale}
                openScreenshotLabel={pageCopy[locale].openScreenshotLabel}
                screenshots={media.screenshots}
              />
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProjectScreenshotGallery({
  locale,
  openScreenshotLabel,
  screenshots,
}: ProjectScreenshotGalleryProps) {
  const [featuredScreenshot, secondaryScreenshot, ...supportingScreenshots] =
    screenshots.images;

  return (
    <div className="mt-10 border-t border-purple-100/80 pt-8 dark:border-white/10 sm:mt-12 sm:pt-10">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          {getLocalizedText(screenshots.title, locale)}
        </h3>
        <p className="max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8 lg:justify-self-end">
          {getLocalizedText(screenshots.description, locale)}
        </p>
      </div>

      {featuredScreenshot && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)]">
          <ScreenshotGalleryCard
            locale={locale}
            openScreenshotLabel={openScreenshotLabel}
            screenshot={featuredScreenshot}
            variant="featured"
          />

          {secondaryScreenshot && (
            <ScreenshotGalleryCard
              locale={locale}
              openScreenshotLabel={openScreenshotLabel}
              screenshot={secondaryScreenshot}
              variant="secondary"
            />
          )}
        </div>
      )}

      {supportingScreenshots.length > 0 && (
        <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {supportingScreenshots.map((screenshot) => (
            <li key={screenshot.src}>
              <ScreenshotGalleryCard
                locale={locale}
                openScreenshotLabel={openScreenshotLabel}
                screenshot={screenshot}
                variant="compact"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ScreenshotGalleryCard({
  locale,
  openScreenshotLabel,
  screenshot,
  variant,
}: ScreenshotGalleryCardProps) {
  const alt = getLocalizedText(screenshot.alt, locale);
  const caption = getLocalizedText(screenshot.caption, locale);
  const isFeatured = variant === "featured";

  return (
    <a
      aria-label={`${openScreenshotLabel}: ${alt}`}
      className="group block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:focus-visible:outline-purple-300"
      href={screenshot.src}
      rel="noopener noreferrer"
      target="_blank"
    >
      <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-purple-100/80 bg-white shadow-lg shadow-purple-950/5 transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-200 group-hover:shadow-xl group-hover:shadow-purple-950/10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:group-hover:border-white/20 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <div
          className="flex items-center gap-1.5 border-b border-purple-100/80 bg-zinc-50/80 px-4 py-2 dark:border-white/10 dark:bg-zinc-900/80"
          aria-hidden="true"
        >
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="ms-2 h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            alt={alt}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            fill
            sizes={
              isFeatured
                ? "(min-width: 1024px) 55vw, 100vw"
                : "(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
            }
            src={screenshot.src}
          />
        </div>

        <figcaption className="flex flex-1 flex-col justify-between gap-3 px-5 py-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          <span>{caption}</span>
          <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
            {openScreenshotLabel}
          </span>
        </figcaption>
      </figure>
    </a>
  );
}


function DeviceVideoFrame({
  locale,
  video,
  videoFallback,
  variant,
}: DeviceVideoFrameProps) {
  const caption = getLocalizedText(video.caption, locale);
  const label = getLocalizedText(video.label, locale);

  if (variant === "mobile") {
    return (
      <figure className="mx-auto w-full max-w-[16rem] lg:pb-8">
        <div className="relative rounded-[2.4rem] border border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-purple-950/20 ring-1 ring-white/10 dark:border-white/10 dark:shadow-black/40">
          <span
            className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-zinc-800 ring-1 ring-white/10"
            aria-hidden="true"
          />
          <div className="aspect-[9/19] overflow-hidden rounded-[1.85rem] border border-white/10 bg-zinc-900">
            <video
              aria-label={label}
              autoPlay
              className="h-full w-full object-cover"
              controls
              loop
              muted
              playsInline
              poster={video.poster}
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              {videoFallback}
            </video>
          </div>
        </div>
        <figcaption className="mt-4 text-center text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="min-w-0">
      <div className="rounded-[1.6rem] border border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-purple-950/20 ring-1 ring-white/10 dark:border-white/10 dark:shadow-black/40 sm:p-3">
        <div className="aspect-[16/9] overflow-hidden rounded-[1.05rem] border border-white/10 bg-zinc-900">
          <video
            aria-label={label}
            autoPlay
            className="h-full w-full object-contain"
            controls
            loop
            muted
            playsInline
            poster={video.poster}
            preload="metadata"
          >
            <source src={video.src} type="video/mp4" />
            {videoFallback}
          </video>
        </div>
      </div>
      <div
        className="mx-auto h-3 w-[92%] rounded-b-[1.25rem] bg-zinc-800 shadow-lg shadow-purple-950/10 dark:bg-zinc-900"
        aria-hidden="true"
      >
        <div className="mx-auto h-1 w-24 rounded-b-full bg-zinc-700 dark:bg-zinc-800" />
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {caption}
      </figcaption>
    </figure>
  );
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
  const liveLabel = liveLink?.label
    ? getLocalizedText(liveLink.label, localeParam)
    : copy.liveLabel;
  const liveNote = liveLink?.note
    ? getLocalizedText(liveLink.note, localeParam)
    : undefined;
  const demoDataNotice = liveLink?.dataNotice
    ? getLocalizedText(liveLink.dataNotice, localeParam)
    : undefined;
  const repositoryNote = project.repository?.note
    ? getLocalizedText(project.repository.note, localeParam)
    : undefined;
  const hasProjectLinks = Boolean(
    liveLink || project.links?.source || project.repository,
  );
  const mediaTitleId = `${project.slug}-media-title`;

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

      {caseStudy.media && (
        <ProjectMediaSection
          locale={localeParam}
          media={caseStudy.media}
          titleId={mediaTitleId}
          videoFallback={copy.videoFallback}
        />
      )}

      <section className="border-t border-purple-100/80 bg-white/75 py-16 dark:border-white/10 dark:bg-zinc-950 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-start">
            <div className="space-y-6">
              {caseStudy.sections.map((section, index) => (
                <Reveal
                  key={section.title.en}
                  delayMs={Math.min(index * 50, 180)}
                >
                  <article className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 sm:p-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {getLocalizedText(section.title, localeParam)}
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
                      {section.body.map((paragraph) => (
                        <p key={paragraph.en}>
                          {getLocalizedText(paragraph, localeParam)}
                        </p>
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
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {liveLabel}
                        </a>
                      )}

                      {project.links?.source && (
                        <a
                          className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-950 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-white/10 dark:text-zinc-100 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
                          href={project.links.source}
                          rel="noopener noreferrer"
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
                          {getLocalizedText(
                            project.repository.label,
                            localeParam,
                          )}
                        </p>
                        {repositoryNote && (
                          <p className="mt-1">{repositoryNote}</p>
                        )}
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
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={copy.techLabel}
                  >
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

              {!caseStudy.media && (
                <Reveal delayMs={200}>
                  <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/70 p-6 text-sm leading-6 text-purple-950 shadow-sm shadow-purple-950/5 dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-100 dark:shadow-black/20">
                    {copy.noScreenshots}
                  </div>
                </Reveal>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
