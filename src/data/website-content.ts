/**
 * Content inventory — extracted verbatim from https://osbee-solutions-private.grexa.site/
 * (home, /about, /contact, /privacy-policy) on 2026-11-12.
 * Do NOT rewrite these strings. Phone / WhatsApp / email / Maps link supplied by the owner.
 */

export const business = {
  name: "OSBEE SOLUTIONS PRIVATE LIMITED",
  category: "Economic Consultant",
  categoryLabel: "ECONOMIC CONSULTANT",
  description:
    "Osbee Solutions is a commercial consultant, based in India. We have one simple aim; to save our customers money, while building a company where our employees would be proud to work for. We build trusting relationships with you at the centre, understanding your needs and providing solutions that are designed to save you money and hit business objectives. We have a proven track record for getting you results. We will use our industry experience to provide you with accurate, non-biased advice and low cost business utilities.",
  // Verbatim sentence from the description, used as hero lead.
  aim: "We have one simple aim; to save our customers money, while building a company where our employees would be proud to work for.",
} as const;

export const contact = {
  phoneDisplay: "9088200195",
  tel: "tel:+919088200195",
  whatsapp: "https://wa.me/919088200195",
  email: "osbee_solutions@outlook.com",
  maps: "https://maps.app.goo.gl/V8Gjd35ecshd6Uu46",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=OSBEE+SOLUTIONS+PRIVATE+LIMITED&destination_place_id=ChIJy9X2N053AjoRsMKv4WuFxxg",
  reviews:
    "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJy9X2N053AjoRsMKv4WuFxxg",
} as const;

export const nav = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "Careers", href: "/careers" },
] as const;

export const footerLinks = [...nav, { label: "Privacy Policy", href: "/privacy-policy" }] as const;

export const glance = {
  eyebrow: "AT A GLANCE",
  title: "OSBEE SOLUTIONS PRIVATE LIMITED",
  whatWeDoLabel: "What we do",
  whatWeDo: "Economic Consultant",
  hoursLabel: "Business hours",
  // Updated to the Google Business Profile hours on 2026-11-12 (owner request). Original site said "Monday-Friday: 24 hours".
  hoursSummary: "Monday-Friday: 1–9:30 pm",
  viewAllDays: "View all days",
};

export const hours = {
  title: "Business hours",
  days: [
    { day: "Monday", value: "1–9:30 pm" },
    { day: "Tuesday", value: "1–9:30 pm" },
    { day: "Wednesday", value: "1–9:30 pm" },
    { day: "Thursday", value: "1–9:30 pm" },
    { day: "Friday", value: "1–9:30 pm" },
    { day: "Saturday", value: "Closed" },
    { day: "Sunday", value: "Closed" },
  ],
  note: "You can contact us anytime during the day with your query.",
};

export const about = { eyebrow: "Economic Consultant", title: "About OSBEE SOLUTIONS PRIVATE LIMITED" };

export const rating = {
  score: 5,
  outOf: "5.0 / 5",
  basedOn: "Based on 1+ Google reviews",
  reviewsHeading: "Google reviews",
  reviewsCount: "1+ reviews",
  readAll: "Read all reviews on Google",
};

// Source shows this review twice (carousel duplicate); only one unique review exists.
export const reviews = [
  { author: "max dawson", date: "April 21, 2024", rating: 5, text: "Fast growing company hope to work with you again." },
];

export const gallery = {
  heading: "Our photo gallery",
  viewAll: "View all photos (1)",
  photos: [
    {
      src: "/images/office.jpg",
      width: 678,
      height: 452,
      alt: "OSBEE SOLUTIONS PRIVATE LIMITED — business photo 1",
      caption: "Photo 1 · OSBEE SOLUTIONS PRIVATE LIMITED · Photos",
    },
  ],
};

export const visit = {
  eyebrow: "Plan your visit or enquiry",
  title: "Know when to reach us.",
  text: "We’d love to hear from you. Here’s when you can reach us. Planning ahead? Contact us to find a convenient time.",
};

export const contactPage = {
  detailsSrTitle: "Contact details and directions",
  eyebrow: "Find us",
  title: "Contact OSBEE SOLUTIONS PRIVATE LIMITED",
  detailsTitle: "Contact details & directions",
  getDirections: "Get directions",
  viewMap: "View map",
  mapsSr: " on Google Maps (opens in a new tab)",
};

export const faq = {
  eyebrow: "Before you get in touch",
  title: "A few helpful details.",
  items: [
    {
      q: "What should I include in my enquiry?",
      a: "Let us know what you’re interested in, any questions you have and any dates or preferences that matter. This helps OSBEE SOLUTIONS PRIVATE LIMITED understand your request.",
    },
    {
      q: "What are the opening hours?",
      a: "You’ll find our day-by-day hours above. Planning for a specific date? Contact us to find a convenient time.",
    },
  ],
};

export const cta = {
  eyebrow: "ECONOMIC CONSULTANT",
  title: "Your next step starts here.",
  altTitle: "Have something in mind?",
  text: "Tell OSBEE SOLUTIONS PRIVATE LIMITED what you’re looking for. We’re here to help you get started.",
  button: "Contact us",
};

export const floatingCta = {
  title: "Looking for the right Economic Consultant?",
  text: "Ask about anything — options, pricing, availability or more.",
  button: "Contact us",
};

export const footer = { quickLinks: "Quick links", contactUs: "Contact us", readMore: "Read more" };

export const privacy = {
  title: "Privacy Policy",
  effectiveLabel: "Effective Date:",
  effectiveDate: "1st January, 2025",
  intro:
    "OSBEE SOLUTIONS PRIVATE LIMITED (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website",
  sections: [
    {
      h: "Information We Collect",
      list: [
        "Personal information you provide (such as name, email, phone number) when you contact us or sign up for services.",
        "Non-personal information (such as browser type, IP address, pages visited) collected automatically through cookies or analytics tools.",
      ],
    },
    {
      h: "How We Use Information",
      p: "We may use the information we collect to:",
      list: [
        "Provide, operate, and improve our website and services.",
        "Respond to inquiries or customer support requests.",
        "Send updates, offers, or marketing communications (you can opt out anytime).",
        "Analyze website traffic and usage patterns.",
      ],
    },
    {
      h: "Sharing of Information",
      p: "We do not sell, rent, or trade your personal information. We may share data only with trusted third parties who help us operate our website, comply with legal requirements, or protect our rights.",
    },
    {
      h: "Cookies",
      p: "Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but some features may not function properly.",
    },
    {
      h: "Data Security",
      p: "We implement reasonable measures to protect your personal information. However, no method of transmission over the Internet is completely secure.",
    },
  ] as { h: string; p?: string; list?: string[] }[],
  rightsH: "Your Rights",
  rights: "You may request access, correction, or deletion of your personal data by contacting us at",
  updatesH: "Updates to This Policy",
  updates:
    "We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.",
  contactH: "Contact Us",
  contactP: "If you have any questions about this Privacy Policy, please contact us at:",
};

