# Playbook 03: The 7-Day Sprint Delivery Standard Operating Procedure (SOP)

> **Objective:** Deliver production-ready Next.js 16 web platforms and WhatsApp AI systems in exactly 7 days without delays, scope creep, or unpaid hours.

---

## The 7-Day Sprint Milestones

```
┌──────────┬─────────────────────────────────────────────────────────────────┐
│ Day 0    │ 50% Escrow Deposit received + Private Notion Sprint Hub onboard │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Day 1    │ Architecture & Conversion Funnel Wireframing                    │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Day 2    │ Swiss Editorial UI Design in Figma + Conversion Copy Polish     │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Day 3–4  │ Next.js 16 App Router Engineering + 40% Mid-Sprint Review       │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Day 5–6  │ WhatsApp Cloud API Setup + 24/7 AI Concierge + Webhooks         │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Day 7    │ 98+ Google PageSpeed Audit + Domain Cutover + 10% Handover      │
└──────────┴─────────────────────────────────────────────────────────────────┘
```

---

## Daily Operational Execution Guide

### Day 0: Onboarding & Escrow Deposit (Before Kickoff)
1. Verify 50% reservation deposit cleared via Razorpay / Stripe / Wire.
2. Duplicate the **EvolveExpert Notion Client Portal** template.
3. Share the private portal with the client: invite their team and share a 2-minute Loom walkthrough.
4. Collect brand assets via Notion intake form: high-res logo (SVG/PNG), brand colors, product catalog or service price list, and domain DNS access (Cloudflare / GoDaddy).

### Day 1: Architecture & Wireframing
1. Map out the 3–5 core conversion funnels (Hero, Social Proof, Capabilities/Catalog, ROI/Comparison, Lead Capture CTA).
2. Write the information architecture and conversion copy wireframes.
3. Record a 90-second Loom for the client at 5:00 PM: *"Here is our approved wireframe structure; moving to Figma UI tomorrow morning."*

### Day 2: Figma Editorial UI & Copywriting
1. Design high-fidelity responsive screens in Figma using EvolveExpert's 32px audit grid and tactile Swiss styling.
2. Ensure contrast ratios meet WCAG 2.2 AA standards.
3. Optimize copy headline formulas: Problem -> Concrete Mechanism -> Sub-second Speed -> Clear Risk-Free CTA.
4. Record Loom update. Client has 24 hours to provide feedback on Figma before code begins.

### Day 3–4: Next.js 16 App Router Engineering
1. Scaffold clean Next.js 16 project with Tailwind CSS, TypeScript, and Lucide icons.
2. Build responsive components with Framer Motion spring physics.
3. Enforce asset optimization: all images WebP/AVIF with strict dimensions, zero layout shift (CLS 0.00).
4. Deploy to Vercel staging preview (`[client]-staging.evolveexpert.com`).
5. **Milestone Gate (End of Day 4):** Client reviews live staging URL and releases the **40% mid-sprint milestone payment**.

### Day 5–6: WhatsApp Cloud API & AI Concierge Integration
1. Configure official Meta WhatsApp Cloud API via approved BSP (or direct Cloud API).
2. Ingest client PDFs, FAQs, and price lists into the AI knowledge base.
3. Program the 3 core intents:
   * **Intent A (Inbound Greeting & FAQ):** Answers questions in natural Hinglish/English within 3 seconds.
   * **Intent B (Lead Qualification):** Collects budget, location, and requirement, then pings team via webhook.
   * **Intent C (Order / Service Status):** Looks up customer email or order ID from Shopify or Tally ERP.
4. Test human handoff trigger: if customer types *"agent"*, *"talk to human"*, or asks an unlisted question twice, the chat routes immediately to the team's shared WhatsApp Business app.

### Day 7: 98+ PageSpeed Verification & Production Cutover
1. Run audit on [pagespeed.web.dev](https://pagespeed.web.dev): guarantee **98+ Performance, 100 SEO, 100 Best Practices**.
2. Update DNS records (CNAME and A records) to point custom domain to Vercel/Cloudflare Edge.
3. Transfer GitHub repository ownership and invite client to Vercel team.
4. Deliver the **Loom Video Training Vault**: 3 short 2-minute videos showing how to edit copy, view leads, and adjust AI prompt instructions.
5. Client releases final **10% satisfaction milestone payment**.
6. Present the **₹10,000/mo ($200/mo) AI & API Maintenance Retainer** offer to ensure ongoing prompt tuning and webhook reliability.
