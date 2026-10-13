import React from "react";
import { ShieldCheck, Layers, Lock, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Architectural Moat</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered to Solve What Legacy OCR Breaks
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          We eliminated the four universal bottlenecks of document extraction: expensive enterprise minimums, broken line-item tables, missing tax checks, and serverless payload timeouts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Bento Tile 1 */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Luhn Mod-36 Tax Checksum</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Full deterministic checksum validation across all 38 Indian State &amp; UT jurisdictions. Detects OCR character confusions (e.g. &apos;8&apos; vs &apos;B&apos;) in &lt;1ms before tax filing errors occur.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 38 States + EU VIES + UK Mod-97
          </div>
        </div>

        {/* Bento Tile 2 */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Single-Hop Unified Payload</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Stop stitching together Mindee ($49/mo) and VATSense (€15/mo). Our single endpoint returns both parsed line items and verified statutory compliance in one unified RFC 9457 response.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 65% – 96% lower developer TCO
          </div>
        </div>

        {/* Bento Tile 3 */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Zero Overage Billing Shock</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The #1 developer complaint on RapidAPI is surprise overage bills. We enforce strict hard caps on lead tiers, transparent per-call overage rates, and predictable credit-ledger top-ups.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> X-RateLimit-* standard headers
          </div>
        </div>

        {/* Bento Tile 4 */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">OffscreenCanvas Downsampling</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Eliminates Vercel&apos;s 4.5MB serverless payload limit. High-resolution 18MB camera photos are downsampled client-side to an 1800px boundary blob (~450KB) in &lt;120ms before upload.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Zero intermediate S3 storage costs
          </div>
        </div>
      </div>
    </section>
  );
}
