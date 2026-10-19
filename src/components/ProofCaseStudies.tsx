"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export function ProofCaseStudies() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-20 space-y-16">
      {PORTFOLIO_ITEMS.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="bg-white rounded-[32px] p-6 sm:p-10 border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image / Preview Column */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/5 bg-neutral-100 group">
              <Image
                src={item.image}
                alt={`${item.client} live showcase`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {item.domain}
                </span>
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full font-bold shadow-xs">
                  {item.metrics}
                </span>
              </div>
            </div>

            {/* Case Details Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Case Study 0{idx + 1} · {item.category}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-[#111111] font-semibold">
                  {item.loadTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                {item.client}
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                  Engineering Highlights:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {item.stack.map((stk) => (
                  <span
                    key={stk}
                    className="text-xs font-mono bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full"
                  >
                    {stk}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#111111] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition shadow-xs group/btn"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                </motion.a>
                <span className="text-xs text-neutral-400 font-mono">
                  Verified Production Domain
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
