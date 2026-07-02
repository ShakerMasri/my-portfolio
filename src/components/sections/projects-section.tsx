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
    linksLabel: "Project links",
    liveLabel: "Live site",
    sourceLabel: "Source code",
    noLinks: "Links will be added when available.",
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
    linksLabel: "روابط المشروع",
    liveLabel: "الموقع المباشر",
    sourceLabel: "الكود المصدري",
    noLinks: "ستتم إضافة الروابط عندما تكون متاحة.",
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
  return (
    <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
          {statusLabels[locale][project.status]}
        </span>

        {project.featured && (
          <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
            {copy.featured}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={title}>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-zinc-200 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {copy.linksLabel}
        </p>

        {project.links?.live || project.links?.source ? (
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
            {project.links.live && (
              <a
                className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
                href={project.links.live}
                rel="noreferrer"
                target="_blank"
              >
                {copy.liveLabel}
              </a>
            )}
            {project.links.source && (
              <a
                className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
                href={project.links.source}
                rel="noreferrer"
                target="_blank"
              >
                {copy.sourceLabel}
              </a>
            )}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-zinc-500">{copy.noLinks}</p>
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
      className="border-t border-zinc-200 bg-white"
    >
      {projects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-zinc-950">
            {copy.emptyTitle}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
            {copy.emptyText}
          </p>
        </div>
      )}
    </Section>
  );
}
