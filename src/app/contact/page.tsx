import React from "react";
import Link from "next/link";
import { Mail, Clock, MapPin, ShieldAlert, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Contact Us | EvolveExpert Technologies",
  description: "Get in touch with the EvolveExpert team for technical API support, billing assistance, and grievance redressal.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Contact Us</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact & Support
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            We are here to assist you with API integration questions, custom quota inquiries, billing verification, and enterprise technical support.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-white">General & Technical Support</h2>
            <p className="text-sm text-zinc-400">
              For API issues, SDK integration guidance, and general inquiries:
            </p>
            <p className="text-emerald-400 font-mono text-base font-medium">
              support@evolveexpert.com
            </p>
            <p className="text-xs text-zinc-500">Guaranteed response within 24 business hours.</p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-white">Operational Hours</h2>
            <p className="text-sm text-zinc-400">
              Our engineering and customer support desk operates during:
            </p>
            <div className="space-y-1 text-sm text-zinc-300">
              <p>Monday – Friday: 9:00 AM – 7:00 PM IST</p>
              <p>Saturday: 10:00 AM – 3:00 PM IST</p>
              <p className="text-xs text-zinc-500">Emergency endpoint monitoring active 24/7/365.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-white">Physical & Operating Address</h2>
            <div className="text-sm text-zinc-300 leading-relaxed">
              <p className="font-medium text-white">EvolveExpert Technologies</p>
              <p>Sector 18, Commercial Tech Corridor</p>
              <p>Gurugram, Haryana – 122015, India</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-white">Billing & Disputes Desk</h2>
            <p className="text-sm text-zinc-400">
              Direct inquiries regarding Razorpay transactions, refunds, and corporate invoicing:
            </p>
            <p className="text-emerald-400 font-mono text-base font-medium">
              billing@evolveexpert.com
            </p>
            <p className="text-xs text-zinc-500">Refund requests acknowledged within 4 business hours.</p>
          </div>
        </div>

        {/* Statutory Grievance Redressal (Mandatory under Indian IT Act & DPDP Act 2023) */}
        <div className="p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-lg font-semibold text-white">
              Statutory Grievance Redressal Officer
            </h2>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            In compliance with the Indian Information Technology Act, 2000, the Consumer Protection (E-Commerce) Rules, 2020, and the Digital Personal Data Protection Act, 2023, the contact details of the designated Grievance Officer are set forth below:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pt-2">
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Officer Name</span>
              <span className="text-zinc-200 font-medium">Irfan Khan</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Designation</span>
              <span className="text-zinc-200 font-medium">Grievance & Privacy Officer</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-xs uppercase">Direct Email</span>
              <span className="text-amber-400 font-mono font-medium">grievance@evolveexpert.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
