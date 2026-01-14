import { NextFontWithVariable } from "next/dist/compiled/@next/font";

/**
 * Display configuration for UI elements.
 */
export type DisplayConfig = {
  location: boolean;
  time: boolean;
  themeSwitcher: boolean;
};

/**
 * Route configuration for enabled/disabled routes.
 */
export type RoutesConfig = Record<`/${string}`, boolean>;

/**
 * Protected route configuration.
 */
export type ProtectedRoutesConfig = Record<`/${string}`, boolean>;

/**
 * Font configuration for each variant.
 */
export type FontsConfig = {
  heading: NextFontWithVariable;
  body: NextFontWithVariable;
  label: NextFontWithVariable;
  code: NextFontWithVariable;
};

/**
 * Style customization for main layout.
 */
export type StyleConfig = {
  theme: "light" | "dark" | "inherit" | "system";
  neutral: "slate" | "gray" | "zinc" | "neutral" | "stone";
  brand:
    | "blue"
    | "indigo"
    | "violet"
    | "magenta"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "moss"
    | "green"
    | "emerald"
    | "aqua"
    | "cyan";
  accent:
    | "blue"
    | "indigo"
    | "violet"
    | "magenta"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "moss"
    | "green"
    | "emerald"
    | "aqua"
    | "cyan";
  solid: "color" | "contrast";
  solidStyle: "flat" | "gradient";
  border: "full" | "playful" | "conservative";
  surface: "filled" | "translucent";
  transition: "all" | "micro" | "macro";
  scaling: "90" | "95" | "100" | "105" | "110";
};

/**
 * Effects configuration for UI visuals.
 */
export type EffectsConfig = {
  mask: {
    cursor: boolean;
    x: number;
    y: number;
    radius: number;
  };
  gradient: {
    display: boolean;
    opacity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    tilt: number;
    colorStart: string;
    colorEnd: string;
  };
  dots: {
    display: boolean;
    opacity: number;
    size: string;
    color: string;
  };
  grid: {
    display: boolean;
    opacity: number;
    color: string;
    width: string;
    height: string;
  };
  lines: {
    display: boolean;
    opacity: number;
    color: string;
    size: string;
    thickness: number;
    angle: number;
  };
};

/**
 * Schema data for SEO/meta tags.
 */
export type SchemaConfig = {
  logo: string;
  type: string;
  name: string;
  description: string;
  email: string;
};

/**
 * Social links for organization.
 */
export type SameAsConfig = {
  threads: string;
  linkedin: string;
  discord: string;
};

/**
 * Top-level config types for once-ui.config.js
 */
export type OnceUIConfig = {
  display: DisplayConfig;
  routes: RoutesConfig;
  protectedRoutes: ProtectedRoutesConfig;
  baseURL: string;
  fonts: FontsConfig;
  style: StyleConfig;
  schema: SchemaConfig;
  sameAs: SameAsConfig;
  effects: EffectsConfig;
};
