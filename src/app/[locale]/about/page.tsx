import { Target, Eye, User, Award } from "lucide-react";
import { Footer, CTA } from "@/components/Sections";
import { Timeline } from "@/components/AboutParts";
import { dicts, asLocale } from "@/lib/i18n";
const H2 = "font-display text-3xl font-bold md:text-5xl";
export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const a = d.about;
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--pri)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.about}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{a.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{a.intro}</p>
      </section>
      <section className="grid gap-4 px-6 py-12 md:grid-cols-2 md:px-16">
        {[[Target, a.mission], [Eye, a.vision]].map(([I, x]: any) => (
          <article key={x.t} className="glass p-10"><I className="text-[var(--acc)]" size={32} /><h2 className="font-display mt-6 text-2xl font-semibold">{x.t}</h2><p className="mt-3 text-lg text-[var(--mut)]">{x.d}</p></article>
        ))}
      </section>
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.values.title}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {a.values.items.map((x, i) => (
            <article key={x.t} className="glass p-8 transition-transform hover:-translate-y-1"><div className="font-display text-4xl font-bold text-[var(--pri)] opacity-60">0{i + 1}</div><h3 className="font-display mt-6 text-xl font-semibold">{x.t}</h3><p className="mt-2 text-[var(--mut)]">{x.d}</p></article>
          ))}
        </div>
      </section>
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.leaders.title}</h2><p className="mt-2 text-sm text-[var(--mut)]">{a.leaders.note}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {a.leaders.items.map((x) => (
            <article key={x.n} className="glass p-8 text-center">
              <div className="mx-auto grid size-24 place-items-center rounded-full bg-gradient-to-br from-[var(--pri)] to-[var(--acc)] text-white"><User size={36} /></div>
              <h3 className="font-display mt-6 text-lg font-semibold">{x.n}</h3><p className="text-sm text-[var(--mut)]">{x.r}</p>
            </article>
          ))}
        </div>
      </section>
      <Timeline d={d} />
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.awards.title}</h2><p className="mt-2 text-sm text-[var(--mut)]">{a.awards.note}</p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {a.awards.items.map((t) => <div key={t} className="glass flex flex-col items-center gap-3 p-8"><Award className="text-[var(--acc)]" size={32} /><span className="font-display text-lg">{t}</span></div>)}
        </div>
      </section>
      <CTA d={d} locale={lc} />
      <Footer d={d} locale={lc} />
    </main>
  );
}
