"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConstraintItem {
  id: string;
  label: string;
}

const CONSTRAINTS: ConstraintItem[] = [
  {
    id: "speed",
    label: "Mobile load > 2.5s (leaks 40%+ ad traffic)",
  },
  {
    id: "whatsapp",
    label: "Zero 24/7 WhatsApp or AI lead triage",
  },
  {
    id: "retainer",
    label: "High retainers without code ownership",
  },
  {
    id: "cwv",
    label: "Failing Core Web Vitals (red PageSpeed)",
  },
  {
    id: "timeline",
    label: "2-month agency delays vs. 7-day sprints",
  },
];

export function StitchHero() {
  const [selectedConstraints, setSelectedConstraints] = useState<string[]>([
    "speed",
    "whatsapp",
  ]);

  const toggleConstraint = (id: string) => {
    setSelectedConstraints((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const count = selectedConstraints.length;

  return (
    <section className="relative max-w-[1360px] mx-auto px-5 sm:px-10 pt-4 pb-16 overflow-hidden">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Monumental Title & Pitch */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
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
            EvolveExpert Studio — Pure Web &amp; AI Systems
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[50px] sm:text-[72px] lg:text-[80px] font-extrabold tracking-[-0.04em] leading-[0.92] uppercase text-[#111111]">
              PURE WEB
              <span className="text-sm sm:text-base font-mono align-top ml-3 text-neutral-500 font-normal">
                (&apos;26)
              </span>
              <br />
              <span className="text-neutral-400 font-bold">&amp; AI SYSTEMS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl"
          >
            Most platforms stall not because the product is weak, but because web architecture is bloated. We engineer high-converting Next.js 16 platforms and 24/7 WhatsApp AI concierges in{" "}
            <span className="font-semibold text-[#111111] underline decoration-emerald-500 decoration-2 underline-offset-4">
              rigid 7-day asynchronous sprints
            </span>
            . Sub-0.5s mobile speed, 0 account managers, 50/40/10 milestone escrow.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/pricing#plans"
                className="px-8 py-4 rounded-full bg-[#111111] text-white font-semibold text-sm hover:bg-neutral-800 active:scale-95 transition shadow-sm inline-flex items-center gap-2 group"
              >
                <span>Book 7-Day Sprint</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/proof"
                className="px-7 py-4 rounded-full bg-white border border-neutral-300 text-neutral-800 font-semibold text-sm hover:bg-neutral-50 active:scale-95 transition shadow-2xs inline-flex items-center gap-2"
              >
                <span>View Results &amp; Proof</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Guarantees Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>100% Code Ownership Transferred</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>50/40/10 Milestone Escrow</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Sub-0.5s Mobile LCP Guaranteed</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Ultra-Compact Sprint Bottleneck Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-black/10 shadow-sm relative overflow-hidden w-full max-w-[370px]">
            {/* Top Bar: Window Dots & Status */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-neutral-800">
                  Bottleneck Check
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live 30s</span>
              </div>
            </div>

            {/* Micro Prompt */}
            <p className="text-[11px] text-neutral-500 font-mono mb-2">
              Tap issues true for your platform:
            </p>

            {/* Checklist Items: Ultra-Compact Single Row */}
            <div className="space-y-1.5">
              {CONSTRAINTS.map((item) => {
                const isChecked = selectedConstraints.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleConstraint(item.id)}
                    className={`w-full text-left py-2 px-2.5 rounded-lg border transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                      isChecked
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs"
                        : "bg-neutral-50/90 hover:bg-neutral-100/90 text-neutral-800 border-neutral-200/70"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? "bg-emerald-500 text-white"
                          : "border border-neutral-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-[12px] font-medium leading-tight truncate ${
                        isChecked ? "text-white" : "text-neutral-800"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Diagnostic Scorecard & Bar */}
            <div className="mt-3 pt-2.5 border-t border-neutral-100">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500">Constraints Found</span>
                <span className="font-bold text-[#111111]">{count} / 5</span>
              </div>

              {/* 5-Segment Progress Bar */}
              <div className="flex gap-1 h-1.5 my-2" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-colors duration-200 ${
                      i < count ? "bg-emerald-500" : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <p className="text-[11px] text-neutral-600 leading-tight">
                  {count === 0
                    ? "Tap items above to diagnose."
                    : count >= 3
                    ? "High conversion leakage."
                    : "Resolvable in 7-day sprint."}
                </p>

                <Link
                  href="/pricing#plans"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] transition shrink-0 shadow-2xs"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Fix in 7 Days →</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
