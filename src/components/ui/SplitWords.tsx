import { Fragment } from "react";

/**
 * Splits text into masked words for the heading reveal. Spaces stay as real text nodes,
 * so wrapping and the text content are unchanged. Pair with data-reveal="words" on the parent.
 */
export function SplitWords({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span style={{ ["--w" as string]: start + i }}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
