import { Check, Plus } from "lucide-react";
import { Footer } from "@/components/Sections";
import InquiryForm from "@/components/InquiryForm";
import { dicts, asLocale } from "@/lib/i18n";
const H2 = "font-display text-3xl font-bold md:text-5xl";
export default async function Admissions({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const a = d.admissions;
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--pri)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.admissions}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{a.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{a.intro}</p>
      </section>
      <section className="px-6 py-16 md:px-16">
        <h2 className={H2}>{a.process.title}</h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {a.process.items.map((x, i) => <li key={x.t} className="glass p-6"><div className="font-display text-4xl font-bold text-[var(--acc)]">0{i + 1}</div><h3 className="font-display mt-4 text-lg font-semibold">{x.t}</h3><p className="mt-2 text-sm text-[var(--mut)]">{x.d}</p></li>)}
        </ol>
      </section>
      <section className="grid gap-10 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <h2 className={H2}>{a.requirements.title}</h2>
          <ul className="mt-8 space-y-3">{a.requirements.items.map((t) => <li key={t} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--acc)] text-black"><Check size={14} /></span>{t}</li>)}</ul>
        </div>
        <div className="glass self-start p-10">
          <h2 className="font-display text-2xl font-semibold">{a.tuition.title}</h2><p className="mt-4 text-[var(--mut)]">{a.tuition.text}</p>
          <a href="#inquiry" className="mt-8 inline-block rounded-full bg-[var(--acc)] px-6 py-3 font-semibold text-black">{a.tuition.btn}</a>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className={`${H2} text-center`}>{a.faq.title}</h2>
          <div className="mt-8 space-y-3">
            {a.faq.items.map((x) => (
              <details key={x.q} className="glass group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg">{x.q}<Plus className="shrink-0 transition-transform group-open:rotate-45" size={20} /></summary>
                <p className="mt-3 text-[var(--mut)]">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="inquiry" className="scroll-mt-24 px-6 py-24 md:px-16">
        <h2 className={H2}>{a.form.title}</h2><p className="mb-10 mt-3 max-w-xl text-[var(--mut)]">{a.form.sub}</p>
        <InquiryForm d={d} />
      </section>
      <Footer d={d} locale={lc} />
    </main>
  );
}
