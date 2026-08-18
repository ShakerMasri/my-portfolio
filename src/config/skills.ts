import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  {
    title: {
      en: "Backend and data",
      ar: "الباك إند والبيانات",
    },
    description: {
      en: "Server-side work demonstrated through full-stack projects, including validation, persistence, authentication, and transactional logic.",
      ar: "عمل على السيرفر مطبّق في مشاريع Full-stack، ويشمل التحقق، تخزين البيانات، المصادقة، والمنطق المرتبط بالمعاملات.",
    },
    skills: [
      "Server-side validation",
      "Prisma ORM",
      "PostgreSQL",
      "Authentication flows",
      "Transactional logic",
      "Environment configuration",
    ],
  },
  {
    title: {
      en: "Frontend and UI",
      ar: "الواجهة وتجربة المستخدم",
    },
    description: {
      en: "Core tools used to build clean, responsive, and maintainable interfaces.",
      ar: "أدوات أساسية لبناء واجهات نظيفة، متجاوبة، وسهلة الصيانة.",
    },
    skills: [
      "React",
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Responsive layouts",
      "Semantic HTML",
    ],
  },
  {
    title: {
      en: "Engineering tools and quality",
      ar: "أدوات الهندسة والجودة",
    },
    description: {
      en: "Tools and practices used to keep changes typed, testable, reviewable, and maintainable.",
      ar: "أدوات وممارسات تساعد على إبقاء التغييرات مقيّدة بالأنواع، قابلة للاختبار والمراجعة والصيانة.",
    },
    skills: [
      "Git & GitHub",
      "Typed configuration",
      "Step-by-step delivery",
      "ESLint",
      "TypeScript type checking",
      "Vitest / Playwright",
    ],
  },
  {
    title: {
      en: "Localization and accessibility",
      ar: "التعريب والإتاحة",
    },
    description: {
      en: "Practices that make interfaces easier to use across languages, devices, and input methods.",
      ar: "ممارسات تجعل الواجهات أسهل استخداماً عبر اللغات، الأجهزة، وطرق الإدخال المختلفة.",
    },
    skills: [
      "English / Arabic routes",
      "RTL layouts",
      "Keyboard-friendly navigation",
      "Visible focus states",
      "Readable content structure",
    ],
  },
] as const satisfies readonly SkillCategory[];
