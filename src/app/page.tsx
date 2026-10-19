import React from "react";
import type { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchHero } from "@/components/StitchHero";
import { LiveDomainTicker } from "@/components/LiveDomainTicker";
import { DarkManifesto } from "@/components/DarkManifesto";
import { CreatiwiseGravityPills } from "@/components/CreatiwiseGravityPills";
import { HowWeWorkTags } from "@/components/HowWeWorkTags";
import { StitchPortfolio } from "@/components/StitchPortfolio";
import { StitchCapabilitiesAndPricing } from "@/components/StitchCapabilitiesAndPricing";
import { StitchFooter } from "@/components/StitchFooter";

export const metadata: Metadata = {
  title: "EvolveExpert — Pure Web ('26) & AI Systems Studio",
  description:
    "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in rigid 7-day asynchronous sprints. 100/100 Core Web Vitals, 0 account managers, 50/40/10 milestone escrow.",
  alternates: {
    canonical: "https://evolveexpert.com",
  },
  openGraph: {
    title: "EvolveExpert — Pure Web ('26) & AI Systems Studio",
    description:
      "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in rigid 7-day asynchronous sprints. Sub-0.5s LCP, zero bloat.",
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
      <StitchCapabilitiesAndPricing />
      <StitchFooter />
    </main>
  );
}
