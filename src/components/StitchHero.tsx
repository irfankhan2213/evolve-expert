"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  PhoneCall,
  Bot,
  Zap,
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
        {/* Left Column: Monumental Title & Pitch (Rendered without opacity delay for instant FCP/LCP) */}
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 backdrop-blur-sm shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Lead-to-Booking System (&apos;26) · Sub-60s Speed to Lead
          </div>

          <div className="relative">
            <h1 className="text-[44px] sm:text-[68px] lg:text-[80px] font-extrabold tracking-[-0.04em] leading-[0.94] uppercase text-[#111111]">
              NEVER LOSE A LEAD
              <br />
              <span className="text-neutral-400 font-bold">TO A MISSED CALL.</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Every inbound phone call, WhatsApp inquiry, and web form lead answered in under{" "}
            <span className="text-[#111111] font-bold underline decoration-emerald-400 underline-offset-4">
              60 seconds
            </span>
            , qualified by AI, and booked into your calendar 24/7. Turnkey deployment in 14 days with 50/50 escrow.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Link
                href="/pricing#plans"
                className="inline-flex items-center gap-3 bg-[#111111] text-white pl-6 pr-2.5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition group shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Link
                href="#proof"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition shadow-2xs"
              >
                View 6 Live Builds
              </Link>
            </div>
          </div>

          {/* Bottom-Left Mini Proof Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg">
            <div className="bg-[#141416] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm cursor-default hover:-translate-y-1 transition-transform duration-200">
              <span className="text-3xl font-extrabold tracking-tight">&lt; 60s</span>
              <span className="text-[11px] text-neutral-400 mt-3 font-medium leading-snug">
                Sub-60s Speed-to-Lead Guarantee
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default hover:-translate-y-1 transition-transform duration-200">
              <span className="text-3xl font-extrabold tracking-tight text-[#111111]">
                14 Days
              </span>
              <span className="text-[11px] text-neutral-500 mt-3 font-medium leading-snug">
                From Intake to Live System
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default hover:-translate-y-1 transition-transform duration-200">
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
            </div>
          </div>
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
              {/* Card 0: 24/7 AI Voice Answering Telephony Engine */}
              {(() => {
                const offset = (0 - activeDeckIndex + 4) % 4;
                const cfg = CARD_TRANSFORMS[offset];
                return (
                  <div
                    className="absolute inset-0 rounded-[24px] p-5 text-white bg-gradient-to-br from-[#10141D] via-[#161D2B] to-[#0D1117] border border-sky-500/25 shadow-xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
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
                          <PhoneCall className="w-3 h-3 text-sky-400" /> TELEPHONY ENGINE 01
                        </span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          CARRIER LIVE
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between">
                        <h3 className="text-lg font-bold tracking-tight text-white">24/7 AI Voice Answering</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                          Sub-10s Pickup
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                        Conversational voice pickup with instant Google &amp; CRM slot booking.
                      </p>

                      {/* Telephony Gauges Grid */}
                      <div className="grid grid-cols-3 gap-2 mt-3 font-mono text-xs">
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">Pickup Speed</span>
                          <p className="text-base font-bold text-white mt-0.5">
                            {isTurbo ? "< 8s" : "12s"}
                          </p>
                          <span className="text-[9px] text-emerald-400">&lt; 2 Rings</span>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">Inbound Held</span>
                          <p className="text-base font-bold text-sky-400 mt-0.5">
                            99.4%
                          </p>
                          <span className="text-[9px] text-neutral-400">0 Dropped Leads</span>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 p-2.5 rounded-xl">
                          <span className="text-[9px] text-neutral-400 uppercase block">Calendar Sync</span>
                          <p className="text-base font-bold text-emerald-400 mt-0.5">100%</p>
                          <span className="text-[9px] text-neutral-400">Live Lock</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Telephony Audit Switch */}
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
                          aria-label="Toggle Telephony Mode"
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full bg-white transition-transform shadow-sm ${
                              isTurbo ? "translate-x-3.5" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="font-mono text-neutral-300 text-[11px]">
                          {isTurbo ? "24/7 Inbound Telephony Active" : "Carrier Trunk Standby"}
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
                          &ldquo;Hey! Want to see your missed-call revenue loss or 14-day pricing?&rdquo;
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
                              triggerPromptChip("14-day go-live guaranteed");
                            }}
                            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] hover:bg-emerald-500/40 transition-colors cursor-pointer"
                          >
                            ⚡ 14-Day Go-Live
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerPromptChip("$2,500 Founding Client");
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

              {/* Card 2: Instant Lead Recovery & Missed-Call Text Back */}
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
                          <Zap className="w-3 h-3 text-amber-400" /> SPEED-TO-LEAD 02
                        </span>
                        <span className="text-amber-400 font-mono text-[10px] font-bold">SUB-60S TEXT BACK</span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white">
                        Missed-Call Lead Recovery
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Instant SMS &amp; WhatsApp qualification when your team is on another job.
                      </p>

                      {/* Interactive Recovery Simulation */}
                      <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-amber-500/20 font-mono text-[11px] space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
                              SMS
                            </span>
                            <div>
                              <p className="text-white font-semibold text-[10px]">Inbound Missed Call</p>
                              <p className="text-[9px] text-neutral-400">Triggered in 11s · Auto-Reply</p>
                            </div>
                          </div>
                          <span className="font-bold text-emerald-400 text-xs">Saved Lead</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-neutral-300 truncate max-w-[190px]">&ldquo;Hey! Saw we just missed you...&rdquo;</span>
                          <span className="text-amber-300 font-bold shrink-0">Booked $600 Job</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-400 h-full w-[94%]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Conversion status */}
                    <div className="pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-amber-300 flex items-center gap-1">
                        <Check className="w-3 h-3 text-amber-400" /> 391% Conversion Lift
                      </span>
                      <span className="text-neutral-400">Zero Lost Calls</span>
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
                        <span className="text-purple-300 font-mono text-[10px] font-bold">14-DAY ROADMAP</span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white">
                        Notion Command &amp; 20-Call Test
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Transparent milestone tracking with 20 live acceptance calls.
                      </p>

                      {/* 14-Day Delivery Checklist */}
                      <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-purple-500/20 font-mono text-[10px] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-white truncate">
                            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Days 1-3: Intake &amp; Telephony Routing
                          </span>
                          <span className="text-emerald-400 font-bold shrink-0">DONE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-white truncate">
                            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Days 4-10: Voice &amp; WhatsApp Engine
                          </span>
                          <span className="text-emerald-400 font-bold shrink-0">DONE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-purple-300 truncate">
                            <span className="relative flex h-2 w-2 mr-0.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Days 11-13: 20-Call Acceptance Test
                          </span>
                          <span className="text-purple-400 font-bold shrink-0">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Escrow status */}
                    <div className="pt-2.5 border-t border-purple-500/20 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-purple-300 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-purple-400" /> 50/50 Escrow
                      </span>
                      <span className="text-neutral-400">20-Call Sign-Off</span>
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
