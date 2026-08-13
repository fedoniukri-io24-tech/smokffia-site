import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export type SchemaOffer = {
  name: string;
  serviceName: string;
  description: string;
};

export type SchemaFaqItem = {
  question: string;
  answer: string;
};

export type SchemaContent = {
  personName: string;
  personCaption: string;
  personJobTitleLocal: string;
  description: string;
  keywords: string;
  homeBreadcrumb: string;
  sections: {
    about: string;
    services: string;
    projects: string;
    process: string;
    contacts: string;
  };
  pageTitle: string;
  websiteAltNames: string[];
  orderAction: string;
  viewPortfolioAction: string;
  serviceName: string;
  serviceAltName: string;
  offerCatalogName: string;
  offers: SchemaOffer[];
  faq: SchemaFaqItem[];
};

function faqWithLinks(locale: Locale, items: SchemaFaqItem[]): SchemaFaqItem[] {
  const contactsUrl = `${siteConfig.url}/${locale}#contacts`;
  return items.map((item) => ({
    ...item,
    answer: item.answer
      .replaceAll("{contactsUrl}", contactsUrl)
      .replaceAll("{telegram}", siteConfig.telegram)
      .replaceAll("{email}", siteConfig.email),
  }));
}

const uk: SchemaContent = {
  personName: "Софія",
  personCaption: "Софія — UI/UX і вебдизайнерка SMOKFFIA",
  personJobTitleLocal: "Вебдизайнерка",
  description:
    "Замовити дизайн сайту, лендингу чи додатку у SMOKFFIA (Софія) — UI/UX і вебдизайнерка. Сучасний вебдизайн, брендинг, Figma, дизайн-системи. Фриланс для бізнесу з України та світу.",
  keywords: siteConfig.keywords.join(", "),
  homeBreadcrumb: "Головна",
  sections: {
    about: "Про мене",
    services: "Послуги і ціни",
    projects: "Мої проєкти",
    process: "Процес роботи",
    contacts: "Контакти",
  },
  pageTitle: "Дизайн сайтів, лендингів і UI/UX | SMOKFFIA — Софія",
  websiteAltNames: ["SMOKFFIA Design", "Дизайн сайтів SMOKFFIA", "Sofia UI/UX"],
  orderAction: "Замовити дизайн сайту",
  viewPortfolioAction: "Переглянути портфоліо",
  serviceName: "SMOKFFIA — дизайн сайтів і UI/UX",
  serviceAltName: "Замовити дизайн сайту у SMOKFFIA",
  offerCatalogName: "Послуги дизайну",
  offers: [
    {
      name: "Дизайн лендингу",
      serviceName: "Landing Page Design",
      description:
        "Сучасний дизайн лендингу під конверсію: структура, UI, адаптив",
    },
    {
      name: "Дизайн бізнес-сайту",
      serviceName: "Business Website Design",
      description: "Багатосторінковий вебдизайн для компаній і сервісів",
    },
    {
      name: "UI/UX дизайн додатку",
      serviceName: "App Design",
      description: "UI/UX дизайн мобільних і веб-додатків у Figma",
    },
    {
      name: "Брендинг",
      serviceName: "Branding",
      description: "Візуальна ідентичність, фірмовий стиль і гайдлайни",
    },
    {
      name: "Графічний дизайн",
      serviceName: "Graphic Design",
      description: "Графіка для цифрових продуктів і маркетингу",
    },
  ],
  faq: faqWithLinks("uk", [
    {
      question: "Скільки коштує дизайн сайту?",
      answer:
        "Вартість залежить від обсягу: лендинг, бізнес-сайт, додаток чи брендинг. Актуальні пакети й ціни — у розділі «Послуги і ціни» на сайті SMOKFFIA.",
    },
    {
      question: "Які послуги надає SMOKFFIA?",
      answer:
        "UI/UX дизайн, вебдизайн, дизайн лендингів і бізнес-сайтів, app design, брендинг, графічний дизайн і дизайн-системи в Figma.",
    },
    {
      question: "Як замовити дизайн лендингу або сайту?",
      answer:
        "Залиште заявку у формі на сайті ({contactsUrl}), напишіть у Telegram ({telegram}) або на email {email}.",
    },
    {
      question: "Чи працює дизайнерка з клієнтами з України та інших країн?",
      answer:
        "Так. SMOKFFIA працює віддалено з клієнтами з України та світу — українською, англійською, польською, німецькою та іспанською.",
    },
    {
      question: "Чи доступна Софія для фриланс-проєктів?",
      answer:
        "Так, SMOKFFIA відкрита до фриланс-проєктів: лендинги, сайти, додатки, ребрендинг і UI/UX.",
    },
    {
      question: "В яких інструментах працює SMOKFFIA?",
      answer:
        "Основний інструмент — Figma. Також досвід з Framer, Webflow та повним циклом від дослідження до UI kit і передачі в розробку.",
    },
  ]),
};

