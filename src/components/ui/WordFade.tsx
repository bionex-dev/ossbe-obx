import { Fragment, type ReactNode } from "react";

/**
 * Renders a paragraph word by word (inline spans) for a staggered fade when its
 * [data-reveal] ancestor comes into view. Optional verbatim phrases get a highlight wrapper.
 * The text content is unchanged.
 */
export function WordFade({ text, phrases = [], markClass }: { text: string; phrases?: string[]; markClass?: string }) {
  let w = 0;
  let m = 0;
  const words = (chunk: string) =>
    chunk.split(" ").map((word, i, arr) => (
      <Fragment key={"w" + w}>
        {word ? (
          <span className="wf" style={{ ["--w" as string]: w++ }}>
            {word}
          </span>
        ) : null}
        {i < arr.length - 1 ? " " : null}
      </Fragment>
    ));

  const parts: ReactNode[] = [];
  let rest = text;
  while (rest.length) {
    let idx = -1;
    let hit = "";
    for (const p of phrases) {
      const at = rest.indexOf(p);
      if (at !== -1 && (idx === -1 || at < idx)) {
        idx = at;
        hit = p;
      }
    }
    if (idx === -1) {
      parts.push(<Fragment key={"t" + parts.length}>{words(rest)}</Fragment>);
      break;
    }
    if (idx > 0) parts.push(<Fragment key={"t" + parts.length}>{words(rest.slice(0, idx))}</Fragment>);
    parts.push(
      <span key={"m" + parts.length} className={markClass} style={{ ["--m" as string]: m++ }}>
        {words(hit)}
      </span>,
    );
    rest = rest.slice(idx + hit.length);
  }
  return <>{parts}</>;
}
