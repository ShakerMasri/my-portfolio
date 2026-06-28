import type { SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  name: "Personal Portfolio",
  description: {
    en: "Professional portfolio for a Computer Engineering student and full-stack web developer.",
    ar: "ملف شخصي احترافي لطالب هندسة حاسوب ومطوّر ويب Full-stack.",
  },
  defaultLocale: "en",
  supportedLocales: ["en", "ar"],
} as const satisfies SiteConfig;
