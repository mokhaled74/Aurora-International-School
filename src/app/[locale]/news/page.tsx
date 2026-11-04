import Link from "next/link";
import { Footer } from "@/components/Sections";
import { Photo } from "@/components/Interactive";
import NewsList from "@/components/NewsList";
import { px } from "@/lib/photos";
import { articles, events, cats, fmt } from "@/content/news";
import { dicts, asLocale } from "@/lib/i18n";
export default async function News({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const n = d.newsPage; const [top, ...rest] = articles;
  const cards = rest.map((a) => ({ slug: a.slug, cat: a.cat, catLabel: cats[a.cat][lc], title: a.title[lc], excerpt: a.excerpt[lc], date: fmt(a.date, lc), photo: a.photo }));
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-12 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--pri)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.news}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{n.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{n.intro}</p>
      </section>
      <section className="px-6 py-8 md:px-16">
        <Link href={`/${lc}/news/${top.slug}`} className="glass group grid overflow-hidden md:grid-cols-2">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-[#4C5BFF] to-[#2DD4BF] md:aspect-auto md:min-h-80"><Photo src={px(top.photo, 1100)} /></div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex items-center gap-3 text-xs text-[var(--mut)]"><span className="rounded-full bg-[var(--acc)] px-3 py-1 font-semibold text-black">{n.featured}</span>{cats[top.cat][lc]} · {fmt(top.date, lc)}</div>
            <h2 className="font-display mt-5 text-2xl font-bold md:text-3xl">{top.title[lc]}</h2><p className="mt-3 text-lg text-[var(--mut)]">{top.excerpt[lc]}</p>
            <span className="mt-6 text-sm font-semibold text-[var(--acc)]">{n.read} →</span>
          </div>
        </Link>
      </section>
      <section className="px-6 py-12 md:px-16">
        <h2 className="font-display text-3xl font-bold md:text-5xl">{n.more}</h2>
        <NewsList items={cards} filters={Object.entries(cats).map(([k, v]) => ({ k, l: v[lc] }))} locale={lc} read={n.read} />
      </section>
      <section className="px-6 py-24 md:px-16">
        <h2 className="font-display text-3xl font-bold md:text-5xl">{n.eventsTitle}</h2>
        <ul className="mt-10 max-w-3xl space-y-3">
          {events.map((e) => (
            <li key={e.date + e.title.en} className="glass flex items-center gap-6 p-5">
              <div className="grid size-20 shrink-0 place-items-center rounded-2xl bg-[var(--acc)] text-black"><div className="text-center leading-tight"><div className="font-display text-3xl font-bold">{fmt(e.date, lc, { day: "numeric" })}</div><div className="text-xs uppercase">{fmt(e.date, lc, { month: "short" })}</div></div></div>
              <div><h3 className="font-display text-lg font-semibold">{e.title[lc]}</h3><p className="text-sm text-[var(--mut)]">{fmt(e.date, lc, { weekday: "long", year: "numeric" })}</p></div>
            </li>
          ))}
        </ul>
      </section>
      <Footer d={d} locale={lc} />
    </main>
  );
}
