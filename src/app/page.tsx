import { profile, siteConfig } from "@/config";

export default function Home() {
  const locale = siteConfig.defaultLocale;

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <section className="mx-auto w-full max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Portfolio foundation
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {profile.displayName}
        </h1>

        <p className="mt-4 text-xl text-zinc-700">{profile.role[locale]}</p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          {profile.shortBio[locale]}
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-950">
            Checkpoint 2 is about structure
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <li>Content now lives in typed config files.</li>
            <li>English and Arabic text use the same typed shape.</li>
            <li>The default starter UI and logo links are removed.</li>
            <li>No external packages, templates, or unsafe assets were added.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
