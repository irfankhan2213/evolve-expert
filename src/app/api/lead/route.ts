import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contactInfo, source, name, email, website, phone, budget, notes } = body;

    const contactStr = contactInfo || email || phone || "";
    if (!contactStr && !website) {
      return NextResponse.json(
        { error: "Please provide a valid website URL or contact email/phone." },
        { status: 400 }
      );
    }

    // Lead scoring heuristic
    let score = 70;
    if (contactStr.includes("@")) score += 10;
    if (contactStr.match(/\+?[0-9]{8,15}/) || (phone && phone.match(/\+?[0-9]{8,15}/))) score += 15;
    if (contactStr.includes("http") || (website && website.includes("."))) score += 15;

    const leadPayload = {
      name: name || "Prospect",
      contact: contactStr,
      phone: phone || "N/A",
      website: website || "N/A",
      budget: budget || "Lead-to-Booking Core System ($2,500)",
      notes: notes || "None",
      source: source || "web_intake",
      leadScore: score,
      timestamp: new Date().toISOString(),
    };

    console.info(`[EvolveExpert Lead Engine] Lead Received:`, leadPayload);

    // 1. Direct Hostinger Reach API Contact Ingestion
    const hostingerToken =
      process.env.HOSTINGER_REACH_API_TOKEN ||
      process.env.HOSTINGER_API_TOKEN ||
      process.env.HOSTINGER_MAIL_API_TOKEN;
    const reachProfileId =
      process.env.HOSTINGER_REACH_PROFILE_ID ||
      process.env.HOSTINGER_REACH_PROFILE_UUID ||
      "a8f74fcc-ed27-4f6e-9438-76013da4692d";

    const emailMatch = contactStr.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (hostingerToken && emailMatch) {
      let cleanPhone: string | undefined = undefined;
      const phoneCandidate = phone || (contactStr.match(/\+?[0-9]{8,15}/)?.[0] ?? "");
      if (phoneCandidate) {
        const digits = phoneCandidate.replace(/[^0-9]/g, "");
        if (digits.length >= 7 && digits.length <= 15) {
          cleanPhone = `+${digits}`;
        }
      }

      const reachBody: Record<string, any> = {
        email: emailMatch[0],
        name: name || "Lead-to-Booking Prospect",
        note: `Score: ${score} | Site: ${website || "N/A"} | ${budget || ""}`.slice(0, 75),
      };
      if (cleanPhone) {
        reachBody.phone = cleanPhone;
      }

      await fetch(`https://developers.hostinger.com/api/reach/v1/profiles/${reachProfileId}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hostingerToken}`,
          "User-Agent": "Mozilla/5.0 (EvolveExpert-Reach/1.0)",
        },
        body: JSON.stringify(reachBody),
      }).catch((err) => console.error("[Hostinger Reach Dispatch Error]:", err));
    }

    // 2. Real-time Webhook Notification (Slack, Discord, Telegram, or n8n)
    const webhookUrl = process.env.LEAD_ALERT_WEBHOOK_URL || process.env.ALERT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "lead.submitted",
          text: `🔥 New Lead-to-Booking Inquiry (${leadPayload.source}): ${leadPayload.name} | ${leadPayload.contact} | ${leadPayload.website} | ${leadPayload.budget}`,
          data: leadPayload,
        }),
      }).catch((err) => console.error("[Webhook Dispatch Error]:", err));
    }

    // 3. Return Instant WhatsApp Redirect to Business Line (+91 76969 36377)
    const whatsappRedirect = `https://wa.me/917696936377?text=${encodeURIComponent(
      `Hi Irfan, I just submitted an inquiry for the EvolveExpert Lead-to-Booking System (${leadPayload.website !== "N/A" ? leadPayload.website : leadPayload.contact}). Package: ${leadPayload.budget}.`
    )}`;

    return NextResponse.json({
      success: true,
      leadScore: score,
      previewSlug: "apex-dental",
      whatsappUrl: whatsappRedirect,
      message: "Lead received successfully. Telephony audit & booking sequence initiated.",
      turnaround: "Sub-60s automated triage · 14-day go-live",
    });
  } catch (error) {
    console.error("[EvolveExpert Lead Engine] Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead intake." },
      { status: 500 }
    );
  }
}
