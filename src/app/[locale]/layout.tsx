import "../globals.css";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";
import { dicts, asLocale } from "@/lib/i18n";
import { site } from "@/content/site";
const f1 = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const f2 = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });
const f3 = Cairo({ subsets: ["arabic", "latin"], variable: "--font-ar" });
export function generateStaticParams() { return [{ locale: "en" }, { locale: "ar" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc];
  return {
    title: `${site.name} — ${d.hero.title}`,
    description: d.hero.sub,
    alternates: { canonical: `/${lc}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: { title: `${site.name} — ${d.hero.title}`, description: d.hero.sub, locale: lc, type: "website" },
  };
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const lc = asLocale((await params).locale); const d = dicts[lc];
  return (
    <html lang={lc} dir={lc === "ar" ? "rtl" : "ltr"} suppressHydrationWarning className={`${f1.variable} ${f2.variable} ${f3.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}` }} /></head>
      <body suppressHydrationWarning>
        <Providers><Navbar d={d} locale={lc} />{children}<BackToTop label={d.backToTop} /><ChatWidget d={d} locale={lc} /></Providers>
      </body>
    </html>
  );
}
