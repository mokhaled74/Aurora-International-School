import { NextRequest, NextResponse } from "next/server";
const L = ["en", "ar"];
export function proxy(r: NextRequest) {
  const p = r.nextUrl.pathname;
  if (L.some((l) => p === `/${l}` || p.startsWith(`/${l}/`))) return NextResponse.next();
  const c = r.cookies.get("lang")?.value ?? "";
  const l = L.includes(c) ? c : r.headers.get("accept-language")?.startsWith("ar") ? "ar" : "en";
  return NextResponse.redirect(new URL(`/${l}${p === "/" ? "" : p}`, r.url));
}
export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
