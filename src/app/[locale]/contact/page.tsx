import { MapPin, Phone, Mail, Clock, Plus } from "lucide-react";
import { Footer } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { dicts, asLocale } from "@/lib/i18n";
export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc]; const c = d.contact;
  const info = [[MapPin, c.address, lc === "ar" ? site.addressAr : site.address], [Phone, c.phone, site.phone], [Mail, c.email, site.email], [Clock, c.hours, lc === "ar" ? site.hoursAr : site.hours]].filter((x) => x[2]) as [typeof MapPin, string, string][];
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-12 pt-44 md:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 end-0 size-[34rem] rounded-full bg-[var(--acc)] opacity-20 blur-[120px]" />
        <p className="text-[var(--acc)]">{d.nav.contact}</p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{c.title}</h1>
        <p className="relative mt-6 max-w-xl text-lg text-[var(--mut)]">{c.intro}</p>
      </section>
      <section className={`grid gap-6 px-6 py-12 md:px-16 ${info.length ? "md:grid-cols-[1fr_1.5fr]" : "mx-auto max-w-3xl"}`}>
        {info.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">{c.info}</h2>
            {info.map(([I, label, v]) => (
              <div key={label} className="glass flex items-start gap-4 p-6"><I className="mt-1 shrink-0 text-[var(--acc)]" size={22} /><div><div className="text-sm text-[var(--mut)]">{label}</div><div dir={label === c.phone ? "ltr" : undefined} className="font-medium">{v}</div></div></div>
            ))}
            {site.socials.length > 0 && <div className="glass p-6"><div className="text-sm text-[var(--mut)]">{c.follow}</div><div className="mt-2 flex flex-wrap gap-4">{site.socials.map((s) => <a key={s.name} href={s.url} className="font-medium hover:text-[var(--acc)]">{s.name}</a>)}</div></div>}
          </div>
        )}
        <ContactForm d={d} />
      </section>
      {site.mapEmbed && (
        <section className="px-6 py-12 md:px-16">
          <h2 className="font-display text-3xl font-bold md:text-5xl">{c.mapTitle}</h2>
          <iframe title={c.mapTitle} src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-8 h-96 w-full rounded-[32px] border border-[var(--line)]" />
        </section>
      )}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display font-bold text-center">{c.faq.title}</h2>
          <div className="mt-8 space-y-3">
            {c.faq.items.map((x) => (
              <details key={x.q} className="glass group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg">{x.q}<Plus className="shrink-0 transition-transform group-open:rotate-45" size={20} /></summary>
                <p className="mt-3 text-[var(--mut)]">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer d={d} locale={lc} />
    </main>
  );
}
