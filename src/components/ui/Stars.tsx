import { Star } from "lucide-react";

/** Five rating stars. Each star has its own index so CSS can pop them in one by one. */
export function Stars({ value, size = 16, className }: { value: number; size?: number; className?: string }) {
  return (
    <span
      role="img"
      aria-label={value + " out of 5 stars"}
      className={className}
      style={{ display: "inline-flex", gap: 2, color: "var(--c-accent)" }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="star"
          style={{ ["--s" as string]: i }}
          width={size}
          height={size}
          fill={i < value ? "currentColor" : "none"}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </span>
  );
}
