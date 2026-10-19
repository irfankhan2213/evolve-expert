import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EvolveExpert — Pure Web & AI Systems Studio",
    short_name: "EvolveExpert",
    description:
      "Turnkey Next.js 16 web engineering & 24/7 AI systems delivered in rigid 7-day asynchronous sprints.",
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
