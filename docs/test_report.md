# DocuPulse AI — End-to-End (E2E) Test & Validation Report

**Test Execution Date:** 2026-10-11  
**Target Environment:** Local Production Build (`http://localhost:3000`)  
**Runtime:** Node.js v22.16.0 | Next.js v16.4.0 | Darwin arm64 (macOS)  
**Test Harness:** `scripts/test_e2e.sh`  
**Overall Status:** **100% PASSED (22 / 22 Tests Passed)**

---

## 1. Executive Summary

A comprehensive automated End-to-End (E2E) test suite was executed against the running **DocuPulse AI** server instance. The test suite thoroughly verified:
1. **Static Type Safety:** Next.js / TypeScript compiler verification with zero type discrepancies (`npx tsc --noEmit`).
2. **Extraction Engine (`/api/v1/extract`):** Method filtering, CORS preflight handling, JSON document hints (`receipt`, `bill`, `invoice`), Base64 image payloads, `multipart/form-data` uploads, RapidAPI marketplace header simulation (`x-rapidapi-key`, `x-rapidapi-user`), empty body error trapping, and latency benchmarking.
3. **Razorpay Payment Gateway (`/api/razorpay/create-order`):** Order initiation for multiple pricing tiers (Pro, Enterprise), currency conversion to paise, missing parameter validation, and empty body handling.
4. **Payment Signature Verification (`/api/razorpay/verify-payment`):** Simulated demo mode credential and credit allocation, incomplete parameter rejection, and cryptographic HMAC-SHA256 signature mismatch rejection.
5. **System Resource Footprint:** Memory usage (RSS) profiling and root application load time benchmark.

```
==============================================================================
  DOCUPULSE AI — TEST EXECUTION SUMMARY
==============================================================================
  Total Tests Run:    22
  Passed:             22 (100.0%)
  Failed:             0 (0.0%)
  Execution Time:     11 seconds
  Verdict:            PRODUCTION READY / ALL GATES PASSED
==============================================================================
```

---

## 2. Test Suite Breakdown

### Suite 1: Static Typecheck Verification

| Test ID | Test Case | Target / Command | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | TypeScript Compiler Check | `npx tsc --noEmit` | Exit code 0, 0 type errors | Exit code 0, zero errors | **PASS** |

---

### Suite 2: Document Extraction API (`/api/v1/extract`)

| Test ID | Test Case | HTTP Method & Payload | Expected Result | Actual Result | Latency | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-02** | HTTP Method Discipline | `GET /api/v1/extract` | HTTP 405 Method Not Allowed | HTTP 405 Method Not Allowed | 1.1ms | **PASS** |
| **TC-03** | CORS Preflight Check | `OPTIONS /api/v1/extract` | HTTP 204 No Content, Origin: `*` | HTTP 204, Access-Control-Allow-Origin: `*` | 1.2ms | **PASS** |
| **TC-04** | JSON Extraction (Receipt Hint) | `POST` `{"documentTypeHint": "receipt"}` | HTTP 200, DocType `receipt`, Vendor & Total | HTTP 200, `document_type: "receipt"`, Total: 35400 | 854.1ms | **PASS** |
| **TC-05** | JSON Extraction (Bill Hint) | `POST` `{"documentTypeHint": "bill"}` | HTTP 200, DocType `bill` | HTTP 200, `document_type: "bill"` | 852.8ms | **PASS** |
| **TC-06** | JSON Base64 Image Extraction | `POST` with `image: "data:image/png;base64,..."` | HTTP 200, Extracted Line Items | HTTP 200, Line items parsed (>0 items) | 853.2ms | **PASS** |
| **TC-07** | Multipart File Upload | `POST` `multipart/form-data` with attached file | HTTP 200, DocType `purchase_order` | HTTP 200, `document_type: "purchase_order"` | 853.0ms | **PASS** |
| **TC-08** | RapidAPI Authentication Headers | `POST` with `x-rapidapi-key`, `x-rapidapi-user` | HTTP 200, `meta.platform == "RapidAPI"` | HTTP 200, `meta.platform: "RapidAPI"` | 852.9ms | **PASS** |
| **TC-09** | Empty Body Error Trapping | `POST` with empty body (`""`) | `success: false`, handled error | HTTP 500/handled, `error: "Unexpected end of JSON input"` | 1.3ms | **PASS** |
| **TC-10** | Latency Benchmark (5 iterations) | `POST` Extraction endpoint | Consistent latency <= 1000ms | **Avg: 854.1ms** (Min: 852.7ms, Max: 855.6ms) | 854.1ms avg | **PASS** |

