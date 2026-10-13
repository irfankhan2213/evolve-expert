import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EvolveExpert Technologies",
  description: "Privacy policy, data protection, DPDP Act 2023 compliance, and RBI Card-on-File tokenization disclosures.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: October 2026 | Compliant with DPDP Act 2023 & GDPR
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Introduction & Scope</h2>
            <p>
              EvolveExpert Technologies (&quot;EvolveExpert&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your personal data and commercial information. This Privacy Policy details how we collect, store, process, and safeguard information collected through evolveexpert.com, our REST APIs, and developer portals in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act, India) and the General Data Protection Regulation (GDPR, EU).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li><strong>Account & Contact Information:</strong> Name, professional email address, organization name, and billing details provided during account creation.</li>
              <li><strong>Document Data for Processing:</strong> Invoices, receipts, and tax records transmitted via API or web UI for optical character recognition and validation.</li>
              <li><strong>Technical & Telemetry Data:</strong> IP addresses, request latency, API token identifiers, operating system, and browser user-agent strings for security and rate limiting.</li>
            </ul>
          </section>

          <section className="space-y-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
            <h2 className="text-lg font-semibold text-white">3. Zero Raw Card Storage & Payment Security (RBI CoF Framework)</h2>
            <p className="text-zinc-300">
              EvolveExpert does <strong>NOT</strong> collect, process, or store raw credit card numbers, debit card numbers, or CVVs on its servers. All payment transactions are securely tokenized and handled exclusively by our RBI-authorized payment aggregator (Razorpay) and global payment networks in strict compliance with the Reserve Bank of India (RBI) Card-on-File (CoF) Tokenization framework and PCI-DSS Level 1 standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Ephemeral Document Processing & Data Retention</h2>
            <p>
              Uploaded financial documents and invoices are processed ephemerally. Images submitted for extraction are decoded in memory, evaluated against vision and mathematical verification models, and immediately expunged from primary server memory upon payload transmission. We do not sell, license, or monetize customer financial data to third-party data brokers or advertising exchanges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Data Subject Rights</h2>
            <p>
              Under applicable data protection laws, you retain the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>Access, correct, or request deletion of your account records.</li>
              <li>Revoke API tokens and request complete anonymization of telemetry logs.</li>
              <li>Lodge a grievance with our designated Grievance Officer.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Grievance Officer & Contact Details</h2>
            <p>
              For privacy inquiries or grievance redressal, please contact:
            </p>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 text-xs font-mono space-y-1">
              <p><span className="text-zinc-500">Name:</span> Irfan Khan</p>
              <p><span className="text-zinc-500">Role:</span> Grievance & Compliance Officer</p>
              <p><span className="text-zinc-500">Email:</span> <span className="text-emerald-400">grievance@evolveexpert.com</span></p>
              <p><span className="text-zinc-500">Address:</span> Sector 18, Commercial Corridor, Gurugram, Haryana 122015, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
