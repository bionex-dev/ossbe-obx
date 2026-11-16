import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { business, contact, contactPage, cta } from "@/data/website-content";
import { google } from "@/data/owner-content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitWords } from "@/components/ui/SplitWords";
import s from "./Contact.module.scss";

type CardProps = { href: string; icon: ReactNode; anim: string; label: string; value: string; external?: boolean; d: number };

function ContactCard({ href, icon, anim, label, value, external, d }: CardProps) {
  return (
    <div className={s.cell} data-reveal style={{ ["--d" as string]: d }}>
    <a className={s.card} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} data-tilt>
      <span className="glare" aria-hidden />
      <span className={[s.icon, s[anim]].join(" ")} aria-hidden>
        {icon}
      </span>
      <ArrowUpRight className={s.arrow} aria-hidden />
      <span>
        <span className={s.label}>{label}</span>
        <span className={s.value}>{value}</span>
      </span>
    </a>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className={s.head}>
          <SectionHeading id="contact-title" eyebrow={contactPage.eyebrow} title={contactPage.title} />
        </div>
        <h3 className="sr-only">{contactPage.detailsSrTitle}</h3>
        <div className={s.grid}>
          <div className={s.feature} data-reveal="wipe">
            <svg className={s.featureArcs} viewBox="0 0 420 420" aria-hidden focusable="false" data-spin>
              {[60, 110, 160, 210].map((r, i) => (
                <circle key={r} cx="210" cy="210" r={r} className={i % 2 ? s.dashed : undefined} />
              ))}
            </svg>
            <div>
              <span className="eyebrow">{business.categoryLabel}</span>
              <h3 data-reveal="words" aria-label={cta.altTitle}>
                <span aria-hidden>
                  <SplitWords text={cta.altTitle} start={2} />
                </span>
              </h3>
            </div>
            <div className={s.featureActions}>
              <Button href={contact.whatsapp} external variant="light">
                {cta.button} <ArrowUpRight aria-hidden />
              </Button>
            </div>
          </div>

          <ContactCard d={1} href={contact.tel} icon={<Phone />} anim="ring" label="Phone" value={contact.phoneDisplay} />
          <ContactCard d={2} href={contact.whatsapp} external icon={<MessageCircle />} anim="pop" label="WhatsApp" value={contact.phoneDisplay} />
          <ContactCard d={3} href={"mailto:" + contact.email} icon={<Mail />} anim="slide" label="Email" value={contact.email} />

          <div className={s.cell} data-reveal style={{ ["--d" as string]: 4 }}>
          <div className={s.card} data-tilt>
            <span className="glare" aria-hidden />
            <span className={[s.icon, s.bounce].join(" ")} aria-hidden>
              <MapPin />
            </span>
            <span>
              <span className={s.label}>{contactPage.detailsTitle}</span>
              <span className={s.value}>{business.name}</span>
              <span className={s.address}>{google.address}</span>
            </span>
            <div className={s.links}>
              <a className={[s.pill, s.pillPrimary].join(" ")} href={contact.directions} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden /> {contactPage.getDirections}
                <span className="sr-only">{contactPage.mapsSr}</span>
              </a>
              <a className={s.pill} href={contact.maps} target="_blank" rel="noopener noreferrer">
                {contactPage.viewMap}
                <span className="sr-only">{contactPage.mapsSr}</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
