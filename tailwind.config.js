/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand-solid-strong)",
          strong: "var(--brand-solid-strong)",
          medium: "var(--brand-solid-medium)",
          weak: "var(--brand-solid-weak)",
          alpha: {
            strong: "var(--brand-alpha-strong)",
            medium: "var(--brand-alpha-medium)",
            weak: "var(--brand-alpha-weak)",
          },
          on: {
            background: {
              strong: "var(--brand-on-background-strong)",
              medium: "var(--brand-on-background-medium)",
              weak: "var(--brand-on-background-weak)",
            },
          },
        },
        accent: {
          DEFAULT: "var(--accent-solid-strong)",
          strong: "var(--accent-solid-strong)",
          medium: "var(--accent-solid-medium)",
          weak: "var(--accent-solid-weak)",
          alpha: {
            strong: "var(--accent-alpha-strong)",
            medium: "var(--accent-alpha-medium)",
            weak: "var(--accent-alpha-weak)",
          },
        },
        neutral: {
          DEFAULT: "var(--neutral-solid-strong)",
          strong: "var(--neutral-solid-strong)",
          medium: "var(--neutral-solid-medium)",
          weak: "var(--neutral-solid-weak)",
          alpha: {
            strong: "var(--neutral-alpha-strong)",
            medium: "var(--neutral-alpha-medium)",
            weak: "var(--neutral-alpha-weak)",
          },
          on: {
            background: {
              strong: "var(--neutral-on-background-strong)",
              medium: "var(--neutral-on-background-medium)",
              weak: "var(--neutral-on-background-weak)",
            },
          },
        },
        page: {
          background: "var(--page-background)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          translucent: "var(--surface-translucent)",
        },
      },
      spacing: {
        xs: "var(--static-space-xs)",
        s: "var(--static-space-s)",
        m: "var(--static-space-m)",
        l: "var(--static-space-l)",
        xl: "var(--static-space-xl)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        s: "var(--radius-s)",
        m: "var(--radius-m)",
        l: "var(--radius-l)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        label: ["var(--font-label)"],
        code: ["var(--font-code)"],
      },
    },
  },
  plugins: [],
};
