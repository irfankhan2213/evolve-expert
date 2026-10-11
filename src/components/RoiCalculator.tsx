'use client';

import React, { useState, useId } from 'react';
import {
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Layers,
} from 'lucide-react';

interface RoiCalculatorProps {
  onNavigateToPricing?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onNavigateToPricing }) => {
  const [invoicesCount, setInvoicesCount] = useState<number>(450);
  const [laborHourlyRate, setLaborHourlyRate] = useState<number>(250); // Default ₹250/hr
  const sliderId = useId();

  // Calculation parameters:
  // 1 invoice takes ~4 minutes manually = 0.0667 hours
  const manualMinutesPerInvoice = 4;
  const manualHoursPerMonth = (invoicesCount * manualMinutesPerInvoice) / 60;
  const manualLaborCostPerMonth = Math.round(manualHoursPerMonth * laborHourlyRate);

  // DocuPulse automated cost formula (tiered volume pricing)
  const getDocuPulseCostPerInvoice = (count: number) => {
    if (count <= 100) return 4.5;
    if (count <= 500) return 2.8;
    if (count <= 1500) return 2.2;
    return 1.8;
  };

  const docuPulseCostPerInvoice = getDocuPulseCostPerInvoice(invoicesCount);
  const docuPulseMonthlyCost = Math.round(invoicesCount * docuPulseCostPerInvoice);

  // Net Savings
  const monthlyRupeesSaved = Math.max(0, manualLaborCostPerMonth - docuPulseMonthlyCost);
  const annualRupeesSaved = monthlyRupeesSaved * 12;
  const percentMoneySaved = Math.min(
    97,
    Math.round(((manualLaborCostPerMonth - docuPulseMonthlyCost) / manualLaborCostPerMonth) * 100)
  );

  // Time saved (DocuPulse averages ~750ms per invoice vs 4 min manual)
  const docuPulseMinutesPerMonth = (invoicesCount * 0.8) / 60; // 0.8 seconds per doc
  const hoursSavedPerMonth = Math.round(manualHoursPerMonth - docuPulseMinutesPerMonth / 60);

  const presets = [
    { label: 'Solo / Freelance', count: 80, badge: 'Starter' },
    { label: 'Growing Agency', count: 450, badge: 'Popular' },
    { label: 'CA & Audit Firm', count: 1800, badge: 'High Volume' },
    { label: 'Enterprise Ops', count: 4200, badge: 'Power Scale' },
  ];

  const handlePricingClick = () => {
    if (onNavigateToPricing) {
      onNavigateToPricing();
    } else {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roi-calculator" className="relative py-20 md:py-28 overflow-hidden bg-zinc-950 text-zinc-100 border-t border-zinc-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-blue-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>FINANCIAL EFFICIENCY TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Stop Burning Capital on{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Manual Data Entry
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Drag the slider to your monthly document volume. See verified hours returned to your team and direct rupee savings per year.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-zinc-800 shadow-2xl p-6 sm:p-10 lg:p-12">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-zinc-800/80">
            <span className="text-xs uppercase tracking-wider font-mono text-zinc-400">
              Quick Scenarios:
            </span>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setInvoicesCount(preset.count)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center space-x-1.5 border ${
                    invoicesCount === preset.count
                      ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500 shadow-sm shadow-indigo-500/20'
                      : 'bg-zinc-800/60 text-zinc-400 border-zinc-700/60 hover:border-zinc-600 hover:text-zinc-200'
                  }`}
                >
                  <span>{preset.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900/80 font-mono text-zinc-300">
                    {preset.count.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8">
            {/* Left Controls Column (5 cols) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Invoices Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor={sliderId} className="text-sm font-semibold text-zinc-200 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span>Monthly Invoices & Receipts</span>
                  </label>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                      {invoicesCount.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">docs/mo</span>
                  </div>
                </div>

                <div className="relative pt-2">
                  <input
                    id={sliderId}
                    type="range"
                    min={50}
                    max={5000}
                    step={25}
                    value={invoicesCount}
                    onChange={(e) => setInvoicesCount(Number(e.target.value))}
                    aria-label="Monthly Invoices and Receipts slider"
                    className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-2">
                    <span>50 docs</span>
                    <span>1,500 docs</span>
                    <span>3,000 docs</span>
                    <span>5,000 docs</span>
                  </div>
                </div>
              </div>

              {/* Labor Hourly Benchmark */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-zinc-300">Data Entry Labor Cost Benchmark</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">₹{laborHourlyRate}/hour</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Based on average Indian back-office/CA clerk manual processing speed: <strong>4 mins per invoice</strong> (typing, GST verification, tax categorization).
                </p>
                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={() => setLaborHourlyRate(200)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                      laborHourlyRate === 200
                        ? 'bg-zinc-800 text-white border-zinc-600'
                        : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                    }`}
                  >
                    Junior (₹200/hr)
                  </button>
                  <button
                    onClick={() => setLaborHourlyRate(250)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                      laborHourlyRate === 250
                        ? 'bg-zinc-800 text-white border-zinc-600'
                        : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                    }`}
                  >
                    Standard CA (₹250/hr)
                  </button>
                  <button
                    onClick={() => setLaborHourlyRate(400)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                      laborHourlyRate === 400
                        ? 'bg-zinc-800 text-white border-zinc-600'
                        : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                    }`}
                  >
                    Senior Accountant (₹400/hr)
                  </button>
                </div>
              </div>

              {/* Breakdown comparison metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Manual Time Taken</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-200">
                    {manualHoursPerMonth.toFixed(1)}{' '}
                    <span className="text-xs font-normal text-zinc-500">hours/mo</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    ~{(manualHoursPerMonth / 8).toFixed(1)} full workdays lost
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>DocuPulse AI Time</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-indigo-300">
                    {Math.round(invoicesCount * 0.8)} <span className="text-xs font-normal text-zinc-500">seconds</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 mt-1">
                    99.6% turnaround reduction
                  </p>
                </div>
              </div>
            </div>

            {/* Right Output / High-Contrast Callout Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-950/50 via-zinc-900 to-emerald-950/30 border border-indigo-500/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Savings Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {percentMoneySaved}% Cost Reduction
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {hoursSavedPerMonth} Hours Reclaimed/mo
                  </span>
                </div>

                {/* Big Savings Number */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-mono text-zinc-400">
                    Direct Annual Labor Savings
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white">
                      ₹{annualRupeesSaved.toLocaleString()}
                    </span>
                    <span className="text-sm font-mono text-emerald-400 font-semibold">/year</span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400">
                    Net monthly savings: <strong>₹{monthlyRupeesSaved.toLocaleString()}</strong> every 30 days
                  </p>
                </div>

                {/* Visual Comparative Bars */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Manual Entry Cost:</span>
                      <span className="font-mono text-rose-400 font-bold">₹{manualLaborCostPerMonth.toLocaleString()}/mo</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-rose-500/80 rounded-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-300 font-medium">DocuPulse Automated Cost:</span>
                      <span className="font-mono text-emerald-400 font-bold">₹{docuPulseMonthlyCost.toLocaleString()}/mo</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.max(4, Math.min(100, (docuPulseMonthlyCost / manualLaborCostPerMonth) * 100))}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Micro checklist */}
                <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero manual retyping</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Auto GST verification</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant Excel / Tally sync</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Credits never expire</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-8">
                  <button
                    onClick={handlePricingClick}
                    className="w-full group flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Start Saving with DocuPulse</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-center text-zinc-500 mt-2">
                    3 Free Scans included • No credit card required to test
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
