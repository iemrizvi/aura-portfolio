# AURA Portfolio — Sakina Rizvi

A Next.js portfolio website with **AURA**, an AI assistant powered by LangChain + Groq.

The API key lives in a `.env.local` file on your machine  and is **never exposed to the browser**. All AI calls go through a Next.js API route.

---

## Project Structure

```
aura-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        ← LangChain + Groq, server-only
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
GROQ_API_KEY = your-groq-key-here
```


### 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 — the portfolio loads with the AURA chat button in the bottom-right corner.

---

## How AURA Works

```
Browser (user types)
      ↓
POST /api/chat   (Next.js API route — server only)
      ↓
LangChain 
  + AURA_SYSTEM_PROMPT from lib/knowledge.ts
      ↓
Groq API 
      ↓
Reply sent back to browser
```

- `lib/knowledge.ts` is **never bundled into the browser** — it's server-side only
- The API key is read from `process.env.GROQ_API_KEY` — also server-side only
- Conversation history is kept in React state on the client and sent with each request

---

