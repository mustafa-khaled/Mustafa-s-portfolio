"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images?: string[];
  title: string;
  description?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
}) => {
  return (
    <Link
      href={href}
      className="group block w-full h-full text-decoration-none"
    >
      <div className="flex flex-col w-full h-full gap-4 p-4 rounded-2xl border border-[var(--neutral-alpha-weak)] bg-[var(--surface)] backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--brand-alpha-medium)]">
        {images.length > 0 && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt={`Cover image for ${title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-lg font-bold text-[var(--neutral-on-background-strong)]">
            {title}
          </h3>
          {description?.trim() && (
            <p className="text-sm text-[var(--neutral-on-background-weak)] line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
