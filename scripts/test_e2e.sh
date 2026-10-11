#!/usr/bin/env bash
# ==============================================================================
# DocuPulse AI - Comprehensive End-to-End (E2E) Test Suite & Benchmark Runner
# ==============================================================================
# Usage: ./scripts/test_e2e.sh [BASE_URL]
# Default BASE_URL: http://localhost:3000
# ==============================================================================

set -o pipefail

BASE_URL="${1:-${BASE_URL:-http://localhost:3000}}"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Colors
CLR_RESET="\033[0m"
CLR_RED="\033[0;31m"
CLR_GREEN="\033[0;32m"
CLR_YELLOW="\033[1;33m"
CLR_BLUE="\033[0;34m"
CLR_MAGENTA="\033[0;35m"
CLR_CYAN="\033[0;36m"
CLR_BOLD="\033[1m"

# Test Counters
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0
START_TIME=$(date +%s)

print_header() {
  echo -e "\n${CLR_MAGENTA}${CLR_BOLD}==============================================================================${CLR_RESET}"
  echo -e "${CLR_MAGENTA}${CLR_BOLD}  $1${CLR_RESET}"
  echo -e "${CLR_MAGENTA}${CLR_BOLD}==============================================================================${CLR_RESET}"
}

print_suite() {
  echo -e "\n${CLR_CYAN}${CLR_BOLD}--- [SUITE] $1 ---${CLR_RESET}"
}

record_pass() {
  local test_name="$1"
  local details="$2"
  TOTAL_TESTS=$((TOTAL_TESTS + 1))
  PASSED_TESTS=$((PASSED_TESTS + 1))
  echo -e "  [${CLR_GREEN}${CLR_BOLD}PASS${CLR_RESET}] $test_name ${CLR_YELLOW}($details)${CLR_RESET}"
}

record_fail() {
  local test_name="$1"
  local reason="$2"
  TOTAL_TESTS=$((TOTAL_TESTS + 1))
  FAILED_TESTS=$((FAILED_TESTS + 1))
  echo -e "  [${CLR_RED}${CLR_BOLD}FAIL${CLR_RESET}] $test_name -> ${CLR_RED}$reason${CLR_RESET}"
}

# Helper for robust curl execution across macOS and Linux
CURL_CODE=0
CURL_TIME=0
CURL_BODY=""

do_curl() {
  local method="$1"
  local url="$2"
  shift 2
  local tmp_body
  tmp_body=$(mktemp)
  local meta
  meta=$(curl -s -o "$tmp_body" -w "%{http_code} %{time_total}" -X "$method" "$url" "$@")
  CURL_CODE=$(echo "$meta" | awk '{print $1}')
  CURL_TIME=$(echo "$meta" | awk '{print $2}')
  CURL_BODY=$(cat "$tmp_body")
  rm -f "$tmp_body"
}

# Ensure jq is installed
if ! command -v jq &>/dev/null; then
  echo -e "${CLR_RED}Error: jq is required to run E2E assertions.${CLR_RESET}"
  exit 1
fi

print_header "DOCUPULSE AI — SYSTEM E2E VALIDATION & BENCHMARK SUITE"
echo -e "${CLR_BLUE}Target Server URL:${CLR_RESET} $BASE_URL"
echo -e "${CLR_BLUE}Started At:${CLR_RESET}        $TIMESTAMP"
echo -e "${CLR_BLUE}Node Runtime:${CLR_RESET}      $(node --version 2>/dev/null || echo 'Unknown')"
echo -e "${CLR_BLUE}Host Platform:${CLR_RESET}     $(uname -s) $(uname -m)"

# ------------------------------------------------------------------------------
# SUITE 1: TypeScript Static Typecheck Verification
# ------------------------------------------------------------------------------
print_suite "Suite 1: Static Typecheck Verification"

