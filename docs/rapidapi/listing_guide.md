# RapidAPI Hub Marketplace Publisher & Listing Guide: EvolveExpert

> **Target Listing:** EvolveExpert Universal Invoice OCR & Tax Compliance API  
> **OpenAPI Specification Path:** `public/openapi.json`  
> **Target Audience:** Global Software Engineers, Fintech Developers, and Accounting SaaS Builders

---

## 1. Marketplace Metadata & Listing Details

* **API Name:** `EvolveExpert: AI Invoice & Receipt OCR (with Tax & Line Items)`
* **Short Description (<100 characters):**  
  `Extract invoice line items & taxes into structured JSON in <800ms. Zero math errors.`
* **Categories:** `Finance`, `Artificial Intelligence`, `Data`, `Developer Tools`
* **Keywords / Tags:** `invoice parser`, `receipt ocr`, `line items`, `vat validation`, `gstin checksum`, `accounting api`, `pdf to excel`
* **Website URL:** `https://evolveexpert.com`
* **Terms of Use URL:** `https://evolveexpert.com/terms`
* **Privacy Policy URL:** `https://evolveexpert.com/privacy`

---

## 2. RapidAPI Pricing Tiers Configuration

Configure these exact four subscription tiers under **Plans & Pricing** in the RapidAPI Provider Dashboard:

| Tier Name | Monthly Fee | Included Quota | Rate Limit | Overage Fee | Quota Type | Key Features |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BASIC (Magnet)** | **$0.00 / mo** | 50 requests/mo | 5 req/min | N/A (Hard Cap) | Monthly | Free sandbox testing, zero overage risk, standard JSON output. |
| **PRO (Starter)** | **$15.00 / mo** | 1,000 requests/mo | 60 req/min | $0.015 / request | Monthly | Line-item tables, math reconciliation, full tax validation. |
| **ULTRA (Most Popular)** | **$49.00 / mo** | 5,000 requests/mo | 120 req/min | $0.010 / request | Monthly | Priority queue (<750ms latency), 38-state GSTIN + EU VAT check. |
| **MEGA (Enterprise)** | **$199.00 / mo** | 25,000 requests/mo | 300 req/min | $0.008 / request | Monthly | Dedicated SLA guarantee, batch processing, 24/7 engineering support. |

---

## 3. Multi-Language SDK Snippets

### 1. cURL
```bash
curl --request POST \
  --url https://evolveexpert.com/api/v1/extract-and-validate \
  --header 'Content-Type: application/json' \
  --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  --data '{
    "sampleProfile": "india-gst"
  }'
```

### 2. Node.js (TypeScript / Fetch)
```typescript
const response = await fetch("https://evolveexpert.com/api/v1/extract-and-validate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
  },
  body: JSON.stringify({
    sampleProfile: "india-gst",
  }),
});

const data = await response.json();
console.log("Grand Total:", data.data.totals.grandTotal);
console.log("Tax Checksum Status:", data.data.vendor.taxCompliance.checksumValid);
```

### 3. Python (HTTPX / Requests)
```python
import httpx

url = "https://evolveexpert.com/api/v1/extract-and-validate"
headers = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY"
}
payload = {
    "sampleProfile": "india-gst"
}

with httpx.Client(timeout=10.0) as client:
    response = client.post(url, json=payload, headers=headers)
    result = response.json()
    print("Extracted Vendor:", result["data"]["vendor"]["name"])
    print("Math Reconciled:", result["data"]["reconciliation"]["isReconciled"])
```

### 4. Go (Native net/http)
```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://evolveexpert.com/api/v1/extract-and-validate"
	payload, _ := json.Marshal(map[string]string{
		"sampleProfile": "india-gst",
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))
}
```
