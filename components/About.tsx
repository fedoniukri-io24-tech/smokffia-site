"use client";
import Image from "next/image";

const tagsDesktop = ["WEB DESIGN", "BRANDING", "GRAPHIC DESIGN"];
const tagsMobile = ["WEB DESIGN", "UI/UX", "BRANDING", "GRAPHIC DESIGN"];

const statsDesktop = [
  { value: "2+", label: "КОМЕРЦІЙНОГО ДОСВІДУ" },
  { value: "10+", label: "ПРОЄКТІВ" },
  { value: "3", label: "КРАЇНИ" },
];

const statsMobile = [
  { value: "10+", label: "ПРОЄКТІВ" },
  { value: "2+", label: "КОМЕРЦІЙНОГО ДОСВІДУ" },
  { value: "3", label: "КРАЇНИ" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__edge about__edge--top" aria-hidden>
        <Image
          src="/images/cursor.svg"
          alt=""
          width={28}
          height={48}
          className="about__edge-cursor"
        />
      </div>

      <div className="about__body">
        <div className="container container--xl about__inner">
          <div className="about__grid">
            <div className="about__photo-col">
              <div className="about__frame">
                <Image
                  src="/images/about-halo.svg"
                  alt=""
                  width={137}
                  height={109}
                  className="about__halo"
                />
                <div className="about__avatar">
                  <Image
                    src="/images/sofia-about.png"
                    alt="Софія"
                    fill
                    sizes="(max-width: 768px) 70vw, 400px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="about__content">
              <div className="about__heading-row">
                <div className="about__heading">
                  <h2 className="about__title about__title--desktop">
                    <span className="about__hello">Привіт!</span>
                    <span className="about__name">
                      Я Софія — UI/UX дизайнерка.
                    </span>
                  </h2>

                  <h2 className="about__title about__title--mobile">
                    <span className="about__name about__name--mobile">
                      Привіт! Я Софія — UI/UX та вебдизайнерка.
                    </span>
                  </h2>
                </div>

                <div className="about__smiley-wrap about__smiley-wrap--mobile">
                  <Image
                    src="/images/about-smiley.svg"
                    alt=""
                    width={91}
                    height={88}
                    className="about__smiley"
                  />
                </div>
              </div>

              <p className="about__text">
                Я допомагаю брендам, компаніям і стартапам створювати цифрові
                продукти, які поєднують стиль, функціональність та зрозумілий
                користувацький досвід. Для мене дизайн — це не лише гарна
                картинка. Це інструмент, який допомагає бізнесу досягати своїх
                цілей, а людям — легко взаємодіяти з продуктом.
              </p>
              <p className="about__note">
                Кожен проєкт починається з дослідження, продуманих рішень і
                уваги до деталей.
              </p>

              <div className="about__tags about__tags--desktop">
                <span className="about__tag about__tag--spacer" aria-hidden />
                {tagsDesktop.map((t) => (
                  <span key={t} className="about__tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="about__tags about__tags--mobile">
                {tagsMobile.map((t) => (
                  <span key={t} className="about__tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="about__divider" />

              <div className="about__stats-row">
                <div className="about__stats about__stats--desktop">
                  {statsDesktop.map((s) => (
                    <div key={s.label} className="about__stat">
                      <p className="about__stat-value">{s.value}</p>
                      <p className="about__stat-label">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="about__stats about__stats--mobile">
                  {statsMobile.map((s) => (
                    <div key={s.label} className="about__stat">
                      <p className="about__stat-value">{s.value}</p>
                      <p className="about__stat-label">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="about__smiley-wrap about__smiley-wrap--desktop">
                  <Image
                    src="/images/about-smiley.svg"
                    alt=""
                    width={91}
                    height={88}
                    className="about__smiley"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
