/**
 * EvolveExpert Tax & Statutory Identifier Validation Library
 * High-performance, offline validation for:
 * 1. Indian GSTIN (15 characters) with Luhn Mod-36 checksum across 38 states
 * 2. European Union VAT (27 member states) format & syntax validation
 * 3. United Kingdom VAT (9 digits) Modulus 97 checksum
 * 4. United States Employer Identification Number (EIN) format & IRS campus codes
 */

// 1. All 38 Indian State & Union Territory GST Codes
export const GST_STATE_CODES: Record<string, string> = {
  "01": "Jammu and Kashmir",
  "02": "Himachal Pradesh",
  "03": "Punjab",
  "04": "Chandigarh",
  "05": "Uttarakhand",
  "06": "Haryana",
  "07": "Delhi",
  "08": "Rajasthan",
  "09": "Uttar Pradesh",
  "10": "Bihar",
  "11": "Sikkim",
  "12": "Arunachal Pradesh",
  "13": "Nagaland",
  "14": "Manipur",
  "15": "Mizoram",
  "16": "Tripura",
  "17": "Meghalaya",
  "18": "Assam",
  "19": "West Bengal",
  "20": "Jharkhand",
  "21": "Odisha",
  "22": "Chhattisgarh",
  "23": "Madhya Pradesh",
  "24": "Gujarat",
  "25": "Daman and Diu",
  "26": "Dadra and Nagar Haveli",
  "27": "Maharashtra",
  "28": "Andhra Pradesh (Old)",
  "29": "Karnataka",
  "30": "Goa",
  "31": "Lakshadweep",
  "32": "Kerala",
  "33": "Tamil Nadu",
  "34": "Puducherry",
  "35": "Andaman and Nicobar Islands",
  "36": "Telangana",
  "37": "Andhra Pradesh (New)",
  "38": "Ladakh",
  "97": "Other Territory",
  "99": "Centre Jurisdiction / Special",
};

// Mod-36 Character mapping (0-9 followed by A-Z)
const MOD36_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Validates Indian GSTIN using official Luhn Mod-36 algorithm.
 * Structure: 2 digits (State) + 10 chars (PAN) + 1 digit (Entity) + 'Z' (Default) + 1 check digit
 */
export function validateGSTIN(gstin: string): {
  isValid: boolean;
  stateCode?: string;
  stateName?: string;
  pan?: string;
  entityNumber?: string;
  checksumValid: boolean;
  calculatedCheckChar?: string;
  error?: string;
} {
  const cleanGstin = gstin.trim().toUpperCase();

  if (cleanGstin.length !== 15) {
    return {
      isValid: false,
      checksumValid: false,
      error: `GSTIN must be exactly 15 characters, received ${cleanGstin.length}`,
    };
  }

  // Regex for structure: 2 digits, 5 letters, 4 digits, 1 letter, 1 alphanumeric, 'Z', 1 alphanumeric
  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  if (!gstinRegex.test(cleanGstin)) {
    return {
      isValid: false,
      checksumValid: false,
      error: "GSTIN format invalid: does not match standard 15-character Indian tax structure",
    };
  }

  const stateCode = cleanGstin.substring(0, 2);
  const stateName = GST_STATE_CODES[stateCode];
  if (!stateName) {
    return {
      isValid: false,
      checksumValid: false,
      stateCode,
      error: `Invalid Indian State/UT code: '${stateCode}'`,
    };
  }

  const pan = cleanGstin.substring(2, 12);
  const entityNumber = cleanGstin[12];
  const providedCheckChar = cleanGstin[14];

  // Luhn Mod-36 Checksum Calculation
  let factor = 2;
  let sum = 0;
  const checkChars = cleanGstin.substring(0, 14);

  for (let i = checkChars.length - 1; i >= 0; i--) {
    const codePoint = MOD36_CHARS.indexOf(checkChars[i]);
    if (codePoint === -1) {
      return { isValid: false, checksumValid: false, error: `Invalid character '${checkChars[i]}'` };
    }

    let addend = factor * codePoint;
    factor = factor === 2 ? 1 : 2;

    addend = Math.floor(addend / 36) + (addend % 36);
    sum += addend;
  }

  const remainder = sum % 36;
  const checkCodePoint = (36 - remainder) % 36;
  const calculatedCheckChar = MOD36_CHARS[checkCodePoint];

  const checksumValid = calculatedCheckChar === providedCheckChar;

  return {
    isValid: checksumValid,
    stateCode,
    stateName,
    pan,
    entityNumber,
    checksumValid,
    calculatedCheckChar,
    error: checksumValid
      ? undefined
      : `Checksum mismatch: expected '${calculatedCheckChar}', received '${providedCheckChar}'`,
  };
}

