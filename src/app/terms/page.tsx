import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | EvolveExpert Technologies",
  description: "Terms of Service and legal agreements governing the use of EvolveExpert software and APIs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Terms and Conditions</span>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: October 2026 | Effective Immediately
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the web applications, software developer kits (SDKs), or REST APIs provided by EvolveExpert Technologies (&quot;EvolveExpert&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) available at evolveexpert.com, you (&quot;User&quot; or &quot;Customer&quot;) agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company, partnership, or legal entity, you represent that you possess the full legal authority to bind such entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Description of Digital Services</h2>
            <p>
              EvolveExpert provides automated, cloud-based software tools for optical character recognition (OCR), financial document parsing (invoices, receipts, bills), regulatory tax identifier verification (Indian GSTIN Luhn Mod-36, EU VAT, UK VAT, and US EIN), and developer API gateway infrastructure. All services, subscriptions, and API credits are provisioned electronically and digitally.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Acceptable Use Policy</h2>
            <p>
              You agree not to utilize the service to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>Upload malicious, fraudulent, forged, or infringing document assets.</li>
              <li>Attempt to reverse-engineer, decompile, or breach rate-limiting controls.</li>
              <li>Resell, sublicense, or redistribute API access keys without prior written enterprise authorization.</li>
              <li>Subject the platform to denial-of-service (DoS) attacks or automated scraping attacks.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Billing, Payments & Taxes</h2>
            <p>
              Transactions processed through our website are secured by RBI-authorized payment aggregators (including Razorpay) and global credit card networks. All prices are listed in Indian Rupees (₹ INR) for domestic purchasers and US Dollars ($ USD) for international developers. Applicable Goods and Services Tax (GST) is calculated and disclosed at checkout. Credit packs are prepaid and deducted on a per-scan or per-call basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Intellectual Property Rights</h2>
            <p>
              EvolveExpert retains all proprietary rights, copyright, patents, and trade secrets in the underlying validation algorithms, vision extraction heuristics, and platform architecture. Customers retain full ownership and copyright of all document images, invoices, and data payloads submitted to the API.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Service Level Availability (SLA) & Disclaimer</h2>
            <p>
              We strive to maintain a 99.9% uptime for core API endpoints. However, the service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. EvolveExpert shall not be held liable for statutory tax penalties or delayed filings resulting from third-party tax authority portal downtimes (such as EU VIES or GSTN network maintenance).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes or claims arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of New Delhi / Gurugram, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">8. Contact Information</h2>
            <p>
              Inquiries regarding these Terms should be directed to <span className="text-emerald-400 font-mono">support@evolveexpert.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
