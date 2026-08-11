"use client";
import Image from "next/image";
import type { Dictionary } from "@/lib/get-dictionary";

type ProcessProps = {
  process: Dictionary["process"];
  skills: Dictionary["skills"];
  reviews: Dictionary["reviews"];
};

const stepLayout = [
  { side: "left" as const, tilt: -2.5 },
  { side: "right" as const, tilt: 2 },
  { side: "left" as const, tilt: -3 },
  { side: "right" as const, tilt: 2.5 },
  { side: "left" as const, tilt: -2 },
  { side: "right" as const, tilt: 3 },
];

const skillMeta = [
  { tone: "lime", rotate: -3 },
  { tone: "dark", rotate: 4 },
  { tone: "pink", rotate: 3 },
  { tone: "lime", rotate: 2 },
  { tone: "dark", rotate: -2 },
  { tone: "pink", rotate: -4 },
  { tone: "lime", rotate: 3 },
];

const reviewMeta = [
  { tone: "white", rotate: -3 },
  { tone: "lime", rotate: 2.5 },
  { tone: "pink", rotate: 3 },
  { tone: "white", rotate: -2 },
];

export default function Process({ process, skills, reviews }: ProcessProps) {
  return (
    <section id="process" className="process">
      <div className="container process__inner">
        <h2 className="process__title">
          {process.title}{" "}
          <span className="process__title-pink">{process.titlePink}</span>
        </h2>

        <div className="process__timeline">
          <div className="process__line" aria-hidden />

          <Image
            src="/images/about-smiley.svg"
            alt=""
            width={72}
            height={70}
            className="process__deco process__deco--smiley"
          />
          <Image
            src="/images/process-arrow.svg"
            alt=""
            width={70}
            height={65}
            className="process__deco process__deco--arrow"
          />

          <div className="process__steps">
            {process.steps.map((step, i) => {
              const layout = stepLayout[i] ?? stepLayout[0];
              return (
                <div
                  key={step.num}
                  className={`process__row process__row--${layout.side}`}
                >
                  {layout.side === "left" ? (
                    <>
                      <div className="process__col">
                        <article
                          className="timeline-card timeline-card--left"
                          style={{ transform: `rotate(${layout.tilt}deg)` }}
                        >
                          <div className="timeline-card__head">
                            <h3 className="timeline-card__title">{step.title}</h3>
                            <span className="timeline-card__num">{step.num}</span>
                          </div>
                          <p className="timeline-card__desc">{step.desc}</p>
                        </article>
                      </div>
                      <div className="process__dot" aria-hidden>
                        <span className="process__dot-core" />
                      </div>
                      <div className="process__col process__col--spacer" />
                    </>
                  ) : (
                    <>
                      <div className="process__col process__col--spacer" />
                      <div className="process__dot" aria-hidden>
                        <span className="process__dot-core" />
                      </div>
                      <div className="process__col">
                        <article
                          className="timeline-card timeline-card--right"
                          style={{ transform: `rotate(${layout.tilt}deg)` }}
                        >
                          <div className="timeline-card__head">
                            <span className="timeline-card__num">{step.num}</span>
                            <h3 className="timeline-card__title">{step.title}</h3>
                          </div>
                          <p className="timeline-card__desc">{step.desc}</p>
                        </article>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <h2 className="skills__title">
            <span className="skills__title-text">
              <span className="skills__title-line">{skills.titleLine}</span>
              <span className="skills__title-outline">{skills.titleOutline}</span>
            </span>
            <Image
              src="/images/skills-star.png"
              alt=""
              width={72}
              height={72}
              className="skills__star"
            />
          </h2>

          <div className="skills__list">
            {skills.items.map((label, i) => {
              const meta = skillMeta[i] ?? skillMeta[0];
              return (
                <span
                  key={label}
                  className={`skill-badge skill-badge--${meta.tone}`}
                  style={{ transform: `rotate(${meta.rotate}deg)` }}
                >
                  <span className="skill-badge__spark" aria-hidden>
                    ✦
                  </span>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="container">
          <h2 className="reviews__title">
            <span className="reviews__title-outline">{reviews.titleOutline}</span>{" "}
            <span className="reviews__title-lime">{reviews.titleLime}</span>
            <Image
              src="/images/reviews-hand.svg"
              alt=""
              width={67}
              height={95}
              className="reviews__hand"
            />
          </h2>

          <div className="reviews__grid">
            {reviews.items.map((r, i) => {
              const meta = reviewMeta[i] ?? reviewMeta[0];
              return (
                <article
                  key={r.name}
                  className={`review-card review-card--${meta.tone}`}
                  style={{ transform: `rotate(${meta.rotate}deg)` }}
                >
                  <p className="review-card__text">&ldquo; {r.text} &rdquo;</p>
                  <div className="review-card__author">
                    <div className="review-card__avatar" aria-hidden>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="review-card__name">{r.name}</p>
                      <p className="review-card__role">{r.role}</p>
                    </div>
                  </div>
                  {i === 0 && (
                    <Image
                      src="/images/reviews-squiggle.png"
                      alt=""
                      width={70}
                      height={65}
                      className="review-card__squiggle"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="reviews__edge" aria-hidden>
          <svg
            className="reviews__edge-svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 48C120 18 220 72 340 52C460 32 520 8 660 40C800 72 900 82 1040 46C1180 10 1280 22 1380 44C1410 50 1430 48 1440 46V100H0V48Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
