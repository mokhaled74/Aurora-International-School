"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";
export default function ContactForm({ d }: { d: Dict }) {
  const f = d.contact.form, [s, setS] = useState<"idle" | "busy" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setS("busy");
    try {
      const r = await fetch("/api/inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), type: "contact" }) });
      setS(r.ok ? "ok" : "err"); if (r.ok) form.reset();
    } catch { setS("err"); }
  }
  const inp = "mt-2 w-full rounded-2xl bg-[var(--line)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--acc)]";
  return (
    <form onSubmit={submit} className="glass grid gap-5 p-8 md:grid-cols-2 md:p-10">
      <h2 className="font-display text-2xl font-semibold md:col-span-2">{f.title}</h2>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="block text-sm">{f.name}<input name="name" required className={inp} /></label>
      <label className="block text-sm">{f.email}<input name="email" type="email" required className={inp} /></label>
      <label className="block text-sm">{f.phone}<input name="phone" type="tel" className={inp} /></label>
      <label className="block text-sm">{f.subject}<input name="subject" className={inp} /></label>
      <label className="block text-sm md:col-span-2">{f.msg}<textarea name="msg" required rows={5} maxLength={1500} className={inp} /></label>
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <button disabled={s === "busy"} className="rounded-full bg-[var(--acc)] px-8 py-3 font-semibold text-black disabled:opacity-60">{s === "busy" ? f.sending : f.send}</button>
        <p role="status" className={s === "err" ? "text-red-500" : "text-[var(--mut)]"}>{s === "ok" ? f.ok : s === "err" ? f.err : ""}</p>
      </div>
    </form>
  );
}
