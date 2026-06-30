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
  hero: {
    eyebrow: {
      en: "Computer Engineering × Full-stack Web Development",
      ar: "هندسة حاسوب × تطوير ويب Full-stack",
    },
    headline: {
      en: "Building reliable web experiences with an engineering mindset.",
      ar: "أبني تجارب ويب موثوقة بعقلية هندسية.",
    },
    description: {
      en: "I’m Shaker Al-Masri, a Computer Engineering student and full-stack web developer focused on clean interfaces, practical systems, and maintainable code.",
      ar: "أنا شاكر المصري، طالب هندسة حاسوب ومطوّر ويب Full-stack أركز على الواجهات النظيفة، الأنظمة العملية، والكود القابل للصيانة.",
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
      en: "A developer who cares about both the interface and the system behind it.",
      ar: "مطوّر يهتم بالواجهة وبالنظام الذي يعمل خلفها.",
    },
    paragraphs: [
      {
        en: "I enjoy turning ideas into clear, responsive web experiences that feel simple for users and organized for developers.",
        ar: "أستمتع بتحويل الأفكار إلى تجارب ويب واضحة ومتجاوبة تكون سهلة للمستخدم ومنظمة للمطوّر.",
      },
      {
        en: "My Computer Engineering background helps me think beyond the screen: performance, data flow, reliability, and how software connects with real systems.",
        ar: "خلفيتي في هندسة الحاسوب تساعدني على التفكير بما هو أبعد من الواجهة: الأداء، تدفق البيانات، الاعتمادية، وكيف يتصل البرنامج بالأنظمة الحقيقية.",
      },
    ],
    highlights: [
      {
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        value: {
          en: "Full-stack web development",
          ar: "تطوير ويب Full-stack",
        },
      },
      {
        label: {
          en: "Background",
          ar: "الخلفية",
        },
        value: {
          en: "Computer Engineering",
          ar: "هندسة الحاسوب",
        },
      },
      {
        label: {
          en: "Principles",
          ar: "المبادئ",
        },
        value: {
          en: "Clean UI, accessibility, maintainability",
          ar: "واجهة نظيفة، إتاحة، وقابلية للصيانة",
        },
      },
    ],
  },
} as const satisfies ProfileConfig;
