import { Star } from "lucide-react";

export function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} style={{ display: "inline-flex", gap: 2, color: "var(--c-accent)" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} width={size} height={size} fill={i < value ? "currentColor" : "none"} strokeWidth={1.5} aria-hidden />
      ))}
    </span>
  );
}