const en: SchemaContent = {
  personName: "Sofia",
  personCaption: "Sofia — UI/UX and web designer at SMOKFFIA",
  personJobTitleLocal: "Web Designer",
  description:
    "Hire SMOKFFIA (Sofia) for website, landing page, or app design — UI/UX and web designer. Modern web design, branding, Figma, design systems. Freelance for businesses in Ukraine and worldwide.",
  keywords:
    "website design, hire website designer, landing page design, web design, UI UX designer, branding, Figma, design systems, freelance designer, SMOKFFIA, Sofia designer",
  homeBreadcrumb: "Home",
  sections: {
    about: "About me",
    services: "Services & prices",
    projects: "My projects",
    process: "Work process",
    contacts: "Contact",
  },
  pageTitle: "Website, Landing Page & UI/UX Design | SMOKFFIA — Sofia",
  websiteAltNames: ["SMOKFFIA Design", "Sofia UI/UX", "Freelance web designer"],
  orderAction: "Order website design",
  viewPortfolioAction: "View portfolio",
  serviceName: "SMOKFFIA — website and UI/UX design",
  serviceAltName: "Hire SMOKFFIA for website design",
  offerCatalogName: "Design services",
  offers: [
    {
      name: "Landing page design",
      serviceName: "Landing Page Design",
      description:
        "Conversion-focused landing page design: structure, UI, responsive layout",
    },
    {
      name: "Business website design",
      serviceName: "Business Website Design",
      description: "Multi-page web design for companies and service businesses",
    },
    {
      name: "App UI/UX design",
      serviceName: "App Design",
      description: "UI/UX design for mobile and web apps in Figma",
    },
    {
      name: "Branding",
      serviceName: "Branding",
      description: "Visual identity, brand style, and guidelines",
    },
    {
      name: "Graphic design",
      serviceName: "Graphic Design",
      description: "Graphics for digital products and marketing",
    },
  ],
  faq: faqWithLinks("en", [
    {
      question: "How much does website design cost?",
      answer:
        "Pricing depends on scope: landing page, business website, app, or branding. Current packages and prices are listed in the Services & prices section on SMOKFFIA.",
    },
    {
      question: "What services does SMOKFFIA offer?",
      answer:
        "UI/UX design, web design, landing pages, business websites, app design, branding, graphic design, and Figma design systems.",
    },
    {
      question: "How do I order a landing page or website design?",
      answer:
        "Submit the form on the site ({contactsUrl}), message on Telegram ({telegram}), or email {email}.",
    },
    {
      question: "Does SMOKFFIA work with clients in Ukraine and abroad?",
      answer:
        "Yes. SMOKFFIA works remotely with clients worldwide — in Ukrainian, English, Polish, German, and Spanish.",
    },
    {
      question: "Is Sofia available for freelance projects?",
      answer:
        "Yes. SMOKFFIA takes on freelance projects: landing pages, websites, apps, rebranding, and UI/UX.",
    },
    {
      question: "What tools does SMOKFFIA use?",
      answer:
        "The main tool is Figma. Also experienced with Framer, Webflow, and the full cycle from research to UI kit and developer handoff.",
    },
  ]),
};

