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
    default: "EvolveExpert — 24/7 AI Lead-to-Booking System",
    template: "%s | EvolveExpert",
  },
  description:
    "Never lose another lead to a missed call or slow reply. 24/7 conversational voice AI, sub-60s WhatsApp qualification, and calendar booking live in 14 days with 50/50 escrow.",
  keywords: [
    "missed call text back system",
    "24/7 AI call answering & appointment booking",
    "automate web lead response under 60 seconds",
    "lead to booking system for HVAC and clinics",
    "speed to lead automation",
    "after hours call answering service for small business",
    "AI answering service for contractors",
    "WhatsApp Business AI booking triage",
    "automated appointment scheduling",
    "EvolveExpert",
  ],
  authors: [{ name: "EvolveExpert", url: "https://evolveexpert.com" }],
  creator: "EvolveExpert",
  publisher: "EvolveExpert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evolveexpert.com",
    title: "EvolveExpert — 24/7 AI Lead-to-Booking System",
    description:
      "Every inbound call, WhatsApp message, and web lead answered in under 60 seconds, qualified by AI, and booked into your calendar 24/7. Live in 14 days with 50/50 escrow.",
    siteName: "EvolveExpert",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EvolveExpert — 24/7 AI Lead-to-Booking System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolveExpert — 24/7 AI Lead-to-Booking System",
    description:
      "Every inbound call, WhatsApp message, and web lead answered in under 60 seconds, qualified by AI, and booked into your calendar 24/7. Live in 14 days.",
    images: ["/opengraph-image"],
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

import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#F3F3F1] text-[#111111] antialiased selection:bg-[#111111] selection:text-white font-sans">
        <ScrollProgress />
        <AiReferralTracker />
        {children}
      </body>
    </html>
  );
}
