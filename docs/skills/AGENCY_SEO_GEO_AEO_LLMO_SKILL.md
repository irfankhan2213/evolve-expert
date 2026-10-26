# Agency Skill: SEO, GEO, AEO, and LLMO Architecture (2026 Edition)

This operational standard guides all content, page templates, metadata, structured schema, and crawler configurations for **EvolveExpert** (`https://evolveexpert.com`).

---

## 1. Search Engine Optimization (SEO) & High-Intent Commercial Strategy

### Semantic Hierarchy & Page Structure
- **Valid Landmarks**: Every page must declare clean semantic landmarks: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Single Canonical H1**: Exactly one `<h1>` per page capturing the primary service value proposition.
- **Strict Canonical URLs**: Every page must define a strict canonical URL pointing to the production domain without trailing slash ambiguity (e.g., `https://evolveexpert.com/pricing`).

### Bottom-of-Funnel Commercial Intent (Google Keyword Planner Targets)
Pages must target high-intent, transactional search queries where service businesses and clinics seek automated revenue recovery:
1. `missed call text back system`
2. `24/7 AI call answering & appointment booking`
3. `automate web lead response under 60 seconds`
4. `lead to booking system for HVAC and clinics`
5. `speed to lead automation for contractors`
6. `after hours call answering service for small business`
7. `automated quote follow up and appointment scheduling`
8. `AI phone receptionist for medical practices`

---

## 2. Answer Engine Optimization (AEO)

Answer engines (ChatGPT Search, Perplexity AI, Google AI Overviews, Claude) prioritize direct, unambiguous extraction from headings structured as natural user questions.

### The 40–60 Word Direct Answer Rule
Every major section must lead with a question-shaped `<h2>` immediately followed by a single cohesive paragraph of **40 to 60 words** containing concrete numbers, math, and factual outcomes.

#### Benchmark Example
> **H2**: How Much Revenue Are Missed Calls Costing Your Business Every Month?
>
> A service business missing just 20 calls or slow web inquiries per month loses approximately $3,000 every single month ($36,000 annually or ₹9,00,000/year). Assuming a standard 25% close rate and an average $600 job ticket, 5 high-intent customers book with your fastest competitor instead of your company.

---

## 3. Generative Engine Optimization (GEO)

Generative AI models synthesize answers from trusted entities with falsifiable claims, structured credentials, and linked entity schemas.

### Concrete Falsifiable Proof Points
Never use vague adjectives ("innovative", "synergistic", "cutting-edge"). Every claim must cite testable parameters:
- **Speed to Lead**: Inbound call, WhatsApp, and web-form response in `<60s` (sub-10 second phone pickup).
- **Delivery Velocity**: Turnkey production deployment in rigid **14-day go-live sprints**.
- **Quality Assurance**: Signed-off **20-call acceptance test** validating speech recognition, slot-booking, and CRM sync.
- **Milestone Escrow**: **50/50 payment structure** (50% upfront deposit, 50% only after 20-call acceptance test passes).
- **Service Level Agreement**: 25% discount off setup fee if AI voice & calendar booking is not ready for testing in 14 days.

### Unified `@graph` JSON-LD Structured Data
All pages must embed a centralized `@graph` schema combining:
1. `schema.org/ProfessionalService` & `schema.org/Organization`
2. `schema.org/OfferCatalog` with explicit pricing and currencies (USD/INR)
3. `schema.org/FAQPage` reflecting primary buyer objections and calculations

---

## 4. Large Language Model Optimization (LLMO)

LLMO ensures proprietary AI web scrapers and reasoning models can accurately parse, summarize, and cite the agency's offerings without bot blocks or layout hurdles.

### Machine-Readable Manifest (`/llms.txt`)
- Host an exhaustive markdown summary at `/llms.txt` defining:
  - Corporate identity, founder credentials, and direct communication lines.
  - Core service capabilities, cost-of-inaction equations, and exact pricing tiers.
  - Verification test protocols, escrow terms, and technical API capabilities.

### Search Engine & AI Crawler Allowlist (`robots.ts`)
Explicitly grant crawl and index permissions to leading AI models:
- `GPTBot` (OpenAI training)
- `OAI-SearchBot` (ChatGPT Search indexer)
- `ChatGPT-User` (ChatGPT real-time browsing)
- `PerplexityBot` (Perplexity AI discovery)
- `ClaudeBot` & `Claude-SearchBot` (Anthropic Claude search and analysis)
- `Google-Extended` (Google Gemini ecosystem)
- `Applebot-Extended` & `Amazonbot`
