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
      "A compact record of completed and in-progress learning that supports the project work above.",
    emptyTitle: "Certifications will be added after the details are ready.",
    emptyText:
      "This section is wired to typed certification data without inventing credentials.",
  },
  ar: {
    eyebrow: "الشهادات وورش العمل",
    title: "محطات تعلم تدعم عملي على المشاريع.",
    description:
      "سجل مختصر للتعلم المكتمل والجاري، يدعم المشاريع العملية المعروضة أعلاه.",
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
  const title = getLocalizedText(certification.title, locale);
  const provider = getLocalizedText(certification.provider, locale);
  const date = certification.date
    ? getLocalizedText(certification.date, locale)
    : undefined;
  const detail = certification.detail
    ? getLocalizedText(certification.detail, locale)
    : undefined;
  const description = getLocalizedText(certification.description, locale);
  const metadata = [date, detail].filter(
    (value): value is string => Boolean(value),
  );

  return (
    <article className="h-full rounded-2xl border border-purple-200/60 bg-white/80 p-5 shadow-sm shadow-purple-950/5 ring-1 ring-white/70 dark:border-white/10 dark:bg-zinc-950 dark:shadow-none dark:ring-transparent">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {typeLabels[locale][certification.type]}
        </span>
        <span className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-900 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
          {statusLabels[locale][certification.status]}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-purple-800 dark:text-purple-200">
        {provider}
      </p>

      {metadata.length > 0 && (
        <p className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {metadata.join(" · ")}
        </p>
      )}

      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {description}
      </p>
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
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title.en} delayMs={index * 60}>
              <CertificationCard certification={certification} locale={locale} />
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
