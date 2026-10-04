import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Cases from "@/components/Cases";
import CasesJsonLd from "@/components/CasesJsonLd";
import { getDictionary } from "@/lib/get-dictionary";
import {
  getHreflangLanguages,
  hasLocale,
  localeOg,
  locales,
  type Locale,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const Contacts = dynamic(() => import("@/components/Contacts"));

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
  const url = `${siteConfig.url}/${locale}/cases`;
  const languages = getHreflangLanguages(siteConfig.url, "cases");

  return {
    title: dict.casesPage.seoTitle,
    description: dict.casesPage.seoDescription,
    keywords: dict.seo.keywords,
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
      title: dict.casesPage.seoTitle,
      description: dict.casesPage.seoDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: dict.casesPage.seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.casesPage.seoTitle,
      description: dict.casesPage.seoDescription,
      images: ["/twitter-image"],
      creator: "@smokffiaiuiuxdesign",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <main id="main" className="page page--cases">
      <CasesJsonLd
        locale={locale}
        items={dict.projects.items.map((item) => ({
          id: item.id,
          title: item.title,
          desc: item.desc,
        }))}
      />
      <Navbar locale={locale} dict={dict.nav} />
      <Cases projects={dict.projects} page={dict.casesPage} />
      <Contacts locale={locale} dict={dict.contacts} />
    </main>
  );
}
