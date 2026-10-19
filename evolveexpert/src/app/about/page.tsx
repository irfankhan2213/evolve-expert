import React from "react";
import { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { AboutAnimatedView } from "@/components/AboutAnimatedView";

export const metadata: Metadata = {
  title: "About Studio — Anti-Agency Engineering Manifesto",
  description:
    "Learn why EvolveExpert operates with 0 account managers and delivers production Next.js 16 platforms in 7-day sprints.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-14">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Studio Philosophy &amp; Pedigree
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#111111]">
            We built EvolveExpert because modern agencies are{" "}
            <span className="font-editorial text-neutral-500 italic">broken</span>.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Most agencies sell you senior expertise, pass the work to interns, drag the project across 10 weeks of meetings, and deliver bloated 40-score websites. We do the exact opposite.
          </p>
        </div>
      </section>

      {/* Principles & Guarantee Animated View */}
      <AboutAnimatedView />

      <StitchFooter />
    </main>
  );
}