---

### Suite 3: Razorpay Payment Gateway — Order Creation (`/api/razorpay/create-order`)

| Test ID | Test Case | Payload | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-11** | Pro Plan Order Initiation | `{"planId": "pro", "amountInInr": 499}` | HTTP 200, `orderId` prefixed `order_`, 49900 paise | HTTP 200, `amount: 49900`, `currency: INR` | **PASS** |
| **TC-12** | Enterprise Order Initiation | `{"planId": "enterprise", "amountInInr": 1999}` | HTTP 200, `amount: 199900` paise | HTTP 200, `amount: 199900` paise | **PASS** |
| **TC-13** | Missing Amount Validation | `{"planId": "pro"}` | HTTP 400 Bad Request, Error message | HTTP 400, `error: "Missing planId or amount"` | **PASS** |
| **TC-14** | Missing Plan ID Validation | `{"amountInInr": 499}` | HTTP 400 Bad Request, Error message | HTTP 400, `error: "Missing planId or amount"` | **PASS** |
| **TC-15** | Empty Body Error Trapping | `POST` with empty body (`""`) | Handled error response | HTTP 500/handled, `error` returned | **PASS** |

---

### Suite 4: Razorpay Payment Gateway — Verification (`/api/razorpay/verify-payment`)

| Test ID | Test Case | Payload | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-16** | Demo Verification (Pro Plan) | `{"isDemoMode": true, "planId": "pro"}` | HTTP 200, 250 credits, API key generated | HTTP 200, `creditsAdded: 250`, key: `dp_live_*` | **PASS** |
| **TC-17** | Demo Verification (Enterprise) | `{"isDemoMode": true, "planId": "enterprise"}` | HTTP 200, 1000 credits allocated | HTTP 200, `creditsAdded: 1000` | **PASS** |
| **TC-18** | Demo Verification (Starter) | `{"isDemoMode": true, "planId": "starter"}` | HTTP 200, 50 credits allocated | HTTP 200, `creditsAdded: 50` | **PASS** |
| **TC-19** | Missing Signature / Incomplete | `{"razorpay_order_id": "order_test_123"}` | HTTP 400 Bad Request | HTTP 400, `error: "Incomplete payment parameters"` | **PASS** |
| **TC-20** | Invalid Signature Detection | `{"razorpay_order_id": "...", "signature": "bad"}` | HTTP 400 Bad Request, Signature rejected | HTTP 400, `error: "Invalid payment signature..."` | **PASS** |

---

### Suite 5: System Health, Memory Footprint & Resource Metrics

| Test ID | Test Case | Measurement | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-21** | Web Application Root (`GET /`) | Response status & load latency | HTTP 200 OK, latency < 50ms | HTTP 200 OK, **1.06ms** | **PASS** |
| **TC-22** | Server Resident Memory (RSS) | Next.js Server PID memory consumption | RSS < 250 MB | **72.56 MB** | **PASS** |

---

## 3. Performance & Benchmark Summary

- **Root Page Latency:** `1.06 ms`
- **Order Creation API Latency:** `1.47 ms`
- **Payment Verification API Latency:** `1.22 ms`
- **OCR Document Extraction Latency:**
  - Cycle 1: `854.0 ms`
  - Cycle 2: `852.7 ms`
  - Cycle 3: `855.6 ms`
  - Cycle 4: `854.2 ms`
  - Cycle 5: `853.8 ms`
  - **Average Latency:** `854.1 ms`
- **Process Memory (RSS):** `72.56 MB` (Extremely lightweight footprint for a full-stack Next.js 16 app router server).

---

## 4. How to Reproduce / Run Tests

The test harness script is committed and available at `scripts/test_e2e.sh`.

```bash
# Run against local server (default http://localhost:3000)
./scripts/test_e2e.sh

# Run against a custom deployment or staging environment
./scripts/test_e2e.sh https://staging.docupulse.ai
```
