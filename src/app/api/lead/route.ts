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
      name: name || "Founder",
      contact: contactStr,
      phone: phone || "N/A",
      website: website || "N/A",
      budget: budget || "Unspecified",
      notes: notes || "None",
      source: source || "web_intake",
      leadScore: score,
      timestamp: new Date().toISOString(),
    };

    console.info(`[EvolveExpert Lead Engine] Lead Received:`, leadPayload);

    // 1. Optional Hostinger Agentic Mail REST API dispatch (if HOSTINGER_MAIL_API_TOKEN is configured in Vercel)
    const hostingerToken = process.env.HOSTINGER_MAIL_API_TOKEN;
    const recipientEmail = process.env.LEAD_ALERT_EMAIL || "concierge@evolveexpert.com";
    if (hostingerToken) {
      await fetch("https://api.mail.hostinger.com/v1/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hostingerToken}`,
        },
        body: JSON.stringify({
          to: [recipientEmail],
          subject: `[New Sprint Lead · Score ${score}] ${leadPayload.website !== "N/A" ? leadPayload.website : leadPayload.contact}`,
          text: `New EvolveExpert Sprint Lead:\n\nName: ${leadPayload.name}\nContact: ${leadPayload.contact}\nPhone: ${leadPayload.phone}\nWebsite: ${leadPayload.website}\nPackage: ${leadPayload.budget}\nNotes: ${leadPayload.notes}\nSource: ${leadPayload.source}\nTime: ${leadPayload.timestamp}\n\nReply immediately on WhatsApp: https://wa.me/${(leadPayload.phone !== "N/A" ? leadPayload.phone : leadPayload.contact).replace(/[^0-9]/g, "")}`,
        }),
      }).catch((err) => console.error("[Hostinger Mail Dispatch Error]:", err));
    }

    // 2. Optional Webhook dispatch (Hostinger Reach / n8n / Slack / Discord / Telegram)
    const webhookUrl = process.env.ALERT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "lead.submitted",
          text: `🔥 New EvolveExpert Lead (${leadPayload.source}): ${leadPayload.name} | ${leadPayload.contact} | ${leadPayload.website} | ${leadPayload.budget}`,
          data: leadPayload,
        }),
      }).catch((err) => console.error("[Webhook Dispatch Error]:", err));
    }

    const whatsappRedirect = `https://wa.me/917696936377?text=${encodeURIComponent(
      `Hi Irfan, I just requested a 24-hour EvolveExpert sprint prototype for ${leadPayload.website !== "N/A" ? leadPayload.website : leadPayload.contact}.`
    )}`;

    return NextResponse.json({
      success: true,
      leadScore: score,
      previewSlug: "apex-dental",
      whatsappUrl: whatsappRedirect,
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
