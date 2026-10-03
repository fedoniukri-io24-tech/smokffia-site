import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import { caseVisualById, featuredCaseIds } from "@/lib/cases";
import CaseCard from "@/components/CaseCard";
import WordDesign from "@/components/WordDesign";

type ProjectsProps = {
  dict: Dictionary["projects"];
  locale: Locale;
};

export default function Projects({ dict, locale }: ProjectsProps) {
  const featured = dict.items.filter((item) =>
    (featuredCaseIds as readonly string[]).includes(item.id),
  );

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
          {featured.map((item) => {
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

        <div className="projects__all">
          <Link href={`/${locale}/cases`} className="projects__all-link">
            {dict.viewAll}
          </Link>
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
