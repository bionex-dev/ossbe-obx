import type { ServiceArt as Kind } from "@/data/owner-content";
import s from "./Services.module.scss";

const v = (i: number) => ({ ["--i" as string]: i });

/** Small line illustrations for each service. Pure SVG + CSS; motion starts when the card reveals. */
export function ServiceArt({ kind }: { kind: Kind }) {
  const common = { className: s.art, viewBox: "0 0 120 72", fill: "none", "aria-hidden": true, focusable: "false" as const };
  switch (kind) {
    case "consulting":
      return (
        <svg {...common}>
          {[18, 36, 54].map((y) => <line key={y} className={s.gridline} x1="4" x2="116" y1={y} y2={y} />)}
          <polyline className={s.trace} pathLength={1} points="6,60 30,44 52,50 76,28 100,34 114,12" />
          {[[30, 44], [52, 50], [76, 28], [100, 34], [114, 12]].map(([x, y], i) => (
            <circle key={i} className={s.node} style={v(i)} cx={x} cy={y} r="3" />
          ))}
        </svg>
      );
    case "campaigns":
      return (
        <svg {...common}>
          <line className={s.gridline} x1="4" x2="116" y1="66" y2="66" />
          {[22, 34, 28, 46, 58].map((h, i) => (
            <rect key={i} className={s.bar} style={v(i)} x={12 + i * 21} y={66 - h} width="12" height={h} rx="3" />
          ))}
          <polyline className={s.trace} pathLength={1} points="10,40 38,30 60,34 84,16 110,6" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          {Array.from({ length: 15 }, (_, i) => {
            const h = [10, 18, 28, 40, 30, 50, 36, 56, 36, 50, 30, 40, 28, 18, 10][i];
            return <rect key={i} className={s.wave} style={v(i)} x={4 + i * 7.8} y={36 - h / 2} width="3.4" height={h} rx="1.7" />;
          })}
        </svg>
      );
    case "leads":
      return (
        <svg {...common}>
          <path className={s.outline} d="M18 8 H102 L76 38 V62 L44 68 V38 Z" />
          {[0, 1, 2].map((i) => <circle key={i} className={s.drop} style={v(i)} cx={48 + i * 12} cy="10" r="3.2" />)}
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path className={[s.bubble, s.b1].join(" ")} d="M8 10 h58 a8 8 0 0 1 8 8 v14 a8 8 0 0 1 -8 8 H24 l-10 8 v-8 h-6 a8 8 0 0 1 -8 -8 V18 a8 8 0 0 1 8 -8 Z" />
          <path className={[s.bubble, s.b2].join(" ")} d="M54 34 h50 a8 8 0 0 1 8 8 v12 a8 8 0 0 1 -8 8 h-4 v8 l-10 -8 H54 a8 8 0 0 1 -8 -8 V42 a8 8 0 0 1 8 -8 Z" />
          {[0, 1, 2].map((i) => <circle key={i} className={s.typing} style={v(i)} cx={66 + i * 10} cy="48" r="2.6" />)}
        </svg>
      );
    case "research":
      return (
        <svg {...common}>
          {[30, 20, 10].map((r) => <circle key={r} className={s.gridline} cx="60" cy="36" r={r} />)}
          <g className={s.sweep}>
            <path d="M60 36 L60 6 A30 30 0 0 1 86 21 Z" className={s.sweepFill} />
          </g>
          {[[72, 22], [44, 46], [80, 44]].map(([x, y], i) => <circle key={i} className={s.blip} style={v(i)} cx={x} cy={y} r="2.6" />)}
        </svg>
      );
  }
}
