"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { business, contact, glance, nav } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import s from "./Navbar.module.scss";

const keyOf = (href: string) => (href.includes("#") ? href.split("#")[1] : href.replace("/", ""));

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(pathname === "/" ? "top" : keyOf(pathname));
  const bar = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);

  // Scroll: glass background, progress bar, hide while scrolling down / reveal on scroll up.
  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 16);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 520);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("--p", String(max > 0 ? y / max : 0));
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

  // Scrollspy on the home page; route-based highlight elsewhere.
  useEffect(() => {
    if (pathname !== "/") {
      setActive(keyOf(pathname));
      return;
    }
    const els = nav
      .filter((l) => l.href.includes("#"))
      .map((l) => document.getElementById(keyOf(l.href)))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: "-45% 0px -50% 0px",
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Slide the highlight pill under the active link.
  useEffect(() => {
    const place = () => {
      const ul = list.current;
      const p = pill.current;
      if (!ul || !p) return;
      const link = ul.querySelector<HTMLElement>('[data-key="' + active + '"]');
      if (!link) {
        p.style.opacity = "0";
        return;
      }
      p.style.opacity = "1";
      p.style.width = link.offsetWidth + "px";
      p.style.transform = "translateX(" + link.offsetLeft + "px)";
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

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

  const close = () => setOpen(false);
  const headerCls = [s.header, scrolled || open ? s.scrolled : "", hidden && !open ? s.hidden : ""].join(" ");

  return (
    <>
      <header className={headerCls}>
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
          <div className={s.links} ref={list}>
            <span className={s.pill} ref={pill} aria-hidden />
            <ul className={s.linkList}>
            {nav.map((l) => {
              const key = keyOf(l.href);
              return (
                <li key={l.href}>
                  <a data-key={key} className={[s.link, active === key ? s.active : ""].join(" ")} href={l.href} aria-current={active === key ? "true" : undefined}>
                    {l.label}
                  </a>
                </li>
              );
            })}
            </ul>
          </div>
          <div className={s.actions}>
            <Button href={contact.tel} size="sm" variant="ghostDark" className={s.call} aria-label={"Call " + contact.phoneDisplay}>
              <Phone aria-hidden /> {contact.phoneDisplay}
            </Button>
            <Button href={contact.whatsapp} external size="sm" className={s.call}>
              Contact us <ArrowUpRight aria-hidden />
            </Button>
            <button type="button" className={[s.toggle, open ? s.toggleOpen : ""].join(" ")} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
              <span className={s.bars} aria-hidden>
                <span />
                <span />
                <span />
              </span>
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
                <span className={s.sheetNum} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label} <ArrowUpRight aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <div className={s.sheetCtas}>
          <p className={s.sheetMeta}>
            {glance.hoursLabel}: {glance.hoursSummary}
          </p>
          <OpenStatus tone="dark" />
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
