import Image from "next/image";
import type { CaseVisual } from "@/lib/cases";

type Props = {
  visual: CaseVisual;
  alt: string;
};

export default function CasePreview({ visual, alt }: Props) {
  return (
    <div className={`case-collage case-collage--${visual.layout}`}>
      {visual.shots.map((shot, index) => (
        <div
          key={shot.src}
          className={`case-shot case-shot--${index + 1}`}
          style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
        >
          <Image
            src={shot.src}
            alt={index === 0 ? alt : ""}
            width={shot.width}
            height={shot.height}
            className="case-shot__img"
            sizes="(max-width: 767px) 70vw, 22vw"
          />
        </div>
      ))}
    </div>
  );
}
