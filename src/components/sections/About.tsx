import { ArrowUpRight, Quote } from "lucide-react";
import { about, business, contact, cta, rating } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import s from "./About.module.scss";

// Verbatim substrings of the description that get a visual highlight. The text itself is unchanged.
const phrases = [
  "save our customers money",
  "trusting relationships",
  "hit business objectives",
  "proven track record",
  "accurate, non-biased advice",
  "low cost business utilities",
];

function highlight(text: string) {
  // Phrases contain no regex metacharacters, so they can be joined directly.
  const re = new RegExp("(" + phrases.join("|") + ")");
  let m = 0;
  return text.split(re).map((part, i) =>
    phrases.includes(part) ? (
      <span key={i} className={s.mark} style={{ ["--m" as string]: m++ }}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={["container", s.grid].join(" ")}>
        <div className={s.side}>
          <span className="eyebrow" data-reveal>
            {about.eyebrow}
          </span>
          <h2 id="about-title" className="h2" data-reveal style={{ ["--d" as string]: 1 }}>
            {about.title}
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
        <div className={s.body} data-reveal style={{ ["--d" as string]: 1 }}>
          <Quote className={s.quote} aria-hidden strokeWidth={1.25} />
          <p className={s.text}>{highlight(business.description)}</p>
        </div>
      </div>
    </section>
  );
}
