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
    href: "#skills",
    label: {
      en: "Skills",
      ar: "المهارات",
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
    href: "#contact",
    label: {
      en: "Contact",
      ar: "تواصل",
    },
  },
] as const satisfies readonly NavigationItem[];
