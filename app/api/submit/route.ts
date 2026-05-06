import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL      = process.env.GAS_SCRIPT_URL!;
const SECRET          = process.env.GAS_SECRET!;
const TG_BOT_TOKEN    = process.env.TG_BOT_TOKEN!;
const TG_CHAT_ID      = process.env.TG_CHAT_ID!;

async function sendTelegram(name: string, phone: string, telegram: string, location: string, question: string) {
  const text = [
    `🔔 *Нова заявка на консультацію*`,
    ``,
    `👤 *Ім'я:* ${name}`,
    `📞 *Телефон:* ${phone}`,
    `✈️ *Telegram:* @${telegram.replace("@", "")}`,
    `📍 *Локація:* ${location}`,
    question ? `💬 *Запит:* ${question}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, telegram, location, question } = body;

    if (!name || !phone || !telegram || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Записати в Google Sheets
    const params = new URLSearchParams({
      secret: SECRET,
      name,
      phone,
      telegram,
      location,
      question: question || "",
    });

    const gasRes = await fetch(`${SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });
    const gasText = await gasRes.text();
    console.log("[submit] GAS status:", gasRes.status, "| body:", gasText);

    // Відправити в Telegram
    await sendTelegram(name, phone, telegram, location, question || "");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[submit] error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
