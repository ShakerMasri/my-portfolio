import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications } from "@/config/certifications";
import { getLocalizedText } from "@/i18n/locales";
import type {
  CertificationConfig,
  CertificationStatus,
  CertificationType,
  Locale,
} from "@/types/portfolio";

type CertificationsSectionProps = Readonly<{
  locale: Locale;
}>;

type CertificationCardProps = Readonly<{
  certification: CertificationConfig;
  locale: Locale;
}>;

const certificationsSectionCopy = {
  en: {
    eyebrow: "Certifications & Workshops",
    title: "Learning milestones that support my project work.",
    description:
      "A focused list of completed courses and workshop certificates. The section is kept concise so certificates support the portfolio without replacing real project evidence.",
    topicsLabel: "Covered topics",
    noteTitle: "How I present certificates",
    noteText:
      "Courses and workshops are listed as learning milestones, not as a replacement for hands-on project work. Similar workshop certificates from the same event are grouped to avoid repetition.",
    emptyTitle: "Certifications will be added after the details are ready.",
    emptyText:
      "This section is wired to typed certification data without inventing credentials.",
  },
  ar: {
    eyebrow: "الشهادات وورش العمل",
    title: "محطات تعلم تدعم عملي على المشاريع.",
    description:
      "قائمة مركّزة للدورات المكتملة وشهادات ورش العمل. أبقي هذا القسم مختصراً حتى يدعم المشاريع بدون أن يحل مكان إثبات العمل العملي.",
    topicsLabel: "المواضيع المغطاة",
    noteTitle: "طريقة عرض الشهادات",
    noteText:
      "أعرض الدورات والورش كمحطات تعلم، وليس كبديل عن المشاريع العملية. الشهادات المتشابهة من نفس الفعالية تم جمعها لتجنب التكرار.",
    emptyTitle: "ستتم إضافة الشهادات بعد تجهيز التفاصيل.",
    emptyText: "هذا القسم مربوط ببيانات typed بدون اختراع شهادات أو إنجازات.",
  },
} as const;

const statusLabels: Record<Locale, Record<CertificationStatus, string>> = {
  en: {
    completed: "Completed",
    "in-progress": "In progress",
  },
  ar: {
    completed: "مكتمل",
    "in-progress": "قيد التعلّم",
  },
};

const typeLabels: Record<Locale, Record<CertificationType, string>> = {
  en: {
    course: "Course",
    workshop: "Workshop",
  },
  ar: {
    course: "دورة",
    workshop: "ورشة عمل",
  },
};

function CertificationCard({ certification, locale }: CertificationCardProps) {
  const copy = certificationsSectionCopy[locale];
  const title = getLocalizedText(certification.title, locale);
  const provider = getLocalizedText(certification.provider, locale);
  const date = certification.date
    ? getLocalizedText(certification.date, locale)
    : undefined;
  const detail = certification.detail
    ? getLocalizedText(certification.detail, locale)
    : undefined;
  const description = getLocalizedText(certification.description, locale);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-purple-200/70 bg-white p-6 shadow-xl shadow-purple-950/10 ring-1 ring-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-purple-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/20 dark:ring-transparent dark:hover:border-purple-400/30 motion-reduce:transition-none sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
          {statusLabels[locale][certification.status]}
        </span>
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
          {typeLabels[locale][certification.type]}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-purple-800 dark:text-purple-200">
          {provider}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
        {date && (
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 dark:border-white/10 dark:bg-zinc-900">
            {date}
          </span>
        )}
        {detail && (
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 dark:border-white/10 dark:bg-zinc-900">
            {detail}
          </span>
        )}
      </div>

      <p className="mt-5 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {description}
      </p>

      {certification.topics && certification.topics.length > 0 && (
        <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            {copy.topicsLabel}
          </p>
          <ul
            className="mt-3 flex flex-wrap gap-2"
            aria-label={`${copy.topicsLabel}: ${title}`}
          >
            {certification.topics.map((topic) => (
              <li
                key={topic.en}
                className="rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-950 shadow-sm shadow-purple-950/5 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none"
              >
                {getLocalizedText(topic, locale)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function CertificationsSection({ locale }: CertificationsSectionProps) {
  const copy = certificationsSectionCopy[locale];

  return (
    <Section
      id="certifications"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="border-t border-purple-200/70 bg-white/75 dark:border-white/10 dark:bg-zinc-950"
    >
      {certifications.length > 0 ? (
        <>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <Reveal key={certification.title.en} delayMs={index * 80}>
                <CertificationCard
                  certification={certification}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>
        </>
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
