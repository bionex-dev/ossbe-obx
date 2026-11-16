/**
 * Content added after the original-site audit, at the owner's request (2026-11-12).
 * - google: copied from the Google Business Profile (Maps listing) on 2026-11-12.
 * - services: requested by the owner ("running campaigns", "AI calls supported", plus standard services).
 *   Owner should review the wording before launch.
 */

export const google = {
  address: "14, Syed Amir Ali Ave, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017",
  plusCode: "G9R8+M5 Kolkata, West Bengal",
  hoursSource: "Hours as listed on Google",
  timeZone: "Asia/Kolkata",
  // Minutes from midnight, local time. Sunday = 0 … Saturday = 6.
  schedule: {
    0: null,
    1: { open: 780, close: 1290 },
    2: { open: 780, close: 1290 },
    3: { open: 780, close: 1290 },
    4: { open: 780, close: 1290 },
    5: { open: 780, close: 1290 },
    6: null,
  } as Record<number, { open: number; close: number } | null>,
};

export type ServiceArt = "consulting" | "campaigns" | "ai" | "leads" | "support" | "research";

export const services = {
  eyebrow: "What we do",
  title: "Services that save you money and keep your pipeline moving.",
  intro:
    "From economic consulting to AI-assisted calling, we plan and run the programmes behind your growth — with clear reporting at every step.",
  items: [
    {
      art: "consulting" as ServiceArt,
      title: "Economic & Commercial Consulting",
      text: "Cost reviews, pricing and business-utility sourcing backed by accurate, non-biased advice, so every decision is built on numbers.",
      tags: ["Cost reviews", "Utility sourcing", "Business planning"],
    },
    {
      art: "campaigns" as ServiceArt,
      title: "Campaign Management",
      text: "We plan, run and optimise outbound and inbound campaigns across calls, WhatsApp, SMS and email, and report on what each one delivers.",
      tags: ["Outbound calling", "WhatsApp & SMS", "Performance reports"],
    },
    {
      art: "ai" as ServiceArt,
      title: "AI-Powered Calling",
      text: "AI voice agents handle high-volume calls — lead qualification, reminders, follow-ups and surveys — and hand over to our team when a person is needed.",
      tags: ["AI voice agents", "Round-the-clock reach", "Human hand-off"],
      featured: true,
    },
    {
      art: "leads" as ServiceArt,
      title: "Lead Generation & Appointment Setting",
      text: "Targeted prospecting and qualification that turn interest into booked meetings for your sales team.",
      tags: ["Prospect research", "Qualification", "Calendar booking"],
    },
    {
      art: "support" as ServiceArt,
      title: "Customer Support Outsourcing",
      text: "Trained support teams for inbound queries, order updates and service requests, following your scripts and brand voice.",
      tags: ["Inbound helpdesk", "Scripted workflows", "Quality checks"],
    },
    {
      art: "research" as ServiceArt,
      title: "Market Research & Data",
      text: "Surveys, data cleansing and CRM upkeep that give you a reliable picture of your market and your customers.",
      tags: ["Surveys", "Data cleansing", "CRM management"],
    },
  ],
};

/**
 * Rating breakdown shown instead of individual reviews (owner request, 2026-11-16).
 * The Google listing shows 5.0 from 1 review; an average of 5.0 means every rating is 5 stars.
 */
export const ratingSummary = {
  cardLabel: "Rating breakdown",
  source: "Rating as listed on Google",
  breakdown: [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 0 },
    { stars: 3, percent: 0 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ],
};
