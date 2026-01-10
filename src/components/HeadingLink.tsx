"use client";

import React from "react";
import { iconLibrary } from "@/resources/icons";
import classNames from "classnames";

interface HeadingLinkProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const HeadingLink: React.FC<HeadingLinkProps> = ({
  id,
  level,
  children,
  style,
}) => {
  const copyURL = (id: string): void => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(
      () => {
        // Simple success notification could go here
        console.log("Link copied: ", url);
      },
      () => {
        console.error("Failed to copy link");
      }
    );
  };

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const sizeClasses = {
    1: "text-4xl md:text-5xl font-bold mb-6",
    2: "text-3xl md:text-4xl font-bold mb-5",
    3: "text-2xl md:text-3xl font-bold mb-4",
    4: "text-xl md:text-2xl font-bold mb-3",
    5: "text-lg md:text-xl font-bold mb-2",
    6: "text-base md:text-lg font-bold mb-1",
  };

  const IconComponent = iconLibrary.openLink;

  return (
    <div
      style={style}
      onClick={() => copyURL(id)}
      className="group flex items-center gap-2 cursor-pointer w-fit scroll-mt-24"
    >
      <Tag
        id={id}
        className={classNames(
          sizeClasses[level],
          "text-[var(--neutral-on-background-strong)] mb-0 transition-colors group-hover:text-[var(--brand-solid-strong)]"
        )}
      >
        {children}
      </Tag>
      <button
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-[var(--neutral-on-background-weak)] hover:text-[var(--brand-solid-strong)]"
        aria-label="Copy link"
      >
        {IconComponent && <IconComponent size={18} />}
      </button>
    </div>
  );
};
