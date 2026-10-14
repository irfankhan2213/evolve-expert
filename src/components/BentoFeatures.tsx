"use client";

import React, { useState } from "react";
import { ShieldCheck, Layers, Lock, Cpu, Sparkles, CheckCircle2, Terminal, Copy, Check, ArrowRight } from "lucide-react";

export default function BentoFeatures() {
  const [activeLang, setActiveLang] = useState<"curl" | "node" | "python" | "go">("curl");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    curl: `curl -X POST "https://evolveexpert.com/api/v1/extract-and-validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sampleProfile": "india-gst",
    "validateTaxChecksum": true
  }'`,
    node: `import { EvolveExpert } from "@evolveexpert/sdk";

const client = new EvolveExpert({ apiKey: process.env.EVOLVE_API_KEY });

const result = await client.invoices.extractAndValidate({
  fileUrl: "https://example.com/invoice.pdf",
  jurisdiction: "IN", // Validates Luhn Mod-36 GSTIN
});

console.log(result.vendor.taxCompliance.isValid); // true`,
    python: `from evolveexpert import EvolveExpert

client = EvolveExpert(api_key="YOUR_API_KEY")

result = client.invoices.extract_and_validate(
    file_path="./invoice_october.pdf",
    validate_tax_checksum=True
)

print(result["reconciliation"]["is_reconciled"]) # True`,
    go: `package main

import (
  "fmt"
  "github.com/evolveexpert/evolve-go"
)

func main() {
  client := evolve.NewClient("YOUR_API_KEY")
  res, _ := client.ExtractAndValidate("./bill.pdf")
  fmt.Printf("GSTIN Valid: %v\\n", res.Vendor.TaxCompliance.IsValid)
}`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="features" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-zinc-800/80">
      {/* Section Header */}
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

      {/* Asymmetric 12-Column Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Tile 1: 38-State GSTIN & Luhn Mod-36 Matrix (7 Columns) */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                OFFLINE &lt;1ms DETERMINISTIC
              </span>
            </div>
            
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Luhn Mod-36 Checksum &amp; 38-State Matrix
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Standard OCR models consistently misread similar characters (e.g., &apos;8&apos; vs &apos;B&apos;, &apos;0&apos; vs &apos;O&apos;). 
                Our statutory engine computes the exact Luhn Mod-36 weighted polynomial across all 38 Indian State &amp; UT codes, catching tax filing errors before accounting books sync.
              </p>
            </div>

            {/* Interactive Anatomy of GSTIN */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/70 space-y-3 font-mono">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                15-Character GSTIN Architectural Decomposition
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-center text-xs">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="text-emerald-400 font-bold text-sm">27</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 mt-1">State (MH)</div>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="text-cyan-400 font-bold text-sm">AAPFU0939F</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 mt-1">PAN Code</div>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="text-teal-400 font-bold text-sm">1</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 mt-1">Entity #</div>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="text-zinc-400 font-bold text-sm">Z</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 mt-1">Default</div>
                </div>
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-500/40">
                  <div className="text-emerald-300 font-bold text-sm">V</div>
                  <div className="text-[9px] sm:text-[10px] text-emerald-400 mt-1">Mod-36</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/60">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 38 States &amp; UTs
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> EU VIES (27 Countries)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> UK Mod-97 VAT
            </span>
          </div>
        </div>

        {/* Tile 2: Zero-Overage Header Inspector (5 Columns) */}
        <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                RFC 9457 COMPLIANT
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Zero Overage Billing Shock
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The #1 complaint of developers on RapidAPI is unexpected $0.50/call overage bills. We enforce strict hard limits, transparent header telemetry, and pre-purchased credit ledgers.
              </p>
            </div>

            {/* HTTP Response Header Visualizer */}
            <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-1.5 text-zinc-400 overflow-x-auto">
              <div className="text-emerald-400 font-bold">HTTP/1.1 200 OK</div>
              <div><span className="text-zinc-500">X-RateLimit-Requests-Limit:</span> 1000</div>
              <div><span className="text-zinc-500">X-RateLimit-Requests-Remaining:</span> <strong className="text-white">842</strong></div>
              <div><span className="text-zinc-500">X-Execution-Latency-Ms:</span> <strong className="text-emerald-400">782ms</strong></div>
              <div><span className="text-zinc-500">X-Statutory-Compliance:</span> <strong className="text-teal-400">PASS</strong></div>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center gap-1.5 border-t border-zinc-800/60">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Guaranteed zero surprise credit-card deductions</span>
          </div>
        </div>

        {/* Tile 3: Client Canvas Downsampling (5 Columns) */}
        <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                OFFSCREEN_CANVAS API
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Client Canvas Downsampling
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Circumvent Vercel&apos;s 4.5MB serverless payload limit without spinning up expensive AWS S3 presigned URL infrastructures. 
                Camera photos are downsampled client-side in &lt;120ms.
              </p>
            </div>

            {/* Visual Transformation Pipeline */}
            <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Raw 48MP iPhone Photo:</span>
                <span className="text-red-400 font-bold">18.4 MB (413 Payload Error)</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[12%]" />
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span>Downsampled WebP Blob:</span>
                <span className="text-emerald-400 font-bold">420 KB (&lt;120ms)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-teal-400 flex items-center gap-1.5 border-t border-zinc-800/60">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% serverless edge compatibility</span>
          </div>
        </div>

        {/* Tile 4: Multi-Language SDK Terminal (7 Columns) */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              
              {/* Language Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-950 border border-zinc-800">
                {(["curl", "node", "python", "go"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                      activeLang === lang
                        ? "bg-zinc-800 text-white font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {lang === "node" ? "Node.js" : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Single-Hop Unified Developer SDK
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Drop in our official client libraries to integrate document OCR, math cross-checks, and tax registry validation in under 4 lines of code.
              </p>
            </div>

            {/* Code Block */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs relative group">
              <button
                onClick={copyCode}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="overflow-x-auto text-zinc-300 leading-relaxed max-h-44">
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs font-mono">
            <span className="text-zinc-400">OpenAPI 3.0.3 specification available</span>
            <a
              href="/docs"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold"
            >
              <span>Explore Full API Reference</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
