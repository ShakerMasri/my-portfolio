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

export type CertificationType = "course" | "workshop";

export type CertificationStatus = "completed" | "in-progress";

export type CertificationConfig = {
  title: LocalizedText;
  provider: LocalizedText;
  type: CertificationType;
  status: CertificationStatus;
  date?: LocalizedText;
  detail?: LocalizedText;
  description: LocalizedText;
  topics?: readonly LocalizedText[];
};

export type ProjectStatus = "planned" | "in-progress" | "completed";

export type ProjectRepositoryStatus = "public" | "private" | "available-on-request";

export type ProjectLiveDemoLink = {
  href: `https://${string}`;
  label?: LocalizedText;
  note?: LocalizedText;
  dataNotice?: LocalizedText;
};

export type ProjectRepository = {
  status: ProjectRepositoryStatus;
  label: LocalizedText;
  note?: LocalizedText;
};

export type ProjectCaseStudyMetaItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProjectCaseStudySection = {
  title: LocalizedText;
  body: readonly LocalizedText[];
  bullets?: readonly LocalizedText[];
};

export type ProjectCaseStudyMediaVideo = {
  src: `/${string}`;
  poster?: `/${string}`;
  label: LocalizedText;
  caption: LocalizedText;
};

export type ProjectCaseStudyMediaScreenshot = {
  src: `/${string}`;
  alt: LocalizedText;
  caption: LocalizedText;
};

export type ProjectCaseStudyMediaScreenshots = {
  title: LocalizedText;
  description: LocalizedText;
  images: readonly ProjectCaseStudyMediaScreenshot[];
};

export type ProjectCaseStudyMedia = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  desktop: ProjectCaseStudyMediaVideo;
  mobile: ProjectCaseStudyMediaVideo;
  screenshots?: ProjectCaseStudyMediaScreenshots;
};

export type ProjectCaseStudy = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  meta: readonly ProjectCaseStudyMetaItem[];
  sections: readonly ProjectCaseStudySection[];
  media?: ProjectCaseStudyMedia;
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
  repository?: ProjectRepository;
  links?: {
    live?: ProjectLiveDemoLink;
    source?: `https://${string}`;
  };
};
