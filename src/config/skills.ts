import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  {
    title: {
      en: "Frontend and UI",
      ar: "الواجهة وتجربة المستخدم",
    },
    description: {
      en: "Core tools used to build a clean, responsive, and maintainable user interface.",
      ar: "أدوات أساسية لبناء واجهة نظيفة، متجاوبة، وسهلة الصيانة.",
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
      en: "Localization and accessibility",
      ar: "التعريب والإتاحة",
    },
    description: {
      en: "Practices that make the portfolio easier to use across languages, devices, and input methods.",
      ar: "ممارسات تجعل الملف أسهل استخداماً عبر اللغات، الأجهزة، وطرق الإدخال المختلفة.",
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
      en: "Development workflow",
      ar: "أسلوب التطوير",
    },
    description: {
      en: "Project habits that keep changes reviewable, typed, and safe to improve step by step.",
      ar: "عادات عمل تجعل التغييرات قابلة للمراجعة، مكتوبة بأنواع واضحة، وآمنة للتحسين خطوة بخطوة.",
    },
    skills: [
      "Git & GitHub",
      "Typed configuration",
      "Reusable components",
      "ESLint",
      "TypeScript type checking",
      "Production build checks",
    ],
  },
] as const satisfies readonly SkillCategory[];
