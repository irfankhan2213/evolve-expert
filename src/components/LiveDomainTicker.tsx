"use client";

import React from "react";
import { motion } from "framer-motion";

export function LiveDomainTicker() {
  const domains = [
    { name: "manohartraders.com", url: "https://manohartraders.com/" },
    { name: "adigzlabs.com", url: "https://adigzlabs.com" },
  ];

  // Repeat for a completely seamless, infinite marquee loop
  const tickerItems = [...domains, ...domains, ...domains, ...domains, ...domains, ...domains];

  return (
    <div className="relative bg-white border-y border-neutral-200/80 py-4 sm:py-5 overflow-hidden select-none">
      {/* Soft Left and Right Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Smooth Continuous Marquee Track */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
        className="flex items-center gap-6 sm:gap-10 whitespace-nowrap w-max hover:[animation-play-state:paused]"
      >
        {tickerItems.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="flex items-center gap-6 sm:gap-10">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline underline-offset-4 transition flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-tight text-neutral-800"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shrink-0"></span>
              <span>{item.name}</span>
            </a>
            <span className="text-neutral-400 select-none font-mono text-xs sm:text-sm">+</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
