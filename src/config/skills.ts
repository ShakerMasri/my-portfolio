import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
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
      en: "Backend and data",
      ar: "الباك إند والبيانات",
    },
    description: {
      en: "Server-side foundations demonstrated through full-stack project work.",
      ar: "أساسيات السيرفر والبيانات التي أطبقها من خلال مشاريع Full-stack حقيقية.",
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
  {
    title: {
      en: "Workflow and quality",
      ar: "أسلوب العمل والجودة",
    },
    description: {
      en: "Habits and tools that keep changes reviewable, tested, and safe to improve step by step.",
      ar: "عادات وأدوات تجعل التغييرات قابلة للمراجعة، الاختبار، والتحسين خطوة بخطوة.",
    },
    skills: [
      "Git & GitHub",
      "Typed configuration",
      "Step-by-step delivery",
      "ESLint",
      "TypeScript type checking",
      "Vitest / Playwright",
      "AI-assisted development workflow",
    ],
  },
] as const satisfies readonly SkillCategory[];
