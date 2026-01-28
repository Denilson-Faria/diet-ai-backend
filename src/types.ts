import {z} from "zod";

export const DietPlanRequestSchema = z.object({
    nome: z.string().min(2),
    idade: z.number().positive(),
    peso_kg: z.number().positive(),
    altura_cm: z.number().positive(),
    sexo: z.enum(['masculino', 'feminino']),
    objetivo: z.enum(['perder_peso', 'hipertrofia', 'manter_peso']),
    nivel_atividade: z.enum(['sedentario', '2x semana', '3x semana', 'intenso']),
    intolerancias: z.array(z.string()).optional(),
    restricoes: z.array(z.string()).optional(),
});

export type DietPlanRequest = z.infer<typeof DietPlanRequestSchema>;