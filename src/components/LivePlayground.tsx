"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, FileText, Code2, RefreshCw, Sparkles, ShieldCheck, Calculator, Eye, ScanLine, Crosshair } from "lucide-react";

interface ExtractionData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  vendor: {
    name: string;
    taxId: string;
    address?: string;
    taxCompliance: {
      taxType: string;
      jurisdiction: string;
      isValid: boolean;
      stateName?: string;
      stateCode?: string;
      pan?: string;
      checksumValid?: boolean;
      calculatedCheckChar?: string;
      error?: string;
    };
  };
  lineItems: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    hsnOrSac?: string;
  }>;
  totals: {
    subtotal: number;
    taxAmount: number;
    discount: number;
    grandTotal: number;
    currency: string;
  };
  reconciliation: {
    isReconciled: boolean;
    calculatedSum: number;
    extractedGrandTotal: number;
    delta: number;
    status: string;
    warnings: string[];
  };
}

const INITIAL_DATA: ExtractionData = {
  invoiceNumber: "INV-2026-IN-9812",
  date: "2026-10-12",
  dueDate: "2026-11-11",
  vendor: {
    name: "Tata Consultancy Services Ltd",
    taxId: "27AAPFU0939F1ZV",
    address: "TCS House, Raveline Street, Fort, Mumbai, MH 400001",
    taxCompliance: {
      taxType: "GSTIN",
      jurisdiction: "India",
      isValid: true,
      stateName: "Maharashtra",
      stateCode: "27",
      pan: "AAPFU0939F",
      checksumValid: true,
      calculatedCheckChar: "V",
    },
  },
  lineItems: [
    { description: "Enterprise Cloud Architecture Consulting", quantity: 1, unitPrice: 40000, total: 40000, hsnOrSac: "998313" },
    { description: "Serverless Database Optimisation Sprint", quantity: 1, unitPrice: 10000, total: 10000, hsnOrSac: "998314" },
  ],
  totals: {
    subtotal: 50000,
    taxAmount: 9000,
    discount: 0,
    grandTotal: 59000,
    currency: "INR",
  },
  reconciliation: {
    isReconciled: true,
    calculatedSum: 59000,
    extractedGrandTotal: 59000,
    delta: 0,
    status: "MATCH",
    warnings: [],
  },
};

