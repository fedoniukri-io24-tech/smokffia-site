export const locales = ["uk", "en", "pl", "de", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  pl: "Polski",
  de: "Deutsch",
  es: "Español",
};

export const localeShort: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
  pl: "PL",
  de: "DE",
  es: "ES",
};

export const localeOg: Record<Locale, string> = {
  uk: "uk_UA",
  en: "en_US",
  pl: "pl_PL",
  de: "de_DE",
  es: "es_ES",
};

export const localeHtml: Record<Locale, string> = {
  uk: "uk",
  en: "en",
  pl: "pl",
  de: "de",
  es: "es",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  if (segment && hasLocale(segment)) return segment;
  return null;
}
