import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import SiteJsonLd from "@/components/SiteJsonLd";
import { getDictionary } from "@/lib/get-dictionary";
import {
  getHreflangLanguages,
  hasLocale,
  localeHtml,
  localeOg,
  locales,
  type Locale,
} from "@/lib/i18n";
import { fontVariables, inter } from "@/lib/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  colorScheme: "light",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const locale = lang as Locale;
  const url = `${siteConfig.url}/${locale}`;
  const languages = getHreflangLanguages(siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.seo.description,
    applicationName: siteConfig.name,
    keywords: dict.seo.keywords,
    authors: [
      { name: siteConfig.personName, url: siteConfig.url },
      { name: siteConfig.creator, url: siteConfig.url },
    ],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    category: "design",
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeOg[l]),
      url,
      siteName: siteConfig.name,
      title: dict.seo.title,
      description: dict.seo.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: dict.seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: ["/twitter-image"],
      creator: "@smokffiaiuiuxdesign",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
      apple: [{ url: "/images/logo.svg" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={localeHtml[lang]} className={fontVariables}>
      <body className={inter.className}>
        <SiteJsonLd locale={lang} />
        {children}
      </body>
    </html>
  );
}
