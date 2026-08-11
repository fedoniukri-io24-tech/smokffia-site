"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container container--wide hero__inner">
        <div className="hero__content">
          <div className="hero__lang">
            UA <span className="hero__lang-arrow">↓</span>
          </div>

          <p className="hero__eyebrow">
            UI/UX-ДИЗАЙНЕРКА / ВЕБДИЗАЙНЕРКА / КРЕАТИВНА РОЗРОБНИЦЯ
          </p>

          <h1 className="hero__title">
            <span className="hero__title-row">
              <span className="hero__word">Я</span>
              <span className="hero__inline-img hero__inline-img--cat">
                <Image
                  src="/images/hero-cat.jpg"
                  alt=""
                  width={244}
                  height={84}
                  priority
                />
              </span>
              <span className="hero__word hero__word--create">
                СТВ
                <Image
                  src="/images/letter-o.png"
                  alt=""
                  width={44}
                  height={51}
                  className="hero__o-icon"
                />
                РЮЮ
              </span>
            </span>

            <span className="hero__title-row">
              <span className="hero__word-design">
                <span className="hero__word-design__outline" aria-hidden="true">
                  ДИЗАЙН,
                </span>
                <span className="hero__word-design__fill">ДИЗАЙН,</span>
              </span>
              <span className="hero__inline-img hero__inline-img--girl">
                <Image
                  src="/images/hero-design.jpg"
                  alt=""
                  width={170}
                  height={83}
                  priority
                />
              </span>
              <span className="hero__word">ЯКИЙ</span>
            </span>

            <span className="hero__title-row hero__title-row--full">
              <span className="hero__word hero__word--full">ЗАПАМ&apos;ЯТОВУЄТЬСЯ</span>
            </span>
          </h1>

          <div className="hero__actions hero__actions--desktop">
            <Image
              src="/images/moon.svg"
              alt=""
              width={56}
              height={58}
              className="hero__moon"
            />
            <div className="hero__cta-wrap">
              <a href="#projects" className="btn-hero">
                ПЕРЕГЛЯНУТИ ПРОЄКТИ
              </a>
              <Image
                src="/images/cursor.svg"
                alt=""
                width={36}
                height={62}
                className="hero__cursor"
              />
            </div>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-shadow" aria-hidden />
          <div className="hero__photo">
            <Image
              src="/images/sofia-hero.jpg"
              alt="Sofia"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="hero__sparkle" aria-hidden>
            ✦
          </span>
          <Image
            src="/images/sun-smiley.png"
            alt=""
            width={72}
            height={72}
            className="hero__sun hero__sun--bl"
          />
          <Image
            src="/images/sun-smiley.png"
            alt=""
            width={72}
            height={72}
            className="hero__sun hero__sun--tr"
          />
        </div>

        <div className="hero__actions hero__actions--mobile">
          <div className="hero__cta-wrap">
            <a href="#projects" className="btn-hero">
              ПЕРЕГЛЯНУТИ ПРОЄКТИ
            </a>
            <Image
              src="/images/cursor.svg"
              alt=""
              width={36}
              height={62}
              className="hero__cursor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
