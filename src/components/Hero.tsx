"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, ArrowRight } from "lucide-react";
import type { Dict, Locale } from "@/lib/i18n";
import { photos } from "@/lib/photos";
import { Photo } from "./Interactive";
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
export default function Hero({ d, locale }: { d: Dict; locale: Locale }) {
  const r = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (reduced()) return;
    gsap.timeline().from(".w", { yPercent: 110, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out" })
      .from(".h", { y: 20, opacity: 0, stagger: 0.12, duration: 0.7 }, "-=0.4");
    gsap.to(".hero-shot", { yPercent: 8, ease: "none", scrollTrigger: { trigger: r.current, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".float", { y: -10, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.35 });
  }, { scope: r });
  const n = (v: number) => v.toLocaleString(locale === "ar" ? "ar-EG" : "en-US");
  return (
    <section ref={r} className="relative flex min-h-svh items-center overflow-hidden px-6 pb-20 pt-36">
      <div aria-hidden className="pointer-events-none absolute -top-40 start-1/4 size-[40rem] rounded-full bg-[var(--pri)] opacity-20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 end-0 size-[26rem] rounded-full bg-[var(--acc)] opacity-10 blur-[100px]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="h glass inline-flex items-center gap-2 px-4 py-1 text-sm"><Sparkles size={14} className="text-[var(--acc)]" />{d.hero.badge}</span>
          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.12] md:text-6xl">
            {d.hero.title.split(" ").map((w, i) => <span key={i} className="inline-block overflow-hidden align-bottom"><span className="w inline-block">{w}&nbsp;</span></span>)}
          </h1>
          <p className="h mt-6 max-w-md text-lg text-[var(--mut)]">{d.hero.sub}</p>
          <div className="h mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/admissions`} className="inline-flex items-center gap-2 rounded-full bg-[var(--acc)] px-6 py-3 font-semibold text-black transition-transform hover:scale-105">{d.hero.cta1}<ArrowRight size={16} className="rtl:-scale-x-100" /></Link>
            <a href="#programs" className="glass px-6 py-3 transition-colors hover:border-[var(--acc)]">{d.hero.cta2}</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md pb-10 md:pb-0">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[var(--line)] shadow-[0_30px_80px_rgba(16,20,38,.28)]">
            <div className="hero-shot absolute inset-0 scale-110"><Photo src={photos.hero.main} alt={d.hero.title} /></div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />
          </div>
          <div className="float glass-strong absolute -start-4 bottom-4 flex items-center gap-3 px-5 py-3 md:-start-8">
            <span className="font-display text-2xl font-bold text-[var(--acc)]">{n(d.stats[0].n)}</span>
            <span className="max-w-20 text-xs leading-tight text-[var(--mut)]">{d.stats[0].l}</span>
          </div>
          <div className="float glass-strong absolute end-3 top-5 hidden items-center gap-3 px-5 py-3 sm:flex">
            <span className="font-display text-2xl font-bold text-[var(--fg)]">{n(d.stats[3].n)}</span>
            <span className="max-w-24 text-xs leading-tight text-[var(--mut)]">{d.stats[3].l}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
