import type { CaseVisual } from "@/lib/cases";
import CasePreview from "@/components/CasePreview";

export type CaseItem = {
  id: string;
  title: string;
  tags: string[];
  desc: string;
  services: string;
};

type Props = {
  item: CaseItem;
  visual: CaseVisual;
  viewLabel: string;
  variant?: "home" | "page";
};

export default function CaseCard({
  item,
  visual,
  viewLabel,
  variant = "home",
}: Props) {
  return (
    <article
      id={item.id}
      className={`card-project card-project--${visual.tilt}${variant === "page" ? " card-project--shadow" : ""}`}
    >
      <div className="card-project__chrome" style={{ background: visual.bg }}>
        <div className="card-project__bar">
          <span className="card-project__dot" />
          <span className="card-project__dot" />
          <span className="card-project__dot" />
        </div>
        <div className="card-project__preview">
          <CasePreview visual={visual} alt={item.title} />
        </div>
      </div>

      <div className="card-project__body">
        <div className="card-project__tags">
          {item.tags.map((t) => (
            <span key={t} className="card-project__tag">
              {t}
            </span>
          ))}
        </div>
        <h3 className="card-project__title">{item.title}</h3>
        <p className="card-project__desc">{item.desc}</p>
        <p className="card-project__services">{item.services}</p>
        <a
          href={visual.url}
          className="card-project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {viewLabel} <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
