import { baseURL, about, person, blog } from "@/resources";
import { Posts } from "@/components/blog/Posts";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `${baseURL}/${locale}/blog`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${baseURL}/${locale}/blog`,
    },
  };
}

export default async function BlogPage({
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
            name: blog.title,
            description: blog.description,
            url: `${baseURL}/${locale}/blog`,
            author: {
              "@type": "Person",
              name: person.name,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person.avatar}`,
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
