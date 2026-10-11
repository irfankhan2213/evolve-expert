'use client';

import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle,
  Copy,
  Download,
  Loader2,
  Table,
  Code,
  Building,
  Calendar,
  CreditCard,
  Percent,
  Receipt,
  FileSpreadsheet,
} from 'lucide-react';
import { ExtractedInvoiceData } from '@/types';

interface LiveExtractorProps {
  freeScansLeft: number;
  onScanUsed: () => void;
  onOutOfCredits: () => void;
}

export const LiveExtractor: React.FC<LiveExtractorProps> = ({
  freeScansLeft,
  onScanUsed,
  onOutOfCredits,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedInvoiceData | null>(null);
  const [activeTab, setActiveTab] = useState<'table' | 'json'>('table');
  const [copied, setCopied] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample templates for instant testing
  const sampleDocuments = [
    {
      title: 'CloudScale Infra Invoice',
      subtitle: 'B2B Tech Infrastructure',
      type: 'invoice',
      hint: 'INV-2026-904',
    },
    {
      title: 'Apex Creative Studio Bill',
      subtitle: 'Design & Marketing Services',
      type: 'invoice',
      hint: 'INV-2026-382',
    },
    {
      title: 'Enterprise Software License',
      subtitle: 'Annual SaaS Subscription',
      type: 'bill',
      hint: 'INV-2026-118',
    },
  ];

  const handleProcessDocument = async (file?: File, sampleHint?: string) => {
    if (freeScansLeft <= 0) {
      onOutOfCredits();
      return;
    }

    setIsLoading(true);
    setCopied(false);

    try {
      let body: any = {};
      let headers: any = { 'Content-Type': 'application/json' };

      if (file) {
        setSelectedFileName(file.name);
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
        });
        reader.readAsDataURL(file);
        const base64 = await base64Promise;
        body = {
          image: base64,
          mimeType: file.type || 'image/png',
          documentTypeHint: 'invoice',
        };
      } else {
        setSelectedFileName(sampleHint || 'Sample Invoice');
        body = {
          documentTypeHint: 'invoice',
          sampleName: sampleHint,
        };
      }

      const res = await fetch('/api/v1/extract', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setExtractedData(json.data);
        onScanUsed();
      } else {
        alert(json.error || 'Failed to process document');
      }
    } catch (err: any) {
      alert('Error extracting document: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessDocument(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProcessDocument(e.target.files[0]);
    }
  };

  const copyJson = () => {
    if (!extractedData) return;
    navigator.clipboard.writeText(JSON.stringify(extractedData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCsv = () => {
    if (!extractedData) return;
    const headers = [
      'Invoice Number',
      'Date',
      'Vendor Name',
      'Vendor GSTIN',
      'Customer Name',
      'Item Description',
      'Quantity',
      'Unit Price',
      'Tax Rate (%)',
      'Item Amount',
      'Subtotal',
      'Tax Amount',
      'Total Amount',
      'Currency',
    ];

    const rows = extractedData.line_items.map((item) => [
      `"${extractedData.invoice_number}"`,
      `"${extractedData.invoice_date}"`,
      `"${extractedData.vendor.name}"`,
      `"${extractedData.vendor.tax_id_gstin || ''}"`,
      `"${extractedData.customer.name || ''}"`,
      `"${item.description.replace(/"/g, '""')}"`,
      item.quantity,
      item.unit_price,
      item.tax_rate || 0,
      item.amount,
      extractedData.financials.subtotal,
      extractedData.financials.tax_amount,
      extractedData.financials.total_amount,
      `"${extractedData.financials.currency}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${extractedData.invoice_number || 'invoice'}_extracted.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="demo" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Interactive Live Document Extractor
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Upload any PDF or image receipt, or click one of the pre-loaded samples below to test instant OCR parsing.
        </p>
      </div>

      {/* Upload Zone & Samples */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Upload Dropzone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`lg:col-span-2 border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20'
              : 'border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 bg-zinc-50/50 dark:bg-zinc-900/40'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,application/pdf"
            className="hidden"
          />

          <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-inner">
            {isLoading ? (
              <Loader2 className="w-8 h-8 animate-spin" />
            ) : (
              <UploadCloud className="w-8 h-8" />
            )}
          </div>

          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {isLoading ? 'Processing Document with Vision AI...' : 'Drop your invoice or receipt here'}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
            Supports PDF, JPG, PNG, WEBP. Automatic OCR & GST extraction.
          </p>

          <button
            type="button"
            className="mt-5 inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-200 shadow-sm hover:bg-zinc-50"
          >
            <FileText className="w-4 h-4 text-indigo-500" />
            <span>Select File from Computer</span>
          </button>
        </div>

        {/* Quick Sample Selector */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
              <Receipt className="w-4 h-4" />
              <span>Instant Test Samples</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
              Don&apos;t have an invoice handy? Test our AI engine with one click:
            </p>

            <div className="space-y-2.5">
              {sampleDocuments.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleProcessDocument(undefined, sample.title)}
                  disabled={isLoading}
                  className="w-full text-left p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {sample.title}
                    </p>
                    <p className="text-xs text-zinc-500">{sample.subtitle}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
                    Run
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <span>Free Quota</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {freeScansLeft} Scans Remaining
            </span>
          </div>
        </div>
      </div>

      {/* Results Workspace */}
      {extractedData && (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md overflow-hidden transition-all">
          {/* Results Action Bar */}
          <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Extracted in {extractedData.processing_time_ms}ms</span>
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                Source: {selectedFileName}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Tab toggles */}
              <div className="flex bg-zinc-200/70 dark:bg-zinc-800 p-0.5 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setActiveTab('table')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'table'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Formatted Table</span>
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'json'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Raw JSON</span>
                </button>
              </div>

              {/* Export Buttons */}
              <button
                onClick={downloadCsv}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Export CSV/Excel</span>
              </button>

              <button
                onClick={copyJson}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
              </button>
            </div>
          </div>

          {/* Table Tab View */}
          {activeTab === 'table' && (
            <div className="p-6 space-y-6">
              {/* Header Cards: Vendor & Customer & Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 mb-2">
                    <Building className="w-4 h-4 text-blue-500" />
                    <span>Vendor Details</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    {extractedData.vendor.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{extractedData.vendor.address}</p>
                  {extractedData.vendor.tax_id_gstin && (
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-2 font-medium">
                      GSTIN: {extractedData.vendor.tax_id_gstin}
                    </p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 mb-2">
                    <Building className="w-4 h-4 text-purple-500" />
                    <span>Billed To (Customer)</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    {extractedData.customer.name || 'Not Specified'}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{extractedData.customer.address}</p>
                  {extractedData.customer.tax_id_gstin && (
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-2 font-medium">
                      GSTIN: {extractedData.customer.tax_id_gstin}
                    </p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    <span>Invoice Metadata</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Invoice No:</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-white">
                        {extractedData.invoice_number}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Date:</span>
                      <span className="text-zinc-900 dark:text-white">{extractedData.invoice_date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Due Date:</span>
                      <span className="text-zinc-900 dark:text-white">{extractedData.due_date || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-left text-xs sm:text-sm">
                  <thead className="bg-zinc-50 dark:bg-zinc-950/50 text-zinc-500 font-semibold">
                    <tr>
                      <th className="py-3 px-4">Description</th>
                      <th className="py-3 px-4 text-center">Qty</th>
                      <th className="py-3 px-4 text-right">Unit Price</th>
                      <th className="py-3 px-4 text-center">Tax (%)</th>
                      <th className="py-3 px-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
                    {extractedData.line_items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                        <td className="py-3 px-4 font-medium text-zinc-800 dark:text-zinc-200">
                          {item.description}
                        </td>
                        <td className="py-3 px-4 text-center text-zinc-600 dark:text-zinc-400">
                          {item.quantity}
                        </td>
                        <td className="py-3 px-4 text-right text-zinc-600 dark:text-zinc-400 font-mono">
                          {item.unit_price.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center text-zinc-600 dark:text-zinc-400">
                          {item.tax_rate ?? 18}%
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-zinc-900 dark:text-white font-mono">
                          {item.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Financial Summary & Payment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800 text-xs space-y-1.5">
                  <div className="flex items-center space-x-2 font-semibold text-zinc-500 mb-2">
                    <CreditCard className="w-4 h-4 text-indigo-500" />
                    <span>Payment & Banking Details</span>
                  </div>
                  <p><span className="text-zinc-500">Method:</span> <span className="font-medium text-zinc-800 dark:text-zinc-200">{extractedData.payment_info.method}</span></p>
                  <p><span className="text-zinc-500">Bank Details:</span> <span className="font-mono text-zinc-800 dark:text-zinc-200">{extractedData.payment_info.bank_account}</span></p>
                  {extractedData.payment_info.upi_id && (
                    <p><span className="text-zinc-500">UPI ID:</span> <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{extractedData.payment_info.upi_id}</span></p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800 space-y-2 text-sm">
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Subtotal:</span>
                    <span className="font-mono">{extractedData.financials.currency} {extractedData.financials.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Estimated Tax / GST:</span>
                    <span className="font-mono">{extractedData.financials.currency} {extractedData.financials.tax_amount.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between font-bold text-base text-zinc-900 dark:text-white">
                    <span>Total Amount:</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">
                      {extractedData.financials.currency} {extractedData.financials.total_amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* JSON Tab View */}
          {activeTab === 'json' && (
            <div className="p-4">
              <pre className="p-4 rounded-xl bg-zinc-950 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[500px] border border-zinc-800 leading-relaxed">
                {JSON.stringify(extractedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
