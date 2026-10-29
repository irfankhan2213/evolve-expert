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
  { key: "all", label: "All Deployments" },
  { key: "founders", label: "US & Global Founders" },
  { key: "healthtech", label: "HealthTech & Field Services" },
  { key: "d2c", label: "D2C & E-Com" },
] as const;
