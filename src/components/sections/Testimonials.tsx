import { ArrowUpRight, Quote } from "lucide-react";
import { contact, rating, reviews } from "@/data/website-content";
import { CountUp } from "@/components/ui/CountUp";
import { Stars } from "@/components/ui/Stars";
import s from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <section id="reviews" className={["section", s.section].join(" ")} aria-labelledby="reviews-title">
      <div className={["container", s.grid].join(" ")}>
        <div className={s.summary}>
          <h2 id="reviews-title" className="h2" data-reveal>
            {rating.reviewsHeading}
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
          <p data-reveal style={{ ["--d" as string]: 2, color: "var(--c-on-dark-muted)" }}>
            {rating.outOf} · {rating.basedOn}
          </p>
          <a className={s.link} href={contact.reviews} target="_blank" rel="noopener noreferrer" data-reveal style={{ ["--d" as string]: 3 }}>
            {rating.readAll} <ArrowUpRight aria-hidden />
          </a>
        </div>

        <ul className={s.reviews}>
          {reviews.map((r, i) => (
            <li key={r.author + r.date} data-reveal style={{ ["--d" as string]: i + 1 }}>
              <figure className={s.review}>
                <Quote className={s.qIcon} aria-hidden strokeWidth={1.5} />
                <blockquote className={s.text}>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className={s.author}>
                  <span className={s.avatar} aria-hidden>
                    {r.author.charAt(0).toUpperCase()}
                  </span>
                  <span>
                    <span className={s.name}>{r.author}</span>
                    <span className={s.meta}>
                      <Stars value={r.rating} size={14} />
                      <time dateTime="2024-04-21">{r.date}</time>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
