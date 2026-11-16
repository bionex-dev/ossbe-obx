import { ArrowUpRight, Phone } from "lucide-react";
import { contact, cta } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { SplitWords } from "@/components/ui/SplitWords";
import s from "./CtaBand.module.scss";

export function CtaBand() {
  return (
    <section className={["container", s.wrap].join(" ")} aria-labelledby="cta-title">
      <div className={s.panel} data-reveal="wipe">
        <svg className={s.arcs} viewBox="0 0 560 560" aria-hidden focusable="false" data-spin>
          {[80, 140, 200, 260].map((r, i) => (
            <circle key={r} cx="280" cy="280" r={r} className={i % 2 ? s.dashed : undefined} />
          ))}
        </svg>
        <div className={s.copy}>
          <span className={["eyebrow", s.eyebrow].join(" ")}>{cta.eyebrow}</span>
          <h2 id="cta-title" data-reveal="words" aria-label={cta.title}>
            <span aria-hidden>
              <SplitWords text={cta.title} start={3} />
            </span>
          </h2>
          <p className={["lead", s.lead].join(" ")}>{cta.text}</p>
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
