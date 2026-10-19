import type { Metadata } from "next";
import { PricingClientView } from "@/components/PricingClientView";

export const metadata: Metadata = {
  title: "Pricing & Sprints — 50/40/10 Milestone Escrow",
  description:
    "Fixed-scope, zero surprise charges. 7-Day Founder Web Sprint at $950 / ₹65,000 and Complete Web + AI Concierge at $1,250 / ₹90,000. 100% intellectual property ownership.",
  alternates: {
    canonical: "https://evolveexpert.com/pricing",
  },
  openGraph: {
    title: "Transparent Sprints & Pricing | EvolveExpert Studio",
    description:
      "Fixed-scope Next.js 16 web development & AI systems. 50/40/10 milestone escrow with zero hourly billing.",
    url: "https://evolveexpert.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClientView />;
}
