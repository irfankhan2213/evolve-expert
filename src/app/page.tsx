import React from "react";
import type { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchHero } from "@/components/StitchHero";
import { LiveDomainTicker } from "@/components/LiveDomainTicker";
import { DarkManifesto } from "@/components/DarkManifesto";
import { CreatiwiseGravityPills } from "@/components/CreatiwiseGravityPills";
import { HowWeWorkTags } from "@/components/HowWeWorkTags";
import { StitchPortfolio } from "@/components/StitchPortfolio";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StitchCapabilitiesAndPricing } from "@/components/StitchCapabilitiesAndPricing";
import { StitchFooter } from "@/components/StitchFooter";

export const metadata: Metadata = {
  title: "EvolveExpert — 24/7 AI Lead-to-Booking System for Service Businesses",
  description:
    "Never lose a customer to a missed call or slow reply. 24/7 AI voice call answering, sub-60s WhatsApp qualification, and calendar booking live in 14 days with 50/50 escrow.",
  alternates: {
    canonical: "https://evolveexpert.com",
  },
  openGraph: {
    title: "EvolveExpert — 24/7 AI Lead-to-Booking System",
    description:
      "Every inbound call, WhatsApp message, and web lead answered in under 60 seconds, qualified by AI, and booked into your calendar 24/7. Live in 14 days with 50/50 escrow.",
    url: "https://evolveexpert.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />
      <StitchHero />
      <LiveDomainTicker />
      <DarkManifesto />
      <CreatiwiseGravityPills />
      <HowWeWorkTags />
      <StitchPortfolio />
      <TestimonialsSection />
      <StitchCapabilitiesAndPricing />
      <StitchFooter />
    </main>
  );
}
