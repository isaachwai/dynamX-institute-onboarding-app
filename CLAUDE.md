# N8N to App

Convert n8n workflows into deployed web apps. Each app wraps a workflow's webhook with a Next.js + React frontend, ships to GitHub, and auto-deploys on Vercel.

---

## Process (per app)

### Phase 1 — Workflow Audit
Use the **n8n MCP** to inspect the target workflow before touching the frontend.

- [ ] Workflow has a **Webhook** trigger node (receives data from the app)
- [ ] Workflow has a **Respond to Webhook** node (sends response back)
- [ ] Document the request body schema and response schema
- [ ] Fix or add nodes as needed, then retest end-to-end in n8n

### Phase 2 — Frontend Build
Use the **frontend-designer skill** to scaffold and build the UI.

- [ ] Scaffold Next.js app in `apps/[app-name]/`
- [ ] Wire UI inputs → POST to webhook URL → render response
- [ ] Test locally (`npm run dev`)
- [ ] Push to GitHub via **GitHub MCP** → Vercel auto-deploys

---

## Tech Stack

| Layer      | Choice                          |
|------------|---------------------------------|
| Framework  | Next.js (App Router) + React    |
| Styling    | Tailwind CSS + shadcn/ui        |
| Deployment | Vercel (auto-deploy from GitHub)|
| Workflows  | n8n                             |

---

## Tools & MCPs

| Tool                    | Purpose                                      |
|-------------------------|----------------------------------------------|
| n8n MCP                 | Inspect/modify workflows, nodes, configs     |
| GitHub MCP              | Commit and push to GitHub                    |
| n8n skill               | Specialized n8n operations                   |
| frontend-designer skill | UI scaffolding and component design          |

---

## File Structure

```
apps/
  [app-name]/           # One Next.js app per workflow
    src/app/            # App Router pages
    src/components/     # Reusable UI components
    .env.local          # NEXT_PUBLIC_WEBHOOK_URL (never hardcode)
workflows/
  [workflow-name].md    # I/O spec: webhook URL, schemas, quirks
.env                    # Shared secrets (n8n API key, etc.)
```

---

## Rules

1. Always complete the workflow audit before starting the frontend.
2. Webhook URL lives in `.env.local` as `NEXT_PUBLIC_WEBHOOK_URL` — never hardcoded.
3. Create/update `workflows/[name].md` for every workflow you touch.
4. Deploy by pushing to GitHub — do not manually trigger Vercel.
