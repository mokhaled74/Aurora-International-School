"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { photos } from "@/lib/photos";
const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const H2 = "font-display text-3xl font-bold md:text-5xl";
export const grad = ["from-[#4C5BFF] to-[#2DD4BF]", "from-[#FFB547] to-[#F2603A]", "from-[#2DD4BF] to-[#4C5BFF]", "from-[#9B5DE5] to-[#FFB547]"];
export function Photo({ src, pos = "center", alt = "" }: { src: string; pos?: string; alt?: string }) {
  const [ok, setOk] = useState(!!src);
  return ok ? <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setOk(false)} className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" style={{ objectPosition: pos }} /> : null;
}
export function Philosophy({ d, k = d.philosophy.k, text = d.philosophy.text }: { d: Dict; k?: string; text?: string }) {
  const r = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (still()) return;
    gsap.fromTo(".pw", { opacity: 0.35 }, { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: r.current, start: "top 75%", end: "bottom 60%", scrub: true } });
    gsap.to(".philo-img", { yPercent: 10, ease: "none", scrollTrigger: { trigger: r.current, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: r });
  return (
    <section ref={r} className="px-6 py-24 md:px-16">
      <div data-reveal className="group relative mx-auto min-h-[26rem] max-w-6xl overflow-hidden rounded-[40px] md:min-h-[34rem]">
        <div className="philo-img absolute inset-0 scale-110"><Photo src={photos.banner} /></div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/90 via-[#0A0F1F]/45 to-[#0A0F1F]/20" />
        <div className="relative flex min-h-[26rem] flex-col justify-end p-8 md:min-h-[34rem] md:p-12">
          <p className="text-[var(--acc)]">{k}</p>
          <p className="font-display mt-4 max-w-4xl text-2xl font-semibold leading-snug text-white md:text-4xl">{text.split(" ").map((w, i) => <span key={i} className="pw">{w} </span>)}</p>
        </div>
      </div>
    </section>
  );
}
export function Facilities({ d }: { d: Dict }) {
  const [i, setI] = useState(0); const p = useRef<HTMLDivElement>(null); const f = d.facilities;
  useEffect(() => { if (!still()) gsap.fromTo(p.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.out" }); }, [i]);
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className={H2} data-reveal>{f.title}</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div role="tablist" className="flex flex-col gap-3">
          {f.items.map((x, k) => (
            <button key={x.t} role="tab" aria-selected={k === i} onClick={() => setI(k)} className={`glass p-5 text-start transition-colors hover:border-[var(--acc)] ${k === i ? "ring-2 ring-[var(--acc)]" : ""}`}>
              <strong className="font-display text-xl">{x.t}</strong>{k === i && <p className="mt-2 text-[var(--mut)]">{x.d}</p>}
            </button>
          ))}
        </div>
        <div ref={p} role="tabpanel" className={`group relative min-h-80 overflow-hidden rounded-[32px] bg-gradient-to-br ${grad[i]}`}>
          <Photo key={photos.facilities[i]} src={photos.facilities[i]} />
          <span className="absolute bottom-4 start-4 rounded-full bg-black/50 px-4 py-1 text-sm text-white">{f.items[i].t}</span>
        </div>
      </div>
    </section>
  );
}
export function Life({ d }: { d: Dict }) {
  const r = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (still()) return;
    gsap.utils.toArray<HTMLElement>(".px").forEach((el, i) => gsap.to(el, { yPercent: i % 2 ? -6 : 6, ease: "none", scrollTrigger: { trigger: el, scrub: true } }));
  }, { scope: r });
  return (
    <section ref={r} className="overflow-hidden px-6 py-24 md:px-16">
      <h2 className={H2} data-reveal>{d.life.title}</h2>
      <div data-stagger className="mt-12 grid gap-6 md:grid-cols-4">
        {d.life.items.map((x, i) => (
          <article key={x.t} data-reveal className={`px group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-[32px] bg-gradient-to-br ${grad[i]} p-6 text-white ${i % 2 ? "md:mt-12" : ""}`}>
            <Photo src={photos.life[i]} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <h3 className="font-display relative text-xl font-semibold">{x.t}</h3><p className="relative text-sm text-white/85">{x.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Testimonials({ d }: { d: Dict }) {
  const t = d.testimonials, n = t.items.length, [i, setI] = useState(0), x = t.items[i];
  const b = "grid size-11 place-items-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--acc)] hover:text-[var(--acc)]";
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className={H2} data-reveal>{t.title}</h2>
      <div data-reveal className="glass mx-auto mt-12 max-w-3xl p-10 text-center" aria-live="polite">
        <div key={i} className="anim-fade">
          <p className="font-display text-2xl md:text-3xl">“{x.q}”</p>
          <p className="mt-6 font-semibold">{x.n}</p><p className="text-sm text-[var(--mut)]">{x.r}</p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <button className={b} aria-label="Previous" onClick={() => setI((i + n - 1) % n)}><ChevronLeft className="rtl:-scale-x-100" /></button>
          <button className={b} aria-label="Next" onClick={() => setI((i + 1) % n)}><ChevronRight className="rtl:-scale-x-100" /></button>
        </div>
      </div>
    </section>
  );
}
