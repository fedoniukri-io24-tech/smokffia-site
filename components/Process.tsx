"use client";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "ВИЯВЛЕННЯ ПОТРЕБ",
    desc: "Початкова зустріч, визначення цілей, цільової аудиторії та обмежень.",
    side: "left" as const,
    tilt: -2.5,
  },
  {
    num: "02",
    title: "ДОСЛІДЖЕННЯ",
    desc: "Аудит, аналіз референсів, мудборди та ключові висновки.",
    side: "right" as const,
    tilt: 2,
  },
  {
    num: "03",
    title: "ПРОТОТИПИ СТРУКТУРИ",
    desc: "Структура, користувацькі сценарії та низькодеталізовані макети.",
    side: "left" as const,
    tilt: -3,
  },
  {
    num: "04",
    title: "ВІЗУАЛЬНИЙ ДИЗАЙН",
    desc: "Типографіка, кольори, компонування.",
    side: "right" as const,
    tilt: 2.5,
  },
  {
    num: "05",
    title: "UI KIT",
    desc: "Компоненти, стани елементів та правила використання дизайн-системи.",
    side: "left" as const,
    tilt: -2,
  },
  {
    num: "06",
    title: "ЗАПУСК",
    desc: "Передача проєкту, контроль якості (QA) та впевнений запуск.",
    side: "right" as const,
    tilt: 3,
  },
];

const skills = [
  { label: "FIGMA", tone: "lime", rotate: -3 },
  { label: "WEBFLOW", tone: "dark", rotate: 4 },
  { label: "USER FLOWS", tone: "pink", rotate: 3 },
  { label: "FRAMER", tone: "lime", rotate: 2 },
  { label: "DESIGN SYSTEMS", tone: "dark", rotate: -2 },
  { label: "WIREFRAMING", tone: "pink", rotate: -4 },
  { label: "ILLUSTRATOR", tone: "lime", rotate: 3 },
];

const reviews = [
  {
    text: "Працювати було легко та комфортно. Усі побажання були враховані, а результат повністю відповідав нашим очікуванням. Дизайн вийшов сучасним, зрозумілим і продуманим до деталей.",
    name: "МАРГАРИТА ВІТЯЗЬ",
    role: "Художниця",
    tone: "white",
    rotate: -3,
  },
  {
    text: "За наші спільні ролі ми розробляли багато сайтів, і щоразу всі вони були зроблені дуже грамотно. Завжди рада рекомендувати цього спеціаліста новим потрібним знайомим!",
    name: "РОМАН ФЕДОНЮК",
    role: "Програміст, TeleBots Founder",
    tone: "lime",
    rotate: 2.5,
  },
  {
    text: "Відмінна комунікація та професіоналізм. Усі етапи роботи були прозорими, а фінальний результат виявився саме так, як я хотів. Однозначно рекомендую!",
    name: "АРТЕМ КОЛОС",
    role: "Репетитор, фрілансер",
    tone: "pink",
    rotate: 3,
  },
  {
    text: "Я просто в захваті — було дуже легко спілкуватись, усі мої ідеї були почуті й взяті до уваги! Дизайн вийшов стильним, сучасним. Процес був максимально комфортним, а результат перевершив очікування.",
    name: "ПОЛІНА ІЗОТОВА",
    role: "Графічна дизайнерка",
    tone: "white",
    rotate: -2,
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container process__inner">
        <h2 className="process__title">
          ПРОЦЕС <span className="process__title-pink">РОБОТИ</span>
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
            {steps.map((step) => (
              <div
                key={step.num}
                className={`process__row process__row--${step.side}`}
              >
                {step.side === "left" ? (
                  <>
                    <div className="process__col">
                      <article
                        className="timeline-card timeline-card--left"
                        style={{ transform: `rotate(${step.tilt}deg)` }}
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
                        style={{ transform: `rotate(${step.tilt}deg)` }}
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
            ))}
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <h2 className="skills__title">
            <span className="skills__title-text">
              <span className="skills__title-line">СКІЛЛИ &amp;</span>
              <span className="skills__title-outline">SOFTWARE</span>
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
            {skills.map((s) => (
              <span
                key={s.label}
                className={`skill-badge skill-badge--${s.tone}`}
                style={{ transform: `rotate(${s.rotate}deg)` }}
              >
                <span className="skill-badge__spark" aria-hidden>
                  ✦
                </span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="container">
          <h2 className="reviews__title">
            <span className="reviews__title-outline">ВІДГУКИ</span>{" "}
            <span className="reviews__title-lime">КЛІЄНТІВ</span>
            <Image
              src="/images/reviews-hand.svg"
              alt=""
              width={67}
              height={95}
              className="reviews__hand"
            />
          </h2>

          <div className="reviews__grid">
            {reviews.map((r, i) => (
              <article
                key={r.name}
                className={`review-card review-card--${r.tone}`}
                style={{ transform: `rotate(${r.rotate}deg)` }}
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
            ))}
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
