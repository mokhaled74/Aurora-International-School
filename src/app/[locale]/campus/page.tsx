import { Check } from "lucide-react";
import { Footer, CTA } from "@/components/Sections";
import { Photo, grad } from "@/components/Interactive";
import { Explorer, Gallery } from "@/components/CampusParts";
import { photos } from "@/lib/photos";
import { dicts, asLocale } from "@/lib/i18n";
export default async function Campus({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const c = d.campus;
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--acc)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.campus}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{c.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{c.intro}</p>
      </section>
      <Explorer d={d} />
      {c.items.map((x, k) => (
        <section key={x.t} className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16">
          <div className={k % 2 ? "md:order-2" : ""}>
            <h2 className="font-display text-2xl font-bold md:text-4xl">{x.t}</h2><p className="mt-4 text-lg text-[var(--mut)]">{x.d}</p>
            <ul className="mt-6 space-y-3">{x.f.map((t) => <li key={t} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--acc)] text-black"><Check size={14} /></span>{t}</li>)}</ul>
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gradient-to-br ${grad[k % 4]}`}><Photo src={photos.campus[k]} /></div>
        </section>
      ))}
      <Gallery d={d} />
      <CTA d={d} locale={lc} />
      <Footer d={d} locale={lc} />
    </main>
  );
}
