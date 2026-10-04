import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getHreflangLanguages, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homeHreflang = getHreflangLanguages(siteConfig.url);
  const casesHreflang = getHreflangLanguages(siteConfig.url, "cases");

  const homeEntries = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "uk" ? 1 : 0.9,
    alternates: {
      languages: homeHreflang,
    },
  }));

  const casesEntries = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}/cases`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    alternates: {
      languages: casesHreflang,
    },
  }));

  return [...homeEntries, ...casesEntries];
}
