"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";
export default function InquiryForm({ d }: { d: Dict }) {
  const f = d.admissions.form, [s, setS] = useState<"idle" | "busy" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setS("busy");
    try {
      const r = await fetch("/api/inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      setS(r.ok ? "ok" : "err"); if (r.ok) form.reset();
    } catch { setS("err"); }
  }
  const inp = "mt-2 w-full rounded-2xl bg-[var(--line)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--acc)]";
  const F = ({ n, l, t = "text", req = false }: { n: string; l: string; t?: string; req?: boolean }) => <label className="block text-sm">{l}<input name={n} type={t} required={req} className={inp} /></label>;
  return (
    <form onSubmit={submit} className="glass grid gap-5 p-8 md:grid-cols-2 md:p-12">
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <F n="name" l={f.name} req /><F n="email" l={f.email} t="email" req /><F n="phone" l={f.phone} t="tel" /><F n="child" l={f.child} req />
      <label className="block text-sm md:col-span-2">{f.grade}<select name="grade" className={inp}>{d.academics.levels.items.map((x) => <option key={x.t} value={x.t}>{x.t} · {x.g}</option>)}</select></label>
      <label className="block text-sm md:col-span-2">{f.msg}<textarea name="msg" rows={4} maxLength={1500} className={inp} /></label>
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <button disabled={s === "busy"} className="rounded-full bg-[var(--acc)] px-8 py-3 font-semibold text-black disabled:opacity-60">{s === "busy" ? f.sending : f.send}</button>
        <p role="status" className={s === "err" ? "text-red-500" : "text-[var(--mut)]"}>{s === "ok" ? f.ok : s === "err" ? f.err : ""}</p>
      </div>
    </form>
  );
}
