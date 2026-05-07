import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields (name, email, message)." },
      { status: 400 },
    );
  }

  // Placeholder integration hook:
  // - send to CRM
  // - enqueue to your sales pipeline
  // - notify Slack/email
  // Keep response minimal to avoid leaking data.
  return NextResponse.json({ ok: true });
}

