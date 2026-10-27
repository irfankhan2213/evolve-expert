"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function StitchPortfolio() {
  const works = [
    {
      id: "manohar",
      categoryMeta: "PAID · B2B COMMERCE & COMMODITIES · AUTOMATED RECOVERY",
      clientWordmark: "MANOHAR",
      title: "Manohar Traders",
      subtitle: "Automated B2B Payment System & Debt Recovery",
      body: "Engineered automated B2B payment software solution and invoice recovery platform. Replaced manual billing friction with conversational WhatsApp payment reminders, instant invoice recovery, and automated ledger sync.",
      stats: [
        { value: "84%", label: "Faster Collections" },
        { value: "₹42L+", label: "Recovered Cashflow" },
        { value: "100%", label: "Automated Reconciliation" },
      ],
      liveUrl: "https://manohartraders.com/",
      domainLabel: "manohartraders.com",
      isFeaturedDark: true,
    },
    {
      id: "adigz",
      categoryMeta: "PAID · GROWTH STUDIO · SPEED-TO-LEAD SYSTEM",
      clientWordmark: "ADIGZ",
      title: "Adigz Labs",
      subtitle: "Automated Website Lead Funnel & Brand Presence",
      body: "Established authoritative digital brand presence from zero and engineered an automated website lead funnel. Inbound leads are qualified under 60 seconds with instant multi-channel calendar booking and zero drop-off.",
      stats: [
        { value: "< 45s", label: "Speed to Lead" },
        { value: "+240%", label: "Qualified Pipeline" },
        { value: "0", label: "Lost Web Leads" },
      ],
      liveUrl: "https://adigzlabs.com",
      domainLabel: "adigzlabs.com",
      isFeaturedDark: false,
    },
    {
      id: "daniel",
      categoryMeta: "PAID · HIGH-TICKET ADVISORY · NO-SHOW DEFENSE",
      clientWordmark: "DANIEL",
      title: "Daniel Johnson Advisory",
      subtitle: "Missed-Call Recovery & Automated SMS Follow-Up",
      body: "Deployed automated missed-call text back and multi-touch quote reminder flows. Recovers lost high-intent prospects and enforces 2-way SMS confirmation to protect billable partner hours.",
      stats: [
        { value: "$28k/mo", label: "Recovered Revenue" },
        { value: "-48%", label: "Appointment No-Shows" },
        { value: "100%", label: "Missed-Call Coverage" },
      ],
      liveUrl: "https://danieljohnson.xyz",
      domainLabel: "danieljohnson.xyz",
      isFeaturedDark: false,
    },
  ];

  return (
    <section id="proof" className="max-w-[1360px] mx-auto px-5 sm:px-10 py-20 scroll-mt-10">
      <div id="work" className="sr-only" />
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-neutral-200">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Verified Client Work · Zero Mockup Photos
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-[#111111]">
            We&apos;ve worked with some lovely teams{" "}
            <span className="font-editorial text-emerald-700 italic font-normal">
              along the way.
            </span>
          </h2>
        </div>

        <Link
          href="/proof"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-emerald-700 transition font-mono border-b border-[#111111] pb-1 shrink-0 group"
        >
          <span>All case studies &amp; proof</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 3 Work Cards Side-by-Side (Matching User's Screenshot 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
        {works.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border transition-shadow duration-300 ${
              item.isFeaturedDark
                ? "bg-[#0E0E11] text-white border-black/20 shadow-xl"
                : "bg-white text-[#111111] border-black/5 shadow-2xs hover:shadow-md"
            }`}
          >
            <div className="space-y-6">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between border-b pb-4 text-xs font-mono">
                <span
                  className={
                    item.isFeaturedDark ? "text-neutral-400" : "text-neutral-500"
                  }
                >
                  {item.categoryMeta}
                </span>
                <span
                  className={`font-bold tracking-wider ${
                    item.isFeaturedDark ? "text-emerald-400" : "text-neutral-900"
                  }`}
                >
                  {item.clientWordmark}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p
                  className={`text-xs font-mono ${
                    item.isFeaturedDark ? "text-emerald-300/90" : "text-emerald-700"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>

              {/* Body Description */}
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  item.isFeaturedDark ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {item.body}
              </p>
            </div>

            {/* Bottom Metrics Row (3 Columns) & Verified Live Link */}
            <div className="pt-8 space-y-6 border-t mt-8 border-neutral-200/20">
              <div className="grid grid-cols-3 gap-2">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <p
                      className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                        item.isFeaturedDark ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <span
                      className={`text-[10px] uppercase font-mono block leading-tight ${
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
                className={`inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-xs font-mono font-bold transition group ${
                  item.isFeaturedDark
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    : "bg-neutral-100 hover:bg-neutral-200 text-[#111111] border border-neutral-200"
                }`}
              >
                <span>Live Domain: {item.domainLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
