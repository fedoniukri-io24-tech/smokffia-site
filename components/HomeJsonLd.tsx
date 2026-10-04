import JsonLd from "@/components/JsonLd";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getProfilePageJsonLd,
} from "@/lib/schema";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

/** Home-only schema: profile, FAQ (must match visible FAQ), breadcrumbs. */
export default function HomeJsonLd({ locale }: Props) {
  const stripContext = (item: Record<string, unknown>) => {
    const { ["@context"]: _ctx, ...rest } = item;
    return rest;
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          stripContext(getProfilePageJsonLd(locale)),
          stripContext(getBreadcrumbJsonLd(locale)),
          stripContext(getFaqJsonLd(locale)),
        ],
      }}
    />
  );
}
