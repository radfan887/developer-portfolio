import { Mail, Briefcase, Code2, Send, MessageCircle } from "lucide-react";

export default function Contact({ t }) {
  return (
    <section className="section" id="contact">
      <div className="contact-card">
        <span className="section-label">04 / CONTACT</span>

        <h2>{t.contact.title}</h2>

        <p>{t.contact.subtitle}</p>

        <div className="contact-links">
          <a
            href="mailto:radfanfarae@gmail.com"
            className="btn btn-primary"
          >
            <Mail size={19} />
            {t.contact.email}
            <Send size={17} />
          </a>

          <a
            href="https://github.com/radfan887"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Code2 size={19} />
            {t.contact.github}
          </a>

          <a
            href="https://www.linkedin.com/in/radfan-farae-a956603b1/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Briefcase size={19} />
            {t.contact.linkedin}
          </a>
          <a
            href="https://wa.me/967770523855"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <MessageCircle size={19} />
            {t.contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}