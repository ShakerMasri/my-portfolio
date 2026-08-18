import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  {
    title: {
      en: "Backend & APIs",
      ar: "الباك إند وواجهات API",
    },
    description: {
      en: "Server-side development demonstrated through backend and full-stack projects, with emphasis on APIs, validation, authentication, and business logic.",
      ar: "تطوير على جانب السيرفر مطبّق في مشاريع باك إند وFull-stack، مع تركيز على واجهات API، التحقق، المصادقة، ومنطق الأعمال.",
    },
    skills: [
      "TypeScript / Node.js",
      "NestJS",
      "Next.js server routes",
      "REST APIs",
      "Authentication & authorization",
      "Validation",
      "Transactional business logic",
    ],
  },
  {
    title: {
      en: "Databases & Data Modeling",
      ar: "قواعد البيانات ونمذجة البيانات",
    },
    description: {
      en: "Relational data work across project backends, including schema design, ORM usage, relationships, constraints, and server-side querying.",
      ar: "عمل على البيانات العلائقية في باك إند المشاريع، ويشمل تصميم المخططات، استخدام ORM، العلاقات، القيود، والاستعلام من جانب السيرفر.",
    },
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "TypeORM",
      "Relational data modeling",
      "Server-side querying & pagination",
    ],
  },
  {
    title: {
      en: "Frontend",
      ar: "الواجهة الأمامية",
    },
    description: {
      en: "Frontend tools used to build responsive, accessible interfaces while supporting full-stack application work.",
      ar: "أدوات واجهة أمامية أستخدمها لبناء واجهات متجاوبة وقابلة للوصول ضمن عملي على تطبيقات Full-stack.",
    },
    skills: [
      "React",
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Responsive layouts",
      "Semantic HTML",
      "English / Arabic & RTL",
    ],
  },
  {
    title: {
      en: "Engineering Tools / Testing / Infrastructure",
      ar: "أدوات الهندسة والاختبار والبنية التحتية",
    },
    description: {
      en: "Tools and practices used to keep project changes testable, reviewable, and maintainable without overstating infrastructure experience.",
      ar: "أدوات وممارسات أستخدمها لإبقاء تغييرات المشاريع قابلة للاختبار والمراجعة والصيانة دون المبالغة في خبرة البنية التحتية.",
    },
    skills: [
      "Git & GitHub",
      "ESLint",
      "TypeScript type checking",
      "Vitest",
      "Playwright",
      "GitHub Actions CI",
    ],
  },
] as const satisfies readonly SkillCategory[];
