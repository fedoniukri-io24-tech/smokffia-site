import JsonLd from "@/components/JsonLd";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getOrganizationJsonLd,
  getPersonJsonLd,
  getProfessionalServiceJsonLd,
  getProfilePageJsonLd,
  getWebsiteJsonLd,
} from "@/lib/schema";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

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
          stripContext(getOrganizationJsonLd()),
          stripContext(getPersonJsonLd()),
          stripContext(getWebsiteJsonLd(locale)),
          stripContext(getProfessionalServiceJsonLd()),
          stripContext(getProfilePageJsonLd(locale)),
          stripContext(getBreadcrumbJsonLd(locale)),
          stripContext(getFaqJsonLd(locale)),
        ],
      }}
    />
  );
}
