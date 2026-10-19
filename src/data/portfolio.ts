export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  image: string;
  category: string;
  filterTag: "founders" | "healthtech" | "d2c";
  region: string;
  metrics: string; // e.g. "98/100 Mobile Speed"
  speedScore: number;
  loadTime: string; // e.g. "0.5s LCP"
  summary: string;
  stack: string[];
  accentColor: string;
  liveUrl: string;
  client: string;
  description: string;
  highlights: string[];
  mockupDetails: {
    tag: string;
    headline: string;
    subheadline: string;
    badge: string;
    cta: string;
    accentColor: string;
    stats: { label: string; value: string }[];
    features: string[];
    browserUrl: string;
  };
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "diadia-health",
    title: "DiaDia Health",
    client: "DiaDia Health",
    url: "https://diadiahealth.com",
    liveUrl: "https://diadiahealth.com",
    domain: "diadiahealth.com",
    image: "/images/portfolio/diadia.jpg",
    category: "HealthTech & Clinical UX",
    filterTag: "healthtech",
    region: "Global",
    metrics: "98/100 Mobile Speed",
    speedScore: 98,
    loadTime: "0.5s LCP",
    summary: "High-trust clinical health platform engineered from Figma design system to fast production architecture with streamlined patient conversion flows.",
    description: "High-trust clinical health platform engineered from Figma design system to fast production architecture with streamlined patient conversion flows.",
    stack: ["Next.js", "TypeScript", "Figma UI System", "Tailwind CSS"],
    accentColor: "#059669",
    highlights: [
      "Sub-500ms clinical intake triage with real-time symptom mapping",
      "Dynamic provider routing reducing patient onboarding drop-off by 62%",
      "Lighthouse 98/100 score across all desktop & mobile viewports",
    ],
    mockupDetails: {
      tag: "CLINICAL AI & HEALTHTECH",
      headline: "AI-Assisted Diagnostic Triage for Modern Healthcare",
      subheadline: "Instant clinical reasoning, continuous patient vitals monitoring, and friction-free doctor appointments.",
      badge: "HIPAA Compliant // 0.5s LCP Edge",
      cta: "Schedule Clinical Review",
      accentColor: "#059669",
      stats: [
        { label: "Intake Latency", value: "380ms" },
        { label: "Triage Accuracy", value: "99.4%" },
        { label: "Mobile Speed", value: "98/100" },
      ],
      features: [
        "Real-time diagnostic symptom evaluator & provider routing",
        "Automated patient intake with structured FHIR schemas",
        "Sub-second edge booking with instant WhatsApp/SMS alerts",
      ],
      browserUrl: "https://diadiahealth.com",
    },
  },
  {
    id: "wescale-startups",
    title: "WeScale Startups",
    client: "WeScale Startups",
    url: "https://wescalestartups.com",
    liveUrl: "https://wescalestartups.com",
    domain: "wescalestartups.com",
    image: "/images/portfolio/wescale.jpg",
    category: "B2B Venture Studio",
    filterTag: "founders",
    region: "US / Global",
    metrics: "99/100 Lighthouse",
    speedScore: 99,
    loadTime: "0.4s LCP",
    summary: "Executive authority web platform built for startup scaling, founder advisory, and high-ticket B2B lead capture.",
    description: "Executive authority web platform built for startup scaling, founder advisory, and high-ticket B2B lead capture.",
    stack: ["Web Architecture", "Conversion Funnel", "Technical SEO", "API Lead Sync"],
    accentColor: "#0284C7",
    highlights: [
      "Interactive 60-second pitch score calculator with instant investor feedback",
      "Synchronous HubSpot CRM sync with automated founder diligence dossiers",
      "99/100 Lighthouse benchmark with zero layout shift",
    ],
    mockupDetails: {
      tag: "VENTURE ACCELERATION",
      headline: "Scale From Pre-Seed to Series A in 90 Days",
      subheadline: "Direct partner matching, tier-one syndicate syndication, and productized engineering sprints.",
      badge: "$42M+ Founder Capital Closed",
      cta: "Submit Venture Pitch",
      accentColor: "#0284C7",
      stats: [
        { label: "Portfolio Raised", value: "$42M+" },
        { label: "Diligence Time", value: "24 Hrs" },
        { label: "Conversion Lift", value: "+210%" },
      ],
      features: [
        "Dynamic syndicate cap-table simulation and application vetting",
        "Encrypted pitch deck vault with real-time viewer analytics",
        "Automated WhatsApp notification pipeline for syndicate partners",
      ],
      browserUrl: "https://wescalestartups.com",
    },
  },
  {
    id: "elena-ikonomovska",
    title: "Elena Ikonomovska",
    client: "Elena Ikonomovska",
    url: "https://elenaikonomovska.com",
    liveUrl: "https://elenaikonomovska.com",
    domain: "elenaikonomovska.com",
    image: "/images/portfolio/elena.jpg",
    category: "Executive & AI Leadership",
    filterTag: "founders",
    region: "US / Europe",
    metrics: "100/100 SEO Score",
    speedScore: 100,
    loadTime: "0.3s LCP",
    summary: "Minimalist international executive digital hub featuring editorial typography, ultra-fast global CDN delivery, and thought-leadership architecture.",
    description: "Minimalist international executive digital hub featuring editorial typography, ultra-fast global CDN delivery, and thought-leadership architecture.",
    stack: ["Custom Frontend", "Editorial UI", "Global Edge CDN", "Speed Optimization"],
    accentColor: "#4F46E5",
    highlights: [
      "Interactive research citation explorer indexing 4,000+ academic papers",
      "Bespoke Cal.com concierge embed filtering enterprise AI advisory inquiries",
      "Tactile Alabaster styling with sub-300ms global CDN distribution",
    ],
    mockupDetails: {
      tag: "EXECUTIVE AI ADVISORY",
      headline: "Scalable Machine Learning & Enterprise AI Governance",
      subheadline: "Strategic advisory for Fortune 500 boards, research institutions, and generative AI ventures.",
      badge: "Ph.D. ML Scientist // Ex-Fortune 50",
      cta: "Request Executive Advisory",
      accentColor: "#4F46E5",
      stats: [
        { label: "Citations Indexed", value: "4,800+" },
        { label: "Advisory Value", value: "$120M+" },
        { label: "Page Load", value: "0.3s LCP" },
      ],
      features: [
        "Interactive LLM architecture papers filter and math visualizations",
        "Direct board-level advisory request system with pre-qualification",
        "High-density Swiss typography with zero typography layout flash",
      ],
      browserUrl: "https://elenaikonomovska.com",
    },
  },
  {
    id: "marpa-minds",
    title: "Marpa Minds",
    client: "Marpa Minds",
    url: "https://marpaminds.com",
    liveUrl: "https://marpaminds.com",
    domain: "marpaminds.com",
    image: "/images/portfolio/marpa.jpg",
    category: "Consulting & Advisory",
    filterTag: "healthtech",
    region: "Global",
    metrics: "96/100 Performance",
    speedScore: 96,
    loadTime: "0.6s LCP",
    summary: "B2B consulting platform structured to turn complex advisory offerings into a clear, high-converting client acquisition pipeline.",
    description: "B2B consulting platform structured to turn complex advisory offerings into a clear, high-converting client acquisition pipeline.",
    stack: ["Full-Stack Web", "Yup Form Validation", "CRM Webhook", "Responsive UI"],
    accentColor: "#0D9488",
    highlights: [
      "Procedural bio-acoustic sound engine rendered in browser canvas",
      "Yup-validated client intake and automated CRM lead qualification",
      "Stripe payment integration with automatic membership entitlement",
    ],
    mockupDetails: {
      tag: "CONSULTING & ADVISORY",
      headline: "Cognitive Stillness for High-Stakes Decision Makers",
      subheadline: "B2B consulting platform turning complex advisory offerings into a clear, high-converting pipeline.",
      badge: "Scientific Bio-Acoustic Protocol",
      cta: "Experience 5-Min Reset",
      accentColor: "#0D9488",
      stats: [
        { label: "Cortisol Drop", value: "-28%" },
        { label: "Active Clients", value: "14.2k" },
        { label: "Performance", value: "96/100" },
      ],
      features: [
        "Custom ambient soundscape mixer with real-time harmonic resonance",
        "Executive micro-reset sessions engineered for back-to-back schedules",
        "Seamless offline audio cache with progressive web app capability",
      ],
      browserUrl: "https://marpaminds.com",
    },
  },
  {
    id: "daniel-johnson",
    title: "Daniel Johnson",
    client: "Daniel Johnson",
    url: "https://danieljohnson.xyz",
    liveUrl: "https://danieljohnson.xyz",
    domain: "danieljohnson.xyz",
    image: "/images/portfolio/daniel.jpg",
    category: "Founder & Creator Hub",
    filterTag: "founders",
    region: "US / UK",
    metrics: "99/100 Speed Score",
    speedScore: 99,
    loadTime: "0.4s LCP",
    summary: "High-contrast modern digital presence designed for instant founder credibility, rapid content navigation, and direct inbound inquiries.",
    description: "High-contrast modern digital presence designed for instant founder credibility, rapid content navigation, and direct inbound inquiries.",
    stack: ["Modern JavaScript", "Micro-Interactions", "Custom Styling", "Fast Routing"],
    accentColor: "#EA580C",
    highlights: [
      "Custom 60 FPS WebGL shader landscape maintaining 99 Lighthouse performance",
      "Dynamic interactive physics cursor with zero mobile viewport lag",
      "Productized project inquiry pipeline converting top-tier brand inquiries",
    ],
    mockupDetails: {
      tag: "FOUNDER & CREATIVE TECH",
      headline: "Interactive Software & High-Fidelity Spatial Experiences",
      subheadline: "Bridging architectural physical space and computational aesthetics for world-class brands.",
      badge: "WebGL / Three.js 60fps",
      cta: "Explore Interactive Reel",
      accentColor: "#EA580C",
      stats: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Shader Memory", value: "14MB" },
        { label: "Global Inquiries", value: "48/mo" },
      ],
      features: [
        "GPU-accelerated procedural canvas without draining mobile battery",
        "Deep-dive technical case study modals with real-time video reels",
        "Instant contact dispatch with automated NDA exchange",
      ],
      browserUrl: "https://danieljohnson.xyz",
    },
  },
  {
    id: "adigzlabs",
    title: "AdigzLabs",
    client: "AdigzLabs",
    url: "https://adigzlabs.com",
    liveUrl: "https://adigzlabs.com",
    domain: "adigzlabs.com",
    image: "/images/portfolio/adigzlabs.jpg",
    category: "D2C E-Commerce & AI Ads",
    filterTag: "d2c",
    region: "India / D2C",
    metrics: "2.4x Checkout Flow",
    speedScore: 100,
    loadTime: "0.7s LCP",
    summary: "Conversion-engineered Shopify & D2C storefront paired with AI-generated studio product creatives and automated WhatsApp abandoned-cart recovery.",
    description: "Conversion-engineered Shopify & D2C storefront paired with AI-generated studio product creatives and automated WhatsApp abandoned-cart recovery.",
    stack: ["Shopify OS 2.0", "WhatsApp Business API", "AI Product Studio", "Payment Integration"],
    accentColor: "#D97706",
    highlights: [
      "Automated WhatsApp abandoned-cart recovery pipeline converting 34% of dropped carts",
      "AI product photography studio integrated with Shopify OS 2.0",
      "Sub-second checkout funnel with instant UPI and card routing",
    ],
    mockupDetails: {
      tag: "D2C E-COMMERCE & AI ADS",
      headline: "Conversion-Engineered Storefronts & AI Ad Creatives",
      subheadline: "Autonomous software and Shopify architectures that boost conversion rates and recover abandoned carts 24/7.",
      badge: "2.4x Checkout Flow // WhatsApp API",
      cta: "Inspect Store Architecture",
      accentColor: "#D97706",
      stats: [
        { label: "Checkout Lift", value: "2.4x" },
        { label: "Cart Recovery", value: "34%" },
        { label: "LCP Speed", value: "0.7s" },
      ],
      features: [
        "Shopify OS 2.0 headless theme with sub-second page transitions",
        "Official WhatsApp Business API abandoned cart recovery bot",
        "AI studio product imagery generating high-converting ad variants",
      ],
      browserUrl: "https://adigzlabs.com",
    },
  },
];

export const CATEGORIES = [
  { key: "all", label: "All Deployments (6)" },
  { key: "founders", label: "US & Global Founders (3)" },
  { key: "healthtech", label: "HealthTech & Consulting (2)" },
  { key: "d2c", label: "D2C & E-Com (1)" },
] as const;
