export interface InvoiceLineItem {
  description: string;
  quantity: number;
  unit_price: number;
  tax_rate?: number;
  amount: number;
}

export interface ExtractedInvoiceData {
  document_type: 'invoice' | 'receipt' | 'bill' | 'purchase_order' | 'unknown';
  invoice_number: string;
  invoice_date: string;
  due_date?: string;
  vendor: {
    name: string;
    address?: string;
    tax_id_gstin?: string;
    email?: string;
    phone?: string;
    website?: string;
  };
  customer: {
    name?: string;
    address?: string;
    tax_id_gstin?: string;
    email?: string;
  };
  line_items: InvoiceLineItem[];
  financials: {
    subtotal: number;
    tax_amount: number;
    discount?: number;
    total_amount: number;
    currency: string;
  };
  payment_info: {
    method?: string;
    bank_account?: string;
    upi_id?: string;
    payment_terms?: string;
    payment_status?: 'paid' | 'unpaid' | 'pending';
  };
  confidence_score: number;
  processing_time_ms: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceInInr: number;
  priceInUsd: number;
  credits: number;
  isPopular?: boolean;
  features: string[];
}
