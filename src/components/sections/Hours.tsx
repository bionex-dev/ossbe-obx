import { Clock, MapPin, Plus } from "lucide-react";
import { business, contact, faq, hours, visit } from "@/data/website-content";
import { google } from "@/data/owner-content";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitWords } from "@/components/ui/SplitWords";
import { HoursList } from "./HoursList";
import s from "./Hours.module.scss";

export function Hours() {
  return (
    <section id="hours" className={["section", s.section].join(" ")} aria-labelledby="hours-title">
      <div className={["container", s.grid].join(" ")}>
        <div className={s.col}>
          <SectionHeading id="hours-title" eyebrow={visit.eyebrow} title={visit.title} text={visit.text} />
          <div className={s.card} data-reveal style={{ ["--d" as string]: 2 }}>
            <div className={s.cardHead}>
              <span className={s.cardIcon} aria-hidden>
                <Clock />
              </span>
              <div className={s.cardHeadText}>
                <h3 className={s.cardTitle}>{hours.title}</h3>
                <p className={s.cardSub}>{business.name}</p>
              </div>
              <OpenStatus />
            </div>
            <HoursList />
            <p className={s.note}>{hours.note}</p>
            <div className={s.meta}>
              <a className={s.metaLink} href={contact.maps} target="_blank" rel="noopener noreferrer">
                <MapPin aria-hidden />
                <span>{google.address}</span>
              </a>
              <a className={s.source} href={contact.maps} target="_blank" rel="noopener noreferrer">
                {google.hoursSource}
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <div className={s.col}>
          <div className={s.faqHead}>
            <span className="eyebrow" data-reveal>
              {faq.eyebrow}
            </span>
            <h2 className={["h2", s.faqTitle].join(" ")} data-reveal="words" aria-label={faq.title}>
              <span aria-hidden>
                <SplitWords text={faq.title} />
              </span>
            </h2>
          </div>
          <div className={s.faq}>
            {faq.items.map((item, i) => (
              <details key={item.q} name="faq" className={s.item} data-reveal style={{ ["--d" as string]: i + 2 }} open={i === 0}>
                <summary className={s.summary}>
                  {item.q}
                  <span className={s.plus} aria-hidden>
                    <Plus />
                  </span>
                </summary>
                <p className={s.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
