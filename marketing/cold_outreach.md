# DocuPulse AI — High-Converting B2B Cold Outreach Playbook 🎯

> **Target Segments**:  
> 1. **Chartered Accountants (CAs) & Accounting Firms** (GST invoice entry & bookkeeping backlog)  
> 2. **Digital Agencies & Freelance Studios** (Quarterly expense logging & client billing)  
> 3. **CTOs & Lead Developers at B2B SaaS Startups** (Building expense management or accounting sync features)  
>
> **Sending Best Practices**: Personalized first line, under 120 words, low friction CTA (never ask for a 30-min call on email 1).

---

## Sequence 1: Chartered Accountants & Accounting Firms (GST & Bookkeeping)

### Email 1: The Pain Point & Quick Win (Day 1)
**Subject**: Quick question regarding GST invoice data entry at [Firm Name]

```text
Hi [First Name],

I noticed [Firm Name] handles tax filing and bookkeeping for growing businesses in [City].

Most CAs we speak with tell us that during quarter-end, their junior staff spends 15+ hours a week manually typing vendor GSTINs, invoice numbers, and line items from WhatsApp photos and messy PDFs into Tally or Excel.

We built DocuPulse AI (https://docupulse.ai) to eliminate that manual entry:
- Drag-and-drop any PDF bill or phone photo.
- In ~850ms, it extracts vendor GSTIN, CGST/SGST/IGST splits, and itemized rows.
- Click once to export a clean, audit-ready Excel spreadsheet.

You can test 3 invoices free directly on the live demo without creating an account: https://docupulse.ai/#demo

Would it be helpful if I sent over a 60-second video showing how it converts a crumpled GST invoice into Excel?

Best,
[Your Name]  
DocuPulse AI
```

### Email 2: The Follow-Up + Social Proof (Day 4)
**Subject**: Re: Quick question regarding GST invoice data entry at [Firm Name]

```text
Hi [First Name],

Following up on my note from Tuesday.

One of our early accounting testers recently processed an 80-invoice backlog in under 15 minutes that used to take their junior associate half a day.

Unlike traditional OCR tools that choke on phone photos or borderless tables, DocuPulse was specifically trained on Indian GSTIN state codes and split tax rates (5%, 12%, 18%, 28%).

No monthly software retainers either — credits start at ₹249 for 50 documents and never expire.

Did you get a chance to test a bill on https://docupulse.ai/#demo?

Best,
[Your Name]
```

### Email 3: The Breakup / Direct Value Offer (Day 8)
**Subject**: Closing the loop / 50 free credits for [Firm Name]

```text
Hi [First Name],

I know how busy tax filing season gets, so I won't crowd your inbox.

If manual receipt typing isn’t a bottleneck for your team right now, completely understand. 

If you ever want to test it during your next heavy client audit, I’d be happy to load 50 complimentary scans onto your account. Just reply "TRY" and I'll send over the access key.

Wishing you and [Firm Name] a productive quarter!

Best,
[Your Name]
```

---

## Sequence 2: Digital Agencies & Freelance Studios (Expense Tracking)

### Email 1: Cutting Expense Reconciliation Time (Day 1)
**Subject**: Slashing [Company Name]'s expense logging time by 90%

```text
Hi [First Name],

Running a busy agency means you've probably got software receipts (Figma, AWS, Cursor, Slack) and client dining bills scattered across email threads and credit card statements.

Instead of manually typing those into a spreadsheet every month, we built a sub-second tool that does it automatically:

👉 DocuPulse AI (https://docupulse.ai)

Just drag and drop the PDFs or photo receipts: it extracts the vendor, date, line items, and tax breakdown into a clean CSV in 850ms.

No $50/mo subscription — pay-as-you-go packs start at ~$3.50 (₹249) for 50 scans.

Try 3 scans free (no login needed) at https://docupulse.ai/#demo

Worth a quick look before your next bookkeeping cycle?

Best,
[Your Name]
```

### Email 2: Follow-up (Day 5)
**Subject**: Quick demo: Turning [Company Name]'s receipts into Excel

```text
Hi [First Name],

Quick follow-up — here is a 20-second GIF showing how DocuPulse extracts a full SaaS invoice into Excel with line-item tax details: [Link to Demo GIF]

Are you currently using dedicated expense software, or still managing receipts through spreadsheets?

Best,
[Your Name]
```

---

## Sequence 3: B2B SaaS Founders & CTOs (Developer API Track)

### Email 1: 3-Line Document Intelligence API (Day 1)
**Subject**: Document OCR API without the AWS Textract headache for [Product Name]

```text
Hi [First Name],

Saw what you're building at [Product Name] — really impressed by your product execution.

If you’re parsing invoices, receipts, or bills inside your platform, you’ve likely looked at AWS Textract or Google Cloud Document AI: heavy bounding boxes, async polling, and high per-page costs.

We exposed DocuPulse AI as a sub-second REST API (`POST /api/v1/extract`):
- Built on Gemini 1.5 Flash Vision in strict JSON schema mode.
- Returns vendor GSTIN, invoice #, line items, and math-validated totals in < 850ms.
- 3 lines of code in Node.js or Python.
- Metered via RapidAPI or direct API keys with zero monthly minimums.

Check the live API docs & interactive demo: https://docupulse.ai/#developer-api

Open to trying a few test payloads on our staging endpoint?

Best,
[Your Name]  
Founder, DocuPulse AI
```

### Email 2: Follow-up with Code Snippet (Day 4)
**Subject**: Re: Document OCR API without the AWS Textract headache for [Product Name]

```text
Hi [First Name],

Thought this might save your team an afternoon of prototyping:

```bash
curl -X POST https://docupulse.ai/api/v1/extract \
  -H "Content-Type: application/json" \
  -d '{"image": "data:image/png;base64,..."}'
```

Returns clean, validated JSON with 99.2% key field accuracy and sub-second latency.

Happy to provide a sandbox key with 500 free calls if you'd like to benchmark it against your current parser. Let me know!

Best,
[Your Name]
```
