"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

type HeroLangProps = {
  locale: Locale;
};

export default function HeroLang({ locale }: HeroLangProps) {
  return <LanguageSwitcher locale={locale} />;
}
