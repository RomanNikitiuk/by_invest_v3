import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GAS_SCRIPT_URL!;
const SECRET     = process.env.GAS_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, telegram, location, question } = body;

    if (!name || !phone || !telegram || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const params = new URLSearchParams({
      secret:   SECRET,
      name,
      phone,
      telegram,
      location,
      question: question || "",
    });

    const url = `${SCRIPT_URL}?${params.toString()}`;
    console.log("[submit] GET →", url.replace(SECRET, "***"));

    const gasRes = await fetch(url, { method: "GET", redirect: "follow" });
    const gasText = await gasRes.text();
    console.log("[submit] GAS status:", gasRes.status, "| body:", gasText);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[submit] error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
