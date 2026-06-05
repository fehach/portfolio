import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submission = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    ip: request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown",
  };

  try {
    await redis.lpush("portfolio:contact:submissions", JSON.stringify(submission));
    await redis.ltrim("portfolio:contact:submissions", 0, 99);
  } catch {
    return NextResponse.json(
      { error: "Failed to save your message. Please email me directly." },
      { status: 500 }
    );
  }

  // Optional: send email via Resend if configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ccie57675@gmail.com",
        subject: `Portfolio contact from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } catch {
      // Email sending is best-effort; submission already saved to Redis
    }
  }

  return NextResponse.json({ success: true });
}
