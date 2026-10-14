import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EvolveExpert | Universal Invoice OCR & Multi-Region Tax Compliance API",
  description:
    "Sub-second AI invoice & receipt parsing with built-in Indian GSTIN (Luhn Mod-36), EU VAT (VIES), and UK VAT validation. Zero $500/mo minimum spend.",
  keywords: [
    "invoice parser api",
    "receipt ocr json",
    "gstin checksum api",
    "luhn mod 36 gstin",
    "vat validation api",
    "accounts payable automation",
    "line item extraction api",
  ],
  authors: [{ name: "EvolveExpert Technologies" }],
  creator: "Irfan Khan",
  publisher: "EvolveExpert Technologies",
  metadataBase: new URL("https://evolveexpert.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EvolveExpert | Universal Invoice OCR & Tax Compliance API",
    description:
      "Extract line-item tables and validate multi-region tax IDs in <800ms. Zero $500/mo enterprise minimum commitments.",
    url: "https://evolveexpert.com",
    siteName: "EvolveExpert",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolveExpert | Universal Invoice OCR & Tax Compliance API",
    description: "Extract line-item tables and validate multi-region tax IDs in <800ms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "EvolveExpert Document & Tax Intelligence API",
              operatingSystem: "Cloud / REST API",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "249",
                priceCurrency: "INR",
              },
              creator: {
                "@type": "Organization",
                name: "EvolveExpert Technologies",
                url: "https://evolveexpert.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
