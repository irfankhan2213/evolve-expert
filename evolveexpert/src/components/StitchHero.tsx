"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConstraintItem {
  id: string;
  label: string;
  category: string;
  severity: "high" | "critical";
}

const CONSTRAINTS: ConstraintItem[] = [
  {
    id: "speed",
    label: "Mobile load time takes > 2.5s (leaking 40%+ of paid ad traffic)",
    category: "Performance",
    severity: "critical",
  },
  {
    id: "whatsapp",
    label: "Zero instant WhatsApp or AI triage for after-hours leads",
    category: "Conversion",
    severity: "high",
  },
  {
    id: "retainer",
    label: "Paying high monthly agency retainers without 100% code ownership",
    category: "Governance",
    severity: "critical",
  },
  {
    id: "cwv",
    label: "Failing Google Core Web Vitals (red/yellow Mobile PageSpeed score)",
    category: "Technical SEO",
    severity: "high",
  },
  {
    id: "timeline",
    label: "Stuck in a 2-month agency delay instead of a rigid 7-day sprint",
    category: "Delivery Velocity",
    severity: "critical",
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Monumental Title & Pitch */}
        <div className="lg:col-span-6 space-y-7">
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
            <h1 className="text-[52px] sm:text-[76px] lg:text-[84px] font-extrabold tracking-[-0.04em] leading-[0.92] uppercase text-[#111111]">
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

        {/* Right Column: Interactive Sprint Bottleneck Checklist (WeScale Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/10 shadow-sm relative overflow-hidden">
            {/* Top Card Badge */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-800">
                  Sprint Bottleneck Checklist
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">
                30-Sec Diagnosis
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                Tap everything that is true for your platform.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500">
                Honest answers. See how much friction is holding back your conversions.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2.5">
              {CONSTRAINTS.map((item) => {
                const isChecked = selectedConstraints.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleConstraint(item.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                      isChecked
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                        : "bg-neutral-50/80 text-neutral-800 border-neutral-200/80 hover:bg-neutral-100/80"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? "bg-emerald-500 text-white"
                          : "border border-neutral-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs sm:text-sm font-medium leading-snug ${
                          isChecked ? "text-white" : "text-neutral-800"
                        }`}
                      >
                        {item.label}
                      </p>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block mt-1 ${
                          isChecked ? "text-emerald-300" : "text-neutral-400"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Box */}
            <div className="mt-6 pt-5 border-t border-neutral-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#111111]">
                      {count} {count === 1 ? "Constraint" : "Constraints"} Identified
                    </span>
                    {count > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-50 text-rose-700 font-bold border border-rose-200">
                        High Leakage
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {count === 0
                      ? "Select constraints above to diagnose your bottleneck."
                      : "Resolvable in 1 turnkey 7-day engineering sprint."}
                  </p>
                </div>

                <Link
                  href="/pricing#plans"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-sm shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fix in 7-Day Sprint →</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
