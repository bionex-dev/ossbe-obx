import { ArrowUpRight } from "lucide-react";
import { contact, cta } from "@/data/website-content";
import { services } from "@/data/owner-content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceArt } from "./ServiceArt";
import s from "./Services.module.scss";

export function Services() {
  return (
    <section id="services" className={["section", s.section].join(" ")} aria-labelledby="services-title" data-pause-offscreen>
      <div className="container">
        <div className={s.head}>
          <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} text={services.intro} />
          <div data-reveal style={{ ["--d" as string]: 3 }}>
            <Button href={contact.whatsapp} external>
              {cta.button} <ArrowUpRight aria-hidden />
            </Button>
          </div>
        </div>
        <ul className={s.grid}>
          {services.items.map((item, i) => (
            <li key={item.title} data-reveal style={{ ["--d" as string]: i % 3 }}>
              <article className={[s.card, item.featured ? s.featured : ""].join(" ")} data-tilt>
                <span className="glare" aria-hidden />
                <div className={s.top}>
                  <span className={s.num} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ServiceArt kind={item.art} />
                </div>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.text}>{item.text}</p>
                <ul className={s.tags} aria-label={item.title + " includes"}>
                  {item.tags.map((t, ti) => (
                    <li key={t} style={{ ["--t" as string]: ti }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
