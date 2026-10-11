# DocuPulse AI — Product Hunt Launch Kit 🚀

> **Target Launch Schedule**: Tuesday or Wednesday at 00:01 AM PST (12:31 PM IST / 08:01 AM UTC).  
> **Product URL**: `https://docupulse.ai`  
> **Marketplace Endpoint**: RapidAPI Hub / Next.js REST API  
> **Pricing**: Pay-As-You-Go from ₹249 (~$3.50 USD) • Never-expiring credits • 3 free instant scans without login  

---

## 1. Product Hunt Metadata & Assets

### Product Name
**DocuPulse AI**

### Primary Tagline (Under 60 Characters)
> **Extract messy invoices & receipts into clean Excel in seconds** (58 chars)

#### High-CTR Alternatives:
- *Option B (Developer Focus)*: **Multimodal document OCR API for invoices, receipts & GST** (59 chars)
- *Option C (Finance Focus)*: **Turn PDF invoices into structured Excel, CSV & JSON instantly** (60 chars)
- *Option D (Speed Focus)*: **Sub-second invoice intelligence: drop receipt, get clean Excel** (60 chars)

### Topics / Categories
1. **Artificial Intelligence**
2. **Productivity**
3. **Developer Tools**
4. **Fintech**
5. **SaaS**

---

## 2. Short Pitch & Description

### Short Pitch (Twitter / Card View — under 260 characters)
> Stop manually typing PDF bills into spreadsheets. DocuPulse AI extracts vendor GSTIN, line items, tax breakdowns, and payment terms from messy scans or phone photos into audit-ready Excel and JSON in under 1 second. Try 3 free scans with zero signup.

### Full Product Description (Product Hunt Listing)
Every month, millions of freelancers, accountants, finance teams, and developers waste dozens of hours copying numbers from PDF invoices and paper receipts into Excel and ERP systems. Traditional OCR tools either choke on blurry smartphone photos, fail to parse multi-line tables, or demand enterprise retainers starting at $100/month.

**DocuPulse AI** replaces manual data entry with sub-second multimodal document intelligence:

- 📄 **Universal Parsing**: Handles PDFs, PNGs, JPGs, camera snapshots, crumpled receipts, and tilted scans.
- 🇮🇳 **GSTIN & Tax Compliance**: Specially trained to recognize Indian GST formats (CGST, SGST, IGST) alongside international VAT/sales tax tiers (5%, 12%, 18%, 28%).
- 📊 **Instant CSV & Excel Export**: Download fully formatted spreadsheets with item descriptions, unit prices, quantities, and totals in 1 click.
- ⚡ **Sub-Second Multimodal Vision**: Powered by Gemini 1.5 Flash Vision with resilient schema validation for 99.2% extraction accuracy.
- 🛠️ **Developer API Ready**: Ready-to-use cURL, Node.js, and Python snippets with RapidAPI marketplace compatibility.
- 💳 **Fair Pay-As-You-Go**: No recurring subscription traps. Buy credits via Razorpay (UPI, Credit Cards, International) that never expire.

---

## 3. Maker's First Comment (Launch Day Kickoff)

