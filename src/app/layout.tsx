import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DocuPulse AI - Automated Invoice, Receipt & Document Intelligence',
  description:
    'Extract invoice numbers, vendor GSTIN, dates, line items, and totals into clean Excel & JSON in seconds. Web tool and RapidAPI metered endpoints.',
  keywords: [
    'invoice extractor',
    'ocr receipt scanner',
    'pdf to excel invoice',
    'gstin extractor',
    'rapidapi invoice api',
    'razorpay automated billing',
  ],
  authors: [{ name: 'DocuPulse AI' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
