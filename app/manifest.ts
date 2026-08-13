import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SMOKFFIA — UI/UX & web design",
    short_name: "SMOKFFIA",
    description:
      "SMOKFFIA (Sofia) — UI/UX and web designer. Websites, landing pages, apps, branding.",
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
