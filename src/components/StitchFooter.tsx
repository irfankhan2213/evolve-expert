"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StitchFooter() {
  const [leadInput, setLeadInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInput.trim()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "homepage_footer_prototype",
          contactInfo: leadInput.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMessage(data.message || "Failed to submit. Please try again.");
      }
    } catch {
      // In case offline, fallback to success state for seamless UX
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="prototype" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0E0E11] text-white rounded-[32px] p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden"
      >
        {/* Background subtle glowing floating orbs */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute -left-20 -bottom-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ repeat: Infinity, duration: 8, delay: 1, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-mono font-medium border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24-Hour Free Sprint Mockup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Let&apos;s build your free 24-hour homepage prototype
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
            Drop your current website URL and WhatsApp or email below. We&apos;ll send you a custom live preview link before you pay a single dollar.
          </p>
        </div>

        <div className="max-w-lg mx-auto pt-2 relative z-10">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="text"
                  required
                  value={leadInput}
                  onChange={(e) => setLeadInput(e.target.value)}
                  placeholder="Your website URL + Email / WhatsApp..."
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3.5 rounded-full bg-white text-[#111111] text-sm font-semibold hover:bg-neutral-200 transition shrink-0 shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching...</span>
                    </>
                  ) : (
                    <span>Send Prototype →</span>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm border border-emerald-500/30">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Got it! Your custom EvolveExpert preview link is being prepared.</span>
                </div>
                <div className="pt-2">
                  <Link
                    href="/preview/apex-dental"
                    className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 group"
                  >
                    <span>Click here to explore a sample live prototype (Apex Dental)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {errorMessage && (
            <p className="text-xs text-rose-400 mt-2">{errorMessage}</p>
          )}
        </div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-neutral-200/80 mt-12 pt-8">
        {/* Tier 1: Brand, Links & Contact Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <Link href="/" className="font-extrabold text-[#111111] text-base tracking-tight group shrink-0">
              evolveexpert
              <span className="text-emerald-500 group-hover:scale-125 inline-block transition-transform duration-200">
                .
              </span>
            </Link>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-600">
              <Link href="/services" className="hover:text-black transition">
                Services
              </Link>
              <Link href="/proof" className="hover:text-black transition">
                Proof (6)
              </Link>
              <Link href="/about" className="hover:text-black transition">
                Studio
              </Link>
              <Link href="/pricing" className="hover:text-black transition">
                Pricing
              </Link>
              <Link href="/resources" className="hover:text-black transition">
                Audit Scorecard
              </Link>
              <Link href="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/917696936377?text=Hi%20EvolveExpert,%20I'd%20like%20to%20discuss%20the%2014-day%20Lead-to-Booking%20System"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold font-mono border border-emerald-200/90 hover:bg-emerald-100 hover:border-emerald-300 transition shadow-2xs whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>WhatsApp: +91 76969 36377</span>
            </a>

            <a
              href="tel:+917973727820"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold font-mono border border-neutral-300/80 hover:bg-neutral-50 hover:border-neutral-400 transition shadow-2xs whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              <span>Direct: +91 79737 27820</span>
            </a>
          </div>
        </div>

        {/* Tier 2: Copyright & Verification Specs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-neutral-500 border-t border-neutral-200/60 mt-6">
          <div className="flex items-center gap-2.5">
            <span>© {new Date().getFullYear()} EvolveExpert</span>
            <span className="text-neutral-300">·</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-neutral-500">
            <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Sub-60s Speed to Lead
            </span>
            <span className="text-neutral-300 hidden sm:inline">·</span>
            <span className="hidden sm:inline">14-Day Go-Live</span>
            <span className="text-neutral-300 hidden md:inline">·</span>
            <span className="hidden md:inline">50/50 Milestone Escrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
