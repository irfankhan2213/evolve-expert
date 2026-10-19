# Playbook 04: WhatsApp Cloud API & Meta Compliance Guide (2026)

> **Objective:** Set up official Meta WhatsApp Business API numbers, pass template approvals with zero rejections, and maximize the free 24-hour service window.

---

## 1. Meta Pricing Mechanics in 2026 (Why Architecture Matters)

Since Meta retired On-Premise APIs and replaced conversation-based pricing with **per-template-message billing** on 1 July 2025, message costs in India are strictly categorized:
* **Marketing Templates:** ~₹0.88 per delivered message. (Promotional offers, discount blasts, abandoned cart alerts).
* **Utility Templates:** ~₹0.13 per delivered message. (Order confirmations, shipping updates, appointment reminders).
* **Authentication Templates:** ~₹0.13 per delivered message. (OTP codes).
* **Service Messages (The Golden Window):** **₹0.00 (100% FREE)** inside the 24-hour customer service window.

### The Profit Strategy for Clients:
When a customer clicks a "WhatsApp Us" button on the website, or responds to an Instagram ad (Click-to-WhatsApp), a **24-hour service window opens**. Inside this window, your AI agent can exchange **unlimited freeform messages, answer 50 questions, and qualify the lead at ₹0 cost to the business**.

---

## 2. Preventing Meta Template Rejections (The 30–50% Failure Trap)

First-time agencies fail because Meta's automated compliance bots reject promotional templates. Follow these rules:

1. **Never Use Deceptive Merge Tags:** Do not write `"Hi {{1}}, you won a free {{2}}!"` Meta flags variable merge tags that can contain spam. Always use clear labels: `"Hi {{customer_name}}, your order #{{order_id}} is ready."`
2. **Include Clear Opt-Out Language:** Every marketing template must end with an unsubscribe option: `"Reply STOP to unsubscribe."`
3. **Select the Right Category:** Never submit a promotional coupon code as a "Utility" template to save money. Meta's AI reclassifies it, charges a penalty fee, and lowers your phone number's quality rating.
4. **Pre-Approved Starter Template Pack:** Always submit 5 core utility templates during Day 1 onboarding so they are approved before Day 5.

---

## 3. The 3-Tier Technical WhatsApp Architecture

```
User Texts Number (WhatsApp)
           │
           ▼
Meta WhatsApp Cloud API (Webhook)
           │
           ▼
EvolveExpert Router (Edge Route / n8n / Next.js API)
           │
 ┌─────────┴─────────┐
 ▼                   ▼
Inside 24h Window?   Outside 24h Window?
(FREE Service Chat)  (Send Approved Utility Template @ ₹0.13)
 │
 ├── 1. Knowledge Base Search (Client PDFs / Price Lists)
 ├── 2. Lead Qualification (Name, Budget, Timeline)
 ├── 3. System Lookup (Shopify Order / Tally ERP Webhook)
 └── 4. Human Handoff (If Sentiment is Angry or Unresolved)
```

---

## 4. Onboarding Checklist for Client WhatsApp Numbers

- [ ] Client provides a dedicated, fresh phone number (not linked to an active personal WhatsApp app).
- [ ] Connect phone number to Meta Business Manager and verify business legal name.
- [ ] Set up WhatsApp Business Display Name matching business registration.
- [ ] Submit 5 core message templates:
  - `appointment_confirmation` (Utility)
  - `order_tracking_update` (Utility)
  - `lead_inquiry_received` (Utility)
  - `abandoned_cart_reminder` (Marketing)
  - `welcome_consultation_offer` (Marketing)
- [ ] Configure Webhook endpoint on client's Next.js backend with HMAC verification.
- [ ] Test Hinglish and English natural language intents with 25 test prompts.
