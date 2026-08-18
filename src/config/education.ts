import type { EducationConfig } from "@/types/portfolio";

export const education = [
  {
    program: {
      en: "Bachelor's degree in Computer Engineering",
      ar: "درجة البكالوريوس في هندسة الحاسوب",
    },
    institution: {
      en: "An-Najah National University",
      ar: "جامعة النجاح الوطنية",
    },
    status: {
      en: "Final-year student",
      ar: "طالب في السنة الأخيرة",
    },
    details: [
      {
        en: "Advanced Software Engineering · Spring 2026",
        ar: "هندسة البرمجيات المتقدمة · ربيع 2026",
      },
    ],
  },
] as const satisfies readonly EducationConfig[];
