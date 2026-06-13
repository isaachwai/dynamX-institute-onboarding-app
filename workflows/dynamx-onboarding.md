# DynamX Onboarding Chat — Workflow Spec

## Workflow
**Name:** DynamX Onboarding Chat  
**ID:** yIq0n2hDlkOkRyqY  
**URL:** https://isaachw.app.n8n.cloud/workflow/yIq0n2hDlkOkRyqY

## Webhook

| Property | Value |
|----------|-------|
| Method | POST |
| Path | `dynamx-onboarding` |
| Production URL | `https://isaachw.app.n8n.cloud/webhook/dynamx-onboarding` |
| Test URL | `https://isaachw.app.n8n.cloud/webhook-test/dynamx-onboarding` |
| Response Mode | Via Respond to Webhook node |

## Request Schema

```json
{
  "email": "student@example.com",
  "name": "Jane Smith",
  "question": "What certifications do I need?"
}
```

| Field | Type | Notes |
|-------|------|-------|
| `email` | string | Used as the conversation memory session key |
| `name` | string | Included in context; used for greeting |
| `question` | string | The student's question. Send `"__init__"` on login (no AI response needed) |

## Response Schema

```json
{
  "answer": "You will need the PL-900 and PL-200 certifications..."
}
```

| Field | Type | Notes |
|-------|------|-------|
| `answer` | string | AI-generated response from Claude Sonnet 4.6 |

## Node Flow

```
Onboarding Chat Webhook
  → Normalize Payload (Set)
  → DynamX AI Agent (Claude Sonnet 4.6)
      ↳ [subnode] Conversation Memory (keyed by email, 10 message window)
  → Build Response (Set)
  → Respond to Webhook
```

## AI Model

| Property | Value |
|----------|-------|
| Model | Claude Sonnet 4.6 (`claude-sonnet-4-6`) |
| Credential | Anthropic API (add key: see project `.env`) |
| Memory | Simple Buffer Window — 10 messages per session, keyed by email |
| Streaming | Disabled |

## System Prompt

> You are the DynamX Institute onboarding assistant. DynamX Institute is a training organisation that runs a 10-week Power Platform consulting training, helping students become Microsoft-certified Power Platform consultants. Students complete real business projects, earn the PL-900 and PL-200 Microsoft certifications, and prepare for consulting interviews with Microsoft partners. Answer questions about the training process, certifications, what to expect week by week, and how to prepare for interviews. Keep responses clear, practical, and encouraging.

## Credential Setup (one-time)

1. Open the workflow in n8n
2. Click **Claude Model** node
3. Create a new **Anthropic API** credential
4. Paste the key from `.env` → `ANTHROPIC_API_KEY`
5. Save and publish

## CORS

The Respond to Webhook node sets `Access-Control-Allow-Origin: *` so the frontend can call it from any origin during development and after Vercel deployment.

## Quirks

- The `__init__` question (sent on login) passes through the AI agent and returns an answer — the frontend ignores this response and only uses it to warm the session.
- Conversation memory persists per-email across sessions (n8n in-memory). Memory resets if n8n restarts.
