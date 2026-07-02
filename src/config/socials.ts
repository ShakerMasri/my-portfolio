import type { SocialLink } from "@/types/portfolio";

/**
 * Replace these platform homepage URLs with your real public profiles before publishing.
 * For a direct WhatsApp chat link, use the international number format:
 * https://wa.me/97059XXXXXXX
 *
 * For a phone link, use:
 * tel:+97059XXXXXXX
 */
export const socials = [
  {
    kind: "github",
    label: {
      en: "GitHub",
      ar: "GitHub",
    },
    href: "https://github.com/",
  },
  {
    kind: "linkedin",
    label: {
      en: "LinkedIn",
      ar: "LinkedIn",
    },
    href: "https://www.linkedin.com/",
  },
  {
    kind: "facebook",
    label: {
      en: "Facebook",
      ar: "Facebook",
    },
    href: "https://www.facebook.com/",
  },
  {
    kind: "instagram",
    label: {
      en: "Instagram",
      ar: "Instagram",
    },
    href: "https://www.instagram.com/",
  },
  {
    kind: "whatsapp",
    label: {
      en: "WhatsApp",
      ar: "WhatsApp",
    },
    href: "https://www.whatsapp.com/",
  },
  {
    kind: "phone",
    label: {
      en: "Phone",
      ar: "رقم الهاتف",
    },
    href: "tel:+970590000000",
  },
] as const satisfies readonly SocialLink[];
