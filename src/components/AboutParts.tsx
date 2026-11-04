"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Dict } from "@/lib/i18n";
export function Timeline({ d }: { d: Dict }) {
  const r = useRef<HTMLElement>(null); const h = d.about.history;
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray<HTMLElement>(".ti").forEach((el) => gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }));
    gsap.fromTo(".tl", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: r.current, start: "top 60%", end: "bottom 70%", scrub: true } });
  }, { scope: r });
  return (
    <section ref={r} className="px-6 py-24 md:px-16">
      <h2 className="font-display text-3xl font-bold md:text-5xl">{h.title}</h2><p className="mt-2 text-sm text-[var(--mut)]">{h.note}</p>
      <div className="relative mt-12 max-w-3xl">
        <div aria-hidden className="tl absolute start-3 top-0 h-full w-px origin-top bg-[var(--acc)]" />
        {h.items.map((x) => (
          <article key={x.t} className="ti relative pb-12 ps-12">
            <span aria-hidden className="absolute start-0 top-1 size-6 rounded-full border-4 border-[var(--bg)] bg-[var(--acc)]" />
            <div className="text-sm font-semibold text-[var(--acc)]">{x.y}</div>
            <h3 className="font-display mt-1 text-xl font-semibold">{x.t}</h3><p className="mt-2 text-[var(--mut)]">{x.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
