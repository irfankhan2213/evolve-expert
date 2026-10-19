import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contactInfo, source, name, email, website } = body;

    const contactStr = contactInfo || email || "";
    if (!contactStr && !website) {
      return NextResponse.json(
        { error: "Please provide a valid website URL or contact email/phone." },
        { status: 400 }
      );
    }

    // Lead scoring heuristic
    let score = 70;
    if (contactStr.includes("@")) score += 10;
    if (contactStr.match(/\+?[0-9]{8,15}/)) score += 15;
    if (contactStr.includes("http") || (website && website.includes("."))) score += 15;

    console.info(`[EvolveExpert Lead Engine] Lead Received:`, {
      contact: contactStr,
      website: website || "N/A",
      source: source || "web_intake",
      leadScore: score,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      leadScore: score,
      previewSlug: "apex-dental",
      message: "Lead received successfully. Custom prototype initiated.",
      estimatedTurnaround: "24 hours",
    });
  } catch (error) {
    console.error("[EvolveExpert Lead Engine] Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error processing request." },
      { status: 500 }
    );
  }
}
