"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";

export default function RoiCalculator() {
  const [invoicesPerMonth, setInvoicesPerMonth] = useState<number>(500);

  // Assumptions for calculation:
  // Manual processing time: 4 minutes per invoice (data entry + GSTIN tax verification)
  // Human data-entry hourly wage: ₹250/hour (~$3/hr in India, much higher abroad)
  // Veryfi / Rossum legacy OCR: $500/month flat enterprise commitment (~₹41,500/mo)
  // EvolveExpert cost:
  // - 100 invoices: ₹249
  // - 500 invoices: ₹699
  // - 1,500 invoices: ₹1,499
  // - 5,000 invoices: ₹2,999
  // Dynamic formula for EvolveExpert:
  const getEvolveCost = (count: number) => {
    if (count <= 100) return 249;
    if (count <= 500) return 699;
    if (count <= 1500) return 1499;
    if (count <= 5000) return 2999;
    return Math.round(2999 + (count - 5000) * 0.5);
  };

  const manualHoursPerMonth = Math.round((invoicesPerMonth * 4) / 60);
  const manualCostPerMonth = manualHoursPerMonth * 250;
  const legacySoftwareCost = 41500; // $500 flat minimum commitment
  const evolveCostPerMonth = getEvolveCost(invoicesPerMonth);

  const monthlySavingsVsManual = Math.max(0, manualCostPerMonth - evolveCostPerMonth);
  const annualSavingsVsManual = monthlySavingsVsManual * 12;
  const savingsPercent = Math.round(
    ((manualCostPerMonth - evolveCostPerMonth) / manualCostPerMonth) * 100
  );

  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Cost &amp; TCO Analyzer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Calculate Your Exact Automation ROI
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Compare manual data entry labor and legacy $500/month enterprise OCR contracts against EvolveExpert’s sub-second statutory API.
        </p>
      </div>

      {/* Main Interactive Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Slider & Controls (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Monthly Document Volume
                </span>
                <p className="text-sm text-zinc-300 font-medium">Invoices, bills &amp; receipts processed per month</p>
              </div>
              <div className="flex items-baseline gap-1.5 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800 self-start sm:self-auto">
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  {invoicesPerMonth.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-mono text-zinc-500">docs/mo</span>
              </div>
            </div>

            {/* Range Slider */}
            <div className="space-y-3 pt-2">
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={invoicesPerMonth}
                onChange={(e) => setInvoicesPerMonth(Number(e.target.value))}
                aria-label="Monthly invoice volume slider"
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                <span>50 docs (Starter)</span>
                <span>500 docs (Growth)</span>
                <span>1,500 docs (Scale)</span>
                <span>5,000+ docs (Enterprise)</span>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Manual Time</span>
                </div>
                <div className="text-lg font-bold font-mono text-white">
                  {manualHoursPerMonth} <span className="text-xs text-zinc-500 font-normal">hrs/mo</span>
                </div>
                <p className="text-[10px] text-zinc-500">At ~4 mins per manual entry &amp; tax check</p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <TrendingUp className="w-3.5 h-3.5 text-red-400" />
                  <span>Manual Labor Cost</span>
                </div>
                <div className="text-lg font-bold font-mono text-red-400">
                  ₹{manualCostPerMonth.toLocaleString("en-IN")}
                </div>
                <p className="text-[10px] text-zinc-500">Benchmark @ ₹250/hr accounting rate</p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EvolveExpert API</span>
                </div>
                <div className="text-lg font-bold font-mono text-emerald-400">
                  ₹{evolveCostPerMonth.toLocaleString("en-IN")}
                </div>
                <p className="text-[10px] text-zinc-500">&lt;800ms extraction + Luhn Mod-36</p>
              </div>
            </div>
          </div>

          {/* Legacy OCR Callout */}
          <div className="pt-4 border-t border-zinc-800/60 text-xs text-zinc-400 flex items-center justify-between">
            <span>Legacy OCR Minimums (Veryfi / Rossum):</span>
            <span className="font-mono text-zinc-300 line-through">
              $500/mo (₹{legacySoftwareCost.toLocaleString("en-IN")})
            </span>
          </div>
        </div>

        {/* Right Column: Net Savings Hero Card (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-zinc-900 to-zinc-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Projected Net Return</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Annual Direct Cost Reduction
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400 tracking-tight">
                ₹{annualSavingsVsManual.toLocaleString("en-IN")}
                <span className="text-xs font-sans text-zinc-400 font-normal ml-2">/year</span>
              </div>
              <p className="text-xs text-zinc-400 pt-1">
                Saving{" "}
                <span className="text-emerald-300 font-semibold">{savingsPercent}%</span> of manual operational costs while eliminating data entry errors.
              </p>
            </div>

            {/* Key Advantages Checklist */}
            <div className="space-y-2.5 pt-4 border-t border-emerald-900/40 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Recovers {manualHoursPerMonth * 12} hours of manual bookkeeping per year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic Luhn Mod-36 prevents GST filing rejections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Instant Razorpay UPI activation with zero contract lock-in</span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <a
              href="#pricing"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
            >
              <span>Lock In Developer Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
