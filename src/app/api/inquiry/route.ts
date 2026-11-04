import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b) return NextResponse.json({ ok: false }, { status: 400 });
  if (b.website) return NextResponse.json({ ok: true }); // honeypot for bots
  const g = (k: string, n: number) => String(b[k] ?? "").trim().slice(0, n);
  const data = { name: g("name", 120), email: g("email", 160), phone: g("phone", 40), child: g("child", 120), grade: g("grade", 60), subject: g("subject", 120), type: g("type", 20), msg: g("msg", 1500) };
  if (!data.name || (!data.child && data.type !== "contact") || !/^\S+@\S+\.\S+$/.test(data.email)) return NextResponse.json({ ok: false }, { status: 422 });
  const url = process.env.INQUIRY_WEBHOOK_URL; // where inquiries are delivered (form service, Zapier, Make, your own endpoint)
  if (!url) return NextResponse.json({ ok: false, error: "INQUIRY_WEBHOOK_URL not set" }, { status: 503 });
  try {
    const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, at: new Date().toISOString() }) });
    return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
  } catch { return NextResponse.json({ ok: false }, { status: 502 }); }
}
