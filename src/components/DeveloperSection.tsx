'use client';

import React, { useState } from 'react';
import { Copy, ExternalLink, Cpu, Check } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'node' | 'python'>('curl');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    curl: `curl -X POST https://docupulse.ai/api/v1/extract \\
  -H "Content-Type: application/json" \\
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \\
  -H "X-RapidAPI-Host: docupulse.p.rapidapi.com" \\
  -d '{
    "documentTypeHint": "invoice",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }'`,

    node: `const response = await fetch("https://docupulse.ai/api/v1/extract", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": "docupulse.p.rapidapi.com"
  },
  body: JSON.stringify({
    documentTypeHint: "invoice",
    image: base64Buffer
  })
});

const result = await response.json();
console.log("Extracted Vendor:", result.data.vendor.name);
console.log("GSTIN Checksum:", result.data.vendor.tax_id_gstin);
console.log("Grand Total:", result.data.financials.total_amount);`,

    python: `import requests

url = "https://docupulse.ai/api/v1/extract"
headers = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "docupulse.p.rapidapi.com"
}
payload = {
    "documentTypeHint": "invoice",
    "image": base64_image_data
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Invoice No:", data["data"]["invoice_number"])
print("Total (INR):", data["data"]["financials"]["total_amount"])`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer-api" className="py-20 md:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>DEVELOPER API & RAPIDAPI HUB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Integrate Vision AI in{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                3 Lines of Code
              </span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Building automated accounts payable, ERP connectors, or fintech expense bots? Access our low-latency multimodal endpoints on RapidAPI or with your Razorpay API token.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  <strong className="text-white">Multimodal Vision Parsing</strong>: Handles camera photos, skewed angles, receipts, handwritten notes, and multi-page PDFs.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  <strong className="text-white">Indian GSTIN & Tax Verification</strong>: Automated format checksums, tax slab detection (5%, 12%, 18%, 28%), and multi-currency parsing.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  <strong className="text-white">Sub-900ms Edge Latency</strong>: Pre-warmed edge clusters in Mumbai (ap-south-1) with 99.98% uptime SLA.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href="https://rapidapi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
              >
                <span>View on RapidAPI Hub</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-zinc-500">
                Docs & OpenAPI v3.0 Ready
              </span>
            </div>
          </div>

          {/* Right Code Block Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl overflow-hidden">
              {/* Window Bar */}
              <div className="px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-zinc-400 font-mono ml-3">
                    POST /api/v1/extract
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="flex bg-zinc-950 rounded-xl p-1 border border-zinc-800 text-xs font-mono">
                    {(['curl', 'node', 'python'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-3 py-1 rounded-lg transition-all uppercase ${
                          selectedLanguage === lang
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={copyCode}
                    className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors border border-zinc-700"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs overflow-x-auto text-emerald-400 leading-relaxed max-h-[420px] bg-zinc-950">
                <pre>{codeSnippets[selectedLanguage]}</pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
