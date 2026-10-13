# Production Backend Patterns

## Pattern 1: Idempotency Keys for Financial Operations
Prevent double charging when network hiccups occur:
- Clients send `Idempotency-Key: uuid` header with payment requests.
- Store key with order ID in Redis or in-memory LRU cache with 24h TTL.
- If repeated, return cached order response rather than creating a duplicate Razorpay order.

## Pattern 2: Global CORS Preflight Handling
Enable public RapidAPI and developer access without CORS errors:
```typescript
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-RapidAPI-Key, X-RapidAPI-Host, X-RapidAPI-Proxy-Secret',
    },
  });
}
```

## Pattern 3: Dual-Mode Provider Routing
Support multi-cloud inference (Azure AI Document Intelligence, Azure OpenAI, Google Gemini Flash) with deterministic fallback to simulated testing OCR to guarantee 100% uptime regardless of 3rd-party outage.
