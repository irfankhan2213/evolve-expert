import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { AiReferralTracker } from "@/components/AiReferralTracker";

export const viewport: Viewport = {
  themeColor: "#F3F3F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://evolveexpert.com"),
  title: {
    default: "EvolveExpert — Pure Web ('26) & AI Systems Studio",
    template: "%s | EvolveExpert Studio",
  },
  description:
    "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in rigid 7-day asynchronous sprints. 100/100 Core Web Vitals, 0 account managers, 50/40/10 milestone escrow.",
  keywords: [
    "Next.js 16 Web Studio",
    "Turnkey 7-Day Sprint",
    "AI Systems Engineering",
    "High Conversion Web Design",
    "Core Web Vitals 100/100",
    "Tailwind CSS Web Development",
    "WhatsApp AI Automation",
    "DiaDia Health",
    "WeScale Startups",
    "Full-Stack Web Engineering",
  ],
  authors: [{ name: "EvolveExpert Studio", url: "https://evolveexpert.com" }],
  creator: "EvolveExpert Studio",
  publisher: "EvolveExpert Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evolveexpert.com",
    title: "EvolveExpert — Pure Web ('26) & AI Systems Studio",
    description:
      "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in rigid 7-day asynchronous sprints. Sub-0.5s LCP, zero bloat.",
    siteName: "EvolveExpert",
    images: [
      {
        url: "/images/portfolio/wescale.jpg",
        width: 1200,
        height: 630,
        alt: "EvolveExpert Studio — Pure Web & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolveExpert — Pure Web ('26) & AI Systems Studio",
    description:
      "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in 7-day sprints. 100/100 Core Web Vitals.",
    images: ["/images/portfolio/wescale.jpg"],
    creator: "@evolveexpert",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://evolveexpert.com",
  },
};

import { ScrollProgress } from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        <ScrollProgress />
        <AiReferralTracker />
        {children}
      </body>
    </html>
  );
}
