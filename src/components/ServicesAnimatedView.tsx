"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesAnimatedView() {
  const sprintDays = [
    {
      day: "Days 1 – 3",
      title: "Telephony Audit & Qualification Logic",
      desc: "We analyze your historical missed calls, call volume spikes, and objection paths. We configure your CRM schema, calendar buffers, and routing rules.",
      deliverable: "Approved Voice Scripts & Calendar Mapping",
    },
    {
      day: "Days 4 – 7",
      title: "Voice AI & WhatsApp Engine Build",
      desc: "Custom ultra-low-latency voice model engineering. Integration with official Meta WhatsApp Cloud API for sub-60 second speed-to-lead qualification.",
      deliverable: "Live Conversational Sandbox Preview",
    },
    {
      day: "Days 8 – 10",
      title: "CRM & Multi-Calendar Webhook Wiring",
      desc: "Bi-directional integration with your booking calendar (Google, Cal.com, Outlook) and CRM (HubSpot, GoHighLevel, Jobber). Instant staff SMS alerts.",
      deliverable: "Fully Synced Telephony & Booking Pipeline",
    },
    {
      day: "Days 11 – 13",
      title: "The 20-Call Acceptance Stress Test",
      desc: "We execute 20 live test calls covering background noise, difficult accents, unexpected cancellations, emergency transfers, and double-booking edge cases.",
      deliverable: "Verifiable 20-Call Sign-Off Report",
    },
    {
      day: "Day 14",
      title: "Public Telephony Cutover & Go-Live",
      desc: "Seamless carrier forwarding setup (retaining your existing phone number), live staff dashboard activation, and commencement of your 30-day warranty.",
      deliverable: "Live 24/7 Answering Engine & 50/50 Handover",
    },
  ];

  const techStack = [
    { name: "Ultra-Low-Latency Voice Engine", role: "Sub-500ms Human-Like Conversation", speed: "< 450ms Latency" },
    { name: "Meta WhatsApp Cloud API", role: "Official Verified Instant Lead Qualification", speed: "Instant Ping" },
    { name: "Multi-Calendar Booking Engine", role: "Google Calendar, Outlook & Cal.com Sync", speed: "Real-time" },
    { name: "CRM Webhook Pipelines", role: "HubSpot, GoHighLevel, Jobber & Sheets", speed: "Zero Data Loss" },
    { name: "2-Way SMS Appointment Reminders", role: "No-Show Defense & Confirmation Flows", speed: "Automated" },
    { name: "Carrier-Grade Telephony Bridge", role: "Twilio / Telnyx Native SIP & Forwarding", speed: "99.99% Uptime" },
  ];

  return (
    <>
      {/* 14-Day Delivery Timeline */}
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
            The 14-Day Go-Live Roadmap
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
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-[#111111] text-xs font-mono font-bold mb-4">
                  {item.day}
                </span>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">{item.deliverable}</span>
              </div>
            </motion.div>
          ))}

          {/* Escrow Card in Grid */}
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
              <h3 className="text-xl font-bold mb-2">50/50 Milestone Escrow</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero client risk. 50% deposit to commence the sprint, and the remaining 50% released only after you test and sign off on our live 20-call acceptance test.
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

      {/* Tech Stack Grid */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
            Telephony &amp; AI Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mt-1">
            Engineered with high-reliability telephony infrastructure
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
