import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import SiteJsonLd from "@/components/SiteJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [
    { name: siteConfig.personName, url: siteConfig.url },
    { name: siteConfig.creator, url: siteConfig.url },
  ],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  category: "design",
  classification: "UI/UX Design, Web Design, Branding, Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/",
      "x-default": "/",
    },
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/humans.txt", title: "humans.txt" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    countryName: "Ukraine",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SMOKFFIA — дизайн сайтів, лендингів і UI/UX від Софії",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/twitter-image",
        alt: "SMOKFFIA — UI/UX і вебдизайн",
      },
    ],
    creator: "@smokffiaiuiuxdesign",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/images/logo.svg"],
    apple: [{ url: "/images/logo.svg" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "UA",
    "geo.placename": "Ukraine",
    "og:email": siteConfig.email,
    subject:
      "Дизайн сайтів, лендингів, UI/UX, брендинг, Figma — SMOKFFIA",
    topic: "Web Design, UI/UX, Branding",
    summary: siteConfig.description,
    designer: siteConfig.creator,
    "reply-to": siteConfig.email,
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    coverage: "Worldwide",
    HandheldFriendly: "true",
    MobileOptimized: "320",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
