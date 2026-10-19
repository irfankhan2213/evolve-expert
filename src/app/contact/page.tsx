import type { Metadata } from "next";
import { ContactClientView } from "@/components/ContactClientView";

export const metadata: Metadata = {
  title: "Contact & Book Sprint Slot — Direct Engineering Access",
  description:
    "Skip the sales pitch. Connect directly with senior fullstack engineers. Reserve your 7-day sprint slot with 50/40/10 milestone escrow protection.",
  alternates: {
    canonical: "https://evolveexpert.com/contact",
  },
  openGraph: {
    title: "Book a 7-Day Web Sprint | EvolveExpert Studio",
    description:
      "Direct line to senior fullstack engineers. Guaranteed 24-hr initial assessment and sprint reservation.",
    url: "https://evolveexpert.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
