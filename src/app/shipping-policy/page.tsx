import React from "react";
import Link from "next/link";
import { Zap, MailCheck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Shipping and Delivery Policy | EvolveExpert Technologies",
  description: "Digital delivery policy for EvolveExpert Software-as-a-Service (SaaS), API credits, and software access tokens.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Shipping & Delivery Policy</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Digital Goods & Software-as-a-Service (SaaS) Delivery Framework
          </p>
        </div>

        {/* Highlight Card */}
        <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-base">
            <Zap className="w-5 h-5" />
            <span>100% Electronic & Instant Digital Fulfillment</span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            EvolveExpert Technologies operates exclusively as a digital Software-as-a-Service (SaaS) and developer API provider. We do not manufacture, package, store, or physically dispatch tangible goods. All purchases are fulfilled electronically and instantaneously.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Mode of Delivery</h2>
            <p>
              Upon successful payment authorization via our integrated Razorpay payment gateway or credit card network, purchased document processing credits, API secret keys, and dashboard access permissions are provisioned electronically directly to your user account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Delivery Timeline</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-1">
                <span className="text-emerald-400 font-mono text-xs uppercase block">Access Provisioning</span>
                <p className="text-white font-medium">Instantaneous (0 – 15 Minutes)</p>
                <p className="text-xs text-zinc-400">Credits reflect immediately in your live dashboard upon successful webhook confirmation.</p>
              </div>
              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-1">
                <span className="text-emerald-400 font-mono text-xs uppercase block">Digital Invoice Dispatch</span>
                <p className="text-white font-medium">Within 5 Minutes</p>
                <p className="text-xs text-zinc-400">A tax-compliant electronic GST invoice and payment receipt is dispatched to your registered email address.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Non-Delivery & Latency Resolution</h2>
            <p>
              In rare instances where network delays or payment provider webhook latency prevents your purchased credits from reflecting in your dashboard within fifteen (15) minutes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>Check your registered email address for the automated Razorpay payment confirmation.</li>
              <li>Email our technical support desk at <span className="text-emerald-400 font-mono">support@evolveexpert.com</span> with your Payment Reference ID or registered email.</li>
              <li>Our engineering team guarantees manual verification and manual credit allocation within <strong>four (4) business hours</strong>.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Shipping Charges & Export Duties</h2>
            <p>
              Because all products delivered by EvolveExpert are strictly digital software services and cloud API access, there are <strong>zero shipping fees, zero postal charges, and zero physical handling fees</strong> associated with any purchase on our platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
