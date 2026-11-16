"use client";
import { useEffect, useState } from "react";
import { hours } from "@/data/website-content";
import { google } from "@/data/owner-content";
import s from "./Hours.module.scss";

const order = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Day-by-day hours (as listed on Google). Highlights today in the business's time zone after mount. */
export function HoursList() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const day = new Intl.DateTimeFormat("en-US", { timeZone: google.timeZone, weekday: "long" }).format(new Date());
    setToday(order.includes(day) ? day : null);
  }, []);

  return (
    <dl className={s.days}>
      {hours.days.map((d, i) => (
        <div
          key={d.day}
          className={[s.day, d.value === "Closed" ? s.off : "", d.day === today ? s.today : ""].join(" ")}
          style={{ ["--r" as string]: i }}
          aria-current={d.day === today ? "date" : undefined}
        >
          <dt>{d.day}</dt>
          <dd>{d.value}</dd>
        </div>
      ))}
    </dl>
  );
}
