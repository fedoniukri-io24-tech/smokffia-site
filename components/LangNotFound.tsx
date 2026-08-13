"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  defaultLocale,
  getLocaleFromPathname,
  hasLocale,
  type Locale,
} from "@/lib/i18n";
import { notFoundMessages } from "@/lib/not-found-messages";

export default function LangNotFound() {
  const pathname = usePathname();
  const detected = getLocaleFromPathname(pathname);
  const locale: Locale =
    detected && hasLocale(detected) ? detected : defaultLocale;
  const dict = notFoundMessages[locale];

  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__brand">{dict.brand}</p>
        <p className="not-found__code">{dict.code}</p>
        <h1 className="not-found__title">{dict.title}</h1>
        <p className="not-found__text">{dict.text}</p>
        <div className="not-found__actions">
          <Link href={`/${locale}`} className="btn-hero">
            {dict.home}
          </Link>
          <Link href={`/${locale}#contacts`} className="not-found__link">
            {dict.write}
          </Link>
        </div>
      </div>
    </main>
  );
}
