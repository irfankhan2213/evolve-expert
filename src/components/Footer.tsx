import React from "react";
import Link from "next/link";
import { Terminal, Shield, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090b] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-bold tracking-tight text-white">EvolveExpert</span>
            </Link>
            <p className="text-zinc-500 leading-relaxed">
              Enterprise-grade financial document OCR and multi-region tax compliance APIs. Built for developers, accounting firms, and fintech builders.
            </p>
            <div className="pt-2 text-zinc-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Sector 18, Gurugram, HR 122015, India</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="text-emerald-400 font-mono">support@evolveexpert.com</span>
              </p>
            </div>
          </div>

          {/* Col 2: Product & Endpoints */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-mono uppercase text-[11px] font-semibold tracking-wider">Product &amp; APIs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#playground" className="hover:text-emerald-400 transition-colors">Interactive Live Sandbox</a>
              </li>
              <li>
                <span className="font-mono text-zinc-300">/api/v1/extract-and-validate</span>
              </li>
              <li>
                <span className="font-mono text-zinc-300">/api/v1/validate-tax</span>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing &amp; Credit Packs</a>
              </li>
              <li>
                <Link href="/validate/india-maharashtra-gst" className="hover:text-emerald-400 transition-colors">
                  Programmatic Tax Validators
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Mandatory Statutory Compliance Policies */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-mono uppercase text-[11px] font-semibold tracking-wider">Legal &amp; Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy (DPDP 2023)
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-emerald-400 transition-colors">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-emerald-400 transition-colors">
                  Shipping &amp; Delivery Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Grievance */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-mono uppercase text-[11px] font-semibold tracking-wider">Corporate &amp; Grievance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About EvolveExpert
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Support Desk
                </Link>
              </li>
              <li>
                <span className="text-zinc-500 block">Designated Grievance Officer:</span>
                <span className="text-zinc-300 font-medium">Irfan Khan</span>
              </li>
              <li>
                <span className="text-zinc-500 font-mono text-[10px]">grievance@evolveexpert.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>&copy; {new Date().getFullYear()} EvolveExpert Technologies. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Payments securely tokenized by Razorpay &bull; RBI CoF Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
