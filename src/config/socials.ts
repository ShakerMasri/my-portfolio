import type { SocialLink } from "@/types/portfolio";

export const socials = [
  {
    kind: "github",
    label: {
      en: "GitHub",
      ar: "GitHub",
    },
    href: "https://github.com/ShakerMasri",
  },
  {
    kind: "linkedin",
    label: {
      en: "LinkedIn",
      ar: "LinkedIn",
    },
    href: "https://www.linkedin.com/in/shaker-al-masri/",
  },
  {
    kind: "facebook",
    label: {
      en: "Facebook",
      ar: "Facebook",
    },
    href: "https://www.facebook.com/shaker.almasri.75/",
  },
  {
    kind: "instagram",
    label: {
      en: "Instagram",
      ar: "Instagram",
    },
    href: "https://www.instagram.com/shaker_al_masri/",
  },
  {
    kind: "whatsapp",
    label: {
      en: "WhatsApp",
      ar: "WhatsApp",
    },
    href: "https://wa.me/970599355107",
  },
  {
    kind: "phone",
    label: {
      en: "Phone",
      ar: "رقم الهاتف",
    },
    href: "tel:+970599355107",
  },
] as const satisfies readonly SocialLink[];
