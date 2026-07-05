import type { CertificationConfig } from "@/types/portfolio";

export const certifications = [
  {
    title: {
      en: "Front End Web Developer Nanodegree",
      ar: "برنامج Front End Web Developer Nanodegree",
    },
    provider: {
      en: "Udacity",
      ar: "Udacity",
    },
    type: "course",
    status: "completed",
    date: {
      en: "June 2025",
      ar: "يونيو 2025",
    },
    description: {
      en: "Certificate of Nanodegree program completion focused on frontend web development.",
      ar: "شهادة إكمال برنامج Nanodegree مركّز على تطوير واجهات الويب.",
    },
  },
  {
    title: {
      en: "The Complete Full-Stack Web Development Bootcamp",
      ar: "دورة The Complete Full-Stack Web Development Bootcamp",
    },
    provider: {
      en: "Udemy / Dr. Angela Yu",
      ar: "Udemy / Dr. Angela Yu",
    },
    type: "course",
    status: "in-progress",
    detail: {
      en: "62+ hours",
      ar: "أكثر من 62 ساعة",
    },
    description: {
      en: "Currently working through a project-based full-stack web development course covering frontend foundations, React, Node.js, Express, PostgreSQL, authentication, APIs, deployment basics, and modern developer workflows.",
      ar: "أعمل حالياً على دورة تطوير ويب Full-Stack مبنية على مشاريع عملية، وتغطي أساسيات الواجهة الأمامية وReact وNode.js وExpress وPostgreSQL والتوثيق وAPIs وأساسيات النشر وطريقة عمل المطورين الحديثة.",
    },
    topics: [
      {
        en: "React",
        ar: "React",
      },
      {
        en: "Node.js",
        ar: "Node.js",
      },
      {
        en: "Express",
        ar: "Express",
      },
      {
        en: "PostgreSQL",
        ar: "PostgreSQL",
      },
      {
        en: "Authentication",
        ar: "التوثيق",
      },
      {
        en: "APIs",
        ar: "APIs",
      },
    ],
  },
  {
    title: {
      en: "Arduino Training Course",
      ar: "دورة تدريب Arduino",
    },
    provider: {
      en: "IEEE An-Najah National University / RAS Community",
      ar: "IEEE جامعة النجاح الوطنية / مجتمع RAS",
    },
    type: "course",
    status: "completed",
    date: {
      en: "September 2025",
      ar: "سبتمبر 2025",
    },
    detail: {
      en: "42 training hours",
      ar: "42 ساعة تدريبية",
    },
    description: {
      en: "Completed a practical Arduino training course connected to electronics and embedded systems fundamentals.",
      ar: "إكمال دورة Arduino عملية مرتبطة بأساسيات الإلكترونيات والأنظمة المدمجة.",
    },
  },
  {
    title: {
      en: "RASCadia Bootcamp Workshop Certificates",
      ar: "شهادات ورش عمل RASCadia Bootcamp",
    },
    provider: {
      en: "IEEE RAS",
      ar: "IEEE RAS",
    },
    type: "workshop",
    status: "completed",
    date: {
      en: "September–October 2025",
      ar: "سبتمبر–أكتوبر 2025",
    },
    detail: {
      en: "4 workshop certificates",
      ar: "4 شهادات ورش عمل",
    },
    description: {
      en: "A grouped workshop series from the same bootcamp to keep the portfolio concise while still showing the covered topics.",
      ar: "مجموعة ورش من نفس المعسكر، تم جمعها في بطاقة واحدة حتى يبقى القسم مرتباً مع توضيح المواضيع التي تم تغطيتها.",
    },
    topics: [
      {
        en: "Python",
        ar: "Python",
      },
      {
        en: "Cyber Security",
        ar: "الأمن السيبراني",
      },
      {
        en: "Robotics",
        ar: "الروبوتات",
      },
      {
        en: "Raspberry Pi",
        ar: "Raspberry Pi",
      },
    ],
  },
] as const satisfies readonly CertificationConfig[];
