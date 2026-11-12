import { ArrowUpRight, Phone } from "lucide-react";
import { contact, cta } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import s from "./CtaBand.module.scss";

export function CtaBand() {
  return (
    <section className={["container", s.wrap].join(" ")} aria-labelledby="cta-title">
      <div className={s.panel} data-reveal>
        <svg className={s.arcs} viewBox="0 0 560 560" aria-hidden focusable="false">
          {[80, 140, 200, 260].map((r) => (
            <circle key={r} cx="280" cy="280" r={r} />
          ))}
        </svg>
        <div>
          <span className={["eyebrow", s.eyebrow].join(" ")}>{cta.eyebrow}</span>
          <h2 id="cta-title" style={{ marginTop: 16 }}>
            {cta.title}
          </h2>
          <p className="lead">{cta.text}</p>
        </div>
        <div className={s.actions}>
          <Button href={contact.whatsapp} external variant="light">
            {cta.button} <ArrowUpRight aria-hidden />
          </Button>
          <Button href={contact.tel} variant="ghostDark" aria-label={"Call " + contact.phoneDisplay}>
            <Phone aria-hidden /> {contact.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
