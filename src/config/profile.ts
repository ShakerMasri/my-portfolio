import type { ProfileConfig } from "@/types/portfolio";

export const profile = {
  displayName: "Shaker Al-Masri",
  role: {
    en: "Computer Engineering student & full-stack web developer",
    ar: "طالب هندسة حاسوب ومطوّر ويب Full-stack",
  },
  shortBio: {
    en: "I build clean, reliable, and user-focused web experiences while growing my skills in software engineering and computer engineering.",
    ar: "أبني تجارب ويب نظيفة وموثوقة ومريحة للمستخدم، مع تطوير مهاراتي في هندسة البرمجيات وهندسة الحاسوب.",
  },
} as const satisfies ProfileConfig;
