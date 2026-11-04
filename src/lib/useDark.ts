"use client";
import { useEffect, useState } from "react";
export function useDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement, f = () => setDark(el.classList.contains("dark"));
    f(); const o = new MutationObserver(f);
    o.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => o.disconnect();
  }, []);
  return dark;
}
