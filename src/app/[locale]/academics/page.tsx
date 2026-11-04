import { Check } from "lucide-react";
import { Footer, CTA } from "@/components/Sections";
import { Philosophy } from "@/components/Interactive";
import { Curriculum, Method } from "@/components/AcademicsParts";
import { dicts, asLocale } from "@/lib/i18n";
const H2 = "font-display text-3xl font-bold md:text-5xl";
export default async function Academics({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const a = d.academics;
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--acc)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.academics}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{a.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{a.intro}</p>
      </section>
      <Philosophy d={d} k={a.philosophy.k} text={a.philosophy.text} />
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.levels.title}</h2><p className="mt-2 text-sm text-[var(--mut)]">{a.levels.note}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {a.levels.items.map((x) => (
            <article key={x.t} className="glass p-8 transition-transform hover:-translate-y-1">
              <span className="rounded-full bg-[var(--line)] px-3 py-1 text-xs">{x.g}</span>
              <h3 className="font-display mt-6 text-xl font-semibold">{x.t}</h3><p className="mt-2 text-[var(--mut)]">{x.d}</p>
            </article>
          ))}
        </div>
      </section>
      <Curriculum d={d} />
      <Method d={d} />
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.programs.title}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {a.programs.items.map((x) => <article key={x.t} className="glass p-10 transition-transform hover:-translate-y-1"><h3 className="font-display text-2xl font-semibold">{x.t}</h3><p className="mt-3 text-[var(--mut)]">{x.d}</p></article>)}
        </div>
      </section>
      <section className="px-6 py-24 md:px-16">
        <h2 className={H2}>{a.outcomes.title}</h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {a.outcomes.items.map((t) => <li key={t} className="glass flex items-center gap-4 p-6"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--acc)] text-black"><Check size={18} /></span>{t}</li>)}
        </ul>
      </section>
      <CTA d={d} locale={lc} />
      <Footer d={d} locale={lc} />
    </main>
  );
}
