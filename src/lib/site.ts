import { business, contact } from "@/data/website-content";
import { services } from "@/data/owner-content";

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

export const seoTitle = "OSBEE SOLUTIONS PRIVATE LIMITED - Best Economic Consultant Near Me";
// First two sentences of the original description, verbatim.
export const seoDescription =
  "Osbee Solutions is a commercial consultant, based in India. We have one simple aim: to save our customers money, while building a company our employees would be proud to work for.";


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
  knowsAbout: [business.category, ...services.items.map((i) => i.title)],
  // Address, coordinates and hours as listed on the Google Business Profile (checked 2026-11-12).
  address: {
    "@type": "PostalAddress",
    streetAddress: "14, Syed Amir Ali Ave, Lower Range, Beck Bagan, Ballygunge",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700017",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.5417345, longitude: 88.3654756 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "21:30",
    },
  ],
};
