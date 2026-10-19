import React from "react";
import { Metadata } from "next";
import { getPreviewBySlug } from "@/data/previews";
import { PreviewClientView } from "@/components/PreviewClientView";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPreviewBySlug(slug);

  return {
    title: `Confidential 24-Hr Sprint Prototype for ${data.companyName}`,
    description: `Custom Next.js 16 and AI Concierge redesign prototype engineered for ${data.companyName} by EvolveExpert Studio.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getPreviewBySlug(slug);

  return <PreviewClientView data={data} />;
}
