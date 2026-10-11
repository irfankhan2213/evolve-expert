'use client';

import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Loader2,
  Key,
  X,
  CreditCard,
  QrCode,
  Lock,
  Building2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PricingPlan } from '@/types';

interface PricingProps {
  onCreditsPurchased: (credits: number, apiKey?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onCreditsPurchased }) => {
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [selectedPlanForDrawer, setSelectedPlanForDrawer] = useState<PricingPlan | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'upi' | 'cards' | 'netbanking'>('upi');
  const [purchasedPlan, setPurchasedPlan] = useState<{ name: string; apiKey?: string } | null>(null);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Pack',
      tagline: 'Ideal for solo accountants and small business audits',
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
      tagline: 'For CA firms, agencies & high-volume financial teams',
      priceInInr: 699,
      priceInUsd: 9.0,
      credits: 250,
      isPopular: true,
      features: [
        '250 AI Document Scans',
        'Instant Excel & CSV Export',
        'GSTIN & Tax Fraud Checksum Audit',
        'Full RapidAPI Key Access (Metered)',
        'Priority Sub-second Queue (<800ms)',
        'Batch Document Processing',
      ],
    },
    {
      id: 'enterprise',
      name: 'Power API & Team',
      tagline: 'For automated ERP pipelines, software devs & scale',
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

  const handleOpenDrawer = (plan: PricingPlan) => {
    setSelectedPlanForDrawer(plan);
  };

  const handleCloseDrawer = () => {
    setSelectedPlanForDrawer(null);
  };

  const handleExecutePayment = async () => {
    if (!selectedPlanForDrawer) return;
    const plan = selectedPlanForDrawer;
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

      // 2. Load Razorpay Checkout Script if not present
      interface RazorpayWindow {
        Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
      }

      const loadRazorpayScript = () => {
        return new Promise<boolean>((resolve) => {
          const win = window as unknown as RazorpayWindow;
          if (win.Razorpay) return resolve(true);
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

      const scriptLoaded = await loadRazorpayScript();
      const win = window as unknown as RazorpayWindow;

      if (scriptLoaded && !orderData.isDemoMode && win.Razorpay) {
        const options: Record<string, unknown> = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'DocuPulse AI',
          description: `${plan.name} (${plan.credits} AI Scans)`,
          order_id: orderData.orderId,
          handler: async (response: Record<string, unknown>) => {
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

        const rzp = new win.Razorpay(options);
        rzp.open();
        handleCloseDrawer();
      } else {
        // Test / Demo Mode fallback
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
        handleCloseDrawer();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown payment error';
      alert('Payment processing error: ' + msg);
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
    <section id="pricing" className="py-20 md:py-28 bg-zinc-950 text-white border-t border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PAY-AS-YOU-GO • ZERO MONTHLY COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Transparent, Predictable Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Never pay for bloated software seats. Purchase document credits that never expire, or connect via RapidAPI endpoints.
          </p>
        </div>

        {/* Success Banner if purchased */}
        {purchasedPlan && (
          <div className="mb-12 max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 text-center shadow-xl">
            <h3 className="text-xl font-bold text-emerald-300">
              🎉 Payment Confirmed! Your {purchasedPlan.name} is Active!
            </h3>
            <p className="text-sm text-zinc-300 mt-1">
              Your AI document scans have been added to your live balance immediately.
            </p>
            {purchasedPlan.apiKey && (
              <div className="mt-4 p-3.5 rounded-2xl bg-zinc-950 border border-emerald-500/30 inline-flex items-center space-x-3 text-xs font-mono text-zinc-200">
                <Key className="w-4 h-4 text-emerald-400" />
                <span>API Key: <strong className="text-emerald-300">{purchasedPlan.apiKey}</strong></span>
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
                  ? 'bg-zinc-900/90 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10'
                  : 'bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-xs text-zinc-400 min-h-[32px] leading-relaxed">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                    ₹{plan.priceInInr}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    (~${plan.priceInUsd} USD) / {plan.credits} scans
                  </span>
                </div>

                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center space-x-1.5 font-semibold">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Only ₹{(plan.priceInInr / plan.credits).toFixed(2)} per document scan</span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5 text-xs sm:text-sm text-zinc-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleOpenDrawer(plan)}
                disabled={loadingPlanId !== null}
                className={`mt-8 w-full py-4 px-5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.01]'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                }`}
              >
                <span>Select & Pay via Razorpay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Security Seals */}
        <div className="mt-14 pt-8 border-t border-zinc-900 text-center text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center space-x-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>256-Bit Bank-Grade Encryption</span>
          </span>
          <span>•</span>
          <span>UPI Instant Rails (GPay, PhonePe, Paytm, BHIM)</span>
          <span>•</span>
          <span>All Indian & Global Cards (RuPay, Visa, Mastercard)</span>
          <span>•</span>
          <span>Credits Never Expire</span>
        </div>

      </div>

      {/* High-Converting Razorpay Checkout Drawer / Modal */}
      {selectedPlanForDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end bg-black/70 backdrop-blur-sm p-4 sm:p-0 transition-opacity">
          <div className="w-full sm:max-w-md h-auto sm:h-full bg-zinc-950 border-l border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center space-x-2.5">
                  <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    ₹
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Razorpay Checkout</h3>
                    <p className="text-[11px] font-mono text-zinc-400">DocuPulse AI Official Billing</p>
                  </div>
                </div>

                <button
                  onClick={handleCloseDrawer}
                  className="h-8 w-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Order Summary Card */}
              <div className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 font-mono">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Selected Plan:</span>
                  <span className="text-sm font-bold text-white">{selectedPlanForDrawer.name}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Document Scans:</span>
                  <span className="text-sm font-bold text-emerald-400">{selectedPlanForDrawer.credits} Scans (Never Expiring)</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between items-baseline text-base">
                  <span className="text-xs text-zinc-300 font-sans font-semibold">Total Amount Due:</span>
                  <span className="text-xl font-black text-white">₹{selectedPlanForDrawer.priceInInr}</span>
                </div>
              </div>

              {/* Friction-Free Payment Selection */}
              <div className="mt-6 space-y-3">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-400">
                  Select Payment Method:
                </span>

                {/* Option 1: UPI */}
                <div
                  onClick={() => setSelectedPaymentMethod('upi')}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedPaymentMethod === 'upi'
                      ? 'bg-indigo-950/40 border-indigo-500'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                        <span>Instant UPI</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">Fastest</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">GPay, PhonePe, Paytm, BHIM</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPaymentMethod === 'upi' ? 'border-indigo-500 bg-indigo-600' : 'border-zinc-700'
                  }`}>
                    {selectedPaymentMethod === 'upi' && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                </div>

                {/* Option 2: Cards */}
                <div
                  onClick={() => setSelectedPaymentMethod('cards')}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedPaymentMethod === 'cards'
                      ? 'bg-indigo-950/40 border-indigo-500'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Credit & Debit Cards</div>
                      <p className="text-[11px] text-zinc-400">Visa, Mastercard, RuPay, Amex</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPaymentMethod === 'cards' ? 'border-indigo-500 bg-indigo-600' : 'border-zinc-700'
                  }`}>
                    {selectedPaymentMethod === 'cards' && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                </div>

                {/* Option 3: Netbanking */}
                <div
                  onClick={() => setSelectedPaymentMethod('netbanking')}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedPaymentMethod === 'netbanking'
                      ? 'bg-indigo-950/40 border-indigo-500'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Net Banking & Corporate</div>
                      <p className="text-[11px] text-zinc-400">HDFC, ICICI, SBI, Axis & 50+ Banks</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPaymentMethod === 'netbanking' ? 'border-indigo-500 bg-indigo-600' : 'border-zinc-700'
                  }`}>
                    {selectedPaymentMethod === 'netbanking' && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                </div>
              </div>

              {/* Trust badges inside drawer */}
              <div className="mt-6 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 space-y-1 font-mono">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>256-Bit SSL Encrypted Razorpay Rails</span>
                </div>
                <p className="text-zinc-500 text-[10px]">
                  Payment is processed directly on Razorpay&apos;s RBI authorized gateway. No card details stored.
                </p>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="mt-8 pt-4 border-t border-zinc-800 space-y-2">
              <button
                onClick={handleExecutePayment}
                disabled={loadingPlanId !== null}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
              >
                {loadingPlanId ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting Razorpay...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay ₹{selectedPlanForDrawer.priceInInr}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <button
                onClick={handleCloseDrawer}
                className="w-full py-2.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
              >
                Cancel and Return
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
