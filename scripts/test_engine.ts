import { validateGSTIN, validateEUVAT, validateUKVAT, validateUSEIN, validateUniversalTaxId } from "../src/lib/tax-validation.ts";
import { reconcileInvoiceMath } from "../src/lib/math-reconciliation.ts";

console.log("==================================================");
console.log("   EvolveExpert Core Engine Unit Test Suite       ");
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

// 1. Indian GSTIN Checksum Tests
const validGstin = validateGSTIN("27AAPFU0939F1ZV");
assert("Valid GSTIN passes validation", validGstin.isValid === true);
assert("Valid GSTIN maps Maharashtra (27)", validGstin.stateName === "Maharashtra");
assert("Valid GSTIN extracts PAN AAPFU0939F", validGstin.pan === "AAPFU0939F");
assert("Valid GSTIN checksum checkChar matches 'V'", validGstin.calculatedCheckChar === "V");

const invalidGstin = validateGSTIN("27AAPFU0939F1Z0");
assert("Invalid GSTIN check digit caught", invalidGstin.checksumValid === false);
assert("Invalid GSTIN isValid is false", invalidGstin.isValid === false);

// 2. EU VAT Tests
const validDeVat = validateEUVAT("DE123456789");
assert("German VAT syntax valid", validDeVat.isValid === true);
assert("German VAT country code is DE", validDeVat.countryCode === "DE");

const invalidDeVat = validateEUVAT("DE1234");
assert("Short German VAT rejected", invalidDeVat.isValid === false);

// 3. UK VAT Modulus 97 Tests
const validUkVat = validateUKVAT("GB123456782");
assert("UK VAT regex structure valid", validUkVat.countryCode === "GB");

// 4. US EIN Tests
const validEin = validateUSEIN("12-3456789");
assert("Valid US EIN structure passes", validEin.isValid === true);
assert("US EIN campus prefix is 12", validEin.campusPrefix === "12");

const invalidEin = validateUSEIN("12-345");
assert("Invalid EIN length rejected", invalidEin.isValid === false);

// 5. Universal Tax Dispatcher
const universalGstin = validateUniversalTaxId("27AAPFU0939F1ZV");
assert("Universal dispatcher routes GSTIN", universalGstin.taxType === "GSTIN" && universalGstin.isValid);

const universalEu = validateUniversalTaxId("FRXX123456789");
assert("Universal dispatcher routes French VAT", universalEu.taxType === "EU_VAT");

// 6. Math Reconciliation Engine Tests
const reconciledResult = reconcileInvoiceMath({
  lineItems: [
    { description: "Item A", quantity: 2, unitPrice: 100, total: 200 },
    { description: "Item B", quantity: 1, unitPrice: 50, total: 50 },
  ],
  subtotal: 250,
  taxAmount: 45, // 18%
  grandTotal: 295,
});
assert("Clean invoice math reconciled", reconciledResult.isReconciled === true);
assert("Calculated grand total matches", reconciledResult.calculatedGrandTotal === 295);

const discrepancyResult = reconcileInvoiceMath({
  lineItems: [
    { description: "Item A", quantity: 1, unitPrice: 100, total: 100 },
  ],
  subtotal: 100,
  taxAmount: 18,
  grandTotal: 150, // Intentional mismatch
});
assert("Math discrepancy flagged correctly", discrepancyResult.isReconciled === false);
assert("Status is DISCREPANCY_FLAGGED", discrepancyResult.status === "DISCREPANCY_FLAGGED");

console.log("==================================================");
console.log(`Results: ${pass} Passed, ${fail} Failed`);
console.log("==================================================");

if (fail > 0) process.exit(1);
