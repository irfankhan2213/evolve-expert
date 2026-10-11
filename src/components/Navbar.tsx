'use client';

import React from 'react';
import { FileSpreadsheet, Sparkles, Code2, Zap } from 'lucide-react';

interface NavbarProps {
  freeScansLeft: number;
  onNavigateToDemo: () => void;
  onNavigateToPricing: () => void;
  onNavigateToApi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  freeScansLeft,
  onNavigateToDemo,
  onNavigateToPricing,
  onNavigateToApi,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">DocuPulse</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                AI
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Invoice & OCR Intelligence</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <button
            onClick={onNavigateToDemo}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Live Extractor
          </button>
          <button
            onClick={onNavigateToPricing}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Pricing & Credits
          </button>
          <button
            onClick={onNavigateToApi}
            className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span>Developer API</span>
          </button>
        </nav>

        {/* Action / Credits Badge */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>{freeScansLeft} Free Scans</span>
          </div>

          <button
            onClick={onNavigateToPricing}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm hover:shadow transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Credits (₹249)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
