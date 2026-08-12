"use client";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import WordDesign from "@/components/WordDesign";

type ProjectsProps = {
  dict: Dictionary["projects"];
  locale: Locale;
};

const projectVisuals: Record<
  string,
  { img: string; bg: string; tilt: "left" | "center" | "right" }
> = {
  "BUTENKO FIT": {
    img: "/images/project-butenko.png",
    bg: "#E8E0F5",
    tilt: "left",
  },
  "TRADE GROUND": {
    img: "/images/project-trade.png",
    bg: "#C8F070",
    tilt: "center",
  },
  "NIEZNANY PIEKARZ": {
    img: "/images/project-bakery.png",
    bg: "#F5D0D8",
    tilt: "right",
  },
};

export default function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="projects">
      <div className="container container--xl">
        <h2 className="projects__title">
          <span className="projects__title-moi">{dict.titleMoi}</span>{" "}
          <WordDesign>{dict.titleProjects}</WordDesign>
          <Image
            src="/images/projects-fire.svg"
            alt=""
            width={48}
            height={58}
            className="projects__fire"
          />
        </h2>

        <div className="projects__grid">
          {dict.items.map((p) => {
            const visual = projectVisuals[p.title] ?? {
              img: "/images/project-butenko.png",
              bg: "#E8E0F5",
              tilt: "left" as const,
            };

            return (
              <article
                key={p.title}
                className={`card-project card-project--${visual.tilt}`}
              >
                <div
                  className="card-project__chrome"
                  style={{ background: visual.bg }}
                >
                  <div className="card-project__bar">
                    <span className="card-project__dot" />
                    <span className="card-project__dot" />
                    <span className="card-project__dot" />
                  </div>
                  <div className="card-project__preview">
                    <Image
                      src={visual.img}
                      alt={p.title}
                      width={375}
                      height={272}
                      className="card-project__img"
                    />
                  </div>
                </div>

                <div className="card-project__body">
                  <div className="card-project__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="card-project__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="card-project__title">{p.title}</h3>
                  <p className="card-project__desc">{p.desc}</p>
                  <p className="card-project__services">{p.services}</p>
                  <a href="#" className="card-project__link">
                    {dict.viewProject} <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects__all">
          <a href="#" className="projects__all-link">
            {dict.viewAll}
          </a>
        </div>
      </div>

      <div className="projects-marquee" aria-hidden>
        <div className="projects-marquee__edge projects-marquee__edge--top">
          <svg
            className="projects-marquee__edge-svg"
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 28C110 8 210 46 340 30C470 14 560 4 700 26C840 48 940 52 1080 28C1220 4 1320 14 1440 24V56H0V28Z"
            />
          </svg>
        </div>
        <div className="projects-marquee__inner">
          <div className="projects-marquee__track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="projects-marquee__item">
                {dict.marquee.map((item) => (
                  <span key={`${i}-${item}`} className="projects-marquee__chunk">
                    {item}
                    <span className="projects-marquee__star">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="projects-marquee__edge projects-marquee__edge--lime">
          <svg
            className="projects-marquee__edge-svg"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 0H1440V12C1320 28 1220 36 1080 18C940 -2 840 4 700 22C560 40 470 34 340 16C210 -2 110 20 0 14V0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
