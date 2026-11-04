"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Dict } from "@/lib/i18n";
import { photos } from "@/lib/photos";
import { Photo } from "./Interactive";
export default function Programs({ d }: { d: Dict }) {
  const r = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const m = gsap.matchMedia();
    m.add("(prefers-reduced-motion:no-preference)", () => {
      const t = track.current!, rtl = document.dir === "rtl";
      const dist = () => t.scrollWidth - innerWidth;
      // phones travel the same distance over a shorter scroll so the section is less tall
      const span = () => dist() * (innerWidth < 768 ? 0.7 : 1);
      gsap.to(t, { x: () => (rtl ? dist() : -dist()), ease: "none", scrollTrigger: { trigger: r.current, pin: true, scrub: 1, end: () => "+=" + Math.max(span(), 0), invalidateOnRefresh: true, anticipatePin: 1 } });
    });
    return () => m.revert();
  }, { scope: r });
  return (
    <section id="programs" ref={r} className="flex min-h-svh flex-col justify-center overflow-hidden py-16 md:py-20">
      <h2 data-reveal className="font-display px-6 text-3xl font-bold md:px-16 md:text-5xl">{d.programs.title}</h2>
      <div ref={track} className="flex w-max gap-6 px-6 pt-10 md:px-16 md:pt-12">
        {d.programs.items.map((p, i) => (
          <article key={p.t} className="group relative flex min-h-[24rem] w-[80vw] shrink-0 flex-col justify-end overflow-hidden rounded-[32px] bg-gradient-to-br from-[var(--pri)] to-[var(--acc)] p-8 text-white transition-transform hover:-translate-y-2 md:w-[26rem]">
            <Photo src={photos.programs[i]} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="relative">
              <div className="font-display text-5xl font-bold text-[var(--acc)]">0{i + 1}</div>
              <h3 className="font-display mt-6 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 max-w-xs text-sm text-white/80">{p.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
