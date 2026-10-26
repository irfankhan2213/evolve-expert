import type { Metadata } from "next";
import { PricingClientView } from "@/components/PricingClientView";

export const metadata: Metadata = {
  title: "Pricing & Systems — 50/50 Milestone Escrow | EvolveExpert",
  description:
    "Transparent Lead-to-Booking System pricing. Starter $1,500, Core Founding $2,500, and Full Pipeline $7,500. 14-day go-live with 20-call acceptance test sign-off.",
  alternates: {
    canonical: "https://evolveexpert.com/pricing",
  },
  openGraph: {
    title: "Turnkey Lead-to-Booking Pricing | EvolveExpert",
    description:
      "24/7 AI call answering, WhatsApp triage, and calendar booking. 50/50 milestone escrow with guaranteed 20-call sign-off.",
    url: "https://evolveexpert.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClientView />;
}
