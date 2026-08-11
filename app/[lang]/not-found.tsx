import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { defaultLocale } from "@/lib/i18n";

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);

  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__brand">{dict.notFound.brand}</p>
        <p className="not-found__code">{dict.notFound.code}</p>
        <h1 className="not-found__title">{dict.notFound.title}</h1>
        <p className="not-found__text">{dict.notFound.text}</p>
        <div className="not-found__actions">
          <Link href={`/${defaultLocale}`} className="btn-hero">
            {dict.notFound.home}
          </Link>
          <Link
            href={`/${defaultLocale}#contacts`}
            className="not-found__link"
          >
            {dict.notFound.write}
          </Link>
        </div>
      </div>
    </main>
  );
}
