# Playbook 02: High-Converting Personalized Preview Outbound Cadence

> **Objective:** Convert cold prospects into booked sprint calls using custom interactive previews rather than generic spam templates.

---

## 1. The Weapon: The `/preview/[slug]` Engine

Most cold emails get deleted because they look like generic AI agency spam. EvolveExpert wins because you show up with **pre-engineered proof before asking for money**:
* You take the prospect's brand name, current slow metrics, and logo.
* You add a 2-minute entry into `src/data/previews.ts`.
* You send them a private, interactive prototype link: `https://evolveexpert.com/preview/[company-slug]`.
* The prospect clicks the link and sees their own brand redesigned with a 98 PageSpeed score, live WhatsApp AI preview, and revenue recovery math.

---

## 2. 60-Second Loom Speed Audit Script

Record this on Loom with your camera in the corner, showing their website in the left tab and Google PageSpeed Insights in the right tab:

```text
"Hey [Founder Name],

Was checking out your recent Instagram ad for [Specific Product/Campaign] and noticed the offer is super strong.

However, when I ran your mobile store through Google Lighthouse, your mobile load time is hitting 4.8 seconds. On mobile ads, Google and Deloitte data show that every second above 2 seconds causes a 20% drop-off in paying customers.

I didn't want to just point out a problem without showing a solution, so our engineering team mocked up a sub-0.5s Next.js architecture and automated WhatsApp concierge for [Company Name].

I generated a confidential 1-click preview for your team here:
https://evolveexpert.com/preview/[company-slug]

No sales pitch or meeting required—take a look and let me know if you want the full Core Web Vitals audit deck."
```

---

## 3. The 3-Touch Omnichannel Outbound Sequence

### Touch 1 (Day 1) — The Value Audit (LinkedIn DM / Email)
* **Subject:** `quick mobile speed observation on {{company_name}}'s ads`
```text
Hi {{first_name}},

Noticed {{company_name}} has been running active ads on Instagram for {{product_or_service}}.

Checked your mobile landing page—it's currently loading in ~4.6 seconds on mobile 4G, which is burning ~25% of your ad spend before users even see the add-to-cart button.

We engineered a sub-0.5s prototype and WhatsApp AI concierge concept specifically for {{company_name}}:
https://evolveexpert.com/preview/{{slug}}

Takes 60 seconds to inspect on your phone. Worth a quick look?

Best,
Irfan Khan
Lead Engineer, EvolveExpert Studio
evolveexpert.com
```

### Touch 2 (Day 3) — WhatsApp Voice Note / DM (If phone number is public)
Send a 30-second casual voice note:
```text
"Hey [First Name], Irfan here from EvolveExpert Studio. Dropped you a quick email on Tuesday with a custom Next.js speed preview for [Company Name]. 

We noticed your Meta ads are driving heavy mobile traffic, and our 7-day sprint would cut your mobile bounce rate in half with guaranteed 98+ PageSpeed. 

Sent the link to your email, but you can also tap evolveexpert.com/preview/[slug] right here. Have a great week!"
```

### Touch 3 (Day 7) — The Polite Break-up
```text
Hi {{first_name}},

Assuming optimizing {{company_name}}'s mobile conversion funnel and automated WhatsApp lead capture isn't a priority for this sprint cycle.

I'll step back and archive the prototype link. If things change down the road when you scale ad spend, our door is open.

Best,
Irfan
```
