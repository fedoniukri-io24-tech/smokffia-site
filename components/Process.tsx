import Image from "next/image";
import type { Dictionary } from "@/lib/get-dictionary";
import WordDesign from "@/components/WordDesign";

type ProcessProps = {
  process: Dictionary["process"];
  skills: Dictionary["skills"];
  reviews: Dictionary["reviews"];
};

const stepLayout = [
  { side: "left" as const, tilt: -2 },
  { side: "right" as const, tilt: 2.5 },
  { side: "left" as const, tilt: -2.5 },
  { side: "right" as const, tilt: 2 },
  { side: "left" as const, tilt: -1.5 },
  { side: "right" as const, tilt: 3 },
];

/** Styles keyed by label so colors stay correct even if dictionary order drifts. */
const skillMetaByLabel: Record<
  string,
  { tone: "lime" | "pink" | "dark"; slug: string }
> = {
  FIGMA: { tone: "lime", slug: "figma" },
  "USER FLOWS": { tone: "pink", slug: "user-flows" },
  WEBFLOW: { tone: "dark", slug: "webflow" },
  ILLUSTRATOR: { tone: "lime", slug: "illustrator" },
  "DESIGN SYSTEMS": { tone: "dark", slug: "design-systems" },
  WIREFRAMING: { tone: "pink", slug: "wireframing" },
  FRAMER: { tone: "lime", slug: "framer" },
};

const skillOrder = [
  "FIGMA",
  "USER FLOWS",
  "WEBFLOW",
  "ILLUSTRATOR",
  "DESIGN SYSTEMS",
  "WIREFRAMING",
  "FRAMER",
] as const;

const reviewMeta = [
  {
    tone: "white",
    rotate: -3,
    tape: "lime",
    photo: "/images/reviews/margaryta.jpg",
  },
  {
    tone: "lime",
    rotate: 2.5,
    tape: "pink",
    photo: "/images/reviews/roman.jpg",
  },
  {
    tone: "pink",
    rotate: 3,
    tape: "lime",
    photo: "/images/reviews/artem.jpg",
  },
  {
    tone: "white",
    rotate: -2,
    tape: "pink",
    photo: "/images/reviews/polina.jpg",
  },
];

export default function Process({ process, skills, reviews }: ProcessProps) {
  return (
    <section id="process" className="process">
      <div className="container process__inner">
        <div className="process__heading">
          <Image
            src="/images/about-smiley.svg"
            alt=""
            width={72}
            height={70}
            className="process__deco process__deco--smiley"
          />
          <h2 className="process__title">
            {process.title}{" "}
            <WordDesign>{process.titlePink}</WordDesign>
          </h2>
          <Image
            src="/images/process-arrow.svg"
            alt=""
            width={70}
            height={65}
            className="process__deco process__deco--arrow"
          />
        </div>

        <div className="process__timeline">
          <div className="process__line" aria-hidden />

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
              <span className="skills__title-top">
                <span className="skills__title-line">{skills.titleLine}</span>
                <Image
                  src="/images/skills-star.png"
                  alt=""
                  width={72}
                  height={72}
                  className="skills__star"
                />
              </span>
              <span className="skills__title-outline">{skills.titleOutline}</span>
            </span>
          </h2>

          <div className="skills__list">
            {skillOrder.map((label) => {
              const meta = skillMetaByLabel[label];
              const text =
                skills.items.find(
                  (item) => item.toUpperCase() === label
                ) ?? label;
              return (
                <span
                  key={label}
                  className={`skill-badge skill-badge--${meta.tone} skill-badge--${meta.slug}`}
                >
                  <span className="skill-badge__spark" aria-hidden>
                    ✦
                  </span>
                  {text}
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
            <WordDesign>{reviews.titleLime}</WordDesign>
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
                  <Image
                    src={
                      meta.tape === "lime"
                        ? "/images/reviews/tape-lime.svg"
                        : "/images/reviews/tape-pink.svg"
                    }
                    alt=""
                    width={58}
                    height={31}
                    className={`review-card__tape review-card__tape--${meta.tape}`}
                  />
                  <p className="review-card__text">&ldquo; {r.text} &rdquo;</p>
                  <div className="review-card__author">
                    <div className="review-card__avatar">
                      <Image
                        src={meta.photo}
                        alt={r.name}
                        width={80}
                        height={80}
                        className="review-card__photo"
                      />
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

      </div>
    </section>
  );
}
