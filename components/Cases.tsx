import Image from "next/image";
import type { Dictionary } from "@/lib/get-dictionary";
import { caseVisualById } from "@/lib/cases";
import CaseCard from "@/components/CaseCard";
import WordDesign from "@/components/WordDesign";

type Props = {
  projects: Dictionary["projects"];
  page: Dictionary["casesPage"];
};

export default function Cases({ projects, page }: Props) {
  return (
    <section className="cases">
      <div className="container container--xl cases__inner">
        <h1 className="cases__title">
          <span className="cases__title-moi">{page.titleMoi}</span>{" "}
          <WordDesign>{page.titleCases}</WordDesign>
          <Image
            src="/images/projects-fire.svg"
            alt=""
            width={48}
            height={58}
            className="cases__fire"
          />
        </h1>

        <div className="cases__grid">
          {projects.items.map((item) => {
            const visual = caseVisualById[item.id];
            if (!visual) return null;

            return (
              <CaseCard
                key={item.id}
                item={item}
                visual={visual}
                viewLabel={projects.viewProject}
                variant="page"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
