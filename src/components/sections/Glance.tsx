import { BriefcaseBusiness, ChevronDown } from "lucide-react";
import { glance } from "@/data/website-content";
import { google } from "@/data/owner-content";
import { OpenStatus } from "@/components/ui/OpenStatus";
import s from "./Glance.module.scss";

/** Clock whose hands sweep continuously — a quiet nod to the business hours it sits next to. */
function LiveClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden focusable="false">
      <circle cx="12" cy="12" r="9.5" />
      <line className={s.hour} x1="12" y1="12" x2="12" y2="7.5" />
      <line className={s.minute} x1="12" y1="12" x2="15.5" y2="12" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Glance() {
  return (
    <section className={["container", s.wrap].join(" ")} aria-labelledby="glance-title" data-pause-offscreen>
      <div className={s.card}>
        <div className={s.head}>
          <span className={["eyebrow", s.eyebrow].join(" ")}>{glance.eyebrow}</span>
          <h2 id="glance-title">{glance.title}</h2>
        </div>
        <div className={s.cell} style={{ ["--c" as string]: 0 }}>
          <span className={[s.icon, s.brief].join(" ")} aria-hidden>
            <BriefcaseBusiness />
          </span>
          <div>
            <p className={s.label}>{glance.whatWeDoLabel}</p>
            <p className={s.value}>{glance.whatWeDo}</p>
            <a className={s.link} href="#services">
              Services <ChevronDown aria-hidden />
            </a>
          </div>
        </div>
        <div className={s.cell} style={{ ["--c" as string]: 1 }}>
          <span className={s.icon} aria-hidden>
            <LiveClock />
          </span>
          <div>
            <p className={s.label}>{glance.hoursLabel}</p>
            <p className={s.value}>{glance.hoursSummary}</p>
            <div className={s.status}>
              <OpenStatus />
            </div>
            <a className={s.link} href="#hours">
              {glance.viewAllDays} <ChevronDown aria-hidden />
            </a>
            <p className={s.source}>{google.hoursSource}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
