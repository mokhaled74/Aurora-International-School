"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";
export function Clubs({ d }: { d: Dict }) {
  const c = d.student.clubs, [f, setF] = useState("all"), keys = Object.keys(c.filters) as (keyof typeof c.filters)[];
  return (
    <section className="px-6 py-24 md:px-16">
      <h2 className="font-display text-3xl font-bold md:text-5xl">{c.title}</h2>
      <div role="group" className="mt-8 flex flex-wrap gap-2">
        {keys.map((k) => <button key={k} aria-pressed={f === k} onClick={() => setF(k)} className={`rounded-full border border-[var(--line)] px-5 py-2 text-sm transition ${f === k ? "bg-[var(--acc)] text-black" : "hover:border-[var(--acc)]"}`}>{c.filters[k]}</button>)}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4" aria-live="polite">
        {c.items.filter((x) => f === "all" || x.c === f).map((x) => (
          <article key={x.t} className="glass p-8 transition-transform hover:-translate-y-1"><h3 className="font-display text-xl font-semibold">{x.t}</h3><p className="mt-2 text-[var(--mut)]">{x.d}</p></article>
        ))}
      </div>
    </section>
  );
}
