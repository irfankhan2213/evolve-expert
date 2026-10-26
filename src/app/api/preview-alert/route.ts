import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, clientName, contact, email, phone, timestamp, referrer } = body;

    const alertData = {
      slug: slug || "general",
      clientName: clientName || slug || "Prospect",
      contact: contact || email || phone || "Anonymous Visitor",
      timestamp: timestamp || new Date().toISOString(),
      referrer: referrer || "direct",
    };

    console.info(`[EvolveExpert Outreach Engine] Prospect Viewed Preview:`, alertData);

    // 1. Hostinger Reach Contact / Interaction Sync if contact info present
    const hostingerToken =
      process.env.HOSTINGER_REACH_API_TOKEN ||
      process.env.HOSTINGER_API_TOKEN;
    const reachProfileId =
      process.env.HOSTINGER_REACH_PROFILE_ID ||
      process.env.HOSTINGER_REACH_PROFILE_UUID ||
      "a8f74fcc-ed27-4f6e-9438-76013da4692d";

    const emailMatch = alertData.contact.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (hostingerToken && emailMatch) {
      await fetch(`https://developers.hostinger.com/api/reach/v1/profiles/${reachProfileId}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hostingerToken}`,
          "User-Agent": "Mozilla/5.0 (EvolveExpert-Reach/1.0)",
        },
        body: JSON.stringify({
          email: emailMatch[0],
          name: alertData.clientName,
          note: `Viewed interactive preview slug: ${alertData.slug}`,
        }),
      }).catch((err) => console.error("[Hostinger Reach Preview Alert Error]:", err));
    }

    // 2. Real-time Webhook Notification
    const webhookUrl = process.env.LEAD_ALERT_WEBHOOK_URL || process.env.ALERT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "preview.viewed",
          text: `👀 Interactive Preview Viewed: ${alertData.clientName} (${alertData.slug}) from ${alertData.referrer}`,
          data: alertData,
        }),
      }).catch((err) => console.error("[Webhook Preview Dispatch Error]:", err));
    }

    const whatsappRedirect = `https://wa.me/917696936377?text=${encodeURIComponent(
      `Hi Irfan, I am reviewing the live interactive preview for ${alertData.clientName} (${alertData.slug}). Let's discuss onboarding.`
    )}`;

    return NextResponse.json({
      received: true,
      alertDispatched: true,
      status: "acknowledged",
      whatsappUrl: whatsappRedirect,
    });
  } catch (error) {
    console.error("[EvolveExpert Outreach Engine] Alert error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch preview alert." },
      { status: 500 }
    );
  }
}
