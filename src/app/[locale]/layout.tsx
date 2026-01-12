import "../globals.css";

import classNames from "classnames";

import { Footer, Header, Providers } from "@/components";
import { baseURL, fonts, style, home, effects } from "@/resources";
import React from "react";
import { Cairo } from "next/font/google";

import { Locale, i18n } from "@/i18n-config";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const homeLocale = home[locale];
  return {
    metadataBase: new URL(baseURL),
    title: {
      default: homeLocale.title,
      template: `%s | ${homeLocale.title}`,
    },
    description: homeLocale.description,
    openGraph: {
      title: homeLocale.title,
      description: homeLocale.description,
      url: baseURL,
      siteName: homeLocale.title,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "google-site-verification=YOUR_CODE_HERE", // Replace with your code
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = (await params) as { locale: Locale };

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={classNames(
        "flex min-h-screen w-full",
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
        cairo.variable
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col items-center w-full min-h-screen m-0 p-0 bg-[var(--page-background)] selection:bg-[var(--brand-alpha-medium)] selection:text-[var(--brand-on-background-strong)]">
        <Providers>
          {/* Background Effects */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Dots Pattern */}
            {effects.dots.display && (
              <div
                className="absolute inset-0 background-dots"
                style={{ opacity: effects.dots.opacity / 100 }}
              />
            )}

            {/* Top Glow/Gradient - Using a soft wide radial gradient instead of a circle */}
            <div className="absolute inset-0 background-glow opacity-50" />

            {/* Additional soft blobs for depth without being "circles" */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[var(--brand-alpha-weak)] blur-[160px] opacity-30 transform -translate-y-1/2" />
          </div>

          <Header />
          <main className="flex flex-col items-center w-full grow px-4 md:px-8 z-0">
            <div className="flex flex-col items-center w-full min-h-0 grow">
              {children}
            </div>
          </main>
          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