// 2. European Union VAT Validation Regexes (27 Member States)
export const EU_VAT_REGEX: Record<string, RegExp> = {
  AT: /^ATU[0-9]{8}$/, // Austria
  BE: /^BE[0-1][0-9]{9}$/, // Belgium
  BG: /^BG[0-9]{9,10}$/, // Bulgaria
  CY: /^CY[0-9]{8}[A-Z]$/, // Cyprus
  CZ: /^CZ[0-9]{8,10}$/, // Czech Republic
  DE: /^DE[0-9]{9}$/, // Germany
  DK: /^DK[0-9]{8}$/, // Denmark
  EE: /^EE[0-9]{9}$/, // Estonia
  EL: /^EL[0-9]{9}$/, // Greece
  ES: /^ES[A-Z0-9][0-9]{7}[A-Z0-9]$/, // Spain
  FI: /^FI[0-9]{8}$/, // Finland
  FR: /^FR[A-Z0-9]{2}[0-9]{9}$/, // France
  HR: /^HR[0-9]{11}$/, // Croatia
  HU: /^HU[0-9]{8}$/, // Hungary
  IE: /^IE([0-9]{7}[A-W]|([0-9][A-Z][0-9]{5}[A-W])|([0-9]{7}[A-W][A-I]))$/, // Ireland
  IT: /^IT[0-9]{11}$/, // Italy
  LT: /^LT([0-9]{9}|[0-9]{12})$/, // Lithuania
  LU: /^LU[0-9]{8}$/, // Luxembourg
  LV: /^LV[0-9]{11}$/, // Latvia
  MT: /^MT[0-9]{8}$/, // Malta
  NL: /^NL[0-9]{9}B[0-9]{2}$/, // Netherlands
  PL: /^PL[0-9]{10}$/, // Poland
  PT: /^PT[0-9]{9}$/, // Portugal
  RO: /^RO[0-9]{2,10}$/, // Romania
  SE: /^SE[0-9]{12}$/, // Sweden
  SI: /^SI[0-9]{8}$/, // Slovenia
  SK: /^SK[0-9]{10}$/, // Slovakia
};

export function validateEUVAT(vatNumber: string): {
  isValid: boolean;
  countryCode?: string;
  numberOnly?: string;
  error?: string;
} {
  const clean = vatNumber.trim().toUpperCase().replace(/[\s.-]/g, "");
  if (clean.length < 4) {
    return { isValid: false, error: "VAT number too short" };
  }

  const countryCode = clean.substring(0, 2);
  const regex = EU_VAT_REGEX[countryCode];

  if (!regex) {
    return {
      isValid: false,
      countryCode,
      error: `Unknown or non-EU country prefix: '${countryCode}'`,
    };
  }

  const matches = regex.test(clean);
  return {
    isValid: matches,
    countryCode,
    numberOnly: clean.substring(2),
    error: matches ? undefined : `Invalid EU VAT syntax for member state '${countryCode}'`,
  };
}

