import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, contact, contactPage, floatingCta, footer, footerLinks } from "@/data/website-content";
import { Button } from "@/components/ui/Button";
import s from "./Footer.module.scss";

// Source footer shows a truncated description followed by "Read more"; we cut at a sentence boundary instead of mid-word.
const cut = business.description.indexOf("proud to work for.") + "proud to work for.".length;
const excerpt = business.description.slice(0, cut);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={["container", s.ask].join(" ")}>
        <div data-reveal>
          <h2>{floatingCta.title}</h2>
          <p>{floatingCta.text}</p>
        </div>
        <div data-reveal style={{ ["--d" as string]: 1 }}>
          <Button href={contact.whatsapp} external variant="light">
            {floatingCta.button} <ArrowUpRight aria-hidden />
          </Button>
        </div>
      </div>

      <div className={["container", s.grid].join(" ")}>
        <div>
          <p className={s.title}>{business.name}</p>
          <p className={s.about}>
            {excerpt}{" "}
            <a className={s.more} href="/#about">
              {footer.readMore}
              <span className="sr-only"> about {business.name}</span>
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <p className={s.h}>{footer.quickLinks}</p>
          <ul className={s.list}>
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section aria-labelledby="footer-contact">
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

      <div className={["container", s.bottom].join(" ")}>
        <p>
          Copyrights ©{year} {business.name}.
        </p>
      </div>
    </footer>
  );
}