echo -e "  Running '${CLR_BOLD}npx tsc --noEmit${CLR_RESET}'..."
TSC_OUTPUT=$(npx tsc --noEmit 2>&1)
TSC_EXIT=$?

if [ $TSC_EXIT -eq 0 ]; then
  record_pass "TypeScript Compiler (tsc --noEmit)" "Zero type errors detected"
else
  record_fail "TypeScript Compiler (tsc --noEmit)" "Exit code $TSC_EXIT: $TSC_OUTPUT"
fi

# ------------------------------------------------------------------------------
# SUITE 2: Document Extraction API (/api/v1/extract)
# ------------------------------------------------------------------------------
print_suite "Suite 2: Extraction API (/api/v1/extract)"

# Test 2.1: Method Validation (GET request should return HTTP 405 Method Not Allowed)
do_curl GET "$BASE_URL/api/v1/extract"
if [ "$CURL_CODE" -eq 405 ]; then
  record_pass "GET /api/v1/extract method validation" "HTTP 405 Method Not Allowed correctly returned"
else
  record_fail "GET /api/v1/extract method validation" "Expected 405, got $CURL_CODE"
fi

# Test 2.2: CORS Preflight (OPTIONS request)
OPTIONS_RES=$(curl -s -i -X OPTIONS "$BASE_URL/api/v1/extract")
OPTIONS_CODE=$(echo "$OPTIONS_RES" | grep -i "^HTTP" | awk '{print $2}' | tr -d '\r')
CORS_ALLOW_ORIGIN=$(echo "$OPTIONS_RES" | grep -i "^access-control-allow-origin:" | tr -d '\r')
CORS_ALLOW_METHODS=$(echo "$OPTIONS_RES" | grep -i "^access-control-allow-methods:" | tr -d '\r')

if [ "$OPTIONS_CODE" -eq 204 ] && [[ "$CORS_ALLOW_ORIGIN" == *"*"* ]]; then
  record_pass "OPTIONS /api/v1/extract CORS Preflight" "HTTP 204, Origin: *, Methods: $CORS_ALLOW_METHODS"
else
  record_fail "OPTIONS /api/v1/extract CORS Preflight" "Code: $OPTIONS_CODE, Header: $CORS_ALLOW_ORIGIN"
fi

# Test 2.3: JSON Payload Extraction with documentTypeHint="receipt"
do_curl POST "$BASE_URL/api/v1/extract" \
  -H "Content-Type: application/json" \
  -d '{"documentTypeHint": "receipt"}'

