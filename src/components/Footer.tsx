import { person, social } from "@/resources";
import { iconLibrary } from "@/resources/icons";
import React from "react";
import Link from "next/link";
import classNames from "classnames";

import { Locale } from "@/i18n-config";

interface FooterProps {
  locale?: Locale;
}

export const Footer = ({ locale = "en" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center w-full p-2">
      <div className="flex flex-col md:flex-row w-full max-w-[var(--static-width-m)] py-2 px-4 gap-4 justify-between items-center bg-[var(--page-background)] border border-[var(--neutral-alpha-weak)] rounded-2xl shadow-sm">
        <div className="text-sm font-medium text-[var(--neutral-on-background-strong)]">
          <span className="text-[var(--neutral-on-background-weak)] me-1">
            © {currentYear} /
          </span>
          <span>{person[locale].name}</span>
        </div>
        <div className="flex gap-4">
          {social.map(
            (item) =>
              item.link && (
                <Link
                  key={item.name}
                  href={item.link}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--neutral-on-background-weak)] transition-all hover:bg-[var(--neutral-alpha-weak)] hover:text-[var(--neutral-on-background-strong)]"
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon &&
                    iconLibrary[item.icon as keyof typeof iconLibrary] &&
                    React.createElement(
                      iconLibrary[item.icon as keyof typeof iconLibrary],
                      { size: 18 }
                    )}
                </Link>
              )
          )}
        </div>
      </div>
      {/* Spacer for mobile fixed header/footer if needed */}
      <div className="h-20 md:hidden" />
    </footer>
  );
};
