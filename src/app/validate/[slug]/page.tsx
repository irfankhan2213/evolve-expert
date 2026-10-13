import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryTaxData, getAllCountrySlugs } from "@/lib/pseo-db";
import { ShieldCheck, ArrowRight, Code2, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCountryTaxData(slug);
  if (!data) return {};

  return {
    title: `Validate ${data.countryName} ${data.taxAcronym} | Free Online Tax API & Checksum`,
    description: `Verify ${data.countryName} ${data.taxName} numbers instantly. Live syntax regex, checksum validation, and automated REST API code snippets.`,
    alternates: {
      canonical: `https://evolveexpert.com/validate/${slug}`,
    },
  };
}

export default async function PseoTaxPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCountryTaxData(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-500">Tax Validators</span>
          <span>/</span>
          <span className="text-zinc-300">{data.countryName}</span>
        </div>

        {/* Hero */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span>{data.countryCode} &bull; {data.taxAcronym} Compliance Engine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Validate {data.countryName} {data.taxAcronym} Number Online &amp; via API
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            Verify {data.taxName} format, syntax, and check-digit algorithms in &lt;5ms. Reduce accounts payable exceptions and eliminate invoicing audit failures.
          </p>
        </div>

        {/* Specification Card */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-6">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Format &amp; Validation Specification</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-1">
              <span className="text-zinc-500 block">Official Tax Name</span>
              <span className="text-white font-sans text-sm font-medium">{data.taxName}</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-1">
              <span className="text-zinc-500 block">Structure Syntax</span>
              <span className="text-emerald-400 text-xs">{data.formatDescription}</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-1">
              <span className="text-zinc-500 block">Benchmark Example</span>
              <span className="text-white text-sm font-bold">{data.exampleNumber}</span>
              <span className="text-zinc-500 block text-[10px] font-sans">Sample: {data.sampleVendor}</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-1">
              <span className="text-zinc-500 block">Verification Algorithm</span>
              <span className="text-zinc-300 font-sans text-xs">{data.algorithm}</span>
            </div>
          </div>
        </div>

        {/* Developer Integration Snippet */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <span>cURL Integration Snippet</span>
            </h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Sub-5ms Execution</span>
          </div>

          <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-emerald-400 overflow-x-auto">
{`curl -X POST https://evolveexpert.com/api/v1/validate-tax \\
  -H "Content-Type: application/json" \\
  -d '{
    "taxId": "${data.exampleNumber}"
  }'`}
          </pre>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-1">
                <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Need Bulk {data.countryName} Invoicing OCR?</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Extract line-items and auto-validate {data.taxAcronym} numbers in a single sub-second API request.
            </p>
          </div>
          <Link
            href="/#pricing"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shrink-0 flex items-center gap-2"
          >
            <span>Get 50 Free API Credits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
