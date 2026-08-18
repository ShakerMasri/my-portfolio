import type { ProfileConfig } from "@/types/portfolio";

export const profile = {
  displayName: "Shaker Al-Masri",
  role: {
    en: "Final-year Computer Engineering student · Backend-focused Software Engineer / Full-stack Developer",
    ar: "طالب هندسة حاسوب في السنة الأخيرة · مهندس برمجيات يركّز على الباك إند / مطوّر Full-stack",
  },
  shortBio: {
    en: "I focus on backend/software engineering while building complete full-stack applications, with project work across validation, databases, authentication, testing, and deployment.",
    ar: "أركّز على هندسة البرمجيات والباك إند مع بناء تطبيقات Full-stack متكاملة، ولدي عمل تطبيقي في التحقق، قواعد البيانات، المصادقة، الاختبار، والنشر.",
  },
  photo: {
    src: "/images/profile.webp",
    alt: {
      en: "Portrait of Shaker Al-Masri",
      ar: "صورة شخصية لشاكر المصري",
    },
    width: 960,
    height: 1200,
  },
  hero: {
    eyebrow: {
      en: "Final-year Computer Engineering · Backend-focused Software Engineering",
      ar: "هندسة حاسوب — السنة الأخيرة · تركيز على هندسة البرمجيات والباك إند",
    },
    headline: {
      en: "Backend-focused engineering, with full-stack delivery.",
      ar: "أركّز على هندسة الباك إند مع القدرة على بناء تطبيقات Full-stack متكاملة.",
    },
    description: {
      en: "I’m Shaker Al-Masri, a final-year Computer Engineering student at An-Najah National University focused on backend/software engineering. My project work spans server-side validation, databases, authentication, testing, deployment, and the frontend needed to deliver complete applications.",
      ar: "أنا شاكر المصري، طالب هندسة حاسوب في السنة الأخيرة في جامعة النجاح الوطنية أركّز على هندسة البرمجيات والباك إند. تشمل مشاريعي التحقق على السيرفر، قواعد البيانات، المصادقة، الاختبار، النشر، والواجهة اللازمة لبناء تطبيقات متكاملة.",
    },
    primaryAction: {
      label: {
        en: "View projects",
        ar: "عرض المشاريع",
      },
      href: "#projects",
    },
    secondaryAction: {
      label: {
        en: "Contact me",
        ar: "تواصل معي",
      },
      href: "#contact",
    },
  },
  about: {
    eyebrow: {
      en: "About me",
      ar: "عني",
    },
    title: {
      en: "Backend-focused by direction, full-stack by capability.",
      ar: "تركيزي الأساسي على الباك إند، مع قدرة Full-stack عند بناء التطبيق كاملاً.",
    },
    paragraphs: [
      {
        en: "I’m building toward backend/software engineering roles, with particular interest in data flow, validation, authentication, reliability, testing, and maintainable application structure.",
        ar: "أبني مساري نحو أدوار هندسة البرمجيات والباك إند، مع اهتمام خاص بتدفق البيانات، التحقق، المصادقة، الاعتمادية، الاختبار، وبنية التطبيقات القابلة للصيانة.",
      },
      {
        en: "I still work across the full stack when a project needs it. Frontend work is part of delivering complete, usable applications—not the main direction I’m pursuing.",
        ar: "أعمل أيضاً عبر الـ Full-stack عندما يحتاج المشروع ذلك. الواجهة جزء من تقديم تطبيق متكامل وسهل الاستخدام، لكنها ليست الاتجاه الرئيسي الذي أركز عليه.",
      },
    ],
    highlights: [
      {
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        value: {
          en: "Backend / software engineering",
          ar: "هندسة البرمجيات / الباك إند",
        },
      },
      {
        label: {
          en: "Background",
          ar: "الخلفية",
        },
        value: {
          en: "Final-year Computer Engineering · An-Najah National University",
          ar: "هندسة حاسوب — السنة الأخيرة · جامعة النجاح الوطنية",
        },
      },
      {
        label: {
          en: "Principles",
          ar: "المبادئ",
        },
        value: {
          en: "Reliability, maintainability, accessible UI",
          ar: "الاعتمادية، قابلية الصيانة، وواجهة متاحة",
        },
      },
    ],
  },
} as const satisfies ProfileConfig;
