"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { routes, display, about, blog, work, gallery } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { iconLibrary } from "@/resources/icons";
import classNames from "classnames";
import { Locale } from "@/i18n-config";

interface NavButtonProps {
  href: string;
  icon: string;
  label?: string;
  selected: boolean;
  hideLabelOnMobile?: boolean;
}

const NavButton = ({
  href,
  icon,
  label,
  selected,
  hideLabelOnMobile,
}: NavButtonProps) => {
  const IconComponent = iconLibrary[icon as keyof typeof iconLibrary];

  return (
    <Link
      href={href}
      className={classNames(
        "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
        selected
          ? "bg-[var(--neutral-alpha-medium)] text-[var(--neutral-on-background-strong)] shadow-sm"
          : "text-[var(--neutral-on-background-weak)] hover:bg-[var(--neutral-alpha-weak)] hover:text-[var(--neutral-on-background-strong)]"
      )}
    >
      {IconComponent && <IconComponent size={18} />}
      {label && (
        <span
          className={classNames(
            "text-sm font-medium",
            hideLabelOnMobile ? "hidden md:inline" : ""
          )}
        >
          {label}
        </span>
      )}
    </Link>
  );
};

export const Header = () => {
  const pathname = usePathname() ?? "";
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center p-4 h-fit">
      {/* Background blurs */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[var(--page-background)] to-transparent pointer-events-none" />

      <nav className="relative z-10 flex items-center bg-[var(--page-background)] border border-[var(--neutral-alpha-weak)] rounded-2xl p-1 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1">
          {routes["/"] && (
            <NavButton
              icon="home"
              href={getPath("/")}
              selected={pathname === `/${locale}` || pathname === `/${locale}/`}
            />
          )}

          <div className="w-[1px] h-6 bg-[var(--neutral-alpha-medium)] mx-1" />

          {routes["/projects"] && (
            <NavButton
              icon="grid"
              href={getPath("/projects")}
              label={work.label}
              selected={pathname.startsWith(`/${locale}/projects`)}
              hideLabelOnMobile
            />
          )}

          {routes["/blog"] && (
            <NavButton
              icon="book"
              href={getPath("/blog")}
              label={blog.label}
              selected={pathname.startsWith(`/${locale}/blog`)}
              hideLabelOnMobile
            />
          )}

          <div className="w-[1px] h-6 bg-[var(--neutral-alpha-medium)] mx-1" />

          {/* Locale Switcher */}
          <Link
            href={pathname.replace(
              `/${locale}`,
              locale === "en" ? "/ar" : "/en"
            )}
            className="px-3 py-1 text-xs font-bold uppercase rounded-md hover:bg-[var(--neutral-alpha-weak)] transition-colors"
          >
            {locale === "en" ? "عربي" : "EN"}
          </Link>

          {display.themeSwitcher && (
            <React.Fragment>
              <div className="w-[1px] h-6 bg-[var(--neutral-alpha-medium)] mx-1" />
              <ThemeToggle />
            </React.Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};
