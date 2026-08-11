import type { Locale } from "./i18n";
import { hasLocale } from "./i18n";
import { notFound } from "next/navigation";

const dictionaries = {
  uk: () => import("../dictionaries/uk.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
  pl: () => import("../dictionaries/pl.json").then((m) => m.default),
  de: () => import("../dictionaries/de.json").then((m) => m.default),
  es: () => import("../dictionaries/es.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["uk"]>>;

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale as Locale]();
}
