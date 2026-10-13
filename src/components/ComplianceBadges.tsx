import React from "react";
import { ShieldCheck, Lock, CreditCard, CheckCircle2 } from "lucide-react";

export default function ComplianceBadges() {
  return (
    <section className="py-10 border-t border-b border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-zinc-400 text-xs font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-300 font-medium">Secured by Razorpay</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>256-Bit TLS 1.3 Encryption</span>
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>PCI-DSS Level 1 &amp; RBI CoF Compliant</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>UPI Intent &bull; RuPay &bull; Cards &bull; NetBanking</span>
          </div>
        </div>
      </div>
    </section>
  );
}