const pl: SchemaContent = {
  personName: "Sofia",
  personCaption: "Sofia — projektantka UI/UX i web w SMOKFFIA",
  personJobTitleLocal: "Projektantka web",
  description:
    "Zamów design strony, landing page lub aplikacji u SMOKFFIA (Sofia) — projektantka UI/UX i web. Nowoczesny web design, branding, Figma, design systems. Freelance dla firm z Ukrainy i świata.",
  keywords:
    "design strony, projektant stron www, landing page, web design, UI UX designer, branding, Figma, SMOKFFIA, Sofia designer",
  homeBreadcrumb: "Strona główna",
  sections: {
    about: "O mnie",
    services: "Usługi i ceny",
    projects: "Moje projekty",
    process: "Proces pracy",
    contacts: "Kontakt",
  },
  pageTitle: "Design stron, landing page i UI/UX | SMOKFFIA — Sofia",
  websiteAltNames: ["SMOKFFIA Design", "Sofia UI/UX", "Freelance web designer"],
  orderAction: "Zamów design strony",
  viewPortfolioAction: "Zobacz portfolio",
  serviceName: "SMOKFFIA — design stron i UI/UX",
  serviceAltName: "Zamów design strony u SMOKFFIA",
  offerCatalogName: "Usługi designu",
  offers: [
    {
      name: "Design landing page",
      serviceName: "Landing Page Design",
      description:
        "Nowoczesny landing page pod konwersję: struktura, UI, responsywność",
    },
    {
      name: "Design strony biznesowej",
      serviceName: "Business Website Design",
      description: "Wielostronicowy web design dla firm i usług",
    },
    {
      name: "UI/UX design aplikacji",
      serviceName: "App Design",
      description: "UI/UX design aplikacji mobilnych i webowych w Figma",
    },
    {
      name: "Branding",
      serviceName: "Branding",
      description: "Identyfikacja wizualna, styl marki i wytyczne",
    },
    {
      name: "Design graficzny",
      serviceName: "Graphic Design",
      description: "Grafika dla produktów cyfrowych i marketingu",
    },
  ],
  faq: faqWithLinks("pl", [
    {
      question: "Ile kosztuje design strony?",
      answer:
        "Cena zależy od zakresu: landing page, strona biznesowa, aplikacja lub branding. Aktualne pakiety i ceny są w sekcji Usługi i ceny na SMOKFFIA.",
    },
    {
      question: "Jakie usługi oferuje SMOKFFIA?",
      answer:
        "UI/UX design, web design, landing page, strony biznesowe, app design, branding, design graficzny i design systems w Figma.",
    },
    {
      question: "Jak zamówić design landing page lub strony?",
      answer:
        "Wyślij formularz na stronie ({contactsUrl}), napisz na Telegram ({telegram}) lub email {email}.",
    },
    {
      question: "Czy SMOKFFIA pracuje z klientami z Ukrainy i zagranicy?",
      answer:
        "Tak. SMOKFFIA pracuje zdalnie z klientami na całym świecie — po ukraińsku, angielsku, polsku, niemiecku i hiszpańsku.",
    },
    {
      question: "Czy Sofia jest dostępna do projektów freelance?",
      answer:
        "Tak. SMOKFFIA realizuje projekty freelance: landing page, strony, aplikacje, rebranding i UI/UX.",
    },
    {
      question: "W jakich narzędziach pracuje SMOKFFIA?",
      answer:
        "Główne narzędzie to Figma. Doświadczenie także z Framer, Webflow i pełnym cyklem od researchu do UI kit i przekazania do developmentu.",
    },
  ]),
};

const de: SchemaContent = {
  personName: "Sofia",
  personCaption: "Sofia — UI/UX- und Webdesignerin bei SMOKFFIA",
  personJobTitleLocal: "Webdesignerin",
  description:
    "Website-, Landingpage- oder App-Design bei SMOKFFIA (Sofia) — UI/UX- und Webdesignerin. Modernes Webdesign, Branding, Figma, Design Systems. Freelance für Unternehmen in der Ukraine und weltweit.",
  keywords:
    "Webdesign, Website Designerin, Landingpage Design, UI UX Designerin, Branding, Figma, SMOKFFIA, Sofia Designerin",
  homeBreadcrumb: "Startseite",
  sections: {
    about: "Über mich",
    services: "Leistungen & Preise",
    projects: "Meine Projekte",
    process: "Arbeitsprozess",
    contacts: "Kontakt",
  },
  pageTitle: "Website-, Landingpage- & UI/UX-Design | SMOKFFIA — Sofia",
  websiteAltNames: ["SMOKFFIA Design", "Sofia UI/UX", "Freelance Webdesignerin"],
  orderAction: "Webdesign bestellen",
  viewPortfolioAction: "Portfolio ansehen",
  serviceName: "SMOKFFIA — Website- und UI/UX-Design",
  serviceAltName: "Webdesign bei SMOKFFIA bestellen",
  offerCatalogName: "Design-Leistungen",
  offers: [
    {
      name: "Landingpage-Design",
      serviceName: "Landing Page Design",
      description:
        "Conversion-orientiertes Landingpage-Design: Struktur, UI, Responsive",
    },
    {
      name: "Business-Website-Design",
      serviceName: "Business Website Design",
      description: "Mehrseitiges Webdesign für Unternehmen und Services",
    },
    {
      name: "App UI/UX-Design",
      serviceName: "App Design",
      description: "UI/UX-Design für Mobile- und Web-Apps in Figma",
    },
    {
      name: "Branding",
      serviceName: "Branding",
      description: "Visuelle Identität, Markenstil und Guidelines",
    },
    {
      name: "Grafikdesign",
      serviceName: "Graphic Design",
      description: "Grafik für digitale Produkte und Marketing",
    },
  ],
  faq: faqWithLinks("de", [
    {
      question: "Was kostet Webdesign?",
      answer:
        "Der Preis hängt vom Umfang ab: Landingpage, Business-Website, App oder Branding. Aktuelle Pakete und Preise stehen im Bereich Leistungen & Preise auf SMOKFFIA.",
    },
    {
      question: "Welche Leistungen bietet SMOKFFIA?",
      answer:
        "UI/UX-Design, Webdesign, Landingpages, Business-Websites, App Design, Branding, Grafikdesign und Design Systems in Figma.",
    },
    {
      question: "Wie bestelle ich ein Landingpage- oder Website-Design?",
      answer:
        "Formular auf der Website ({contactsUrl}), Telegram ({telegram}) oder E-Mail {email}.",
    },
    {
      question: "Arbeitet SMOKFFIA mit Kunden aus der Ukraine und dem Ausland?",
      answer:
        "Ja. SMOKFFIA arbeitet remote mit Kunden weltweit — auf Ukrainisch, Englisch, Polnisch, Deutsch und Spanisch.",
    },
    {
      question: "Ist Sofia für Freelance-Projekte verfügbar?",
      answer:
        "Ja. SMOKFFIA übernimmt Freelance-Projekte: Landingpages, Websites, Apps, Rebranding und UI/UX.",
    },
    {
      question: "Mit welchen Tools arbeitet SMOKFFIA?",
      answer:
        "Haupttool ist Figma. Erfahrung auch mit Framer, Webflow und dem gesamten Prozess von Research bis UI Kit und Developer Handoff.",
    },
  ]),
};

