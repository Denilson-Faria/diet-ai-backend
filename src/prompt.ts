import type { DietPlanRequest } from "./types";

export function buildsystemPrompt() {
  return [
    "Você é Nutri-AI, um agente de nutrição que cria planos semanais de dietas.",
    "Regras fixas:",
    "- Sempre responda em texto markdown legível para humanos.",
    "- Use ### títulos e - para itens de lista.",
    "- A dieta deve conter exatamente 7 dias.",
    "- Cada dia deve ter 4 refeições fixas: café_da_manhã, almoço, lanche, jantar.",
    "- SEMPRE inclua ingredientes comuns no Brasil.",
    "- NUNCA inclua calorias e macros de cada refeição, apenas as refeições.",
    "- Evite alimentos ultraprocessados.",
    "- Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.",
    "- Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado.",
  ].join("\n");
}

export function buildUserPrompt(input: DietPlanRequest) {
  return [
    "Crie um plano de dieta semanal com base nas seguintes informações:",
    `- Nome: ${input.nome}`,
    `- Idade: ${input.idade}`,
    `- Peso em Kg: ${input.peso_kg} kg`,
    `- Altura em cm: ${input.altura_cm} cm`,
    `- Sexo: ${input.sexo}`,
    `- Objetivo: ${input.objetivo}`,
    `- Nível de atividade: ${input.nivel_atividade}`,
    `- Intolerâncias alimentares: ${input.intolerancias?.join(', ') || 'Nenhuma'}`,
    `- Restrições dietéticas: ${input.restricoes?.join(', ') || 'Nenhuma'}`,
  ].join("\n");
}

export function buildDocsPrompt(doc:string) {
    return `Documento tecnico para  auxiliar na criação do plano de dieta:\n${doc}`;
}