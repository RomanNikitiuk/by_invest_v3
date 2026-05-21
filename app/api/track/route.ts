import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GAS_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json({ error: "GAS_SCRIPT_URL not set" }, { status: 500 });
  }

  try {
    const body = await req.json();

    // Forward to Google Apps Script
    await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: body.event ?? "",
        location: body.location ?? "",
        tariff: body.tariff ?? "",
        section: body.section ?? "",
        direction: body.direction ?? "",
        module: body.module ?? "",
        question_idx: body.question_idx ?? "",
        timestamp: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track API error:", err);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
