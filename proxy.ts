import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, locales } from "./lib/i18n";

function getPreferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return {
        code: tag.split("-")[0]?.toLowerCase() ?? "",
        quality: q ? Number(q) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const item of preferred) {
    if (hasLocale(item.code)) return item.code;
  }

  return defaultLocale;
}

function withPathname(request: NextRequest, pathname: string) {
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/twitter-image") ||
    pathname.startsWith("/manifest") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return withPathname(request, pathname);
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
