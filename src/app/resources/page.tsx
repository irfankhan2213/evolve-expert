import type { Metadata } from "next";
import { ResourcesClientView } from "@/components/ResourcesClientView";

export const metadata: Metadata = {
  title: "Missed-Call Revenue Calculator",
  description:
    "Calculate how much revenue missed calls and slow inquiries cost your business every month. Free interactive financial model by EvolveExpert.",
  alternates: {
    canonical: "https://evolveexpert.com/resources",
  },
  openGraph: {
    title: "Missed-Call Revenue Calculator | EvolveExpert",
    description:
      "Calculate how much revenue your business loses from missed phone calls and slow web replies. 78% of customers buy from the first responder.",
    url: "https://evolveexpert.com/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClientView />;
}
