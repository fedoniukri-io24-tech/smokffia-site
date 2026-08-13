"use client";
import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type ContactsProps = {
  dict: Dictionary["contacts"];
  locale: Locale;
};

const footerLinks = [
  {
    key: "EMAIL" as const,
    value: "PORUCAEVAMARIA@GMAIL.COM",
    href: "mailto:porucaevamaria@gmail.com",
  },
  {
    key: "FIVERR" as const,
    value: "/SMOKFFIA?PUBLIC_MODE=TRUE",
    href: "https://fiverr.com/smokffia",
  },
  {
    key: "BEHANCE" as const,
    value: "/SMOKFFIAUIUX",
    href: "https://behance.net/smokffiauiux",
  },
  {
    key: "LINKEDIN" as const,
    value: "/SMOKFFIA/",
    href: "https://linkedin.com/in/smokffia",
  },
  {
    key: "INSTAGRAM" as const,
    value: "@SMOKFFIAIUIUXDESIGN",
    href: "https://www.instagram.com/smokffiaiuiuxdesign/",
  },
];

export default function Contacts({ dict, locale }: ContactsProps) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(data?.error || dict.error);
      }

      setSent(true);
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(dict.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts__grid">
          <div className="contacts__form-wrap">
            <div className="contacts__form-box">
              <Image
                src="/images/contacts-fan.svg"
                alt=""
                width={73}
                height={72}
                className="contacts__fan"
              />

              {sent ? (
                <div className="contacts__success">
                  <p className="contacts__success-text">
                    {dict.success}
                    <br />
                    {dict.successSub}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contacts__form">
                  <div>
                    <label htmlFor="contact-name" className="contacts__label">
                      {dict.name}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="contact-input"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="contacts__label">
                      {dict.phone}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="contact-input"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="contacts__label">
                      {dict.message}
                    </label>
                    <input
                      id="contact-message"
                      type="text"
                      name="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="contact-input"
                      placeholder={dict.placeholder}
                      disabled={loading}
                    />
                  </div>
                  {error ? <p className="contacts__error">{error}</p> : null}
                  <button
                    type="submit"
                    className="contacts__submit"
                    disabled={loading}
                  >
                    {loading ? dict.sending : dict.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="contacts__info">
            <div>
              <h2 className="contacts__heading">{dict.heading}</h2>
              <p className="contacts__text">
                {dict.text1}
                <br />
                {dict.text1b}
              </p>
              <p className="contacts__text">
                {dict.text2}
                <br />
                {dict.text2b}
              </p>
            </div>

            <a
              href="https://t.me/sofiauiuxdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts__telegram"
            >
              {dict.telegram}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="container">
          <div className="footer-links__grid">
            {footerLinks.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-links__item"
              >
                <div className="footer-links__top">
                  <span className="footer-links__label">
                    {dict.footerLabels?.[l.key] ?? l.key}
                  </span>
                  <span className="footer-links__arrow">↗</span>
                </div>
                <span className="footer-links__value">{l.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contacts-marquee" aria-hidden>
        <div className="contacts-marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="contacts-marquee__item">
              {dict.marquee}
              <span className="contacts-marquee__star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
