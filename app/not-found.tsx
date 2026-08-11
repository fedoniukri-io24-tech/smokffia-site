import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Сторінку не знайдено",
  description:
    "Цієї сторінки не існує. Поверніться на головну SMOKFFIA — портфоліо UI/UX дизайнерки Софії.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__brand">SMOKFFIA</p>
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Сторінку не знайдено</h1>
        <p className="not-found__text">
          Схоже, цей URL загубився в прототипах. Поверніться на головну — там
          портфоліо, послуги й контакти.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="btn-hero">
            НА ГОЛОВНУ
          </Link>
          <Link href="/#contacts" className="not-found__link">
            Написати мені →
          </Link>
        </div>
      </div>
    </main>
  );
}
