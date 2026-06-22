# Home Renovation Estimator — Workflow Spec

## Webhook

| Property | Value |
|----------|-------|
| **Live URL** | `https://isaachw.app.n8n.cloud/webhook/home-reno-estimator` |
| **Test URL** | `https://isaachw.app.n8n.cloud/webhook-test/home-reno-estimator` |
| **Method** | POST |
| **n8n Workflow ID** | `xAVR2ITqenuDDLRu` |

## Request Body Schema

```json
{
  "roomType": "bathroom",
  "squareFootage": 50
}
```

| Field | Type | Required | Values |
|-------|------|----------|--------|
| `roomType` | string | yes | `bathroom`, `kitchen`, `bedroom`, `living room` |
| `squareFootage` | number | yes | Positive integer (e.g. 50, 120, 250) |

## Response Schema

```json
{
  "roomType": "bathroom",
  "squareFootage": 50,
  "summary": {
    "budget": { "min": 1844, "max": 2254, "currency": "USD" },
    "premium": { "min": 8690, "max": 10622, "currency": "USD" }
  },
  "categories": [
    {
      "name": "Flooring",
      "items": [
        {
          "material": "Ceramic/Porcelain Floor Tile",
          "quantity": 55,
          "unit": "sq ft",
          "budget": { "unitPrice": 1.99, "total": 109.45, "brand": "Style Selections (Lowe's)" },
          "premium": { "unitPrice": 9.99, "total": 549.45, "brand": "Emser Tile – Natural Stone Marble" },
          "notes": "Quantity includes 10% waste factor over 50 sq ft base area."
        }
      ]
    }
  ],
  "tips": [
    "Waterproofing is non-negotiable: always apply a waterproofing membrane...",
    "Rough-in plumbing first..."
  ]
}
```

## Node Chain

```
Webhook (POST) → Normalize Inputs (Set) → Home Renovation Estimator AI (Agent) → Send Estimate Response (Respond to Webhook)
```

### Node Details

**Webhook — "Receive Estimate Request"**
- `httpMethod: POST`, `path: home-reno-estimator`
- `responseMode: responseNode` (defers response to Respond to Webhook node)
- `options.allowedOrigins: *` (CORS enabled)

**Set — "Normalize Inputs"**
- Extracts `roomType` from `$json.body?.roomType ?? $json.roomType`, lowercased and trimmed
- Extracts `squareFootage` as Number from `$json.body?.squareFootage ?? $json.squareFootage`

**AI Agent — "Home Renovation Estimator AI"**
- Model: Claude Sonnet 4.6 via "Anthropic account" credential
- `promptType: define` with user message: `Room type: {roomType}\nSquare footage: {squareFootage} sq ft`
- `hasOutputParser: true` (uses Structured Output Parser subnode)
- System prompt instructs Claude on categories per room, waste factors, 2024-2025 USD pricing, budget vs premium tiers
- Subnode: **"Renovation Estimate Schema"** (outputParserStructured v1.3)
  - `schemaType: fromJson` with example JSON matching the full response schema
  - `autoFix: true` — retries parsing if Claude returns empty/malformed output

**Respond to Webhook — "Send Estimate Response"**
- `respondWith: json`
- `responseBody: {{ $json.output }}` (the parsed structured object)
- CORS header: `Access-Control-Allow-Origin: *`

## Performance Notes

- **Response time**: ~60-90 seconds. Claude generates a detailed multi-category estimate.
- **Frontend must**: show a loading state for the full duration. Do not use a short timeout.
- **Auto-fix**: if Claude returns an empty response (intermittent), the parser auto-retries — adds ~30s extra on bad runs.

## Quirks

- The `outputParserStructured` node requires `jsonSchemaExample` as a **JSON string**, not a JS object. Passing an object causes a `"[object Object] is not valid JSON"` error.
- Response time exceeds typical HTTP client default timeouts (30s) — set client timeout to at least 120s.
- Categories vary by room type: bathroom has 6 categories; bedroom has 4. The frontend must render dynamically.
