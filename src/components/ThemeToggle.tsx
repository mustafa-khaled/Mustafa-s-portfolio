"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { iconLibrary } from "@/resources/icons";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";
  const IconComponent = isDark ? iconLibrary.sun : iconLibrary.moon;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 text-[var(--neutral-on-background-weak)] hover:bg-[var(--neutral-alpha-weak)] hover:text-[var(--neutral-on-background-strong)]"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      {IconComponent && <IconComponent size={20} />}
    </button>
  );
};