```markdown
Hey Product Hunt! 👋

I'm the creator of DocuPulse AI. 

Like many of you, every tax season and quarter-end I used to sit with a folder of 80+ PDFs, WhatsApp receipts, and scanned bills, manually typing vendor names, invoice numbers, GSTINs, and line items into Google Sheets. 

I tested traditional OCR libraries and text extraction APIs:
- Traditional OCR (Tesseract / Regex) completely broke whenever an invoice had borderless tables or angled phone photos.
- Enterprise document AI services required long enterprise sales calls, complex bounding-box training, or $100/mo minimum commitments.
- Free tools either stored customer data insecurely or dumped raw unstructured text without line-item math.

So I built **DocuPulse AI** — an end-to-end financial document intelligence engine designed for speed, accuracy, and absolute simplicity.

### How it works under the hood:
1. **Multimodal Vision Engine**: We feed high-resolution document buffers directly into Gemini 1.5 Flash with strict JSON schema enforcement (`temperature: 0.1`). It extracts vendor info, tax IDs (including Indian GSTIN), invoice numbers, dates, payment terms, and individual line items.
2. **Deterministic Validation Layer**: The engine audits math cross-checks: `(Quantity × Unit Price) + Tax = Total Amount`. It flags discrepancies before you export.
3. **1-Click Export**: You get an interactive tabular preview right in your browser, with 1-click download to CSV/Excel or JSON payload copy.
4. **Dual Developer Track**: Aside from the web UI, we exposed a `/api/v1/extract` endpoint that developers can drop into accounting software, ERP connectors, or Zapier workflows via RapidAPI or direct API keys.

### Why no recurring subscriptions?
Most freelancers and small businesses don't need a $49/month recurring commitment. We run on a transparent **pay-as-you-go model**:
- **Starter**: ₹249 (~$3.50 USD) for 50 scans (₹4.98/doc)
- **Pro**: ₹699 (~$9.00 USD) for 250 scans (₹2.79/doc)
- **Enterprise**: ₹1,999 (~$25.00 USD) for 1,000 scans + dedicated API rate limits
All credits **never expire**.

### Special Launch Offer for the PH Community 🎁
You can test the **Live Extractor right now with 3 free scans — no account creation, no credit card required**. Drop an invoice or test our pre-loaded samples!

For today's launch, use code **`PH25`** at checkout or comment below with your use case, and I’ll credit **50 extra scans** directly to your API key!

I’d love your brutal feedback on extraction accuracy, edge cases (different invoice languages, currency formats), and features you'd like to see next (Zoho Books / Tally Prime auto-sync).

Thank you so much for the support! 🚀
```

---

## 4. Media Gallery & Visual Storyboard Assets

### Slide 1: Gallery Hero / Cover (1270 × 760 px)
- **Visual**: Split screen before-and-after.
  - *Left Side (Before)*: A messy, angled smartphone photo of a crumpled dining and SaaS invoice with red manual data entry highlights.
  - *Right Side (After)*: Clean DocuPulse UI displaying crisp tabular data with green checkmarks, vendor GSTIN badge, subtotal, and highlighted "Export to Excel" button.
- **Headline Text**: *"From Messy PDF Receipts to Clean Excel in 1 Second."*
- **Sub-badge**: *"99.2% Accuracy • GST Audited • Zero Retainers"*.

### Slide 2: Interactive Live Extractor & Data Table
- **Visual**: Screenshot of DocuPulse’s Live Extractor interface.
- **Focus**: The line-item breakdown table showing item descriptions, quantity, unit price, tax rate (18%), and exact totals.
- **Callout**: *"Instant line-item extraction with mathematical cross-validation"*.

### Slide 3: Indian GSTIN & Regional Compliance
- **Visual**: Close-up of vendor and customer card showing:
  - Vendor: `CloudScale Technologies Pvt Ltd`
  - GSTIN: `29ABCDE1234F1Z5` [Validated ✅]
  - Payment Terms: `Net 15 Days | UPI / NEFT`
- **Callout**: *"Engineered for Indian GST (CGST/SGST/IGST) and global tax frameworks"*.

### Slide 4: Developer-First API & RapidAPI Hub
- **Visual**: Dark-mode code editor showing 3 lines of cURL, Node.js, and Python code hitting `POST /api/v1/extract`, with RapidAPI badge.
- **Callout**: *"Plug financial document intelligence into any app in 3 minutes"*.

### Slide 5: Fair Pay-As-You-Go Pricing
- **Visual**: The 3 pricing cards (Starter ₹249, Pro ₹699, Enterprise ₹1,999) with Razorpay UPI & Card trust badges.
- **Callout**: *"No recurring monthly traps. Credits that never expire."*

### Product Video Demo Script (30 Seconds Walkthrough)
1. **0:00 - 0:05 (Hook)**: Screen recording of a user dragging a real, skewed invoice PDF into the DocuPulse upload box.
2. **0:06 - 0:15 (Processing & Output)**: Loader spins for 850ms. Boom! Full invoice details appear: Vendor, GSTIN, Invoice Number, line-item table, and tax calculations.
3. **0:16 - 0:22 (Export Action)**: User clicks "Export CSV/Excel". The file downloads and opens instantly in Excel with clean headers.
4. **0:23 - 0:30 (Developer & CTA)**: Brief pan of the Developer API tab and Razorpay 1-click checkout. Overlay: *"Try 3 Free Scans Now at DocuPulse.ai"*.

---

## 5. Product Hunt FAQ (Maker Section)

