"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseData {
  titleName: string;
  subtitle: string;
  badge: string;
  dotColor: string;
  domain: string;
  tag: string;
  tagColor: string;
  headline: string;
  link: string;
  image: string;
  canvasBg: string;
}

const HERO_SHOWCASE: Record<string, ShowcaseData> = {
  diadia: {
    titleName: "DiaDia Health",
    subtitle: "· Clinical UX",
    badge: "0.4s LCP",
    dotColor: "bg-emerald-400",
    domain: "https://diadiahealth.com",
    tag: "Next.js + Figma System + Clinical AI",
    tagColor: "text-emerald-400",
    headline: "Designed to convert patient traffic into booked clinical appointments.",
    link: "https://diadiahealth.com",
    image: "/images/portfolio/diadia.jpg",
    canvasBg: "from-[#141416] via-[#1A1E1C] to-[#0B0F0D]",
  },
  wescale: {
    titleName: "WeScale Startups",
    subtitle: "· B2B Studio",
    badge: "0.4s Load",
    dotColor: "bg-sky-400",
    domain: "https://wescalestartups.com",
    tag: "Next.js + Conversion Funnel + Technical SEO",
    tagColor: "text-sky-400",
    headline: "Executive authority platform engineered for high-growth venture founders.",
    link: "https://wescalestartups.com",
    image: "/images/portfolio/wescale.jpg",
    canvasBg: "from-[#141416] via-[#161B26] to-[#0A0D14]",
  },
  elena: {
    titleName: "Elena Ikonomovska",
    subtitle: "· AI Brand",
    badge: "100 SEO",
    dotColor: "bg-amber-400",
    domain: "https://elenaikonomovska.com",
    tag: "Editorial UI + Global Edge CDN + Fast Routing",
    tagColor: "text-amber-400",
    headline: "Minimalist global thought-leadership & executive advisory hub.",
    link: "https://elenaikonomovska.com",
    image: "/images/portfolio/elena.jpg",
    canvasBg: "from-[#141416] via-[#201A15] to-[#0F0C0A]",
  },
};

export function StitchHero() {
  const [activeTab, setActiveTab] = useState<"diadia" | "wescale" | "elena">("diadia");
  const current = HERO_SHOWCASE[activeTab];

  return (
    <section className="relative max-w-[1360px] mx-auto px-5 sm:px-10 pt-4 pb-16 overflow-hidden">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left Column: Monumental Title & Pitch */}
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 backdrop-blur-sm shadow-2xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Welcome to EvolveExpert Studio
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[52px] sm:text-[76px] lg:text-[88px] font-extrabold tracking-[-0.04em] leading-[0.92] uppercase text-[#111111]">
              PURE WEB
              <span className="text-sm sm:text-base font-mono align-top ml-3 text-neutral-500 font-normal">
                (&apos;26)
              </span>
              <br />
              <span className="text-neutral-400 font-bold">&amp; AI SYSTEMS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed"
          >
            We engineer high-converting websites, Shopify stores, and 24/7 WhatsApp AI concierges in{" "}
            <span className="text-[#111111] font-bold underline decoration-neutral-300 underline-offset-4">
              7 days flat
            </span>
            —built so every click drives measurable revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/pricing#plans"
                className="inline-flex items-center gap-3 bg-[#111111] text-white pl-6 pr-2.5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition group shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition shadow-2xs"
              >
                View 6 Live Builds
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom-Left Azentos Mini Proof Bento with subtle hover motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg"
          >
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#141416] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm cursor-default"
            >
              <span className="text-3xl font-extrabold tracking-tight">98+</span>
              <span className="text-[11px] text-neutral-400 mt-3 font-medium leading-snug">
                Google PageSpeed Guarantee
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default"
            >
              <span className="text-3xl font-extrabold tracking-tight text-[#111111]">
                7 Days
              </span>
              <span className="text-[11px] text-neutral-500 mt-3 font-medium leading-snug">
                From Kickoff to Live Domain
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl border border-black/5 flex flex-col justify-between shadow-2xs cursor-default"
            >
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  D
                </span>
                <span className="w-7 h-7 rounded-full bg-sky-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  W
                </span>
                <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  E
                </span>
                <span className="w-7 h-7 rounded-full bg-purple-500 text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                  M
                </span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-700 mt-3 leading-snug">
                6+ Global Founders Served
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative bg-[#FAF9F5] p-6 sm:p-8 rounded-[36px] border border-black/10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 space-y-5 group">
            {/* Switcher Tabs Row with Spring Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-200/60 border border-neutral-300/80 overflow-x-auto relative">
              {[
                { id: "diadia", label: "DiaDia Health" },
                { id: "wescale", label: "WeScale" },
                { id: "elena", label: "Elena I." },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as "diadia" | "wescale" | "elena")}
                    className={`relative flex-1 py-1.5 px-3 rounded-full text-xs font-semibold tracking-tight transition-colors duration-200 z-10 ${
                      isActive ? "text-white" : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeroTabIndicator"
                        className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Header Row: Category & Speed Badge */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block">
                  Featured Production Build
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#111111] mt-0.5">
                  {current.titleName}{" "}
                  <span className="font-normal text-neutral-500">
                    {current.subtitle}
                  </span>
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-xs font-mono px-3.5 py-1.5 rounded-full font-medium shadow-xs">
                  <span className={`w-2 h-2 rounded-full ${current.dotColor} animate-pulse`}></span>
                  <span>{current.badge}</span>
                </span>
              </div>
            </div>

            {/* Editorial Display Canvas showing the REAL site with AnimatePresence */}
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-inner border border-black/10 group/showcase bg-[#141416]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* Actual Website Screenshot */}
                  <Image
                    src={current.image}
                    alt={`${current.titleName} live production website`}
                    fill
                    className="object-cover object-top group-hover/showcase:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30"></div>

                  {/* Content overlay */}
                  <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between text-white">
                    {/* Top URL & Live Badge */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="inline-flex items-center gap-2 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-white font-medium">{current.domain}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono uppercase tracking-wider font-bold">
                        Live
                      </span>
                    </div>

                    {/* Core Headline & Tag */}
                    <div className="my-auto space-y-2 py-2">
                      <p className={`text-xs uppercase tracking-widest font-mono font-bold ${current.tagColor} drop-shadow-sm`}>
                        {current.tag}
                      </p>
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-white drop-shadow-md">
                        {current.headline}
                      </h4>
                    </div>

                    {/* Footer Strip & Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-xs text-white/90 font-medium">
                        Delivered in 1-week sprint
                      </span>
                      <motion.a
                        whileHover={{ scale: 1.12, rotate: 45 }}
                        whileTap={{ scale: 0.95 }}
                        href={current.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center transition-colors shadow-xl group/btn"
                        aria-label={`Visit ${current.titleName}`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
