import React from "react";

export function JsonLd() {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://evolveexpert.com/#organization",
        "name": "EvolveExpert",
        "alternateName": "EvolveExpert Lead-to-Booking Systems",
        "url": "https://evolveexpert.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://evolveexpert.com/images/portfolio/wescale.jpg",
          "caption": "EvolveExpert Lead-to-Booking System"
        },
        "description": "Turnkey Lead-to-Booking AI systems for service businesses and clinics. Sub-60s call answering, automated WhatsApp qualification, and calendar booking live in 14 days.",
        "founder": {
          "@type": "Person",
          "name": "Irfan Khan",
          "jobTitle": "Founder & Lead AI Systems Architect"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "WhatsApp Business Lead Concierge",
            "email": "concierge@evolveexpert.com",
            "telephone": "+91-7696936377",
            "availableLanguage": ["English", "Hindi", "Punjabi"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "Direct Founder Escalation",
            "telephone": "+91-7973727820",
            "availableLanguage": ["English", "Hindi", "Punjabi"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "India" }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://evolveexpert.com/#service",
        "name": "EvolveExpert Lead-to-Booking System",
        "url": "https://evolveexpert.com",
        "parentOrganization": {
          "@id": "https://evolveexpert.com/#organization"
        },
        "image": "https://evolveexpert.com/images/portfolio/wescale.jpg",
        "priceRange": "$1,500 - $7,500 USD / ₹45,000 - ₹1,50,000 INR",
        "currenciesAccepted": "USD, INR",
        "paymentAccepted": "Credit Card, Stripe, Razorpay, Bank Transfer, Escrow",
        "telephone": "+91-7696936377",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Lead-to-Booking System Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Starter System",
                "description": "24/7 AI missed-call text back, automated sub-60s web lead qualification, single calendar sync, and weekly digest. Includes up to 1,000 AI voice minutes/mo."
              },
              "price": "1500",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Core System (Founding Client Offer)",
                "description": "24/7 AI voice phone answering, official Meta WhatsApp Cloud API qualification, multi-staff calendar sync, 2-way SMS reminder flow, and 20-call acceptance test. Includes up to 1,000 AI voice minutes/mo."
              },
              "price": "2500",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Pipeline",
                "description": "Inbound & outbound AI voice triage, bi-directional CRM integration (ServiceTitan, Jobber, HubSpot), quote re-engagement pipeline, and past customer reactivation."
              },
              "price": "7500",
              "priceCurrency": "USD"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://evolveexpert.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much revenue does a service business lose from missed calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A service business missing just 20 calls or slow web inquiries per month loses approximately $3,000 every single month ($36,000 annually or ₹9,00,000/year). Assuming a standard 25% booking close rate and an average $600 job ticket, 5 high-intent customers book with a faster competitor instead of your company."
            }
          },
          {
            "@type": "Question",
            "name": "How fast does the EvolveExpert Lead-to-Booking System go live?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire system is live in 14 calendar days. Days 1–3 establish the intake audit and calendar routing. Days 4–10 build the voice engine, WhatsApp Cloud API flows, and CRM webhooks. Days 11–13 execute a live 20-call acceptance test with edge cases. Day 14 marks official public telephony launch."
            }
          },
          {
            "@type": "Question",
            "name": "How does the 50/50 risk-reversal payment structure work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You pay a 50% deposit to commence the 14-day sprint, and the remaining 50% only after you test and sign off on the 20-call acceptance test. If our AI voice agent and calendar booking are not ready for acceptance testing on Day 14, 25% is automatically credited off the setup fee."
            }
          },
          {
            "@type": "Question",
            "name": "Does the AI call answering system disclose that it is an AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Transparency and compliance are built into every system. The AI greeting states upfront that it is an automated AI booking assistant on a recorded line, ensuring compliance with FCC, TCPA, and international telephony regulations while immediately helping the caller book their appointment."
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
