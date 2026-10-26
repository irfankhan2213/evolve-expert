"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { Check, ShieldCheck, ChevronDown, Zap, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PricingClientView() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricing = {
    USD: {
      starterSetup: "$1,500",
      starterMonthly: "$300/mo",
      coreSetup: "$2,500",
      coreOriginal: "$3,500",
      coreMonthly: "$600/mo",
      pipelineSetup: "$7,500",
      pipelineMonthly: "$1,200/mo",
      depositCore: "$1,250",
      finalCore: "$1,250",
      taxNote: "All international credit cards, Stripe, wire transfer & milestone escrow supported.",
    },
    INR: {
      starterSetup: "₹45,000",
      starterMonthly: "₹9,000/mo",
      coreSetup: "₹75,000",
      coreOriginal: "₹1,05,000",
      coreMonthly: "₹15,000/mo",
      pipelineSetup: "₹1,50,000",
      pipelineMonthly: "₹25,000/mo",
      depositCore: "₹37,500",
      finalCore: "₹37,500",
      taxNote: "GST-compliant tax invoices, UPI, Net Banking & Razorpay accepted.",
    },
  };

  const curr = pricing[currency];

  const faqs = [
    {
      q: "How much revenue does a service business lose from missed calls?",
      a: "A service business missing just 20 calls or slow web inquiries per month loses approximately $3,000 every single month ($36,000 annually or ₹9,00,000/year). Assuming a standard 25% close rate and an average $600 job ticket, 5 high-intent customers book with your fastest competitor instead of your company.",
    },
    {
      q: "How fast does the EvolveExpert Lead-to-Booking System go live?",
      a: "The entire system is live in 14 calendar days. Days 1–3 establish the intake audit and calendar routing. Days 4–10 build the voice engine, WhatsApp Cloud API flows, and CRM webhooks. Days 11–13 execute a live 20-call acceptance test with edge cases. Day 14 marks official public telephony launch.",
    },
    {
      q: "How does the 50/50 risk-reversal payment structure work?",
      a: "You pay a 50% deposit to commence the 14-day sprint, and the remaining 50% only after you test and sign off on our 20-call acceptance test. If our AI voice agent and calendar booking are not ready for acceptance testing on Day 14, 25% is automatically credited off the setup fee.",
    },
    {
      q: "Does the AI call answering system disclose that it is an AI?",
      a: "Yes. Transparency and compliance are built into every system. The AI greeting states upfront that it is an automated AI booking assistant on a recorded line, ensuring compliance with FCC, TCPA, and international telephony regulations while immediately helping the caller book their appointment.",
    },
    {
      q: "What is included in the 1,000 voice minutes monthly allowance?",
      a: "Every monthly retainer includes up to 1,000 connected AI voice minutes per month (~350–400 completed calls), covering live telephony carrier fees, LLM inference costs, speech-to-text, and voice synthesis. Additional minutes are billed transparently at wholesale carrier cost without markup.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>50/50 Milestone Escrow · 20-Call Acceptance Guarantee</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-tight text-[#111111]">
            Turnkey Lead-to-Booking Pricing. <br />
            <span className="font-editorial text-emerald-700 italic">Live in 14 Days.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Zero missed calls. Sub-60s web lead qualification. Guaranteed 20-call sign-off.
          </p>

          {/* Currency Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex bg-white p-1 rounded-full border border-neutral-300 shadow-2xs relative">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                  currency === "USD" ? "text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                {currency === "USD" && (
                  <motion.div
                    layoutId="pricingPageCurrencyPill"
                    className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                Global (USD $)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                  currency === "INR" ? "text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                {currency === "INR" && (
                  <motion.div
                    layoutId="pricingPageCurrencyPill"
                    className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                India (INR ₹)
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards Grid */}
      <section id="plans" className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Starter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-[32px] p-7 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#111111]">Starter System</h2>
                  <p className="text-xs text-neutral-500 mt-0.5">Missed-call text back &amp; web lead triage</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-[#111111] font-semibold">
                  14 Days
                </span>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={curr.starterSetup}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold text-[#111111] block"
                  >
                    {curr.starterSetup}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-emerald-700 font-mono font-semibold block mt-1">
                  + {curr.starterMonthly} retainer (includes 1,000 voice mins)
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 pt-2 border-t border-black/5">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>24/7 AI missed-call instant text-back</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sub-60s automated web lead qualification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Single staff calendar booking integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instant WhatsApp &amp; Email lead notifications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Weekly executive lead &amp; conversion digest</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-[#111111] text-white font-semibold text-xs text-center block hover:bg-neutral-800 transition shadow-sm"
                >
                  Deploy Starter System →
                </Link>
              </motion.div>
              <p className="text-[10px] text-neutral-400 text-center mt-2 font-mono">
                50% deposit · 50% on test sign-off
              </p>
            </div>
          </motion.div>

          {/* Plan 2: Core System */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#0E0E11] text-white rounded-[32px] p-7 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group border-2 border-emerald-500"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white">Core System</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">24/7 AI Voice Answering &amp; WhatsApp</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  FOUNDING CLIENT
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={curr.coreSetup}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl sm:text-5xl font-extrabold text-white block"
                    >
                      {curr.coreSetup}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-xs text-neutral-400 line-through">
                    {curr.coreOriginal}
                  </span>
                </div>
                <span className="text-xs text-emerald-400 font-mono font-semibold block mt-1">
                  + {curr.coreMonthly} retainer (includes 1,000 voice mins)
                </span>
              </div>

              {/* Milestone breakdown */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1 font-mono text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Day 0 Deposit (50%):</span>
                  <span className="font-bold text-white">{curr.depositCore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Day 14 Acceptance (50%):</span>
                  <span className="font-bold text-emerald-400">{curr.finalCore}</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 pt-2 border-t border-white/10">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">24/7 Inbound Voice AI phone answering</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Official Meta WhatsApp Cloud API qualification flow</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-staff calendar scheduling (Google / Cal.com)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>2-way SMS confirmations &amp; no-show defense sequences</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct CRM sync (HubSpot, GoHighLevel, Jobber)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-emerald-300 font-semibold">Rigorous 20-call acceptance test with sign-off</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 relative z-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-[#111111] font-semibold text-xs text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Claim Founding Client Rate →
                </Link>
              </motion.div>
              <p className="text-[10px] text-neutral-400 text-center mt-2 font-mono">
                {curr.taxNote}
              </p>
            </div>
          </motion.div>

          {/* Plan 3: Full Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-[32px] p-7 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#111111]">Full Pipeline</h2>
                  <p className="text-xs text-neutral-500 mt-0.5">Custom voice agents &amp; reactivation</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-[#111111] font-semibold">
                  Custom
                </span>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={curr.pipelineSetup}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold text-[#111111] block"
                  >
                    {curr.pipelineSetup}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-emerald-700 font-mono font-semibold block mt-1">
                  + {curr.pipelineMonthly} retainer
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 pt-2 border-t border-black/5">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Custom inbound &amp; outbound AI voice agents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bi-directional CRM sync (ServiceTitan, Jobber, HubSpot)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Automated quote re-engagement &amp; estimate closing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Consent-based past customer reactivation sequences</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dedicated SLA with 4-hour emergency response</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-[#111111] text-white font-semibold text-xs text-center block hover:bg-neutral-800 transition shadow-sm"
                >
                  Schedule Telephony Review →
                </Link>
              </motion.div>
              <p className="text-[10px] text-neutral-400 text-center mt-2 font-mono">
                Custom telephony routing &amp; IVR audit
              </p>
            </div>
          </motion.div>
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-[28px] bg-white border border-black/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold mb-1">
                The EvolveExpert SLA Commitment
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                50/50 Risk Reversal &amp; 14-Day Delivery Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-1 leading-relaxed">
                You pay 50% to commence your 14-day sprint, and 50% only after you test and sign off on our 20-call acceptance test. If our AI voice agent and calendar booking are not ready for acceptance testing on Day 14, 25% is automatically credited off your setup fee.
              </p>
            </div>
          </div>
          <Link
            href="/resources"
            className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold whitespace-nowrap hover:bg-neutral-800 transition shadow-xs"
          >
            Calculate Lost Revenue →
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[900px] mx-auto px-5 sm:px-10 pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Frequently Answered Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm hover:bg-neutral-50 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180 text-emerald-600" : "text-neutral-400"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-black/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
