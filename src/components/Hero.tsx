"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Terminal, FileCode, Search, AlertCircle } from "lucide-react";
import { validateGSTIN } from "@/lib/tax-validation";

export default function Hero() {
  const [taxInput, setTaxInput] = useState("27AAPFU0939F1ZV");
  const [activeBox, setActiveBox] = useState<"vendor" | "tax" | "items" | "totals">("tax");

  // Validate live tax input
  const taxResult = validateGSTIN(taxInput);

  const presets = [
    { label: "TCS (Maharashtra)", value: "27AAPFU0939F1ZV" },
    { label: "Infosys (Karnataka)", value: "29AABCU9603R1ZM" },
    { label: "Bad Checksum (Test)", value: "27AAPFU0939F1ZW" },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-800/80 bg-zinc-950">
      {/* Precision Background Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Command & Editorial Studio (7 Cols on LG) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Operational Status Telemetry */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wide max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline">SYS_STATUS: 38/38 JURISDICTIONS OPERATIONAL // p50: 782ms</span>
              <span className="sm:hidden text-[11px]">SYS_STATUS: 38/38 ONLINE // 782ms</span>
            </div>

            {/* Asymmetric Editorial Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15] break-words">
              Deterministic Invoice Extraction. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Built-In Statutory Compliance.
              </span>
            </h1>

            {/* Architectural Value Proposition */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              Extract line-items, line math cross-reconciliation, and vendor data from PDFs &amp; images in &lt;800ms. 
              Deterministically validate Indian GSTIN (Luhn Mod-36), EU VIES, and UK VAT in the exact same single RFC 9457 JSON response.
            </p>

            {/* Live Quick Tax ID Check Widget */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/70 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  REAL-TIME STATUTORY ENGINE
                </span>
                <span className="text-emerald-400 text-[11px]">&lt;1ms execution</span>
              </div>

              {/* Input Group */}
              <div className="relative">
                <input
                  type="text"
                  value={taxInput}
                  onChange={(e) => setTaxInput(e.target.value.toUpperCase())}
                  placeholder="Enter 15-character GSTIN (e.g. 27AAPFU0939F1ZV)"
                  className="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-3.5 py-2.5 text-sm font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 uppercase"
                />
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                <span className="text-zinc-500 mr-1">Presets:</span>
                {presets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setTaxInput(p.value)}
                    className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Real-Time Calculation Output Banner */}
              <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                taxResult.isValid
                  ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300"
                  : "bg-red-950/30 border-red-500/30 text-red-300"
              }`}>
                {taxResult.isValid ? (
                  <div className="flex items-start sm:items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs">
                      <span className="font-bold text-white shrink-0">[PASS]</span>
                      <span className="break-words">State: <strong className="text-white">{taxResult.stateName} ({taxResult.stateCode})</strong></span>
                      <span className="hidden sm:inline">•</span>
                      <span className="break-words">PAN: <strong className="text-white">{taxResult.pan}</strong></span>
                      <span className="hidden sm:inline">•</span>
                      <span className="break-words">Luhn Mod-36: <strong className="text-emerald-400">Match ({taxResult.calculatedCheckChar})</strong></span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">[CHECKSUM MISMATCH]</span>{" "}
                      <span>{taxResult.error || "Invalid Tax ID format"}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#playground"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                <span>Launch Live Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm transition-all"
              >
                <span>View Dual-Track Pricing (From ₹249 / $15)</span>
              </a>
            </div>

            {/* High-Density Metric Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-zinc-800/80">
              <div className="space-y-0.5">
                <span className="text-lg font-bold font-mono text-emerald-400">782ms</span>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Median Latency</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-bold font-mono text-white">99.4%</span>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Entity Accuracy</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-bold font-mono text-white">38 States</span>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">GST Coverage</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-bold font-mono text-emerald-400">₹0 / $0</span>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Minimum Contract</p>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Document Scanner & Inspector (5 Cols on LG) */}
          <div className="lg:col-span-5 relative">
            {/* Terminal Window Frame */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Window Titlebar */}
              <div className="border-b border-zinc-800 bg-zinc-950/90 px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-zinc-400 pl-2">invoice_mh_tcs_9812.pdf</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  420KB (Downsampled)
                </span>
              </div>

              {/* Simulated Document Surface */}
              <div className="p-5 space-y-4 relative bg-zinc-950/60 font-sans text-xs">
                
                {/* Simulated Animated Laser Scan Line */}
                <div 
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] pointer-events-none animate-pulse"
                  style={{ top: "35%" }}
                />

                {/* Document Header with Bounding Box */}
                <div 
                  onMouseEnter={() => setActiveBox("vendor")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeBox === "vendor"
                      ? "border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-0.5">
                        EXTRACTED_ENTITY // VENDOR
                      </div>
                      <div className="font-bold text-white text-sm">Tata Consultancy Services Ltd</div>
                      <div className="text-zinc-400 text-[11px]">TCS House, Raveline Street, Fort, Mumbai 400001</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      conf: 0.998
                    </span>
                  </div>
                </div>

                {/* Tax ID & Compliance Box */}
                <div 
                  onMouseEnter={() => setActiveBox("tax")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeBox === "tax"
                      ? "border-cyan-500/80 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                        STATUTORY_VALIDATION // GSTIN
                      </div>
                      <div className="font-mono font-bold text-white text-sm">27AAPFU0939F1ZV</div>
                      <div className="text-zinc-400 text-[11px]">Jurisdiction: Maharashtra (27) • Entity: Firm</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      LUHN: PASS
                    </span>
                  </div>
                </div>

                {/* Line Items Table Box */}
                <div 
                  onMouseEnter={() => setActiveBox("items")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeBox === "items"
                      ? "border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                    PARSED_TABLE // 2 ITEMS
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="flex justify-between items-center text-zinc-300 border-b border-zinc-800/60 pb-1 gap-2">
                      <span className="truncate">Enterprise Cloud Architecture</span>
                      <span className="font-bold text-white shrink-0">₹40,000.00</span>
                    </div>
                    <div className="flex justify-between items-center text-zinc-300 gap-2">
                      <span className="truncate">Serverless Database Optimisation</span>
                      <span className="font-bold text-white shrink-0">₹10,000.00</span>
                    </div>
                  </div>
                </div>

                {/* Cross-Total Reconciliation Box */}
                <div 
                  onMouseEnter={() => setActiveBox("totals")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeBox === "totals"
                      ? "border-teal-500/80 bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                      : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">Subtotal: ₹50,000 + 18% GST (₹9,000)</span>
                    <span className="text-emerald-400 font-bold">MATCH (Δ 0.00)</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-zinc-300 font-bold">Grand Total Extracted:</span>
                    <span className="text-base font-bold font-mono text-emerald-400">₹59,000.00 INR</span>
                  </div>
                </div>
              </div>

              {/* Inspector Bounding-Box Coordinates Telemetry Footer */}
              <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>
                  ACTIVE_INSPECTOR: <strong className="text-zinc-300">{activeBox.toUpperCase()}</strong>
                </span>
                <span>bbox: [x: 48, y: 112, w: 320, h: 44]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
