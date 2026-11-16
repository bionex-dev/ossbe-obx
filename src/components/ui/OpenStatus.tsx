"use client";
import { useEffect, useState } from "react";
import { google } from "@/data/owner-content";
import s from "./OpenStatus.module.scss";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const fmt = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  const h12 = ((h + 11) % 12) + 1;
  return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + (h < 12 ? " am" : " pm");
};

/** Current day/minute in the business's time zone (IST), independent of the visitor's zone. */
function nowInZone() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: google.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { day: DAYS.indexOf(get("weekday")), min: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function computeStatus() {
  const { day, min } = nowInZone();
  const today = google.schedule[day];
  if (today && min >= today.open && min < today.close) {
    const soon = today.close - min <= 60;
    return { open: true, soon, text: (soon ? "Closes soon · " : "Open now · Closes ") + fmt(today.close) };
  }
  if (today && min < today.open) return { open: false, soon: false, text: "Closed · Opens " + fmt(today.open) + " today" };
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const slot = google.schedule[d];
    if (slot) return { open: false, soon: false, text: "Closed · Opens " + fmt(slot.open) + " " + (i === 1 ? "tomorrow" : LONG[d]) };
  }
  return { open: false, soon: false, text: "Closed" };
}

/** Live "Open now / Closed" badge that mirrors the Google listing. Renders after mount (no SSR mismatch). */
export function OpenStatus({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<ReturnType<typeof computeStatus> | null>(null);
  useEffect(() => {
    const tick = () => setStatus(computeStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className={[s.badge, tone === "dark" ? s.dark : "", status ? s.ready : ""].join(" ")} aria-live="polite">
      <span className={[s.dot, status?.open ? (status.soon ? s.soon : s.open) : s.closed].join(" ")} aria-hidden />
      <span>{status ? status.text : "Checking hours…"}</span>
    </span>
  );
}
