"use client";

import React, { useState } from "react";
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export default function PricingCards() {
  const [currencyMode, setCurrencyMode] = useState<"INR" | "USD">("INR");
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const handleCheckout = async (planId: string, planName: string) => {
    setCheckoutLoading(planId);
    setCheckoutSuccess(null);
    setCheckoutError(null);

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, currency: currencyMode }),
      });
      const data = await res.json();

      if (data.success) {
        // Trigger confetti celebration
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#10b981", "#34d399", "#059669"],
        });
        setCheckoutSuccess(`Order initiated: ${planName}. Simulated payment verified and demo credits provisioned.`);
      } else {
        setCheckoutError(data.error || "Unable to initiate order. Please try again.");
      }
    } catch (e) {
      console.error(e);
      setCheckoutError("Network error contacting payment gateway. Please check your connection.");
    } finally {
      setCheckoutLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Zap className="w-3.5 h-3.5" />
          <span>Transparent Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise Precision. Zero Minimum Contracts.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Unlike incumbents requiring $500/month minimum commitments, EvolveExpert gives you instant self-service micro-credit packs and transparent developer tiers.
        </p>

        {/* Currency Switcher */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setCurrencyMode("INR")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                currencyMode === "INR"
                  ? "bg-emerald-500 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🇮🇳 India Self-Serve (UPI / INR ₹)
            </button>
            <button
              onClick={() => setCurrencyMode("USD")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                currencyMode === "USD"
                  ? "bg-emerald-500 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🌐 Global Developer (RapidAPI / USD $)
            </button>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {checkoutSuccess && (
        <div className="max-w-2xl mx-auto p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-mono text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span>{checkoutSuccess}</span>
        </div>
      )}

      {/* Error Notification */}
      {checkoutError && (
        <div className="max-w-2xl mx-auto p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-mono text-center flex items-center justify-center gap-2">
          <span>{checkoutError}</span>
        </div>
      )}

      {/* Pricing Cards Grid */}
      {currencyMode === "INR" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Pack */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Starter Pack</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">₹249</span>
                <span className="text-xs text-zinc-500 font-mono">one-time</span>
              </div>
              <p className="text-xs text-zinc-400">
                Ideal for testing, small bookkeeping sprints, and freelancers.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>50 Document &amp; Invoice Scans (₹4.98/scan)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Luhn Mod-36 GSTIN &amp; Tax Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second JSON Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Credits Valid for 12 Months</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleCheckout("starter", "Starter Pack (₹249)")}
              disabled={checkoutLoading === "starter"}
              className="w-full py-3 px-4 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
            >
              {checkoutLoading === "starter" ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Purchase Starter (₹249)"}
            </button>
          </div>

          {/* Pro Pack (Decoy / Most Popular) */}
          <div className="relative p-8 rounded-2xl border-2 border-emerald-500/80 bg-zinc-900/80 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 font-bold font-mono text-[10px] uppercase tracking-wider">
              Most Popular (Best Value)
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">Pro Business Pack</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">₹699</span>
                <span className="text-xs text-zinc-500 font-mono">one-time</span>
              </div>
              <p className="text-xs text-zinc-400">
                5x the scans for only 2.8x the price. Perfect for CA firms and businesses.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">250 Document Scans (₹2.79/scan)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Line-Item Table Extraction &amp; Arithmetic Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>38 Indian States + EU/UK VAT Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Export to Excel / CSV / JSON</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Priority Processing Queue (&lt;750ms)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleCheckout("pro", "Pro Business Pack (₹699)")}
              disabled={checkoutLoading === "pro"}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
            >
              {checkoutLoading === "pro" ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Purchase Pro (₹699) →"}
            </button>
          </div>

          {/* Business Pack */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Business High-Volume</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">₹1,999</span>
                <span className="text-xs text-zinc-500 font-mono">one-time</span>
              </div>
              <p className="text-xs text-zinc-400">
                High-throughput processing for accounting agencies and finance teams.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1,000 Document Scans (₹1.99/scan)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated API Secret Key</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Multi-Region Compliance Suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp / Slack Developer Support</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleCheckout("business", "Business Pack (₹1,999)")}
              disabled={checkoutLoading === "business"}
              className="w-full py-3 px-4 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
            >
              {checkoutLoading === "business" ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Purchase Business (₹1,999)"}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pro Developer ($15) */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Developer Pro</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">$15</span>
                <span className="text-xs text-zinc-500 font-mono">/month</span>
              </div>
              <p className="text-xs text-zinc-400">
                Direct RapidAPI Hub subscription with instant credit card billing.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1,000 API Requests / mo ($0.015/call)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>60 Requests / Minute Rate Limit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Line-Item &amp; Tax JSON Payload</span>
                </li>
              </ul>
            </div>
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs text-center transition-all"
            >
              Subscribe on RapidAPI ($15/mo)
            </a>
          </div>

          {/* Ultra ($49) */}
          <div className="relative p-8 rounded-2xl border-2 border-emerald-500/80 bg-zinc-900/80 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 font-bold font-mono text-[10px] uppercase tracking-wider">
              Most Popular Developer Tier
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">Ultra Scale</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">$49</span>
                <span className="text-xs text-zinc-500 font-mono">/month</span>
              </div>
              <p className="text-xs text-zinc-400">
                High-volume processing for production SaaS and fintech applications.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">5,000 API Requests / mo ($0.0098/call)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>120 Requests / Minute Rate Limit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Hard-Cap Overage Protection</span>
                </li>
              </ul>
            </div>
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs text-center transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Subscribe on RapidAPI ($49/mo) →
            </a>
          </div>

          {/* Mega ($199) */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Mega Volume</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-white">$199</span>
                <span className="text-xs text-zinc-500 font-mono">/month</span>
              </div>
              <p className="text-xs text-zinc-400">
                Enterprise-grade capacity for financial institutions and platforms.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>25,000 API Requests / mo ($0.0079/call)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>300 Requests / Minute Rate Limit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>99.9% Dedicated SLA Guarantee</span>
                </li>
              </ul>
            </div>
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs text-center transition-all"
            >
              Subscribe on RapidAPI ($199/mo)
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
