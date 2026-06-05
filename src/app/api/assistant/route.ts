import Anthropic from "@anthropic-ai/sdk";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a Zero Trust and cybersecurity maturity advisor embedded in Federico Hach's portfolio. Federico is a CCIE Security #57675 with 16+ years of experience and 60+ enterprise deployments across LATAM.

Answer questions about:
- Zero Trust architecture principles and maturity assessment
- Microsegmentation and network segmentation strategy
- PCI-DSS compliance and controls
- Cisco Secure Workload (formerly Tetration) and Cisco security products
- Security automation and AI-driven security workflows
- CISSP domains and cybersecurity frameworks (NIST, ISO 27001, etc.)

Keep answers concise (3-5 sentences for simple questions, up to 10 for complex ones). Use technical language appropriate for security professionals. When relevant, mention how these concepts apply to real enterprise deployments. If asked something outside cybersecurity, politely redirect to security topics.`;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const rateLimitKey = `assistant:ratelimit:${ip}`;

  try {
    const requests = await redis.incr(rateLimitKey);
    if (requests === 1) {
      await redis.expire(rateLimitKey, 3600);
    }
    if (requests > 10) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in an hour." },
        { status: 429 }
      );
    }
  } catch {
    // Redis unavailable — allow the request
  }

  let question: string;
  try {
    const body = await request.json();
    question = String(body.question ?? "").trim().slice(0, 500);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!question) {
    return NextResponse.json({ error: "Question is required" }, { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "AI assistant not configured. Contact Federico directly." },
      { status: 503 }
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.create({
          model: "claude-haiku-4-5",
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: question }],
          stream: true,
        });

        for await (const event of response) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(
              new TextEncoder().encode(event.delta.text)
            );
          }
        }
        controller.close();
      } catch {
        controller.error(new Error("AI service unavailable"));
      }
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
