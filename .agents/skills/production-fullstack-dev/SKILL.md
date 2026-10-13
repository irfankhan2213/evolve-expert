---
name: production-fullstack-dev
description: "Enterprise Next.js App Router and Node.js architecture with serverless optimizations, API error contracts, canvas downsampling, and type safety."
---

# Production Full-Stack Developer (Enterprise Engineering Standard)

This skill equips the assigned agent (`lead_engineer`) with rigorous software architecture principles for building, scaling, and maintaining high-performance web applications and serverless APIs.

Core Philosophy: **Zero unhandled runtime crashes, strict static typing, deterministic error contracts, and sub-second execution across all serverless endpoints.**

---

## 1. Next.js 16 App Router Architecture

### Partial Prerendering & Cache Components
* Avoid evaluating non-deterministic values (e.g. `new Date()`, random IDs) during component prerendering.
* Use static constants or move dynamic reads into client-side `useEffect` or event handlers to avoid build breakages.
* Leverage Turbopack bundling for sub-second build and reload cycles.

### Serverless Payload Optimization (Canvas Downsampling)
* Vercel and serverless edge functions have strict 4.5MB request payload limits.
* Never upload 20MB raw phone camera photos directly to serverless routes.
* **Protocol**: Downsample large document images in the browser using HTML5 OffscreenCanvas to max dimension 1800px and 85% JPEG/WebP quality before POSTing to `/api/v1/extract`.

---

## 2. API Contract & Resilience Standards

Every backend route must conform to this standard response envelope:

```typescript
// Standard API Envelope
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta: {
    platform: string;
    timestamp: string;
    processing_time_ms?: number;
  };
}
```

* **HTTP Status Code Discipline**:
  * `200 OK`: Request succeeded.
  * `204 No Content`: CORS preflight OPTIONS.
  * `400 Bad Request`: Validation failure (missing fields).
  * `401 / 403`: Authentication failure (invalid API key / secret).
  * `405 Method Not Allowed`: Invalid HTTP verb.
  * `500 Internal Server Error`: Unhandled crash (log stack, return clean JSON).

---

## 3. References & Backend Patterns
Load deep architectural patterns on-demand:
* `references/backend_patterns.md` (Idempotency, CORS headers, rate-limiting)
