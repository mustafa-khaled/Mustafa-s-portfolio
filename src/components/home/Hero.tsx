"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { iconLibrary } from "@/resources/icons";

interface HeroProps {
  person: {
    name: string;
    role: string;
    avatar: string;
  };
  social: Array<{
    name: string;
    link: string;
    icon: string;
  }>;
  about: {
    avatar: {
      display: boolean;
    };
    intro: {
      title: string;
      description: React.ReactNode;
    };
  };
  featured?: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  locale?: string;
}

export const Hero: React.FC<HeroProps> = ({
  person,
  social,
  about,
  featured,
  locale = "en",
}) => {
  return (
    <section
      id={about.intro.title}
      className="flex flex-col w-full min-h-[160px] justify-center mb-12"
      aria-labelledby="hero-title"
    >
      {about.avatar.display && (
        <div className="flex lg:hidden justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--neutral-alpha-weak)] shadow-lg">
            <Image
              src={person.avatar}
              alt={person.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
      <h1
        id="hero-title"
        className={classNames(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--neutral-on-background-strong)] mb-4 text-center md:text-left"
        )}
      >
        {person.name}
      </h1>
      <p
        className={classNames(
          "text-xl md:text-2xl text-[var(--neutral-on-background-weak)] font-medium text-center md:text-left"
        )}
      >
        {person.role}
      </p>
      {featured?.display && (
        <div className="flex justify-center md:justify-start mb-6">
          <Link
            href={`/${locale}${featured.href}`}
            className="flex items-center gap-3 p-1 pr-4 bg-[var(--brand-alpha-weak)] hover:bg-[var(--brand-alpha-medium)] border border-[var(--brand-alpha-medium)] rounded-full transition-all duration-300 group"
          >
            {featured.title}
            {iconLibrary.arrowRight && (
              <div className="text-[var(--brand-on-background-strong)] transition-transform duration-300 group-hover:translate-x-1">
                {React.createElement(iconLibrary.arrowRight, { size: 16 })}
              </div>
            )}
          </Link>
        </div>
      )}

      {social.length > 0 && (
        <nav
          className={classNames(
            "flex flex-wrap items-center justify-center md:justify-start gap-3 pt-8 pb-4"
          )}
          aria-label="Social media links"
        >
          {social.map(
            (item) =>
              item.link && (
                <Link
                  key={item.name}
                  href={item.link}
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:h-auto h-12 w-12 sm:w-auto text-sm font-medium transition-all border rounded-lg border-[var(--neutral-alpha-weak)] bg-[var(--neutral-alpha-weak)] hover:bg-[var(--neutral-alpha-medium)] text-[var(--neutral-on-background-strong)] hover:scale-105"
                  aria-label={`Visit my ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon &&
                    iconLibrary[item.icon as keyof typeof iconLibrary] &&
                    React.createElement(
                      iconLibrary[item.icon as keyof typeof iconLibrary],
                      { size: 20 }
                    )}
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              )
          )}
        </nav>
      )}

      <div className="text-lg md:text-xl leading-relaxed text-[var(--neutral-on-background-medium)] w-full flex flex-col gap-6 mt-12">
        {about.intro.description}
      </div>
    </section>
  );
};
