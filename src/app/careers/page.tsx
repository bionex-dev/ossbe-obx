import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle, Send, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { careers } from "@/data/careers-content";
import { contact } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitWords } from "@/components/ui/SplitWords";
import { canonical } from "@/lib/site";
import s from "./careers.module.scss";

export const metadata: Metadata = {
  title: careers.metaTitle,
  description: careers.metaDescription,
  alternates: canonical("/careers"),
};

const valueIcons = [Users, ShieldCheck, Target, Sparkles];

export default function Careers() {
  return (
    <>
      <header className={s.head} data-spotlight data-pause-offscreen>
        <div className={s.glow} aria-hidden />
        <div className="spot" aria-hidden />
        <svg className={s.rings} viewBox="0 0 600 600" aria-hidden focusable="false">
          {[110, 190, 270].map((r, i) => (
            <circle key={r} cx="300" cy="300" r={r} pathLength={1} style={{ ["--i" as string]: i }} />
          ))}
        </svg>
        <div className={["container", s.headInner].join(" ")}>
          <p className={["eyebrow", s.eyebrow].join(" ")}>{careers.eyebrow}</p>
          <h1 className={s.title}>
            {careers.title.split(" ").map((word, i, arr) => (
              <span key={i}>
                <span className={s.mask}>
                  <span className={s.word} style={{ ["--i" as string]: i }}>
                    {word}
                  </span>
                </span>
                {i < arr.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <blockquote className={s.quote}>
            <p>“{careers.quote}”</p>
          </blockquote>
          <p className={["lead", s.intro].join(" ")}>{careers.intro}</p>
          <div className={s.ctas}>
            <Button href={careers.ctaHref}>
              <Send aria-hidden /> {careers.ctaButton}
            </Button>
            <Button href={contact.whatsapp} external variant="ghostDark">
              <MessageCircle aria-hidden /> WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" eyebrow={careers.valuesEyebrow} title={careers.valuesTitle} />
          <ul className={s.values}>
            {careers.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <li key={v.title} data-reveal style={{ ["--d" as string]: i }}>
                  <article className={s.value} data-tilt>
                    <span className="glare" aria-hidden />
                    <span className={s.valueIcon} aria-hidden>
                      <Icon />
                    </span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={["section", s.teamsSection].join(" ")} aria-labelledby="teams-title">
        <div className={["container", s.teamsGrid].join(" ")}>
          <SectionHeading id="teams-title" eyebrow={careers.teamsEyebrow} title={careers.teamsTitle} text={careers.teamsText} />
          <ul className={s.teams}>
            {careers.teams.map((t, i) => (
              <li key={t.name} data-reveal style={{ ["--d" as string]: i }}>
                <a className={s.team} href={t.href}>
                  <span className={s.teamNum} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={s.teamText}>
                    <span className={s.teamName}>{t.name}</span>
                    <span className={s.teamDesc}>{t.text}</span>
                  </span>
                  <span className={s.apply}>
                    {careers.applyLabel}
                    <span className="sr-only"> for {t.name} by email</span>
                    <ArrowUpRight aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading id="process-title" eyebrow={careers.processEyebrow} title={careers.processTitle} />
          <div className={s.processWrap} data-reveal="fade">
            <span className={s.track} aria-hidden>
              <span className={s.trackFill} />
            </span>
            <ol className={s.process}>
            {careers.process.map((p, i) => (
              <li key={p.title} className={s.step} style={{ ["--i" as string]: i }}>
                <span className={s.stepNum} aria-hidden>
                  {i + 1}
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container" aria-labelledby="apply-title">
        <div className={s.apply_panel} data-reveal="wipe">
          <h2 id="apply-title" data-reveal="words" aria-label={careers.ctaTitle}>
            <span aria-hidden>
              <SplitWords text={careers.ctaTitle} start={2} />
            </span>
          </h2>
          <p className="lead">{careers.ctaText}</p>
          <div className={s.ctas}>
            <Button href={careers.ctaHref} variant="light">
              <Send aria-hidden /> {careers.ctaButton}
            </Button>
            <Button href={contact.whatsapp} external variant="ghostDark">
              <MessageCircle aria-hidden /> WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
