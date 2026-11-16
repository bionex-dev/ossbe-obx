import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, contact, contactPage, floatingCta, footer, footerLinks } from "@/data/website-content";
import { google } from "@/data/owner-content";
import { Button } from "@/components/ui/Button";
import { SplitWords } from "@/components/ui/SplitWords";
import s from "./Footer.module.scss";

// Source footer shows a truncated description followed by "Read more"; we cut at a sentence boundary instead of mid-word.
const cut = business.description.indexOf("proud to work for.") + "proud to work for.".length;
const excerpt = business.description.slice(0, cut);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={["container", s.ask].join(" ")}>
        <div>
          <h2 data-reveal="words" aria-label={floatingCta.title}>
            <span aria-hidden>
              <SplitWords text={floatingCta.title} />
            </span>
          </h2>
          <p data-reveal style={{ ["--d" as string]: 2 }}>{floatingCta.text}</p>
        </div>
        <div data-reveal style={{ ["--d" as string]: 3 }}>
          <Button href={contact.whatsapp} external variant="light">
            {floatingCta.button} <ArrowUpRight aria-hidden />
          </Button>
        </div>
      </div>

      <div className={["container", s.grid].join(" ")}>
        <div data-reveal>
          <p className={s.title}>{business.name}</p>
          <p className={s.about}>
            {excerpt}{" "}
            <a className={s.more} href="/#about">
              {footer.readMore}
              <span className="sr-only"> about {business.name}</span>
            </a>
          </p>
        </div>
        <nav aria-label="Footer" data-reveal style={{ ["--d" as string]: 1 }}>
          <p className={s.h}>{footer.quickLinks}</p>
          <ul className={s.list}>
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section aria-labelledby="footer-contact" data-reveal style={{ ["--d" as string]: 2 }}>
          <p className={s.h} id="footer-contact">
            {footer.contactUs}
          </p>
          <div className={s.card}>
            <p className={s.title}>{business.name}</p>
            <a className={s.row} href={contact.tel}>
              <Phone aria-hidden /> {contact.phoneDisplay}
            </a>
            <a className={s.row} href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden /> WhatsApp
            </a>
            <a className={s.row} href={"mailto:" + contact.email}>
              <Mail aria-hidden /> {contact.email}
            </a>
            <a className={s.row} href={contact.maps} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden /> <span>{google.address}</span>
            </a>
            <div className={s.mapRow}>
              <Button href={contact.directions} external size="sm" variant="ghostDark">
                <MapPin aria-hidden /> {contactPage.getDirections}
                <span className="sr-only">{contactPage.mapsSr}</span>
              </Button>
              <Button href={contact.maps} external size="sm" variant="ghostDark">
                {contactPage.viewMap}
                <span className="sr-only">{contactPage.mapsSr}</span>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <div className={s.wordmark} data-reveal="fade" aria-hidden>
        {"OSBEE".split("").map((ch, i) => (
          <span key={i} className={s.letter}>
            <span style={{ ["--i" as string]: i }}>{ch}</span>
          </span>
        ))}
      </div>

      <div className={["container", s.bottom].join(" ")}>
        <p>
          Copyright © {year} {business.name}.
        </p>
      </div>
    </footer>
  );
}