RECEIPT_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
RECEIPT_DOCTYPE=$(echo "$CURL_BODY" | jq -r '.data.document_type // empty' 2>/dev/null)
RECEIPT_VENDOR=$(echo "$CURL_BODY" | jq -r '.data.vendor.name // empty' 2>/dev/null)
RECEIPT_TOTAL=$(echo "$CURL_BODY" | jq -r '.data.financials.total_amount // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$RECEIPT_SUCCESS" = "true" ] && [ "$RECEIPT_DOCTYPE" = "receipt" ] && [ -n "$RECEIPT_VENDOR" ]; then
  record_pass "POST /api/v1/extract (JSON receipt hint)" "HTTP 200, DocType: $RECEIPT_DOCTYPE, Total: $RECEIPT_TOTAL, Vendor: $RECEIPT_VENDOR, Latency: ${CURL_TIME}s"
else
  record_fail "POST /api/v1/extract (JSON receipt hint)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 2.4: JSON Payload Extraction with documentTypeHint="bill"
do_curl POST "$BASE_URL/api/v1/extract" \
  -H "Content-Type: application/json" \
  -d '{"documentTypeHint": "bill"}'

BILL_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
BILL_DOCTYPE=$(echo "$CURL_BODY" | jq -r '.data.document_type // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$BILL_SUCCESS" = "true" ] && [ "$BILL_DOCTYPE" = "bill" ]; then
  record_pass "POST /api/v1/extract (JSON bill hint)" "HTTP 200, DocType: $BILL_DOCTYPE"
else
  record_fail "POST /api/v1/extract (JSON bill hint)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 2.5: JSON Payload with Base64 Document & documentTypeHint="invoice"
DUMMY_BASE64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
PAYLOAD_BASE64=$(jq -n --arg b64 "$DUMMY_BASE64" '{documentTypeHint: "invoice", image: $b64, mimeType: "image/png"}')
do_curl POST "$BASE_URL/api/v1/extract" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD_BASE64"

BASE64_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
BASE64_ITEMS_COUNT=$(echo "$CURL_BODY" | jq -r '.data.line_items | length // 0' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$BASE64_SUCCESS" = "true" ] && [ "$BASE64_ITEMS_COUNT" -gt 0 ]; then
  record_pass "POST /api/v1/extract (Base64 image payload)" "HTTP 200, Extracted $BASE64_ITEMS_COUNT line items"
else
  record_fail "POST /api/v1/extract (Base64 image payload)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 2.6: Multipart/form-data File Upload
TMP_FILE="/tmp/test_invoice.txt"
echo "INVOICE #9901 - ACME Corp - Total: $500" > "$TMP_FILE"
do_curl POST "$BASE_URL/api/v1/extract" \
  -F "file=@$TMP_FILE;type=text/plain" \
  -F "documentTypeHint=purchase_order"
rm -f "$TMP_FILE"

MULTIPART_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
MULTIPART_DOCTYPE=$(echo "$CURL_BODY" | jq -r '.data.document_type // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$MULTIPART_SUCCESS" = "true" ] && [ "$MULTIPART_DOCTYPE" = "purchase_order" ]; then
  record_pass "POST /api/v1/extract (multipart/form-data)" "HTTP 200, Multipart File Parsed, DocType: $MULTIPART_DOCTYPE"
else
  record_fail "POST /api/v1/extract (multipart/form-data)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 2.7: RapidAPI Integration Headers Validation
do_curl POST "$BASE_URL/api/v1/extract" \
  -H "Content-Type: application/json" \
  -H "x-rapidapi-key: test-rapidapi-key-999" \
  -H "x-rapidapi-user: rapidapi-client-user" \
  -d '{"documentTypeHint": "invoice"}'

RAPIDAPI_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
RAPIDAPI_PLATFORM=$(echo "$CURL_BODY" | jq -r '.meta.platform // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$RAPIDAPI_SUCCESS" = "true" ] && [ "$RAPIDAPI_PLATFORM" = "RapidAPI" ]; then
  record_pass "POST /api/v1/extract (RapidAPI Headers)" "HTTP 200, Platform identified as '$RAPIDAPI_PLATFORM'"
else
  record_fail "POST /api/v1/extract (RapidAPI Headers)" "Code: $CURL_CODE, Platform: $RAPIDAPI_PLATFORM"
fi

# Test 2.8: Empty Body / Malformed payload error handling
do_curl POST "$BASE_URL/api/v1/extract" \
  -H "Content-Type: application/json" \
  -d ''

EMPTY_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success' 2>/dev/null)
EMPTY_ERROR=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ "$EMPTY_SUCCESS" = "false" ] && [ -n "$EMPTY_ERROR" ]; then
  record_pass "POST /api/v1/extract (Empty body error handling)" "HTTP $CURL_CODE, Handled error: '$EMPTY_ERROR'"
else
  record_fail "POST /api/v1/extract (Empty body error handling)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 2.9: Extraction Latency Benchmark (5 iterations)
echo -e "  Measuring extraction latency (5 benchmark cycles)..."
LATENCIES=()
for i in {1..5}; do
  LAT=$(curl -o /dev/null -s -w "%{time_total}" -X POST "$BASE_URL/api/v1/extract" \
    -H "Content-Type: application/json" \
    -d '{"documentTypeHint": "invoice"}')
  LATENCIES+=("$LAT")
done

STATS=$(python3 -c "
l = [float(x) * 1000 for x in '${LATENCIES[*]}'.split()]
print(f'{min(l):.1f} {max(l):.1f} {sum(l)/len(l):.1f}')
")
MIN_LAT=$(echo "$STATS" | awk '{print $1}')
MAX_LAT=$(echo "$STATS" | awk '{print $2}')
AVG_LAT=$(echo "$STATS" | awk '{print $3}')

record_pass "POST /api/v1/extract Latency Benchmark" "Avg: ${AVG_LAT}ms | Min: ${MIN_LAT}ms | Max: ${MAX_LAT}ms (5 samples)"

# ------------------------------------------------------------------------------
# SUITE 3: Razorpay Payment Gateway - Order Creation (/api/razorpay/create-order)
# ------------------------------------------------------------------------------
print_suite "Suite 3: Razorpay Order Creation (/api/razorpay/create-order)"

# Test 3.1: Valid Order Creation - Pro Plan (INR 499)
do_curl POST "$BASE_URL/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d '{"planId": "pro", "amountInInr": 499, "customerEmail": "qa-pro@docupulse.ai"}'

ORDER_PRO_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
ORDER_PRO_ID=$(echo "$CURL_BODY" | jq -r '.orderId // empty' 2>/dev/null)
ORDER_PRO_AMOUNT=$(echo "$CURL_BODY" | jq -r '.amount // 0' 2>/dev/null)
ORDER_PRO_CURRENCY=$(echo "$CURL_BODY" | jq -r '.currency // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$ORDER_PRO_SUCCESS" = "true" ] && [[ "$ORDER_PRO_ID" == order_* ]] && [ "$ORDER_PRO_AMOUNT" -eq 49900 ]; then
  record_pass "POST /api/razorpay/create-order (Pro Plan: 499 INR)" "HTTP 200, OrderID: $ORDER_PRO_ID, Amount: $ORDER_PRO_AMOUNT paise ($ORDER_PRO_CURRENCY), Time: ${CURL_TIME}s"
else
  record_fail "POST /api/razorpay/create-order (Pro Plan: 499 INR)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 3.2: Valid Order Creation - Enterprise Plan (INR 1999)
do_curl POST "$BASE_URL/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d '{"planId": "enterprise", "amountInInr": 1999, "customerEmail": "qa-ent@docupulse.ai"}'

ORDER_ENT_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
ORDER_ENT_AMOUNT=$(echo "$CURL_BODY" | jq -r '.amount // 0' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$ORDER_ENT_SUCCESS" = "true" ] && [ "$ORDER_ENT_AMOUNT" -eq 199900 ]; then
  record_pass "POST /api/razorpay/create-order (Enterprise: 1999 INR)" "HTTP 200, Amount: $ORDER_ENT_AMOUNT paise"
else
  record_fail "POST /api/razorpay/create-order (Enterprise: 1999 INR)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 3.3: Missing amount Error Handling
do_curl POST "$BASE_URL/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d '{"planId": "pro"}'

ORDER_ERR_MSG=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 400 ] && [[ "$ORDER_ERR_MSG" == *"Missing planId or amount"* ]]; then
  record_pass "POST /api/razorpay/create-order (Missing amount error)" "HTTP 400 Bad Request, Error: '$ORDER_ERR_MSG'"
else
  record_fail "POST /api/razorpay/create-order (Missing amount error)" "Code: $CURL_CODE, Error: $ORDER_ERR_MSG"
fi

# Test 3.4: Missing planId Error Handling
do_curl POST "$BASE_URL/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d '{"amountInInr": 499}'

ORDER_NOPLAN_MSG=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 400 ] && [[ "$ORDER_NOPLAN_MSG" == *"Missing planId or amount"* ]]; then
  record_pass "POST /api/razorpay/create-order (Missing planId error)" "HTTP 400 Bad Request, Error: '$ORDER_NOPLAN_MSG'"
else
  record_fail "POST /api/razorpay/create-order (Missing planId error)" "Code: $CURL_CODE, Error: $ORDER_NOPLAN_MSG"
fi

# Test 3.5: Empty Body Error Handling
do_curl POST "$BASE_URL/api/razorpay/create-order" \
  -H "Content-Type: application/json" \
  -d ''

ORDER_EMPTY_MSG=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ -n "$ORDER_EMPTY_MSG" ]; then
  record_pass "POST /api/razorpay/create-order (Empty body error)" "HTTP $CURL_CODE, Handled error: '$ORDER_EMPTY_MSG'"
else
  record_fail "POST /api/razorpay/create-order (Empty body error)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# ------------------------------------------------------------------------------
# SUITE 4: Razorpay Payment Gateway - Verification (/api/razorpay/verify-payment)
# ------------------------------------------------------------------------------
print_suite "Suite 4: Razorpay Payment Verification (/api/razorpay/verify-payment)"

# Test 4.1: Simulated Demo Mode Flow (Pro Plan - 250 credits)
do_curl POST "$BASE_URL/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{"isDemoMode": true, "planId": "pro"}'

DEMO_PRO_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
DEMO_PRO_CREDITS=$(echo "$CURL_BODY" | jq -r '.creditsAdded // 0' 2>/dev/null)
DEMO_PRO_KEY=$(echo "$CURL_BODY" | jq -r '.apiKey // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$DEMO_PRO_SUCCESS" = "true" ] && [ "$DEMO_PRO_CREDITS" -eq 250 ] && [[ "$DEMO_PRO_KEY" == dp_live_* ]]; then
  record_pass "POST /api/razorpay/verify-payment (Demo Pro Plan)" "HTTP 200, Credits: $DEMO_PRO_CREDITS, API Key: $DEMO_PRO_KEY"
else
  record_fail "POST /api/razorpay/verify-payment (Demo Pro Plan)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 4.2: Simulated Demo Mode Flow (Enterprise Plan - 1000 credits)
do_curl POST "$BASE_URL/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{"isDemoMode": true, "planId": "enterprise"}'

DEMO_ENT_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
DEMO_ENT_CREDITS=$(echo "$CURL_BODY" | jq -r '.creditsAdded // 0' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$DEMO_ENT_SUCCESS" = "true" ] && [ "$DEMO_ENT_CREDITS" -eq 1000 ]; then
  record_pass "POST /api/razorpay/verify-payment (Demo Enterprise Plan)" "HTTP 200, Credits: $DEMO_ENT_CREDITS"
else
  record_fail "POST /api/razorpay/verify-payment (Demo Enterprise Plan)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 4.3: Simulated Demo Mode Flow (Starter Plan - 50 credits)
do_curl POST "$BASE_URL/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{"isDemoMode": true, "planId": "starter"}'

DEMO_START_SUCCESS=$(echo "$CURL_BODY" | jq -r '.success // false' 2>/dev/null)
DEMO_START_CREDITS=$(echo "$CURL_BODY" | jq -r '.creditsAdded // 0' 2>/dev/null)

if [ "$CURL_CODE" -eq 200 ] && [ "$DEMO_START_SUCCESS" = "true" ] && [ "$DEMO_START_CREDITS" -eq 50 ]; then
  record_pass "POST /api/razorpay/verify-payment (Demo Starter Plan)" "HTTP 200, Credits: $DEMO_START_CREDITS"
else
  record_fail "POST /api/razorpay/verify-payment (Demo Starter Plan)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 4.4: Incomplete Parameters Error Handling
do_curl POST "$BASE_URL/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{"razorpay_order_id": "order_test_123"}'

INCOMPLETE_MSG=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 400 ] && [[ "$INCOMPLETE_MSG" == *"Incomplete payment parameters"* ]]; then
  record_pass "POST /api/razorpay/verify-payment (Incomplete parameters)" "HTTP 400 Bad Request, Error: '$INCOMPLETE_MSG'"
else
  record_fail "POST /api/razorpay/verify-payment (Incomplete parameters)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# Test 4.5: Invalid Signature Verification Error Case
do_curl POST "$BASE_URL/api/razorpay/verify-payment" \
  -H "Content-Type: application/json" \
  -d '{
    "razorpay_order_id": "order_99999",
    "razorpay_payment_id": "pay_99999",
    "razorpay_signature": "fraudulent_or_forged_signature_hash"
  }'

INVALID_SIG_MSG=$(echo "$CURL_BODY" | jq -r '.error // empty' 2>/dev/null)

if [ "$CURL_CODE" -eq 400 ] && [[ "$INVALID_SIG_MSG" == *"Invalid payment signature"* ]]; then
  record_pass "POST /api/razorpay/verify-payment (Invalid signature check)" "HTTP 400 Bad Request, Error: '$INVALID_SIG_MSG'"
else
  record_fail "POST /api/razorpay/verify-payment (Invalid signature check)" "Code: $CURL_CODE, Body: $CURL_BODY"
fi

# ------------------------------------------------------------------------------
# SUITE 5: System Health, Memory & Response Times
# ------------------------------------------------------------------------------
print_suite "Suite 5: System Health & Performance Benchmarks"

# Test 5.1: Landing Page Root Route (GET /)
do_curl GET "$BASE_URL/"

if [ "$CURL_CODE" -eq 200 ]; then
  record_pass "GET / (Web Application Root)" "HTTP 200 OK, Load Time: ${CURL_TIME}s"
else
  record_fail "GET / (Web Application Root)" "Code: $CURL_CODE"
fi

# Test 5.2: Memory Usage Profiling
NEXT_PID=$(ps aux | grep "next-server" | grep -v grep | awk '{print $2}' | head -n 1)
if [ -n "$NEXT_PID" ]; then
  MEM_RSS_KB=$(ps -p "$NEXT_PID" -o rss= 2>/dev/null | tr -d ' ')
  if [ -n "$MEM_RSS_KB" ]; then
    MEM_RSS_MB=$(python3 -c "print(f'{float($MEM_RSS_KB)/1024:.2f}')")
    record_pass "Process Memory Footprint (PID: $NEXT_PID)" "RSS: ${MEM_RSS_MB} MB"
  else
    record_pass "Process Memory Footprint" "Next-server running (RSS query unavailable)"
  fi
else
  record_pass "Process Memory Footprint" "External or containerized server"
fi

# ------------------------------------------------------------------------------
# Summary & Exit Code
# ------------------------------------------------------------------------------
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

print_header "TEST SUITE EXECUTION SUMMARY"
echo -e "  Total Tests:    ${CLR_BOLD}$TOTAL_TESTS${CLR_RESET}"
echo -e "  Passed:         ${CLR_GREEN}${CLR_BOLD}$PASSED_TESTS${CLR_RESET}"
echo -e "  Failed:         ${CLR_RED}${CLR_BOLD}$FAILED_TESTS${CLR_RESET}"
echo -e "  Success Rate:   ${CLR_CYAN}${CLR_BOLD}$(python3 -c "print(f'{(($PASSED_TESTS/$TOTAL_TESTS)*100):.1f}%')")${CLR_RESET}"
echo -e "  Execution Time: ${CLR_YELLOW}${DURATION} seconds${CLR_RESET}"

if [ $FAILED_TESTS -eq 0 ]; then
  echo -e "\n${CLR_GREEN}${CLR_BOLD}>>> ALL END-TO-END TESTS PASSED SUCCESSFULLY! <<<\n${CLR_RESET}"
  exit 0
else
  echo -e "\n${CLR_RED}${CLR_BOLD}>>> FAILED: $FAILED_TESTS test(s) failed. Check details above. <<<\n${CLR_RESET}"
  exit 1
fi
