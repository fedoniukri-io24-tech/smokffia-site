import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SMOKFFIA — дизайн сайтів і UI/UX",
    short_name: "SMOKFFIA",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A0A0A",
    lang: "uk",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["business", "design", "portfolio", "productivity"],
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
