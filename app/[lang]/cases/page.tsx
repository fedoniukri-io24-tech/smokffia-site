import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Cases from "@/components/Cases";
import { getDictionary } from "@/lib/get-dictionary";
import { hasLocale, localeOg, locales, type Locale } from "@/lib/i18n";
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
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteConfig.url}/${l}/cases`]),
  );

  return {
    title: dict.casesPage.seoTitle,
    description: dict.casesPage.seoDescription,
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        "x-default": `${siteConfig.url}/uk/cases`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url,
      siteName: siteConfig.name,
      title: dict.casesPage.seoTitle,
      description: dict.casesPage.seoDescription,
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
      <Navbar locale={locale} dict={dict.nav} />
      <Cases projects={dict.projects} page={dict.casesPage} />
      <Contacts locale={locale} dict={dict.contacts} />
    </main>
  );
}
