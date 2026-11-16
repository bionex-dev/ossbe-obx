import { ArrowUpRight, Star } from "lucide-react";
import { contact, rating } from "@/data/website-content";
import { ratingSummary } from "@/data/owner-content";
import { CountUp } from "@/components/ui/CountUp";
import { SplitWords } from "@/components/ui/SplitWords";
import { Stars } from "@/components/ui/Stars";
import s from "./Rating.module.scss";

/** Google rating only — individual reviews are intentionally not shown (owner request). */
export function Rating() {
  return (
    <section id="rating" className={["section", s.section].join(" ")} aria-labelledby="rating-title" data-pause-offscreen>
      <div className={s.glow} aria-hidden />
      <div className={["container", s.grid].join(" ")}>
        <div className={s.summary}>
          <h2 id="rating-title" className="h2" data-reveal="words" aria-label={rating.reviewsHeading}>
            <span aria-hidden>
              <SplitWords text={rating.reviewsHeading} />
            </span>
          </h2>
          <div className={s.scoreRow} data-reveal style={{ ["--d" as string]: 1 }}>
            <span className={s.score} aria-hidden>
              <CountUp to={rating.score} decimals={1} />
            </span>
            <span className={s.scoreMeta}>
              <Stars value={rating.score} size={18} />
              <span>{rating.reviewsCount}</span>
            </span>
          </div>
          <p className={s.basis} data-reveal style={{ ["--d" as string]: 2 }}>
            {rating.outOf} · {rating.basedOn}
          </p>
          <a className={s.link} href={contact.reviews} target="_blank" rel="noopener noreferrer" data-reveal style={{ ["--d" as string]: 3 }}>
            {rating.readAll} <ArrowUpRight aria-hidden />
            <span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
        </div>

        <div data-reveal style={{ ["--d" as string]: 1 }}>
          <div className={s.card} data-tilt>
            <span className="glare" aria-hidden />
            <div className={s.cardHead}>
              <h3 className={s.cardLabel}>{ratingSummary.cardLabel}</h3>
              <Stars value={rating.score} size={16} />
            </div>
            <ul className={s.bars}>
              {ratingSummary.breakdown.map((b, i) => (
                <li key={b.stars} className={s.row} style={{ ["--i" as string]: i, ["--v" as string]: b.percent / 100 }}>
                  <span className={s.rowLabel} aria-hidden>
                    {b.stars}
                    <Star width={13} height={13} fill="currentColor" strokeWidth={0} />
                  </span>
                  <span className={s.track} aria-hidden>
                    <span className={s.fill} />
                  </span>
                  <span className={s.pct} aria-hidden>
                    {b.percent}%
                  </span>
                  <span className="sr-only">
                    {b.stars} {b.stars === 1 ? "star" : "stars"}: {b.percent}%
                  </span>
                </li>
              ))}
            </ul>
            <a className={s.source} href={contact.maps} target="_blank" rel="noopener noreferrer">
              {ratingSummary.source}
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
