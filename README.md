# Shaker Al-Masri — Portfolio

Personal portfolio for **Shaker Al-Masri**, a final-year Computer Engineering student focused on backend/software engineering with full-stack development capability.

**Live site:** https://shakerweb.com

## What this portfolio emphasizes

- Backend-focused software engineering positioning with honest junior-level scope.
- Featured project case studies, including Wasel Palestine and a full-stack clothing ecommerce project.
- Bilingual English/Arabic content with LTR/RTL support.
- Responsive light/dark UI with keyboard-visible focus states and reduced-motion support.
- Typed, config-driven portfolio content so projects, skills, education, certificates, navigation, and profile data stay maintainable.

## Main technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validation

The repository currently provides these validation scripts:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
src/app/[locale]/        Localized routes, layouts, metadata, and project pages
src/components/layout/   Header, footer, locale/theme controls, and navigation
src/components/sections/ Homepage sections
src/components/ui/       Small shared UI primitives
src/config/              Typed portfolio content and site configuration
src/i18n/                Locale helpers
src/types/               Portfolio configuration types
public/                  Local images and project media
```

## Localization and accessibility

The site supports English and Arabic, sets the document language and text direction per locale, and preserves keyboard focus styles throughout the interface. Motion-related UI respects `prefers-reduced-motion`, and the mobile/tablet navigation uses an accessible disclosure button with explicit expanded state and Escape-to-close behavior.

## Content approach

Projects are the primary evidence in the portfolio. Team work and personal contributions are separated where relevant, and project claims are kept specific rather than implying seniority or production scale.
