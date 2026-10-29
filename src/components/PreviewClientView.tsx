"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PreviewData } from "@/data/previews";

export function PreviewClientView({ data }: { data: PreviewData }) {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  useEffect(() => {
    // Send automated real-time alert to EvolveExpert studio
    fetch("/api/preview-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: data.slug,
        clientName: data.companyName,
        timestamp: new Date().toISOString(),
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    }).catch(() => {});
  }, [data.slug, data.companyName]);

  const currentPrompt = data.aiConciergeDemo.samplePrompts[selectedPromptIndex] || data.aiConciergeDemo.samplePrompts[0];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] antialiased">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#111111] text-white px-5 py-3 text-xs flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40 shadow-xs"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-neutral-300">
            CONFIDENTIAL 24-HR PROTOTYPE FOR:
          </span>
          <span className="font-bold text-white uppercase tracking-wider">
            {data.companyName}
          </span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
          <span>Generated: {data.generatedDate}</span>
          <Link
            href="/"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-sans font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Studio Main</span>
          </Link>
        </div>
      </motion.div>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-10 space-y-12">
        {/* Pitch Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EFEA] border border-[#E5E3DC] text-xs font-semibold text-neutral-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Prepared by EvolveExpert Studio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Here is how we would redesign{" "}
            <span className="text-emerald-700 underline decoration-emerald-200 underline-offset-4">
              {data.companyName}
            </span>{" "}
            with 24/7 AI lead-to-booking automation.
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            {data.diagnosedLeak} We mapped your current architecture against our 2026 Next.js &amp; AI framework.
          </p>
        </motion.div>

        {/* Speed & Architecture Comparison Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Current Site Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#F1EFEA] p-2 rounded-[28px] border border-[#E5E3DC]"
          >
            <div className="bg-white rounded-[22px] p-6 sm:p-8 h-full flex flex-col justify-between space-y-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Current Live Architecture
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold border border-rose-200">
                    {data.currentSpeedScore}/100 PageSpeed
                  </span>
                </div>

                <div className="pt-4 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-neutral-800">
                      {data.currentLoadTime}
                    </span>
                    <span className="text-xs text-neutral-500">Mobile LCP</span>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-600">
                    <p className="flex items-center gap-2 text-rose-700 font-medium">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{data.auditMetrics.estimatedMonthlyLostRevenue}</span>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-500">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>First Contentful Paint: {data.auditMetrics.firstContentfulPaint.before}</span>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-500">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Cumulative Layout Shift: {data.auditMetrics.cumulativeLayoutShift.before}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-500">
                <span className="font-bold text-neutral-800 block mb-1">Diagnosed Bottlenecks:</span>
                Unoptimized render-blocking scripts, third-party trackers, and no automated WhatsApp response system.
              </div>
            </div>
          </motion.div>

          {/* EvolveExpert Redesign Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#141416] p-2 rounded-[28px] border border-black/20 shadow-xl"
          >
            <div className="bg-[#0A0A0C] text-white rounded-[22px] p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    EvolveExpert 14-Day System
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    {data.upgradedSpeedScore}/100 PageSpeed
                  </span>
                </div>

                <div className="pt-4 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">
                      {data.upgradedLoadTime}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">Edge Rendering</span>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-300">
                    <p className="flex items-center gap-2 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Estimated +140% Lead &amp; Booking Conversion</span>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-400">
                      <Zap className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>First Contentful Paint: {data.auditMetrics.firstContentfulPaint.after}</span>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-400">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>Zero Layout Shift (CLS: {data.auditMetrics.cumulativeLayoutShift.after})</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300">
                <span className="font-bold text-white block mb-1">Engineered Solution:</span>
                Next.js 16 App Router, Tailwind CSS, 24/7 AI Concierge, and WhatsApp Cloud API pipeline.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Redesign Hero Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
              Proposed Homepage Hero &amp; Architecture
            </h2>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              Bespoke Alabaster Layout
            </span>
          </div>

          <div className="bg-[#FAF9F5] p-6 sm:p-10 rounded-[32px] border border-black/10 shadow-sm space-y-8">
            <div className="max-w-2xl space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                {data.redesignHero.badge}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                {data.redesignHero.headline}{" "}
                <span className="text-emerald-700 italic font-editorial">
                  {data.redesignHero.highlightWord}
                </span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {data.redesignHero.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-neutral-800 transition shadow-sm cursor-pointer"
                >
                  {data.redesignHero.ctaPrimary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-bold hover:bg-neutral-100 transition shadow-2xs cursor-pointer"
                >
                  {data.redesignHero.ctaSecondary}
                </motion.button>
              </div>
            </div>

            {/* Proof Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-200/80">
              {data.redesignHero.proofStats.map((st, sIdx) => (
                <div key={sIdx} className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
                  <p className="text-2xl font-extrabold text-[#111111]">{st.value}</p>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive 24/7 AI Concierge Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
              Interactive 24/7 AI Concierge Simulator
            </h2>
            <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Simulated Engine
            </span>
          </div>

          <div className="bg-[#0E0E11] text-white rounded-[32px] p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Prompt Selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  AI
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {data.aiConciergeDemo.agentName}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {data.aiConciergeDemo.agentRole}
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Click any buyer question below to test how our AI answers in real-time and qualifies leads:
              </p>

              <div className="space-y-2">
                {data.aiConciergeDemo.samplePrompts.map((p, idx) => (
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPromptIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-medium transition-all duration-200 border cursor-pointer ${
                      selectedPromptIndex === idx
                        ? "bg-white text-[#111111] border-white shadow-sm font-semibold"
                        : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {p.question}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Chat Response & Webhook Output with AnimatePresence */}
            <div className="lg:col-span-7 bg-[#141416] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPromptIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      AI Agent Response
                    </span>
                    <p className="text-sm text-neutral-200 leading-relaxed">
                      &ldquo;{currentPrompt.response}&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                      Automated Webhook Action
                    </span>
                    <p className="text-xs font-mono text-emerald-300">
                      ⚡ {currentPrompt.actionTriggered}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="text-[11px] font-mono text-neutral-500 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>Meta WhatsApp Cloud API Ready</span>
                <span>Latency: &lt; 400ms</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sprint Recommendation & Locking Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/10 shadow-sm text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono">
            <span>14-DAY TURNKEY DEPLOYMENT PROPOSAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] max-w-xl mx-auto">
            Ready to deploy this autonomous booking system for {data.companyName}?
          </h2>

          <p className="text-sm text-neutral-600 max-w-lg mx-auto">
            We deploy the complete 24/7 voice AI answering engine, WhatsApp qualification, and calendar booking in 14 days with our 50/50 escrow.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-neutral-800 transition shadow-md block"
              >
                Deploy Booking System for {data.companyName} →
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/917696936377?text=Hi%20EvolveExpert,%20I'm%20reviewing%20the%20preview%20for%20${encodeURIComponent(
                data.companyName
              )}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition shadow-sm block"
            >
              Discuss on WhatsApp (+91 76969 36377)
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
