'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveExtractor } from '@/components/LiveExtractor';
import { Pricing } from '@/components/Pricing';
import { DeveloperSection } from '@/components/DeveloperSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [freeScansLeft, setFreeScansLeft] = useState<number>(3);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScanUsed = () => {
    setFreeScansLeft((prev) => Math.max(0, prev - 1));
  };

  const handleCreditsPurchased = (addedCredits: number) => {
    setFreeScansLeft((prev) => prev + addedCredits);
  };

  const handleOutOfCredits = () => {
    scrollTo('pricing');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        freeScansLeft={freeScansLeft}
        onNavigateToDemo={() => scrollTo('demo')}
        onNavigateToPricing={() => scrollTo('pricing')}
        onNavigateToApi={() => scrollTo('developer-api')}
      />

      {/* Hero Section */}
      <Hero
        onTryDemo={() => scrollTo('demo')}
        onExploreApi={() => scrollTo('developer-api')}
      />

      {/* Interactive Live Document Extractor */}
      <LiveExtractor
        freeScansLeft={freeScansLeft}
        onScanUsed={handleScanUsed}
        onOutOfCredits={handleOutOfCredits}
      />

      {/* Developer API & RapidAPI Section */}
      <DeveloperSection />

      {/* Pricing & Razorpay Checkout */}
      <Pricing onCreditsPurchased={handleCreditsPurchased} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
