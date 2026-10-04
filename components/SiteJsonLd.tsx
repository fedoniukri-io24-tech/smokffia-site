import JsonLd from "@/components/JsonLd";
import {
  getOrganizationJsonLd,
  getPersonJsonLd,
  getProfessionalServiceJsonLd,
  getWebsiteJsonLd,
} from "@/lib/schema";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

/** Global schema shared across all locale pages. */
export default function SiteJsonLd({ locale }: Props) {
  const stripContext = (item: Record<string, unknown>) => {
    const { ["@context"]: _ctx, ...rest } = item;
    return rest;
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          stripContext(getOrganizationJsonLd(locale)),
          stripContext(getPersonJsonLd(locale)),
          stripContext(getWebsiteJsonLd(locale)),
          stripContext(getProfessionalServiceJsonLd(locale)),
        ],
      }}
    />
  );
}
