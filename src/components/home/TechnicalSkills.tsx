"use client";

import React from "react";
import { iconLibrary } from "@/resources/icons";

interface TechnicalSkillsProps {
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      name: string;
      icon: string;
    }>;
  };
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  technical,
}) => {
  if (!technical.display) return null;

  return (
    <section
      className="flex flex-col w-full mb-16"
      aria-labelledby="tech-skills-title"
    >
      <h2
        id="tech-skills-title"
        className="text-2xl md:text-3xl font-bold mb-10 text-[var(--neutral-on-background-strong)]"
      >
        {technical.title}
      </h2>
      <div
        className="flex flex-wrap gap-x-3 gap-y-4"
        aria-label="List of technical skills"
      >
        {technical.skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--page-background)] border border-[var(--neutral-alpha-medium)] shadow-sm hover:border-[var(--brand-alpha-medium)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            aria-label={skill.name}
          >
            {skill.icon &&
              iconLibrary[skill.icon as keyof typeof iconLibrary] && (
                <div className="text-[var(--brand-medium)]" aria-hidden="true">
                  {React.createElement(
                    iconLibrary[skill.icon as keyof typeof iconLibrary],
                    { size: 18 }
                  )}
                </div>
              )}
            <span className="text-sm font-bold text-[var(--neutral-on-background-strong)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
