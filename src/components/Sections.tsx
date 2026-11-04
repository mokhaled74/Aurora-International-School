import Link from "next/link";
import { Heart, Cpu, Languages, ShieldCheck, GraduationCap, Layers, Award, CalendarDays, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Dict, Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { articles, cats, events, fmt } from "@/content/news";
import { photos, px } from "@/lib/photos";
import { Photo } from "@/components/Interactive";
const icons = [Heart, Cpu, Languages, ShieldCheck, GraduationCap, Layers];
const H2 = "font-display text-3xl font-bold md:text-5xl";
export function Marquee({ d }: { d: Dict }) {
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-5 ltr:mt-12" aria-hidden>
      <div className="marquee flex w-max font-display text-2xl">
        {[...d.marquee, ...d.marquee].map((t, i) => <span key={i} className="whitespace-nowrap px-6">{t} <span className="text-[var(--acc)]">✦</span></span>)}
      </div>
    </div>
  );
}
export function Why({ d }: { d: Dict }) {
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className={H2} data-reveal>{d.why.title}</h2>
      <div data-stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {d.why.items.map((x, i) => { const I = icons[i]; return (
          <article key={x.t} data-reveal className={`glass p-8 transition-transform hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : i === 5 ? "md:col-span-3" : ""}`}>
            <span className="grid size-12 place-items-center rounded-2xl bg-[var(--acc)] text-black"><I size={24} /></span>
            <h3 className="font-display mt-6 text-xl font-semibold">{x.t}</h3>
            <p className="mt-2 text-[var(--mut)]">{x.d}</p>
          </article>
        ); })}
      </div>
    </section>
  );
}
export function Gallery({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section className="px-6 py-24 md:px-16">
      <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[var(--acc)]">{d.nav.campus}</p>
          <h2 className={`${H2} mt-2`}>{d.campus.gallery.title}</h2>
        </div>
        <Link href={`/${locale}/campus`} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold transition-colors hover:border-[var(--acc)] hover:text-[var(--acc)]">{d.nav.campus}<ArrowRight size={16} className="rtl:-scale-x-100" /></Link>
      </div>
      <div data-stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
        {photos.galleryIds.slice(0, 9).map((id, i) => (
          <Link key={id} data-reveal href={`/${locale}/campus`} className="group relative aspect-square overflow-hidden rounded-2xl bg-[var(--line)] md:rounded-[24px]">
            <Photo src={px(id)} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <span className="absolute bottom-2.5 start-2.5 font-display text-[11px] font-semibold text-white md:bottom-4 md:start-4 md:text-sm">{d.campus.items[[0, 1, 2, 3, 4, 0, 1, 2, 3][i]].t}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function Accreditations({ d }: { d: Dict }) {
  return (
    <section className="px-6 pb-8 md:px-16">
      <div data-reveal className="glass mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-8 py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--mut)]">{d.about.awards.title}</p>
        {d.about.awards.items.map((t) => <span key={t} className="inline-flex items-center gap-2 font-display text-base md:text-lg"><Award size={18} className="text-[var(--acc)]" />{t}</span>)}
      </div>
    </section>
  );
}
export function News({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section className="px-6 py-24 md:px-16">
      <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
        <h2 className={H2}>{d.news.title}</h2>
        <Link href={`/${locale}/news`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--acc)] hover:underline">{d.newsPage.more}<ArrowRight size={16} className="rtl:-scale-x-100" /></Link>
      </div>
      <div data-stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {articles.slice(0, 3).map((a) => (
          <Link key={a.slug} data-reveal href={`/${locale}/news/${a.slug}`} className="group glass block overflow-hidden transition-transform hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Photo src={px(a.photo, 800)} />
              <span className="absolute top-4 start-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{cats[a.cat][locale]}</span>
            </div>
            <div className="p-6">
              <p className="text-xs font-medium text-[var(--mut)]">{fmt(a.date, locale)}</p>
              <h3 className="font-display mt-3 text-xl font-semibold">{a.title[locale]}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-[var(--mut)]">{a.excerpt[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10" data-reveal>
        <h3 className="font-display text-lg font-semibold">{d.newsPage.eventsTitle}</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {events.slice(0, 4).map((e) => (
            <div key={e.date + e.title.en} className="glass flex items-center gap-4 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--acc)] text-black"><CalendarDays size={18} /></span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{e.title[locale]}</p>
                <p className="text-xs text-[var(--mut)]">{fmt(e.date, locale, { day: "numeric", month: "long" })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CTA({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10">
        <Photo src={photos.banner} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070B16]/95 via-[#0A0F1F]/85 to-[#241435]/75" />
        <div aria-hidden className="pointer-events-none absolute -end-16 -top-24 size-72 rounded-full bg-[var(--acc)] opacity-25 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -start-10 size-72 rounded-full bg-[var(--pri)] opacity-25 blur-[100px]" />
        <div className="relative px-6 py-20 text-center md:px-12 md:py-24">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">{d.hero.badge}</span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display font-bold text-white">{d.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{d.cta.sub}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={`/${locale}/admissions`} className="rounded-full bg-[var(--acc)] px-7 py-3 font-semibold text-black transition-transform hover:scale-105">{d.cta.btn}</Link>
            <Link href={`/${locale}/contact`} className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10">{d.cta.secondary}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer({ d, locale }: { d: Dict; locale: Locale }) {
  const explore = [["", d.nav.home], ["about", d.nav.about], ["academics", d.nav.academics], ["admissions", d.nav.admissions]];
  const community = [["campus", d.nav.campus], ["student", d.nav.student], ["news", d.nav.news], ["contact", d.nav.contact]];
  const name = locale === "ar" ? site.nameAr : site.name;
  const address = locale === "ar" ? site.addressAr : site.address;
  const hours = locale === "ar" ? site.hoursAr : site.hours;
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--glass)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <div className="font-display text-2xl font-bold">{name}<span className="text-[var(--acc)]">.</span></div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--mut)]">{d.footer.blurb}</p>
            {site.socials.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{site.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-1.5 text-xs font-semibold transition-colors hover:border-[var(--acc)] hover:text-[var(--acc)]">{s.name}</a>
            ))}</div>}
          </div>
          {[{ title: d.footer.explore, items: explore }, { title: d.footer.community, items: community }].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--mut)]">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">{col.items.map(([k, t]) => (
                <li key={k}><Link href={k ? `/${locale}/${k}` : `/${locale}`} className="transition-colors hover:text-[var(--acc)]">{t}</Link></li>
              ))}</ul>
            </nav>
          ))}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--mut)]">{d.footer.contact}</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--mut)]">
              {address && <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[var(--acc)]" /><span>{address}</span></li>}
              {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3 transition-colors hover:text-[var(--acc)]"><Phone size={16} className="mt-0.5 shrink-0 text-[var(--acc)]" /><span dir="ltr" className="text-start">{site.phone}</span></a></li>}
              {site.email && <li><a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-[var(--acc)]"><Mail size={16} className="mt-0.5 shrink-0 text-[var(--acc)]" /><span>{site.email}</span></a></li>}
              {hours && <li className="flex gap-3"><Clock size={16} className="mt-0.5 shrink-0 text-[var(--acc)]" /><span>{hours}</span></li>}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--mut)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {name}. {d.footer.rights}</p>
          <p className="inline-flex items-center gap-2 text-[var(--acc)]"><Award size={14} />{d.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
