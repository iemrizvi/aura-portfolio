import { NextRequest, NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { AURA_SYSTEM_PROMPT } from "@/lib/knowledge";

export const runtime = "nodejs";

type MessageInput = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: MessageInput[] };

    const lcMessages = [
      new SystemMessage(AURA_SYSTEM_PROMPT),
      ...messages.map((m) =>
        m.role === "user" ? new HumanMessage(m.content) : new AIMessage(m.content)
      ),
    ];

    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.3-70b-versatile",
      maxTokens: 350,
      temperature: 0.5,
    });

    const response = await model.invoke(lcMessages);
    const reply = typeof response.content === "string" ? response.content : "";
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}