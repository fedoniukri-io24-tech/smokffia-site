"use client";

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
  variant?: "menu" | "compact";
  onSelect?: () => void;
};

export default function LanguageSwitcher({
  locale,
  variant = "menu",
  onSelect,
}: Props) {
  const pathname = usePathname() || `/${locale}`;

  const hrefFor = (next: Locale) => {
    const parts = pathname.split("/");
    if (parts.length >= 2 && locales.includes(parts[1] as Locale)) {
      parts[1] = next;
      const nextPath = parts.join("/") || `/${next}`;
      return nextPath;
    }
    return `/${next}`;
  };

  if (variant === "compact") {
    return (
      <div className="lang-switch lang-switch--compact" role="list">
        {locales.map((code) => (
          <Link
            key={code}
            href={hrefFor(code)}
            role="listitem"
            className={`lang-switch__code${code === locale ? " lang-switch__code--active" : ""}`}
            hrefLang={code}
            onClick={onSelect}
          >
            {localeShort[code]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="lang-switch" role="list">
      {locales.map((code) => (
        <Link
          key={code}
          href={hrefFor(code)}
          role="listitem"
          className={`lang-switch__item${code === locale ? " lang-switch__item--active" : ""}`}
          hrefLang={code}
          onClick={onSelect}
        >
          <span className="lang-switch__short">{localeShort[code]}</span>
          <span className="lang-switch__name">{localeNames[code]}</span>
        </Link>
      ))}
    </div>
  );
}
