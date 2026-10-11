'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, FileText, Database, Zap } from 'lucide-react';

interface HeroProps {
  onTryDemo: () => void;
  onExploreApi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTryDemo, onExploreApi }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/15 to-purple-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-700 dark:text-indigo-300 font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Next-Gen Financial Document Intelligence • RapidAPI Ready</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          Extract Invoices & Receipts into{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Clean Excel & JSON
          </span>{' '}
          in Seconds.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Stop typing PDF receipts into spreadsheets by hand. Instantly parse vendor GSTIN, invoice dates, line items, tax breakdowns, and payment terms with 99.2% accuracy.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTryDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5" />
            <span>Try Live Extractor Free</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onExploreApi}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-base border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <Database className="w-4 h-4 text-indigo-500" />
            <span>Developer API on RapidAPI</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>GSTIN & Tax Audited</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Sub-second Processing</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FileText className="w-4 h-4 text-blue-500" />
            <span>Instant Excel/CSV Export</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-purple-500" />
            <span>Instant Razorpay UPI/Cards</span>
          </div>
        </div>
      </div>
    </section>
  );
};
