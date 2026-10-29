"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { DollarSign, PhoneMissed, ArrowRight, ShieldCheck, MessageSquare, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export function ResourcesClientView() {
  const [missedCalls, setMissedCalls] = useState(20);
  const [closeRate, setCloseRate] = useState(25);
  const [avgJobRevenue, setAvgJobRevenue] = useState(600);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  // Calculations
  const lostJobsPerMonth = Math.round(missedCalls * (closeRate / 100));
  const monthlyRevenueLostUSD = lostJobsPerMonth * avgJobRevenue;
  const annualRevenueLostUSD = monthlyRevenueLostUSD * 12;

  // Approximate INR conversion (1 USD ~ 83 INR for reference or native calculation)
  const monthlyRevenueLost = currency === "USD" ? monthlyRevenueLostUSD : monthlyRevenueLostUSD * 25;
  const annualRevenueLost = currency === "USD" ? annualRevenueLostUSD : annualRevenueLostUSD * 25;
  const symbol = currency === "USD" ? "$" : "₹";

  const waText = `Hi EvolveExpert, I ran your Revenue Calculator: my business is losing an estimated ${symbol}${monthlyRevenueLost.toLocaleString()}/month (${symbol}${annualRevenueLost.toLocaleString()}/year) from ~${missedCalls} missed calls/slow replies. I'd like to discuss the 14-day Lead-to-Booking System.`;
  const whatsappUrl = `https://wa.me/917696936377?text=${encodeURIComponent(waText)}`;

  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Loss Diagnostics</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111111]">
            Missed-Call &amp; Slow-Reply{" "}
            <span className="font-editorial text-emerald-700 italic">Revenue Calculator</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            78% of customers buy from the business that answers first. Calculate how much profit is leaking to your competitors right now.
          </p>

          {/* Currency Toggle */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex bg-white p-1 rounded-full border border-neutral-300 shadow-2xs">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  currency === "USD" ? "bg-[#111111] text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  currency === "INR" ? "bg-[#111111] text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-neutral-100 pb-4">
              <h2 className="text-xl font-bold text-[#111111]">
                Your Monthly Inbound Parameters
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Adjust sliders to model your inbound volume and pricing ticket.
              </p>
            </div>

            {/* Slider 1: Missed Calls */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="missed-calls-slider" className="font-semibold text-neutral-800">
                  Missed Calls or Slow Replies (&gt;15 mins) Per Month
                </label>
                <span className="font-mono font-bold text-base px-3 py-1 rounded-lg bg-neutral-100 text-neutral-900">
                  {missedCalls} calls
                </span>
              </div>
              <input
                id="missed-calls-slider"
                type="range"
                min="5"
                max="120"
                step="1"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                <span>5 calls</span>
                <span>60 calls</span>
                <span>120 calls</span>
              </div>
            </div>

            {/* Slider 2: Close Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="close-rate-slider" className="font-semibold text-neutral-800">
                  Close Rate If Answered in Under 60 Seconds
                </label>
                <span className="font-mono font-bold text-base px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800">
                  {closeRate}%
                </span>
              </div>
              <input
                id="close-rate-slider"
                type="range"
                min="10"
                max="60"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                <span>10% (Low)</span>
                <span>25% (Industry Avg)</span>
                <span>60% (High-Intent)</span>
              </div>
            </div>

            {/* Slider 3: Average Job Revenue */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="avg-revenue-slider" className="font-semibold text-neutral-800">
                  Average Revenue Per Booked Job
                </label>
                <span className="font-mono font-bold text-base px-3 py-1 rounded-lg bg-neutral-100 text-neutral-900">
                  {symbol}{avgJobRevenue * (currency === "USD" ? 1 : 25)}
                </span>
              </div>
              <input
                id="avg-revenue-slider"
                type="range"
                min="100"
                max="3000"
                step="50"
                value={avgJobRevenue}
                onChange={(e) => setAvgJobRevenue(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                <span>{symbol}{100 * (currency === "USD" ? 1 : 25)}</span>
                <span>{symbol}{1500 * (currency === "USD" ? 1 : 25)}</span>
                <span>{symbol}{3000 * (currency === "USD" ? 1 : 25)}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-600 flex items-start gap-3">
              <PhoneMissed className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>The 1-in-4 Rule:</strong> Missing {missedCalls} calls at a {closeRate}% close rate equals{" "}
                <span className="text-rose-600 font-bold">{lostJobsPerMonth} lost paying jobs</span> every month that book with competitors who answer first.
              </span>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-[#0E0E11] text-white rounded-[28px] p-8 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Revenue Leak Report
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  LOST REVENUE
                </span>
              </div>

              {/* Monthly Loss Display */}
              <div className="space-y-1">
                <span className="text-xs text-neutral-400 block font-mono">
                  Monthly Revenue Lost
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-rose-400 font-mono tracking-tight">
                  -{symbol}{monthlyRevenueLost.toLocaleString()}
                  <span className="text-xs text-neutral-400 font-normal ml-1">/ month</span>
                </div>
              </div>

              {/* Annualized Loss Display */}
              <div className="space-y-1 pt-2">
                <span className="text-xs text-neutral-400 block font-mono">
                  Annual Compounded Loss
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  -{symbol}{annualRevenueLost.toLocaleString()}
                  <span className="text-xs text-neutral-400 font-normal ml-1">/ year</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Lost Booked Jobs:</span>
                  <span className="text-white font-bold">{lostJobsPerMonth} jobs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Response Target:</span>
                  <span className="text-emerald-400 font-bold">&lt; 60 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Turnaround:</span>
                  <span className="text-white">14-Day Go-Live</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs text-center flex items-center justify-center gap-2 hover:bg-emerald-600 transition shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss My Calculation on WhatsApp →</span>
              </motion.a>

              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-white text-[#111111] font-bold text-xs text-center block hover:bg-neutral-200 transition"
              >
                Deploy Lead-to-Booking System (14 Days) →
              </Link>

              <div className="pt-2 text-center">
                <div className="inline-flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Backed by 50/50 escrow &amp; 20-call sign-off</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <StitchFooter />
    </main>
  );
}
