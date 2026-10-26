export interface PreviewData {
  slug: string;
  companyName: string;
  industry: string;
  location: string;
  websiteUrl: string;
  tagline: string;
  generatedDate: string;
  currentSpeedScore: number;
  currentLoadTime: string;
  upgradedSpeedScore: number;
  upgradedLoadTime: string;
  diagnosedLeak: string;
  upgradedBadge: string;
  upgradedHeadline: string;
  upgradedSubheadline: string;
  primaryCtaText: string;
  sampleAiQuestions: {
    question: string;
    response: string;
    actionTriggered: string;
  }[];
  auditMetrics: {
    mobileSpeed: { before: number; after: number };
    desktopSpeed: { before: number; after: number };
    firstContentfulPaint: { before: string; after: string };
    largestContentfulPaint: { before: string; after: string };
    cumulativeLayoutShift: { before: string; after: string };
    estimatedMonthlyLostRevenue: string;
  };
  critiques: {
    title: string;
    description: string;
    severity: "critical" | "warning" | "opportunity";
  }[];
  redesignHero: {
    badge: string;
    headline: string;
    highlightWord: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proofStats: { label: string; value: string }[];
    featureCards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  aiConciergeDemo: {
    agentName: string;
    agentRole: string;
    welcomeMessage: string;
    samplePrompts: {
      question: string;
      response: string;
      actionTriggered: string;
    }[];
    webhookSample: {
      event: string;
      leadName: string;
      intent: string;
      estimatedTicket: string;
      channel: string;
      notionSync: string;
      status: string;
    };
  };
  sprintRecommendation: {
    tier: string;
    duration: string;
    investment: string;
    deliverables: string[];
  };
}

export const PREVIEW_REGISTRY: Record<string, PreviewData> = {
  "apex-dental": {
    slug: "apex-dental",
    companyName: "Apex Dental & Implant Center",
    industry: "High-Ticket Healthcare / Cosmetic Dentistry",
    location: "Austin, TX & Global",
    websiteUrl: "apexdentalimplants.example.com",
    tagline: "Premier Restorative & Cosmetic Implant Surgery",
    generatedDate: "October 2026",
    currentSpeedScore: 41,
    currentLoadTime: "5.4s",
    upgradedSpeedScore: 99,
    upgradedLoadTime: "0.4s",
    diagnosedLeak: "Mobile visitors wait 5.4s before the hero loads, and after-hours traffic past 6 PM has no instant WhatsApp/AI booking triage—causing an estimated 45% of high-intent cosmetic implant inquiries ($4,500+ ticket) to bounce to local competitors.",
    upgradedBadge: "SAME-DAY IMPLANT CONSULTATIONS // 3D GUIDED SURGERY",
    upgradedHeadline: "Restore Your Natural Smile With",
    upgradedSubheadline: "Board-certified implant surgeons, 3D digital impressions, and zero-interest medical financing. Speak with our clinical concierge in under 60 seconds.",
    primaryCtaText: "Claim Free 3D Scan & Consult",
    sampleAiQuestions: [
      {
        question: "How much do All-on-4 full arch implants cost and do you offer financing?",
        response: "All-on-4 permanent restorations typically range from $14,000 to $22,000 per arch depending on bone density. We partner with Sunbit & CareCredit for 0% APR financing starting at $219/month. Would you like me to reserve a complimentary 3D CBCT scan with Dr. Miller this Thursday?",
        actionTriggered: "Qualified High-Ticket Lead ($16k value) -> Synced to EHR & WhatsApp Alert",
      },
      {
        question: "I cracked a molar tonight and it is throbbing. Can I be seen tomorrow morning?",
        response: "I'm so sorry you're in pain! Dr. Miller keeps two emergency triage slots open every weekday morning. I can tentatively hold 8:30 AM or 10:15 AM tomorrow for you. What is the best cell number to text your confirmation?",
        actionTriggered: "Urgent Care Triage Triggered -> Instant SMS Dispatch to On-Call Assistant",
      },
      {
        question: "What is the recovery time compared to traditional dentures?",
        response: "Unlike traditional dentures that require 6-8 weeks of gum healing without teeth, our Same-Day Guided Protocol places provisional fixed teeth on the exact day of surgery, so you never leave without a smile.",
        actionTriggered: "Procedure FAQ Resolved -> Consult Button Activated",
      },
    ],
    auditMetrics: {
      mobileSpeed: { before: 41, after: 99 },
      desktopSpeed: { before: 61, after: 100 },
      firstContentfulPaint: { before: "3.4s", after: "0.4s" },
      largestContentfulPaint: { before: "5.4s", after: "0.4s" },
      cumulativeLayoutShift: { before: "0.24", after: "0.000" },
      estimatedMonthlyLostRevenue: "$18,500 / mo in missed implant consultations",
    },
    critiques: [
      {
        title: "Sub-Second Mobile Speed Fix",
        description: "Re-architecting from heavy WordPress themes to Next.js Edge cuts mobile LCP from 5.4s down to 0.4s, eliminating immediate bounce on cellular connections.",
        severity: "critical",
      },
      {
        title: "Instant Lead Validation & CRM Routing",
        description: "Replacing a clunky 12-field form with Yup-validated micro-inputs stops 58% drop-off on Safari and dispatches alerts directly to reception.",
        severity: "critical",
      },
      {
        title: "24/7 AI & WhatsApp Concierge Add-On",
        description: "Captures the 64% of high-intent patients who search for dental pain relief past 6 PM, booking them directly into open morning calendar slots.",
        severity: "warning",
      },
    ],
    redesignHero: {
      badge: "SAME-DAY IMPLANT CONSULTATIONS // 3D GUIDED SURGERY",
      headline: "Restore Your Natural Smile With",
      highlightWord: "Permanent Precision",
      subheadline: "Board-certified implant surgeons, 3D digital impressions, and zero-interest medical financing. Speak with our clinical concierge in under 60 seconds.",
      ctaPrimary: "Claim Free 3D Scan & Consult",
      ctaSecondary: "Ask AI Dental Concierge",
      proofStats: [
        { label: "Successful Implants", value: "3,400+" },
        { label: "Patient Satisfaction", value: "99.2%" },
        { label: "Consultation Turnaround", value: "<15 Mins" },
      ],
      featureCards: [
        {
          title: "Single & Full-Arch Restorations",
          description: "Permanent All-on-4 zirconia bridges anchored with computer-guided surgical accuracy.",
          icon: "ShieldCheck",
        },
        {
          title: "Sedation & Painless Care",
          description: "IV conscious sedation options for patients with dental anxiety or lengthy procedures.",
          icon: "HeartPulse",
        },
        {
          title: "Instant 0% APR Financing",
          description: "Flexible payment plans starting at $189/mo with soft credit approval in 90 seconds.",
          icon: "CreditCard",
        },
      ],
    },
    aiConciergeDemo: {
      agentName: "Sarah (Apex Clinical Coordinator)",
      agentRole: "24/7 Dental AI Concierge",
      welcomeMessage: "Hello! I am Apex Dental's clinical triage assistant. Are you inquiring about dental implants, cosmetic veneers, or do you have an urgent tooth pain?",
      samplePrompts: [
        {
          question: "How much do All-on-4 full arch implants cost and do you offer financing?",
          response: "All-on-4 permanent restorations typically range from $14,000 to $22,000 per arch depending on bone density. We partner with Sunbit & CareCredit for 0% APR financing starting at $219/month. Would you like me to reserve a complimentary 3D CBCT scan with Dr. Miller this Thursday?",
          actionTriggered: "Qualified High-Ticket Lead ($16k value) -> Synced to EHR & WhatsApp Alert",
        },
        {
          question: "I cracked a molar tonight and it is throbbing. Can I be seen tomorrow morning?",
          response: "I'm so sorry you're in pain! Dr. Miller keeps two emergency triage slots open every weekday morning. I can tentatively hold 8:30 AM or 10:15 AM tomorrow for you. What is the best cell number to text your confirmation?",
          actionTriggered: "Urgent Care Triage Triggered -> Instant SMS Dispatch to On-Call Assistant",
        },
        {
          question: "What is the recovery time compared to traditional dentures?",
          response: "Unlike traditional dentures that require 6-8 weeks of gum healing without teeth, our Same-Day Guided Protocol places provisional fixed teeth on the exact day of surgery, so you never leave without a smile.",
          actionTriggered: "Procedure FAQ Resolved -> Consult Button Activated",
        },
      ],
      webhookSample: {
        event: "lead.high_ticket_triage",
        leadName: "Apex Inquirer",
        intent: "Full Arch All-on-4 Implants",
        estimatedTicket: "$18,500 USD",
        channel: "WhatsApp Business API",
        notionSync: "Active / Lead Pipeline -> P1",
        status: "Auto-Scheduled for 3D Scan",
      },
    },
    sprintRecommendation: {
      tier: "14-Day Lead-to-Booking System (Core Tier)",
      duration: "7 Business Days",
      investment: "$2,500 USD / ₹75,000 INR (Founding Client Offer)",
      deliverables: [
        "Headless Next.js 15 site with 99+ mobile Lighthouse speed",
        "24/7 AI Triage Concierge hooked into clinic WhatsApp and Notion",
        "Interactive Before/After clinical photo slider with lazy-load zoom",
        "Online patient medical history onboarding form saving 15 mins/patient",
        "Automated Google Reviews review-booster pipeline via SMS post-visit",
      ],
    },
  },

  "nova-ai": {
    slug: "nova-ai",
    companyName: "Nova AI Infrastructure",
    industry: "Enterprise AI & Developer Infrastructure",
    location: "San Francisco, CA & Global",
    websiteUrl: "nova-agents.example.io",
    tagline: "Deterministic Multi-Agent Telemetry & Voice Compute",
    generatedDate: "October 2026",
    currentSpeedScore: 48,
    currentLoadTime: "4.1s",
    upgradedSpeedScore: 100,
    upgradedLoadTime: "0.4s",
    diagnosedLeak: "Uncompressed Three.js bundles freeze mobile browsers on initial load, and developer buyers cannot test audio latency or view WebSocket schemas without waiting for a sales rep.",
    upgradedBadge: "SUB-120MS VOICE STREAMING // ZERO HALLUCINATION ENGINE",
    upgradedHeadline: "Autonomous Voice Agents with",
    upgradedSubheadline: "Deploy multimodal agent swarms that answer customer inquiries, verify database transactions, and execute workflows in real-time.",
    primaryCtaText: "Test Live Voice Sandbox",
    sampleAiQuestions: [
      {
        question: "How do you achieve sub-120ms voice latency across public cellular networks?",
        response: "We utilize bidirectional WebSockets combined with speculative LLM decoding and neural voice chunk streaming (PCM 24kHz). We begin synthesis after the first 3 tokens, achieving a median first-chunk playback of 118ms.",
        actionTriggered: "Technical Benchmarks Dispatched -> API Key Generation Screen Opened",
      },
      {
        question: "Can we self-host the agent models inside our private AWS VPC to comply with HIPAA?",
        response: "Yes! We provide Docker container images and Helm charts with air-gapped model weights. Zero customer voice data ever leaves your VPC boundary, and we sign enterprise BAAs.",
        actionTriggered: "Enterprise Compliance Verification -> Calendar Link Sent to VP Engineering",
      },
      {
        question: "What is your pricing model for 100,000 monthly voice minutes?",
        response: "Volume enterprise tiers start at $0.038 per streaming voice minute with dedicated GPU workers, including unlimited Webhook events and 99.99% SLA support.",
        actionTriggered: "Enterprise Quote Generated -> Pushed to HubSpot Deal Pipeline",
      },
    ],
    auditMetrics: {
      mobileSpeed: { before: 48, after: 100 },
      desktopSpeed: { before: 72, after: 100 },
      firstContentfulPaint: { before: "2.9s", after: "0.3s" },
      largestContentfulPaint: { before: "4.1s", after: "0.4s" },
      cumulativeLayoutShift: { before: "0.18", after: "0.000" },
      estimatedMonthlyLostRevenue: "$24,000 / mo in missed enterprise POC contracts",
    },
    critiques: [
      {
        title: "Sub-Second Mobile Speed Fix",
        description: "Replacing bloated WebGL client libraries with CSS hardware-accelerated shaders cuts load time from 4.1s to 0.4s.",
        severity: "critical",
      },
      {
        title: "Instant Lead Validation & CRM Routing",
        description: "Live executable WebSocket telemetry sandbox allows enterprise engineers to verify TTFT benchmarks immediately.",
        severity: "critical",
      },
      {
        title: "24/7 AI & WhatsApp Concierge Add-On",
        description: "Answers enterprise SOC2 and VPC architectural questions 24/7, booking calls with senior solutions architects automatically.",
        severity: "warning",
      },
    ],
    redesignHero: {
      badge: "SUB-120MS VOICE STREAMING // ZERO HALLUCINATION ENGINE",
      headline: "Autonomous Voice Agents with",
      highlightWord: "Deterministic Precision",
      subheadline: "Deploy multimodal agent swarms that answer customer inquiries, verify database transactions, and execute workflows in real-time.",
      ctaPrimary: "Test Live Voice Sandbox",
      ctaSecondary: "Read Architecture Whitepaper",
      proofStats: [
        { label: "Median TTFT", value: "118ms" },
        { label: "Daily Executions", value: "1.4M" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
      featureCards: [
        {
          title: "Sub-120ms Latency Engine",
          description: "Edge WebSocket orchestration streaming audio packets before full sentences finish generation.",
          icon: "Zap",
        },
        {
          title: "Deterministic Pydantic v2 Schemas",
          description: "Strict parameter validation guaranteeing zero JSON drift or hallucinated API function arguments.",
          icon: "Code",
        },
        {
          title: "Enterprise VPC Self-Hosting",
          description: "Deploy within your own AWS/GCP perimeter with automated Kubernetes Helm charts and SOC2 controls.",
          icon: "Shield",
        },
      ],
    },
    aiConciergeDemo: {
      agentName: "Aiden (Nova Solutions Architect)",
      agentRole: "Technical AI Solution Architect",
      welcomeMessage: "Welcome to Nova AI. I can demonstrate our sub-120ms agent architecture, answer enterprise SOC2 queries, or generate custom Python/TypeScript SDK snippets.",
      samplePrompts: [
        {
          question: "How do you achieve sub-120ms voice latency across public cellular networks?",
          response: "We utilize bidirectional WebSockets combined with speculative LLM decoding and neural voice chunk streaming (PCM 24kHz). We begin synthesis after the first 3 tokens, achieving a median first-chunk playback of 118ms.",
          actionTriggered: "Technical Benchmarks Dispatched -> API Key Generation Screen Opened",
        },
        {
          question: "Can we self-host the agent models inside our private AWS VPC to comply with HIPAA?",
          response: "Yes! We provide Docker container images and Helm charts with air-gapped model weights. Zero customer voice data ever leaves your VPC boundary, and we sign enterprise BAAs.",
          actionTriggered: "Enterprise Compliance Verification -> Calendar Link Sent to VP Engineering",
        },
        {
          question: "What is your pricing model for 100,000 monthly voice minutes?",
          response: "Volume enterprise tiers start at $0.038 per streaming voice minute with dedicated GPU workers, including unlimited Webhook events and 99.99% SLA support.",
          actionTriggered: "Enterprise Quote Generated -> Pushed to HubSpot Deal Pipeline",
        },
      ],
      webhookSample: {
        event: "enterprise.eval_request",
        leadName: "VP of Engineering",
        intent: "Self-Hosted Voice Swarm",
        estimatedTicket: "$36,000 ARR",
        channel: "Developer Sandbox Webhook",
        notionSync: "Active / High-Priority Deals",
        status: "VPC Helm Chart Delivered",
      },
    },
    sprintRecommendation: {
      tier: "14-Day Lead-to-Booking System (Core Tier)",
      duration: "7 Business Days",
      investment: "$2,500 USD / ₹75,000 INR (Founding Client Offer)",
      deliverables: [
        "Interactive Browser Audio Sandbox testing voice latency in real-time",
        "Lighthouse 100/100 documentation hub with searchable API reference",
        "Interactive Pricing Calculator generating tailored contract proposals",
        "Automated GitHub / Discord community invite and telemetry tracker",
        "Lead enrichment pipeline mapping visitors to LinkedIn company sizes",
      ],
    },
  },

  "lumina-skin": {
    slug: "lumina-skin",
    companyName: "Lumina Medical Aesthetics",
    industry: "Luxury Aesthetics & Dermatology",
    location: "New York, NY & Beverly Hills",
    websiteUrl: "luminaskinclinic.example.com",
    tagline: "Advanced Dermatologic Laser & Anti-Aging Science",
    generatedDate: "October 2026",
    currentSpeedScore: 37,
    currentLoadTime: "5.4s",
    upgradedSpeedScore: 99,
    upgradedLoadTime: "0.4s",
    diagnosedLeak: "Unoptimized 12MB hero videos and stock photography cause 5.4s mobile load times, while affluent patients seeking $2,500+ facial rejuvenation packages bounce when trying to navigate cluttered menus.",
    upgradedBadge: "BOARD-CERTIFIED DERMATOLOGY // BESPOKE CLINICAL PROTOCOLS",
    upgradedHeadline: "Medical-Grade Aesthetics Meets",
    upgradedSubheadline: "State-of-the-art laser resurfacing, non-surgical facial sculpting, and longevity skincare tailored by physician specialists.",
    primaryCtaText: "Book Private Consultation",
    sampleAiQuestions: [
      {
        question: "What is the difference between Morpheus8 RF microneedling and CO2 Fractional laser?",
        response: "Morpheus8 tightens deep subdermal tissue and stimulates collagen via radiofrequency with minimal surface downtime (24-48 hrs). CO2 Fractional laser targets severe surface texture, deep sun spots, and acne scars with a 5-7 day healing window. Many patients combine both in phased protocols.",
        actionTriggered: "Clinical Comparison Delivered -> Consultation Offer Triggered",
      },
      {
        question: "Can I receive dermal fillers if I am flying for a wedding in 4 days?",
        response: "We generally advise scheduling filler treatments at least 14 days before major events to allow any mild initial swelling or micro-bruising to fully settle. For an event in 4 days, our Hydrafacial Platinum + Cryo Glow delivers instant red-carpet radiance with zero downtime!",
        actionTriggered: "Event Safe Alternative Recommended -> Instant Booking Calendar Shown",
      },
      {
        question: "Do you have Saturday appointment availability with Dr. Laurent this month?",
        response: "Dr. Laurent has two private consultation slots remaining on Saturday, October 24th at 11:00 AM and 2:30 PM. Would you like me to hold one of these for you?",
        actionTriggered: "VIP Slot Reservation Triggered -> Confirmed via SMS",
      },
    ],
    auditMetrics: {
      mobileSpeed: { before: 37, after: 99 },
      desktopSpeed: { before: 55, after: 100 },
      firstContentfulPaint: { before: "3.9s", after: "0.5s" },
      largestContentfulPaint: { before: "5.4s", after: "0.4s" },
      cumulativeLayoutShift: { before: "0.31", after: "0.001" },
      estimatedMonthlyLostRevenue: "$22,000 / mo in lost aesthetic bookings",
    },
    critiques: [
      {
        title: "Sub-Second Mobile Speed Fix",
        description: "Next-gen AVIF/WebP image compression and video streaming headers drop mobile LCP from 5.4s to 0.4s.",
        severity: "critical",
      },
      {
        title: "Instant Lead Validation & CRM Routing",
        description: "Interactive skin quiz routes treatment preferences and photo assessments directly to clinician WhatsApp.",
        severity: "critical",
      },
      {
        title: "24/7 AI & WhatsApp Concierge Add-On",
        description: "Captures evening consultations when prospective patients browse luxury treatment menus at home.",
        severity: "warning",
      },
    ],
    redesignHero: {
      badge: "BOARD-CERTIFIED DERMATOLOGY // BESPOKE CLINICAL PROTOCOLS",
      headline: "Medical-Grade Aesthetics Meets",
      highlightWord: "Subtle Elegance",
      subheadline: "State-of-the-art laser resurfacing, non-surgical facial sculpting, and longevity skincare tailored by physician specialists.",
      ctaPrimary: "Book Private Consultation",
      ctaSecondary: "Take 60-Sec Skin Quiz",
      proofStats: [
        { label: "Treatments Completed", value: "8,500+" },
        { label: "5-Star Google Reviews", value: "480+" },
        { label: "Average Recovery Time", value: "48 Hrs" },
      ],
      featureCards: [
        {
          title: "Advanced Laser Resurfacing",
          description: "Target fine lines, hyperpigmentation, and surgical scars with minimal downtime.",
          icon: "Sparkles",
        },
        {
          title: "Sculptra & Bio-Stimulators",
          description: "Natural collagen rebuilding that restores structural firmness for up to 24 months.",
          icon: "Shield",
        },
        {
          title: "Digital Visia Complexion Scan",
          description: "Deep UV subsurface analysis measuring melanin, pore depth, and biological skin age.",
          icon: "Search",
        },
      ],
    },
    aiConciergeDemo: {
      agentName: "Camille (Lumina Aesthetic Advisor)",
      agentRole: "24/7 Aesthetic Concierge",
      welcomeMessage: "Welcome to Lumina. I can help guide you through our clinical treatment options, verify post-treatment recovery timelines, or reserve a consultation with Dr. Laurent.",
      samplePrompts: [
        {
          question: "What is the difference between Morpheus8 RF microneedling and CO2 Fractional laser?",
          response: "Morpheus8 tightens deep subdermal tissue and stimulates collagen via radiofrequency with minimal surface downtime (24-48 hrs). CO2 Fractional laser targets severe surface texture, deep sun spots, and acne scars with a 5-7 day healing window. Many patients combine both in phased protocols.",
          actionTriggered: "Clinical Comparison Delivered -> Consultation Offer Triggered",
        },
        {
          question: "Can I receive dermal fillers if I am flying for a wedding in 4 days?",
          response: "We generally advise scheduling filler treatments at least 14 days before major events to allow any mild initial swelling or micro-bruising to fully settle. For an event in 4 days, our Hydrafacial Platinum + Cryo Glow delivers instant red-carpet radiance with zero downtime!",
          actionTriggered: "Event Safe Alternative Recommended -> Instant Booking Calendar Shown",
        },
        {
          question: "Do you have Saturday appointment availability with Dr. Laurent this month?",
          response: "Dr. Laurent has two private consultation slots remaining on Saturday, October 24th at 11:00 AM and 2:30 PM. Would you like me to hold one of these for you?",
          actionTriggered: "VIP Slot Reservation Triggered -> Confirmed via SMS",
        },
      ],
      webhookSample: {
        event: "aesthetic.private_booking",
        leadName: "Aesthetic Patient",
        intent: "Morpheus8 + Biostimulator Package",
        estimatedTicket: "$3,800 USD",
        channel: "WhatsApp & SMS Concierge",
        notionSync: "Active / High-Ticket Calendar",
        status: "Held for Dr. Laurent Review",
      },
    },
    sprintRecommendation: {
      tier: "14-Day Clinic Lead-to-Booking System",
      duration: "7 Business Days",
      investment: "$2,500 USD / ₹75,000 INR (Founding Client Offer)",
      deliverables: [
        "Bespoke Tactile Alabaster storefront optimized for iPhone retina displays",
        "Interactive 60-Second Skin Assessment quiz routing leads into WhatsApp",
        "High-definition before & after comparative gallery with touch sliders",
        "Direct calendar integration eliminating manual scheduling phone calls",
        "Automated pre-treatment & post-care instruction delivery via SMS",
      ],
    },
  },
};

export function getPreviewBySlug(slug: string): PreviewData {
  if (PREVIEW_REGISTRY[slug]) {
    return PREVIEW_REGISTRY[slug];
  }

  // Smart dynamic fallback generator for any arbitrary URL slug
  const cleanName = slug
    .split(/[-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const hasTech = /tech|ai|cloud|data|agent|dev|soft|net/i.test(slug);
  const hasHealth = /health|care|clinic|dental|med|skin|derma|doc/i.test(slug);
  const hasFinance = /fin|cap|pay|invest|fund|bank|tax/i.test(slug);

  let industry = "High-Growth B2B Services";
  let highlightWord = "Unmatched Speed";
  let sampleTicket = "$8,500 USD";
  let agentRole = "Executive Concierge";

  if (hasHealth) {
    industry = "Modern Healthcare & Specialty Clinic";
    highlightWord = "Clinical Precision";
    sampleTicket = "$4,200 USD";
    agentRole = "Clinical Intake Coordinator";
  } else if (hasTech) {
    industry = "Applied AI & Cloud Software Engineering";
    highlightWord = "Autonomous Scale";
    sampleTicket = "$18,000 ARR";
    agentRole = "Solutions Architect";
  } else if (hasFinance) {
    industry = "Financial Intelligence & Advisory";
    highlightWord = "Frictionless Growth";
    sampleTicket = "$12,500 USD";
    agentRole = "Client Advisor";
  }

  const sampleAiQuestions = [
    {
      question: `What distinguishes ${cleanName} from competitors in the market?`,
      response: `${cleanName} pairs bespoke engineering with guaranteed 14-day turnaround, transparent pricing, and direct technical leadership—completely eliminating agency bloat.`,
      actionTriggered: `Value Proposition Delivered -> Case Study Reel Opened`,
    },
    {
      question: `What is the estimated timeline and budget for a custom implementation?`,
      response: `Our turnkey Lead-to-Booking System deploys in 14 days for a fixed investment of $2,500 USD / ₹75,000 INR (Founding Client offer) with zero hidden fees and a 20-call acceptance test guarantee.`,
      actionTriggered: `Pricing Clarified -> Booking Link Triggered`,
    },
    {
      question: `Can we schedule a 15-minute diagnostic call with your team?`,
      response: `Certainly! I can confirm your preferred time slot right now. What is the best email or WhatsApp number to dispatch the calendar invite?`,
      actionTriggered: `Calendar Reservation Initiated -> Synced to Notion Pipeline`,
    },
  ];

  return {
    slug,
    companyName: cleanName,
    industry,
    location: "Global / Multi-Region",
    websiteUrl: `${slug}.com`,
    tagline: `Engineered High-Performance Platform for ${cleanName}`,
    generatedDate: "October 2026",
    currentSpeedScore: 41,
    currentLoadTime: "5.4s",
    upgradedSpeedScore: 99,
    upgradedLoadTime: "0.4s",
    diagnosedLeak: `Mobile visitors wait 5.4s before the hero loads, and paid traffic has no instant WhatsApp/AI booking capture—causing ~45% of high-intent clicks to bounce.`,
    upgradedBadge: `CUSTOM PROTOTYPE // REDESIGNED FOR ${cleanName.toUpperCase()}`,
    upgradedHeadline: `Accelerate Growth and Customer Trust with`,
    upgradedSubheadline: `A bespoke, sub-500ms digital platform featuring integrated 24/7 AI qualification, automatic WhatsApp routing, and frictionless booking.`,
    primaryCtaText: `Launch ${cleanName} Sprint`,
    sampleAiQuestions,
    auditMetrics: {
      mobileSpeed: { before: 41, after: 99 },
      desktopSpeed: { before: 64, after: 100 },
      firstContentfulPaint: { before: "3.2s", after: "0.4s" },
      largestContentfulPaint: { before: "5.4s", after: "0.4s" },
      cumulativeLayoutShift: { before: "0.22", after: "0.000" },
      estimatedMonthlyLostRevenue: `$12,000+ / mo in missed customer inquiries`,
    },
    critiques: [
      {
        title: "Sub-Second Mobile Speed Fix",
        description: `Mobile load times exceed 5.4s on cellular connections. Migrating to Next.js Edge architecture achieves 0.4s load times and 99/100 PageSpeed scores.`,
        severity: "critical",
      },
      {
        title: "Instant Lead Validation & CRM Routing",
        description: `Replacing unvalidated inputs with Yup form schemas prevents lead drop-off and synchronizes qualified inquiries into WhatsApp and Notion in real time.`,
        severity: "critical",
      },
      {
        title: "24/7 AI & WhatsApp Concierge Add-On",
        description: `Engages evening and weekend prospects automatically, qualifying budget and holding calendar appointments 24/7.`,
        severity: "warning",
      },
    ],
    redesignHero: {
      badge: `CUSTOM PROTOTYPE // REDESIGNED FOR ${cleanName.toUpperCase()}`,
      headline: `Accelerate Growth and Customer Trust with`,
      highlightWord,
      subheadline: `A bespoke, sub-500ms digital platform featuring integrated 24/7 AI qualification, automatic WhatsApp routing, and frictionless booking.`,
      ctaPrimary: `Launch ${cleanName} Sprint`,
      ctaSecondary: `Test Live Interactive Concierge`,
      proofStats: [
        { label: "Target Speed", value: "99/100" },
        { label: "Median Response", value: "<400ms" },
        { label: "Estimated Lift", value: "+175%" },
      ],
      featureCards: [
        {
          title: "Sub-Second Edge Infrastructure",
          description: "Zero layout shift, instantaneous page transitions, and 100/100 Google Lighthouse scores.",
          icon: "Zap",
        },
        {
          title: "24/7 Autonomous WhatsApp Concierge",
          description: "Engage prospects instantly, triage inquiries, and sync lead details into Notion & CRM automatically.",
          icon: "Bot",
        },
        {
          title: "High-Craft Swiss Editorial Design",
          description: "Tactile Alabaster trays, layered elevation, and crisp typographic hierarchy that commands enterprise trust.",
          icon: "Sparkles",
        },
      ],
    },
    aiConciergeDemo: {
      agentName: `Alex (${cleanName} Concierge)`,
      agentRole,
      welcomeMessage: `Hello! I am ${cleanName}'s AI representative. How can I assist you with our services, pricing, or project scheduling today?`,
      samplePrompts: sampleAiQuestions,
      webhookSample: {
        event: "prospect.qualification_completed",
        leadName: `${cleanName} Prospect`,
        intent: "Custom Sprint Evaluation",
        estimatedTicket: sampleTicket,
        channel: "WhatsApp & Web Concierge",
        notionSync: "Active / Lead Pipeline -> Urgent",
        status: "Meeting Slot Dispatched",
      },
    },
    sprintRecommendation: {
      tier: "14-Day Complete Lead-to-Booking System",
      duration: "7 Business Days",
      investment: "$2,500 USD / ₹75,000 INR (Founding Client Offer)",
      deliverables: [
        `Custom Next.js 15 platform with sub-500ms Edge rendering`,
        `24/7 AI Concierge simulator hooked to WhatsApp and Notion`,
        `Tactile Alabaster Bento design system with full mobile responsiveness`,
        `High-converting lead capture funnel with real-time SMS/Email alerts`,
        `Complete codebase handover with zero vendor lock-in`,
      ],
    },
  };
}
