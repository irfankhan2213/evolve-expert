import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { StitchNavbar } from "@/components/StitchNavbar";
import { StitchFooter } from "@/components/StitchFooter";
import { ServicesAnimatedView } from "@/components/ServicesAnimatedView";
import { PhoneCall, MessageSquare, CalendarCheck, RefreshCw, ArrowRight, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Lead-to-Booking System Services",
  description:
    "Explore EvolveExpert's turnkey 14-day Lead-to-Booking System. Inbound conversational voice AI, sub-60s WhatsApp qualification, calendar booking, and 50/50 milestone escrow.",
  alternates: {
    canonical: "https://evolveexpert.com/services",
  },
  openGraph: {
    title: "Lead-to-Booking System Services | EvolveExpert",
    description:
      "24/7 conversational voice AI, sub-60s WhatsApp qualification, and calendar booking live in 14 days with 50/50 escrow.",
    url: "https://evolveexpert.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const serviceModules = [
    {
      title: "Missed Call Text Back System",
      badge: "< 15s Auto-Recovery",
      desc: "Triggers an automated, conversational 2-way SMS or WhatsApp within seconds of any missed or busy call. Engages callers while intent is peak and secures their appointment before they dial a competitor.",
      icon: PhoneCall,
      tag: "SPEED TO LEAD",
    },
    {
      title: "24/7 AI Voice Phone Receptionist",
      badge: "< 10s Pickup · Carrier SIP",
      desc: "Picks up on the second ring 24 hours a day, 365 days a year. Answers caller FAQs, diagnoses emergency service requests, verifies addresses, and books directly into your staff calendar.",
      icon: MessageSquare,
      tag: "VOICE TELEPHONY",
    },
    {
      title: "Sub-60s Web & WhatsApp Qualification",
      badge: "391% Conversion Lift",
      desc: "Replaces stagnant email contact forms with automated WhatsApp triage. Pre-qualifies project scope, checks live technician availability, and locks in booked meetings in under 60 seconds.",
      icon: CalendarCheck,
      tag: "INBOUND TRIAGE",
    },
    {
      title: "Automated Quote Follow-Up & No-Show Defense",
      badge: "Up to 50% Fewer No-Shows",
      desc: "Delivers intelligent 2-way confirmation sequences that cut appointment no-shows in half. Re-engages outstanding quotes and reactivates dormant customer lists with zero ad spend.",
      icon: RefreshCw,
      tag: "REVENUE RECOVERY",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased">
      <StitchNavbar />

      {/* Hero Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-12 pb-10">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/80 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Turnkey Lead-to-Booking Infrastructure
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#111111]">
            14 Days from Intake to a{" "}
            <span className="font-editorial text-emerald-700 italic">24/7 autonomous</span>{" "}
            lead booking engine.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Never let another customer call or form submission slip away. We build, test, and deploy conversational voice AI and WhatsApp lead triage wired directly into your calendar.
          </p>
        </div>
      </section>

      {/* Core 4 System Modules Grid (AEO & Keyword Intent) */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="bg-white rounded-[28px] p-8 border border-black/5 shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 font-semibold">{mod.tag}</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold">
                      {mod.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-[#111111]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#111111]">{mod.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{mod.desc}</p>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-700 font-semibold">14-Day Go-Live</span>
                  <Link
                    href="/pricing#plans"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-emerald-700 transition font-mono group"
                  >
                    <span>View Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Animated Timeline Stepper & Tech Stack */}
      <ServicesAnimatedView />

      {/* Traditional Call Center / Agency vs EvolveExpert Matrix */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 py-16">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-black/5 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-2">
            Traditional Answering Service vs. EvolveExpert System
          </h2>
          <p className="text-sm text-neutral-600 mb-8 max-w-xl">
            See why home service contractors, clinics, and local leaders replace expensive call centers with our sub-60 second AI engine.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-xs font-mono text-neutral-400 uppercase">
                  <th className="pb-4 font-semibold">Criteria</th>
                  <th className="pb-4 font-semibold text-neutral-400">Traditional Call Center</th>
                  <th className="pb-4 font-semibold text-[#111111]">EvolveExpert AI Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Response Speed</td>
                  <td className="py-4 text-neutral-500">2–15 minute hold times &amp; missed calls</td>
                  <td className="py-4 font-bold text-emerald-600">&lt; 10s voice pickup &amp; sub-60s text back</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Operating Hours</td>
                  <td className="py-4 text-neutral-500">Business hours only (surge fees for nights)</td>
                  <td className="py-4 font-bold text-emerald-600">24/7/365 continuous answering</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Calendar Booking</td>
                  <td className="py-4 text-neutral-500">Pen-and-paper notes emailed hours later</td>
                  <td className="py-4 font-bold text-emerald-600">Instant real-time calendar &amp; CRM sync</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Deployment Speed</td>
                  <td className="py-4 text-neutral-500">4–8 weeks of staff hiring &amp; manual training</td>
                  <td className="py-4 font-bold text-emerald-600">14 Days Turnkey Deployment</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Acceptance Guarantee</td>
                  <td className="py-4 text-neutral-500">Locked into 12-month non-refundable contracts</td>
                  <td className="py-4 font-bold text-emerald-600">50/50 escrow &amp; 20-call acceptance sign-off</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-neutral-800">Investment</td>
                  <td className="py-4 text-neutral-500">$3,000–$5,000/mo staffing overhead</td>
                  <td className="py-4 font-bold text-emerald-600">$2,500 setup + $600/mo (incl. 1,000 mins)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <StitchFooter />
    </main>
  );
}
