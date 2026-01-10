"use client";

import React from "react";

interface StudiesProps {
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      description: React.ReactNode;
    }>;
  };
}

export const Studies: React.FC<StudiesProps> = ({ studies }) => {
  if (!studies.display) return null;

  return (
    <section
      className="flex flex-col w-full mb-16"
      aria-labelledby="studies-title"
    >
      <h2
        id="studies-title"
        className="text-2xl md:text-3xl font-bold mb-6 text-[var(--neutral-on-background-strong)]"
      >
        {studies.title}
      </h2>
      <div className="flex flex-col w-full gap-8">
        {studies.institutions.map((institution) => (
          <div
            key={institution.name}
            className="flex flex-col w-full gap-2 p-6 rounded-2xl border border-[var(--neutral-alpha-weak)] bg-[var(--surface)]"
          >
            <h3 className="text-xl font-bold text-[var(--neutral-on-background-strong)]">
              {institution.name}
            </h3>
            <div className="text-base text-[var(--neutral-on-background-weak)] font-medium">
              {institution.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
