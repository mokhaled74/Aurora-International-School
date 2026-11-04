import { Check, Trophy, Palette, Users, PartyPopper, HeartHandshake } from "lucide-react";
import { Footer, CTA } from "@/components/Sections";
import { Photo, grad } from "@/components/Interactive";
import { Clubs } from "@/components/StudentParts";
import { photos } from "@/lib/photos";
import { dicts, asLocale } from "@/lib/i18n";
const icons = [Trophy, Palette, Users, PartyPopper, HeartHandshake];
const secIcons = [Trophy, Palette, PartyPopper];
export default async function Student({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const s = d.student;
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--pri)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.student}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{s.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{s.intro}</p>
      </section>
      <section className="px-6 py-16 md:px-16">
        <h2 className="font-display text-3xl font-bold md:text-5xl">{s.overviewTitle}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {s.overview.map((x, i) => { const I = icons[i]; return (
            <article key={x.t} className="glass p-8 transition-transform hover:-translate-y-1"><I className="text-[var(--acc)]" size={30} /><h3 className="font-display mt-6 text-lg font-semibold">{x.t}</h3><p className="mt-2 text-sm text-[var(--mut)]">{x.d}</p></article>
          ); })}
        </div>
      </section>
      {s.sections.map((x, k) => { const I = secIcons[k]; return (
        <section key={x.t} className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16">
          <div className={k % 2 ? "md:order-2" : ""}>
            <h2 className="font-display text-2xl font-bold md:text-4xl">{x.t}</h2><p className="mt-4 text-lg text-[var(--mut)]">{x.d}</p>
            <ul className="mt-6 space-y-3">{x.f.map((t) => <li key={t} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--acc)] text-black"><Check size={14} /></span>{t}</li>)}</ul>
          </div>
          <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[32px] bg-gradient-to-br ${grad[(k + 1) % 4]}`}>
            <I size={72} className="text-white/80" aria-hidden /><Photo src={photos.student[k]} />
          </div>
        </section>
      ); })}
      <Clubs d={d} />
      <CTA d={d} locale={lc} />
      <Footer d={d} locale={lc} />
    </main>
  );
}
