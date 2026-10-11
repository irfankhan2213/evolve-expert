'use client';

import React, { useState } from 'react';
import { Code2, Terminal, Copy, CheckCircle, ExternalLink, Cpu } from 'lucide-react';

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
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "docupulse.p.rapidapi.com"
  },
  body: JSON.stringify({
    documentTypeHint: "invoice",
    image: base64String
  })
});

const result = await response.json();
console.log("Total Amount:", result.data.financials.total_amount);
console.log("Vendor GSTIN:", result.data.vendor.tax_id_gstin);`,

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
print("Extracted Invoice:", data["data"]["invoice_number"])`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer-api" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Explanation Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs text-purple-700 dark:text-purple-300 font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Track B: RapidAPI Hub Integration</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Integrate Document Intelligence in 3 Lines of Code
          </h2>

          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            Building an accounting app, ERP bridge, or expense tracker? Access our metered AI vision endpoints directly through RapidAPI or with your Razorpay-issued API Key.
          </p>

          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <p>
                <strong>Multimodal Vision & OCR</strong>: Handles messy scans, phone camera photos, angled receipts, and multi-page PDFs.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <p>
                <strong>GSTIN & Tax Compliance</strong>: Automatic verification of Indian GSTIN format, tax percentages (5%, 12%, 18%, 28%), and currency recognition.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <p>
                <strong>RapidAPI Marketplace Compatible</strong>: Automatic metering, tiered rate limits, and turnkey billing.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 transition-colors shadow-sm"
            >
              <span>View Listing on RapidAPI</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Code Block Column */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-zinc-400 font-mono ml-2">POST /api/v1/extract</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex bg-zinc-800 rounded-lg p-0.5 text-xs font-mono">
                  {(['curl', 'node', 'python'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-2.5 py-1 rounded-md transition-all uppercase ${
                        selectedLanguage === lang
                          ? 'bg-zinc-900 text-indigo-400 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  onClick={copyCode}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Copy Code"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-xs overflow-x-auto text-zinc-300 leading-relaxed max-h-[380px]">
              <pre>{codeSnippets[selectedLanguage]}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
