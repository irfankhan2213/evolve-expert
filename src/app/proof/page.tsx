import React from "react";
import { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { ProofCaseStudies } from "@/components/ProofCaseStudies";

export const metadata: Metadata = {
  title: "Client Proof & Verified Case Studies (6 Live Builds)",
  description:
    "Explore 6 live, verifiable enterprise web builds delivered by EvolveExpert. Real clients, sub-0.5s mobile speed, and measurable conversion growth.",
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
            6 Real Production Platforms.{" "}
            <span className="font-editorial text-emerald-700 italic">Live and verifiable.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Every build below is active on the global web, handles actual user traffic, and was delivered with verified sub-60s speed to lead and measurable conversion growth.
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
