import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeEntries = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "uk" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}`]),
      ),
    },
  }));

  const sectionEntries = locales.flatMap((locale) =>
    siteConfig.sections.map((section, index) => ({
      url: `${siteConfig.url}/${locale}${section.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: Math.max(0.5, 0.8 - index * 0.05),
    })),
  );

  return [...homeEntries, ...sectionEntries];
}
