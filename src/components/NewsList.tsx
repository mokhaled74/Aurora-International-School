"use client";
import { useState } from "react";
import Link from "next/link";
import { Photo, grad } from "@/components/Interactive";
import { px } from "@/lib/photos";
export type Card = { slug: string; cat: string; catLabel: string; title: string; excerpt: string; date: string; photo: number };
export default function NewsList({ items, filters, locale, read }: { items: Card[]; filters: { k: string; l: string }[]; locale: string; read: string }) {
  const [f, setF] = useState("all");
  return (
    <>
      <div role="group" className="mt-8 flex flex-wrap gap-2">
        {filters.map((x) => <button key={x.k} aria-pressed={f === x.k} onClick={() => setF(x.k)} className={`rounded-full border border-[var(--line)] px-5 py-2 text-sm transition ${f === x.k ? "bg-[var(--acc)] text-black" : "hover:border-[var(--acc)]"}`}>{x.l}</button>)}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3" aria-live="polite">
        {items.filter((x) => f === "all" || x.cat === f).map((x, i) => (
          <Link key={x.slug} href={`/${locale}/news/${x.slug}`} className="glass group block overflow-hidden transition-transform hover:-translate-y-1">
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${grad[i % 4]}`}><Photo src={px(x.photo, 700)} /></div>
            <div className="p-6"><div className="flex items-center gap-3 text-xs text-[var(--mut)]"><span className="rounded-full bg-[var(--line)] px-3 py-1 text-[var(--fg)]">{x.catLabel}</span>{x.date}</div>
              <h3 className="font-display mt-4 text-xl font-semibold">{x.title}</h3><p className="mt-2 text-[var(--mut)]">{x.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--acc)]">{read} →</span></div>
          </Link>
        ))}
      </div>
    </>
  );
}
