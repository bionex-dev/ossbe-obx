"use client";
import { useEffect } from "react";

/**
 * Page-wide pointer effects, delegated so no component needs its own listeners:
 *  - [data-magnetic]   buttons drift toward the cursor
 *  - [data-tilt]       cards tilt in 3D with a glare that follows the cursor
 *  - [data-spotlight]  a soft light follows the cursor inside the element (.spot child)
 *  - [data-pause-offscreen] infinite animations pause while the element is off screen
 * Pointer effects only run on fine pointers and never under reduced motion.
 */
export function Interactions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const pio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          e.target.classList.toggle("is-paused", !e.isIntersecting);
          e.target.querySelectorAll<SVGSVGElement>("svg[data-smil]").forEach((svg) => {
            if (e.isIntersecting) svg.unpauseAnimations();
            else svg.pauseAnimations();
          });
        }),
      { rootMargin: "120px 0px" },
    );
    document.querySelectorAll("[data-pause-offscreen]").forEach((el) => pio.observe(el));
    cleanups.push(() => pio.disconnect());

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return () => cleanups.forEach((c) => c());

    let raf = 0;
    let last: PointerEvent | null = null;

    const frame = () => {
      raf = 0;
      const e = last;
      if (!e) return;
      const target = e.target as Element | null;

      const mag = target?.closest<HTMLElement>("[data-magnetic]");
      document.querySelectorAll<HTMLElement>("[data-magnetic].is-magnet").forEach((el) => {
        if (el !== mag) {
          el.classList.remove("is-magnet");
          el.style.removeProperty("--mx");
          el.style.removeProperty("--my");
        }
      });
      if (mag) {
        const r = mag.getBoundingClientRect();
        mag.classList.add("is-magnet");
        mag.style.setProperty("--mx", ((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1) + "px");
        mag.style.setProperty("--my", ((e.clientY - (r.top + r.height / 2)) * 0.32).toFixed(1) + "px");
      }

      const tilt = target?.closest<HTMLElement>("[data-tilt]");
      document.querySelectorAll<HTMLElement>("[data-tilt].is-tilting").forEach((el) => {
        if (el !== tilt) {
          el.classList.remove("is-tilting");
          el.style.removeProperty("--rx");
          el.style.removeProperty("--ry");
        }
      });
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        tilt.classList.add("is-tilting");
        tilt.style.setProperty("--rx", ((0.5 - py) * 7).toFixed(2) + "deg");
        tilt.style.setProperty("--ry", ((px - 0.5) * 9).toFixed(2) + "deg");
        tilt.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        tilt.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      }

      const zone = target?.closest<HTMLElement>("[data-spotlight]");
      const spot = zone?.querySelector<HTMLElement>(".spot");
      document.querySelectorAll<HTMLElement>("[data-spotlight] .spot").forEach((sp) => {
        if (sp !== spot) sp.style.opacity = "0";
      });
      if (zone && spot) {
        const r = zone.getBoundingClientRect();
        spot.style.opacity = "1";
        spot.style.transform = "translate3d(" + (e.clientX - r.left - 300).toFixed(0) + "px," + (e.clientY - r.top - 300).toFixed(0) + "px,0)";
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      document.querySelectorAll<HTMLElement>("[data-spotlight] .spot").forEach((s) => (s.style.opacity = "0"));
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    });
    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
