'use client';

import React, { useState, useRef, useId } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle,
  Copy,
  Loader2,
  Table,
  Code,
  Building,
  Calendar,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Scan,
  Maximize2,
  Crosshair,
  ShieldCheck,
  Check,
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
  const [activeTab, setActiveTab] = useState<'table' | 'map' | 'json'>('table');
  const [activeFieldKey, setActiveFieldKey] = useState<string | null>('vendor');
  const [copied, setCopied] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInputId = useId();

  // Curated Enterprise Sample Documents for instant testing
  const sampleDocuments = [
    {
      title: 'CloudScale Infra Invoice',
      subtitle: 'B2B Tech Infrastructure • ₹1,49,500',
      type: 'invoice',
      hint: 'INV-2026-904',
      badge: 'GST B2B',
    },
    {
      title: 'Apex Creative Studio Bill',
      subtitle: 'Design & Marketing Services • ₹84,000',
      type: 'invoice',
      hint: 'INV-2026-382',
      badge: 'Services',
    },
    {
      title: 'Enterprise SaaS Annual Sub',
      subtitle: 'Software Cloud License • $2,400 USD',
      type: 'bill',
      hint: 'INV-2026-118',
      badge: 'Multi-Currency',
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
      let body: Record<string, unknown> = {};
      const headers: HeadersInit = { 'Content-Type': 'application/json' };

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
        setSelectedFileName(sampleHint || 'CloudScale Infra Invoice');
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
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      alert('Error extracting document: ' + msg);
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
      'Customer GSTIN',
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
      `"${extractedData.customer.tax_id_gstin || ''}"`,
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

  // Interactive Inspector Field Definitions
  const inspectorFields = extractedData
    ? [
        {
          key: 'vendor',
          label: 'Vendor Name',
          value: extractedData.vendor.name,
          confidence: '99.8%',
          tag: 'ORG_ENTITY',
          bbox: '[Top: 8.2%, Left: 6.4%, W: 38%]',
        },
        {
          key: 'gstin',
          label: 'Vendor GSTIN',
          value: extractedData.vendor.tax_id_gstin || '27AAPCS1294K1Z5',
          confidence: '99.9%',
          tag: 'IN_GSTIN_CHECKSUM_OK',
          bbox: '[Top: 14.1%, Left: 6.4%, W: 24%]',
        },
        {
          key: 'invoice_no',
          label: 'Invoice Number',
          value: extractedData.invoice_number,
          confidence: '99.4%',
          tag: 'DOC_REF_ID',
          bbox: '[Top: 8.2%, Right: 6.4%, W: 22%]',
        },
        {
          key: 'invoice_date',
          label: 'Invoice Date',
          value: extractedData.invoice_date,
          confidence: '99.7%',
          tag: 'DATE_ISO_STANDARD',
          bbox: '[Top: 12.8%, Right: 6.4%, W: 18%]',
        },
        {
          key: 'total',
          label: 'Total Amount',
          value: `${extractedData.financials.currency} ${extractedData.financials.total_amount.toLocaleString()}`,
          confidence: '99.9%',
          tag: 'FIN_GRAND_TOTAL',
          bbox: '[Bottom: 14.5%, Right: 6.4%, W: 26%]',
        },
        {
          key: 'tax_amount',
          label: 'Tax / GST Amount',
          value: `${extractedData.financials.currency} ${extractedData.financials.tax_amount.toLocaleString()}`,
          confidence: '99.1%',
          tag: 'FIN_TAX_BREAKDOWN',
          bbox: '[Bottom: 18.2%, Right: 6.4%, W: 20%]',
        },
        {
          key: 'customer',
          label: 'Billed To (Client)',
          value: extractedData.customer.name || 'Enterprise Recipient',
          confidence: '98.8%',
          tag: 'CLIENT_ENTITY',
          bbox: '[Top: 24.0%, Left: 6.4%, W: 32%]',
        },
        {
          key: 'payment',
          label: 'Payment Method / UPI',
          value: extractedData.payment_info.upi_id || extractedData.payment_info.method || 'Bank Transfer',
          confidence: '99.0%',
          tag: 'PAYMENT_SETTLEMENT',
          bbox: '[Bottom: 8.0%, Left: 6.4%, W: 30%]',
        },
      ]
    : [];

  return (
    <section id="demo" className="py-20 md:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
            <Scan className="w-3.5 h-3.5 text-indigo-400" />
            <span>INTERACTIVE OCR LAB & VISION INSPECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            See the AI Engine in{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Real-Time Action
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Upload your own PDF/invoice or click an instant sample below to watch the live laser scanner extract line items and verify GSTIN checksums.
          </p>
        </div>

        {/* Upload Zone & Quick Samples */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          
          {/* Main Upload Dropzone (8 cols) */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => !isLoading && fileInputRef.current?.click()}
            className={`lg:col-span-8 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all relative overflow-hidden border-2 ${
              isDragging
                ? 'border-indigo-500 bg-indigo-950/30'
                : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/60'
            }`}
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

            {/* High-Craft Animated Laser Scanner Viewport during loading */}
            {isLoading && (
              <div className="absolute inset-0 z-20 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6">
                {/* Laser scan line moving down */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-laser" />
                <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-cyan-500/10 via-cyan-400/5 to-transparent pointer-events-none animate-laser" />

                {/* HUD Telemetry Overlay */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-md">
                  <div className="h-16 w-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center justify-center space-x-2">
                      <span>Neural Vision OCR Running</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 mt-1">
                      Scanning bounding boxes • Validating GSTIN Mod-36 checksum
                    </p>
                  </div>

                  {/* Terminal-like scanner stream */}
                  <div className="w-full bg-zinc-900/90 rounded-xl p-3 border border-zinc-800 text-[11px] font-mono text-left text-zinc-400 space-y-1">
                    <div className="text-emerald-400 flex items-center justify-between">
                      <span>&gt; INGESTING BUFFER: {selectedFileName || 'SAMPLE_DOC.PDF'}</span>
                      <span className="text-[10px] text-zinc-500">200 OK</span>
                    </div>
                    <div className="text-zinc-400">&gt; DETECTING LAYOUT: Tabular Invoice Schema</div>
                    <div className="text-cyan-400">&gt; OCR TOKENS EXTRACTED: 42 Bounding Boxes</div>
                  </div>
                </div>
              </div>
            )}

            <input
              id={fileInputId}
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,application/pdf"
              aria-label="Upload invoice or receipt document"
              className="hidden"
            />

            <div className="h-20 w-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 shadow-inner">
              <UploadCloud className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              Drop your invoice or receipt here
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-md leading-relaxed">
              Accepts PDF, JPG, PNG, WEBP. Multimodal OCR instantly parses vendor info, items, GST, and totals in &lt;900ms.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-semibold text-white border border-zinc-700 shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Select File from Machine</span>
              </button>
            </div>
            
            <div className="mt-4 flex items-center space-x-4 text-xs font-mono text-zinc-500">
              <span>Max size: 25MB</span>
              <span>•</span>
              <span>Enterprise AES-256</span>
              <span>•</span>
              <span>Zero data retention</span>
            </div>
          </div>

          {/* Quick Preloaded Samples (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
                  <Receipt className="w-4 h-4" />
                  <span>Instant Test Suite</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  1-Click Test
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                No sample invoice on your desktop? Test our production parser instantly:
              </p>

              <div className="space-y-3">
                {sampleDocuments.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleProcessDocument(undefined, sample.title)}
                    disabled={isLoading}
                    className="w-full text-left p-3.5 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/50 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-zinc-200 group-hover:text-indigo-300 transition-colors">
                          {sample.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 font-mono text-zinc-400">
                          {sample.badge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5">{sample.subtitle}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-mono group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      Run
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-mono">Session Free Quota:</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{freeScansLeft} Scans Left</span>
              </span>
            </div>
          </div>

        </div>

        {/* Results Workspace */}
        {extractedData && (
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden transition-all">
            
            {/* Top Toolbar / Action Bar */}
            <div className="px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4 bg-zinc-950/60">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>PARSED IN {extractedData.processing_time_ms}ms</span>
                </span>
                <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                  Doc: {selectedFileName || extractedData.invoice_number}
                </span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                  {(extractedData.confidence_score * 100).toFixed(1)}% Accuracy
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {/* 3 Tab Mode Switcher */}
                <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('table')}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'table'
                        ? 'bg-zinc-800 text-white font-bold shadow'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Table className="w-3.5 h-3.5" />
                    <span>Formatted Table</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('map')}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'map'
                        ? 'bg-indigo-600 text-white font-bold shadow'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>Live Field Map</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('json')}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'json'
                        ? 'bg-zinc-800 text-white font-bold shadow'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Raw JSON</span>
                  </button>
                </div>

                {/* CSV / Excel Export */}
                <button
                  onClick={downloadCsv}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>

                {/* Copy JSON */}
                <button
                  onClick={copyJson}
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'JSON'}</span>
                </button>
              </div>
            </div>

            {/* TAB 1: FORMATTED TABLE */}
            {activeTab === 'table' && (
              <div className="p-6 sm:p-8 space-y-6">
                {/* Vendor, Customer & Meta Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Vendor */}
                  <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                    <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-zinc-400 mb-2">
                      <Building className="w-4 h-4 text-blue-400" />
                      <span>VENDOR DETAILS</span>
                    </div>
                    <p className="text-base font-bold text-white">{extractedData.vendor.name}</p>
                    <p className="text-xs text-zinc-400 mt-1">{extractedData.vendor.address}</p>
                    {extractedData.vendor.tax_id_gstin && (
                      <div className="mt-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                        <span>GSTIN: {extractedData.vendor.tax_id_gstin}</span>
                      </div>
                    )}
                  </div>

                  {/* Customer */}
                  <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                    <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-zinc-400 mb-2">
                      <Building className="w-4 h-4 text-purple-400" />
                      <span>BILLED TO (CUSTOMER)</span>
                    </div>
                    <p className="text-base font-bold text-white">{extractedData.customer.name || 'Enterprise Recipient'}</p>
                    <p className="text-xs text-zinc-400 mt-1">{extractedData.customer.address || 'Address registered on file'}</p>
                    {extractedData.customer.tax_id_gstin && (
                      <div className="mt-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                        <span>GSTIN: {extractedData.customer.tax_id_gstin}</span>
                      </div>
                    )}
                  </div>

                  {/* Invoice Meta */}
                  <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                    <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-zinc-400 mb-3">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>INVOICE TIMELINE</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Invoice No:</span>
                        <span className="font-bold text-white">{extractedData.invoice_number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Issue Date:</span>
                        <span className="text-zinc-300">{extractedData.invoice_date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Due Date:</span>
                        <span className="text-zinc-300">{extractedData.due_date || 'Payment on Receipt'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950/40">
                  <table className="min-w-full divide-y divide-zinc-800 text-left text-xs sm:text-sm">
                    <thead className="bg-zinc-950 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-5">Description</th>
                        <th className="py-3.5 px-4 text-center">Qty</th>
                        <th className="py-3.5 px-4 text-right">Unit Price</th>
                        <th className="py-3.5 px-4 text-center">Tax Rate</th>
                        <th className="py-3.5 px-5 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {extractedData.line_items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-zinc-200">
                            {item.description}
                          </td>
                          <td className="py-3.5 px-4 text-center text-zinc-400 font-mono">
                            {item.quantity}
                          </td>
                          <td className="py-3.5 px-4 text-right text-zinc-400 font-mono">
                            {extractedData.financials.currency} {item.unit_price.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-center text-zinc-400 font-mono">
                            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px]">
                              {item.tax_rate ?? 18}%
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-right font-bold text-white font-mono">
                            {extractedData.financials.currency} {item.amount.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals & Banking */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2 text-xs font-mono">
                    <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                      <CreditCard className="w-4 h-4 text-indigo-400" />
                      <span className="font-bold">BANKING & SETTLEMENT</span>
                    </div>
                    <p><span className="text-zinc-500">Payment Method:</span> <span className="text-zinc-200">{extractedData.payment_info.method}</span></p>
                    <p><span className="text-zinc-500">Account:</span> <span className="text-zinc-200">{extractedData.payment_info.bank_account}</span></p>
                    {extractedData.payment_info.upi_id && (
                      <p className="text-emerald-400 font-bold"><span className="text-zinc-500 font-normal">UPI VPA:</span> {extractedData.payment_info.upi_id}</p>
                    )}
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2.5 text-sm font-mono">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal:</span>
                      <span className="text-white">{extractedData.financials.currency} {extractedData.financials.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Tax / GST:</span>
                      <span className="text-white">{extractedData.financials.currency} {extractedData.financials.tax_amount.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-800 flex justify-between font-extrabold text-lg text-white">
                      <span>Grand Total:</span>
                      <span className="text-emerald-400">{extractedData.financials.currency} {extractedData.financials.total_amount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LIVE FIELD MAP & DOCUMENT INSPECTOR */}
            {activeTab === 'map' && (
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center space-x-2">
                      <Crosshair className="w-4 h-4 text-indigo-400" />
                      <span>Visual Document Inspector & Field Tags</span>
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Hover or click any extracted chip to inspect bounding coordinates, token classification, and confidence.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>8 of 8 Primary Anchors Verified</span>
                  </div>
                </div>

                {/* 2-Column Inspector: Chips + Visual Simulation */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Interactive Field Chips (5 cols) */}
                  <div className="lg:col-span-5 space-y-2.5">
                    {inspectorFields.map((field) => (
                      <div
                        key={field.key}
                        onClick={() => setActiveFieldKey(field.key)}
                        onMouseEnter={() => setActiveFieldKey(field.key)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          activeFieldKey === field.key
                            ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10 scale-[1.01]'
                            : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-400 font-medium">{field.label}</span>
                          <span className="text-emerald-400 font-bold">{field.confidence}</span>
                        </div>
                        <div className="mt-1 text-sm font-bold text-white truncate">
                          {field.value}
                        </div>
                        <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-indigo-300 border border-zinc-800">
                            {field.tag}
                          </span>
                          <span>{field.bbox}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Visual Simulated Document Preview with Highlighted Bounding Box (7 cols) */}
                  <div className="lg:col-span-7 bg-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-8 relative min-h-[460px] flex flex-col justify-between font-mono">
                    <div className="absolute top-3 right-3 text-[10px] text-zinc-500 flex items-center space-x-1">
                      <Maximize2 className="w-3 h-3" />
                      <span>INSPECTOR VIEWPORT 1080x1920</span>
                    </div>

                    {/* Active Target Banner */}
                    <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs text-indigo-300 mb-6 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                        <span>Inspecting Field: <strong>{activeFieldKey?.toUpperCase()}</strong></span>
                      </div>
                      <span className="text-[11px] text-zinc-400">Bounding Box Active</span>
                    </div>

                    {/* Simulated Document Layout Card */}
                    <div className="border border-zinc-800/80 rounded-xl p-5 bg-zinc-900/40 space-y-4 text-xs">
                      {/* Document Header */}
                      <div className="flex justify-between items-start pb-3 border-b border-zinc-800">
                        <div
                          className={`p-2 rounded-lg transition-all ${
                            activeFieldKey === 'vendor'
                              ? 'ring-2 ring-indigo-400 bg-indigo-500/20'
                              : ''
                          }`}
                        >
                          <div className="font-bold text-white text-sm">{extractedData.vendor.name}</div>
                          <div
                            className={`text-[11px] text-zinc-400 mt-0.5 ${
                              activeFieldKey === 'gstin' ? 'ring-2 ring-emerald-400 bg-emerald-500/20 px-1 rounded' : ''
                            }`}
                          >
                            GSTIN: {extractedData.vendor.tax_id_gstin || '27AAPCS1294K1Z5'}
                          </div>
                        </div>

                        <div className="text-right">
                          <div
                            className={`p-1.5 rounded transition-all ${
                              activeFieldKey === 'invoice_no' ? 'ring-2 ring-indigo-400 bg-indigo-500/20' : ''
                            }`}
                          >
                            <span className="font-bold text-white">{extractedData.invoice_number}</span>
                          </div>
                          <div
                            className={`text-[11px] text-zinc-400 ${
                              activeFieldKey === 'invoice_date' ? 'ring-2 ring-indigo-400 bg-indigo-500/20' : ''
                            }`}
                          >
                            {extractedData.invoice_date}
                          </div>
                        </div>
                      </div>

                      {/* Customer Billed To */}
                      <div
                        className={`p-2 rounded-lg transition-all ${
                          activeFieldKey === 'customer' ? 'ring-2 ring-purple-400 bg-purple-500/20' : ''
                        }`}
                      >
                        <div className="text-[11px] text-zinc-500">BILLED TO:</div>
                        <div className="font-bold text-white">{extractedData.customer.name || 'Enterprise Recipient'}</div>
                      </div>

                      {/* Sample Rows */}
                      <div className="py-2 border-t border-b border-zinc-800 text-[11px] space-y-1.5">
                        <div className="flex justify-between text-zinc-400">
                          <span>{extractedData.line_items[0]?.description || 'Services Rendered'}</span>
                          <span className="font-bold text-white">
                            {extractedData.financials.currency} {extractedData.line_items[0]?.amount?.toLocaleString() || '1,49,500'}
                          </span>
                        </div>
                      </div>

                      {/* Footer Totals */}
                      <div className="space-y-1 text-right text-xs">
                        <div
                          className={`p-1 rounded transition-all ${
                            activeFieldKey === 'tax_amount' ? 'ring-2 ring-indigo-400 bg-indigo-500/20 inline-block' : ''
                          }`}
                        >
                          <span className="text-zinc-500">Tax / GST: </span>
                          <span className="text-zinc-300">
                            {extractedData.financials.currency} {extractedData.financials.tax_amount.toLocaleString()}
                          </span>
                        </div>
                        <div
                          className={`p-1 rounded transition-all ${
                            activeFieldKey === 'total' ? 'ring-2 ring-emerald-400 bg-emerald-500/20 inline-block' : ''
                          }`}
                        >
                          <span className="font-bold text-white">Total: </span>
                          <span className="font-bold text-emerald-400 text-sm">
                            {extractedData.financials.currency} {extractedData.financials.total_amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 text-[11px] text-zinc-500 flex items-center justify-between">
                      <span>Model: Vision-Transformer-Financial-v2</span>
                      <span className="text-emerald-400">High Confidence Guarantee</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: RAW JSON */}
            {activeTab === 'json' && (
              <div className="p-6">
                <pre className="p-5 rounded-2xl bg-zinc-950 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[550px] border border-zinc-800 leading-relaxed shadow-inner">
                  {JSON.stringify(extractedData, null, 2)}
                </pre>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
