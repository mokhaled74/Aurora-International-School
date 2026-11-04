import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import { Marquee, Why, Gallery, Accreditations, News, CTA, Footer } from "@/components/Sections";
import { Philosophy, Facilities, Life, Testimonials } from "@/components/Interactive";
import { dicts, asLocale } from "@/lib/i18n";
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc];
  return (
    <main>
      <Hero d={d} locale={lc} /><Marquee d={d} /><Stats d={d} locale={lc} /><Philosophy d={d} /><Programs d={d} /><Why d={d} /><Facilities d={d} /><Life d={d} /><Gallery d={d} locale={lc} /><Testimonials d={d} /><Accreditations d={d} /><News d={d} locale={lc} />
      <CTA d={d} locale={lc} />
      <Footer d={d} locale={lc} />
    </main>
  );
}
