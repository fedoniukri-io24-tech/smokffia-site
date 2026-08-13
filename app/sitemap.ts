import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getHreflangLanguages, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const hreflang = getHreflangLanguages(siteConfig.url);

  const homeEntries = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "uk" ? 1 : 0.9,
    alternates: {
      languages: hreflang,
    },
  }));

  const sectionIds = ["about", "services", "projects", "process", "contacts"];

  const sectionEntries = locales.flatMap((locale) =>
    sectionIds.map((id, index) => ({
      url: `${siteConfig.url}/${locale}#${id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: Math.max(0.5, 0.8 - index * 0.05),
      alternates: {
        languages: hreflang,
      },
    })),
  );

  return [...homeEntries, ...sectionEntries];
}