// 3. United Kingdom VAT Validation (GB + 9 or 12 digits)
export function validateUKVAT(vatNumber: string): {
  isValid: boolean;
  countryCode: string;
  error?: string;
} {
  const clean = vatNumber.trim().toUpperCase().replace(/[\s.-]/g, "");
  const gbRegex = /^GB([0-9]{9}|[0-9]{12}|(GD|HA)[0-9]{3})$/;

  if (!gbRegex.test(clean)) {
    return { isValid: false, countryCode: "GB", error: "Invalid UK VAT format (expected GB + 9/12 digits)" };
  }

  // Check 9-digit standard modulus 97 check
  if (/^GB[0-9]{9}$/.test(clean)) {
    const digits = clean.substring(2).split("").map(Number);
    const weights = [8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 7; i++) {
      sum += digits[i] * weights[i];
    }
    const checkDigits = digits[7] * 10 + digits[8];
    const remainder = (sum + checkDigits) % 97;
    const isValidMod97 = remainder === 0 || remainder === 55;
    return {
      isValid: isValidMod97,
      countryCode: "GB",
      error: isValidMod97 ? undefined : "UK VAT modulus 97 checksum failure",
    };
  }

  return { isValid: true, countryCode: "GB" };
}

// 4. US Employer Identification Number (EIN) validation (9 digits: XX-XXXXXXX)
const US_IRS_CAMPUS_PREFIXES = new Set([
  "01", "02", "03", "04", "05", "06", "11", "12", "13", "14", "16", "21", "22", "23", "25",
  "34", "51", "52", "54", "55", "56", "57", "58", "59", "65", "10", "12", "60", "67", "50",
  "53", "07", "08", "09", "17", "18", "19", "20", "26", "27", "45", "46", "47", "81", "82",
  "83", "84", "85", "86", "87", "88", "90", "91", "92", "93", "98", "99"
]);

export function validateUSEIN(ein: string): {
  isValid: boolean;
  cleanEin: string;
  campusPrefix?: string;
  error?: string;
} {
  const clean = ein.trim().replace(/[\s-]/g, "");
  if (!/^[0-9]{9}$/.test(clean)) {
    return {
      isValid: false,
      cleanEin: clean,
      error: "US EIN must be exactly 9 numeric digits (XX-XXXXXXX)",
    };
  }

  const prefix = clean.substring(0, 2);
  const isValidCampus = US_IRS_CAMPUS_PREFIXES.has(prefix);

  return {
    isValid: isValidCampus,
    cleanEin: `${prefix}-${clean.substring(2)}`,
    campusPrefix: prefix,
    error: isValidCampus ? undefined : `Invalid IRS campus assignment prefix: '${prefix}'`,
  };
}

/**
 * Universal Tax ID Dispatcher: Automatically identifies and validates tax numbers worldwide
 */
export function validateUniversalTaxId(taxId: string, hint?: string) {
  const clean = taxId.trim().toUpperCase().replace(/[\s.-]/g, "");

  // Hint overrides
  if (hint === "GSTIN" || /^[0-9]{2}[A-Z]{5}/.test(clean)) {
    return {
      taxType: "GSTIN",
      jurisdiction: "India",
      ...validateGSTIN(clean),
    };
  }

  if (clean.startsWith("GB") || hint === "UK_VAT") {
    return {
      taxType: "UK_VAT",
      jurisdiction: "United Kingdom",
      ...validateUKVAT(clean),
    };
  }

  if (hint === "US_EIN" || (/^[0-9]{9}$/.test(clean) && !hint)) {
    return {
      taxType: "US_EIN",
      jurisdiction: "United States",
      ...validateUSEIN(clean),
    };
  }

  // Try EU VAT
  const euPrefix = clean.substring(0, 2);
  if (EU_VAT_REGEX[euPrefix] || hint === "EU_VAT") {
    return {
      taxType: "EU_VAT",
      jurisdiction: `European Union (${euPrefix})`,
      ...validateEUVAT(clean),
    };
  }

  return {
    taxType: "UNKNOWN",
    jurisdiction: "Global",
    isValid: false,
    error: `Unrecognized tax format: '${taxId}'. Supported: Indian GSTIN, EU VAT, UK VAT, US EIN.`,
  };
}
