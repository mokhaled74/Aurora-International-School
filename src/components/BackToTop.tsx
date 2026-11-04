"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function BackToTop({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(scrollY > 600);
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <button
      onClick={() => scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      aria-label={label} tabIndex={on ? 0 : -1}
      className={`fixed bottom-6 start-6 z-40 grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--nav-strong)] text-[var(--fg)] shadow-[0_10px_30px_rgba(16,20,38,.18)] backdrop-blur transition-all duration-300 hover:border-[var(--acc)] hover:text-[var(--acc)] ${on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
