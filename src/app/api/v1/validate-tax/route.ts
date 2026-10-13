import { NextRequest, NextResponse } from "next/server";
import { validateUniversalTaxId } from "@/lib/tax-validation";

/**
 * POST /api/v1/validate-tax
 * Universal Tax Identifier Validation Endpoint (India GSTIN Mod-36, EU VAT, UK VAT, US EIN)
 */
export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await req.json();
    const { taxId, hint, country } = body;

    if (!taxId || typeof taxId !== "string" || taxId.trim().length === 0) {
      return NextResponse.json(
        {
          type: "https://evolveexpert.com/errors/invalid-parameters",
          title: "Missing Required Parameter",
          status: 400,
          detail: "The 'taxId' field is required and must be a non-empty string.",
          instance: req.nextUrl.pathname,
        },
        { status: 400 }
      );
    }

    const result = validateUniversalTaxId(taxId, hint || country);
    const latencyMs = Date.now() - startTime;

    return NextResponse.json(
      {
        success: true,
        data: {
          inputTaxId: taxId,
          ...result,
        },
        meta: {
          processingTimeMs: latencyMs,
          timestamp: new Date().toISOString(),
          version: "v1.2.0",
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Requests-Limit": "1000",
          "X-RateLimit-Requests-Remaining": "999",
          "X-Execution-Time-Ms": latencyMs.toString(),
        },
      }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      {
        type: "https://evolveexpert.com/errors/internal-error",
        title: "Tax Validation Engine Error",
        status: 500,
        detail: errorMessage,
        instance: req.nextUrl.pathname,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const taxId = req.nextUrl.searchParams.get("taxId");
  const hint = req.nextUrl.searchParams.get("hint") || undefined;

  if (!taxId) {
    return NextResponse.json(
      {
        service: "EvolveExpert Universal Tax Validation API",
        version: "v1.2.0",
        usage: "Send POST with { taxId: '27AAPFU0939F1ZV' } or GET ?taxId=...",
        supportedJurisdictions: ["India (GSTIN Luhn Mod-36)", "European Union (27 Member States)", "United Kingdom (Mod-97)", "United States (IRS EIN)"],
        documentation: "https://evolveexpert.com/docs",
      },
      { status: 200 }
    );
  }

  const result = validateUniversalTaxId(taxId, hint);
  return NextResponse.json({
    success: true,
    data: { inputTaxId: taxId, ...result },
    meta: { timestamp: new Date().toISOString() },
  });
}
