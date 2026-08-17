import "../globals.css";

import classNames from "classnames";
import { Cairo } from "next/font/google";
import type React from "react";
import { Footer, Header, Providers, ThemeScript } from "@/components";
import { i18n, type Locale } from "@/i18n-config";
import { baseURL, effects, fonts, home, style } from "@/resources";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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
      data-brand={style.brand}
      data-accent={style.accent}
      data-neutral={style.neutral}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        "flex min-h-screen w-full",
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
        cairo.variable,
      )}
    >
      <head />
      <body className="flex flex-col items-center w-full min-h-screen m-0 p-0 bg-[var(--page-background)] selection:bg-[var(--brand-alpha-medium)] selection:text-[var(--brand-on-background-strong)]">
        <ThemeScript />
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
            <div className="flex flex-col items-center w-full min-h-0 grow">{children}</div>
          </main>
          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
