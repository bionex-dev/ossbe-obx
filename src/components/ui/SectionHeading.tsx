import type { ReactNode } from "react";
import { SplitWords } from "./SplitWords";
import s from "./SectionHeading.module.scss";

type Props = { eyebrow?: string; title: string; text?: ReactNode; align?: "left" | "center"; tone?: "light" | "dark"; id?: string };

export function SectionHeading({ eyebrow, title, text, align = "left", tone = "light", id }: Props) {
  return (
    <div className={[s.wrap, align === "center" && s.center, tone === "dark" && s.dark].filter(Boolean).join(" ")}>
      {eyebrow && (
        <span className="eyebrow" data-reveal>
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="h2" data-reveal="words" aria-label={title}>
        <span aria-hidden>
          <SplitWords text={title} />
        </span>
      </h2>
      {text && (
        <p className={"lead " + s.text} data-reveal style={{ ["--d" as string]: 2 }}>
          {text}
        </p>
      )}
    </div>
  );
}
