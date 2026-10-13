/**
 * Programmatic SEO (pSEO) Tax & Compliance Database
 * Powers automated dynamic landing pages at /validate/[slug]
 */

export interface TaxRegionData {
  slug: string;
  countryName: string;
  countryCode: string;
  taxName: string;
  taxAcronym: string;
  formatDescription: string;
  exampleNumber: string;
  sampleVendor: string;
  algorithm: string;
  standardVatRate: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const PSEO_REGIONS: Record<string, TaxRegionData> = {
  "germany-vat": {
    slug: "germany-vat",
    countryName: "Germany",
    countryCode: "DE",
    taxName: "Umsatzsteuer-Identifikationsnummer",
    taxAcronym: "USt-IdNr",
    formatDescription: "DE followed by 9 numerical digits (DE123456789)",
    exampleNumber: "DE123456789",
    sampleVendor: "SAP SE",
    algorithm: "European Union VIES syntax & country server federation",
    standardVatRate: "19% (Reduced 7%)",
    faqs: [
      {
        question: "How do I validate a German VAT number via API?",
        answer: "EvolveExpert validates the DE prefix and 9 digits locally in <5ms, returning format validity, country code, and optional VIES status.",
      },
      {
        question: "What happens if a German VAT number fails verification?",
        answer: "Cross-border B2B transactions under reverse-charge rules cannot be zero-rated if the VAT ID is invalid, risking tax audit liabilities.",
      },
    ],
  },
  "uk-vat": {
    slug: "uk-vat",
    countryName: "United Kingdom",
    countryCode: "GB",
    taxName: "Value Added Tax Registration Number",
    taxAcronym: "VAT Reg No",
    formatDescription: "GB followed by 9 digits with standard Modulus 97 checksum (or 12 digits for branch trades)",
    exampleNumber: "GB123456782",
    sampleVendor: "Revolut Ltd",
    algorithm: "HMRC Modulus 97 weighted algorithm (weights 8, 7, 6, 5, 4, 3, 2)",
    standardVatRate: "20% (Reduced 5%)",
    faqs: [
      {
        question: "Does EvolveExpert check the UK HMRC Modulus 97 checksum?",
        answer: "Yes. Our engine checks the 7 weighted digits and 2 check digits locally without incurring external API rate limits or latency.",
      },
    ],
  },
  "france-vat": {
    slug: "france-vat",
    countryName: "France",
    countryCode: "FR",
    taxName: "Numéro de TVA Intracommunautaire",
    taxAcronym: "TVA",
    formatDescription: "FR followed by 2 alphanumeric characters + 9-digit SIREN number",
    exampleNumber: "FRXX123456789",
    sampleVendor: "Dassault Systèmes SE",
    algorithm: "French SIREN validation combined with Modulo 97 check key",
    standardVatRate: "20% (Reduced 10%, 5.5%, 2.1%)",
    faqs: [
      {
        question: "Can I extract French supplier invoices and validate the TVA simultaneously?",
        answer: "Yes. EvolveExpert parses French line items, TTC and HT totals, and validates the FR TVA number in a single API call.",
      },
    ],
  },
  "india-maharashtra-gst": {
    slug: "india-maharashtra-gst",
    countryName: "India (Maharashtra)",
    countryCode: "IN",
    taxName: "Goods and Services Tax Identification Number",
    taxAcronym: "GSTIN",
    formatDescription: "State Code '27' + 10-char PAN + 1 entity digit + 'Z' + Luhn Mod-36 check digit",
    exampleNumber: "27AAPFU0939F1ZV",
    sampleVendor: "Tata Consultancy Services Ltd",
    algorithm: "Official Luhn Mod-36 Checksum Verification",
    standardVatRate: "18% (GST slabs: 5%, 12%, 18%, 28%)",
    faqs: [
      {
        question: "Why is Luhn Mod-36 verification essential for Maharashtra GSTINs?",
        answer: "Typing errors in vendor GSTINs prevent Input Tax Credit (ITC) claims on GSTR-2B. EvolveExpert verifies the check digit in <1ms.",
      },
    ],
  },
  "india-karnataka-gst": {
    slug: "india-karnataka-gst",
    countryName: "India (Karnataka)",
    countryCode: "IN",
    taxName: "Goods and Services Tax Identification Number",
    taxAcronym: "GSTIN",
    formatDescription: "State Code '29' + 10-char PAN + 1 entity digit + 'Z' + Luhn Mod-36 check digit",
    exampleNumber: "29AAACE9486L1ZP",
    sampleVendor: "Infosys Ltd",
    algorithm: "Official Luhn Mod-36 Checksum Verification",
    standardVatRate: "18% (GST slabs: 5%, 12%, 18%, 28%)",
    faqs: [
      {
        question: "Does EvolveExpert map Karnataka's jurisdiction code 29 automatically?",
        answer: "Yes. The API verifies state prefix 29, PAN entity structure, and check digit automatically.",
      },
    ],
  },
  "us-ein": {
    slug: "us-ein",
    countryName: "United States",
    countryCode: "US",
    taxName: "Employer Identification Number / Federal Tax ID",
    taxAcronym: "EIN / FEIN",
    formatDescription: "9 digits formatted as XX-XXXXXXX with designated IRS campus assignment prefixes",
    exampleNumber: "12-3456789",
    sampleVendor: "Stripe Inc",
    algorithm: "IRS Campus Sorting Prefix Validation & 9-digit syntax check",
    standardVatRate: "State-level Sales Tax (0% - 9.5%)",
    faqs: [
      {
        question: "How does EvolveExpert validate a US EIN?",
        answer: "We verify the 2-digit IRS campus sorting prefix against valid federal issuance blocks to catch clerical typos instantly.",
      },
    ],
  },
};

export function getAllCountrySlugs(): string[] {
  return Object.keys(PSEO_REGIONS);
}

export function getCountryTaxData(slug: string): TaxRegionData | undefined {
  return PSEO_REGIONS[slug];
}
