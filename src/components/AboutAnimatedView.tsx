"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Zap, Terminal, HeartHandshake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutAnimatedView() {
  const principles = [
    {
      title: "0 Account Managers",
      desc: "You speak directly to senior engineers who build your website and program your AI agents. Zero telephone games, zero miscommunication.",
      icon: Terminal,
    },
    {
      title: "Asynchronous Speed",
      desc: "Instead of 30-minute status meetings that could be an email, we send crisp 2-minute Loom screen-recordings and maintain a live private Notion dashboard.",
      icon: Zap,
    },
    {
      title: "Clean CS Architecture",
      desc: "No WordPress page builders with 45 third-party plugins. We write typed, modular Next.js 16 code with Tailwind CSS and sub-second cold starts.",
      icon: ShieldCheck,
    },
    {
      title: "100% Client Ownership",
      desc: "No licensing traps or proprietary vendor lock-in. We transfer the GitHub repository, Vercel team deployment, and API credentials directly to you.",
      icon: HeartHandshake,
    },
  ];

  return (
    <>
      {/* Principles Grid with Staggered Entrance */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-[28px] p-8 border border-black/5 shadow-2xs hover:shadow-xl transition-shadow duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-[#111111] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* The 14-Day Guarantee Callout */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0A0A0C] text-white rounded-[32px] p-8 sm:p-14 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Orb */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-2xl space-y-5 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              The EvolveExpert Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Speed is not a shortcut. It is the purest sign of engineering mastery.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              When an engineering team specializes in ultra-low latency conversational AI, carrier telephony, and CRM calendar synchronization, building an autonomous Lead-to-Booking engine doesn’t take 6 months. It takes 14 days.
            </p>
            <div className="pt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#111111] text-xs font-bold hover:bg-neutral-200 transition shadow-sm group"
                >
                  <span>Deploy Your Lead-to-Booking System</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
