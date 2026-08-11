"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Роботи", href: "#projects" },
  { label: "Про мене", href: "#about" },
  { label: "Процес", href: "#process" },
  { label: "Контакти", href: "#contacts" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo" aria-label="SMOKFFIA">
        <Image
          src="/images/logo.svg"
          alt="SMOKFFIA"
          width={137}
          height={24}
          priority
        />
      </a>

      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="nav-link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contacts" className="navbar__cta btn-nav">
        Написати мені →
      </a>

      <button
        className="navbar__burger"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Меню"
      >
        {mobileOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
      </button>

      {mobileOpen && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="navbar__mobile-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMobileOpen(false)}
            className="btn-nav navbar__mobile-cta"
          >
            Написати мені →
          </a>
        </div>
      )}
    </nav>
  );
}
