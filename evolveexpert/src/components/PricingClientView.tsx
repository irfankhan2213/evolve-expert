"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { Check, ShieldCheck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PricingClientView() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricing = {
    USD: {
      tier1: "$950",
      tier2: "$1,250",
      deposit1: "$475",
      mid1: "$380",
      final1: "$95",
      deposit2: "$625",
      mid2: "$500",
      final2: "$125",
      taxNote: "All international cards, Stripe & wire transfers supported.",
    },
    INR: {
      tier1: "₹65,000",
      tier2: "₹90,000",
      deposit1: "₹32,500",
      mid1: "₹26,000",
      final1: "₹6,500",
      deposit2: "₹45,000",
      mid2: "₹36,000",
      final2: "₹9,000",
      taxNote: "GST-compliant tax invoices, UPI, Net Banking & Razorpay accepted.",
    },
  };

  const curr = pricing[currency];

  const faqs = [
    {
      q: "What is the 50/40/10 milestone escrow payment structure?",
      a: "To ensure absolute mutual accountability, you pay 50% upfront to reserve the sprint slot. On Day 4, after you review the live staging build on Vercel, you pay 40%. The remaining 10% is released on Day 7 only after the domain cutover is live, 98+ PageSpeed is verified, and code ownership is transferred.",
    },
    {
      q: "Who owns the intellectual property and code?",
      a: "You own 100% of all intellectual property, source code, Figma design files, and database access keys from the moment the Day 7 milestone is reached. There are zero licensing fees or ongoing software lock-ins.",
    },
    {
      q: "What if I need revisions during the 7 days?",
      a: "Our sprint includes two full structured feedback cycles: on Day 2 for Figma design & copy, and on Day 4 for the functional staging build. In addition, you get 14 days of complimentary post-launch bug warranty.",
    },
    {
      q: "Can you connect the AI chatbot to our custom WhatsApp Business number?",
      a: "Yes! In Tier 2, we configure the official Meta WhatsApp Business Cloud API directly on your business phone number or brand handle, enabling automated customer triage and lead capture 24/7.",
    },
    {
      q: "What technologies do you use?",
      a: "We engineer exclusively on Next.js 16 (App Router), TypeScript, Tailwind CSS, Vercel Edge hosting, Supabase/PostgreSQL, and official OpenAI/Anthropic APIs for AI logic. This ensures zero plugin vulnerability and sub-500ms global response times.",
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
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>50 / 40 / 10 Milestone Escrow</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-tight text-[#111111]">
            Transparent Sprints. <br />
            <span className="font-editorial text-emerald-700 italic">Zero Hourly Surprise.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Choose between our high-conversion Web Sprint or turnkey AI Automation System.
          </p>

          {/* Currency Toggle with Sliding Indicator */}
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
      <section id="plans" className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Plan 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#111111]">
                    7-Day Founder Web Sprint
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    For startups and leaders needing high-converting web presence
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-[#111111] font-semibold">
                  7 Days
                </span>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={curr.tier1}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold text-[#111111] block"
                  >
                    {curr.tier1}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-neutral-400 block mt-1">
                  Fixed scope · Zero surprise charges
                </span>
              </div>

              {/* Milestone breakdown */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs space-y-1 font-mono text-neutral-600">
                <div className="flex justify-between">
                  <span>Day 0 Deposit (50%):</span>
                  <span className="font-bold text-[#111111]">{curr.deposit1}</span>
                </div>
                <div className="flex justify-between">
                  <span>Day 4 Mid-Sprint (40%):</span>
                  <span className="font-bold text-[#111111]">{curr.mid1}</span>
                </div>
                <div className="flex justify-between">
                  <span>Day 7 Launch &amp; Handover (10%):</span>
                  <span className="font-bold text-emerald-700">{curr.final1}</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 pt-2">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Next.js 16 or Shopify OS 2.0 (up to 5 pages)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Editorial Figma system + conversion copy polish</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Validated lead capture &amp; instant CRM/email notification</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed 98+ PageSpeed Core Web Vitals audit</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private Notion Hub + 48-hr Loom videos (2 feedback rounds)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full py-4 rounded-full bg-[#111111] text-white font-semibold text-sm text-center block hover:bg-neutral-800 transition shadow-sm"
                >
                  Book 7-Day Sprint Slot →
                </Link>
              </motion.div>
              <p className="text-[11px] text-neutral-400 text-center mt-3 font-mono">
                {curr.taxNote}
              </p>
            </div>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#0E0E11] text-white rounded-[32px] p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Complete Web + AI Concierge
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    For growing brands automating sales and client triage
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  RECOMMENDED
                </span>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={curr.tier2}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold text-white block"
                  >
                    {curr.tier2}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-neutral-400 block mt-1">
                  Complete turnkey web &amp; automated AI systems
                </span>
              </div>

              {/* Milestone breakdown */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1 font-mono text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Day 0 Deposit (50%):</span>
                  <span className="font-bold text-white">{curr.deposit2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Day 4 Mid-Sprint (40%):</span>
                  <span className="font-bold text-white">{curr.mid2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Day 7 Launch &amp; Handover (10%):</span>
                  <span className="font-bold text-emerald-400">{curr.final2}</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300 pt-2">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">Everything in the 7-Day Founder Web Sprint</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom 24/7 AI chatbot trained on your company knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Official WhatsApp Business Cloud API automated booking triage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tally ERP, Stripe/Razorpay or HubSpot webhook pipelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30 days priority engineering support + Loom staff vault</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 relative z-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full py-4 rounded-full bg-white text-[#111111] font-semibold text-sm text-center block hover:bg-neutral-200 transition shadow-md"
                >
                  Claim Complete Web + AI Sprint →
                </Link>
              </motion.div>
              <p className="text-[11px] text-neutral-400 text-center mt-3 font-mono">
                {curr.taxNote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion with AnimatePresence */}
      <section className="max-w-[900px] mx-auto px-5 sm:px-10 pb-24">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Everything you need to know about our sprints
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111111] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-black" : "text-neutral-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