const es: SchemaContent = {
  personName: "Sofía",
  personCaption: "Sofía — diseñadora UI/UX y web en SMOKFFIA",
  personJobTitleLocal: "Diseñadora web",
  description:
    "Contrata a SMOKFFIA (Sofía) para diseño web, landing page o app — diseñadora UI/UX y web. Diseño web moderno, branding, Figma, design systems. Freelance para empresas de Ucrania y todo el mundo.",
  keywords:
    "diseño web, diseñadora web, landing page, UI UX designer, branding, Figma, SMOKFFIA, Sofia diseñadora",
  homeBreadcrumb: "Inicio",
  sections: {
    about: "Sobre mí",
    services: "Servicios y precios",
    projects: "Mis proyectos",
    process: "Proceso de trabajo",
    contacts: "Contacto",
  },
  pageTitle: "Diseño web, landing page y UI/UX | SMOKFFIA — Sofía",
  websiteAltNames: ["SMOKFFIA Design", "Sofia UI/UX", "Diseñadora freelance"],
  orderAction: "Pedir diseño web",
  viewPortfolioAction: "Ver portfolio",
  serviceName: "SMOKFFIA — diseño web y UI/UX",
  serviceAltName: "Contratar diseño web en SMOKFFIA",
  offerCatalogName: "Servicios de diseño",
  offers: [
    {
      name: "Diseño de landing page",
      serviceName: "Landing Page Design",
      description:
        "Landing page orientada a conversión: estructura, UI, responsive",
    },
    {
      name: "Diseño de web corporativa",
      serviceName: "Business Website Design",
      description: "Diseño web multipágina para empresas y servicios",
    },
    {
      name: "Diseño UI/UX de app",
      serviceName: "App Design",
      description: "Diseño UI/UX de apps móviles y web en Figma",
    },
    {
      name: "Branding",
      serviceName: "Branding",
      description: "Identidad visual, estilo de marca y guías",
    },
    {
      name: "Diseño gráfico",
      serviceName: "Graphic Design",
      description: "Gráfica para productos digitales y marketing",
    },
  ],
  faq: faqWithLinks("es", [
    {
      question: "¿Cuánto cuesta el diseño web?",
      answer:
        "El precio depende del alcance: landing page, web corporativa, app o branding. Los paquetes y precios actuales están en Servicios y precios en SMOKFFIA.",
    },
    {
      question: "¿Qué servicios ofrece SMOKFFIA?",
      answer:
        "Diseño UI/UX, diseño web, landing pages, webs corporativas, app design, branding, diseño gráfico y design systems en Figma.",
    },
    {
      question: "¿Cómo pedir diseño de landing page o web?",
      answer:
        "Envía el formulario en el sitio ({contactsUrl}), escribe por Telegram ({telegram}) o email {email}.",
    },
    {
      question: "¿SMOKFFIA trabaja con clientes de Ucrania y del extranjero?",
      answer:
        "Sí. SMOKFFIA trabaja en remoto con clientes de todo el mundo — en ucraniano, inglés, polaco, alemán y español.",
    },
    {
      question: "¿Sofía está disponible para proyectos freelance?",
      answer:
        "Sí. SMOKFFIA acepta proyectos freelance: landing pages, webs, apps, rebranding y UI/UX.",
    },
    {
      question: "¿Qué herramientas usa SMOKFFIA?",
      answer:
        "La herramienta principal es Figma. También experiencia con Framer, Webflow y el ciclo completo desde research hasta UI kit y handoff a desarrollo.",
    },
  ]),
};

export const schemaContent: Record<Locale, SchemaContent> = {
  uk,
  en,
  pl,
  de,
  es,
};

export function getSchemaContent(locale: Locale): SchemaContent {
  return schemaContent[locale];
}
