import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { siteConfig } from "@/config/site";
import { getTextDirection, isLocale } from "@/i18n/locales";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.supportedLocales.map((locale) => ({ locale }));
}

function getOpenGraphLocale(locale: (typeof siteConfig.supportedLocales)[number]) {
  return locale === "ar" ? "ar_PS" : "en_US";
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : siteConfig.defaultLocale;

  const title = siteConfig.title[locale];
  const description = siteConfig.description[locale];
  const languageAlternates = Object.fromEntries([
    ...siteConfig.supportedLocales.map(
      (supportedLocale) =>
        [supportedLocale, `/${supportedLocale}`] as const,
    ),
    ["x-default", `/${siteConfig.defaultLocale}`] as const,
  ]);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
      url: `/${locale}`,
      locale: getOpenGraphLocale(locale),
      alternateLocale: siteConfig.supportedLocales
        .filter((supportedLocale) => supportedLocale !== locale)
        .map(getOpenGraphLocale),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <html
      lang={localeParam}
      dir={getTextDirection(localeParam)}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background text-foreground">
        <SkipLink />
        <div className="flex min-h-screen flex-col">
          <SiteHeader locale={localeParam} />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter locale={localeParam} />
        </div>
      </body>
    </html>
  );
}
