import { notFound } from "next/navigation";
import { baseURL, about, person, work, projects } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];

  for (const locale of i18n.locales) {
    for (const project of projects[locale]) {
      params.push({ locale, slug: project.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects[locale].find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${baseURL}/${locale}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${baseURL}/${locale}/projects/${project.slug}`,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(project.title)}`,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects[locale].find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-8 pt-10 px-4 md:px-8">
      {/* Schema / SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.title,
            description: project.summary,
            datePublished: project.publishedAt,
            dateModified: project.publishedAt,
            image: `/api/og/generate?title=${encodeURIComponent(
              project.title
            )}`,
            author: {
              "@type": "Person",
              name: person[locale].name,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person[locale].avatar}`,
            },
          }),
        }}
      />

      <div className="flex flex-col items-center max-w-[40rem] gap-4 text-center">
        <Link
          href={`/${locale}/projects`}
          className="text-sm font-bold text-[var(--neutral-on-background-strong)] hover:underline"
        >
          {dict.navigation.projects}
        </Link>
        <time className="text-xs text-[var(--neutral-on-background-weak)]">
          {project.publishedAt && formatDate(project.publishedAt)}
        </time>
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--neutral-on-background-strong)]">
          {project.title}
        </h1>

        {project.team && (
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-2">
              {project.team.map((member) => (
                <div
                  key={member.name}
                  className="relative w-8 h-8 rounded-full border-2 border-[var(--page-background)] overflow-hidden"
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-[var(--brand-weak)]">
              {project.team.map((member, idx) => (
                <React.Fragment key={member.name}>
                  {idx > 0 && (
                    <span className="text-[var(--neutral-on-background-weak)]">
                      ,{" "}
                    </span>
                  )}
                  {member.linkedIn ? (
                    <Link
                      href={member.linkedIn}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </Link>
                  ) : (
                    member.name
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {project.images.length > 0 && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="w-full max-w-[40rem] mx-auto prose prose-invert">
        {project.content}
      </article>

      <section className="flex flex-col items-center w-full gap-10 mt-10">
        <div className="w-full max-w-[40rem] h-[1px] bg-[var(--neutral-alpha-medium)]" />
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--neutral-on-background-strong)] mb-6">
          Related projects
        </h2>
        <Projects exclude={[project.slug]} range={[2]} locale={locale} />
      </section>

      <ScrollToHash />
    </div>
  );
}
