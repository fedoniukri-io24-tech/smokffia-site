"use client";
import { useState } from "react";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
};

const categories = [
  "WEB DESIGN",
  "APP DESIGN",
  "BRANDING",
  "GRAPHIC DESIGN",
] as const;

type Category = (typeof categories)[number];

const plansByCategory: Record<Category, Plan[]> = {
  "WEB DESIGN": [
    {
      name: "LANDING PAGE",
      price: "$50",
      features: [
        "Індивідуальний UI дизайн",
        "Адаптивна верстка",
        "До 5 секцій",
        "2 раунди правок",
        "Бізнес-сайт",
      ],
    },
    {
      name: "BUSINESS WEBSITE",
      price: "$120",
      popular: true,
      features: [
        "Landing page",
        "До 8 сторінок",
        "Індивідуальні компоненти",
        "Адаптивний дизайн",
        "Форма зворотного зв'язку",
        "3 раунди правок",
      ],
    },
    {
      name: "LANDING PAGE",
      price: "$250",
      features: [
        "Безлімітні сторінки",
        "Преміум UI/UX",
        "Розширені анімації",
        "Повністю адаптивний",
        "Структура, готова до SEO",
        "Пріоритетна підтримка",
        "Безлімітні правки",
      ],
    },
  ],
  "APP DESIGN": [
    {
      name: "APP DESIGN",
      price: "від $60",
      features: [
        "Сучасний UI/UX дизайн",
        "Інтерактивний прототип",
        "Адаптивні компоненти",
        "Файл джерела Figma",
      ],
    },
    {
      name: "FULL APP DESIGN",
      price: "від $180",
      popular: true,
      features: [
        "Комплексний мобільний додаток",
        "Дизайн-система",
        "Інтерактивний прототип",
        "Передача для розробників",
        "Безлімітні правки",
      ],
    },
  ],
  BRANDING: [
    {
      name: "LOGO DESIGN",
      price: "$30",
      features: [
        "3 концепції логотипу",
        "Файли високої роздільної здатності",
        "PNG + SVG + PDF",
        "Комерційне використання",
      ],
    },
    {
      name: "BRAND IDENTITY",
      price: "$60",
      popular: true,
      features: [
        "Дизайн логотипу",
        "Колірна палітра",
        "Система типографіки",
        "Брендові настанови",
        "Аватарки для соціальних мереж",
      ],
    },
    {
      name: "BRAND IDENTITY + STICKER PACK",
      price: "$90",
      features: [
        "Усе, що в Brand Identity",
        "Набір наклейок на замовлення",
        "Готово до друку та цифрового використання",
      ],
    },
  ],
  "GRAPHIC DESIGN": [
    {
      name: "SOCIAL MEDIA DESIGN",
      price: "від $15",
      popular: true,
      features: [
        "Індивідуальний дизайн",
        "Висока роздільна здатність",
        "Оптимізовано для платформ",
        "Редагований вихідний файл",
      ],
    },
    {
      name: "POSTERS & FLYERS",
      price: "від $20",
      features: [
        "Готово до друку",
        "Сучасний макет",
        "Висока роздільна здатність",
        "Вихідний файл включено",
      ],
    },
    {
      name: "BANNERS & ADS",
      price: "від $15",
      features: [
        "Оптимізовано для вебу",
        "Різні розміри",
        "Високоякісний експорт",
      ],
    },
  ],
};

export default function Services() {
  const [active, setActive] = useState<Category>("WEB DESIGN");
  const plans = plansByCategory[active];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services__title">
          ПОСЛУГИ{" "}
          <span className="services__title-badge">&amp; ЦІНИ</span>
        </h2>
        <p className="services__subtitle">
          Оберіть ідеальний пакет для свого проєкту — і втілимо ваші ідеї в
          життя.
        </p>

        <div className="services__tabs" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`services__tab${active === c ? " services__tab--active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          className={`price-grid${plans.length === 2 ? " price-grid--two" : ""}`}
        >
          {plans.map((plan, i) => {
            const tilt =
              i % 2 === 0 ? "price-card--tilt-left" : "price-card--tilt-right";
            return (
              <div
                key={`${active}-${plan.name}-${plan.price}`}
                className={`price-card ${tilt}${plan.popular ? " price-card--popular" : ""}`}
              >
                {plan.popular && (
                  <div className="price-card__badge">ПОПУЛЯРНЕ</div>
                )}
                <h3 className="price-card__name">{plan.name}</h3>
                <p className="price-card__price">{plan.price}</p>
                <ul className="price-card__features">
                  {plan.features.map((f) => (
                    <li key={f} className="price-card__feature">
                      <Check
                        size={18}
                        strokeWidth={3}
                        className="price-card__check"
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="services__cta">
          <a href="#contacts" className="btn-order">
            ЗАМОВИТИ ДИЗАЙН
          </a>
        </div>

        <div className="services__banner">
          <div className="services__banner-copy">
            <h3 className="services__banner-title">
              ПОТРІБНО ЩОСЬ УНІКАЛЬНЕ?
            </h3>
            <p className="services__banner-text">
              Індивідуальна вартість залежить від обсягу проєкту.
              <br />
              Напишіть мені — і я підготую пропозицію під ваш запит
            </p>
          </div>
          <a href="#contacts" className="btn-quote">
            ОТРИМАТИ ВАРТІСТЬ
          </a>
        </div>
      </div>
    </section>
  );
}
