import React from "react";
import Link from "next/link";
import { RefreshCw, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Cancellation and Refund Policy | EvolveExpert Technologies",
  description: "Transparent 7-day cancellation and refund guidelines for EvolveExpert digital API credit packs and subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Cancellation & Refund Policy</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: October 2026 | Transparent 7-Day Guarantee
          </p>
        </div>

        {/* Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white">7-Day Refund Window</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Full refund eligibility on unused or minimally used credit packs within 7 calendar days of purchase.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white">5–7 Business Days to Source</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Refunds are credited directly back to the original bank account, card, or UPI VPA via Razorpay.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Subscription Cancellation</h2>
            <p>
              Users may cancel recurring monthly developer API subscriptions at any time through their account dashboard or by submitting a written request to <span className="text-emerald-400 font-mono">billing@evolveexpert.com</span>. Upon cancellation, your access will remain active until the conclusion of the prepaid billing cycle, and no further automated debits will occur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Refund Eligibility Criteria</h2>
            <p>
              We stand behind the performance of our document extraction and tax validation algorithms. You are eligible for a full refund under the following conditions:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>The refund request is submitted within <strong>seven (7) calendar days</strong> of initial payment.</li>
              <li>Less than <strong>twenty percent (20%)</strong> of the purchased document scan credits have been consumed.</li>
              <li>You experienced documented, persistent API endpoint failure or incorrect tax calculations that our engineering team was unable to resolve within 24 hours.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Mode of Refund & Processing Timelines</h2>
            <p>
              In strict adherence to Reserve Bank of India (RBI) Payment Aggregator regulations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>All refunds are credited strictly to the <strong>original source of payment</strong> (e.g., the original credit/debit card, net banking account, or UPI VPA). We do not issue cash refunds or transfers to unverified third-party accounts.</li>
              <li>Once approved by our billing desk, refunds are initiated immediately and reflect in your account within <strong>5 to 7 business days</strong> depending on your issuing bank.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Dispute Resolution Process</h2>
            <p>
              If you notice an unrecognized charge or billing discrepancy, please contact our billing desk directly before initiating a formal bank chargeback. We resolve 99% of billing inquiries within four (4) business hours.
            </p>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 text-xs font-mono">
              <p><span className="text-zinc-500">Billing Desk:</span> <span className="text-emerald-400">billing@evolveexpert.com</span></p>
              <p><span className="text-zinc-500">Escalation Officer:</span> Irfan Khan (<span className="text-zinc-300">grievance@evolveexpert.com</span>)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
