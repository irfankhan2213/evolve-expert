'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  FileSpreadsheet,
  Zap,
  Server,
  Coins,
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD' | 'EUR' | 'GBP'>('INR');

  const currencies = {
    INR: { symbol: '₹', itemTotal: '1,49,500.00', tax: '₹26,910.00 (18% GST)', label: 'Indian Rupee' },
    USD: { symbol: '$', itemTotal: '1,795.00', tax: '$143.60 (8% State Tax)', label: 'US Dollar' },
    EUR: { symbol: '€', itemTotal: '1,640.00', tax: '€328.00 (20% VAT)', label: 'Eurozone' },
    GBP: { symbol: '£', itemTotal: '1,410.00', tax: '£282.00 (20% UK VAT)', label: 'British Pound' },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for High-Precision{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Financial Workflows
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Eliminate error-prone OCR. DocuPulse combines multimodal vision transformers with native Indian GST compliance and seamless ERP exports.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: GSTIN Checksum Engine (Span 7 cols) */}
          <div className="md:col-span-7 rounded-3xl p-7 sm:p-9 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  India GST Compliant
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Real-Time Indian GSTIN & Tax Checksum Verification
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Automatically verifies 15-character GST numbers against the official Luhn Mod-36 checksum algorithm. Pinpoints fraudulent bills before they hit your books.
              </p>
            </div>

            {/* Visual Interactive Inspector */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Input GSTIN:</span>
                <span className="flex items-center space-x-1.5 text-emerald-400 text-[11px] font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>MOD-36 CHECKSUM PASS</span>
                </span>
              </div>

              {/* GST Segment Breakdown */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 text-xs sm:text-sm overflow-x-auto py-1">
                <div className="px-2.5 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-center">
                  <div className="font-bold">27</div>
                  <div className="text-[9px] text-zinc-400 uppercase tracking-tighter">MH State</div>
                </div>
                <span className="text-zinc-600">-</span>
                <div className="px-2.5 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 text-center">
                  <div className="font-bold">AAPCS1294K</div>
                  <div className="text-[9px] text-zinc-400 uppercase tracking-tighter">PAN Record</div>
                </div>
                <span className="text-zinc-600">-</span>
                <div className="px-2 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-center">
                  <div className="font-bold">1</div>
                  <div className="text-[9px] text-zinc-400 uppercase tracking-tighter">Entity</div>
                </div>
                <div className="px-2 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-center">
                  <div className="font-bold">Z</div>
                  <div className="text-[9px] text-zinc-400 uppercase tracking-tighter">Default</div>
                </div>
                <div className="px-2 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center">
                  <div className="font-bold">5</div>
                  <div className="text-[9px] text-emerald-400 uppercase tracking-tighter">Check</div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Verified Entity: CloudScale Systems India Pvt Ltd</span>
                <span className="text-emerald-400 font-semibold">Active Status</span>
              </div>
            </div>
          </div>

          {/* Card 2: Line-Item Multi-Currency OCR (Span 5 cols) */}
          <div className="md:col-span-5 rounded-3xl p-7 sm:p-9 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Coins className="w-5 h-5" />
                </div>
                {/* Currency Switcher */}
                <div className="flex bg-zinc-800/80 p-0.5 rounded-lg border border-zinc-700 text-[11px] font-mono">
                  {(['INR', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        selectedCurrency === curr
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Multi-Currency OCR Engine
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Native parsing for INR, USD, EUR, and GBP with auto-detection of regional VAT, CGST/SGST/IGST tax breakdowns and symbol normalization.
              </p>
            </div>

            {/* Currency Preview Card */}
            <div className="mt-6 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between text-zinc-500">
                <span>Selected Currency:</span>
                <span className="text-zinc-200 font-bold">{currencies[selectedCurrency].label}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-zinc-400">Detected Total:</span>
                <span className="text-xl font-bold text-white tracking-tight">
                  {currencies[selectedCurrency].symbol} {currencies[selectedCurrency].itemTotal}
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 pt-1 border-t border-zinc-900">
                <span>Tax Breakdown:</span>
                <span className="text-indigo-400 font-semibold">{currencies[selectedCurrency].tax}</span>
              </div>
            </div>
          </div>

          {/* Card 3: 1-Click Export to Tally, Zoho, QuickBooks (Span 6 cols) */}
          <div className="md:col-span-6 rounded-3xl p-7 sm:p-9 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Zero Schema Mapping
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                1-Click Accounting & ERP Sync
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Export clean, audit-ready ledgers directly compatible with India&apos;s leading ERP systems and international bookkeepers.
              </p>
            </div>

            {/* Accounting Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center hover:border-indigo-500/50 transition-colors">
                <div className="font-bold text-indigo-400 text-sm">TallyPrime</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">XML Ledger</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center hover:border-emerald-500/50 transition-colors">
                <div className="font-bold text-emerald-400 text-sm">Zoho Books</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Direct Sync</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center hover:border-blue-500/50 transition-colors">
                <div className="font-bold text-blue-400 text-sm">QuickBooks</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">API Ready</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center hover:border-amber-500/50 transition-colors">
                <div className="font-bold text-amber-400 text-sm">Excel / CSV</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Formatted Sheet</div>
              </div>
            </div>
          </div>

          {/* Card 4: Sub-Second Latency & Accuracy Telemetry (Span 6 cols) */}
          <div className="md:col-span-6 rounded-3xl p-7 sm:p-9 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>99.2% Model Accuracy</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Sub-Second Cloud Latency (&lt;900ms)
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Optimized vision-language inference with edge pipelines situated in Mumbai, Frankfurt, and Virginia to ensure zero lag at scale.
              </p>
            </div>

            {/* Latency Telemetry Bars */}
            <div className="mt-6 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 font-mono space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 flex items-center space-x-1.5">
                  <Server className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Edge Region (ap-south-1 Mumbai)</span>
                </span>
                <span className="text-emerald-400 font-bold">742 ms</span>
              </div>

              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full w-[42%]" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-900 text-[11px] text-center text-zinc-500">
                <div>
                  <span className="block text-zinc-300 font-bold">99.2%</span>
                  <span>Entity F1 Score</span>
                </div>
                <div>
                  <span className="block text-zinc-300 font-bold">&lt;0.01%</span>
                  <span>Hallucination Rate</span>
                </div>
                <div>
                  <span className="block text-emerald-400 font-bold">99.98%</span>
                  <span>API Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
