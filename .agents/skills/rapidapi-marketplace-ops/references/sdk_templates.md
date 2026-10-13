# Multi-Language SDK Snippets

## cURL
```bash
curl -X POST https://docupulse.p.rapidapi.com/api/v1/extract \
  -H "Content-Type: application/json" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: docupulse.p.rapidapi.com" \
  -d '{"documentTypeHint": "invoice", "image": "data:image/png;base64,..."}'
```

## Node.js (Fetch)
```javascript
const response = await fetch("https://docupulse.p.rapidapi.com/api/v1/extract", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": "docupulse.p.rapidapi.com"
  },
  body: JSON.stringify({ documentTypeHint: "invoice", image: base64Data })
});
const data = await response.json();
```

## Python (Requests)
```python
import requests

url = "https://docupulse.p.rapidapi.com/api/v1/extract"
headers = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "docupulse.p.rapidapi.com"
}
response = requests.post(url, json={"documentTypeHint": "invoice", "image": base64_data}, headers=headers)
data = response.json()
```

## Go (net/http)
```go
req, _ := http.NewRequest("POST", "https://docupulse.p.rapidapi.com/api/v1/extract", bytes.NewBuffer(payload))
req.Header.Set("Content-Type", "application/json")
req.Header.Set("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
req.Header.Set("X-RapidAPI-Host", "docupulse.p.rapidapi.com")
resp, _ := http.DefaultClient.Do(req)
```
