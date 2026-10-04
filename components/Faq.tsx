import type { Locale } from "@/lib/i18n";
import { getSchemaContent } from "@/lib/schema-content";

type Props = { locale: Locale };

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
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
