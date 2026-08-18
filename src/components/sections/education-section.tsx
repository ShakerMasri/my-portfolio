import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { education } from "@/config/education";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type EducationSectionProps = Readonly<{
  locale: Locale;
}>;

const educationSectionCopy = {
  en: {
    eyebrow: "Education",
    title: "Computer Engineering with a backend/software engineering direction.",
    description:
      "A concise view of my current academic background, kept secondary to the project work above.",
    detailsLabel: "Relevant academic context",
  },
  ar: {
    eyebrow: "التعليم",
    title: "هندسة الحاسوب مع توجه نحو هندسة البرمجيات والباك إند.",
    description:
      "نظرة مختصرة على خلفيتي الأكاديمية الحالية، مع إبقاء المشاريع أعلاه كالدليل العملي الأهم.",
    detailsLabel: "سياق أكاديمي ذو صلة",
  },
} as const;

export function EducationSection({ locale }: EducationSectionProps) {
  const copy = educationSectionCopy[locale];

  return (
    <Section
      id="education"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="border-t border-purple-200/70 bg-white/75 dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="grid gap-6">
        {education.map((entry, index) => (
          <Reveal key={entry.institution.en} delayMs={index * 80}>
            <article className="rounded-3xl border border-purple-200/70 bg-white p-6 shadow-xl shadow-purple-950/10 ring-1 ring-white/80 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:ring-transparent sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {getLocalizedText(entry.program, locale)}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-purple-800 dark:text-purple-200">
                    {getLocalizedText(entry.institution, locale)}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
                  {getLocalizedText(entry.status, locale)}
                </span>
              </div>

              {entry.details && entry.details.length > 0 && (
                <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {copy.detailsLabel}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {entry.details.map((detail) => (
                      <li key={detail.en}>{getLocalizedText(detail, locale)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
