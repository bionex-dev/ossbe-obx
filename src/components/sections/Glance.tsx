import { BriefcaseBusiness, ChevronDown, Clock } from "lucide-react";
import { glance } from "@/data/website-content";
import s from "./Glance.module.scss";

export function Glance() {
  return (
    <section className={["container", s.wrap].join(" ")} aria-labelledby="glance-title">
      <div className={s.card}>
        <div className={s.head}>
          <span className="eyebrow">{glance.eyebrow}</span>
          <h2 id="glance-title">{glance.title}</h2>
        </div>
        <div className={s.cell}>
          <span className={s.icon} aria-hidden>
            <BriefcaseBusiness />
          </span>
          <div>
            <p className={s.label}>{glance.whatWeDoLabel}</p>
            <p className={s.value}>{glance.whatWeDo}</p>
          </div>
        </div>
        <div className={s.cell}>
          <span className={s.icon} aria-hidden>
            <Clock />
          </span>
          <div>
            <p className={s.label}>{glance.hoursLabel}</p>
            <p className={s.value}>{glance.hoursSummary}</p>
            <a className={s.link} href="#hours">
              {glance.viewAllDays} <ChevronDown aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
