"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesAnimatedView() {
  const sprintDays = [
    {
      day: "Day 0 – 1",
      title: "Kickoff & High-Conversion Architecture",
      desc: "Instant onboarding via your private Notion hub. We dissect your target audience, wireframe key conversion funnels, and establish Figma design tokens.",
      deliverable: "Approved Wireframe & Design System Figma",
    },
    {
      day: "Day 2",
      title: "Tactile Editorial UI & Copy Polish",
      desc: "Bespoke Swiss editorial styling, typography hierarchy, high-contrast CTA placement, and persuasion copy crafted to drive user action.",
      deliverable: "High-Fidelity UI Screens & Copy Deck",
    },
    {
      day: "Day 3 – 4",
      title: "Next.js 16 & Modern Web Engineering",
      desc: "Clean component architecture using Next.js App Router, Tailwind CSS, and TypeScript. Strict asset optimization ensuring sub-500ms LCP.",
      deliverable: "Live Vercel Staging Preview & Day-4 Milestone Review",
    },
    {
      day: "Day 5 – 6",
      title: "AI Concierge & Webhook Automation",
      desc: "Embedding your custom 24/7 AI agent trained on your business data, setting up official WhatsApp Business API flows, and linking forms to CRM/Tally ERP.",
      deliverable: "Tested AI Chatbot & Automated Lead Pipeline",
    },
    {
      day: "Day 7",
      title: "100/100 CWV Audit, Domain Launch & Handover",
      desc: "Complete Google PageSpeed audit, SSL/DNS cutover to your custom domain, full GitHub repository transfer, and Loom training vault delivery.",
      deliverable: "Live Production Domain & 100% IP Handover",
    },
  ];

  const techStack = [
    { name: "Next.js 16 (App Router)", role: "SSR & Static Hybrid Architecture", speed: "Instant FCP" },
    { name: "TypeScript & Tailwind CSS", role: "Type-Safe High-Performance UI", speed: "Zero Runtime CSS" },
    { name: "Claude 3.5 & GPT-4o", role: "24/7 Client Knowledge Concierge", speed: "Sub-second RAG" },
    { name: "WhatsApp Cloud API", role: "Automated Conversational Lead Routing", speed: "Instant Ping" },
    { name: "Tally ERP & Webhooks", role: "Real-time Order & Accounting Sync", speed: "Zero Manual Entry" },
    { name: "Vercel Edge Network", role: "Global Low-Latency Deployment", speed: "< 50ms TTFB" },
  ];

  return (
    <>
      {/* 7-Day Sprint Timeline */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
            Execution Protocol
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-1">
            The Day 0 to Day 7 Sprint Stepper
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sprintDays.map((item, idx) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-[24px] p-7 border border-black/5 shadow-2xs flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-neutral-100 text-[#111111] font-mono text-xs font-bold">
                    {item.day}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  {item.deliverable}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Guarantee Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#0E0E11] text-white rounded-[24px] p-7 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">50/40/10 Milestone Escrow</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero client risk. 50% reservation deposit, 40% on mid-sprint review, and the final 10% released only after your domain is live and Google PageSpeed verified at 98+.
              </p>
            </div>
            <div className="pt-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/pricing"
                  className="w-full py-3 rounded-full bg-white text-[#111111] text-xs font-bold text-center block hover:bg-neutral-200 transition"
                >
                  View Transparent Pricing →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid with Smooth Animations */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
            Engineering Backbone
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mt-1">
            Built with modern, production-grade technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="bg-white p-5 rounded-2xl border border-black/5 shadow-2xs flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-sm text-[#111111]">{tech.name}</h4>
                <p className="text-xs text-neutral-500 mt-0.5">{tech.role}</p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">
                {tech.speed}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
