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

/** Renders a single schema.org @graph payload for SEO */
export default function SiteJsonLd() {
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
          stripContext(getWebsiteJsonLd()),
          stripContext(getProfessionalServiceJsonLd()),
          stripContext(getProfilePageJsonLd()),
          stripContext(getBreadcrumbJsonLd()),
          stripContext(getFaqJsonLd()),
        ],
      }}
    />
  );
}
