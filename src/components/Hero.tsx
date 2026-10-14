import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-zinc-800/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Release / Capability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wide max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="hidden sm:inline">v1.4 Engine: Sub-Second OCR + Luhn Mod-36 Tax Validation</span>
          <span className="sm:hidden text-[11px]">v1.4: Sub-Second OCR + Tax Engine</span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-4xl mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Universal Invoice OCR with{" "}
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Built-In Multi-Region Tax Compliance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-zinc-400 leading-relaxed px-2 sm:px-0">
          Extract line items, totals, and vendor data from PDFs & images in &lt;800ms. Automatically validate Indian GSTIN (Luhn Mod-36), EU VAT, and UK VAT in the same single API call.{" "}
          <strong className="text-zinc-200 font-semibold">Zero $500/mo enterprise minimum commitments.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <a
            href="#playground"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:scale-[1.02]"
          >
            <span>Test in Live Sandbox</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm transition-all"
          >
            <span>View Pricing (From ₹249 / $15)</span>
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-center space-y-1">
            <span className="text-xl sm:text-3xl font-bold font-mono text-emerald-400">782ms</span>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider">Median Latency (p50)</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-center space-y-1">
            <span className="text-xl sm:text-3xl font-bold font-mono text-white">99.4%</span>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider">Line Accuracy</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-center space-y-1">
            <span className="text-xl sm:text-3xl font-bold font-mono text-white">38 States</span>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider">Indian GST Coverage</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-center space-y-1">
            <span className="text-xl sm:text-3xl font-bold font-mono text-emerald-400">₹0 / $0</span>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider">Minimum Spend Floor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
