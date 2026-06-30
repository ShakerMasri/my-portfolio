import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/config";
import { getLocalizedText, isLocale } from "@/i18n/locales";

const localeLabels = {
  en: "العربية",
  ar: "English",
} as const;

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function Home({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const alternateLocale = localeParam === "en" ? "ar" : "en";

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <section className="mx-auto w-full max-w-3xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            Portfolio foundation
          </p>

          <Link
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            {localeLabels[localeParam]}
          </Link>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {profile.displayName}
        </h1>

        <p className="mt-4 text-xl text-zinc-700">
          {getLocalizedText(profile.role, localeParam)}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          {getLocalizedText(profile.shortBio, localeParam)}
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-950">
            {localeParam === "en"
              ? "Checkpoint 3 adds language routing"
              : "المرحلة الثالثة تضيف أساس اللغات"}
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <li>
              {localeParam === "en"
                ? "English and Arabic now have separate routes."
                : "أصبح للإنجليزية والعربية روابط منفصلة."}
            </li>
            <li>
              {localeParam === "en"
                ? "The html lang and dir attributes now match the selected language."
                : "خصائص lang و dir في صفحة HTML تتغير حسب اللغة المختارة."}
            </li>
            <li>
              {localeParam === "en"
                ? "Localized content is still typed and comes from config files."
                : "المحتوى متعدد اللغات لا يزال منظماً ومحمياً بأنواع TypeScript."}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
