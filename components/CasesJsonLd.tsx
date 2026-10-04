import JsonLd from "@/components/JsonLd";
import {
  getCasesBreadcrumbJsonLd,
  getCasesPageJsonLd,
  type PortfolioListItem,
} from "@/lib/schema";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  items: PortfolioListItem[];
};

export default function CasesJsonLd({ locale, items }: Props) {
  const stripContext = (item: Record<string, unknown>) => {
    const { ["@context"]: _ctx, ...rest } = item;
    return rest;
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          stripContext(getCasesPageJsonLd(locale, items)),
          stripContext(getCasesBreadcrumbJsonLd(locale)),
        ],
      }}
    />
  );
}
