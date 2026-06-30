import { notFound } from "next/navigation";
import { profile } from "@/config";
import { getLocalizedText, isLocale } from "@/i18n/locales";
import { Container } from "@/components/ui/container";

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

  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          {localeParam === "en" ? "Portfolio foundation" : "أساس الملف الشخصي"}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {profile.displayName}
        </h1>

        <p className="mt-4 text-xl text-zinc-700">
          {getLocalizedText(profile.role, localeParam)}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          {getLocalizedText(profile.shortBio, localeParam)}
        </p>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section
          id="about"
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-lg font-semibold text-zinc-950">
            {localeParam === "en" ? "Layout shell is ready" : "هيكل الصفحة جاهز"}
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <li>
              {localeParam === "en"
                ? "The page now has a reusable header, footer, and content container."
                : "أصبحت الصفحة تحتوي على رأس وتذييل وحاوية محتوى قابلة لإعادة الاستخدام."}
            </li>
            <li>
              {localeParam === "en"
                ? "Navigation links are localized and point to future page sections."
                : "روابط التنقل مترجمة وتشير إلى أقسام الصفحة القادمة."}
            </li>
            <li>
              {localeParam === "en"
                ? "The language switcher works without adding any new dependency."
                : "مبدّل اللغة يعمل بدون إضافة أي مكتبة جديدة."}
            </li>
          </ul>
        </section>

        <aside className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold">
            {localeParam === "en" ? "Next checkpoint" : "المرحلة القادمة"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {localeParam === "en"
              ? "Next, we will replace these placeholders with real hero, about, skills, projects, and contact sections."
              : "بعد ذلك سنستبدل هذه العناصر المؤقتة بأقسام حقيقية للمقدمة، عني، المهارات، المشاريع، والتواصل."}
          </p>
        </aside>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          {
            id: "skills",
            title: localeParam === "en" ? "Skills" : "المهارات",
            text:
              localeParam === "en"
                ? "A placeholder for your technical stack."
                : "مساحة مؤقتة لعرض التقنيات التي تستخدمها.",
          },
          {
            id: "projects",
            title: localeParam === "en" ? "Projects" : "المشاريع",
            text:
              localeParam === "en"
                ? "A placeholder for selected work."
                : "مساحة مؤقتة لعرض المشاريع المختارة.",
          },
          {
            id: "contact",
            title: localeParam === "en" ? "Contact" : "تواصل",
            text:
              localeParam === "en"
                ? "A placeholder for safe contact links."
                : "مساحة مؤقتة لروابط التواصل الآمنة.",
          },
        ].map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
