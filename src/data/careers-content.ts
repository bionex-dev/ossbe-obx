/**
 * Careers page copy — added at the owner's request (2026-11-12). Not from the original site,
 * except the quoted sentence, which is verbatim from the original description.
 * No specific vacancies, salaries or benefits are claimed; the owner should review before launch.
 */
import { business, contact } from "./website-content";

const subject = (role: string) => "mailto:" + contact.email + "?subject=" + encodeURIComponent("Career application – " + role);

export const careers = {
  metaTitle: "Careers",
  metaDescription:
    "Careers at OSBEE SOLUTIONS PRIVATE LIMITED — join a growing team of consultants, campaign specialists and support professionals.",
  eyebrow: "Careers at OSBEE",
  title: "Build a career you’re proud of.",
  quote: business.aim,
  intro:
    "We’re a growing team of consultants, campaign specialists and support professionals. If you like solving real business problems and learning modern tools — including AI — we’d like to hear from you.",
  valuesEyebrow: "Why OSBEE",
  valuesTitle: "How we work together.",
  values: [
    { title: "People first", text: "Trusting relationships — with colleagues and with clients — sit at the centre of how we work." },
    { title: "Honest advice", text: "We give clients accurate, non-biased advice, and we keep the same candour inside the team." },
    { title: "Results that matter", text: "We measure success by the money we save customers and the objectives we help them hit." },
    { title: "Modern tools", text: "Work hands-on with campaign platforms and AI calling technology as the business grows." },
  ],
  teamsEyebrow: "Teams",
  teamsTitle: "Where you could fit in.",
  teamsText: "Tell us which team interests you. Don’t see an exact fit? Send your CV anyway.",
  teams: [
    { name: "Economic & Commercial Consulting", text: "Cost reviews, pricing and utility sourcing for business clients." },
    { name: "Campaign Operations", text: "Plan, run and report on calling and messaging campaigns." },
    { name: "AI Calling Operations", text: "Configure, monitor and improve AI voice-agent call flows." },
    { name: "Business Development", text: "Prospect, qualify and build relationships with new clients." },
    { name: "Customer Support", text: "Help customers by phone, chat and email with care and accuracy." },
  ].map((t) => ({ ...t, href: subject(t.name) })),
  applyLabel: "Apply",
  processEyebrow: "Hiring process",
  processTitle: "Four simple steps.",
  process: [
    { title: "Apply", text: "Email your CV and name the team you’d like to join in the subject line." },
    { title: "Conversation", text: "We get in touch to learn about you and answer your questions." },
    { title: "Interview", text: "Meet the team and talk through a real scenario from the role." },
    { title: "Welcome aboard", text: "Receive your offer and a clear plan for your first month." },
  ],
  ctaTitle: "Ready to apply?",
  ctaText: "Send your CV to " + contact.email + " and tell us which team you’d like to join.",
  ctaButton: "Email your CV",
  ctaHref: subject("General"),
};
