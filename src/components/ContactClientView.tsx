"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { MessageSquare, Mail, Check, Clock, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactClientView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    budget: "$950 – $1,250 USD",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_page",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          phone: formData.phone,
          budget: formData.budget,
          notes: formData.notes,
        }),
      });
      setSubmitted(true);
    } catch {
      // Fallback submission display
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Senior Engineering Access
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111111]">
            Let&apos;s talk about your{" "}
            <span className="font-editorial text-emerald-700 italic">next 7-day sprint</span>.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Zero account managers. Connect directly with our lead fullstack architects.
          </p>
        </motion.div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Quick Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-[28px] p-7 border border-black/5 shadow-2xs space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111111]">Direct WhatsApp Hotline</h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Need an immediate answer or want to send your current Figma link or live site? Ping our engineering team on WhatsApp.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/18005550199?text=Hi%20EvolveExpert,%20I'd%20like%20to%20discuss%20a%207-day%20sprint"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-5 py-3 rounded-full hover:bg-emerald-600 transition shadow-xs"
              >
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Email & Guarantee Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-[28px] p-7 border border-black/5 shadow-2xs space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-[#111111] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111111]">Studio Concierge Email</h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                concierge@evolveexpert.com
              </p>
              <div className="pt-2 text-xs text-neutral-500 flex items-center gap-2 font-mono">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Guaranteed response time &lt; 4 hours</span>
              </div>
            </motion.div>

            {/* Sprint Slot Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-[24px] bg-[#141416] text-white space-y-2 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Current Sprint Availability</span>
              </div>
              <p className="text-lg font-bold">2 Slots Available This Week</p>
              <p className="text-xs text-neutral-400">
                Next sprint starts Monday 09:00 AM UTC.
              </p>
            </motion.div>
          </div>

          {/* Intake Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border border-black/5 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h2 className="text-2xl font-bold text-[#111111]">
                    Sprint Intake Questionnaire
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Fill in your details below and we&apos;ll send you a private Notion portal invitation and kickoff schedule.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">Current Website URL</label>
                      <input
                        type="text"
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">WhatsApp / Phone</label>
                      <input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">Select Sprint Package</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                    >
                      <option value="$950 / ₹65,000">7-Day Founder Web Sprint ($950 USD / ₹65,000 INR)</option>
                      <option value="$1,250 / ₹90,000">Web Sprint + 24/7 AI &amp; WhatsApp ($1,250 USD / ₹90,000 INR)</option>
                      <option value="Enterprise Custom">Multi-Product / Custom SaaS Platform</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">Project Notes &amp; Goals</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you want to achieve or link any existing Figma designs..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-neutral-800 transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Studio...</span>
                      </>
                    ) : (
                      <span>Submit Sprint Intake →</span>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Intake Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Our lead engineering team is reviewing your project details. We will send your Notion sprint invitation within 4 hours.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold hover:underline"
                    >
                      <span>← Return to Home</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
