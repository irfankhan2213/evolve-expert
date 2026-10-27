"use client";

import React from "react";
import { motion } from "framer-motion";

export function CreatiwiseGravityPills() {
  const pills = [
    { label: "24/7 AI Voice Answering", rotation: "-rotate-3" },
    { label: "Sub-60s WhatsApp Triage", rotation: "rotate-2" },
    { label: "Missed Call Text Back", rotation: "-rotate-2" },
    { label: "Calendar & CRM Sync", rotation: "rotate-3" },
    { label: "20-Call Acceptance Test", rotation: "-rotate-1" },
    { label: "No-Show Defense SMS", rotation: "rotate-2" },
    { label: "50/50 Milestone Escrow", rotation: "-rotate-2" },
  ];

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-24 sm:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl space-y-4 mb-14"
      >
        <span className="inline-block px-4 py-1 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-600 bg-white shadow-2xs">
          About us
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-[#111111]">
          Meet EvolveExpert: Your Autonomous Booking Partner
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
          We combine carrier-grade telephony with conversational AI to eliminate missed leads. Instead of losing high-ticket customers to competitors who answer faster, we deploy a 24/7 AI Lead-to-Booking System in 14 days with guaranteed 20-call sign-off.
        </p>
      </motion.div>

      {/* Creatiwise Dark Wave Card with Floating Tilted Interactive Gravity Pills */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#0E0E11] text-white rounded-[32px] p-8 sm:p-12 overflow-hidden min-h-[300px] flex flex-col justify-between shadow-xl"
      >
        {/* Decorative SVG Wave Lines with gentle animated float */}
        <motion.svg
          animate={{
            x: [0, 8, 0],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute right-0 top-0 h-full w-2/3 pointer-events-none"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path d="M100 300 C 220 120, 380 120, 580 20" stroke="white" strokeWidth="1.5" />
          <path d="M140 300 C 250 150, 400 150, 600 50" stroke="white" strokeWidth="1.5" />
          <path d="M180 300 C 280 180, 420 180, 620 80" stroke="white" strokeWidth="1.5" />
          <path d="M220 300 C 310 210, 440 210, 640 110" stroke="white" strokeWidth="1.5" />
        </motion.svg>

        <div className="relative z-10">
          <p className="text-4xl sm:text-6xl font-extrabold tracking-tight">2.4x</p>
          <p className="text-sm text-neutral-400 mt-1 max-w-sm">
            Higher lead-to-booking conversion vs unstaffed phones and slow email forms
          </p>
        </div>

        {/* Tactile Spring-Physics Gravity Pills */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 pt-12">
          {pills.map((pill, idx) => (
            <motion.span
              key={pill.label}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + idx * 0.06,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{
                scale: 1.12,
                rotate: 0,
                y: -6,
                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white text-[#111111] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg cursor-pointer select-none ${pill.rotation}`}
            >
              {pill.label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
