'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Database,
  TrendingUp,
} from 'lucide-react';

interface HeroProps {
  onTryDemo: () => void;
  onExploreApi: () => void;
  onCalculateRoi?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTryDemo, onExploreApi, onCalculateRoi }) => {
  const [activePreviewField, setActivePreviewField] = useState<'gstin' | 'items' | 'total'>('gstin');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-zinc-950 text-white border-b border-zinc-900">
      {/* Precision Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-blue-600/10 to-emerald-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Release Pill */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">ENGINE V2.4 • REAL-TIME GSTIN CHECKSUM & MULTI-CURRENCY OCR</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Automate Financial Documents into{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Clean Ledgers & API Streams.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Eliminate manual data entry. Extract vendor GSTIN, invoice dates, multi-currency line items, and tax breakdowns with 99.2% accuracy in sub-900ms.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onTryDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 text-indigo-200" />
              <span>Try Live Extractor Free</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            {onCalculateRoi && (
              <button
                onClick={onCalculateRoi}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-base border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Calculate Time & ROI</span>
              </button>
            )}

            <button
              onClick={onExploreApi}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-base border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <Database className="w-4 h-4 text-indigo-400" />
              <span>RapidAPI Metered Docs</span>
            </button>
          </div>
        </div>

        {/* Live Product Mockup Preview */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-zinc-800/40 to-zinc-900/10 shadow-2xl">
            <div className="rounded-[22px] bg-zinc-950/95 border border-zinc-800/80 p-5 sm:p-8 backdrop-blur-2xl">
              
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-zinc-500 hidden sm:inline">
                    docupulse-inspector://session-live-stream.prod
                  </span>
                </div>

                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>OCR INFERENCE COMPLETE (680ms)</span>
                  </span>
                </div>
              </div>

              {/* Mockup Body: Split Document vs Extracted Intelligence */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left: Simulated Scanned Invoice with Bounding Boxes (5 cols) */}
                <div className="md:col-span-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 relative overflow-hidden">
                  <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400 mb-4 pb-2 border-b border-zinc-800">
                    <span>SOURCE: INV-2026-904.PDF</span>
                    <span className="text-indigo-400">PAGE 1/1</span>
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-2.5 rounded-xl border border-indigo-500/60 bg-indigo-500/10 relative">
                      <div className="text-[9px] uppercase tracking-wider text-indigo-400 font-bold mb-1">
                        [ENTITY: VENDOR & GST]
                      </div>
                      <div className="font-bold text-white">CloudScale Systems Pvt Ltd</div>
                      <div className="text-indigo-300 text-[11px]">GSTIN: 27AAPCS1294K1Z5</div>
                      <span className="absolute -top-2 right-2 text-[8px] bg-indigo-500 text-white px-1.5 py-0.5 rounded font-mono">
                        99.8% Match
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl border border-zinc-700/60 bg-zinc-800/40 text-zinc-300">
                      <div className="text-[9px] uppercase tracking-wider text-zinc-400 mb-1">
                        [INVOICE LINE ITEMS]
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span>Cloud Kubernetes Tier</span>
                        <span className="font-bold text-white">₹1,15,000</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                        <span>Database Managed IOPS</span>
                        <span className="font-bold text-white">₹34,500</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl border border-emerald-500/60 bg-emerald-500/10 relative">
                      <div className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
                        [SETTLEMENT TOTAL]
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-zinc-300">Total with 18% GST:</span>
                        <span className="text-base font-extrabold text-emerald-400">₹1,49,500.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Extracted Structured JSON & Verified Ledgers (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setActivePreviewField('gstin')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          activePreviewField === 'gstin'
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        GSTIN Verified
                      </button>
                      <button
                        onClick={() => setActivePreviewField('items')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          activePreviewField === 'items'
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        Itemized Taxes
                      </button>
                      <button
                        onClick={() => setActivePreviewField('total')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          activePreviewField === 'total'
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        1-Click ERP Export
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                      Format: JSON & Excel Ready
                    </span>
                  </div>

                  {/* Active Highlight Box */}
                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-3">
                    {activePreviewField === 'gstin' && (
                      <>
                        <div className="flex items-center justify-between text-emerald-400">
                          <span className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Indian GSTIN Luhn Mod-36 Checksum: PASSED</span>
                          </span>
                          <span className="text-[11px] text-zinc-500">27 (MH)</span>
                        </div>
                        <p className="text-zinc-400 text-xs">
                          Entity: <strong>CloudScale Systems India Pvt Ltd</strong> • PAN Verified • No duplicate invoice records found in last 90 days.
                        </p>
                      </>
                    )}

                    {activePreviewField === 'items' && (
                      <>
                        <div className="flex items-center justify-between text-indigo-400">
                          <span className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Line Item Categorization: 2 Items Parsed</span>
                          </span>
                          <span className="text-[11px] text-zinc-500">18% IGST</span>
                        </div>
                        <p className="text-zinc-400 text-xs">
                          Taxes parsed: <strong>₹26,910.00</strong> computed. Subtotal matching items sum with 0 rounding errors.
                        </p>
                      </>
                    )}

                    {activePreviewField === 'total' && (
                      <>
                        <div className="flex items-center justify-between text-purple-400">
                          <span className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>1-Click Formats Generated</span>
                          </span>
                          <span className="text-[11px] text-zinc-500">Ready</span>
                        </div>
                        <p className="text-zinc-400 text-xs">
                          Ledgers formatted for <strong>TallyPrime XML</strong>, <strong>Zoho Books JSON</strong>, and <strong>Excel/CSV</strong> without manual field mapping.
                        </p>
                      </>
                    )}

                    <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>API Latency: 680ms</span>
                      <span className="text-indigo-400 font-semibold">Automated Ledger Push ✅</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Trust Badges & Telemetry */}
        <div className="mt-16 pt-10 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm text-zinc-400 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-mono text-white mb-0.5">142,000+</span>
            <span className="text-zinc-500 text-xs">Documents Parsed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-mono text-emerald-400 mb-0.5">99.2%</span>
            <span className="text-zinc-500 text-xs">Entity F1 Accuracy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-mono text-indigo-400 mb-0.5">&lt;900ms</span>
            <span className="text-zinc-500 text-xs">Avg Edge Latency</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-mono text-purple-400 mb-0.5">100%</span>
            <span className="text-zinc-500 text-xs">GST Checksum Audited</span>
          </div>
        </div>

      </div>
    </section>
  );
};
