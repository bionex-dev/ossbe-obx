import type { Metadata } from "next";
import { business, contact, privacy } from "@/data/website-content";
import { canonical, displayUrl } from "@/lib/site";
import s from "./privacy.module.scss";

export const metadata: Metadata = {
  title: privacy.title,
  description: "Read how OSBEE SOLUTIONS PRIVATE LIMITED collects and uses information provided through this website.",
  alternates: canonical("/privacy-policy"),
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className={s.head}>
        <div className="container">
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden>/</span>
            <span aria-current="page">{privacy.title}</span>
          </nav>
          <h1>{privacy.title}</h1>
          <p className={s.date}>
            <strong>{privacy.effectiveLabel}</strong> {privacy.effectiveDate}
          </p>
        </div>
      </header>

      <div className={["container", s.body].join(" ")}>
        <article className={s.article}>
          <p>
            {privacy.intro} <a href="/">{displayUrl}</a>.
          </p>
          {privacy.sections.map((sec) => (
            <section key={sec.h}>
              <h2>{sec.h}</h2>
              {sec.p && <p style={{ marginTop: 12 }}>{sec.p}</p>}
              {sec.list && (
                <ul style={{ marginTop: 12 }}>
                  {sec.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <h2>{privacy.rightsH}</h2>
          <p>
            {privacy.rights} <a href="/#contact">{displayUrl + "/contact"}</a>.
          </p>
          <h2>{privacy.updatesH}</h2>
          <p>{privacy.updates}</p>
          <h2>{privacy.contactH}</h2>
          <p>{privacy.contactP}</p>
          <ul className={s.contactList} aria-label={business.name}>
            <li>
              <a href={contact.tel}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={"mailto:" + contact.email}>{contact.email}</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
