import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contacts from "@/components/Contacts";
import { getDictionary } from "@/lib/get-dictionary";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <main id="main" className="page">
      <Navbar locale={locale} dict={dict.nav} />
      <Hero locale={locale} dict={dict.hero} />
      <About dict={dict.about} />
      <Services locale={locale} dict={dict.services} />
      <Projects locale={locale} dict={dict.projects} />
      <Process
        process={dict.process}
        skills={dict.skills}
        reviews={dict.reviews}
      />
      <Contacts locale={locale} dict={dict.contacts} />
    </main>
  );
}
