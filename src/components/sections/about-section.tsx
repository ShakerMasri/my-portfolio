import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/config/profile";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type AboutSectionProps = Readonly<{
  locale: Locale;
}>;

const approachItems = {
  en: [
    "Start with clear structure before adding visual complexity.",
    "Keep content, components, accessibility, and performance in mind from the beginning.",
    "Build in focused checkpoints so every change can be reviewed and improved.",
  ],
  ar: [
    "أبدأ ببنية واضحة قبل إضافة التعقيد البصري.",
    "أراعي المحتوى، المكونات، الإتاحة، والأداء منذ البداية.",
    "أبني على مراحل مركزة حتى يمكن مراجعة كل تغيير وتحسينه.",
  ],
} as const;

export function AboutSection({ locale }: AboutSectionProps) {
  const about = profile.about;

  return (
    <Section
      id="about"
      eyebrow={getLocalizedText(about.eyebrow, locale)}
      title={getLocalizedText(about.title, locale)}
      className="border-t border-purple-200/70 bg-[#fffafe]/90 dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        <Reveal className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={getLocalizedText(paragraph, locale)}>
              {getLocalizedText(paragraph, locale)}
            </p>
          ))}
        </Reveal>

        <Reveal delayMs={90}>
          <div className="rounded-3xl border border-purple-200/70 bg-white p-6 shadow-xl shadow-purple-950/10 ring-1 ring-white/80 dark:border-purple-400/20 dark:bg-purple-400/5 dark:shadow-black/20 dark:ring-transparent sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {locale === "en" ? "How I approach work" : "كيف أتعامل مع العمل"}
            </h2>

            <ul className="mt-5 grid gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300 md:grid-cols-3">
              {approachItems[locale].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-purple-200/70 bg-[#fbf7ff] p-4 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-white hover:shadow-md hover:shadow-purple-950/10 dark:border-white/10 dark:bg-zinc-950/40 dark:hover:border-purple-400/30 dark:hover:bg-zinc-950/70 motion-reduce:transition-none"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
