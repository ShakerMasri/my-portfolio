import type { SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  name: "Shaker Al-Masri",
  description: {
    en: "Professional portfolio for Shaker Al-Masri, a Computer Engineering student and full-stack web developer.",
    ar: "ملف شخصي احترافي لشاكر المصري، طالب هندسة حاسوب ومطوّر ويب Full-stack.",
  },
  defaultLocale: "en",
  supportedLocales: ["en", "ar"],
} as const satisfies SiteConfig;
