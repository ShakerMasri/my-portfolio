import { Section } from "@/components/ui/section";
import { skillCategories } from "@/config/skills";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type SkillsSectionProps = Readonly<{
  locale: Locale;
}>;

const skillsSectionCopy = {
  en: {
    eyebrow: "Skills",
    title: "A practical technical foundation for reliable web interfaces.",
    description:
      "A focused overview of tools and practices I use to build responsive, accessible, bilingual web experiences.",
    noteTitle: "Focused by design",
    noteText:
      "This list stays limited to skills that can be demonstrated in the portfolio. Backend, database, and Computer Engineering topics can be expanded through project case studies as they are added.",
  },
  ar: {
    eyebrow: "المهارات",
    title: "أساس تقني عملي لبناء واجهات ويب موثوقة.",
    description:
      "نظرة مركزة على الأدوات والممارسات التي أستخدمها لبناء تجارب ويب متجاوبة، سهلة الوصول، وثنائية اللغة.",
    noteTitle: "تركيز مقصود",
    noteText:
      "أبقي هذه القائمة محصورة بالمهارات التي يمكن إثباتها داخل الملف. يمكن توسيع مهارات الباك إند، قواعد البيانات، ومواضيع هندسة الحاسوب من خلال دراسات المشاريع عند إضافتها.",
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
      className="border-t border-purple-100/80 bg-[linear-gradient(180deg,_rgba(250,245,255,0.82),_rgba(255,255,255,0.72))] dark:border-white/10 dark:bg-zinc-900/70 dark:bg-none"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title.en}
            className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 transition duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-purple-950/10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:hover:border-purple-400/30 motion-reduce:transition-none sm:p-7"
          >
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
                  className="rounded-full border border-purple-100/90 bg-purple-50/80 px-3 py-1.5 text-sm font-medium text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-dashed border-purple-200 bg-white/90 p-6 text-sm leading-6 text-zinc-600 shadow-sm shadow-purple-950/5 dark:border-purple-400/30 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-black/20">
        <p className="font-semibold text-zinc-950 dark:text-zinc-50">{copy.noteTitle}</p>
        <p className="mt-2">{copy.noteText}</p>
      </div>
    </Section>
  );
}
