# OWASP Security & Hardening Checklist

Verify before deploying:

1. **Secret Leakage Prevention**:
   - Check that `NEXT_PUBLIC_` prefix is ONLY applied to client-safe keys (like Razorpay Key ID, never Key Secret).
   - Verify `.env.local` is present in `.gitignore`.

2. **CORS Injection Defense**:
   - Ensure `Access-Control-Allow-Origin` allows appropriate origins while rejecting untrusted mutating endpoints.

3. **Denial of Service (Payload Size)**:
   - Enforce 4.5MB request payload body parser limits on file uploads to protect serverless instances from memory exhaustion.

4. **Cryptographic Validation**:
   - Verify all payment webhooks and signatures use constant-time comparison or HMAC SHA-256 validation to prevent timing attacks.
