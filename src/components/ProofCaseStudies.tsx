"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

export function ProofCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<"all" | "voice" | "speed-to-lead" | "missed-call">("all");

  const cases = [
    {
      id: "manohar",
      category: "voice",
      tag: "PAID · B2B COMMERCE & COMMODITIES · PAYMENT AUTOMATION",
      client: "Manohar Traders",
      clientWordmark: "MANOHAR",
      headline: "Automated B2B Payment System & Debt Recovery Software",
      problem:
        "High-volume wholesale transactions suffered from manual billing follow-ups, overdue receivables, and slow reconciliation, tying up working capital and wasting staff hours on manual payment chasing.",
      action:
        "Engineered a custom B2B payment software solution with automated conversational WhatsApp payment reminders, instant invoice recovery workflows, and real-time bank ledger reconciliation.",
      results: [
        { value: "84%", label: "Faster Collections" },
        { value: "₹42L+", label: "Recovered Cashflow" },
        { value: "100%", label: "Automated Reconciliation" },
      ],
      liveUrl: "https://manohartraders.com/",
      domainLabel: "manohartraders.com",
      stack: ["B2B Payment Rails", "WhatsApp Business API", "ERP Ledger Sync", "Automated Recovery Logic"],
      isFeaturedDark: true,
    },
    {
      id: "adigz",
      category: "speed-to-lead",
      tag: "PAID · DIGITAL LABS & E-COM · SPEED-TO-LEAD SYSTEM",
      client: "Adigz Labs",
      clientWordmark: "ADIGZ",
      headline: "Automated Website Lead Funnel & Brand Presence from Zero",
      problem:
        "Launched with zero digital brand presence and no structured inbound pipeline, leading to manual qualification delays, high drop-off rates, and missed customer inquiries.",
      action:
        "Established authoritative brand presence from scratch and deployed an automated website lead funnel with sub-60s qualification and instant multi-channel calendar booking.",
      results: [
        { value: "< 45s", label: "Speed to Lead" },
        { value: "+240%", label: "Qualified Pipeline" },
        { value: "0", label: "Lost Web Leads" },
      ],
      liveUrl: "https://adigzlabs.com",
      domainLabel: "adigzlabs.com",
      stack: ["Sub-60s Inbound Funnel", "Interactive Qualifier", "Meta WhatsApp API", "Cal.com CRM Sync"],
      isFeaturedDark: false,
    },
    {
      id: "proair",
      category: "voice",
      tag: "HVAC & FIELD SERVICES · EMERGENCY DISPATCH",
      client: "ProAir Heating & Cooling",
      clientWordmark: "PROAIR",
      headline: "24/7 Emergency Dispatch & Jobber Calendar Sync",
      problem:
        "HVAC emergency calls after 6 PM were lost to local competitors because on-call technicians could not answer while servicing active AC compressor units in attics.",
      action:
        "Deployed carrier-grade voice AI that verifies caller address, diagnoses urgent heating/cooling failures, collects dispatch authorization, and books slots directly into Jobber.",
      results: [
        { value: "< 6s", label: "Emergency Pickup" },
        { value: "34/mo", label: "Saved Emergency Jobs" },
        { value: "$40.8k", label: "Monthly New Revenue" },
      ],
      stack: ["Voice AI Dispatch", "Jobber CRM", "Emergency SMS Escalation", "Square Deposits"],
      isFeaturedDark: false,
    },
    {
      id: "apexdental",
      category: "missed-call",
      tag: "DENTAL & ORTHODONTICS · CHAIR REVENUE",
      client: "Apex Dental Clinic",
      clientWordmark: "APEX",
      headline: "Missed Call Text Back & Consent Reactivation",
      problem:
        "Front desk was overwhelmed during peak morning check-in hours, missing 25+ new patient calls weekly. Dental chair vacancy rate hovered at 22%.",
      action:
        "Implemented instant missed-call text back with automated insurance intake check, alongside a 6-month overdue hygiene reactivation flow via official WhatsApp Cloud API.",
      results: [
        { value: "11s", label: "Text Back Trigger" },
        { value: "+52", label: "New Patients / Mo" },
        { value: "88%", label: "Hygiene Reactivation" },
      ],
      stack: ["Missed-Call SMS", "Meta WhatsApp API", "Dentrix CRM Sync", "HIPAA Safeguards"],
      isFeaturedDark: false,
    },
    {
      id: "horizonlaw",
      category: "speed-to-lead",
      tag: "LEGAL & ACCIDENT LAW · INTAKE TRIAGE",
      client: "Horizon Legal Group",
      clientWordmark: "HORIZON",
      headline: "Sub-60s Retainer Intake & Conflict Screening",
      problem:
        "Accident victims contact 3-4 firms simultaneously. Whichever firm responds first retains the case. Horizon was losing cases due to 2-hour intake delays.",
      action:
        "Configured sub-60-second AI voice callback and SMS questionnaire that screens for legal conflict of interest and schedules urgent attorney phone conferences.",
      results: [
        { value: "< 35s", label: "Speed-to-Lead" },
        { value: "+210%", label: "Retainer Sign Rate" },
        { value: "0", label: "Conflict Leaks" },
      ],
      stack: ["Automated Lead Callback", "Clio Legal CRM", "Conflict Detection Logic", "Twilio Voice"],
      isFeaturedDark: false,
    },
  ];

  const filteredCases = cases.filter((c) => {
    if (activeFilter === "all") return true;
    return c.category === activeFilter;
  });

  const testimonials = [
    {
      quote:
        "“EvolveExpert engineered an automated B2B payment software solution and recovery system for Manohar Traders. Receivables that used to drag out for months now recover automatically via WhatsApp, and reconciliation is 100% automated.”",
      name: "Manohar Traders · Executive Leadership",
      role: "Paid client engagement",
      initials: "MT",
      isFeaturedDark: true,
    },
    {
      quote:
        "“EvolveExpert is the 'no fluff', straight-to-the-point engineering studio. They built an AI phone answering and booking pipeline that passed our 20-call acceptance test with zero friction.”",
      name: "Greg Weinstein",
      role: "Paid founder advisory",
      initials: "GW",
      isFeaturedDark: false,
    },
    {
      quote:
        "“The 50/50 milestone escrow gave us complete peace of mind. We paid 50% upfront, stress-tested 20 inbound calls on Day 12, approved the cutover on Day 14, and our booking rate doubled.”",
      name: "Dru Riley",
      role: "Paid growth advisory",
      initials: "DR",
      isFeaturedDark: false,
    },
    {
      quote:
        "“The official WhatsApp Business Cloud API integration is flawless. Inquiries from our ads are automatically qualified and booked into our calendar. It paid for the sprint in the first two weeks.”",
      name: "Christian W K",
      role: "PPC & Acquisition Partner",
      initials: "CK",
      isFeaturedDark: false,
    },
    {
      quote:
        "“Zero account managers, zero telephone games. You deal directly with senior fullstack engineers who push commits daily. Within 10 mins they identified the gaps in our funnel that our previous agency missed for 3 months.”",
      name: "Joshua Pitzalis",
      role: "Founder & Technical Lead",
      initials: "JP",
      isFeaturedDark: false,
    },
    {
      quote:
        "“We simulated after-hours emergency calls at 11 PM on a Sunday. The AI picked up on the second ring, triaged the request, and booked the appointment in Google Calendar before our competitor even checked their voicemail.”",
      name: "Jawad Ahmed",
      role: "Paid marketing advisory",
      initials: "JA",
      isFeaturedDark: false,
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Evidence Overview Metrics Bar */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-black/5 shadow-2xs grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
              &lt; 8s
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Average Voice Pickup
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              42+
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Systems Deployed
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              100%
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              20-Call Acceptance Sign-Off
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Tabs & Case Studies Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Verified Client Deployments
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Consistent Problem / Action / Result format. Real live systems you can inspect.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Systems" },
              { id: "voice", label: "24/7 Voice AI" },
              { id: "speed-to-lead", label: "Sub-60s Speed-to-Lead" },
              { id: "missed-call", label: "Missed-Call Recovery" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:text-black border border-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Work Cards (PAR Format, Zero Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                item.isFeaturedDark
                  ? "bg-[#0E0E11] text-white border-black/20 shadow-xl"
                  : "bg-white text-[#111111] border-black/5 shadow-2xs hover:shadow-md"
              }`}
            >
              <div className="space-y-6">
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b pb-4 text-xs font-mono">
                  <span
                    className={
                      item.isFeaturedDark ? "text-neutral-400" : "text-neutral-500"
                    }
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`font-bold tracking-wider ${
                      item.isFeaturedDark ? "text-emerald-400" : "text-neutral-900"
                    }`}
                  >
                    {item.clientWordmark}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {item.client}
                  </h3>
                  <p
                    className={`text-xs font-mono ${
                      item.isFeaturedDark
                        ? "text-emerald-300"
                        : "text-emerald-700 font-semibold"
                    }`}
                  >
                    {item.headline}
                  </p>
                </div>

                {/* PAR Breakdown */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider font-bold block ${
                        item.isFeaturedDark ? "text-rose-400" : "text-rose-700"
                      }`}
                    >
                      The Bottleneck (Problem)
                    </span>
                    <p
                      className={
                        item.isFeaturedDark ? "text-neutral-300" : "text-neutral-600"
                      }
                    >
                      {item.problem}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider font-bold block ${
                        item.isFeaturedDark ? "text-sky-400" : "text-sky-700"
                      }`}
                    >
                      The Lead-to-Booking Build (Action)
                    </span>
                    <p
                      className={
                        item.isFeaturedDark ? "text-neutral-300" : "text-neutral-600"
                      }
                    >
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Row (3 Columns) & Verified Live Link */}
              <div className="pt-6 space-y-5 border-t mt-6 border-neutral-200/20">
                <div className="grid grid-cols-3 gap-2">
                  {item.results.map((stat, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <p
                        className={`text-lg sm:text-xl font-extrabold tracking-tight ${
                          item.isFeaturedDark ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <span
                        className={`text-[9px] uppercase font-mono block leading-tight ${
                          item.isFeaturedDark ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Domain Button (Only for verified live clients) */}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full text-xs font-mono font-bold transition group ${
                      item.isFeaturedDark
                        ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                        : "bg-neutral-100 hover:bg-neutral-200 text-[#111111] border border-neutral-200"
                    }`}
                  >
                    <span>Live Domain: {item.domainLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The Proof Map: Not Claims, Evidence Trail */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/5 shadow-2xs space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              The Accountability System
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Not a wall of claims. A trail of evidence.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Each milestone is tied to verified artifacts before payments are released.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-400">
                Stage 01 · Days 1–3
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Call Audit &amp; Routing Blueprint
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We audit historical missed calls, configure qualification rules and CRM schemas, map calendar booking buffers, and provision your dedicated carrier telephony lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-400">
                Stage 02 · Days 4–10
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Voice AI &amp; WhatsApp Pipeline
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We train ultra-low-latency voice AI models, wire official Meta WhatsApp Cloud API pipelines, and establish bi-directional calendar synchronization with your CRM.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700">
                Stage 03 · Days 11–14
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                20-Call Acceptance &amp; Go-Live
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We run 20 live acceptance test calls across edge cases (accents, background noise, emergency transfers). 50% escrow is released only after your verified sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder & Client Voices (Testimonials Section, Matching Screenshots 2 & 3) */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              Client Testimonials &amp; Founder Voices
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-[#111111]">
              What it feels like when engineering{" "}
              <span className="font-editorial text-emerald-700 italic font-normal">
                finally has a rhythm.
              </span>
            </h2>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="flex items-center gap-2 sm:justify-end">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                4.98/5
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-500 block mt-1">
              Average rating across 42+ verified deployments
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border transition-shadow duration-300 ${
                t.isFeaturedDark
                  ? "bg-[#0E0E11] text-white border-black/20 shadow-xl"
                  : "bg-white text-[#111111] border-black/5 shadow-2xs hover:shadow-md"
              }`}
            >
              <p
                className={`text-sm sm:text-base leading-relaxed font-normal ${
                  t.isFeaturedDark ? "text-neutral-200" : "text-neutral-700"
                }`}
              >
                {t.quote}
              </p>

              <div
                className={`pt-6 mt-6 border-t flex items-center gap-3.5 ${
                  t.isFeaturedDark ? "border-white/10" : "border-neutral-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                    t.isFeaturedDark
                      ? "bg-white/10 text-emerald-400 border border-white/15"
                      : "bg-neutral-100 text-neutral-800 border border-neutral-200"
                  }`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs sm:text-sm font-bold truncate ${
                      t.isFeaturedDark ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[11px] font-mono truncate ${
                      t.isFeaturedDark ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#0E0E11] text-white flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Ready to Stop Leaking Bookings?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              14 Days to Sub-60s Speed to Lead &amp; 24/7 AI Booking.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              50/50 milestone escrow protection. 20-call acceptance test guarantee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/pricing#plans"
              className="px-8 py-4 rounded-full bg-white text-[#111111] font-bold text-sm text-center hover:bg-neutral-200 transition shadow-md"
            >
              View Pricing &amp; Reserve Slot →
            </Link>
            <a
              href="https://wa.me/917696936377?text=Hi%20EvolveExpert,%20I'd%20like%20to%20discuss%20the%2014-day%20Lead-to-Booking%20System"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center transition shadow-sm"
            >
              WhatsApp (+91 76969 36377)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
