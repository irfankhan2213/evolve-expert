"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "t1",
      quote:
        "“EvolveExpert helped us deploy an autonomous Lead-to-Booking System. Within days, our response time dropped to under 10 seconds and WhatsApp triage handles patient inquiries 24/7 without routing back to the team.”",
      name: "B2B SaaS & HealthTech Founder · CEO",
      role: "Paid client engagement",
      initials: "BS",
      isFeaturedDark: true,
    },
    {
      id: "t2",
      quote:
        "“EvolveExpert is the 'no fluff', straight-to-the-point engineering studio. In 14 days, they built a phone answering and booking pipeline that passed our 20-call acceptance test with zero friction.”",
      name: "Greg Weinstein",
      role: "Paid founder advisory",
      initials: "GW",
      isFeaturedDark: false,
    },
    {
      id: "t3",
      quote:
        "“The 50/50 milestone escrow gave us complete peace of mind. We paid 50% upfront, stress-tested 20 inbound calls on Day 12, approved the cutover on Day 14, and our booked appointments doubled.”",
      name: "Dru Riley",
      role: "Paid growth advisory",
      initials: "DR",
      isFeaturedDark: false,
    },
    {
      id: "t4",
      quote:
        "“The official WhatsApp Business Cloud API integration is flawless. Inquiries from our ads are automatically qualified and booked into our calendar. It paid for the sprint in the first two weeks.”",
      name: "Christian W K",
      role: "PPC & Acquisition Partner",
      initials: "CK",
      isFeaturedDark: false,
    },
    {
      id: "t5",
      quote:
        "“Zero account managers, zero telephone games. You deal directly with senior fullstack engineers who push commits daily. Within 10 mins they identified the gaps in our funnel that our previous agency missed for 3 months.”",
      name: "Joshua Pitzalis",
      role: "Founder & Technical Lead",
      initials: "JP",
      isFeaturedDark: false,
    },
    {
      id: "t6",
      quote:
        "“We simulated after-hours emergency calls at 11 PM on a Sunday. The AI picked up on the second ring, triaged the request, and booked the appointment in Google Calendar before our competitor even checked their voicemail.”",
      name: "Jawad Ahmed",
      role: "Paid marketing advisory",
      initials: "JA",
      isFeaturedDark: false,
    },
  ];

  return (
    <section className="max-w-[1360px] mx-auto px-5 sm:px-10 py-20">
      {/* Header (Matching User's Screenshot 2) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-neutral-200">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Founder &amp; Operator Voices
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-[#111111]">
            What it feels like when engineering{" "}
            <span className="font-editorial text-emerald-700 italic font-normal">
              finally has a rhythm.
            </span>
          </h2>
        </div>

        {/* Rating Score Badge */}
        <div className="text-left sm:text-right shrink-0">
          <div className="flex items-center gap-2 sm:justify-end">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              4.98/5
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-500 block mt-1">
            Average rating across 42+ verified deployments
          </span>
        </div>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border transition-shadow duration-300 ${
              t.isFeaturedDark
                ? "bg-[#0E0E11] text-white border-black/20 shadow-xl"
                : "bg-white text-[#111111] border-black/5 shadow-2xs hover:shadow-md"
            }`}
          >
            {/* Quote Body */}
            <p
              className={`text-sm sm:text-base leading-relaxed font-normal ${
                t.isFeaturedDark ? "text-neutral-200" : "text-neutral-700"
              }`}
            >
              {t.quote}
            </p>

            {/* Author Footer */}
            <div
              className={`pt-6 mt-6 border-t flex items-center gap-3.5 ${
                t.isFeaturedDark ? "border-white/10" : "border-neutral-100"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                  t.isFeaturedDark
                    ? "bg-white/10 text-emerald-400 border border-white/15"
                    : "bg-neutral-100 text-neutral-800 border border-neutral-200"
                }`}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <p
                  className={`text-xs sm:text-sm font-bold truncate ${
                    t.isFeaturedDark ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-[11px] font-mono truncate ${
                    t.isFeaturedDark ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
