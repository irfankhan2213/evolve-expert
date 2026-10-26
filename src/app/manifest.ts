import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EvolveExpert — 24/7 AI Lead-to-Booking System",
    short_name: "EvolveExpert",
    description:
      "Turnkey 24/7 AI call answering, sub-60s WhatsApp qualification, and calendar booking live in 14 days with 50/50 escrow.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F3F1",
    theme_color: "#F3F3F1",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
