"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldAlert, ArrowRight, Zap, Code2, Bot, Layers, ShieldCheck, Gauge } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StitchCapabilitiesAndPricing() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const capabilities = [
    {
      title: "High-Converting Next.js & Shopify",
      desc: "Fast, editorial websites and e-commerce stores designed with Figma systems and built for maximum conversion.",
      icon: Code2,
    },
    {
      title: "24/7 WhatsApp AI Concierge",
      desc: "Custom intelligent chatbots trained on your company knowledge that qualify leads and answer client queries 24/7.",
      icon: Bot,
    },
    {
      title: "Tally ERP & CRM Data Pipelines",
      desc: "Instant automated webhook syncing from checkout or lead form straight to Tally ERP, Google Sheets, or HubSpot.",
      icon: Layers,
    },
    {
      title: "Sub-500ms Edge Performance",
      desc: "Zero bloated scripts. 98+ Google PageSpeed Core Web Vitals score backed by a full money-back guarantee.",
      icon: Gauge,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Tactile UX design, clear value proposition hierarchy, and frictionless checkout flows to maximize buyer intent.",
      icon: Zap,
    },
    {
      title: "Asynchronous Notion Sprint Hub",
      desc: "No endless meetings. Track real-time progress, assets, and loom video updates inside your private client portal.",
      icon: ShieldCheck,
    },
  ];

  const pricing = {
    USD: {
      tier1: "$950",
      tier2: "$1,250",
      period1: "/ fixed scope",
      period2: "/ turnkey system",
      note: "All international credit cards, Stripe, wire transfer & escrow supported",
    },
    INR: {
      tier1: "₹65,000",
      tier2: "₹90,000",
      period1: "/ fixed scope + GST",
      period2: "/ turnkey system + GST",
      note: "UPI, Razorpay, Net Banking & Indian Business Invoicing with GST compliant billing",
    },
  };

  const currentPrices = pricing[currency];

  return (
    <section id="pricing" className="bg-[#0A0A0C] text-white py-24 sm:py-32 px-5 sm:px-10 relative overflow-hidden">
      {/* Background radial glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ repeat: Infinity, duration: 9, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-24">
        {/* Section 1: Capabilities Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl space-y-4 mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-semibold text-neutral-300 bg-white/5 backdrop-blur-sm">
              Our capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-white">
              Everything you need to launch a high-performance brand
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              One focused sprint. Zero fluff. Complete engineering and AI systems integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white/[0.03] border border-white/10 p-7 hover:border-white/25 hover:bg-white/[0.05] transition-colors duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Fixed Pricing Tiers */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          >
            <div className="max-w-xl space-y-3">
              <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-semibold text-neutral-300 bg-white/5 backdrop-blur-sm">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-white">
                Simple, fixed investment. No surprise hourly retainers.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Backed by our 50/40/10 milestone escrow and 98+ PageSpeed guarantee.
              </p>
            </div>

            {/* Currency Switcher with Spring Indicator */}
            <div className="inline-flex bg-white/10 p-1 rounded-full border border-white/10 self-start sm:self-auto relative">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                  currency === "USD" ? "text-[#111111]" : "text-neutral-400 hover:text-white"
                }`}
              >
                {currency === "USD" && (
                  <motion.div
                    layoutId="activePricingCurrencyPill"
                    className="absolute inset-0 bg-white rounded-full z-[-1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                Global (USD $)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                  currency === "INR" ? "text-[#111111]" : "text-neutral-400 hover:text-white"
                }`}
              >
                {currency === "INR" && (
                  <motion.div
                    layoutId="activePricingCurrencyPill"
                    className="absolute inset-0 bg-white rounded-full z-[-1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                India (INR ₹)
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-[28px] bg-white/[0.04] border border-white/15 p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-300">
                    7-Day Founder Web Sprint
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                    7 Days Delivery
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-bold min-h-[56px] flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPrices.tier1}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {currentPrices.tier1}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm font-normal text-neutral-400 ml-2">
                    {currentPrices.period1}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-300 pt-2">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Up to 5 custom pages (Next.js/TypeScript or Shopify)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Editorial UI design + conversion copy polish</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Validated lead capture + instant CRM/Email webhook</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Guaranteed 95+ Google PageSpeed score</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Private Notion Portal + 48-hr Loom updates (2 revision rounds)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#prototype"
                  className="w-full py-4 rounded-full bg-white text-[#111111] font-semibold text-sm text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Start 7-Day Web Sprint →
                </motion.a>
                <p className="text-[11px] text-neutral-400 text-center mt-3 font-mono">
                  50% upfront · 40% mid-sprint · 10% after 100% satisfaction
                </p>
              </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-[28px] bg-[#F3F3F1] text-[#111111] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">
                    Web Sprint + 24/7 AI &amp; WhatsApp Engine
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#111111] text-white font-medium">
                    MOST POPULAR
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-bold min-h-[56px] flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPrices.tier2}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {currentPrices.tier2}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm font-normal text-neutral-500 ml-2">
                    {currentPrices.period2}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-700 pt-2">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#111111] shrink-0" />
                    <span className="font-semibold">Everything in the 7-Day Founder Web Sprint</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>Custom 24/7 AI Sales &amp; Support Chatbot trained on your PDFs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>Official WhatsApp Business flows (lead capture &amp; brochures)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>Direct CRM, Google Sheets, or Tally ERP webhook sync</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>30 days priority support + Loom staff training vault</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#prototype"
                  className="w-full py-4 rounded-full bg-[#111111] text-white font-semibold text-sm text-center block hover:bg-neutral-800 transition shadow-md"
                >
                  Claim Complete Web + AI Sprint →
                </motion.a>
                <p className="text-[11px] text-neutral-500 text-center mt-3 font-mono">
                  {currentPrices.note}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scope Shield & Anti-Agency Exclusions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-[24px] bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">The EvolveExpert Scope Shield</h4>
                <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
                  We guarantee 7-day delivery by strictly protecting sprint velocity: no endless committee meetings, no unbounded feature bloat, and no 40-page PDFs. Custom complex multi-tenant SaaS features are quoted separately as a Phase 2 sprint.
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 group"
            >
              <span>View full sprint FAQ</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
