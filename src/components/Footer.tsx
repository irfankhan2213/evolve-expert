'use client';

import React from 'react';
import { FileSpreadsheet, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm font-mono">DocuPulse AI</p>
              <p className="text-[11px] text-zinc-400 font-mono">Autonomous Invoice, Receipt & Ledger Intelligence Engine</p>
            </div>
          </div>

          {/* Compliance & Badges */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-mono text-xs">
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Razorpay Verified</span>
            </div>
            <span className="text-zinc-700">•</span>
            <span>RapidAPI Certified</span>
            <span className="text-zinc-700">•</span>
            <span>GST Checksum Engine</span>
            <span className="text-zinc-700">•</span>
            <span>AES-256 Cloud Vault</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <p>© 2026 DocuPulse AI Inc. All rights reserved. Sub-second financial extraction pipeline.</p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center space-x-1 text-zinc-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
