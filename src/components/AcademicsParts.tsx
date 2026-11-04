"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Dict } from "@/lib/i18n";
const H2 = "font-display text-3xl font-bold md:text-5xl";
export function Curriculum({ d }: { d: Dict }) {
  const c = d.academics.curriculum, [i, setI] = useState(0);
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className={H2}>{c.title}</h2><p className="mt-2 text-sm text-[var(--mut)]">{c.note}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div role="tablist" className="flex flex-wrap gap-3 md:flex-col">
          {c.items.map((x, k) => <button key={x.t} role="tab" aria-selected={k === i} onClick={() => setI(k)} className={`glass px-5 py-4 text-start font-display text-lg ${k === i ? "ring-2 ring-[var(--acc)]" : ""}`}>{x.t}</button>)}
        </div>
        <div role="tabpanel" aria-live="polite" className="glass flex min-h-56 flex-col justify-center p-10">
          <h3 className="font-display text-2xl font-semibold">{c.items[i].t}</h3><p className="mt-4 text-lg text-[var(--mut)]">{c.items[i].d}</p>
        </div>
      </div>
    </section>
  );
}
export function Method({ d }: { d: Dict }) {
  const m = d.academics.method, r = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".ms", { opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: r.current, start: "top 75%" } });
  }, { scope: r });
  return (
    <section ref={r} className="px-6 py-24 md:px-16">
      <h2 className={H2}>{m.title}</h2>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {m.items.map((x, i) => (
          <article key={x.t} className="ms glass p-8"><div className="font-display text-5xl font-bold text-[var(--acc)]">0{i + 1}</div><h3 className="font-display mt-6 text-xl font-semibold">{x.t}</h3><p className="mt-2 text-[var(--mut)]">{x.d}</p></article>
        ))}
      </div>
    </section>
  );
}
