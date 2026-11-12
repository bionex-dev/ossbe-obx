import { ArrowUpRight, Phone } from "lucide-react";
import { business, contact, cta, rating } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import s from "./Hero.module.scss";

const arcs = [130, 210, 290, 370, 450, 530];

/** Decorative line art: concentric arcs (echoing the brand "O") and a rising curve. */
function HeroArt() {
  return (
    <svg className={s.art} viewBox="0 0 600 560" aria-hidden focusable="false">
      <defs>
        <linearGradient id="heroCurve" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#3c74ad" stopOpacity=".2" />
          <stop offset=".55" stopColor="#8fb3d9" />
          <stop offset="1" stopColor="#c29a52" />
        </linearGradient>
      </defs>
      {[140, 280, 420].map((y) => (
        <line key={y} className={s.base} x1="0" x2="600" y1={y} y2={y} />
      ))}
      {arcs.map((r, i) => (
        <path
          key={r}
          className={s.arc}
          pathLength={1}
          style={{ ["--i" as string]: i }}
          d={"M " + (600 - r) + " 560 A " + r + " " + r + " 0 0 1 600 " + (560 - r)}
        />
      ))}
      <path className={s.curve} pathLength={1} d="M 30 520 C 170 505 250 440 320 350 S 455 130 560 82" />
      <circle className={[s.dot, s.dot1].join(" ")} cx="320" cy="350" r="5" />
      <circle className={s.ring} cx="560" cy="82" r="7" />
      <circle className={[s.dot, s.dot2].join(" ")} cx="560" cy="82" r="7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className={s.hero} aria-labelledby="hero-title">
      <div className={s.glow} aria-hidden />
      <div className={["container", s.inner].join(" ")}>
        <div className={s.copy}>
          <p className={["eyebrow", s.eyebrow].join(" ")}>{business.categoryLabel}</p>
          <h1 id="hero-title" className={s.title}>
            <span className={s.line}>
              <span className={s.lineInner} style={{ ["--i" as string]: 0 }}>
                OSBEE SOLUTIONS
              </span>
            </span>{" "}
            <span className={s.line}>
              <span className={s.lineInner} style={{ ["--i" as string]: 1 }}>
                PRIVATE LIMITED
              </span>
            </span>{" "}
            <span className={s.line}>
              <span className={[s.lineInner, s.sub].join(" ")} style={{ ["--i" as string]: 2 }}>
                <span className={s.dash}>-</span> {business.category}
              </span>
            </span>
          </h1>
          <p className={["lead", s.lead].join(" ")}>{business.aim}</p>
          <div className={s.ctas}>
            <Button href={contact.whatsapp} external>
              {cta.button} <ArrowUpRight aria-hidden />
            </Button>
            <Button href={contact.tel} variant="ghostDark" aria-label={"Call " + contact.phoneDisplay}>
              <Phone aria-hidden /> {contact.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className={s.visual}>
          <HeroArt />
          <div className={s.card}>
            <div className={s.cardTop}>
              <span className={s.cardLabel}>{rating.reviewsHeading}</span>
              <Stars value={rating.score} size={14} />
            </div>
            <span className={s.score}>{rating.outOf}</span>
            <span className={s.cardText}>{rating.basedOn}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
