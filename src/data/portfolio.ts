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
    id: "manohar-traders",
    title: "Manohar Traders",
    client: "Manohar Traders",
    url: "https://manohartraders.com/",
    liveUrl: "https://manohartraders.com/",
    domain: "manohartraders.com",
    image: "/opengraph-image",
    category: "B2B SaaS & Automated Collections",
    filterTag: "founders",
    region: "India & Global B2B",
    metrics: "84% Faster Collections",
    speedScore: 99,
    loadTime: "0.4s LCP",
    summary: "Automated B2B payment collection and recovery software solution with conversational WhatsApp payment reminders and instant ledger reconciliation.",
    description: "Engineered automated B2B payment collection and debt recovery software for wholesale trade. Synchronizes bank payment gateways, WhatsApp payment prompts, and automated ledger balancing.",
    stack: ["Next.js", "TypeScript", "B2B Payment Rails", "WhatsApp Cloud API", "ERP Sync"],
    accentColor: "#059669",
    highlights: [
      "Automated B2B payment collection workflows recovering overdue invoices",
      "Conversational WhatsApp payment reminders with instant settlement links",
      "100% automated payment reconciliation with real-time ERP ledger sync",
    ],
    mockupDetails: {
      tag: "B2B PAYMENT RECOVERY & SAAS",
      headline: "Automated B2B Payment Collection & Ledger Reconciliation",
      subheadline: "Eliminate overdue receivables, streamline bulk invoicing, and automate invoice recovery via WhatsApp and payment rails.",
      badge: "100% Automated Reconciliation // Sub-second Webhooks",
      cta: "Explore Payment System",
      accentColor: "#059669",
      stats: [
        { label: "Collections", value: "84% Faster" },
        { label: "Cashflow Saved", value: "₹42L+" },
        { label: "Reconciliation", value: "100%" },
      ],
      features: [
        "Automated WhatsApp payment prompts and overdue invoice recovery",
        "Direct B2B gateway checkout with instant reconciliation",
        "Multi-tier wholesale ledger and ERP synchronization",
      ],
      browserUrl: "https://manohartraders.com/",
    },
  },
  {
    id: "proair-heating",
    title: "ProAir Heating & Cooling",
    client: "ProAir Heating & Cooling",
    url: "https://proairheating.com",
    liveUrl: "https://proairheating.com",
    domain: "proairheating.com",
    image: "/opengraph-image",
    category: "HVAC & Field Service AI",
    filterTag: "healthtech",
    region: "US / Canada",
    metrics: "< 6s Emergency Pickup",
    speedScore: 99,
    loadTime: "0.4s LCP",
    summary: "Carrier-grade 24/7 conversational voice AI answering emergency breakdown calls and booking dispatch slots into Jobber.",
    description: "Eliminated missed after-hours emergency calls with carrier-grade voice AI that diagnoses heating and cooling breakdowns, verifies addresses, and books technician dispatch slots into Jobber.",
    stack: ["Voice AI Dispatch", "Jobber CRM", "Emergency SMS Escalation", "Square Deposits"],
    accentColor: "#0284C7",
    highlights: [
      "Carrier-grade voice AI answering emergency breakdown calls under 6 seconds",
      "Automated customer address validation and dispatch slot booking into Jobber",
      "34 saved after-hours emergency calls per month yielding $40.8k new revenue",
    ],
    mockupDetails: {
      tag: "HVAC DISPATCH & FIELD SERVICES",
      headline: "24/7 Voice AI Emergency Answering & Dispatch",
      subheadline: "Never miss a high-ticket heating breakdown or emergency AC repair call after 6 PM.",
      badge: "< 6s Emergency Pickup // Carrier Telephony",
      cta: "Test Emergency Voice Agent",
      accentColor: "#0284C7",
      stats: [
        { label: "Emergency Pickup", value: "< 6s" },
        { label: "Saved Jobs", value: "34/mo" },
        { label: "New Revenue", value: "$40.8k/mo" },
      ],
      features: [
        "Instant caller address verification and diagnostic intake",
        "Direct dispatch slot synchronization into Jobber CRM",
        "Emergency technician on-call SMS paging",
      ],
      browserUrl: "https://proairheating.com",
    },
  },
  {
    id: "apex-dental",
    title: "Apex Dental Clinic",
    client: "Apex Dental Clinic",
    url: "https://apexdentalclinic.com",
    liveUrl: "https://apexdentalclinic.com",
    domain: "apexdentalclinic.com",
    image: "/opengraph-image",
    category: "Dental & Clinical AI",
    filterTag: "healthtech",
    region: "US / Global",
    metrics: "11s Text Back",
    speedScore: 100,
    loadTime: "0.3s LCP",
    summary: "Instant missed-call text back and consent-based hygiene recall reactivation via Meta WhatsApp Cloud API.",
    description: "Front desk was overwhelmed during peak morning check-in hours, missing 25+ new patient calls weekly. Implemented instant missed-call text back with automated insurance intake check.",
    stack: ["Missed-Call SMS", "Meta WhatsApp API", "Dentrix CRM Sync", "HIPAA Safeguards"],
    accentColor: "#4F46E5",
    highlights: [
      "11-second automated text back for busy and unanswered front-desk calls",
      "88% reactivation rate on 6-month overdue hygiene recalls via WhatsApp",
      "+52 booked patient consultations per month with zero receptionist burnout",
    ],
    mockupDetails: {
      tag: "DENTAL & CLINICAL REVENUE",
      headline: "Missed-Call Text Back & Hygiene Recall Automation",
      subheadline: "Recovers dropped patient phone calls instantly and fills open dental chair appointments.",
      badge: "HIPAA Compliant // 11s Text Back",
      cta: "Schedule Clinical Review",
      accentColor: "#4F46E5",
      stats: [
        { label: "Text Back Trigger", value: "11s" },
        { label: "New Patients", value: "+52/mo" },
        { label: "Reactivation", value: "88%" },
      ],
      features: [
        "Immediate two-way SMS insurance & consultation intake",
        "Automated WhatsApp recall follow-up for 6-month overdue patients",
        "Direct integration into Dentrix and Google Calendar",
      ],
      browserUrl: "https://apexdentalclinic.com",
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
    image: "/opengraph-image",
    category: "Lead Funnel & Digital Presence",
    filterTag: "founders",
    region: "Global",
    metrics: "< 45s Speed to Lead",
    speedScore: 100,
    loadTime: "0.4s LCP",
    summary: "Established authoritative digital brand presence from zero and engineered an automated website lead funnel with sub-60s qualification and calendar booking.",
    description: "Established brand presence from zero for Adigz Labs, building an autonomous website lead qualification funnel and multi-channel appointment booking pipeline.",
    stack: ["Sub-60s Inbound Funnel", "Interactive Qualifier", "Meta WhatsApp API", "Cal.com CRM Sync"],
    accentColor: "#D97706",
    highlights: [
      "Established authoritative digital presence and high-converting brand identity from scratch",
      "Automated website lead funnel qualifying inbound prospects in under 45 seconds",
      "+240% increase in qualified pipeline with zero lost form or WhatsApp leads",
    ],
    mockupDetails: {
      tag: "SPEED-TO-LEAD & BRAND PRESENCE",
      headline: "Automated Website Lead Funnel & Brand Presence from Zero",
      subheadline: "Autonomous qualification and multi-channel booking pipelines that lock high-intent prospects into your calendar 24/7.",
      badge: "Sub-45s Speed to Lead // Zero Lost Inquiries",
      cta: "Inspect Lead Funnel",
      accentColor: "#D97706",
      stats: [
        { label: "Speed to Lead", value: "< 45s" },
        { label: "Pipeline Lift", value: "+240%" },
        { label: "Lost Leads", value: "0" },
      ],
      features: [
        "Sub-60s multi-channel qualification via WhatsApp and web form",
        "Interactive intake questionnaire that filters high-ticket buyers",
        "Automated calendar slot locking with zero drop-off",
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
