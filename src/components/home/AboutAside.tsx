"use client";

import React from "react";
import Image from "next/image";
import { iconLibrary } from "@/resources/icons";
import classNames from "classnames";

interface AboutAsideProps {
  person: {
    avatar: string;
    name: string;
    location: string;
    languages?: string[];
  };
  display: boolean;
}

export const AboutAside: React.FC<AboutAsideProps> = ({ person, display }) => {
  if (!display) return null;

  return (
    <aside
      className={classNames(
        "sticky top-24 h-fit md:flex flex-col items-center min-w-[160px] px-6 pb-12 gap-6 flex-[3] hidden lg:flex"
      )}
      aria-label="About Mustafa Khaled"
    >
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[var(--neutral-alpha-weak)] shadow-xl">
        <Image
          src={person.avatar}
          alt={`Avatar of ${person.name}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-[var(--neutral-on-background-weak)] font-medium">
        {iconLibrary.globe &&
          React.createElement(iconLibrary.globe, {
            className: "text-[var(--accent-solid-weak)]",
            "aria-hidden": "true",
          })}
        <span>{person.location}</span>
      </div>
      {person.languages && person.languages.length > 0 && (
        <div
          className="flex flex-wrap gap-2 justify-center"
          aria-label="Spoken languages"
        >
          {person.languages.map((language, index) => (
            <span
              key={language}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--neutral-alpha-weak)] text-[var(--neutral-on-background-strong)] border border-[var(--neutral-alpha-medium)]"
            >
              {language}
            </span>
          ))}
        </div>
      )}
    </aside>
  );
};
