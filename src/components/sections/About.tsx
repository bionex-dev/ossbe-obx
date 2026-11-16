import { ArrowUpRight, Quote } from "lucide-react";
import { about, business, contact, cta, rating } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { SplitWords } from "@/components/ui/SplitWords";
import { Stars } from "@/components/ui/Stars";
import { WordFade } from "@/components/ui/WordFade";
import s from "./About.module.scss";

// Verbatim substrings of the description that get a visual highlight. The text itself is unchanged.
const phrases = [
  "save our customers money",
  "trusting relationships",
  "hit business objectives",
  "proven track record",
  "accurate, non-biased advice",
  "low-cost business utilities",
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={["container", s.grid].join(" ")}>
        <div className={s.side}>
          <span className="eyebrow" data-reveal>
            {about.eyebrow}
          </span>
          <h2 id="about-title" className="h2" data-reveal="words" aria-label={about.title}>
            <span aria-hidden>
              <SplitWords text={about.title} />
            </span>
          </h2>
          <div className={s.rating} data-reveal style={{ ["--d" as string]: 2 }}>
            <Stars value={rating.score} />
            <span className={s.ratingText}>
              <strong>{rating.outOf}</strong>
              <span>{rating.basedOn}</span>
            </span>
          </div>
          <div className={s.actions} data-reveal style={{ ["--d" as string]: 3 }}>
            <Button href={contact.whatsapp} external>
              {cta.button} <ArrowUpRight aria-hidden />
            </Button>
          </div>
        </div>
        <div className={s.body} data-reveal="fade">
          <span className={s.quoteWrap} data-parallax style={{ ["--px" as string]: "28px" }} aria-hidden>
            <Quote className={s.quote} strokeWidth={1.25} />
          </span>
          <p className={s.text}>
            <WordFade text={business.description} phrases={phrases} markClass={s.mark} />
          </p>
        </div>
      </div>
    </section>
  );
}
