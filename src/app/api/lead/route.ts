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

    // 1. Direct Hostinger Reach API Contact Ingestion (Email Marketing & Lead Nurturing)
    const hostingerToken = process.env.HOSTINGER_API_TOKEN || process.env.HOSTINGER_MAIL_API_TOKEN;
    const reachProfileUuid = process.env.HOSTINGER_REACH_PROFILE_UUID || "a8f74fcc-ed27-4f6e-9438-76013da4692d";
    const emailMatch = contactStr.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (hostingerToken && emailMatch) {
      await fetch(`https://developers.hostinger.com/api/reach/v1/profiles/${reachProfileUuid}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hostingerToken}`,
          "User-Agent": "Mozilla/5.0 (EvolveExpert-Reach/1.0)",
        },
        body: JSON.stringify({
          email: emailMatch[0],
          name: name || "Sprint Founder",
          note: `Score: ${score} | Site: ${website || 'N/A'} | Budget: ${budget || 'N/A'}`,
        }),
      }).catch((err) => console.error("[Hostinger Reach Dispatch Error]:", err));
    }

    // 2. Optional Hostinger Agentic Mail REST API dispatch
    const mailToken = process.env.HOSTINGER_MAIL_API_TOKEN || hostingerToken;
    const recipientEmail = process.env.LEAD_ALERT_EMAIL || "concierge@evolveexpert.com";
    if (mailToken) {
      await fetch("https://api.mail.hostinger.com/v1/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mailToken}`,
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
