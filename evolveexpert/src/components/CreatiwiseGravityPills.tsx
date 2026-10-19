"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CreatiwiseGravityPills() {
  const pills = [
    { label: "Next.js & TypeScript", rotation: "-rotate-3" },
    { label: "WhatsApp Business AI", rotation: "rotate-2" },
    { label: "Shopify Conversion", rotation: "-rotate-2" },
    { label: "Tally ERP Sync", rotation: "rotate-3" },
    { label: "AI Product Creatives", rotation: "-rotate-1" },
    { label: "0.4s Global Edge CDN", rotation: "rotate-2" },
    { label: "Stripe & Razorpay Escrow", rotation: "-rotate-2" },
  ];

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-24 sm:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12"
      >
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-600 bg-white shadow-2xs">
            About us
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-[#111111]">
            Meet EvolveExpert: Your 7-Day Engineering Partner
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed max-w-xl">
            We combine clean computer science architecture with rapid engineering execution. Instead of charging you for 200 slow agency hours, we ship production-ready web platforms, Shopify stores, and AI automations in one focused week.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="lg:col-span-5 bg-white p-6 rounded-[28px] border border-black/5 shadow-sm flex items-center justify-between"
        >
          <div className="relative bg-[#FAF9F5] p-6 sm:p-7 rounded-[28px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5 space-y-4 group w-full">
            {/* Header Row: Category & Speed Badge */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block">
                  Featured Production Build
                </span>
                <h3 className="text-lg font-bold tracking-tight text-[#111111] mt-0.5">
                  DiaDia Health <span className="font-normal text-neutral-500">· Clinical UX</span>
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-xs font-mono px-3 py-1 rounded-full font-medium shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  0.4s LCP
                </span>
              </div>
            </div>

            {/* Display Canvas with Real Site Screenshot */}
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-inner border border-black/10 group/img bg-[#141416]">
              <Image
                src="/images/portfolio/diadia.jpg"
                alt="DiaDia Health live website preview"
                fill
                className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-5 flex flex-col justify-between text-white">
                {/* Top URL & Live Badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>https://diadiahealth.com</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono uppercase tracking-wider font-bold">
                    Live
                  </span>
                </div>

                {/* Core Headline & Tag */}
                <div className="my-auto space-y-1.5 py-2">
                  <p className="text-[11px] uppercase tracking-widest text-emerald-400 font-mono font-bold drop-shadow-sm">
                    Next.js + Figma System + Automation
                  </p>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight leading-snug text-white drop-shadow-md">
                    Designed to convert traffic into booked patients.
                  </h4>
                </div>

                {/* Footer Strip & Link */}
                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                  <span className="text-xs text-white/90 font-medium">
                    Delivered in 1-week sprint
                  </span>
                  <motion.a
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://diadiahealth.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white text-[#111111] flex items-center justify-center transition-colors shadow-md group/btn"
                    aria-label="Visit DiaDia Health"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
            Higher lead &amp; checkout conversion vs slow template websites
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
