import type { SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  name: "Shaker Al-Masri",
  title: {
    en: "Shaker Al-Masri | Backend-focused Software Engineer",
    ar: "شاكر المصري | مهندس برمجيات يركّز على الباك إند",
  },
  description: {
    en: "Portfolio of Shaker Al-Masri, a final-year Computer Engineering student focused on backend/software engineering who also builds full-stack applications.",
    ar: "الملف الشخصي لشاكر المصري، طالب هندسة حاسوب في السنة الأخيرة يركّز على هندسة البرمجيات والباك إند ويطوّر أيضاً تطبيقات Full-stack.",
  },
  url: "https://shakerweb.com",
  defaultLocale: "en",
  supportedLocales: ["en", "ar"],
} as const satisfies SiteConfig;
