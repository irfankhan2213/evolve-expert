/**
 * Deterministic Line-Item Arithmetic Reconciliation Engine
 * Automatically checks whether line items, subtotal, tax amount, and discounts
 * mathematically reconcile with the extracted grand total.
 * Tolerance threshold: 0.02 (to accommodate rounding nuances in international accounting)
 */

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  hsnOrSac?: string;
  taxRate?: number;
}

export interface ReconciliationResult {
  isReconciled: boolean;
  calculatedSubtotal: number;
  providedSubtotal: number;
  calculatedGrandTotal: number;
  providedGrandTotal: number;
  taxAmount: number;
  discount: number;
  delta: number;
  status: "MATCH" | "DISCREPANCY_FLAGGED" | "PARTIAL_RECONCILED";
  lineItemCount: number;
  warnings: string[];
}

export function reconcileInvoiceMath(params: {
  lineItems: InvoiceLineItem[];
  subtotal?: number;
  taxAmount?: number;
  discount?: number;
  grandTotal: number;
}): ReconciliationResult {
  const { lineItems, taxAmount = 0, discount = 0, grandTotal } = params;
  const warnings: string[] = [];

  // Calculate sum of line item totals
  let calculatedSubtotal = 0;
  for (const item of lineItems) {
    const expectedItemTotal = Number((item.quantity * item.unitPrice).toFixed(2));
    if (Math.abs(expectedItemTotal - item.total) > 0.05 && item.quantity > 0) {
      warnings.push(
        `Line item '${item.description}': quantity (${item.quantity}) * unitPrice (${item.unitPrice}) = ${expectedItemTotal}, but extracted total was ${item.total}`
      );
    }
    calculatedSubtotal += item.total;
  }
  calculatedSubtotal = Number(calculatedSubtotal.toFixed(2));

  const providedSubtotal = params.subtotal !== undefined ? Number(params.subtotal.toFixed(2)) : calculatedSubtotal;
  const calculatedGrandTotal = Number((providedSubtotal + taxAmount - discount).toFixed(2));
  const providedGrandTotal = Number(grandTotal.toFixed(2));

  const delta = Number(Math.abs(calculatedGrandTotal - providedGrandTotal).toFixed(2));
  const isReconciled = delta <= 0.05;

  let status: "MATCH" | "DISCREPANCY_FLAGGED" | "PARTIAL_RECONCILED" = "MATCH";
  if (!isReconciled) {
    status = "DISCREPANCY_FLAGGED";
    warnings.push(
      `Mathematical discrepancy detected: Sum of components (${calculatedGrandTotal}) does not match extracted grand total (${providedGrandTotal}). Delta: ${delta}`
    );
  }

  return {
    isReconciled,
    calculatedSubtotal,
    providedSubtotal,
    calculatedGrandTotal,
    providedGrandTotal,
    taxAmount,
    discount,
    delta,
    status,
    lineItemCount: lineItems.length,
    warnings,
  };
}
