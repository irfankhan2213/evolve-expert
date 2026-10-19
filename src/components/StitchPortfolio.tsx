"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export function StitchPortfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "healthtech") return item.filterTag === "healthtech";
    if (activeFilter === "founders") return item.filterTag === "founders";
    if (activeFilter === "d2c") return item.filterTag === "d2c";
    return true;
  });

  return (
    <section id="work" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-24 sm:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div className="max-w-xl space-y-4">
          <span className="inline-block px-4 py-1 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-600 bg-white shadow-2xs">
            Our portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight text-[#111111]">
            Check our recent work: 6 real production builds
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Every site is live, verifiable, and running in production. No fictional concepts.
          </p>
        </div>

        {/* Filter Tabs with Sliding Spring Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-neutral-300 shadow-2xs overflow-x-auto relative">
          {[
            { id: "all", label: "All Builds (6)" },
            { id: "healthtech", label: "HealthTech & Clinical" },
            { id: "founders", label: "B2B & Founders" },
            { id: "d2c", label: "D2C & AI" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 whitespace-nowrap z-10 ${
                  isActive ? "text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTabPill"
                    className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* 6 Clean Animated Cards Grid with Layout Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.a
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              key={item.id}
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-[28px] p-6 border border-black/5 shadow-2xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-emerald-700 transition-colors">
                      {item.client}
                    </h3>
                    <p className="text-xs text-neutral-500">{item.category}</p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:bg-emerald-600 transition-colors shrink-0 shadow-sm"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200" />
                  </motion.span>
                </div>

                {/* Card Thumbnail / Preview Frame */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-4 border border-black/5 bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={`${item.client} live preview`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {item.domain}
                    </span>
                    <span className="bg-white text-[#111111] px-2.5 py-1 rounded-full font-bold shadow-xs">
                      {item.loadTime}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                  {item.stack.slice(0, 3).map((stk) => (
                    <span
                      key={stk}
                      className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md"
                    >
                      {stk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
