'use client';

import React from 'react';
import { FileSpreadsheet, Sparkles, Code2, Zap, TrendingUp } from 'lucide-react';

interface NavbarProps {
  freeScansLeft: number;
  onNavigateToDemo: () => void;
  onNavigateToPricing: () => void;
  onNavigateToApi: () => void;
  onNavigateToRoi?: () => void;
  onNavigateToFeatures?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  freeScansLeft,
  onNavigateToDemo,
  onNavigateToPricing,
  onNavigateToApi,
  onNavigateToRoi,
  onNavigateToFeatures,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-black tracking-tight text-white font-mono">
                DocuPulse
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                AI 2.4
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-mono">Enterprise Invoice & OCR</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono font-medium text-zinc-400">
          {onNavigateToFeatures && (
            <button
              onClick={onNavigateToFeatures}
              className="hover:text-white transition-colors"
            >
              Capabilities
            </button>
          )}

          <button
            onClick={onNavigateToDemo}
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>Live Extractor</span>
          </button>

          {onNavigateToRoi && (
            <button
              onClick={onNavigateToRoi}
              className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>ROI Calculator</span>
            </button>
          )}

          <button
            onClick={onNavigateToPricing}
            className="hover:text-white transition-colors"
          >
            Pricing & Credits
          </button>

          <button
            onClick={onNavigateToApi}
            className="flex items-center space-x-1.5 hover:text-indigo-400 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Developer API</span>
          </button>
        </nav>

        {/* Action / Free Balance / Checkout */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>{freeScansLeft} Scans Left</span>
          </div>

          <button
            onClick={onNavigateToPricing}
            className="inline-flex items-center space-x-1.5 text-xs font-bold font-mono px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Buy Credits (₹249)</span>
          </button>
        </div>

      </div>
    </header>
  );
};
