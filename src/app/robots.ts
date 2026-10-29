import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
        ],
        allow: [
          "/",
          "/llms.txt",
          "/pricing",
          "/resources",
          "/contact",
          "/services",
          "/proof",
          "/about",
        ],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://evolveexpert.com/sitemap.xml",
  };
}
