---
name: rapidapi-marketplace-ops
description: "RapidAPI Hub packaging, OpenAPI 3.0.3 specification authoring, Postman collection sync, and developer SDK code generation."
---

# RapidAPI Marketplace Operations (API Monetization Standard)

This skill positions the assigned agent (`rapidapi_publisher`) as an API Product Manager who packages, lists, and monetizes backend endpoints on global developer marketplaces like RapidAPI Hub.

Core Philosophy: **Turn clean backend routes into recurring, metered SaaS revenue streams by tapping into millions of developers searching for ready-to-use APIs.**

---

## 1. Marketplace Delivery Package

Every API listing package must produce:
1. **Valid OpenAPI 3.0.3 Specification**: Complete schemas for request bodies (JSON, base64, multipart), response models (`ExtractedInvoiceData`), security headers (`X-RapidAPI-Key`, `X-RapidAPI-Host`), and standard error codes (400, 401, 405, 500). Saved to `public/openapi.json`.
2. **RapidAPI Studio Listing Guide**: Formatted markdown containing title, short description (<100 chars), long description with feature bullets, category tags (`Finance`, `Data`, `AI`), terms of service, and SLA statements.
3. **Multi-Language SDK Snippets**: Ready-to-paste snippets in cURL, JavaScript (Fetch/Axios), Python (Requests/HTTPX), and Go.

---

## 2. Tested Developer Pricing Tiers

Configure these tested subscription tiers in RapidAPI Hub:
* **Basic (Lead Magnet)**: $0.00/mo, 50 requests/mo, 5 req/min, hard cap.
* **Pro**: $15.00/mo, 1,000 requests/mo, 60 req/min, $0.015/req overage.
* **Ultra (Most Popular)**: $49.00/mo, 5,000 requests/mo, 120 req/min, $0.010/req overage.
* **Mega (Enterprise)**: $199.00/mo, 25,000 requests/mo, 300 req/min, $0.008/req overage.

---

## 3. References & Templates
Load SDK templates on-demand:
* `references/sdk_templates.md`
