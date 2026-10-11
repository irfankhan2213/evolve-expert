'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BentoFeatures } from '@/components/BentoFeatures';
import { LiveExtractor } from '@/components/LiveExtractor';
import { RoiCalculator } from '@/components/RoiCalculator';
import { DeveloperSection } from '@/components/DeveloperSection';
import { Pricing } from '@/components/Pricing';
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
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* 1. Global High-Precision Navbar */}
      <Navbar
        freeScansLeft={freeScansLeft}
        onNavigateToDemo={() => scrollTo('demo')}
        onNavigateToPricing={() => scrollTo('pricing')}
        onNavigateToApi={() => scrollTo('developer-api')}
        onNavigateToRoi={() => scrollTo('roi-calculator')}
        onNavigateToFeatures={() => scrollTo('features')}
      />

      {/* 2. Hero Section with Live Product Mockup Preview */}
      <Hero
        onTryDemo={() => scrollTo('demo')}
        onExploreApi={() => scrollTo('developer-api')}
        onCalculateRoi={() => scrollTo('roi-calculator')}
      />

      {/* 3. Enterprise Bento Grid Architecture */}
      <BentoFeatures />

      {/* 4. Interactive Live Extractor with Animated Laser Scanner & Field Map Inspector */}
      <LiveExtractor
        freeScansLeft={freeScansLeft}
        onScanUsed={handleScanUsed}
        onOutOfCredits={handleOutOfCredits}
      />

      {/* 5. Interactive ROI & Time-Saved Calculator */}
      <RoiCalculator onNavigateToPricing={() => scrollTo('pricing')} />

      {/* 6. Developer API & RapidAPI Metered Specs */}
      <DeveloperSection />

      {/* 7. Pricing & High-Converting Razorpay Checkout Drawer */}
      <Pricing onCreditsPurchased={handleCreditsPurchased} />

      {/* 8. Global Footer */}
      <Footer />
    </main>
  );
}
