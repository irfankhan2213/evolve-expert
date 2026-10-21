"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowWeWorkTags() {
  const steps = [
    {
      num: "01",
      title: "Define (Day 1)",
      tilt: "sm:-rotate-3",
      desc: "1-click onboarding, Notion portal setup, and wireframing your high-converting page architecture.",
    },
    {
      num: "02",
      title: "Design (Day 2)",
      tilt: "sm:rotate-3 lg:translate-y-8",
      desc: "Clean editorial UI in Figma + conversion copy tailored to your exact buyer persona.",
    },
    {
      num: "03",
      title: "Build (Days 3–5)",
      tilt: "sm:-rotate-2",
      desc: "Rapid Next.js/Shopify coding, type-safe validation, and 24/7 WhatsApp/CRM webhook integration.",
    },
    {
      num: "04",
      title: "Launch (Day 7)",
      tilt: "sm:rotate-3 lg:translate-y-8",
      desc: "95+ Google PageSpeed verification, custom domain switch, and your Loom training library.",
    },
  ];

  return (
    <section id="how-we-work" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl space-y-4 mb-16"
      >
        <span className="inline-block px-4 py-1 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-600 bg-white shadow-2xs">
          How we work
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-[#111111]">
          Let us show you how we ship your platform in 7 days
        </h2>
        <p className="text-sm sm:text-base text-neutral-600">
          Clear milestones, zero endless meetings, and complete transparency from Day 1 to launch.
        </p>
      </motion.div>

      {/* Tilted Pinned Tag Cards Grid with Staggered Entrance */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              rotate: 0,
              scale: 1.03,
              boxShadow: "0 25px 45px -12px rgba(0, 0, 0, 0.12)",
              transition: { type: "spring", stiffness: 350, damping: 25 },
            }}
            className={`bg-white rounded-[28px] p-7 border border-neutral-200/80 shadow-[0_18px_40px_rgba(0,0,0,0.06)] cursor-default transition-all duration-300 ${step.tilt}`}
          >
            {/* Punch-Hole Pin at Top Center */}
            <div className="w-4 h-4 rounded-full bg-[#111111] ring-4 ring-neutral-200 mx-auto mb-6 relative">
              <span className="absolute inset-0 rounded-full bg-white/30 scale-75 animate-pulse" />
            </div>
            <span className="text-xs font-mono text-neutral-400 font-semibold">{step.num}</span>
            <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3">{step.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
