import Image from "next/image";

import { Section } from "@/components/ui/section";
import { profile } from "@/config/profile";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale } from "@/types/portfolio";

type AboutSectionProps = Readonly<{
  locale: Locale;
}>;

export function AboutSection({ locale }: AboutSectionProps) {
  const about = profile.about;
  const photo = about.photo;

  return (
    <Section
      id="about"
      eyebrow={getLocalizedText(about.eyebrow, locale)}
      title={getLocalizedText(about.title, locale)}
      className="border-t border-purple-100 bg-white dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={getLocalizedText(paragraph, locale)}>
              {getLocalizedText(paragraph, locale)}
            </p>
          ))}
        </div>

        <aside
          className="space-y-6"
          aria-label={locale === "en" ? "About highlights" : "ملخص عني"}
        >
          {photo ? (
            <figure className="overflow-hidden rounded-3xl border border-purple-100 bg-purple-50/50 p-3 shadow-sm shadow-purple-950/5 dark:border-purple-400/20 dark:bg-purple-400/5 dark:shadow-black/20">
              <Image
                src={photo.src}
                alt={getLocalizedText(photo.alt, locale)}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 34rem, 100vw"
                loading="eager"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </figure>
          ) : null}

          <div className="rounded-3xl border border-purple-100 bg-purple-50/50 p-6 dark:border-purple-400/20 dark:bg-purple-400/5 sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {locale === "en" ? "How I approach work" : "كيف أتعامل مع العمل"}
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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
        </aside>
      </div>
    </Section>
  );
}
