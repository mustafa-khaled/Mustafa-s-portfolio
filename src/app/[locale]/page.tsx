import { home, baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import React from "react";
import dynamic from "next/dynamic";
import { Hero, AboutAside } from "@/components/home";

// Lazy load sections for better initial performance
const WorkExperience = dynamic(
  () => import("@/components/home").then((mod) => mod.WorkExperience),
  {
    loading: () => (
      <div className="h-96 w-full animate-pulse bg-[var(--surface)] rounded-2xl mb-16" />
    ),
    ssr: true,
  }
);

const Studies = dynamic(
  () => import("@/components/home").then((mod) => mod.Studies),
  {
    loading: () => (
      <div className="h-48 w-full animate-pulse bg-[var(--surface)] rounded-2xl mb-16" />
    ),
    ssr: true,
  }
);

const TechnicalSkills = dynamic(
  () => import("@/components/home").then((mod) => mod.TechnicalSkills),
  {
    loading: () => (
      <div className="h-48 w-full animate-pulse bg-[var(--surface)] rounded-2xl mb-16" />
    ),
    ssr: true,
  }
);

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: home[locale].title,
    description: home[locale].description,
    alternates: {
      canonical: `${baseURL}/${locale}`,
    },
    openGraph: {
      title: home[locale].title,
      description: home[locale].description,
      url: `${baseURL}/${locale}`,
      images: [
        {
          url: home[locale].image,
          alt: home[locale].title,
        },
      ],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const homeLocale = home[locale];
  const aboutLocale = about[locale];

  const structure = [
    {
      title: dict.about.introduction,
      id: "about-intro",
      display: aboutLocale.intro.display,
      items: [],
    },
    {
      title: dict.about.workExperience,
      id: "about-work",
      display: aboutLocale.work.display,
      items: aboutLocale.work.experiences.map(
        (experience) => experience.company
      ),
    },
    {
      title: dict.about.studies,
      id: "about-studies",
      display: aboutLocale.studies.display,
      items: aboutLocale.studies.institutions.map(
        (institution) => institution.name
      ),
    },
    {
      title: dict.about.technicalSkills,
      id: "about-technical",
      display: aboutLocale.technical.display,
      items: aboutLocale.technical.skills.map((skill) => skill.name),
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 md:px-8">
      {/* Schema / SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: aboutLocale.title,
            description: aboutLocale.description,
            url: `${baseURL}/${locale}`,
            author: {
              "@type": "Person",
              name: person[locale].name,
              jobTitle: person[locale].role,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person[locale].avatar}`,
            },
          }),
        }}
      />

      {aboutLocale.tableOfContent.display && (
        <TableOfContents structure={structure} about={aboutLocale} />
      )}

      <div className="flex flex-col md:flex-row w-full justify-center gap-8 md:gap-12 pt-10">
        <AboutAside
          person={person[locale]}
          display={aboutLocale.avatar.display}
        />

        <article className="flex flex-col flex-[9] w-full mx-auto md:mx-0">
          <Hero
            person={person[locale]}
            social={social}
            about={aboutLocale}
            featured={homeLocale.featured}
            locale={locale}
            id="about-intro"
          />

          <section className="flex flex-col w-full">
            <WorkExperience
              work={{ ...aboutLocale.work, title: dict.about.workExperience }}
              id="about-work"
            />

            <Studies
              studies={{ ...aboutLocale.studies, title: dict.about.studies }}
              id="about-studies"
            />

            <TechnicalSkills
              technical={{
                ...aboutLocale.technical,
                title: dict.about.technicalSkills,
              }}
              id="about-technical"
            />
          </section>
        </article>
      </div>
    </div>
  );
}