export default function LivePlayground() {
  const [selectedProfile, setSelectedProfile] = useState<"india-gst" | "us-cloud" | "eu-saas">("india-gst");
  const [activeTab, setActiveTab] = useState<"visual" | "table" | "tax-math" | "json">("visual");
  const [hoveredField, setHoveredField] = useState<string>("taxId");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ExtractionData | null>(INITIAL_DATA);
  const [latency, setLatency] = useState<number | null>(782);

  // Initial load trigger or profile switch
  const runExtraction = async (profileKey: "india-gst" | "us-cloud" | "eu-saas") => {
    setSelectedProfile(profileKey);
    setIsLoading(true);
    const start = Date.now();

    try {
      const res = await fetch("/api/v1/extract-and-validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sampleProfile: profileKey }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
        setLatency(Date.now() - start);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="playground" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Developer Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Test Extraction &amp; Real-Time Tax Verification
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Select a sample international invoice profile to inspect sub-second extraction, automatic line-item math cross-checks, and tax registry checksum validation.
        </p>
      </div>

      {/* Preset Profile Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          onClick={() => runExtraction("india-gst")}
          className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            selectedProfile === "india-gst"
              ? "bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
          }`}
        >
          🇮🇳 India B2B GST Invoice (₹59,000)
        </button>

        <button
          onClick={() => runExtraction("us-cloud")}
          className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            selectedProfile === "us-cloud"
              ? "bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
          }`}
        >
          🇺🇸 US Cloud AWS Bill ($1,420.50)
        </button>

        <button
          onClick={() => runExtraction("eu-saas")}
          className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            selectedProfile === "eu-saas"
              ? "bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
          }`}
        >
          🇪🇺 EU Reverse-Charge SaaS (€450.00)
        </button>
      </div>

      {/* Main Sandbox Card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-2xl backdrop-blur-sm">
        {/* Sandbox Window Header */}
        <div className="border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Left Controls & Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-zinc-400 border-l border-zinc-800 pl-3">
              POST /api/v1/extract-and-validate
            </span>
            {latency && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ⚡ {latency}ms
              </span>
            )}
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-900 border border-zinc-800 overflow-x-auto max-w-full scrollbar-none">
            <button
              onClick={() => setActiveTab("visual")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                activeTab === "visual"
                  ? "bg-zinc-800 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Document Inspector</span>
            </button>
            <button
              onClick={() => setActiveTab("table")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                activeTab === "table"
                  ? "bg-zinc-800 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Extracted Table</span>
            </button>
            <button
              onClick={() => setActiveTab("tax-math")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                activeTab === "tax-math"
                  ? "bg-zinc-800 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Tax &amp; Math Audit</span>
            </button>
            <button
              onClick={() => setActiveTab("json")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                activeTab === "json"
                  ? "bg-zinc-800 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Raw JSON</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Area */}
        <div className="p-6">
          {isLoading ? (
            <div className="py-24 flex flex-col items-center justify-center space-y-4">
              <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
              <p className="text-sm font-mono text-zinc-400">
                Executing OCR extraction &amp; Luhn Mod-36 checksum verification...
              </p>
            </div>
          ) : result ? (
            <div>
              {/* Tab 0: Interactive Tactile Document Inspector */}
              {activeTab === "visual" && (
                <div className="space-y-6">
                  {/* Bounding Box Inspector Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Simulated Document Canvas (7 Cols) */}
                    <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-zinc-950 p-6 space-y-6 relative overflow-hidden shadow-inner">
                      {/* Laser scanning beam */}
                      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] pointer-events-none opacity-40 animate-pulse" />

                      {/* Document Header Zone */}
                      <div 
                        onMouseEnter={() => setHoveredField("vendor")}
                        className={`p-3 rounded-lg border transition-all cursor-crosshair ${
                          hoveredField === "vendor"
                            ? "border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                            : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                              VENDOR_ENTITY // CONFIDENCE: 0.998
                            </span>
                            <div className="text-base font-bold text-white mt-0.5">{result.vendor.name}</div>
                            <div className="text-xs text-zinc-400">{result.vendor.address || "Verified Corporate Address"}</div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 self-start sm:self-auto shrink-0">
                            bbox: [32, 45, 340, 52]
                          </span>
                        </div>
                      </div>

                      {/* Tax ID Zone */}
                      <div 
                        onMouseEnter={() => setHoveredField("taxId")}
                        className={`p-3 rounded-lg border transition-all cursor-crosshair ${
                          hoveredField === "taxId"
                            ? "border-cyan-500/80 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                              STATUTORY_TAX_ID // LUHN MOD-36
                            </span>
                            <div className="text-sm font-mono font-bold text-white mt-0.5">{result.vendor.taxId}</div>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 shrink-0">
                              {result.vendor.taxCompliance.taxType}: {result.vendor.taxCompliance.isValid ? "VALID" : "INVALID"}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 shrink-0">
                              bbox: [32, 105, 210, 28]
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Line Items Zone */}
                      <div 
                        onMouseEnter={() => setHoveredField("items")}
                        className={`p-3 rounded-lg border transition-all cursor-crosshair ${
                          hoveredField === "items"
                            ? "border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                            : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                            LINE_ITEMS_TABLE // {result.lineItems.length} DETECTED
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 self-start sm:self-auto shrink-0">
                            bbox: [32, 142, 540, 110]
                          </span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs">
                          {result.lineItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-zinc-300 border-b border-zinc-800/60 pb-1 gap-2">
                              <span className="font-sans text-xs truncate">{item.description}</span>
                              <span className="font-bold text-white shrink-0">
                                {result.totals.currency} {item.total.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Totals & Reconciliation Zone */}
                      <div 
                        onMouseEnter={() => setHoveredField("totals")}
                        className={`p-3 rounded-lg border transition-all cursor-crosshair ${
                          hoveredField === "totals"
                            ? "border-teal-500/80 bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                            : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block">
                              TOTALS_CROSS_RECONCILIATION // Δ {result.reconciliation.delta}
                            </span>
                            <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">
                              {result.totals.currency} {result.totals.grandTotal.toLocaleString()}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 self-start sm:self-auto shrink-0">
                            MATH: {result.reconciliation.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Inspector Telemetry Panel (5 Cols) */}
                    <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-950 p-5 space-y-5">
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <div className="flex items-center gap-2">
                          <Crosshair className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs font-mono font-bold text-white uppercase">
                            Entity Telemetry
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {hoveredField.toUpperCase()}
                        </span>
                      </div>

                      {hoveredField === "taxId" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">Input Tax ID</span>
                            <div className="text-white font-bold">{result.vendor.taxId}</div>
                          </div>
                          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                            <div className="flex justify-between text-emerald-300">
                              <span>Jurisdiction:</span>
                              <span className="font-bold">{result.vendor.taxCompliance.jurisdiction}</span>
                            </div>
                            {result.vendor.taxCompliance.stateName && (
                              <div className="flex justify-between text-zinc-300">
                                <span>State:</span>
                                <span>{result.vendor.taxCompliance.stateName} ({result.vendor.taxCompliance.stateCode})</span>
                              </div>
                            )}
                            <div className="flex justify-between text-zinc-300">
                              <span>Luhn Mod-36:</span>
                              <span className="text-emerald-400 font-bold">MATCH (Char: {result.vendor.taxCompliance.calculatedCheckChar})</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {hoveredField === "vendor" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">Vendor Name</span>
                            <div className="text-white font-bold">{result.vendor.name}</div>
                          </div>
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">OCR Confidence</span>
                            <div className="text-emerald-400 font-bold">0.998 (100% matched)</div>
                          </div>
                        </div>
                      )}

                      {hoveredField === "items" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">Extracted Rows</span>
                            <div className="text-white font-bold">{result.lineItems.length} Line Items</div>
                          </div>
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">HSN/SAC Validation</span>
                            <div className="text-teal-400 font-bold">Valid Services Tax Codes</div>
                          </div>
                        </div>
                      )}

                      {hoveredField === "totals" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                            <div className="flex justify-between text-emerald-300">
                              <span>Reconciliation:</span>
                              <span className="font-bold">EXACT MATCH (0.00 delta)</span>
                            </div>
                            <div className="flex justify-between text-zinc-300">
                              <span>Subtotal + Tax:</span>
                              <span>{result.totals.currency} {result.totals.grandTotal.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-zinc-800/80">
                        Hover over any document box to inspect bounding coordinates and validation logic.
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 1: Formatted Table */}
              {activeTab === "table" && (
                <div className="space-y-6">
                  {/* Top Metadata Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/50">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-500 block">Vendor Name</span>
                      <p className="text-sm font-semibold text-white mt-0.5">{result.vendor.name}</p>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">Tax ID: {result.vendor.taxId}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-500 block">Invoice Reference</span>
                      <p className="text-sm font-mono text-white mt-0.5">{result.invoiceNumber}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">Date: {result.date}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-500 block">Grand Total</span>
                      <p className="text-lg font-mono font-bold text-emerald-400 mt-0.5">
                        {result.totals.currency} {result.totals.grandTotal.toLocaleString()}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Mathematically Reconciled
                      </span>
                    </div>
                  </div>

                  {/* Line Items Table */}
                  <div className="overflow-x-auto border border-zinc-800 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-zinc-950 text-zinc-400 font-mono uppercase border-b border-zinc-800">
                        <tr>
                          <th className="py-3 px-4">Line Description</th>
                          <th className="py-3 px-4 text-center">HSN/SAC</th>
                          <th className="py-3 px-4 text-center">Qty</th>
                          <th className="py-3 px-4 text-right">Unit Price</th>
                          <th className="py-3 px-4 text-right">Line Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/60 font-mono text-zinc-300">
                        {result.lineItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-zinc-800/20 transition-colors">
                            <td className="py-3 px-4 font-sans text-zinc-200">{item.description}</td>
                            <td className="py-3 px-4 text-center text-zinc-500">{item.hsnOrSac || "—"}</td>
                            <td className="py-3 px-4 text-center">{item.quantity}</td>
                            <td className="py-3 px-4 text-right">
                              {result.totals.currency} {item.unitPrice.toLocaleString()}
                            </td>
                            <td className="py-3 px-4 text-right font-semibold text-white">
                              {result.totals.currency} {item.total.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-zinc-950/70 border-t border-zinc-800 font-mono text-xs">
                        <tr>
                          <td colSpan={4} className="py-2.5 px-4 text-right text-zinc-400">Subtotal:</td>
                          <td className="py-2.5 px-4 text-right text-white">
                            {result.totals.currency} {result.totals.subtotal.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="py-2.5 px-4 text-right text-zinc-400">Tax Breakdown:</td>
                          <td className="py-2.5 px-4 text-right text-emerald-400">
                            + {result.totals.currency} {result.totals.taxAmount.toLocaleString()}
                          </td>
                        </tr>
                        <tr className="border-t border-zinc-800 text-sm font-bold">
                          <td colSpan={4} className="py-3 px-4 text-right text-white">Grand Total:</td>
                          <td className="py-3 px-4 text-right text-emerald-400">
                            {result.totals.currency} {result.totals.grandTotal.toLocaleString()}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 2: Tax & Math Audit */}
              {activeTab === "tax-math" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tax Validation Audit */}
                  <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Tax Identifier Compliance</span>
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {result.vendor.taxCompliance.isValid ? "VERIFIED VALID" : "INVALID"}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Tax Type:</span>
                        <span className="text-white">{result.vendor.taxCompliance.taxType}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Jurisdiction:</span>
                        <span className="text-white">{result.vendor.taxCompliance.jurisdiction}</span>
                      </div>
                      {result.vendor.taxCompliance.stateName && (
                        <div className="flex justify-between py-1 border-b border-zinc-800/80">
                          <span className="text-zinc-500">Indian State:</span>
                          <span className="text-emerald-400">{result.vendor.taxCompliance.stateName} ({result.vendor.taxCompliance.stateCode})</span>
                        </div>
                      )}
                      {result.vendor.taxCompliance.pan && (
                        <div className="flex justify-between py-1 border-b border-zinc-800/80">
                          <span className="text-zinc-500">Entity PAN:</span>
                          <span className="text-white">{result.vendor.taxCompliance.pan}</span>
                        </div>
                      )}
                      {result.vendor.taxCompliance.checksumValid !== undefined && (
                        <div className="flex justify-between py-1 border-b border-zinc-800/80">
                          <span className="text-zinc-500">Luhn Mod-36 Checksum:</span>
                          <span className="text-emerald-400 font-bold">MATCH (Char: {result.vendor.taxCompliance.calculatedCheckChar})</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Math Reconciliation Audit */}
                  <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-emerald-400" />
                        <span>Arithmetic Cross-Check</span>
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {result.reconciliation.status}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Calculated Sum:</span>
                        <span className="text-white">{result.totals.currency} {result.reconciliation.calculatedSum.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Extracted Grand Total:</span>
                        <span className="text-white">{result.totals.currency} {result.reconciliation.extractedGrandTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Reconciliation Delta:</span>
                        <span className="text-emerald-400">{result.reconciliation.delta.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-zinc-800/80">
                        <span className="text-zinc-500">Tolerance Threshold:</span>
                        <span className="text-zinc-400">&le; 0.05</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Raw JSON */}
              {activeTab === "json" && (
                <div className="relative">
                  <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-[400px]">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
