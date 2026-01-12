"use client";

import React from "react";
import classNames from "classnames";

interface TableOfContentsProps {
  structure: {
    title: string;
    id: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  structure,
  about,
}) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        left: 0,
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <nav className="fixed start-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 whitespace-nowrap z-40 border-s border-[var(--neutral-alpha-medium)] py-4">
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <div key={section.title} className="flex flex-col gap-3 relative">
            <button
              onClick={() => scrollTo(section.id, 80)}
              className="group flex items-center cursor-pointer text-start transition-all ps-4 -ms-[1px] border-s-2 border-transparent hover:border-[var(--brand-solid-strong)]"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--neutral-on-background-weak)] group-hover:text-[var(--neutral-on-background-strong)] ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                {section.title}
              </span>
            </button>
            {about.tableOfContent.subItems && (
              <div className="flex flex-col gap-2 ps-8">
                {section.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item, 80)}
                    className="group flex items-center gap-3 cursor-pointer text-start transition-all"
                  >
                    <div className="h-[1px] w-2 bg-[var(--neutral-alpha-medium)] transition-all group-hover:w-4 group-hover:bg-[var(--brand-solid-strong)]"></div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--neutral-on-background-weak)] group-hover:text-[var(--neutral-on-background-strong)]">
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
    </nav>
  );
};

export default TableOfContents;
