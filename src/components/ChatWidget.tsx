"use client";
import { useEffect, useRef, useState } from "react";
import { Bot, X, Send } from "lucide-react";
import type { Dict, Locale } from "@/lib/i18n";
type M = { role: "user" | "assistant"; content: string };
export default function ChatWidget({ d, locale }: { d: Dict; locale: Locale }) {
  const [open, setOpen] = useState(false), [msgs, setMsgs] = useState<M[]>([]), [busy, setBusy] = useState(false), [q, setQ] = useState("");
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);
  async function send(t: string) {
    if (!t.trim() || busy) return;
    const next: M[] = [...msgs, { role: "user", content: t }]; setMsgs(next); setQ(""); setBusy(true);
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: next, locale }) });
      const j = await r.json(); setMsgs([...next, { role: "assistant", content: j.reply || d.chat.err }]);
    } catch { setMsgs([...next, { role: "assistant", content: d.chat.err }]); }
    setBusy(false);
  }
  const bub = "max-w-[85%] rounded-2xl px-4 py-2 text-sm";
  return (
    <div className="fixed bottom-6 end-6 z-50">
      <div className={`glass absolute bottom-20 end-0 flex h-[28rem] w-[calc(100vw-3rem)] max-w-sm origin-bottom-right flex-col overflow-hidden transition-all duration-300 rtl:origin-bottom-left ${open ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"}`} role="dialog" aria-label={d.chat.title} aria-hidden={!open}>
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
          <strong className="font-display">{d.chat.title}</strong>
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4" aria-live="polite">
          <div className={`${bub} bg-[var(--line)]`}>{d.chat.hello}</div>
          {msgs.map((m, i) => <div key={i} className={`${bub} ${m.role === "user" ? "self-end bg-[var(--pri)] text-white" : "bg-[var(--line)]"}`}>{m.content}</div>)}
          {busy && <div className={`${bub} bg-[var(--line)] animate-pulse`}>•••</div>}
          {!msgs.length && <div className="flex flex-wrap gap-2 pt-2">{d.chat.quick.map((s) => <button key={s} onClick={() => send(s)} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs hover:border-[var(--acc)]">{s}</button>)}</div>}
          <div ref={end} />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(q); }} className="flex gap-2 border-t border-[var(--line)] p-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={d.chat.ph} maxLength={500} className="min-w-0 flex-1 rounded-full bg-[var(--line)] px-4 py-2 text-sm outline-none" />
          <button className="grid size-10 place-items-center rounded-full bg-[var(--acc)] text-black" aria-label="Send"><Send size={16} className="rtl:-scale-x-100" /></button>
        </form>
      </div>
      <button onClick={() => setOpen(!open)} aria-label={d.chat.title} aria-expanded={open} className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-[var(--pri)] to-[var(--acc)] text-white shadow-[0_0_30px_var(--pri)] transition-transform hover:scale-105">
        {open ? <X /> : <Bot />}
      </button>
    </div>
  );
}
