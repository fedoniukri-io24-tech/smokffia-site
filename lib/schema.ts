import { siteConfig } from "@/lib/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.personName,
    alternateName: ["SMOKFFIA", "Sofia", "Sofia UI/UX"],
    jobTitle: ["UI/UX Designer", "Web Designer", "Вебдизайнерка"],
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/sofia-hero.jpg`,
      caption: "Софія — UI/UX і вебдизайнерка SMOKFFIA",
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
    knowsLanguage: ["uk", "en"],
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

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "SMOKFFIA",
    alternateName: "SMOKFFIA Design",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.svg`,
    image: `${siteConfig.url}/images/sofia-hero.jpg`,
    description: siteConfig.description,
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
      url: `${siteConfig.url}/#contacts`,
      availableLanguage: ["Ukrainian", "English"],
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: [
      "SMOKFFIA Design",
      "Дизайн сайтів SMOKFFIA",
      "Софія UI/UX",
    ],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["uk", "en"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
    creator: { "@id": `${siteConfig.url}/#person` },
    copyrightHolder: { "@id": `${siteConfig.url}/#person` },
    about: [
      "Web Design",
      "UI/UX Design",
      "Landing Pages",
      "Branding",
    ],
    keywords: siteConfig.keywords.join(", "),
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Замовити дизайн сайту",
        target: `${siteConfig.url}/#contacts`,
      },
      {
        "@type": "ViewAction",
        name: "Переглянути портфоліо",
        target: `${siteConfig.url}/#projects`,
      },
    ],
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: "SMOKFFIA — дизайн сайтів і UI/UX",
    alternateName: "Замовити дизайн сайту у SMOKFFIA",
    description: siteConfig.description,
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
    availableLanguage: ["uk", "en"],
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
    knowsAbout: siteConfig.keywords.slice(0, 20),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Послуги дизайну",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Дизайн лендингу",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Design",
            description:
              "Сучасний дизайн лендингу під конверсію: структура, UI, адаптив",
          },
        },
        {
          "@type": "Offer",
          name: "Дизайн бізнес-сайту",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Design",
            description:
              "Багатосторінковий вебдизайн для компаній і сервісів",
          },
        },
        {
          "@type": "Offer",
          name: "UI/UX дизайн додатку",
          itemOffered: {
            "@type": "Service",
            name: "App Design",
            description: "UI/UX дизайн мобільних і веб-додатків у Figma",
          },
        },
        {
          "@type": "Offer",
          name: "Брендинг",
          itemOffered: {
            "@type": "Service",
            name: "Branding",
            description: "Візуальна ідентичність, фірмовий стиль і гайдлайни",
          },
        },
        {
          "@type": "Offer",
          name: "Графічний дизайн",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design",
            description: "Графіка для цифрових продуктів і маркетингу",
          },
        },
      ],
    },
  };
}

export function getBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Головна",
        item: siteConfig.url,
      },
      ...siteConfig.sections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: section.title,
        item: `${siteConfig.url}${section.path}`,
      })),
    ],
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "uk",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Скільки коштує дизайн сайту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Вартість залежить від обсягу: лендинг, бізнес-сайт, додаток чи брендинг. Актуальні пакети й ціни — у розділі «Послуги і ціни» на сайті SMOKFFIA.",
        },
      },
      {
        "@type": "Question",
        name: "Які послуги надає SMOKFFIA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UI/UX дизайн, вебдизайн, дизайн лендингів і бізнес-сайтів, app design, брендинг, графічний дизайн і дизайн-системи в Figma.",
        },
      },
      {
        "@type": "Question",
        name: "Як замовити дизайн лендингу або сайту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Залиште заявку у формі на сайті (${siteConfig.url}/#contacts), напишіть у Telegram (${siteConfig.telegram}) або на email ${siteConfig.email}.`,
        },
      },
      {
        "@type": "Question",
        name: "Чи працює дизайнерка з клієнтами з України та інших країн?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Так. SMOKFFIA працює віддалено з клієнтами з України та світу — українською та англійською.",
        },
      },
      {
        "@type": "Question",
        name: "Чи доступна Софія для фриланс-проєктів?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Так, SMOKFFIA відкрита до фриланс-проєктів: лендинги, сайти, додатки, ребрендинг і UI/UX.",
        },
      },
      {
        "@type": "Question",
        name: "В яких інструментах працює SMOKFFIA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Основний інструмент — Figma. Також досвід з Framer, Webflow та повним циклом від дослідження до UI kit і передачі в розробку.",
        },
      },
    ],
  };
}
