import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: work.title,
    description: work.description,
    alternates: {
      canonical: `${baseURL}/${locale}/projects`,
    },
    openGraph: {
      title: work.title,
      description: work.description,
      url: `${baseURL}/${locale}/projects`,
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto pt-24 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: work.title,
            description: work.description,
            url: `${baseURL}/${locale}/projects`,
            author: {
              "@type": "Person",
              name: person.name,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person.avatar}`,
            },
          }),
        }}
      />
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[var(--neutral-on-background-strong)]">
        {dict.navigation.projects}
      </h1>
      <Projects locale={locale} />
    </div>
  );
}
