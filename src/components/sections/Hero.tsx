import { ArrowUpRight, Phone } from "lucide-react";
import { business, contact, cta, rating } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import s from "./Hero.module.scss";

const arcs = [130, 210, 290, 370, 450, 530];
const CURVE = "M 30 520 C 170 505 250 440 320 350 S 455 130 560 82";

/** Decorative line art: concentric arcs (echoing the brand "O"), a rising curve and data points travelling along it. */
function HeroArt() {
  return (
    <svg className={s.art} viewBox="0 0 600 560" aria-hidden focusable="false" data-smil>
      <defs>
        <linearGradient id="heroCurve" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#3c74ad" stopOpacity=".2" />
          <stop offset=".55" stopColor="#8fb3d9" />
          <stop offset="1" stopColor="#c29a52" />
        </linearGradient>
        <radialGradient id="heroDot">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#8fb3d9" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[140, 280, 420].map((y, i) => (
        <line key={y} className={s.base} style={{ ["--i" as string]: i }} x1="0" x2="600" y1={y} y2={y} />
      ))}
      {arcs.map((r, i) => (
        <path key={r} className={s.arc} pathLength={1} style={{ ["--i" as string]: i }} d={"M " + (600 - r) + " 560 A " + r + " " + r + " 0 0 1 600 " + (560 - r)} />
      ))}
      <path id="heroCurvePath" className={s.curve} pathLength={1} d={CURVE} />
      {[0, 1, 2].map((i) => (
        <circle key={i} className={s.traveller} r="9" fill="url(#heroDot)" opacity="0">
          <animateMotion dur="4.8s" begin={2.8 + i * 1.6 + "s"} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1">
            <mpath href="#heroCurvePath" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur="4.8s" begin={2.8 + i * 1.6 + "s"} repeatCount="indefinite" />
        </circle>
      ))}
      <circle className={[s.dot, s.dot1].join(" ")} cx="320" cy="350" r="5" />
      <circle className={s.ring} cx="560" cy="82" r="7" />
      <circle className={[s.dot, s.dot2].join(" ")} cx="560" cy="82" r="7" />
    </svg>
  );
}

function Orbit({ className }: { className: string }) {
  return (
    <span className={[s.orbit, className].join(" ")} aria-hidden>
      <svg viewBox="0 0 100 100" focusable="false">
        <circle cx="50" cy="50" r="49.5" pathLength={100} />
      </svg>
    </span>
  );
}

const lines = [["OSBEE", "SOLUTIONS"], ["PRIVATE", "LIMITED"]];

export function Hero() {
  let w = 0;
  return (
    <section id="top" className={s.hero} aria-labelledby="hero-title" data-spotlight data-pause-offscreen>
      <div className={s.glow} aria-hidden />
      <div className="spot" aria-hidden />
      <div className={["container", s.inner].join(" ")}>
        <div className={s.copy}>
          <p className={["eyebrow", s.eyebrow].join(" ")}>{business.categoryLabel}</p>
          <h1 id="hero-title" className={s.title}>
            {lines.map((words, li) => (
              <span key={li}>
                <span className={s.line}>
                  {words.map((word, wi) => (
                    <span key={word}>
                      <span className={s.word} style={{ ["--i" as string]: w++ }}>
                        {word}
                      </span>
                      {wi < words.length - 1 ? " " : null}
                    </span>
                  ))}
                </span>{" "}
              </span>
            ))}
            <span className={s.line}>
              <span className={[s.word, s.sub].join(" ")} style={{ ["--i" as string]: w++ }}>
                <span className={s.dash}>-</span> <span className={s.subText}>{business.category}</span>
              </span>
            </span>
          </h1>
          <p className={["lead", s.lead].join(" ")}>
            {business.aim.split(" ").map((word, i, arr) => (
              <span key={i}>
                <span className={s.hw} style={{ ["--w" as string]: i }}>
                  {word}
                </span>
                {i < arr.length - 1 ? " " : null}
              </span>
            ))}
          </p>
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
          <Orbit className={s.orbitA} />
          <Orbit className={s.orbitB} />
          <div className={s.card}>
            <div className={s.cardTop}>
              <span className={s.cardLabel}>{rating.reviewsHeading}</span>
              <Stars value={rating.score} size={14} className={s.cardStars} />
            </div>
            <span className={s.score}>{rating.outOf}</span>
            <span className={s.cardText}>{rating.basedOn}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
