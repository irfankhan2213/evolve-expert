---
name: rapidapi-automation
description: Automated RapidAPI marketplace publishing, OpenAPI 3.0 specification generation, developer documentation, and metered monetization setup.
---

# RapidAPI Automation & Marketplace Publishing

This skill automates the packaging and listing of backend endpoints for the RapidAPI Hub to capture international developer search volume.

## Core Workflows

### 1. OpenAPI 3.0 Generation
Automatically produces a spec file:
- Paths: `POST /api/v1/extract`, `GET /api/v1/health`
- Schemas: Complete JSON request/response models with valid types, example payloads, and error codes.
- Security: Header definitions for `X-RapidAPI-Key` and `X-RapidAPI-Host`.

### 2. Pricing Tier Configuration
Defines market-tested developer tiers:
- **Free Quota**: 50 calls/month (discovery & lead magnet)
- **Basic Tier**: $15/month for 1,000 calls ($0.015 overage)
- **Pro Tier**: $49/month for 5,000 calls ($0.010 overage)
- **Ultra Tier**: $149/month for 20,000 calls ($0.007 overage)

### 3. Developer Onboarding Code Generators
Generates copy-paste code snippets in cURL, JavaScript (Fetch / Axios), Python (Requests), Go, and PHP.
