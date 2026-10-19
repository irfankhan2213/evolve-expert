"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ResourcesClientView() {
  const [url, setUrl] = useState("");
  const [cms, setCms] = useState("wordpress");
  const [currentSpeed, setCurrentSpeed] = useState("3.8");
  const [monthlyTraffic, setMonthlyTraffic] = useState("10000");

  const speedNum = parseFloat(currentSpeed) || 3.0;
  const trafficNum = parseInt(monthlyTraffic) || 10000;

  // Conversion loss calculation heuristic based on Google Core Web Vitals research:
  // Every 1 second delay reduces conversions by ~7-10%
  const dropOffPercent = Math.min(Math.round((speedNum - 0.5) * 8.5), 65);
  const potentialConversionUplift = Math.round(dropOffPercent * 1.4);
  const lostVisitors = Math.round((trafficNum * dropOffPercent) / 100);

  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Performance &amp; Conversion Diagnostics
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111111]">
            Website Speed &amp;{" "}
            <span className="font-editorial text-emerald-700 italic">Conversion Audit</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            See how much revenue your current website architecture is leaking due to slow load times and bloated script payloads.
          </p>
        </motion.div>
      </section>

      {/* Calculator Tool */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xl font-bold text-[#111111] border-b border-neutral-100 pb-3">
              Your Current Site Parameters
            </h2>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Your Website URL
              </label>
              <input
                type="text"
                placeholder="https://yourcompany.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Current CMS / Tech Platform
              </label>
              <select
                value={cms}
                onChange={(e) => setCms(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
              >
                <option value="wordpress">WordPress / WooCommerce (Average 3.5s – 5.2s)</option>
                <option value="webflow">Webflow (Average 2.2s – 3.8s)</option>
                <option value="shopify">Shopify Default Theme (Average 2.5s – 4.0s)</option>
                <option value="wix">Wix / Squarespace (Average 3.8s – 6.0s)</option>
                <option value="custom">Legacy Custom Build (Average 2.8s – 4.5s)</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-500">
                <span>Estimated Mobile Load Time (Seconds)</span>
                <span className="text-[#111111] font-mono text-sm font-bold bg-neutral-100 px-2 py-0.5 rounded">
                  {speedNum}s
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={currentSpeed}
                onChange={(e) => setCurrentSpeed(e.target.value)}
                className="w-full accent-[#111111] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>0.5s (Next.js 16)</span>
                <span>3.0s (Average)</span>
                <span>8.0s (Severe Lag)</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Monthly Unique Visitors
              </label>
              <input
                type="number"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition font-mono"
              />
            </div>
          </div>

          {/* Diagnostic Output Column */}
          <motion.div
            layout
            className="lg:col-span-6 bg-[#0E0E11] text-white rounded-[28px] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Diagnostic Result
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Google CWV Benchmark
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="text-xs text-neutral-400 block mb-1">
                    Estimated Drop-off
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={dropOffPercent}
                      initial={{ scale: 0.95, opacity: 0.6 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className="text-3xl sm:text-4xl font-extrabold text-rose-400"
                    >
                      -{dropOffPercent}%
                    </motion.p>
                  </AnimatePresence>
                  <span className="text-[11px] text-neutral-400 block mt-1 font-mono">
                    ~{lostVisitors.toLocaleString()} lost visitors/mo
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="text-xs text-neutral-400 block mb-1">
                    EvolveExpert Speed
                  </span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                    0.4s
                  </p>
                  <span className="text-[11px] text-emerald-300/80 block mt-1 font-mono">
                    Sub-500ms Edge Delivery
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-neutral-300">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Estimated Conversion Lift with EvolveExpert Sprint:
                </p>
                <p className="text-sm font-bold text-emerald-300">
                  +{potentialConversionUplift}% Higher Checkout &amp; Lead Form Completion
                </p>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Eliminating slow TTFB and layout shifts gives your buyers zero hesitation when booking or checking out.
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#prototype"
                  className="w-full py-4 rounded-full bg-white text-[#111111] font-bold text-sm text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Claim Free 24-Hour Prototype for Your Site →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <StitchFooter />
    </main>
  );
}
