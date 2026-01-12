import { baseURL, about, person, blog } from "@/resources";
import { Posts } from "@/components/blog/Posts";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const blogLocale = blog[locale];
  return {
    title: blogLocale.title,
    description: blogLocale.description,
    alternates: {
      canonical: `${baseURL}/${locale}/blog`,
    },
    openGraph: {
      title: blogLocale.title,
      description: blogLocale.description,
      url: `${baseURL}/${locale}/blog`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);

  const blogLocale = blog[locale];

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto pt-24 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: blogLocale.title,
            description: blogLocale.description,
            url: `${baseURL}/${locale}/blog`,
            author: {
              "@type": "Person",
              name: person[locale].name,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person[locale].avatar}`,
            },
          }),
        }}
      />
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--neutral-on-background-strong)]">
        {dict.navigation.blog}
      </h1>
      <Posts locale={locale} />
    </div>
  );
}
