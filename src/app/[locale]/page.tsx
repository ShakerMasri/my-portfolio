import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Section } from "@/components/ui/section";
import { isLocale } from "@/i18n/locales";

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

const upcomingSections = [
  {
    id: "contact",
    title: {
      en: "Contact",
      ar: "تواصل",
    },
    text: {
      en: "Finally we will add safe contact and social links without exposing private information.",
      ar: "أخيراً سنضيف روابط تواصل آمنة بدون كشف معلومات خاصة غير ضرورية.",
    },
  },
] as const;

export default async function Home({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <>
      <HeroSection locale={localeParam} />
      <AboutSection locale={localeParam} />
      <SkillsSection locale={localeParam} />
      <ProjectsSection locale={localeParam} />

      <Section
        eyebrow={localeParam === "en" ? "Coming next" : "قريباً"}
        title={
          localeParam === "en"
            ? "The remaining sections will be added in focused checkpoints."
            : "سنضيف الأقسام المتبقية على مراحل مركزة."
        }
        description={
          localeParam === "en"
            ? "This keeps the portfolio easy to review, test, and improve without rushing into a full UI at once."
            : "هذا يجعل مراجعة الملف الشخصي واختباره وتحسينه أسهل بدون بناء الواجهة كاملة مرة واحدة."
        }
        className="border-t border-zinc-200 bg-white"
      >
        <div className="grid gap-6">
          {upcomingSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-zinc-950">
                {section.title[localeParam]}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {section.text[localeParam]}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
