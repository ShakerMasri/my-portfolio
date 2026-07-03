export type Locale = "en" | "ar";

export type LocalizedText = Record<Locale, string>;

export type SiteConfig = {
  name: string;
  title: LocalizedText;
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

export type ProfilePhoto = {
  src: `/${string}`;
  alt: LocalizedText;
  width: number;
  height: number;
};

export type ProfileConfig = {
  displayName: string;
  role: LocalizedText;
  shortBio: LocalizedText;
  photo?: ProfilePhoto;
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

export type SocialLinkKind =
  | "email"
  | "github"
  | "linkedin"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "phone"
  | "website";

export type SocialLink = {
  kind: SocialLinkKind;
  label: LocalizedText;
  href: `https://${string}` | `mailto:${string}` | `tel:${string}`;
};

export type SkillCategory = {
  title: LocalizedText;
  description: LocalizedText;
  skills: readonly string[];
};

export type ProjectStatus = "planned" | "in-progress" | "completed";

export type ProjectCaseStudyMetaItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProjectCaseStudySection = {
  title: LocalizedText;
  body: readonly LocalizedText[];
  bullets?: readonly LocalizedText[];
};

export type ProjectCaseStudy = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  meta: readonly ProjectCaseStudyMetaItem[];
  sections: readonly ProjectCaseStudySection[];
};

export type ProjectConfig = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  highlights: readonly LocalizedText[];
  tags: readonly string[];
  status: ProjectStatus;
  featured?: boolean;
  caseStudy?: ProjectCaseStudy;
  links?: {
    live?: `https://${string}`;
    source?: `https://${string}`;
  };
};
