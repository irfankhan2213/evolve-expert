import React from "react";

export function JsonLd() {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://evolveexpert.com/#organization",
        "name": "EvolveExpert Studio",
        "alternateName": "EvolveExpert",
        "url": "https://evolveexpert.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://evolveexpert.com/images/portfolio/wescale.jpg",
          "caption": "EvolveExpert Studio"
        },
        "description": "High-performance Next.js 16 web engineering & AI systems studio delivering turnkey platforms in 7-day sprints.",
        "founder": {
          "@type": "Person",
          "name": "EvolveExpert Engineering Team",
          "jobTitle": "Lead Fullstack & AI Architects"
        },
        "sameAs": [
          "https://github.com/evolveexpert",
          "https://twitter.com/evolveexpert",
          "https://linkedin.com/company/evolveexpert"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Client Concierge & Direct Engineering",
          "email": "concierge@evolveexpert.com",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://evolveexpert.com/#website",
        "url": "https://evolveexpert.com",
        "name": "EvolveExpert — Pure Web ('26) & AI Systems",
        "publisher": {
          "@id": "https://evolveexpert.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://evolveexpert.com/#service",
        "name": "EvolveExpert 7-Day Turnkey Web & AI Systems Sprint",
        "image": "https://evolveexpert.com/images/portfolio/wescale.jpg",
        "priceRange": "$950 - $1,250 USD / ₹65,000 - ₹90,000 INR",
        "currenciesAccepted": "USD, INR",
        "paymentAccepted": "Credit Card, Stripe, Razorpay, Wire Transfer, Escrow",
        "areaServed": "Global",
        "telephone": "+1-800-EVOLVE-01",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Global"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.98",
          "reviewCount": "42",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://evolveexpert.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does EvolveExpert deliver a full production website in 7 days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate on a rigid 7-day asynchronous sprint protocol with zero account manager telephone games. You get direct daily Loom demos, a live private Notion Command Center, and work directly with senior fullstack engineers building on our modular Next.js 16 + Tailwind CSS architecture."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 50/40/10 milestone escrow payment structure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To ensure absolute mutual trust, you pay 50% upfront to reserve the sprint slot, 40% on Day 4 after the core build review, and the final 10% on Day 7 only after live deployment, full GitHub repository transfer, and 100/100 Core Web Vitals verification."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code and intellectual property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You own 100% of the code, intellectual property, design tokens, and infrastructure accounts from the moment the final milestone is reached. We transfer full ownership of the GitHub repository, Vercel project, and Supabase database."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build custom AI systems and WhatsApp concierge integrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Growth Sprint tier includes 24/7 custom AI agents, automated WhatsApp client triage, instant lead routing to your CRM/Notion, and multi-currency Stripe/Razorpay payment engines."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
    />
  );
}
