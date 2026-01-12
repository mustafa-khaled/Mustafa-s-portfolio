"use client";

import React from "react";

interface WorkExperienceProps {
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      role: string;
      timeframe: string;
      achievements: React.ReactNode[];
    }>;
  };
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
  if (!work.display) return null;

  return (
    <section
      className="flex flex-col w-full mb-16"
      aria-labelledby="work-title"
    >
      <h2
        id="work-title"
        className="text-2xl md:text-3xl font-bold mb-8 text-[var(--neutral-on-background-strong)]"
      >
        {work.title}
      </h2>
      <div className="flex flex-col w-full gap-8 relative">
        {/* Timeline line */}
        <div
          className="absolute start-[22.5px] top-6 bottom-6 w-[3px] rounded-full pointer-events-none"
          style={{
            background: "var(--brand-alpha-medium)",
          }}
          aria-hidden="true"
        />
        {work.experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.role}-${index}`}
            className="flex flex-row w-full gap-6 items-start group"
          >
            {/* Timeline dot and logo */}
            <div
              className="flex flex-col items-center min-w-[48px] relative z-10"
              aria-hidden="true"
            >
              <div className="w-12 h-12 bg-[var(--page-background)] rounded-full flex items-center justify-center text-lg font-bold border-4 border-[var(--brand-alpha-strong)] text-[var(--brand-on-background-strong)] shadow-lg group-hover:scale-110 transition-transform duration-300">
                {experience.company.charAt(0)}
              </div>
            </div>

            {/* Content card */}
            <div className="work-experience-card flex flex-col w-full p-6 gap-4 rounded-2xl border border-[var(--neutral-alpha-weak)] bg-[var(--surface)] backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out cursor-default">
              <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between items-center flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-[var(--neutral-on-background-strong)]">
                    {experience.company}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--neutral-alpha-weak)] text-[var(--neutral-on-background-weak)]">
                    {experience.timeframe}
                  </span>
                </div>
                <p className="text-sm md:text-base font-bold text-[var(--brand-medium)]">
                  {experience.role}
                </p>
              </div>

              <ul
                className="flex flex-col gap-2 list-disc ps-5 m-0 text-sm md:text-base text-[var(--neutral-on-background-medium)]"
                aria-label={`Achievements at ${experience.company}`}
              >
                {experience.achievements.map((achievement, idx) => (
                  <li
                    key={`${experience.company}-achievement-${idx}`}
                    className="leading-relaxed"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
