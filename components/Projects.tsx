"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import { caseVisualById, featuredCaseIds } from "@/lib/cases";
import CaseCard from "@/components/CaseCard";
import WordDesign from "@/components/WordDesign";

type ProjectsProps = {
  dict: Dictionary["projects"];
  locale: Locale;
};

export default function Projects({ dict, locale: _locale }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  const featured = dict.items.filter((item) =>
    (featuredCaseIds as readonly string[]).includes(item.id),
  );
  const items = showAll ? dict.items : featured;

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

        <div
          className={`projects__grid${showAll ? " projects__grid--all" : ""}`}
        >
          {items.map((item) => {
            const visual = caseVisualById[item.id];
            if (!visual) return null;

            return (
              <CaseCard
                key={item.id}
                item={item}
                visual={visual}
                viewLabel={dict.viewProject}
                variant="home"
              />
            );
          })}
        </div>

        {!showAll && (
          <div className="projects__all">
            <button
              type="button"
              className="projects__all-link"
              onClick={() => setShowAll(true)}
            >
              {dict.viewAll}
            </button>
          </div>
        )}
      </div>

      <div className="projects-marquee" aria-hidden>
        <Image
          src="/images/projects-marquee-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="projects-marquee__bg"
        />
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
      </div>
    </section>
  );
}
