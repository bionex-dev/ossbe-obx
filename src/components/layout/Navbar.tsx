"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { business, contact, glance, nav } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import s from "./Navbar.module.scss";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 16);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.current?.style.setProperty("--p", String(max > 0 ? y / max : 0));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Scrollspy: highlight the nav item for the section crossing the middle of the viewport.
  useEffect(() => {
    const els = nav
      .map((l) => document.getElementById(l.href.split("#")[1] ?? ""))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={[s.header, scrolled || open ? s.scrolled : ""].join(" ")}>
        <nav className={["container", s.inner].join(" ")} aria-label="Primary">
          <a href="/#top" className={s.brand} onClick={close}>
            <span className={s.mark} aria-hidden>
              O
            </span>
            <span className={s.name}>
              <strong>{business.name}</strong>
              <span>{business.category}</span>
            </span>
          </a>
          <ul className={s.links}>
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  className={[s.link, active === l.href.split("#")[1] ? s.active : ""].join(" ")}
                  href={l.href}
                  aria-current={active === l.href.split("#")[1] ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={s.actions}>
            <Button href={contact.tel} size="sm" variant="ghostDark" className={s.call} aria-label={"Call " + contact.phoneDisplay}>
              <Phone aria-hidden /> {contact.phoneDisplay}
            </Button>
            <Button href={contact.whatsapp} external size="sm" className={s.call}>
              Contact us <ArrowUpRight aria-hidden />
            </Button>
            <button
              type="button"
              className={s.toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>
        </nav>
        <div ref={bar} className={s.progress} aria-hidden />
      </header>

      <div id="mobile-menu" className={[s.sheet, open ? s.open : ""].join(" ")} inert={!open}>
        <ul className={s.sheetLinks}>
          {nav.map((l, i) => (
            <li key={l.href}>
              <a className={s.sheetLink} style={{ ["--i" as string]: i }} href={l.href} onClick={close}>
                {l.label} <ArrowUpRight aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <div className={s.sheetCtas}>
          <p className={s.sheetMeta}>
            {glance.hoursLabel}: {glance.hoursSummary}
          </p>
          <Button href={contact.tel} variant="ghostDark" onClick={close}>
            <Phone aria-hidden /> {contact.phoneDisplay}
          </Button>
          <Button href={contact.whatsapp} external onClick={close}>
            <MessageCircle aria-hidden /> Contact us
          </Button>
        </div>
      </div>
    </>
  );
}
