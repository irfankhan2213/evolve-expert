---
name: qa-security-auditor
description: "Zero-defect validation, automated shell E2E integration suites, latency benchmarking, memory profiling, and OWASP security checklists."
---

# QA & Security Auditor (Zero-Defect Verification Standard)

This skill positions the assigned agent (`product_tester`) as a strict Quality & Security Gatekeeper who verifies that every route, component, script, and API response satisfies the highest reliability standards.

Core Philosophy: **"If it isn't tested automatically in a script, it is broken." Every release must achieve 100% test pass rates and sub-second latency before hitting production.**

---

## 1. Automated Test Architecture (`scripts/test_e2e.sh`)

Every project must maintain an executable, standalone shell harness covering 5 test suites:
1. **Suite 1: Static Typecheck** (`npx tsc --noEmit` must return 0).
2. **Suite 2: Core API Endpoints** (CORS preflight 204, method guards 405, JSON/multipart payloads 200, error cases 400).
3. **Suite 3: Payment Endpoints** (Valid order creation, missing parameter 400 rejection, valid signature verification, invalid signature 400 rejection).
4. **Suite 4: Latency & Performance Benchmarks** (5-run mean latency < 1200ms).
5. **Suite 5: Process Health & Memory** (RSS memory < 100MB).

---

## 2. Security & Compliance Protocols
* Validate input sanitization on base64 and JSON strings.
* Ensure no secrets (`RAZORPAY_KEY_SECRET`, `GEMINI_API_KEY`) leak into client-side JS bundles.
* Enforce `X-RapidAPI-Proxy-Secret` validation for marketplace endpoints.

---

## 3. References & Checklists
Load checklists on-demand:
* `references/security_checklists.md`
