# Content Verification Report — OSBEE SOLUTIONS PRIVATE LIMITED

Source: https://osbee-solutions-private.grexa.site/ (pages `/`, `/about`, `/contact`, `/privacy-policy`), audited 2026-11-12.
Content inventory: `src/data/website-content.ts` (verbatim strings, single source for all components).

## Method

Automated check against the production build: every source string was searched for, verbatim, in the server-rendered HTML.

| Page | Source strings | Found verbatim |
|---|---|---|
| `/` (merges source home, about, contact) | 65 | 65 |
| `/privacy-policy` | 24 | 24 |

Interactive-only text verified in the browser: lightbox `1 / 1`, `Previous photo`, `Next photo`; `Business hours: Monday-Friday: 24 hours` (mobile menu).

## Where source content now lives

| Source content | New location |
|---|---|
| ECONOMIC CONSULTANT / OSBEE SOLUTIONS PRIVATE LIMITED - Economic Consultant | Hero |
| Full company description | About (single paragraph, unchanged; key phrases visually highlighted only) |
| AT A GLANCE / What we do / Business hours / View all days | At-a-glance strip ("View all days" jumps to the full hours table) |
| 5.0 / 5 · Based on 1+ Google reviews | Hero rating card, About, Reviews |
| Our photo gallery / View all photos (1) / photo + caption | Gallery with lightbox |
| Google reviews / 5.0 / 1+ reviews / max dawson review / Read all reviews on Google | Reviews |
| Your next step starts here. + text + Contact us | CTA band |
| Find us / Contact OSBEE… / Contact details & directions / Have something in mind? / Get directions / View map | Contact |
| Plan your visit or enquiry / Know when to reach us. / hours table / note | Hours |
| Before you get in touch / A few helpful details. / 2 FAQs | Hours (FAQ accordion) |
| Looking for the right Economic Consultant? / Ask about anything… | Footer |
| Quick links / Copyrights ©2026… | Footer |
| Privacy Policy (all sections) | `/privacy-policy` |

## Deliberate differences (no fabricated content)

1. **Review shown once.** The source renders the single "max dawson" review twice (carousel duplicate). Only one unique review exists.
2. **"Built by Grexa." removed** from the copyright line. It credits the old site builder, not this site.
3. **Hero lead** is the second sentence of the description, quoted verbatim. The full paragraph appears in About.
4. **Footer excerpt** ends at a sentence boundary followed by "Read more". The source cut mid-word ("at the cen...").
5. **Privacy policy URLs.** The source prints its own grexa.site address. The new site prints the production URL when `NEXT_PUBLIC_SITE_URL` is set, otherwise the original grexa.site address. The source's empty "Contact Us" list now holds the phone and email.
6. **Owner-supplied additions:** phone `9088200195` (tel:), WhatsApp `wa.me/919088200195`, email `osbee_solutions@outlook.com`, Maps link `maps.app.goo.gl/V8Gjd35ecshd6Uu46`.
7. **New UI labels only (no business claims):** "Phone", "WhatsApp", "Email" (contact card labels), "Page not found" (404), screen-reader labels ("Open menu", "Close", "Call 9088200195").

## Not available on the source (left out, not invented)

Street address, services beyond "Economic Consultant", certifications, statistics beyond the Google rating, more photos, more reviews.
Structured data uses only verified facts: name, description, phone, email, Maps link, country (IN, from "based in India"), Mon–Fri 24-hour hours, and map coordinates from the supplied Maps link.

## Update — owner requests (2026-11-12)

These changes go beyond the original site, at the owner's request. Review the wording before launch.

**Hours now follow Google.** The Google Business Profile (checked 2026-11-12) lists **Monday–Friday 1–9:30 pm, Saturday–Sunday Closed**. This replaces the original site's "Monday-Friday: 24 hours" / "Not provided". A live badge ("Open now", "Closes soon", "Closed · Opens …") is calculated in India time. The original note "You can contact us anytime during the day with your query." is kept as written.

**Address added from Google:** 14, Syed Amir Ali Ave, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017. It appears in the contact card, hours card and footer, and in the structured data with the new hours.

**Services section (new).** The owner named campaigns and AI calling. Six services are listed in `src/data/owner-content.ts`:
1. Economic & Commercial Consulting
2. Campaign Management
3. AI-Powered Calling
4. Lead Generation & Appointment Setting
5. Customer Support Outsourcing
6. Market Research & Data

**Careers page (new, `/careers`).** Copy is in `src/data/careers-content.ts`. It lists values, teams, the hiring steps and an "Email your CV" button (pre-filled subject). No vacancies, salaries or benefits are claimed. The only quote is verbatim from the original description.

**New UI labels:** "Services", "Careers", "Checking hours…", "Open now / Closes soon / Closed / Opens …", "Hours as listed on Google", "Back to top", "Apply", "Email your CV".
