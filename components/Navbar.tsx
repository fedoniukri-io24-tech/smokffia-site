"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary["nav"];
};

export default function Navbar({ locale, dict }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { label: dict.works, href: `${base}#projects` },
    { label: dict.about, href: `${base}#about` },
    { label: dict.process, href: `${base}#process` },
    { label: dict.contacts, href: `${base}#contacts` },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="navbar">
      <Link href={base} className="navbar__logo" aria-label="SMOKFFIA">
        <Image
          src="/images/logo.svg"
          alt="SMOKFFIA"
          width={137}
          height={24}
          priority
        />
      </Link>

      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="nav-link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <a href={`${base}#contacts`} className="navbar__cta btn-nav">
          {dict.cta}
        </a>
        <button
          className="navbar__burger"
          onClick={() => setMobileOpen(true)}
          aria-label={dict.menu}
          aria-expanded={mobileOpen}
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile" role="dialog" aria-modal="true">
          <div className="navbar__mobile-top">
            <Link
              href={base}
              className="navbar__logo"
              aria-label="SMOKFFIA"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/images/logo.svg"
                alt="SMOKFFIA"
                width={137}
                height={24}
              />
            </Link>
            <button
              className="navbar__mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label={dict.close}
            >
              <X size={32} strokeWidth={2.5} />
            </button>
          </div>

          <div className="navbar__mobile-links">
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
          </div>

          <div className="navbar__mobile-lang">
            <p className="navbar__mobile-lang-label">{dict.language}</p>
            <LanguageSwitcher
              locale={locale}
              onSelect={() => setMobileOpen(false)}
            />
          </div>

          <a
            href={`${base}#contacts`}
            onClick={() => setMobileOpen(false)}
            className="btn-nav navbar__mobile-cta"
          >
            {dict.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
