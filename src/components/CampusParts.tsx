"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Photo, grad } from "@/components/Interactive";
import { photos, px } from "@/lib/photos";
import type { Dict } from "@/lib/i18n";
const H2 = "font-display text-3xl font-bold md:text-5xl";
export function Explorer({ d }: { d: Dict }) {
  const c = d.campus, [i, setI] = useState(0);
  return (
    <section className="px-6 py-16 md:px-16">
      <h2 className={H2}>{c.exploreTitle}</h2>
      <div className="mt-12 flex flex-col gap-3 md:h-[30rem] md:flex-row">
        {c.items.slice(0, 4).map((x, k) => (
          <button key={x.t} onClick={() => setI(k)} onMouseEnter={() => setI(k)} onFocus={() => setI(k)} aria-expanded={k === i}
            className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${grad[k]} text-start text-white transition-[flex] duration-500 ${k === i ? "min-h-72 md:flex-[3]" : "min-h-24 md:flex-1"}`}>
            <Photo src={photos.campus[k]} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6"><h3 className="font-display text-xl font-semibold">{x.t}</h3>{k === i && <p className="mt-2 max-w-sm text-sm">{x.d}</p>}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
export function Gallery({ d }: { d: Dict }) {
  const g = d.campus.gallery, [o, setO] = useState<number | null>(null), [bad, setBad] = useState<number[]>([]);
  useEffect(() => { const f = (e: KeyboardEvent) => e.key === "Escape" && setO(null); addEventListener("keydown", f); return () => removeEventListener("keydown", f); }, []);
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className={H2}>{g.title}</h2>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 md:mt-12 md:columns-3">
        {photos.galleryIds.map((id, k) => (
          <button key={id} onClick={() => setO(k)} aria-label={g.view} className={`mb-4 block w-full overflow-hidden rounded-3xl bg-[var(--line)] ${k % 3 === 0 ? "aspect-[4/5]" : "aspect-square"} ${bad.includes(k) ? "hidden" : ""}`}>
            <img src={px(id, 700)} alt="" loading="lazy" decoding="async" onError={() => setBad((b) => [...b, k])} className="size-full object-cover transition-transform duration-500 hover:scale-105" />
          </button>
        ))}
      </div>
      {o !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" onClick={() => setO(null)}>
          <button aria-label={g.close} className="absolute end-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white"><X /></button>
          <img src={px(photos.galleryIds[o], 1600)} alt="" className="max-h-[85vh] max-w-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}
