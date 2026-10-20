"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseData {
  titleName: string;
  subtitle: string;
  badge: string;
  dotColor: string;
  domain: string;
  categoryMeta: string;
  clientWordmark: string;
  context: string;
  body: string;
  stats: { value: string; label: string }[];
  link: string;
}

const HERO_SHOWCASE: Record<string, ShowcaseData> = {
  diadia: {
    titleName: "DiaDia Health",
    subtitle: "· Clinical UX",
    badge: "0.4s LCP",
    dotColor: "bg-emerald-400",
    domain: "diadiahealth.com",
    categoryMeta: "PAID · HEALTHTECH · 7-DAY SPRINT",
    clientWordmark: "DIADIA",
    context: "Clinical UX · Diagnostic Triage from Zero",
    body: "Replaced slow legacy Webflow architecture with a turnkey Next.js 16 clinical booking engine. Engineered instant patient symptom routing directly to physician schedules.",
    stats: [
      { value: "0.4s", label: "LCP Load Speed" },
      { value: "98/100", label: "Mobile Core Web Vitals" },
      { value: "+140%", label: "Patient Conversion Lift" },
    ],
    link: "https://diadiahealth.com",
  },
  wescale: {
    titleName: "WeScale Startups",
    subtitle: "· B2B Studio",
    badge: "0.4s Load",
    dotColor: "bg-sky-400",
    domain: "wescalestartups.com",
    categoryMeta: "PAID · B2B SAAS · 7-DAY SPRINT",
    clientWordmark: "WSSCALE",
    context: "AI Growth Studio · Conversion Funnel + SEO",
    body: "Engineered editorial Next.js 16 platform with automated funnel architecture, 100/100 SEO structured data, and sub-second global edge delivery for venture founders.",
    stats: [
      { value: "0.4s", label: "Edge TTFB" },
      { value: "100/100", label: "Technical SEO Score" },
      { value: "+85%", label: "Scorecard Completion" },
    ],
    link: "https://wescalestartups.com",
  },
  daniel: {
    titleName: "Daniel Johnson",
    subtitle: "· Advisory Platform",
    badge: "99/100 Speed",
    dotColor: "bg-amber-400",
    domain: "danieljohnson.xyz",
    categoryMeta: "PAID · ADVISORY & AI · 7-DAY SPRINT",
    clientWordmark: "DANIEL",
    context: "Executive Thought-Leadership · High Authority",
    body: "Minimalist, high-craft personal platform built with Next.js 16 and zero third-party script bloat. 100/100 PageSpeed with automated lead routing.",
    stats: [
      { value: "0.3s", label: "Global LCP" },
      { value: "99/100", label: "Mobile Speed Score" },
      { value: "0 bloat", label: "Vanilla Next.js 16" },
    ],
    link: "https://danieljohnson.xyz",
  },
};

export function StitchHero() {
  const [activeTab, setActiveTab] = useState<"diadia" | "wescale" | "daniel">("diadia");
  const current = HERO_SHOWCASE[activeTab];

  return (
    <section className="relative max-w-[1360px] mx-auto px-5 sm:px-10 pt-4 pb-16 overflow-hidden">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left Column: Monumental Title & Pitch */}
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 backdrop-blur-sm shadow-2xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Welcome to EvolveExpert Studio
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[52px] sm:text-[76px] lg:text-[88px] font-extrabold tracking-[-0.04em] leading-[0.92] uppercase text-[#111111]">
              PURE WEB
              <span className="text-sm sm:text-base font-mono align-top ml-3 text-neutral-500 font-normal">
                (&apos;26)
              </span>
              <br />
              <span className="text-neutral-400 font-bold">&amp; AI SYSTEMS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed"
          >
            We engineer high-converting websites, Shopify stores, and 24/7 WhatsApp AI concierges in{" "}
            <span className="text-[#111111] font-bold underline decoration-neutral-300 underline-offset-4">
              7 days flat
            </span>
            —built so every click drives measurable revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/pricing#plans"
                className="inline-flex items-center gap-3 bg-[#111111] text-white pl-6 pr-2.5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition group shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition shadow-2xs"
              >
                View 6 Live Builds
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom-Left Azentos Mini Proof Bento with subtle hover motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg"
          >
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#141416] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm cursor-default"
            >
              <span className="text-3xl font-extrabold tracking-tight">98+</span>
              <span className="text-[11px] text-neutral-400 mt-3 font-medium leading-snug">
                Google PageSpeed Guarantee
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default"
            >
              <span className="text-3xl font-extrabold tracking-tight text-[#111111]">
                7 Days
              </span>
              <span className="text-[11px] text-neutral-500 mt-3 font-medium leading-snug">
                From Kickoff to Live Domain
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default"
            >
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  D
                </span>
                <span className="w-7 h-7 rounded-full bg-sky-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  W
                </span>
                <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  E
                </span>
                <span className="w-7 h-7 rounded-full bg-purple-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  M
                </span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-700 mt-3 leading-snug">
                6+ Global Founders Served
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative bg-[#FAF9F5] p-6 sm:p-8 rounded-[36px] border border-black/10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 space-y-5 group">
            {/* Switcher Tabs Row with Spring Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-200/60 border border-neutral-300/80 overflow-x-auto relative">
              {[
                { id: "diadia", label: "DiaDia Health" },
                { id: "wescale", label: "WeScale" },
                { id: "daniel", label: "Daniel J." },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as "diadia" | "wescale" | "daniel")}
                    className={`relative flex-1 py-1.5 px-3 rounded-full text-xs font-semibold tracking-tight transition-colors duration-200 z-10 ${
                      isActive ? "text-white" : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeroTabIndicator"
                        className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Header Row: Category & Speed Badge */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block">
                  Featured Production Build
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#111111] mt-0.5">
                  {current.titleName}{" "}
                  <span className="font-normal text-neutral-500">
                    {current.subtitle}
                  </span>
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-xs font-mono px-3.5 py-1.5 rounded-full font-medium shadow-xs">
                  <span className={`w-2 h-2 rounded-full ${current.dotColor} animate-pulse`}></span>
                  <span>{current.badge}</span>
                </span>
              </div>
            </div>

            {/* WeScale-Style Evidence & Proof Canvas (Zero Screenshots) */}
            <div className="rounded-[24px] overflow-hidden border border-black/10 bg-[#0E0E11] text-white p-6 sm:p-7 flex flex-col justify-between shadow-inner min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full flex flex-col justify-between space-y-5"
                >
                  {/* Topline: Meta tag + Wordmark */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                    <span className="text-neutral-400 font-medium tracking-wider">
                      {current.categoryMeta}
                    </span>
                    <span className="font-bold tracking-widest text-emerald-400">
                      {current.clientWordmark}
                    </span>
                  </div>

                  {/* Context & Description */}
                  <div className="space-y-1.5">
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {current.context}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                      {current.body}
                    </p>
                  </div>

                  {/* 3-Column Stats Row (Matching WeScale's v9-case-stats) */}
                  <div className="grid grid-cols-3 gap-2 py-3.5 border-t border-b border-white/10">
                    {current.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <strong className="text-xl sm:text-2xl font-extrabold text-white tracking-tight block">
                          {stat.value}
                        </strong>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Strip: Verified Live Domain & Action Button */}
                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-emerald-300 transition group"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Live Domain: {current.domain}</span>
                    </a>

                    <motion.a
                      whileHover={{ scale: 1.12, rotate: 45 }}
                      whileTap={{ scale: 0.95 }}
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white text-[#111111] flex items-center justify-center transition-colors shadow-lg group/btn"
                      aria-label={`Visit ${current.titleName}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
