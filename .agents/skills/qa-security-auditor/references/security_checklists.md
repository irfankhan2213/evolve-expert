# OWASP API Security Top 10 (2023/2024) Verification Checklist

| OWASP Risk ID | Vulnerability Name | Automated Test Assertion Pattern | Production Remediation Standard |
| :--- | :--- | :--- | :--- |
| **API1:2023** | Broken Object Level Authorization (BOLA) | Curl with User B's token accessing User A's ID must return `403` or `404`. | Query must filter by `tenant_id` & `user_id` in Data Access Layer. |
| **API2:2023** | Broken Authentication | Requests lacking `Authorization` or `X-RapidAPI-Key` return `401`. | Short-lived JWTs, rotating API keys, constant-time proxy secret checks. |
| **API3:2023** | Broken Object Property Level Auth (BOPLA) | Send unauthorized extra JSON fields; assert they are discarded. | Zod schema validation with `.strict()` mode; return explicit DTO projections. |
| **API4:2023** | Unrestricted Resource Consumption | Send >4.5MB payload -> assert `413`; burst 100 requests -> assert `429`. | 4.5MB body limit, Upstash Redis rate limiting, streaming decoders. |
| **API5:2023** | Broken Function Level Authorization (BFLA) | Standard user token accessing administrative routes must return `403`. | Role-Based Access Control (RBAC) middleware verifying `user.role === 'ADMIN'`. |
| **API6:2023** | Unrestricted Access to Sensitive Flows | Hammering verification endpoint without captcha/order ID returns `400`. | Credit ledger checks prior to OCR execution; idempotency keys. |
| **API7:2023** | Server Side Request Forgery (SSRF) | Supplying `image_url` pointing to `169.254.169.254` returns `400 Bad Request`. | Whitelist public HTTP/HTTPS URLs; block private IP ranges (RFC 1918, RFC 3927). |
| **API8:2023** | Security Misconfiguration | Send malformed payload; verify body contains NO `stack` or file paths. | Strict generic error envelopes; disallow `Access-Control-Allow-Origin: *` on session routes. |
| **API9:2023** | Improper Inventory Management | Deprecated `/api/v0/*` endpoints exposed -> assert `410 Gone`. | OpenAPI contract synchronization; automated API gateway route registry. |
| **API10:2023** | Unsafe Consumption of APIs | Send forged signature to `/api/razorpay/verify-payment`; assert `400`. | Constant-time HMAC-SHA256 signature verification; payload schema validation. |
