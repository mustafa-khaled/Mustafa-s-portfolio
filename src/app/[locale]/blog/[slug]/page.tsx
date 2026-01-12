import { notFound } from "next/navigation";
import { baseURL, person, blog, blogPosts } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import React from "react";
import { iconLibrary } from "@/resources/icons";

import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

interface BlogParams {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
}

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];

  for (const locale of i18n.locales) {
    for (const post of blogPosts[locale]) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: BlogParams) {
  const { locale, slug } = await params;
  const post = blogPosts[locale].find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${baseURL}/${locale}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${baseURL}/${locale}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function Post({ params }: BlogParams) {
  const { locale, slug } = await params;
  const post = blogPosts[locale].find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <article className="flex flex-col w-full max-w-4xl mx-auto gap-8 pt-10 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.summary,
            image: post.image,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
              "@type": "Person",
              name: person[locale].name,
              url: `${baseURL}/${locale}/about`,
              image: `${baseURL}${person[locale].avatar}`,
            },
          }),
        }}
      />

      <div className="flex flex-col gap-4">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--neutral-on-background-weak)] hover:text-[var(--neutral-on-background-strong)] transition-colors"
        >
          {iconLibrary.arrowRight &&
            React.createElement(iconLibrary.arrowRight, {
              className: "rotate-180",
            })}
          {dict.navigation.blog}
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--neutral-on-background-strong)] leading-tight">
          {post.title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {post.team && (
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-2">
              {post.team.map((member) => (
                <div
                  key={member.name}
                  className="relative w-8 h-8 rounded-full border-2 border-[var(--page-background)] overflow-hidden"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-[var(--brand-weak)]">
              {post.team.map((member, idx) => (
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
        <time className="text-sm text-[var(--neutral-on-background-weak)] ml-auto">
          {formatDate(post.publishedAt)}
        </time>
      </div>

      <main className="prose prose-invert max-w-none">{post.content}</main>
    </article>
  );
}
