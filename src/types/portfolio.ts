export type Locale = "en" | "ar";

export type LocalizedText = Record<Locale, string>;

export type SiteConfig = {
  name: string;
  description: LocalizedText;
  defaultLocale: Locale;
  supportedLocales: readonly Locale[];
};

export type PortfolioLink = {
  label: LocalizedText;
  href: `#${string}` | `/${string}` | `https://${string}` | `mailto:${string}`;
};

export type ProfileHighlight = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProfileConfig = {
  displayName: string;
  role: LocalizedText;
  shortBio: LocalizedText;
  hero: {
    eyebrow: LocalizedText;
    headline: LocalizedText;
    description: LocalizedText;
    primaryAction: PortfolioLink;
    secondaryAction: PortfolioLink;
  };
  about: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    paragraphs: readonly LocalizedText[];
    highlights: readonly ProfileHighlight[];
  };
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
