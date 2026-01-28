import type { FastifyInstance } from 'fastify';
import { DietPlanRequestSchema } from '../types';
import { generateDietPlan } from '../agent';

export async function planRoutes(app: FastifyInstance) {
  app.post("/plan", async (request, reply) => {
    reply.raw.setHeader("Access-Control-Allow-Origin", "*");
    reply.raw.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    reply.raw.setHeader("Content-type", "text/event-stream");
    reply.raw.setHeader("Cache-Control", "no-cache");
    reply.raw.setHeader("Connection", "keep-alive");

    const parseResult = DietPlanRequestSchema.safeParse(request.body);
    if (!parseResult.success){
      reply.status(400).send("validationError");
      return;
    }

    try {
      for await (const delta of generateDietPlan(parseResult.data)){
        reply.raw.write(delta);
      }

      reply.raw.end();

      reply.raw.end();
    } catch (err: any) {
      request.log.error(err);
      reply.raw.write(`\n[ERRO]: ${err.message}`);
      reply.raw.end();
    }
  });
}
