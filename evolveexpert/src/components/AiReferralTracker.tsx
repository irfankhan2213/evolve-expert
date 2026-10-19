"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function AiReferralTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];

    const referrer = document.referrer.toLowerCase();
    let aiSource: string | null = null;

    if (referrer.includes("chatgpt.com") || referrer.includes("chat.openai.com")) {
      aiSource = "ChatGPT";
    } else if (referrer.includes("claude.ai")) {
      aiSource = "Claude";
    } else if (referrer.includes("perplexity.ai")) {
      aiSource = "Perplexity";
    } else if (referrer.includes("gemini.google.com") || referrer.includes("bard.google.com")) {
      aiSource = "Gemini";
    } else if (referrer.includes("copilot.microsoft.com")) {
      aiSource = "Copilot";
    }

    if (aiSource) {
      window.dataLayer.push({
        event: "ai_referral",
        ai_engine: aiSource,
        referrer: document.referrer,
        landing_page: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
      console.info(`[EvolveExpert Trust Engine] AI Referral detected: ${aiSource}`);
    }

    // Push initial page context for SEO & Attribution telemetry
    window.dataLayer.push({
      event: "page_context",
      page_path: window.location.pathname,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      user_agent_category: navigator.userAgent.includes("Mobile") ? "mobile" : "desktop",
      client_timestamp: new Date().toISOString(),
    });
  }, []);

  return null;
}
