"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDark } from "@/lib/useDark";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import type { Dict, Locale } from "@/lib/i18n";
import { site } from "@/content/site";
export default function Navbar({ d, locale }: { d: Dict; locale: Locale }) {
  const path = usePathname(); const dark = useDark();
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => {
      setScrolled(scrollY > 24);
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    };
    f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);
  useEffect(() => setOpen(false), [path]);
  const other = locale === "en" ? "ar" : "en"; const rest = path.replace(/^\/(en|ar)/, "");
  const links = [["", d.nav.home], ["about", d.nav.about], ["academics", d.nav.academics], ["admissions", d.nav.admissions], ["campus", d.nav.campus], ["student", d.nav.student], ["news", d.nav.news], ["contact", d.nav.contact]];
  const href = (k: string) => (k ? `/${locale}/${k}` : `/${locale}`);
  const active = (k: string) => (k ? path === `/${locale}/${k}` || path.startsWith(`/${locale}/${k}/`) : path === `/${locale}`);
  const btn = "grid size-10 place-items-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--acc)] hover:text-[var(--acc)]";
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4">
      <div ref={bar} aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left bg-[var(--acc)]" style={{ transform: "scaleX(0)" }} />
      <nav className={`nav-glass mx-auto flex max-w-6xl items-center justify-between px-4 md:px-5 ${scrolled ? "is-scrolled py-2" : "py-3"}`} aria-label="Main">
        <Link href={`/${locale}`} className="font-display text-xl font-bold">{locale === "ar" ? site.shortNameAr : site.shortName}<span className="text-[var(--acc)]">.</span></Link>
        <ul className="hidden gap-4 lg:flex xl:gap-6">{links.map(([k, t]) => (
          <li key={k}><Link href={href(k)} aria-current={active(k) ? "page" : undefined} className={`group relative text-[13px] transition-colors hover:text-[var(--acc)] xl:text-sm ${active(k) ? "text-[var(--acc)]" : ""}`}>
            {t}<span className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[var(--acc)] transition-transform duration-300 ${active(k) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
          </Link></li>
        ))}</ul>
        <div className="flex items-center gap-2">
          <a href={`/${other}${rest}`} onClick={() => { document.cookie = `lang=${other};path=/;max-age=31536000`; }} className={`${btn} text-sm font-semibold`} hrefLang={other} aria-label="Switch language">{other === "ar" ? "ع" : "EN"}</a>
          <button className={btn} aria-label="Toggle theme" onClick={() => { document.documentElement.classList.toggle("dark", !dark); try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch {} }}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <Link href={`/${locale}/admissions`} className="hidden rounded-full bg-[var(--acc)] px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 lg:block">{d.nav.apply}</Link>
          <button className={`${btn} lg:hidden`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      <div aria-hidden={!open} inert={!open} className={`nav-glass nav-panel fixed inset-x-3 top-[5.5rem] z-40 flex origin-top flex-col gap-5 p-7 transition-all duration-300 lg:hidden ${open ? "scale-100 opacity-100" : "pointer-events-none -translate-y-3 scale-95 opacity-0"}`}>
        {links.map(([k, t]) => <Link key={k} href={href(k)} onClick={() => setOpen(false)} aria-current={active(k) ? "page" : undefined} className={`font-display text-2xl ${active(k) ? "text-[var(--acc)]" : ""}`}>{t}</Link>)}
        <Link href={`/${locale}/admissions`} className="mt-2 rounded-full bg-[var(--acc)] px-5 py-3 text-center font-semibold text-black">{d.nav.apply}</Link>
      </div>
    </header>
  );
}
