import { business, contact, hours } from "@/data/website-content";

/** Production origin. Set NEXT_PUBLIC_SITE_URL on deploy; Vercel's production URL is used as a fallback. */
const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : "");

export const hasSiteUrl = Boolean(envUrl);
export const siteUrl = (envUrl || "http://localhost:3000").replace(/\/$/, "");

/** Canonical is only emitted once the real production domain is known. */
export const canonical = (path: string) => (hasSiteUrl ? { canonical: path } : undefined);

/** Original site URL as printed in the source privacy policy; replaced by the production URL when known. */
export const displayUrl = hasSiteUrl ? siteUrl : "https://osbee-solutions-private.grexa.site";

export const seoTitle = "OSBEE SOLUTIONS PRIVATE LIMITED - Best Economic Consultant Near me";
// First two sentences of the original description, verbatim.
export const seoDescription =
  "Osbee Solutions is a commercial consultant, based in India. We have one simple aim; to save our customers money, while building a company where our employees would be proud to work for.";

const weekdays = hours.days.filter((d) => d.value === "24 hours").map((d) => d.day);

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteUrl + "/#business",
  name: business.name,
  description: business.description,
  url: siteUrl + "/",
  image: siteUrl + "/images/office.jpg",
  telephone: "+91-9088200195",
  email: contact.email,
  hasMap: contact.maps,
  knowsAbout: [business.category],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  // Coordinates from the owner-supplied Google Maps link (maps.app.goo.gl/V8Gjd35ecshd6Uu46).
  geo: { "@type": "GeoCoordinates", latitude: 22.5417345, longitude: 88.3654756 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: weekdays, opens: "00:00", closes: "23:59" },
  ],
};
