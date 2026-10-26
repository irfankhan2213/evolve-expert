"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldAlert, ArrowRight, PhoneCall, MessageSquare, CalendarCheck, RefreshCw, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StitchCapabilitiesAndPricing() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const profitLeaks = [
    {
      title: "The After-Hours & Busy-Line Leak",
      badge: "< 10 Sec Pickup · 24/7/365",
      desc: "Calls after 5 PM, on weekends, or while technicians are on jobs go to voicemail. 78% of customers buy from the first responder. Our voice AI answers in under 3 rings, qualifies the problem, checks live availability, and books the appointment directly.",
      icon: PhoneCall,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "The Slow Web-Form & WhatsApp Leak",
      badge: "391% Higher Conversion Rate",
      desc: "Web form leads and WhatsApp messages sit unattended for hours. Our speed-to-lead engine triggers sub-60 second automated WhatsApp qualification and instant missed-call text-backs while buyer intent is at its highest.",
      icon: MessageSquare,
      accent: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "The Forgotten Quote & No-Show Leak",
      badge: "Up to 50% Fewer No-Shows",
      desc: "Unsigned quotes and forgotten appointments drain monthly profit. Multi-channel 2-way SMS and WhatsApp automated sequences nurture open estimates, answer customer objections, and deliver smart reminder flows that cut no-shows in half.",
      icon: CalendarCheck,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "The Dormant Customer List Leak",
      badge: "Zero Ad Spend Revenue",
      desc: "Hundreds of past customers sit idle in your CRM or spreadsheet. Our consent-based reactivation sequences automatically trigger seasonal check-ups, filter replacements, or follow-up consultations to drive booked jobs without spending a dollar on ads.",
      icon: RefreshCw,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  const pricingData = {
    USD: {
      starterSetup: "$1,500",
      starterMonthly: "$300/mo",
      coreSetup: "$2,500",
      coreOriginal: "$3,500",
      coreMonthly: "$600/mo",
      pipelineSetup: "$7,500",
      pipelineMonthly: "$1,200/mo",
      guarantee: "50% deposit to start · 50% only after signing off on our 20-call acceptance test",
      note: "All monthly plans include up to 1,000 connected AI voice minutes/month (~350–400 calls).",
    },
    INR: {
      starterSetup: "₹45,000",
      starterMonthly: "₹9,000/mo",
      coreSetup: "₹75,000",
      coreOriginal: "₹1,05,000",
      coreMonthly: "₹15,000/mo",
      pipelineSetup: "₹1,50,000",
      pipelineMonthly: "₹25,000/mo",
      guarantee: "50% deposit to start · 50% only after signing off on our 20-call acceptance test",
      note: "All monthly plans include up to 1,000 connected AI voice minutes/month (~350–400 calls). GST compliant.",
    },
  };

  const currentPrices = pricingData[currency];

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
        {/* Section 1: AEO Cost of Missed Calls & 4 Profit Leaks */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5 mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5" />
              The Inbound Speed-to-Lead Equation
            </span>

            {/* AEO Question-shaped H2 */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-white">
              How Much Revenue Are Missed Calls Costing Your Business Every Month?
            </h2>

            {/* 40-to-60-word direct factual answer */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
              A service business missing just 20 calls or slow web inquiries per month loses approximately $3,000 every single month ($36,000 annually or ₹9,00,000/year). Assuming a standard 25% close rate and an average $600 job ticket, 5 high-intent customers book with your fastest competitor instead of your company.
            </p>
          </motion.div>

          {/* 4 Profit Leaks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profitLeaks.map((leak, idx) => {
              const Icon = leak.icon;
              return (
                <motion.div
                  key={leak.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white/[0.03] border border-white/10 p-7 sm:p-8 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${leak.accent}`}>
                        {leak.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {leak.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {leak.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: 3-Tier Lead-to-Booking Pricing */}
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
                Transparent Systems Pricing
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-white">
                Turnkey Lead-to-Booking Investment
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Backed by our 50/50 milestone escrow, 20-call acceptance test, and 14-day SLA.
              </p>
            </div>

            {/* Currency Switcher */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1: Starter */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-[28px] bg-white/[0.04] border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-300">Starter System</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                    14-Day Go-Live
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold flex items-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrices.starterSetup}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentPrices.starterSetup}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-xs font-normal text-neutral-400 ml-2">one-time setup</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-mono font-medium">
                    + {currentPrices.starterMonthly} retainer
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 pt-2 border-t border-white/10">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>24/7 AI missed-call instant text-back</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sub-60s automated web lead qualification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Single staff calendar booking integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant WhatsApp &amp; Email lead notifications</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Up to 1,000 connected AI voice minutes/mo</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-[#111111] font-semibold text-xs text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Deploy Starter System →
                </motion.a>
                <p className="text-[10px] text-neutral-400 text-center mt-2 font-mono">
                  50% to start · 50% upon sign-off
                </p>
              </div>
            </motion.div>

            {/* Tier 2: Core System (Recommended) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-[28px] bg-[#F3F3F1] text-[#111111] p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group border-2 border-emerald-500"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold">Core System</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold tracking-tight">
                    FOUNDING CLIENT ($1K OFF)
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl sm:text-4xl font-bold flex items-baseline text-[#111111]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrices.coreSetup}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentPrices.coreSetup}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-xs font-normal text-neutral-500 ml-1.5">setup</span>
                    </div>
                    <span className="text-xs text-neutral-400 line-through">
                      {currentPrices.coreOriginal}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-700 font-mono font-semibold">
                    + {currentPrices.coreMonthly} retainer
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-800 pt-2 border-t border-black/10">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">24/7 Inbound Voice AI phone answering</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Official Meta WhatsApp Cloud API qualification flow</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-staff calendar booking (Google / Outlook / Cal.com)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>2-way SMS confirmations &amp; no-show defense sequences</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct CRM integration (HubSpot, GoHighLevel, Jobber)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-emerald-800">Rigorous 20-call acceptance test with sign-off</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Up to 1,000 connected AI voice minutes/mo</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-[#111111] text-white font-semibold text-xs text-center block hover:bg-neutral-800 transition shadow-md"
                >
                  Claim Founding Client Rate →
                </motion.a>
                <p className="text-[10px] text-neutral-500 text-center mt-2 font-mono">
                  Limited to first 3 clients in your industry
                </p>
              </div>
            </motion.div>

            {/* Tier 3: Full Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-[28px] bg-white/[0.04] border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-300">Full Pipeline</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                    Enterprise Custom
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold flex items-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrices.pipelineSetup}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentPrices.pipelineSetup}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-xs font-normal text-neutral-400 ml-2">one-time setup</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-mono font-medium">
                    + {currentPrices.pipelineMonthly} retainer
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 pt-2 border-t border-white/10">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Inbound &amp; outbound conversational AI voice agents</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Bi-directional CRM sync (ServiceTitan, Jobber, HubSpot)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automated quote follow-up &amp; estimate closing engine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Consent-based past customer reactivation sequences</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Dedicated SLA with 4-hour emergency telephony response</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-[#111111] font-semibold text-xs text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Schedule Architecture Call →
                </motion.a>
                <p className="text-[10px] text-neutral-400 text-center mt-2 font-mono">
                  Custom quote &amp; telephony routing review
                </p>
              </div>
            </motion.div>
          </div>

          {/* Voice Allowance & Escrow Guarantee Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-[24px] bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">50/50 Risk Reversal &amp; 14-Day Delivery Guarantee</h4>
                <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
                  {currentPrices.note} {currentPrices.guarantee}. If our AI voice agent and calendar booking are not ready for acceptance testing on Day 14, 25% is automatically deducted from your setup fee.
                </p>
              </div>
            </div>
            <Link
              href="/resources"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 group font-mono"
            >
              <span>Calculate your missed call loss</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
