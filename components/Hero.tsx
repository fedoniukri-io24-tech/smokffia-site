"use client";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type HeroProps = {
  dict: Dictionary["hero"];
  locale: Locale;
};

export default function Hero({ dict, locale }: HeroProps) {
  const projectsHref = `/${locale}#projects`;

  return (
    <section className="hero">
      <div className="container container--wide hero__inner">
        <div className="hero__content">
          <LanguageSwitcher locale={locale} />

          <p className="hero__eyebrow">{dict.eyebrow}</p>

          <h1 className="hero__title">
            <span className="hero__title-row">
              <span className="hero__word">{dict.wordI}</span>
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
                {dict.wordCreateBefore}
                <Image
                  src="/images/letter-o.png"
                  alt=""
                  width={44}
                  height={51}
                  className="hero__o-icon"
                />
                {dict.wordCreateAfter}
              </span>
            </span>

            <span className="hero__title-row">
              <span className="hero__word-design">
                <span className="hero__word-design__outline" aria-hidden="true">
                  {dict.wordDesign}
                </span>
                <span className="hero__word-design__fill">{dict.wordDesign}</span>
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
              <span className="hero__word">{dict.wordThat}</span>
            </span>

            <span className="hero__title-row hero__title-row--full">
              <span className="hero__word hero__word--full">
                {dict.wordMemorable}
              </span>
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
              <a href={projectsHref} className="btn-hero">
                {dict.cta}
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
              alt={dict.photoAlt}
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
            <a href={projectsHref} className="btn-hero">
              {dict.cta}
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
