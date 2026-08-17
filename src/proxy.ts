import { match as matchLocale } from "@formatjs/intl-localematcher";
import { type NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";

function parseAcceptLanguage(header: string): string[] {
  if (!header) return [];

  return header
    .split(",")
    .map((part) => {
      const [lang, ...params] = part.trim().split(";");
      const quality = params.find((p) => p.startsWith("q="));
      return {
        lang: lang.trim(),
        q: quality ? Number.parseFloat(quality.slice(2)) : 1,
      };
    })
    .filter((item) => !Number.isNaN(item.q))
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang);
}

function getLocale(request: NextRequest): string {
  try {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const languages = parseAcceptLanguage(acceptLanguage);

    // @ts-expect-error locales are readonly
    const locales: string[] = i18n.locales;

    return matchLocale(languages, locales, i18n.defaultLocale);
  } catch {
    return i18n.defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    ["/manifest.json", "/favicon.ico", "/robots.txt", "/sitemap.xml"].includes(pathname) ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/api/")
  )
    return;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
