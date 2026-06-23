import process from "node:process";
import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-QaXDb8SN.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, e as enumType, a as arrayType } from "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const MessageSchema = objectType({
  role: enumType(["user", "assistant"]),
  content: stringType().min(1).max(2e3)
});
const SYSTEM_PROMPT = `You are a helpful, knowledgeable AI assistant.

Answer the user's questions directly and accurately on whatever topic they bring up — general knowledge, advice, explanations, writing help, ideas, calculations, translations, coding, trade or business topics, etc.

Rules:
- Respond only to what the user actually asks. Do not promote or describe any company, brand, or business.
- Never mention "Beyond Borders Global", company services, suppliers, products, markets, founders, addresses, phone numbers, WhatsApp numbers, or email addresses.
- Do not invite the user to contact anyone or share any contact information.
- Be concise, friendly and clear. Use plain language. Keep answers under ~150 words unless more detail is clearly required.
- If you don't know something, say so honestly.`;
const chatWithAssistant_createServerFn_handler = createServerRpc({
  id: "500732ef2651da76c4b9a7818243d2554bc8b3c8555b748ca6079e9445e99c49",
  name: "chatWithAssistant",
  filename: "src/lib/api/chat.functions.ts"
}, (opts) => chatWithAssistant.__executeServer(opts));
const chatWithAssistant = createServerFn({
  method: "POST"
}).inputValidator((data) => objectType({
  messages: arrayType(MessageSchema).min(1).max(40)
}).parse(data)).handler(chatWithAssistant_createServerFn_handler, async ({
  data
}) => {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) {
    return {
      reply: "AI assistant is not configured yet."
    };
  }
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lovable-API-Key": key
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [{
        role: "system",
        content: SYSTEM_PROMPT
      }, ...data.messages]
    })
  });
  if (res.status === 429) {
    return {
      reply: "I'm getting a lot of requests right now. Please try again in a moment."
    };
  }
  if (res.status === 402) {
    return {
      reply: "The AI assistant is temporarily unavailable. Please try again later."
    };
  }
  if (!res.ok) {
    return {
      reply: "I'm having trouble responding right now. Please try again shortly."
    };
  }
  const json = await res.json();
  const reply = json.choices?.[0]?.message?.content?.trim() ?? "Could you rephrase your question?";
  return {
    reply
  };
});
export {
  chatWithAssistant_createServerFn_handler
};
