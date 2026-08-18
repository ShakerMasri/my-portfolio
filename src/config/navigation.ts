import type { NavigationItem } from "@/types/portfolio";

export const navigation = [
  {
    href: "#about",
    label: {
      en: "About",
      ar: "عني",
    },
  },
  {
    href: "#projects",
    label: {
      en: "Projects",
      ar: "المشاريع",
    },
  },
  {
    href: "#skills",
    label: {
      en: "Skills",
      ar: "المهارات",
    },
  },
  {
    href: "#certifications",
    label: {
      en: "Certificates",
      ar: "الشهادات",
    },
  },
  {
    href: "#contact",
    label: {
      en: "Contact",
      ar: "تواصل",
    },
  },
] as const satisfies readonly NavigationItem[];
