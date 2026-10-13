#!/usr/bin/env bash
set -e

echo "=========================================================="
echo "  EvolveExpert Automated E2E & Compliance Test Suite"
echo "=========================================================="

PORT=${PORT:-3000}
BASE_URL="http://localhost:${PORT}"
PASS_COUNT=0
FAIL_COUNT=0

assert_eq() {
  local label="$1"
  local expected="$2"
  local actual="$3"
  if [ "$expected" = "$actual" ]; then
    echo "  [PASS] $label (Value: $actual)"
    PASS_COUNT=$((PASS_COUNT + 1))
  else
    echo "  [FAIL] $label (Expected: '$expected', Got: '$actual')"
    FAIL_COUNT=$((FAIL_COUNT + 1))
  fi
}

assert_http_200() {
  local route="$1"
  local status
  status=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${route}" || echo "000")
  if [ "$status" = "200" ]; then
    echo "  [PASS] Route ${route} returned HTTP 200"
    PASS_COUNT=$((PASS_COUNT + 1))
  else
    echo "  [FAIL] Route ${route} returned HTTP ${status} (expected 200)"
    FAIL_COUNT=$((FAIL_COUNT + 1))
  fi
}

# 1. Type Safety Verification
echo ""
echo "--- 1. Static Type Checking (npx tsc --noEmit) ---"
if npx tsc --noEmit; then
  echo "  [PASS] TypeScript static verification: 0 errors"
  PASS_COUNT=$((PASS_COUNT + 1))
else
  echo "  [FAIL] TypeScript compilation errors detected"
  FAIL_COUNT=$((FAIL_COUNT + 1))
  exit 1
fi

# 2. Check if local server is running, if not start background instance
echo ""
echo "--- 2. Checking Local Server Availability ---"
SERVER_STARTED_BY_TEST=0
if ! curl -s -o /dev/null "${BASE_URL}"; then
  echo "  Local server not detected on port ${PORT}. Starting background Next.js server..."
  npx next start -p "${PORT}" &
  SERVER_PID=$!
  SERVER_STARTED_BY_TEST=1
  sleep 4
  echo "  Server started with PID ${SERVER_PID}."
fi

cleanup() {
  if [ "$SERVER_STARTED_BY_TEST" = "1" ] && [ -n "$SERVER_PID" ]; then
    echo "  Shutting down background test server (PID ${SERVER_PID})..."
    kill "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

# 3. Test Mandatory Razorpay Compliance Routes
echo ""
echo "--- 3. Verifying Mandatory Razorpay Compliance Routes ---"
assert_http_200 "/"
assert_http_200 "/about"
assert_http_200 "/contact"
assert_http_200 "/terms"
assert_http_200 "/privacy"
assert_http_200 "/refund-policy"
assert_http_200 "/shipping-policy"
assert_http_200 "/validate/germany-vat"
assert_http_200 "/validate/india-maharashtra-gst"

# 4. Test Tax Validation API Endpoint
echo ""
echo "--- 4. Testing /api/v1/validate-tax (Luhn Mod-36 & Multi-Region) ---"

# Test 4A: Valid Indian GSTIN
RES_VALID_GST=$(curl -s -X POST "${BASE_URL}/api/v1/validate-tax" \
  -H "Content-Type: application/json" \
  -d '{"taxId": "27AAPFU0939F1ZV"}')

IS_VALID_GST=$(echo "$RES_VALID_GST" | grep -o '"isValid":true' || true)
STATE_NAME=$(echo "$RES_VALID_GST" | grep -o '"stateName":"Maharashtra"' || true)
assert_eq "Valid GSTIN Checksum Passed" '"isValid":true' "$IS_VALID_GST"
assert_eq "Maharashtra State Jurisdiction Mapped" '"stateName":"Maharashtra"' "$STATE_NAME"

# Test 4B: Invalid GSTIN Checksum
RES_INVALID_GST=$(curl -s -X POST "${BASE_URL}/api/v1/validate-tax" \
  -H "Content-Type: application/json" \
  -d '{"taxId": "27AAPFU0939F1Z0"}')

IS_INVALID_GST=$(echo "$RES_INVALID_GST" | grep -o '"checksumValid":false' || true)
assert_eq "Corrupted GSTIN Checksum Caught" '"checksumValid":false' "$IS_INVALID_GST"

# Test 4C: Valid EU VAT
RES_EU=$(curl -s -X POST "${BASE_URL}/api/v1/validate-tax" \
  -H "Content-Type: application/json" \
  -d '{"taxId": "DE123456789"}')

IS_VALID_EU=$(echo "$RES_EU" | grep -o '"isValid":true' || true)
assert_eq "Valid German EU VAT Syntax" '"isValid":true' "$IS_VALID_EU"

# 5. Test Unified Extraction & Compliance Endpoint
echo ""
echo "--- 5. Testing /api/v1/extract-and-validate (Unified Engine) ---"
RES_EXTRACT=$(curl -s -X POST "${BASE_URL}/api/v1/extract-and-validate" \
  -H "Content-Type: application/json" \
  -d '{"sampleProfile": "india-gst"}')

IS_EXTRACT_SUCCESS=$(echo "$RES_EXTRACT" | grep -o '"success":true' || true)
IS_MATH_RECONCILED=$(echo "$RES_EXTRACT" | grep -o '"isReconciled":true' || true)
assert_eq "Extraction Engine Success" '"success":true' "$IS_EXTRACT_SUCCESS"
assert_eq "Deterministic Math Reconciled" '"isReconciled":true' "$IS_MATH_RECONCILED"

# 6. Test Razorpay Order Creation & Verification
echo ""
echo "--- 6. Testing Razorpay Order Creation & Verification ---"
RES_ORDER=$(curl -s -X POST "${BASE_URL}/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d '{"planId": "pro", "currency": "INR"}')

ORDER_SUCCESS=$(echo "$RES_ORDER" | grep -o '"success":true' || true)
assert_eq "Razorpay Order Creation" '"success":true' "$ORDER_SUCCESS"

RES_VERIFY=$(curl -s -X POST "${BASE_URL}/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{"razorpay_order_id": "order_sim_test", "razorpay_payment_id": "pay_sim_test", "planId": "pro"}')

VERIFY_SUCCESS=$(echo "$RES_VERIFY" | grep -o '"verified":true' || true)
assert_eq "Payment Verification Simulation" '"verified":true' "$VERIFY_SUCCESS"

echo ""
echo "=========================================================="
echo "  Test Summary: ${PASS_COUNT} Passed, ${FAIL_COUNT} Failed"
echo "=========================================================="

if [ "$FAIL_COUNT" -gt 0 ]; then
  exit 1
fi
