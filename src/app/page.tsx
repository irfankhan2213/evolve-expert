import React from "react";
import Hero from "@/components/Hero";
import ComplianceBadges from "@/components/ComplianceBadges";
import LivePlayground from "@/components/LivePlayground";
import BentoFeatures from "@/components/BentoFeatures";
import PricingCards from "@/components/PricingCards";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Trust & Compliance Badges */}
      <ComplianceBadges />

      {/* Interactive Testing Sandbox */}
      <LivePlayground />

      {/* Bento Grid Architecture Features */}
      <BentoFeatures />

      {/* Transparent Dual-Currency Pricing */}
      <PricingCards />

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 border-t border-zinc-800/80">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Developer &amp; Billing FAQs</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-2">
            <h3 className="text-base font-semibold text-white">
              How does EvolveExpert compare to Veryfi or Mindee?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Veryfi enforces a strict <strong>$500/month minimum commitment</strong>, and Mindee charges 1.5x credits for confidence scores with zero tax validation. EvolveExpert requires <strong>₹0 / $0 minimum spend</strong>, offers self-service micro-credit packs from ₹249, and validates Indian GSTIN (Luhn Mod-36) and EU VAT in the exact same sub-second response.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-2">
            <h3 className="text-base font-semibold text-white">
              How do credit packs and payments work?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Indian businesses can pay instantly via UPI QR, Google Pay, PhonePe, Cards, or NetBanking through Razorpay. Global developers can subscribe via RapidAPI Hub using international credit cards in USD ($). Purchased credits never expire for 12 months.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-2">
            <h3 className="text-base font-semibold text-white">
              What is your refund policy if I am dissatisfied?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We offer a no-questions-asked <strong>7-day refund guarantee</strong> for unutilized credit packs. In compliance with RBI guidelines, refunds are credited directly back to your original payment source within 5 to 7 business days.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-2">
            <h3 className="text-base font-semibold text-white">
              Can I use EvolveExpert in a serverless environment (Next.js / AWS Lambda)?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Yes. Our client-side canvas downsampling scripts prevent the 4.5MB Vercel serverless payload barrier, and our median response latency is &lt;800ms, well within standard 10-second serverless execution timeouts.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Footer Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-10 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-teal-950/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Automate Invoice Data Entry &amp; Tax Compliance?
            </h2>
            <p className="text-sm text-zinc-400">
              Start testing with 50 free requests today or unlock business volume packs in seconds.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Get API Access Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 text-zinc-300 font-medium text-sm transition-all"
            >
              <span>Talk to Engineering</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
