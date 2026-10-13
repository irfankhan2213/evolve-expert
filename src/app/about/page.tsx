import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Globe2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | EvolveExpert Technologies",
  description: "Learn about EvolveExpert Technologies, our mission to build sub-second B2B document extraction and tax compliance intelligence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">About Us</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About EvolveExpert Technologies
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Pioneering high-precision document extraction, deterministic tax compliance, and developer API micro-utilities for global and Indian enterprises.
          </p>
        </div>

        {/* Corporate Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/50 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">Our Technology Mission</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Modern accounts payable, ERP workflows, and checkout gateways suffer from two broken extremes: expensive legacy enterprise tools charging $500/month minimum contracts, or brittle OCR systems that fail on line-item tables and lack tax validation. EvolveExpert provides a sub-second, single-hop REST API combining intelligent extraction with deterministic mathematical validation.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/50 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">Entity & Operations</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              EvolveExpert Technologies is an Indian enterprise software and digital services firm founded by software engineer Irfan Khan. We deliver high-reliability Software-as-a-Service (SaaS), developer API keys, and automated compliance tools serving businesses worldwide across the Americas, Europe, and Asia-Pacific.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Our Architectural Commitments</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-medium text-white">Deterministic Compliance & Tax Verification</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  We don't merely extract text. We rigorously validate Indian GSTIN numbers using the official Luhn Mod-36 check-digit algorithm across 38 states, verify European Union VAT numbers against VIES syntax, and cross-reference UK VAT Modulus 97 equations to ensure audit compliance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-medium text-white">Zero Enterprise Lock-In & Transparent Micro-Pricing</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  We believe indie software developers, small accounting agencies, and freelance builders deserve enterprise-grade extraction without $500/month minimum contracts. Our self-service credit packs start at ₹249 with zero overage billing traps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Contact Card */}
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
          <h3 className="text-lg font-semibold text-white">Corporate Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-400">
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Brand / Platform</span>
              <span className="text-zinc-200 font-medium">EvolveExpert Technologies</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Operating Domain</span>
              <span className="text-zinc-200 font-medium">evolveexpert.com</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Promoter / Founder</span>
              <span className="text-zinc-200 font-medium">Irfan Khan</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Support Inquiries</span>
              <span className="text-emerald-400 font-medium">support@evolveexpert.com</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all"
          >
            Explore Live Playground <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-semibold text-sm transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
