import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { isLocale } from "@/i18n/locales";

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function Home({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <>
      <HeroSection locale={localeParam} />
      <AboutSection locale={localeParam} />
      <ProjectsSection locale={localeParam} />
      <SkillsSection locale={localeParam} />
      <EducationSection locale={localeParam} />
      <CertificationsSection locale={localeParam} />
      <ContactSection locale={localeParam} />
    </>
  );
}
