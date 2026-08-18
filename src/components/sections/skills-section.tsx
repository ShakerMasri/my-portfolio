import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { skillCategories } from "@/config/skills";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type SkillsSectionProps = Readonly<{
  locale: Locale;
}>;

const skillsSectionCopy = {
  en: {
    eyebrow: "Skills",
    title: "Backend-focused skills backed by real project work.",
    description:
      "A focused view of the technologies and engineering practices I have used across backend, data, frontend, and testing work.",
    noteTitle: "Focused by design",
    noteText:
      "This list stays focused on skills I can demonstrate through real project work. The case studies explain how these tools were used in context.",
  },
  ar: {
    eyebrow: "المهارات",
    title: "مهارات تركز على الباك إند ومدعومة بمشاريع حقيقية.",
    description:
      "نظرة مركزة على التقنيات والممارسات الهندسية التي استخدمتها في الباك إند، البيانات، الواجهة، والاختبار.",
    noteTitle: "تركيز مقصود",
    noteText:
      "أبقي هذه القائمة مركزة على مهارات أستطيع إثباتها من خلال مشاريع حقيقية. دراسات المشاريع توضح كيف تم استخدام هذه الأدوات في سياق عملي.",
  },
} as const;

export function SkillsSection({ locale }: SkillsSectionProps) {
  const copy = skillsSectionCopy[locale];

  return (
    <Section
      id="skills"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="border-t border-purple-200/70 bg-[linear-gradient(180deg,_rgba(245,239,252,0.95),_rgba(255,250,255,0.86))] dark:border-white/10 dark:bg-zinc-900/70 dark:bg-none"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title.en} delayMs={index * 80}>
            <article className="rounded-3xl border border-purple-200/70 bg-white p-6 shadow-xl shadow-purple-950/10 ring-1 ring-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-purple-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:ring-transparent dark:hover:border-purple-400/30 motion-reduce:transition-none sm:p-7">
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {getLocalizedText(category.title, locale)}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {getLocalizedText(category.description, locale)}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={copy.eyebrow}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-950 shadow-sm shadow-purple-950/5 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-100 dark:shadow-none"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={160}>
        <div className="mt-6 rounded-3xl border border-dashed border-purple-300/80 bg-white p-6 text-sm leading-6 text-zinc-600 shadow-md shadow-purple-950/10 dark:border-purple-400/30 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-black/20">
          <p className="font-semibold text-zinc-950 dark:text-zinc-50">{copy.noteTitle}</p>
          <p className="mt-2">{copy.noteText}</p>
        </div>
      </Reveal>
    </Section>
  );
}