**Q: Do I need to create an account or enter a credit card to test it?**  
A: No! You can visit [DocuPulse AI](https://docupulse.ai), scroll down to the Live Extractor, and test 3 full document extractions immediately. You can upload your own PDFs/images or use our preloaded enterprise invoice templates.

**Q: How accurate is the extraction on wrinkled receipts or smartphone photos?**  
A: DocuPulse AI utilizes multimodal vision (Google Gemini 1.5 Flash Vision) rather than legacy bounding-box OCR. Because it understands the semantic context of documents, it achieves 99.2% field accuracy even on wrinkled receipts, low-light phone photos, and multi-column invoices.

**Q: Does it support Indian GST and regional tax formats?**  
A: Yes! Unlike Western-centric document parsers, DocuPulse was architected with native support for Indian GSTIN formats, State Codes, and split CGST / SGST / IGST rates (5%, 12%, 18%, 28%). It also supports standard international invoices in USD, EUR, and GBP.

**Q: How do you handle document security and privacy?**  
A: Your financial privacy is paramount. Document payloads are processed in-memory for extraction and are not used for public model training or long-term retention. 

**Q: Can I integrate DocuPulse AI into my own custom software or mobile app?**  
A: Absolutely. Every tier comes with API capability. You can use our endpoints directly via our `/api/v1/extract` REST API using your Razorpay-issued API Key, or subscribe through the **RapidAPI Marketplace** for metered developer billing.

**Q: What payment methods do you support?**  
A: We use Razorpay to support UPI (Google Pay, PhonePe, Paytm, BHIM), Indian Netbanking, RuPay, and all major international credit/debit cards (Visa, Mastercard, American Express).

---

## 6. Launch Day Hour-by-Hour Execution Checklist

| Time (PST) | Time (IST) | Action Item |
|---|---|---|
| **T - 24 Hours** | T - 24 Hours | Final smoke test on production (`/api/v1/extract`, Razorpay live test transaction, CSV download). Prepare preview assets and hunter links. |
| **00:01 AM PST** | 12:31 PM IST | **Launch goes LIVE**. Publish Product Hunt post. Post Maker First Comment immediately. |
| **00:15 AM PST** | 12:45 PM IST | Share PH link with VIP supporters, inner-circle founders, and early beta testers via WhatsApp & Slack (requesting honest feedback). |
| **00:30 AM PST** | 01:00 PM IST | Publish Twitter/X Launch Thread (see `marketing/x_twitter_thread.md`). |
| **01:30 AM PST** | 02:00 PM IST | Publish Show HN on Hacker News (see `marketing/show_hn_launch.md`). |
| **03:00 AM PST** | 03:30 PM IST | Publish value-driven post to `r/SideProject` and `r/developersIndia` (see `marketing/reddit_distribution.md`). |
| **06:00 AM PST** | 06:30 PM IST | First milestone check-in. Reply to every Product Hunt comment within 10 minutes. Mention specific developer details. |
| **10:00 AM PST** | 10:30 PM IST | Post midday traction update on X / LinkedIn showing live scan counter and CSV export stats. |
| **04:00 PM PST** | 04:30 AM IST (Next Day) | Evening push in US/EU time zones. Follow up on unanswered feedback and directory submissions. |
| **11:59 PM PST** | 12:29 PM IST (Next Day) | Launch day concludes. Post wrap-up thank you note on PH and archive customer feature requests. |

---

## 7. Hunter Outreach Template (If Partnering with a Hunter)

**Subject**: Hunter pitch: DocuPulse AI — Sub-second invoice & receipt OCR for messy bills

```text
Hi [Hunter Name],

Huge fan of your launches on Product Hunt (loved your work on [Previous Product]).

I built DocuPulse AI (https://docupulse.ai) to solve a nightmare every freelancer, accountant, and dev faces: spending hours manually typing paper receipts and PDF invoices into Excel.

Instead of rigid $100/mo enterprise OCR platforms, DocuPulse uses multimodal Gemini 1.5 Flash Vision to parse any invoice (including phone photos and Indian GSTIN formats) into clean Excel and JSON in sub-850ms, with transparent pay-as-you-go credits starting at just ₹249 (~$3.50).

Would you be open to hunting us this [Launch Date]? I've prepared all graphic assets, maker comments, and a live demo with 3 free scans (zero signup required).

Let me know and I'll send over the hunter invite link!

Best,
[Your Name]
Founder, DocuPulse AI
```
