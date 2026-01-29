import 'dotenv/config';
import OpenAI from "openai";
import fs from "fs";
import { buildsystemPrompt, buildDocsPrompt, buildUserPrompt } from "./prompt.js"; 
import type { DietPlanRequest } from "./types.js";  

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY as string,
   timeout: 2 * 60 * 1000 // 2 minutos
});

export async function* generateDietPlan(input: DietPlanRequest) {
   const diretrizes = fs.readFileSync("knowledge/diretrizes.md", "utf-8");

   const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [ { role: "system", content: buildsystemPrompt() },
         { role: "user", content: buildUserPrompt(input) },
      ],
      temperature: 0.6,
      stream: true,
   });

   for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta?.content;
      if (delta) yield delta;
      
   }




}