"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeNames,
  localeShort,
  locales,
  type Locale,
} from "@/lib/i18n";

type Props = {
  locale: Locale;
  onSelect?: () => void;
};

export default function LanguageSwitcher({ locale, onSelect }: Props) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const hrefFor = (next: Locale) => {
    const parts = pathname.split("/");
    if (parts.length >= 2 && locales.includes(parts[1] as Locale)) {
      parts[1] = next;
      return parts.join("/") || `/${next}`;
    }
    return `/${next}`;
  };

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className={`lang-switch${open ? " lang-switch--open" : ""}`}
      ref={rootRef}
    >
      <button
        type="button"
        className="lang-switch__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {localeShort[locale]}
        <span className="lang-switch__arrow" aria-hidden>
          ↓
        </span>
      </button>

      {open && (
        <ul className="lang-switch__menu" role="listbox">
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <Link
                href={hrefFor(code)}
                hrefLang={code}
                className={`lang-switch__option${code === locale ? " lang-switch__option--active" : ""}`}
                onClick={() => {
                  setOpen(false);
                  onSelect?.();
                }}
              >
                <span className="lang-switch__option-code">
                  {localeShort[code]}
                </span>
                <span className="lang-switch__option-name">
                  {localeNames[code]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
