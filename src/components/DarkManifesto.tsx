"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function DarkManifesto() {
  return (
    <section className="bg-[#0A0A0C] text-white py-24 sm:py-32 px-5 sm:px-10 relative overflow-hidden">
      {/* Subtle ambient glow with gentle floating breath */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none"
      />

      <div className="max-w-[1160px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-500 pb-12 mb-16 border-b border-white/10"
        >
          <span>EST. STUDIO</span>
          <span className="hidden sm:inline flex items-center gap-1.5">
            SCROLL FOR 24/7 AI BOOKING ARCHITECTURE{" "}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3 h-3 inline" />
            </motion.span>
          </span>
          <span>GLOBAL &amp; INDIA</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.14] max-w-4xl mx-auto"
        >
          We believe high-margin service businesses win by speed to lead, not expensive call centers or lost voicemails.{" "}
          <span className="text-neutral-500">
            Every system we deploy answers calls in under 10 seconds, qualifies leads 24/7 on WhatsApp, and books appointments directly into your calendar.
          </span>
        </motion.h2>

        {/* Azentos Bottom Dark Bento Frame with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border border-white/15 rounded-[32px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] backdrop-blur-sm shadow-2xl"
        >
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium backdrop-blur-sm border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Built for Growing Founders</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Engineered for Founders Who Move Fast
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Zero timezone headaches. Every client gets a dedicated private Notion Command Portal with 2-minute Loom video updates and a verified 20-call acceptance test.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F3F3F1] text-[#111111] p-7 rounded-[24px] flex flex-col justify-between min-h-[190px] shadow-sm cursor-default group"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Response Benchmark
              </span>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight group-hover:text-emerald-700 transition-colors">
                  &lt; 10s
                </p>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Average voice pickup speed on inbound phone calls, 24 hours a day, 365 days a year.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#16161A] border border-white/10 p-7 rounded-[24px] flex flex-col justify-between min-h-[190px] cursor-default group"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                24/7 Automation
              </span>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  100%
                </p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Automated WhatsApp, CRM &amp; Tally lead capture wired into your backend.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
