import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
