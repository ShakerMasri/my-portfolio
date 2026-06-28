export type Locale = "en" | "ar";

export type LocalizedText = Record<Locale, string>;

export type SiteConfig = {
  name: string;
  description: LocalizedText;
  defaultLocale: Locale;
  supportedLocales: readonly Locale[];
};

export type ProfileConfig = {
  displayName: string;
  role: LocalizedText;
  shortBio: LocalizedText;
};

export type NavigationItem = {
  href: `#${string}` | `/${string}`;
  label: LocalizedText;
};

export type SocialLink = {
  label: string;
  href: `https://${string}` | `mailto:${string}` | `tel:${string}`;
};

export type SkillCategory = {
  title: LocalizedText;
  skills: readonly string[];
};

export type ProjectStatus = "planned" | "in-progress" | "completed";

export type ProjectConfig = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  tags: readonly string[];
  status: ProjectStatus;
  featured?: boolean;
  links?: {
    live?: `https://${string}`;
    source?: `https://${string}`;
  };
};
