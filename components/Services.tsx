"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
};

type ServicesProps = {
  dict: Dictionary["services"];
  locale: Locale;
};

export default function Services({ dict, locale }: ServicesProps) {
  const categories = dict.categories;
  const [active, setActive] = useState(categories[0] ?? "");
  const plansByCategory = dict.plans as Record<string, Plan[]>;
  const plans = plansByCategory[active] ?? [];
  const contactsHref = `/${locale}#contacts`;

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services__title">
          {dict.title}{" "}
          <span className="services__title-badge">{dict.titleBadge}</span>
        </h2>
        <p className="services__subtitle">{dict.subtitle}</p>

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
                  <div className="price-card__badge">{dict.popular}</div>
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
          <a href={contactsHref} className="btn-order">
            {dict.order}
          </a>
        </div>

        <div className="services__banner">
          <div className="services__banner-copy">
            <h3 className="services__banner-title">{dict.bannerTitle}</h3>
            <p className="services__banner-text">
              {dict.bannerText}
              <br />
              {dict.bannerText2}
            </p>
          </div>
          <a href={contactsHref} className="btn-quote">
            {dict.quote}
          </a>
        </div>
      </div>
    </section>
  );
}
