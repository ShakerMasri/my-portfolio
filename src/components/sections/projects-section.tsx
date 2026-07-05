import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/config/projects";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, ProjectConfig, ProjectStatus } from "@/types/portfolio";

type ProjectsSectionProps = Readonly<{
  locale: Locale;
}>;

type ProjectCardProps = Readonly<{
  project: ProjectConfig;
  locale: Locale;
}>;

const projectsSectionCopy = {
  en: {
    eyebrow: "Projects",
    title: "Selected work, presented with honest scope and clear outcomes.",
    description:
      "A focused place for projects that can show the problem, stack, implementation choices, and what was learned.",
    emptyTitle: "Projects will be added after the content is ready.",
    emptyText:
      "For now, this section is wired to typed project data without inventing work. Add real projects in src/config/projects.ts when the details, links, and scope are ready.",
    featured: "Featured",
    highlightsLabel: "Project highlights",
    actionsLabel: "Project actions",
    caseStudyLabel: "View case study",
    liveLabel: "Live demo",
    sourceLabel: "Source code",
  },
  ar: {
    eyebrow: "المشاريع",
    title: "أعمال مختارة بنطاق واضح ونتائج صادقة.",
    description:
      "مكان مركّز لعرض المشاريع من حيث المشكلة، التقنيات، قرارات التنفيذ، وما تم تعلمه.",
    emptyTitle: "ستتم إضافة المشاريع بعد تجهيز المحتوى الحقيقي.",
    emptyText:
      "حالياً هذا القسم مربوط ببيانات مشاريع typed بدون اختراع أعمال. أضف المشاريع الحقيقية داخل src/config/projects.ts عندما تكون التفاصيل، الروابط، والنطاق جاهزة.",
    featured: "مميز",
    highlightsLabel: "أبرز نقاط المشروع",
    actionsLabel: "إجراءات المشروع",
    caseStudyLabel: "عرض دراسة المشروع",
    liveLabel: "الديمو المباشر",
    sourceLabel: "الكود المصدري",
  },
} as const;

const statusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  en: {
    planned: "Planned",
    "in-progress": "In progress",
    completed: "Completed",
  },
  ar: {
    planned: "مخطط",
    "in-progress": "قيد التطوير",
    completed: "مكتمل",
  },
};

function ProjectCard({ project, locale }: ProjectCardProps) {
  const copy = projectsSectionCopy[locale];
  const title = getLocalizedText(project.title, locale);
  const summary = getLocalizedText(project.summary, locale);
  const liveLink = project.links?.live;
  const liveLabel = liveLink?.label ? getLocalizedText(liveLink.label, locale) : copy.liveLabel;
  const liveNote = liveLink?.note ? getLocalizedText(liveLink.note, locale) : undefined;
  const demoDataNotice = liveLink?.dataNotice
    ? getLocalizedText(liveLink.dataNotice, locale)
    : undefined;
  const demoInfoId = `${project.slug}-demo-info`;
  const hasDemoInfo = Boolean(liveNote || demoDataNotice);
  const repositoryNote = project.repository?.note
    ? getLocalizedText(project.repository.note, locale)
    : undefined;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-purple-200/70 bg-white p-6 shadow-xl shadow-purple-950/10 ring-1 ring-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-purple-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:ring-transparent dark:hover:border-purple-400/30 motion-reduce:transition-none sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
          {statusLabels[locale][project.status]}
        </span>

        {project.featured && (
          <span className="rounded-full bg-purple-700 px-3 py-1 text-xs font-semibold text-white dark:bg-purple-400 dark:text-zinc-950">
            {copy.featured}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{summary}</p>

      <div className="mt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {copy.highlightsLabel}
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.highlights.map((highlight) => (
            <li key={highlight.en} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-500" aria-hidden="true" />
              <span>{getLocalizedText(highlight, locale)}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={title}>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-950 shadow-sm shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {copy.actionsLabel}
        </p>

        <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
          {project.caseStudy && (
            <Link
              className="rounded-full border border-purple-700 bg-purple-700 px-4 py-2 text-white shadow-sm shadow-purple-950/10 transition hover:-translate-y-0.5 hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-purple-400 dark:bg-purple-400 dark:text-zinc-950 dark:hover:bg-purple-300 dark:focus-visible:outline-purple-300 motion-reduce:transition-none"
              href={`/${locale}/projects/${project.slug}`}
            >
              {copy.caseStudyLabel}
            </Link>
          )}

          {liveLink && (
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-950 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 dark:border-white/10 dark:text-zinc-100 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
              href={liveLink.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby={hasDemoInfo ? demoInfoId : undefined}
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

        {hasDemoInfo && (
          <div id={demoInfoId} className="mt-4 space-y-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            {liveNote && <p>{liveNote}</p>}
            {demoDataNotice && <p>{demoDataNotice}</p>}
          </div>
        )}

        {project.repository && (
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs leading-5 text-zinc-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300">
            <p className="font-semibold text-zinc-800 dark:text-zinc-100">
              {getLocalizedText(project.repository.label, locale)}
            </p>
            {repositoryNote && <p className="mt-1">{repositoryNote}</p>}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const copy = projectsSectionCopy[locale];

  return (
    <Section
      id="projects"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="border-t border-purple-200/70 bg-[#fffafe]/90 dark:border-white/10 dark:bg-zinc-950"
    >
      {projects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 80}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="rounded-3xl border border-dashed border-purple-300/80 bg-white p-6 shadow-md shadow-purple-950/10 dark:border-purple-400/30 dark:bg-purple-400/5 dark:shadow-black/20 sm:p-8">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {copy.emptyTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {copy.emptyText}
            </p>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
