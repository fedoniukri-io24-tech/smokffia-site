import type { Locale } from "@/lib/i18n";
import { getSchemaContent } from "@/lib/schema-content";
import type { ReactNode } from "react";

type Props = { locale: Locale };

const LINK_RE =
  /(https?:\/\/[^\s)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function linkifyAnswer(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(LINK_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    const url = match[1];
    const email = match[2];

    if (url) {
      const external = !url.includes("#contacts");
      nodes.push(
        <a
          key={`${index}-${url}`}
          href={url}
          className="faq__link"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {url}
        </a>,
      );
    } else if (email) {
      nodes.push(
        <a
          key={`${index}-${email}`}
          href={`mailto:${email}`}
          className="faq__link"
        >
          {email}
        </a>,
      );
    }

    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function Faq({ locale }: Props) {
  const copy = getSchemaContent(locale);

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-title faq__title">
          {copy.faqHeading}{" "}
          <span className="section-title__pink">{copy.faqHeadingAccent}</span>
        </h2>

        <div className="faq__list">
          {copy.faq.map((item) => (
            <details key={item.question} className="faq__item">
              <summary className="faq__question">{item.question}</summary>
              <p className="faq__answer">{linkifyAnswer(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="faq__edge" aria-hidden>
        <svg
          className="faq__edge-svg"
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
    </section>
  );
}
