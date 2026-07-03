import { Section } from "@/components/ui/section";
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
      className="border-t border-purple-100/80 bg-white/75 dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={getLocalizedText(paragraph, locale)}>
              {getLocalizedText(paragraph, locale)}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-950/5 dark:border-purple-400/20 dark:bg-purple-400/5 dark:shadow-black/20 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            {locale === "en" ? "How I approach work" : "كيف أتعامل مع العمل"}
          </h2>

          <ul className="mt-5 grid gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300 md:grid-cols-3">
            {approachItems[locale].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-purple-100/80 bg-purple-50/60 p-4 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-sm hover:shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-950/40 dark:hover:border-purple-400/30 dark:hover:bg-zinc-950/70 motion-reduce:transition-none"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
