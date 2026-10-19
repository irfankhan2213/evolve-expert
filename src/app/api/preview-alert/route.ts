import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, clientName, timestamp, userAgent, referrer } = body;

    console.info(`[EvolveExpert Outreach Engine] Prospect Viewed Preview:`, {
      slug,
      clientName: clientName || slug,
      timestamp: timestamp || new Date().toISOString(),
      referrer: referrer || "direct",
    });

    return NextResponse.json({
      received: true,
      alertDispatched: true,
      status: "acknowledged",
    });
  } catch (error) {
    console.error("[EvolveExpert Outreach Engine] Alert error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch preview alert." },
      { status: 500 }
    );
  }
}
