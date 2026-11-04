import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const lang = body.locale === "ar" ? "ar" : "en";
  const messages = (Array.isArray(body.messages) ? body.messages : []).slice(-10).map((m: { role: string; content: unknown }) => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 1000) }));
  if (!messages.length) return NextResponse.json({ reply: "", demo: true }, { status: 400 });
  const key = process.env.ANTHROPIC_API_KEY;
  if (key) {
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
        body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5", max_tokens: 500, messages,
          system: `You are the admissions assistant on a school website. Reply briefly in ${lang === "ar" ? "Arabic" : "English"}. Use ONLY the school facts below; if something isn't covered, say you don't know and point to the contact page. SCHOOL FACTS: ${process.env.SCHOOL_FACTS || "none provided"}` }),
      });
      if (r.ok) { const j = await r.json(); return NextResponse.json({ reply: j.content?.[0]?.text ?? "", demo: false }); }
    } catch {}
  }
  return NextResponse.json({ reply: lang === "ar" ? "لا أستطيع تقديم تفاصيل محددة الآن. يسعد فريق القبول بمساعدتك — يرجى استخدام نموذج الاستفسار في صفحة القبول." : "I can't share specific details right now. Our admissions team will be glad to help — please use the inquiry form on the Admissions page.", demo: false });
}
