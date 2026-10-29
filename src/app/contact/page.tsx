import type { Metadata } from "next";
import { ContactClientView } from "@/components/ContactClientView";

export const metadata: Metadata = {
  title: "Contact & Book System Deployment",
  description:
    "Connect directly with lead AI architects. Schedule your 14-day Lead-to-Booking System deployment with 50/50 milestone escrow and 20-call acceptance test guarantee.",
  alternates: {
    canonical: "https://evolveexpert.com/contact",
  },
  openGraph: {
    title: "Contact & Book System Deployment | EvolveExpert",
    description:
      "Direct line to senior AI architects. Sub-60s call and WhatsApp lead capture with guaranteed 20-call sign-off.",
    url: "https://evolveexpert.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
