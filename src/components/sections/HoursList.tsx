"use client";
import { useEffect, useState } from "react";
import { hours } from "@/data/website-content";
import s from "./Hours.module.scss";

const order = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Day-by-day hours; highlights the visitor's current weekday after mount (no SSR mismatch). */
export function HoursList() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(order[new Date().getDay()]), []);

  return (
    <dl className={s.days}>
      {hours.days.map((d) => (
        <div
          key={d.day}
          className={[s.day, d.value === "Not provided" ? s.off : "", d.day === today ? s.today : ""].join(" ")}
          aria-current={d.day === today ? "date" : undefined}
        >
          <dt>{d.day}</dt>
          <dd>{d.value}</dd>
        </div>
      ))}
    </dl>
  );
}
