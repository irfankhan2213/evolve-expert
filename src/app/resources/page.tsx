import type { Metadata } from "next";
import { ResourcesClientView } from "@/components/ResourcesClientView";

export const metadata: Metadata = {
  title: "Performance & Conversion Diagnostics Calculator",
  description:
    "Calculate the real revenue impact of mobile load latency and Core Web Vitals. Free diagnostic tool by EvolveExpert Studio.",
  alternates: {
    canonical: "https://evolveexpert.com/resources",
  },
  openGraph: {
    title: "Free Web Performance & Conversion Diagnostics | EvolveExpert Studio",
    description:
      "Calculate how much slow mobile page loads cost your business. Benchmark against Next.js 16 sub-0.5s LCP.",
    url: "https://evolveexpert.com/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClientView />;
}
