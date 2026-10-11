# DocuPulse AI — RapidAPI & Deployment Guide

## 1. Quick Local Test
The application is running locally at **`http://localhost:3000`**.
- Open the browser to see the interactive landing page.
- Test the **Interactive Live Extractor** by dropping an invoice or clicking the instant samples.
- Click **Export CSV/Excel** to verify structured extraction.
- Click **Buy with Razorpay** to test credit purchasing.

---

## 2. Connecting Your Razorpay Account

To enable real UPI / Card payments into your bank account:
1. Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com/).
2. Navigate to **Account & Settings** -> **API Keys**.
3. Generate your **Key ID** and **Key Secret**.
   - Use Test Keys (`rzp_test_...`) during initial testing.
   - Switch to Live Keys (`rzp_live_...`) when you are ready to collect real money.
4. Create `.env.local` in this project directory:
   ```env
   RAZORPAY_KEY_ID=rzp_live_your_actual_key_id
   RAZORPAY_KEY_SECRET=your_actual_key_secret

   # Optional: Google AI Studio key for live Gemini 1.5/2.0 Flash Vision
   GEMINI_API_KEY=
   ```

---

## 3. 1-Click Free Production Deployment (Vercel)

Deploying takes under 3 minutes:
1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete DocuPulse AI MVP with Razorpay and RapidAPI engine"
   git remote add origin https://github.com/your-username/docupulse.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. In the **Environment Variables** section, paste:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `GEMINI_API_KEY` (optional)
5. Click **Deploy**. Vercel will give you a live production URL (e.g. `https://docupulse.vercel.app`).
6. (Optional) Connect a custom domain (e.g. `docupulse.ai` or `docupulse.in`).

---

## 4. Track B: Listing on RapidAPI Marketplace (Passive Developer Income)

RapidAPI has millions of developers looking for utilities. You can start generating metered developer revenue by listing your endpoint:

1. Create a free developer account at [rapidapi.com](https://rapidapi.com).
2. Go to **My APIs** -> **Add New API**.
   - **Name**: DocuPulse AI - Invoice & Document Intelligence
   - **Category**: Finance / Data / Artificial Intelligence
   - **Target URL**: `https://your-domain.vercel.app/api/v1`
3. Add Endpoint:
   - **Method**: `POST`
   - **Path**: `/extract`
   - **Description**: Extracts vendor GSTIN, invoice dates, line items, tax breakdown, and totals from invoices and receipts.
4. Set Up Pricing Plans in RapidAPI Hub:
   - **Basic Tier (Free)**: 50 requests/month (lead magnet)
   - **Pro Tier**: $15/month for 1,000 requests ($0.015/req overage)
   - **Ultra Tier**: $49/month for 5,000 requests
5. RapidAPI handles all developer billing and pays directly to your PayPal or Bank Account!

---

## 5. Traffic & Distribution Engine (Week 1–2)

To start getting paying users without paid ads:
1. **Directories**: Submit to [There's An AI For That](https://theresanaiforthat.com), [Futurepedia](https://futurepedia.io), [Product Hunt](https://producthunt.com), and [AlternativeTo](https://alternativeto.net).
2. **Indian Accountant & Freelance Communities**: Share in Reddit communities (`r/IndiaInvestments`, `r/developersIndia`, `r/freelance`) focusing on the problem: *"Built a tool that extracts GST invoices directly into Excel with 1 click so you don't have to type them manually."*
3. **SEO**: The app is pre-optimized with semantic metadata for invoice parsing, OCR receipt scanner, and GST extraction.
