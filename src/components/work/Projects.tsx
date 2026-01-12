import { projects } from "@/resources";
import { ProjectCard } from "@/components";
import React from "react";

import { Locale } from "@/i18n-config";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: Locale;
}

export function Projects({ range, exclude, locale = "en" }: ProjectsProps) {
  let allProjects = [...projects[locale]];

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter(
      (project) => !exclude.includes(project.slug)
    );
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
      aria-label="Projects list"
    >
      {displayedProjects.map((project, index) => (
        <li key={project.slug}>
          <ProjectCard
            priority={index < 2}
            href={`/${locale}/projects/${project.slug}`}
            images={project.images}
            title={project.title}
            description={project.summary}
          />
        </li>
      ))}
    </ul>
  );
}
