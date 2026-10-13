import { NextRequest } from "next/server.js";
import { POST as validateTaxHandler, GET as validateTaxGetHandler } from "../src/app/api/v1/validate-tax/route.ts";
import { POST as extractHandler } from "../src/app/api/v1/extract-and-validate/route.ts";
import { POST as createOrderHandler } from "../src/app/api/razorpay/create-order/route.ts";
import { POST as verifyPaymentHandler } from "../src/app/api/razorpay/verify-payment/route.ts";

console.log("==================================================");
console.log("   EvolveExpert Route Handler Integration Tests   ");
console.log("==================================================");

let pass = 0;
let fail = 0;

function assert(name: string, condition: boolean, extra?: any) {
  if (condition) {
    console.log(`[PASS] ${name}`);
    pass++;
  } else {
    console.error(`[FAIL] ${name}`, extra || "");
    fail++;
  }
}

async function runTests() {
  // 1. Test POST /api/v1/validate-tax with valid GSTIN
  const req1 = new NextRequest("http://localhost:3000/api/v1/validate-tax", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ taxId: "27AAPFU0939F1ZV" }),
  });
  const res1 = await validateTaxHandler(req1);
  const data1 = await res1.json();
  assert("POST /api/v1/validate-tax returns HTTP 200", res1.status === 200);
  assert("POST /api/v1/validate-tax passes valid GSTIN", data1.success === true && data1.data.isValid === true);
  assert("POST /api/v1/validate-tax maps Maharashtra", data1.data.stateName === "Maharashtra");

  // 2. Test POST /api/v1/validate-tax with missing taxId (RFC 9457)
  const req2 = new NextRequest("http://localhost:3000/api/v1/validate-tax", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  const res2 = await validateTaxHandler(req2);
  const data2 = await res2.json();
  assert("POST /api/v1/validate-tax missing param returns HTTP 400", res2.status === 400);
  assert("POST /api/v1/validate-tax returns RFC 9457 error type", data2.type.includes("invalid-parameters"));

  // 3. Test GET /api/v1/validate-tax
  const req3 = new NextRequest("http://localhost:3000/api/v1/validate-tax?taxId=DE123456789");
  const res3 = await validateTaxGetHandler(req3);
  const data3 = await res3.json();
  assert("GET /api/v1/validate-tax returns HTTP 200", res3.status === 200);
  assert("GET /api/v1/validate-tax validates German VAT", data3.data.countryCode === "DE" && data3.data.isValid === true);

  // 4. Test POST /api/v1/extract-and-validate (India GST profile)
  const req4 = new NextRequest("http://localhost:3000/api/v1/extract-and-validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sampleProfile: "india-gst" }),
  });
  const res4 = await extractHandler(req4);
  const data4 = await res4.json();
  assert("POST /api/v1/extract-and-validate returns HTTP 200", res4.status === 200);
  assert("POST /api/v1/extract-and-validate extracts vendor TCS", data4.data.vendor.name.includes("Tata"));
  assert("POST /api/v1/extract-and-validate verifies GSTIN checksum", data4.data.vendor.taxCompliance.checksumValid === true);
  assert("POST /api/v1/extract-and-validate confirms math reconciliation", data4.data.reconciliation.isReconciled === true);

  // 5. Test POST /api/v1/extract-and-validate (US Cloud profile)
  const req5 = new NextRequest("http://localhost:3000/api/v1/extract-and-validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sampleProfile: "us-cloud" }),
  });
  const res5 = await extractHandler(req5);
  const data5 = await res5.json();
  assert("POST /api/v1/extract-and-validate extracts AWS invoice", data5.data.vendor.name.includes("Amazon"));
  assert("POST /api/v1/extract-and-validate reconciles USD totals", data5.data.totals.currency === "USD");

  // 6. Test POST /api/razorpay/create-order
  const req6 = new NextRequest("http://localhost:3000/api/razorpay/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ planId: "pro" }),
  });
  const res6 = await createOrderHandler(req6);
  const data6 = await res6.json();
  assert("POST /api/razorpay/create-order returns HTTP 200", res6.status === 200);
  assert("POST /api/razorpay/create-order creates orderId", Boolean(data6.orderId));
  assert("POST /api/razorpay/create-order allocates 250 credits", data6.credits === 250);

  // 7. Test POST /api/razorpay/verify-payment
  const req7 = new NextRequest("http://localhost:3000/api/razorpay/verify-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      razorpay_order_id: "order_sim_test123",
      razorpay_payment_id: "pay_sim_test123",
      planId: "pro",
    }),
  });
  const res7 = await verifyPaymentHandler(req7);
  const data7 = await res7.json();
  assert("POST /api/razorpay/verify-payment returns HTTP 200", res7.status === 200);
  assert("POST /api/razorpay/verify-payment marks verified: true", data7.verified === true);

  console.log("==================================================");
  console.log(`Route Integration Results: ${pass} Passed, ${fail} Failed`);
  console.log("==================================================");

  if (fail > 0) process.exit(1);
}

runTests().catch((err) => {
  console.error("Unhandled integration test error:", err);
  process.exit(1);
});
