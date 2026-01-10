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
    title: home.title,
    description: home.description,
    alternates: {
      canonical: `${baseURL}/${locale}`,
    },
    openGraph: {
      title: home.title,
      description: home.description,
      url: `${baseURL}/${locale}`,
      images: [
        {
          url: home.image,
          alt: home.title,
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

  const structure = [
    {
      title: dict.about.introduction,
      display: about.intro.display,
      items: [],
    },
    {
      title: dict.about.workExperience,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: dict.about.studies,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: dict.about.technicalSkills,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.name),
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
            name: about.title,
            description: about.description,
            url: `${baseURL}/${locale}`,
            author: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person.avatar}`,
            },
          }),
        }}
      />

      {about.tableOfContent.display && (
        <TableOfContents structure={structure} about={about} />
      )}

      <div className="flex flex-col md:flex-row w-full justify-center gap-8 md:gap-12 pt-10">
        <AboutAside person={person} display={about.avatar.display} />

        <article className="flex flex-col flex-[9] w-full mx-auto md:mx-0">
          <Hero
            person={person}
            social={social}
            about={about}
            featured={home.featured}
            locale={locale}
          />

          <section className="flex flex-col w-full">
            <WorkExperience
              work={{ ...about.work, title: dict.about.workExperience }}
            />

            <Studies
              studies={{ ...about.studies, title: dict.about.studies }}
            />

            <TechnicalSkills
              technical={{
                ...about.technical,
                title: dict.about.technicalSkills,
              }}
            />
          </section>
        </article>
      </div>
    </div>
  );
}
