export const siteConfig = {
  name: "SMOKFFIA",
  shortName: "SMOKFFIA",
  personName: "Софія",
  title:
    "Дизайн сайтів, лендингів і UI/UX | SMOKFFIA — Софія",
  titleTemplate: "%s | SMOKFFIA",
  description:
    "Замовити дизайн сайту, лендингу чи додатку у SMOKFFIA (Софія) — UI/UX і вебдизайнерка. Сучасний вебдизайн, брендинг, Figma, дизайн-системи. Фриланс для бізнесу з України та світу.",
  locale: "uk_UA",
  language: "uk",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://smokffia.com",
  creator: "Софія · SMOKFFIA",
  email: "porucaevamaria@gmail.com",
  telegram: "https://t.me/sofiauiuxdesign",
  social: {
    instagram: "https://www.instagram.com/smokffiaiuiuxdesign/",
    behance: "https://behance.net/smokffiauiux",
    linkedin: "https://linkedin.com/in/smokffia",
    fiverr: "https://fiverr.com/smokffia",
  },
  keywords: [
    // Primary UA intent
    "дизайн сайту",
    "замовити дизайн сайту",
    "дизайн лендингу",
    "замовити лендинг",
    "вебдизайн",
    "веб дизайнер",
    "вебдизайнерка",
    "UI UX дизайнер",
    "UI/UX дизайнерка",
    "UI UX дизайн",
    "дизайн інтерфейсів",
    "дизайн додатку",
    "app design",
    "брендинг",
    "фірмовий стиль",
    "дизайн-система",
    "графічний дизайн",
    "дизайн портфоліо",
    // Tools & process
    "Figma дизайнер",
    "дизайн у Figma",
    "UX дослідження",
    "прототипування",
    "дизайн бізнес сайту",
    "дизайн інтернет магазину",
    // Location / freelance
    "дизайнер Україна",
    "фриланс дизайнер",
    "замовити дизайнера",
    "вебдизайн Україна",
    "UI UX designer Ukraine",
    // Brand
    "SMOKFFIA",
    "Софія дизайнерка",
    "Sofia UI UX",
    // EN
    "web design",
    "landing page design",
    "UI UX designer",
    "freelance web designer",
    "branding designer",
    "website redesign",
  ],
  ogImage: "/opengraph-image",
  sections: [
    {
      id: "about",
      path: "/#about",
      title: "Про мене",
      description: "UI/UX і вебдизайнерка Софія (SMOKFFIA)",
    },
    {
      id: "services",
      path: "/#services",
      title: "Послуги і ціни",
      description: "Дизайн сайтів, лендингів, додатків і брендинг",
    },
    {
      id: "projects",
      path: "/#projects",
      title: "Мої проєкти",
      description: "Кейси вебдизайну та UI/UX",
    },
    {
      id: "process",
      path: "/#process",
      title: "Процес роботи",
      description: "Як проходить дизайн-проєкт від брифу до запуску",
    },
    {
      id: "contacts",
      path: "/#contacts",
      title: "Контакти",
      description: "Замовити дизайн сайту або лендингу",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
