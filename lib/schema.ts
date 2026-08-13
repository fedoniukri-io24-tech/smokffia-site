import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { getSchemaContent } from "@/lib/schema-content";

const sectionIds = ["about", "services", "projects", "process", "contacts"] as const;

export function getPersonJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: copy.personName,
    alternateName: ["SMOKFFIA", "Sofia", "Sofia UI/UX"],
    jobTitle: ["UI/UX Designer", "Web Designer", copy.personJobTitleLocal],
    description: copy.description,
    url: siteConfig.url,
    email: siteConfig.email,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/sofia-hero.jpg`,
      caption: copy.personCaption,
    },
    nationality: {
      "@type": "Country",
      name: "Ukraine",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.behance,
      siteConfig.social.linkedin,
      siteConfig.social.fiverr,
      siteConfig.telegram,
    ],
    knowsAbout: [
      "UI/UX Design",
      "Web Design",
      "Landing Page Design",
      "Branding",
      "Graphic Design",
      "Design Systems",
      "Figma",
      "Framer",
      "Webflow",
      "UX Research",
      "Prototyping",
      "Website Redesign",
    ],
    knowsLanguage: ["uk", "en", "pl", "de", "es"],
    hasOccupation: {
      "@type": "Occupation",
      name: "UI/UX Designer",
      occupationLocation: {
        "@type": "Country",
        name: "Ukraine",
      },
      skills: "UI/UX, Web Design, Branding, Figma, Design Systems",
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "SMOKFFIA",
      url: siteConfig.url,
    },
  };
}

export function getOrganizationJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "SMOKFFIA Design",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.svg`,
    image: `${siteConfig.url}/images/sofia-hero.jpg`,
    description: copy.description,
    email: siteConfig.email,
    founder: { "@id": `${siteConfig.url}/#person` },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.behance,
      siteConfig.social.linkedin,
      siteConfig.social.fiverr,
      siteConfig.telegram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      url: `${siteConfig.url}/${locale}#contacts`,
      availableLanguage: ["Ukrainian", "English", "Polish", "German", "Spanish"],
    },
  };
}

export function getWebsiteJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: copy.websiteAltNames,
    url: siteConfig.url,
    description: copy.description,
    inLanguage: ["uk", "en", "pl", "de", "es"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
    creator: { "@id": `${siteConfig.url}/#person` },
    copyrightHolder: { "@id": `${siteConfig.url}/#person` },
    about: [
      "Web Design",
      "UI/UX Design",
      "Landing Pages",
      "Branding",
    ],
    keywords: copy.keywords,
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: copy.orderAction,
        target: `${siteConfig.url}/${locale}#contacts`,
      },
      {
        "@type": "ViewAction",
        name: copy.viewPortfolioAction,
        target: `${siteConfig.url}/${locale}#projects`,
      },
    ],
  };
}

export function getProfessionalServiceJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: copy.serviceName,
    alternateName: copy.serviceAltName,
    description: copy.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/sofia-hero.jpg`,
    email: siteConfig.email,
    areaServed: [
      {
        "@type": "Country",
        name: "Ukraine",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    availableLanguage: ["uk", "en", "pl", "de", "es"],
    priceRange: "$$",
    currenciesAccepted: "USD, UAH, EUR",
    provider: { "@id": `${siteConfig.url}/#person` },
    brand: { "@id": `${siteConfig.url}/#organization` },
    sameAs: Object.values(siteConfig.social),
    serviceType: [
      "UI/UX Design",
      "Web Design",
      "Landing Page Design",
      "Business Website Design",
      "App Design",
      "Branding",
      "Graphic Design",
      "Design Systems",
    ],
    knowsAbout: copy.keywords.split(", ").slice(0, 20),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.offerCatalogName,
      itemListElement: copy.offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        itemOffered: {
          "@type": "Service",
          name: offer.serviceName,
          description: offer.description,
        },
      })),
    },
  };
}

export function getBreadcrumbJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);
  const home = `${siteConfig.url}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${home}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.homeBreadcrumb,
        item: home,
      },
      ...sectionIds.map((id, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: copy.sections[id],
        item: `${home}#${id}`,
      })),
    ],
  };
}

export function getProfilePageJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);
  const pageUrl = `${siteConfig.url}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}/#profilepage`,
    url: pageUrl,
    name: copy.pageTitle,
    description: copy.description,
    inLanguage: locale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };
}

export function getFaqJsonLd(locale: Locale) {
  const copy = getSchemaContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/${locale}/#faq`,
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
