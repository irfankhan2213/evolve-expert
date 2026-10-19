"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

export function ProofCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<"all" | "speed" | "ai" | "architecture">("all");

  const cases = [
    {
      id: "diadia",
      category: "speed",
      tag: "PAID · HEALTHTECH · 7-DAY SPRINT",
      client: "DiaDia Health",
      clientWordmark: "DIADIA",
      headline: "Clinical UX & Diagnostic Triage from Zero",
      problem:
        "The legacy Webflow site took 4.8 seconds to load on mobile 4G connections. Patient drop-off on clinical intake was over 48%, and after-hours visitors had no triage mechanism to book consultations.",
      action:
        "Engineered a turnkey Next.js 16 platform with a custom Figma clinical design system, sub-500ms Edge routing, and official WhatsApp Business Cloud API symptom triage wired into doctor calendars.",
      results: [
        { value: "0.4s", label: "LCP Load Speed" },
        { value: "98/100", label: "Mobile Core Web Vitals" },
        { value: "+140%", label: "Patient Conversion Lift" },
      ],
      liveUrl: "https://diadiahealth.com",
      domainLabel: "diadiahealth.com",
      stack: ["Next.js 16", "TypeScript", "Figma Design System", "WhatsApp Cloud API"],
      isFeaturedDark: true,
    },
    {
      id: "wescale",
      category: "architecture",
      tag: "PAID · B2B SAAS · 7-DAY SPRINT",
      client: "WeScale Startups",
      clientWordmark: "WSSCALE",
      headline: "AI Growth Studio · Conversion Funnel + Technical SEO",
      problem:
        "Needed a high-authority digital presence matching tier-1 venture scale. Previous platform suffered from bloated JavaScript payloads, missing structured data, and disconnected lead intake.",
      action:
        "Built an editorial Next.js 16 web engine with full Schema.org JSON-LD architecture, dynamic OpenGraph assets, sub-second TTFB, and an interactive growth diagnostic tool.",
      results: [
        { value: "0.4s", label: "Edge TTFB" },
        { value: "100/100", label: "Technical SEO Score" },
        { value: "+85%", label: "Scorecard Completion" },
      ],
      liveUrl: "https://wescalestartups.com",
      domainLabel: "wescalestartups.com",
      stack: ["Next.js 16", "Tailwind CSS", "JSON-LD Schemas", "Vercel Edge"],
      isFeaturedDark: false,
    },
    {
      id: "daniel",
      category: "ai",
      tag: "PAID · ADVISORY & AI · 7-DAY SPRINT",
      client: "Daniel Johnson",
      clientWordmark: "DANIEL",
      headline: "Executive Thought-Leadership · High-Authority Hub",
      problem:
        "Previous CMS was bloated with third-party tracking scripts and plugins that created security vulnerabilities and slowed down mobile rendering to over 3.9s.",
      action:
        "Engineered a minimalist, zero-bloat personal platform using modern Next.js 16 App Router and static pre-rendering. Achieved flawless 99+ mobile Lighthouse scores globally.",
      results: [
        { value: "0.3s", label: "Global LCP" },
        { value: "99/100", label: "Mobile Speed Score" },
        { value: "0 bloat", label: "Vanilla Next.js 16" },
      ],
      liveUrl: "https://danieljohnson.xyz",
      domainLabel: "danieljohnson.xyz",
      stack: ["Next.js 16", "Tailwind CSS", "Zero Plugin Architecture", "Edge CDN"],
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
        "“EvolveExpert helped us move from a slow 5-second Webflow site to a sub-0.5s Next.js 16 engine. Within 7 days, our mobile conversion doubled and WhatsApp triage handles patient inquiries 24/7 without routing back to the team.”",
      name: "B2B SaaS & HealthTech Founder · CEO",
      role: "Paid sprint engagement",
      initials: "BS",
      isFeaturedDark: true,
    },
    {
      quote:
        "“EvolveExpert is the 'no fluff', straight-to-the-point engineering studio. In just 7 days, they built a platform that scores 99/100 on mobile PageSpeed and transferred 100% of the code on Day 7 without asking for ongoing retainers.”",
      name: "Greg Weinstein",
      role: "Paid founder advisory",
      initials: "GW",
      isFeaturedDark: false,
    },
    {
      quote:
        "“The 50/40/10 milestone escrow gave us complete peace of mind. We reviewed the live staging build on Day 4, approved the cutover on Day 7, and our load times dropped from 4.2 seconds to 0.4 seconds.”",
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
        "“We ran Google PageSpeed on the build: 99 on Mobile, 100 on Desktop. They don't just promise Core Web Vitals, they verify it on the live domain before final handover.”",
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
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-black/5 shadow-2xs grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              $25M+
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Pipeline Influenced
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
              0.4s
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Average Mobile LCP
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              42+
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Sprints Handed Over
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              100%
            </span>
            <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Code Ownership Transferred
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Tabs & Case Studies Section (WeScale PAR Format) */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Verified Client Work
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Consistent Problem / Action / Result format. Real live domains you can inspect.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Proof (3)" },
              { id: "speed", label: "Sub-0.5s Speed" },
              { id: "ai", label: "WhatsApp & AI" },
              { id: "architecture", label: "Next.js Architecture" },
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
                      The 7-Day Sprint Build (Action)
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

                {/* Live Domain Button */}
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full text-xs font-mono font-bold transition group ${
                    item.isFeaturedDark
                      ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                      : "bg-neutral-100 hover:bg-neutral-200 text-[#111111] border border-neutral-200"
                  }`}
                >
                  <span>Verify: {item.domainLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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
                Stage 01 · Day 0–2
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Figma System &amp; Copy Polish
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We diagnose your current bottlenecks, align conversion copy, and deliver custom desktop &amp; mobile Figma screens with a 48-hr Loom walkthrough.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-400">
                Stage 02 · Day 3–5
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Live Next.js 16 Staging Build
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Functional private Vercel staging deployment with WhatsApp/Tally webhook pipelines wired, sub-500ms Edge TTFB, and your feedback incorporated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700">
                Stage 03 · Day 6–7
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Domain Cutover &amp; Escrow Release
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                DNS propagation, live Google Core Web Vitals audit (98+ verified), GitHub repo transfer, and final 10% milestone release only after your approval.
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
              Average rating across 42+ verified sprints
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
              Ready to Upgrade Your Digital Infrastructure?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              7 Days to Sub-0.5s Mobile Speed &amp; 24/7 AI Triage.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              50/40/10 milestone escrow protection. 100% code ownership handed over on Day 7.
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
              href="https://wa.me/917696936377?text=Hi%20EvolveExpert,%20I'd%20like%20to%20discuss%20a%207-day%20sprint"
              target="_blank"
              rel="noreferrer"
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
