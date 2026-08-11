import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...siteConfig.sections.map((section, index) => ({
      url: `${siteConfig.url}${section.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: Math.max(0.6, 0.9 - index * 0.05),
    })),
  ];
}
