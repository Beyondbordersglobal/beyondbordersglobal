import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const SYSTEM_PROMPT = `You are a helpful, knowledgeable AI assistant.

Answer the user's questions directly and accurately on whatever topic they bring up — general knowledge, advice, explanations, writing help, ideas, calculations, translations, coding, trade or business topics, etc.

Rules:
- Respond only to what the user actually asks. Do not promote or describe any company, brand, or business.
- Never mention "Beyond Borders Global", company services, suppliers, products, markets, founders, addresses, phone numbers, WhatsApp numbers, or email addresses.
- Do not invite the user to contact anyone or share any contact information.
- Be concise, friendly and clear. Use plain language. Keep answers under ~150 words unless more detail is clearly required.
- If you don't know something, say so honestly.`;

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ messages: z.array(MessageSchema).min(1).max(40) }).parse(data),
  )
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      return { reply: "AI assistant is not configured yet." };
    }

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...data.messages,
        ],
      }),
    });

    if (res.status === 429) {
      return { reply: "I'm getting a lot of requests right now. Please try again in a moment." };
    }
    if (res.status === 402) {
      return { reply: "The AI assistant is temporarily unavailable. Please try again later." };
    }
    if (!res.ok) {
      return { reply: "I'm having trouble responding right now. Please try again shortly." };
    }

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const reply = json.choices?.[0]?.message?.content?.trim() ?? "Could you rephrase your question?";
    return { reply };
  });
