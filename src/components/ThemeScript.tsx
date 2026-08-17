"use client";

import { useEffect } from "react";

export function ThemeScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/theme-init.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
