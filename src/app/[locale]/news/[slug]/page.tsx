import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Sections";
import { Photo } from "@/components/Interactive";
import { px } from "@/lib/photos";
import { articles, cats, fmt } from "@/content/news";
import { dicts, asLocale } from "@/lib/i18n";
export function generateStaticParams() { return ["en", "ar"].flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug }))); }
export default async function Article({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const p = await params, lc = asLocale(p.locale), a = articles.find((x) => x.slug === p.slug);
  if (!a) notFound();
  const d = dicts[lc], n = d.newsPage, more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  return (
    <main>
      <article className="px-6 pb-16 pt-44 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Link href={`/${lc}/news`} className="text-sm text-[var(--acc)]"><span aria-hidden className="rtl:hidden">← </span><span aria-hidden className="hidden rtl:inline">→ </span>{n.back}</Link>
          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--mut)]"><span className="rounded-full bg-[var(--line)] px-3 py-1 text-[var(--fg)]">{cats[a.cat][lc]}</span>{fmt(a.date, lc)}</div>
          <h1 className="font-display mt-4 text-3xl font-bold md:text-5xl">{a.title[lc]}</h1>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#4C5BFF] to-[#2DD4BF]"><Photo src={px(a.photo, 1400)} /></div>
          <div className="mt-10 space-y-5 text-lg leading-relaxed">{a.body[lc].map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </article>
      <section className="px-6 pb-24 md:px-16">
        <h2 className="font-display text-2xl font-bold md:text-3xl">{n.more}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {more.map((x) => <Link key={x.slug} href={`/${lc}/news/${x.slug}`} className="glass block p-8 transition-transform hover:-translate-y-1"><span className="text-xs text-[var(--mut)]">{cats[x.cat][lc]} · {fmt(x.date, lc)}</span><h3 className="font-display mt-3 text-xl font-semibold">{x.title[lc]}</h3></Link>)}
        </div>
      </section>
      <Footer d={d} locale={lc} />
    </main>
  );
}
