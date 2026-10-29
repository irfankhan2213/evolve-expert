import React from "react";
import { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { ProofCaseStudies } from "@/components/ProofCaseStudies";

export const metadata: Metadata = {
  title: "Verified Client Proof & Case Studies",
  description:
    "Explore verifiable AI Lead-to-Booking deployments by EvolveExpert. Real businesses, sub-10s voice pickup, sub-60s WhatsApp qualification, and calendar slot booking.",
  alternates: {
    canonical: "https://evolveexpert.com/proof",
  },
  openGraph: {
    title: "Verified Client Proof & Case Studies | EvolveExpert",
    description:
      "Explore verifiable AI Lead-to-Booking deployments by EvolveExpert. Real businesses, sub-10s voice pickup, and calendar slot booking.",
    url: "https://evolveexpert.com/proof",
    type: "website",
  },
};

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-16">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Zero Concept Placeholders
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#111111]">
            Real Production Systems.{" "}
            <span className="font-editorial text-emerald-700 italic">Live and verifiable.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Every system below handles live customer inquiries, answers calls in under 10 seconds or responds to web leads in under 60 seconds, and locks booked appointments directly into calendars.
          </p>
        </div>
      </section>

      {/* Detailed Animated Case Studies */}
      <ProofCaseStudies />

      {/* Trust Quote Banner */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-20">
        <div className="bg-[#0E0E11] text-white rounded-[32px] p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <p className="text-2xl sm:text-3xl font-medium max-w-2xl mx-auto leading-snug">
            &ldquo;EvolveExpert is the only partner we&apos;ve used that actually delivered a complete 24/7 autonomous Lead-to-Booking System on schedule with zero excuses.&rdquo;
          </p>
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
            — Global HealthTech &amp; Venture Founders
          </p>
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
