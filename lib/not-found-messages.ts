import type { Locale } from "@/lib/i18n";

export const notFoundMessages: Record<
  Locale,
  {
    brand: string;
    code: string;
    title: string;
    text: string;
    home: string;
    write: string;
  }
> = {
  uk: {
    brand: "SMOKFFIA",
    code: "404",
    title: "Сторінку не знайдено",
    text: "Схоже, цей URL загубився в прототипах. Поверніться на головну — там портфоліо, послуги й контакти.",
    home: "НА ГОЛОВНУ",
    write: "Написати мені →",
  },
  en: {
    brand: "SMOKFFIA",
    code: "404",
    title: "Page not found",
    text: "Looks like this URL got lost in the prototypes. Head home — you'll find the portfolio, services, and contact there.",
    home: "GO HOME",
    write: "Message me →",
  },
  pl: {
    brand: "SMOKFFIA",
    code: "404",
    title: "Nie znaleziono strony",
    text: "Wygląda na to, że ten URL zgubił się w prototypach. Wróć na stronę główną — tam znajdziesz portfolio, usługi i kontakt.",
    home: "NA GŁÓWNĄ",
    write: "Napisz do mnie →",
  },
  de: {
    brand: "SMOKFFIA",
    code: "404",
    title: "Seite nicht gefunden",
    text: "Sieht aus, als hätte sich diese URL in den Prototypen verlaufen. Zurück zur Startseite — dort findest du Portfolio, Leistungen und Kontakt.",
    home: "ZUR STARTSEITE",
    write: "Schreib mir →",
  },
  es: {
    brand: "SMOKFFIA",
    code: "404",
    title: "Página no encontrada",
    text: "Parece que esta URL se perdió entre los prototipos. Vuelve al inicio — allí están el portfolio, los servicios y el contacto.",
    home: "IR AL INICIO",
    write: "Escríbeme →",
  },
};
