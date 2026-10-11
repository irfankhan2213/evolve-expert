'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, Loader2, Key } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PricingPlan } from '@/types';

interface PricingProps {
  onCreditsPurchased: (credits: number, apiKey?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onCreditsPurchased }) => {
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [purchasedPlan, setPurchasedPlan] = useState<{ name: string; apiKey?: string } | null>(null);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Pack',
      tagline: 'Ideal for freelancers and small bill audits',
      priceInInr: 249,
      priceInUsd: 3.5,
      credits: 50,
      features: [
        '50 AI Document Scans',
        'Instant Excel & CSV Export',
        'Line Item & Tax Breakdown',
        'Never Expiring Credits',
        'Standard Email Support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      tagline: 'For accountants, agencies & fast-growing teams',
      priceInInr: 699,
      priceInUsd: 9.0,
      credits: 250,
      isPopular: true,
      features: [
        '250 AI Document Scans',
        'Instant Excel & CSV Export',
        'GSTIN & Tax Fraud Verification',
        'Full RapidAPI Key Access (Metered)',
        'Priority Sub-second Queue',
        'Batch Document Processing',
      ],
    },
    {
      id: 'enterprise',
      name: 'Power API & Team',
      tagline: 'For heavy automated workflows and developers',
      priceInInr: 1999,
      priceInUsd: 25.0,
      credits: 1000,
      features: [
        '1,000 AI Document Scans',
        'Full RapidAPI Integration & Webhook Support',
        'Dedicated API Rate Limit (120 req/min)',
        'Custom Webhook & ERP Export (Tally/Zoho/QuickBooks)',
        'Priority 24/7 SLA Support',
      ],
    },
  ];

  const handleBuyPlan = async (plan: PricingPlan) => {
    setLoadingPlanId(plan.id);

    try {
      // 1. Create Razorpay Order
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          amountInInr: plan.priceInInr,
        }),
      });

      const orderData = await res.json();

      if (!orderData.success) {
        alert(orderData.error || 'Failed to initialize payment');
        setLoadingPlanId(null);
        return;
      }

      // 2. Load Razorpay Checkout Script if not already present
      const loadRazorpayScript = () => {
        return new Promise<boolean>((resolve) => {
          if ((window as any).Razorpay) return resolve(true);
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

      const scriptLoaded = await loadRazorpayScript();

      // If Razorpay live credentials exist and script is loaded, launch Razorpay Checkout Modal
      if (scriptLoaded && !orderData.isDemoMode && (window as any).Razorpay) {
        const options = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'DocuPulse AI',
          description: `${plan.name} (${plan.credits} Document Scans)`,
          order_id: orderData.orderId,
          handler: async (response: any) => {
            // Verify payment signature
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                planId: plan.id,
                isDemoMode: false,
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              handlePaymentSuccess(plan, verifyData.apiKey);
            } else {
              alert('Signature verification failed: ' + verifyData.error);
            }
          },
          prefill: {
            name: 'Valued Customer',
            email: 'customer@docupulse.ai',
          },
          theme: {
            color: '#4f46e5',
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        // Fallback / Test Mode checkout simulation
        const verifyRes = await fetch('/api/razorpay/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            planId: plan.id,
            isDemoMode: true,
          }),
        });
        const verifyData = await verifyRes.json();
        handlePaymentSuccess(plan, verifyData.apiKey);
      }
    } catch (err: any) {
      alert('Payment processing error: ' + err.message);
    } finally {
      setLoadingPlanId(null);
    }
  };

  const handlePaymentSuccess = (plan: PricingPlan, apiKey?: string) => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
    setPurchasedPlan({ name: plan.name, apiKey });
    onCreditsPurchased(plan.credits, apiKey);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-t border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300 font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Pay-As-You-Go • Instant UPI & Global Cards via Razorpay</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Transparent, Predictable Pricing
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Never pay for expensive monthly retainers. Buy credits that never expire, or integrate directly with our RapidAPI endpoints.
          </p>
        </div>

        {/* Success Banner if purchased */}
        {purchasedPlan && (
          <div className="mb-10 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800 text-center shadow-lg">
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
              🎉 Thank you! Your {purchasedPlan.name} is active!
            </h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
              Your credits have been added to your session balance.
            </p>
            {purchasedPlan.apiKey && (
              <div className="mt-4 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-300 dark:border-emerald-700 inline-flex items-center space-x-3 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                <Key className="w-4 h-4 text-emerald-600" />
                <span>API Key: <strong>{purchasedPlan.apiKey}</strong></span>
              </div>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105 z-10'
                  : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-wide uppercase shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 min-h-[32px]">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                    ₹{plan.priceInInr}
                  </span>
                  <span className="text-xs text-zinc-500">
                    (~${plan.priceInUsd} USD) / {plan.credits} scans
                  </span>
                </div>

                <div className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Only ₹{(plan.priceInInr / plan.credits).toFixed(2)} per document</span>
                </div>

                {/* Features list */}
                <ul className="mt-8 space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBuyPlan(plan)}
                disabled={loadingPlanId !== null}
                className={`mt-8 w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white'
                }`}
              >
                {loadingPlanId === plan.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Buy with Razorpay</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Razorpay Assurance */}
        <div className="mt-12 text-center text-xs text-zinc-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>256-bit Bank-grade Encryption</span>
          </span>
          <span>•</span>
          <span>Supports UPI (GPay, PhonePe, Paytm, BHIM)</span>
          <span>•</span>
          <span>Visa, Mastercard, RuPay & International Cards</span>
          <span>•</span>
          <span>Instant Credit Top-Up</span>
        </div>
      </div>
    </section>
  );
};
