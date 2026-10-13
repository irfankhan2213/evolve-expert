# B2B Cold Outreach Cadence & Sequence Toolkit: EvolveExpert

> **Target Audience:** Controllers, VPs of Finance, Accounting Ops Leads, and Managing Partners at regional CPA / Chartered Accountant firms.  
> **Value Proposition:** Cut invoice processing time from 14 hours/week to 45 minutes with 100% deterministic tax checksum verification.

---

## 1. Outreach Configuration & Deliverability Setup

* **Sending Volume:** 35–40 emails per day per inbox.
* **Warmup Protocol:** 14-day automated warmup before campaign launch.
* **DNS Records:** SPF, DKIM (2048-bit), DMARC (`p=quarantine`) configured on dedicated secondary domain.
* **Format:** Plain text (no heavy HTML tables, no generic tracking pixels).

---

## 2. The 4-Touch Outbound Sequence

### Touch 1 (Day 0) — Problem-First Observation (~85 words)
* **Subject:** `manual invoice reconciliation at {{company_name}}`
```text
Hi {{first_name}},

Noticed your finance team has been scaling operations recently over at {{company_name}}.

Usually, that means month-end closing starts stretching past day 7 because senior staff are manually keying client invoices and verifying tax numbers across spreadsheets.

We built a lightweight document engine that parses vendor invoices and validates GST/VAT checksums in 800ms directly into clean Excel.

Would you be open to a 2-minute look, or should I drop a quick 1-pager over email?

Best,
Irfan Khan
Founder, EvolveExpert
evolveexpert.com
```

### Touch 2 (Day 3) — Value Add & Interactive Sandbox (Threaded)
* **Subject:** `Re: manual invoice reconciliation at {{company_name}}`
```text
Hi {{first_name}},

Following up with a quick 1-click comparison between manual invoice data entry vs automated extraction for standard vendor bills:

Here is our live sandbox (no sign-up or credit card required): 
https://evolveexpert.com/#playground

Worth testing with a sample bill next Tuesday?

Best,
Irfan
```

### Touch 3 (Day 7) — Quantifiable Metric & Peer Case (Threaded)
* **Subject:** `Re: manual invoice reconciliation at {{company_name}}`
```text
Hi {{first_name}},

For context, accounting teams using our automated extraction cut their receipt-processing time from ~14 hours/week down to 45 minutes, with zero keystroke errors on tax numbers.

Happy to set up 100 free test runs for your team if this is an active focus this quarter.

Best,
Irfan
```

### Touch 4 (Day 14) — The Polite Break-up (Highest response rate)
* **Subject:** `Re: manual invoice reconciliation at {{company_name}}`
```text
Hi {{first_name}},

Assuming automating your invoice data entry and tax validation pipeline isn't a priority right now.

I'll step back and won't follow up again. If things change down the line, our door is always open.

Best,
Irfan Khan
evolveexpert.com
```
