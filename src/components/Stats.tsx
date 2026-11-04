"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Dict, Locale } from "@/lib/i18n";
export default function Stats({ d, locale }: { d: Dict; locale: Locale }) {
  const r = useRef<HTMLElement>(null); const fmt = (n: number) => Math.round(n).toLocaleString(locale === "ar" ? "ar-EG" : "en-US");
  useGSAP(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.utils.toArray<HTMLElement>(".n").forEach((el) => {
      const to = Number(el.dataset.to); if (still) { el.textContent = fmt(to); return; }
      const o = { v: 0 };
      gsap.to(o, { v: to, duration: 2, ease: "power2.out", immediateRender: false, scrollTrigger: { trigger: el, start: "top 85%", once: true }, onUpdate: () => { el.textContent = fmt(o.v); } });
    });
  }, { scope: r });
  return (
    <section ref={r} className="px-6 py-24">
      <div data-stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {d.stats.map((s) => (
          <div key={s.l} data-reveal className="glass p-6 transition-transform hover:-translate-y-1 lg:p-8">
            <div className="n font-display text-4xl font-bold text-[var(--acc)] md:text-5xl" data-to={s.n}>{fmt(s.n)}</div>
            <div className="mt-2 text-sm text-[var(--mut)]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
