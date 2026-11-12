import { Clock, Plus } from "lucide-react";
import { business, faq, hours, visit } from "@/data/website-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
              <div>
                <h3 className={s.cardTitle}>{hours.title}</h3>
                <p className={s.cardSub}>{business.name}</p>
              </div>
            </div>
            <HoursList />
            <p className={s.note}>{hours.note}</p>
          </div>
        </div>

        <div className={s.col}>
          <div className={s.faqHead}>
            <span className="eyebrow" data-reveal>
              {faq.eyebrow}
            </span>
            <h2 className={["h2", s.faqTitle].join(" ")} data-reveal style={{ ["--d" as string]: 1 }}>
              {faq.title}
            </h2>
          </div>
          <div className={s.faq}>
            {faq.items.map((item, i) => (
              <details key={item.q} name="faq" className={s.item} data-reveal style={{ ["--d" as string]: i + 2 }} open={i === 0}>
                <summary className={s.summary}>
                  {item.q}
                  <Plus aria-hidden />
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
