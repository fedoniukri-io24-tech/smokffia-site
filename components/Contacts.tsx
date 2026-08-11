"use client";
import { useState } from "react";
import Image from "next/image";

const footerLinks = [
  {
    label: "EMAIL",
    value: "PORUCAEVAMARIA@GMAIL.COM",
    href: "mailto:porucaevamaria@gmail.com",
  },
  {
    label: "FIVERR",
    value: "/SMOKFFIA?PUBLIC_MODE=TRUE",
    href: "https://fiverr.com/smokffia",
  },
  {
    label: "BEHANCE",
    value: "/SMOKFFIAUIUX",
    href: "https://behance.net/smokffiauiux",
  },
  {
    label: "LINKEDIN",
    value: "/SMOKFFIA/",
    href: "https://linkedin.com/in/smokffia",
  },
  {
    label: "INSTAGRAM",
    value: "@SMOKFFIAIUIUXDESIGN",
    href: "https://www.instagram.com/smokffiaiuiuxdesign/",
  },
];

export default function Contacts() {
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
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(data?.error || "Не вдалося надіслати");
      }

      setSent(true);
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Не вдалося надіслати. Спробуйте ще раз або напишіть у Telegram.");
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
                    Повідомлення надіслано!
                    <br />
                    Зв&apos;яжусь найближчим часом.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contacts__form">
                  <div>
                    <label className="contacts__label">ІМ&apos;Я</label>
                    <input
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
                    <label className="contacts__label">ТЕЛЕФОН</label>
                    <input
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
                    <label className="contacts__label">ВАШ ЗАПИТ</label>
                    <input
                      type="text"
                      name="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="contact-input"
                      placeholder="напишіть коротко про свій проєкт"
                      disabled={loading}
                    />
                  </div>
                  {error ? <p className="contacts__error">{error}</p> : null}
                  <button
                    type="submit"
                    className="contacts__submit"
                    disabled={loading}
                  >
                    {loading ? "НАДСИЛАЮ..." : "НАПИСАТИ"}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="contacts__info">
            <div>
              <h2 className="contacts__heading">КОНТАКТИ</h2>
              <p className="contacts__text">
                Потрібен сучасний дизайн сайту,
                <br />
                лендингу чи вебсервісу?
              </p>
              <p className="contacts__text">
                Розкажіть про свій проєкт, і я зв&apos;яжуся
                <br />з вами найближчим часом.
              </p>
            </div>

            <a
              href="https://t.me/sofiauiuxdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts__telegram"
            >
              НАПИСАТИ В TELEGRAM
            </a>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="container">
          <div className="footer-links__grid">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-links__item"
              >
                <div className="footer-links__top">
                  <span className="footer-links__label">{l.label}</span>
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
              ДОСТУПНА ДЛЯ ФРИЛАНС-ПРОЄКТІВ
              <span className="contacts-marquee__star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
