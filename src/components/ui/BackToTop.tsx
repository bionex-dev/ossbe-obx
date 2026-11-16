"use client";
import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import s from "./BackToTop.module.scss";

/** Back-to-top button with a ring that fills as the page scrolls. */
export function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.setProperty("--p", String(max > 0 ? Math.min(1, y / max) : 0));
      el.classList.toggle(s.show, y > 640);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button ref={ref} type="button" className={s.btn} onClick={toTop} aria-label="Back to top">
      <svg className={s.ring} viewBox="0 0 48 48" aria-hidden focusable="false">
        <circle className={s.track} cx="24" cy="24" r="22" />
        <circle className={s.bar} cx="24" cy="24" r="22" pathLength={1} />
      </svg>
      <ArrowUp className={s.icon} aria-hidden />
    </button>
  );
}
