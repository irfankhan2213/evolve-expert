---
name: fintech-revenue-ops
description: "Enterprise billing operations, Razorpay and Stripe dual-mode checkout, webhook signature verification, credit ledgers, and pricing psychology."
---

# Fintech & Revenue Operations (Billing & Cashflow Standard)

This skill equips the assigned agent (`revenue_ops`) with production-grade payment architecture, security protocols, and conversion-optimized checkout UX across Razorpay and Stripe.

Core Philosophy: **Zero payment drops, bank-grade HMAC signature verification, instant credit assignment, and micro-pricing packages that maximize conversion impulse.**

---

## 1. Dual-Mode Payment Architecture

### Operational Modes
1. **Production Mode**: Active when `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are present. Interacts with `https://api.razorpay.com/v1/orders`.
2. **Demo / Sandbox Fallback**: Active when keys are pending. Creates simulated orders (`order_demo_*`) and test credit grants, allowing frictionless UI testing and smoke tests without failing.

### Signature Verification Security Gate
* **Algorithm**: HMAC SHA-256
* **Formula**: `hmac_sha256(order_id + "|" + payment_id, key_secret)`
* Never trust client-reported payment status without verifying the cryptographic signature on the server!

---

## 2. Credit Allocation Ledger

* When a payment verifies successfully:
  * Starter (₹249 / $3.5): +50 Document Credits
  * Pro (₹699 / $9.0): +250 Document Credits + Developer API Key
  * Enterprise (₹1,999 / $25): +1,000 Document Credits + High-Rate-Limit API Key
* Credits must never expire.

---

## 3. References & Pricing Psychology
Load pricing models on-demand:
* `references/pricing_psychology.md`
