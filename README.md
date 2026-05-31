# AURA Portfolio — Sakina Rizvi

A Next.js portfolio website with **AURA**, an AI assistant powered by LangChain + Anthropic Claude.

The API key lives in a `.env.local` file on your machine (or in Netlify environment variables) and is **never exposed to the browser**. All AI calls go through a Next.js API route.

---

## Project Structure

```
aura-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        ← LangChain + Anthropic, server-only
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   └── page.tsx                ← Portfolio UI
├── components/
│   ├── AuraChat.tsx            ← Chat widget (client component)
│   └── AuraChat.module.css
├── lib/
│   └── knowledge.ts            ← PRIVATE knowledge base, server-only
├── .env.example                ← Template — copy to .env.local
├── .gitignore                  ← .env.local is excluded
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your API key

Copy the example env file:

```bash
cp .env.example .env.local
```

Then open `.env.local` and replace the placeholder:

```
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

Get your key from: https://console.anthropic.com/

### 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 — the portfolio loads with the AURA chat button in the bottom-right corner.

---

## Deploying to Netlify

### Option A — Drag & Drop (quick)

1. Run `npm run build` locally
2. Drag the `.next` folder into Netlify — **this won't work** for Next.js server routes.
   Use Option B instead.

### Option B — Netlify Git Deploy (recommended)

1. Push this project to a GitHub repository (`.env.local` is in `.gitignore` so it won't be included)

2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**

3. Connect your GitHub repo

4. Netlify auto-detects Next.js. Build settings should be:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

5. Go to **Site settings → Environment variables** and add:
   ```
   ANTHROPIC_API_KEY = sk-ant-your-key-here
   ```

6. Deploy — done. AURA will work on the live site because the API key is injected at build/runtime by Netlify.

---

## How AURA Works

```
Browser (user types)
      ↓
POST /api/chat   (Next.js API route — server only)
      ↓
LangChain ChatAnthropic
  + AURA_SYSTEM_PROMPT from lib/knowledge.ts
      ↓
Anthropic API (claude-sonnet-4-20250514)
      ↓
Reply sent back to browser
```

- `lib/knowledge.ts` is **never bundled into the browser** — it's server-side only
- The API key is read from `process.env.ANTHROPIC_API_KEY` — also server-side only
- Conversation history is kept in React state on the client and sent with each request

---

## Adding Social Media Links

Open `app/page.tsx` and find the `headerLinks` section. Add more `<a>` tags following the same pattern as the GitHub and LinkedIn links.

---

## Customizing AURA

To update what AURA knows, edit `lib/knowledge.ts`. It's a plain TypeScript string — just edit the text. Redeploy after changes.
