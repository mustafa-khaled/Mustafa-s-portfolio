import { blogPosts } from "@/resources";
import { ProjectCard } from "@/components";
import React from "react";

import { Locale } from "@/i18n-config";

interface PostsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: Locale;
}

export function Posts({ range, exclude, locale = "en" }: PostsProps) {
  let allPosts = [...blogPosts];

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allPosts = allPosts.filter((post) => !exclude.includes(post.slug));
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  const displayedPosts = range
    ? sortedPosts.slice(range[0] - 1, range[1] ?? sortedPosts.length)
    : sortedPosts;

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full"
      aria-label="Blog posts list"
    >
      {displayedPosts.map((post, index) => (
        <li key={post.slug}>
          <ProjectCard
            priority={index < 2}
            href={`/${locale}/blog/${post.slug}`}
            images={post.image ? [post.image] : []}
            title={post.title}
            description={post.summary}
          />
        </li>
      ))}
    </ul>
  );
}
