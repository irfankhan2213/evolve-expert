---
name: e2e-testing
description: Automated test-driven verification, smoke testing, payment webhook simulation, API contract testing, and performance benchmarking for digital products.
---

# End-to-End Product & Payment Validation

This skill ensures zero-breakage deployments by running automated integration tests across:

## Core Test Suites

### 1. Document Extraction Test
- Verifies `/api/v1/extract` handles JSON payloads, Multipart file uploads, base64 strings, and edge cases (missing vendor, multiple currencies).
- Validates sub-second latency (< 1200ms) and response schema compliance.

### 2. Payment Flow Test
- Simulates Razorpay order creation (`/api/razorpay/create-order`).
- Validates HMAC SHA256 signature verification (`/api/razorpay/verify-payment`).
- Validates credit assignment and API key generation.

### 3. Build & Health Audit
- Automated Next.js static build check (`npm run build`).
- TypeScript compiler zero-error audit (`npx tsc --noEmit`).
