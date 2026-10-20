"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Bot,
  ShoppingBag,
  Layers,
  CheckCircle,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const CARD_TRANSFORMS = [
  { transform: "translate3d(0, 0, 0px) rotate(0deg)", zIndex: 40, opacity: 1, pointerEvents: "auto" as const },
  { transform: "translate3d(8px, 12px, -30px) rotate(2deg)", zIndex: 30, opacity: 0.94, pointerEvents: "none" as const },
  { transform: "translate3d(14px, 22px, -60px) rotate(3deg)", zIndex: 20, opacity: 0.85, pointerEvents: "none" as const },
  { transform: "translate3d(20px, 32px, -90px) rotate(-2.5deg)", zIndex: 10, opacity: 0.72, pointerEvents: "none" as const },
];

export function StitchHero() {
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [isTurbo, setIsTurbo] = useState(true);
  const [botReply, setBotReply] = useState("Founder: How fast is turnkey delivery?");
  const [isReplying, setIsReplying] = useState(false);

  const shuffleDeckNext = () => {
    setActiveDeckIndex((prev) => (prev + 1) % 4);
  };

  const handleStageClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button, a")) return;
    shuffleDeckNext();
  };

  const triggerPromptChip = (replyText: string) => {
    setIsReplying(true);
    setBotReply(`EvolveExpert Bot: ${replyText}`);
    setTimeout(() => {
      setIsReplying(false);
    }, 600);
  };

  return (
    <section className="relative max-w-[1360px] mx-auto px-5 sm:px-10 pt-4 pb-16 overflow-hidden">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
                href="#proof"
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

        {/* Right Column: Floating 3D Card Shuffle Deck (Exact Stitch Design) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center w-full max-w-md mx-auto select-none">
            {/* Beacon pulse dot indicator */}
            <div className="w-full flex items-center justify-between mb-2.5 px-1">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* 3D Perspective Card Container */}
            <div
              className="relative w-full aspect-[4/3.2] min-h-[340px] cursor-pointer"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
              onClick={handleStageClick}
            >
              {/* Card 0: Next.js 15 Edge SSR Engine */}
              {(() => {
                const offset = (0 - activeDeckIndex + 4) % 4;
                const cfg = CARD_TRANSFORMS[offset];
                return (
                  <div
                    className="absolute inset-0 rounded-[24px] p-5 text-white bg-gradient-to-br from-[#121417] via-[#1A1F26] to-[#0F1216] border border-white/15 shadow-xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                    style={{
                      transform: cfg.transform,
                      zIndex: cfg.zIndex,
                      opacity: cfg.opacity,
                      pointerEvents: cfg.pointerEvents,
                    }}
                  >
                    <div className="absolute -right-16 -top-16 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-white/10 text-sky-300 font-semibold border border-white/10 flex items-center gap-1 text-[10px]">
                          <Cpu className="w-3 h-3 text-sky-400" /> CORE ENGINE 01
                        </span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          EDGE DEPLOYED
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between">
                        <h3 className="text-lg font-bold tracking-tight text-white">Next.js 15 Edge SSR</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                          42KB Bundle
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                        Zero client-side hydration penalty with edge caching.
                      </p>

                      {/* Telemetry & Gauges Grid */}
                      <div className="grid grid-cols-3 gap-2 mt-3 font-mono text-xs">
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">LCP Speed</span>
                          <p className="text-base font-bold text-white mt-0.5">
                            {isTurbo ? "0.38s" : "0.72s"}
                          </p>
                          <span className="text-[9px] text-emerald-400">99.8th %</span>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">Global Ping</span>
                          <p className="text-base font-bold text-sky-400 mt-0.5">
                            {isTurbo ? "18ms" : "48ms"}
                          </p>
                          <span className="text-[9px] text-neutral-400">Cloudflare</span>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">PageSpeed</span>
                          <p className="text-base font-bold text-emerald-400 mt-0.5">100</p>
                          <span className="text-[9px] text-neutral-400">Core Web</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Speed Audit Switch */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsTurbo(!isTurbo);
                          }}
                          className={`w-8 h-4.5 rounded-full p-0.5 transition-colors relative flex items-center cursor-pointer ${
                            isTurbo ? "bg-emerald-500" : "bg-neutral-600"
                          }`}
                          aria-label="Toggle Turbo Edge Mode"
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full bg-white transition-transform shadow-sm ${
                              isTurbo ? "translate-x-3.5" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="font-mono text-neutral-300 text-[11px]">
                          {isTurbo ? "Turbo Edge Mode Active" : "Standard Cache Mode"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Click to Cycle →
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* Card 1: 24/7 WhatsApp AI Concierge */}
              {(() => {
                const offset = (1 - activeDeckIndex + 4) % 4;
                const cfg = CARD_TRANSFORMS[offset];
                return (
                  <div
                    className="absolute inset-0 rounded-[24px] p-5 text-white bg-gradient-to-br from-[#0F1A14] via-[#14261D] to-[#0A130E] border border-emerald-500/30 shadow-xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                    style={{
                      transform: cfg.transform,
                      zIndex: cfg.zIndex,
                      opacity: cfg.opacity,
                      pointerEvents: cfg.pointerEvents,
                    }}
                  >
                    <div className="absolute -left-16 -top-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 flex items-center gap-1 text-[10px]">
                          <Bot className="w-3 h-3 text-emerald-400" /> WHATSAPP AI ENGINE
                        </span>
                        <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          LIVE READY
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white">
                        24/7 Autonomous Concierge
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Pre-trained on your PDFs to qualify leads and book calls.
                      </p>

                      {/* Simulated Realtime Chat Box */}
                      <div className="mt-3 space-y-1.5 bg-black/40 border border-emerald-500/20 p-2.5 rounded-xl text-[11px] font-mono">
                        <div className="bg-emerald-950/60 text-emerald-100 p-2 rounded-lg border border-emerald-500/30 leading-snug text-[10px]">
                          &ldquo;Hey! Want to view the live case study link or see 7-day pricing?&rdquo;
                        </div>
                        <div
                          className={`p-1.5 rounded-lg max-w-[80%] ml-auto text-right text-[10px] transition-colors duration-300 ${
                            isReplying
                              ? "bg-emerald-500/25 text-emerald-200 border border-emerald-500/30"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          {botReply}
                        </div>
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerPromptChip("7-day sprint guaranteed");
                            }}
                            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] hover:bg-emerald-500/40 transition-colors cursor-pointer"
                          >
                            ⚡ Turnaround?
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerPromptChip("$950 or $1,250 fixed scope");
                            }}
                            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] hover:bg-emerald-500/40 transition-colors cursor-pointer"
                          >
                            💵 Pricing
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerPromptChip("Booking link sent!");
                            }}
                            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] hover:bg-emerald-500/40 transition-colors cursor-pointer"
                          >
                            📅 Book Call
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Webhook Telemetry Bar */}
                    <div className="pt-2.5 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" /> POST /api/triage → 200 OK
                      </span>
                      <span className="text-neutral-400 text-[9px]">Supabase + CRM</span>
                    </div>
                  </div>
                );
              })()}

              {/* Card 2: Shopify Headless OS 2.0 */}
              {(() => {
                const offset = (2 - activeDeckIndex + 4) % 4;
                const cfg = CARD_TRANSFORMS[offset];
                return (
                  <div
                    className="absolute inset-0 rounded-[24px] p-5 text-white bg-gradient-to-br from-[#1C1710] via-[#261E14] to-[#14100A] border border-amber-500/30 shadow-xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                    style={{
                      transform: cfg.transform,
                      zIndex: cfg.zIndex,
                      opacity: cfg.opacity,
                      pointerEvents: cfg.pointerEvents,
                    }}
                  >
                    <div className="absolute -right-16 -top-16 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 flex items-center gap-1 text-[10px]">
                          <ShoppingBag className="w-3 h-3 text-amber-400" /> E-COMMERCE ACCELERATOR
                        </span>
                        <span className="text-amber-400 font-mono text-[10px] font-bold">OS 2.0 HEADLESS</span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white">
                        Shopify Conversion Engine
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Instant slide cart &amp; automated WhatsApp checkout ping.
                      </p>

                      {/* Interactive Cart Sim Component */}
                      <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-amber-500/20 font-mono text-[11px] space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
                              D2C
                            </span>
                            <div>
                              <p className="text-white font-semibold text-[10px]">Adigz Studio Kit</p>
                              <p className="text-[9px] text-neutral-400">1x Bundle Edition</p>
                            </div>
                          </div>
                          <span className="font-bold text-amber-300 text-xs">$240</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-neutral-400">Checkout Speed</span>
                          <span className="text-emerald-400 font-bold">+2.4x vs Theme</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-400 h-full w-[88%]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Gateway status */}
                    <div className="pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-amber-300 flex items-center gap-1">
                        <Check className="w-3 h-3 text-amber-400" /> Stripe &amp; Razorpay Verified
                      </span>
                      <span className="text-neutral-400">Zero-Flicker</span>
                    </div>
                  </div>
                );
              })()}

              {/* Card 3: Notion Client Command Chamber */}
              {(() => {
                const offset = (3 - activeDeckIndex + 4) % 4;
                const cfg = CARD_TRANSFORMS[offset];
                return (
                  <div
                    className="absolute inset-0 rounded-[24px] p-5 text-white bg-gradient-to-br from-[#1A121F] via-[#24172B] to-[#110B17] border border-purple-500/30 shadow-xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                    style={{
                      transform: cfg.transform,
                      zIndex: cfg.zIndex,
                      opacity: cfg.opacity,
                      pointerEvents: cfg.pointerEvents,
                    }}
                  >
                    <div className="absolute -left-16 -top-16 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30 flex items-center gap-1 text-[10px]">
                          <Layers className="w-3 h-3 text-purple-400" /> COMMAND CHAMBER
                        </span>
                        <span className="text-purple-300 font-mono text-[10px] font-bold">SPRINT PORTAL</span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white">
                        Notion + 48h Loom Vault
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Private transparent tracking with 2-minute video dispatches.
                      </p>

                      {/* 7-Day Sprint Checklist */}
                      <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-purple-500/20 font-mono text-[10px] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-white truncate">
                            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Day 1: Wireframe Architecture
                          </span>
                          <span className="text-emerald-400 font-bold shrink-0">DONE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-white truncate">
                            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Day 2: Figma High-Fidelity
                          </span>
                          <span className="text-emerald-400 font-bold shrink-0">DONE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-purple-300 truncate">
                            <span className="relative flex h-2 w-2 mr-0.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Days 3-5: Edge Engine &amp; Webhooks
                          </span>
                          <span className="text-purple-400 font-bold shrink-0">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Escrow status */}
                    <div className="pt-2.5 border-t border-purple-500/20 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-purple-300 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-purple-400" /> 50/40/10 Escrow
                      </span>
                      <span className="text-neutral-400">48-Hr Loom Updates</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
