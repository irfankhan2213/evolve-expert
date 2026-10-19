import React from "react";
import { Metadata } from "next";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { ServicesAnimatedView } from "@/components/ServicesAnimatedView";

export const metadata: Metadata = {
  title: "7-Day Web & AI Sprint Services",
  description:
    "Explore EvolveExpert's turnkey 7-day engineering sprint. Next.js 16, sub-500ms global latency, 24/7 WhatsApp AI concierge, and 50/40/10 milestone escrow.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Hero Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-10">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Turnkey Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#111111]">
            7 Days from Kickoff to a{" "}
            <span className="font-editorial text-emerald-700 italic">production-ready</span>{" "}
            growth platform.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            We don’t do 8-week agency fluff or billable hours padding. We run a surgical, asynchronous engineering sprint that outputs measurable enterprise results.
          </p>
        </div>
      </section>

      {/* Animated Timeline Stepper & Tech Stack */}
      <ServicesAnimatedView />

      {/* Agency vs EvolveExpert Comparison Matrix */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-16">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/5 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-2">
            Traditional Agency vs. EvolveExpert Sprint
          </h2>
          <p className="text-sm text-neutral-600 mb-8 max-w-xl">
            See why high-growth startups and venture founders switch to our focused delivery model.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-xs font-mono text-neutral-400 uppercase">
                  <th className="pb-4 font-semibold">Criteria</th>
                  <th className="pb-4 font-semibold text-neutral-400">Traditional Agency</th>
                  <th className="pb-4 font-semibold text-[#111111]">EvolveExpert Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Timeline</td>
                  <td className="py-4 text-neutral-500">6 to 12 weeks of endless meetings</td>
                  <td className="py-4 font-bold text-emerald-600">7 Days Guaranteed</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Communication</td>
                  <td className="py-4 text-neutral-500">Account managers &amp; email threads</td>
                  <td className="py-4 font-bold text-emerald-600">Direct senior engineer + private Notion &amp; Loom</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Mobile Speed</td>
                  <td className="py-4 text-neutral-500">30–60/100 (Bloated WordPress plugins)</td>
                  <td className="py-4 font-bold text-emerald-600">98–100/100 Core Web Vitals (Sub-0.5s LCP)</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">AI Integration</td>
                  <td className="py-4 text-neutral-500">Third-party generic iframe plugins</td>
                  <td className="py-4 font-bold text-emerald-600">Native 24/7 AI agent + WhatsApp Business flow</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">IP Ownership</td>
                  <td className="py-4 text-neutral-500">Vendor lock-in or proprietary CMS</td>
                  <td className="py-4 font-bold text-emerald-600">100% full GitHub repository and cloud handover</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Pricing Model</td>
                  <td className="py-4 text-neutral-500">$5,000–$15,000 with scope creep bills</td>
                  <td className="py-4 font-bold text-emerald-600">Fixed $950 / $1,250 (₹65,000 / ₹90,000)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
