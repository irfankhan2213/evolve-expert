'use client';

import React from 'react';
import { FileSpreadsheet, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white text-sm">DocuPulse AI</p>
              <p className="text-[11px] text-zinc-400">Automated Financial Document & Invoice Intelligence Engine</p>
            </div>
          </div>

          {/* Compliance & Badges */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-500">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Razorpay Verified Merchant</span>
            </div>
            <span>•</span>
            <span>RapidAPI Marketplace Partner</span>
            <span>•</span>
            <span>GST / Tax Compliant</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© 2026 DocuPulse AI. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Built for autonomous digital monetization with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current inline mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
