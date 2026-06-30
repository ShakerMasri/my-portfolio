import { Section } from "@/components/ui/section";
import { profile } from "@/config/profile";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type AboutSectionProps = Readonly<{
  locale: Locale;
}>;

export function AboutSection({ locale }: AboutSectionProps) {
  const about = profile.about;

  return (
    <Section
      id="about"
      eyebrow={getLocalizedText(about.eyebrow, locale)}
      title={getLocalizedText(about.title, locale)}
      className="border-t border-zinc-200 bg-white"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-zinc-600 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={getLocalizedText(paragraph, locale)}>
              {getLocalizedText(paragraph, locale)}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-950">
            {locale === "en" ? "How I approach work" : "كيف أتعامل مع العمل"}
          </h2>

          <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-600">
            <li>
              {locale === "en"
                ? "Start with clear structure before adding visual complexity."
                : "أبدأ ببنية واضحة قبل إضافة التعقيد البصري."}
            </li>
            <li>
              {locale === "en"
                ? "Keep content, components, accessibility, and performance in mind from the beginning."
                : "أراعي المحتوى، المكونات، الإتاحة، والأداء منذ البداية."}
            </li>
            <li>
              {locale === "en"
                ? "Build in focused checkpoints so every change can be reviewed and improved."
                : "أبني على مراحل مركزة حتى يمكن مراجعة كل تغيير وتحسينه."}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
