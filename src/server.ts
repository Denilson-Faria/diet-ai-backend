import Fastify from "fastify";
import cors from "@fastify/cors";
import { planRoutes } from "./routes/plan";

const app = Fastify({
  logger: true,
});

async function start() {
  
  await app.register(cors, {
    origin: true, 
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  });

  app.get("/teste", async () => {
    return { status: "ok", message: "API is running!" };
  });

  app.register(planRoutes);

  try {
    const PORT = Number(process.env.PORT) || 3333;
    
    await app.listen({
      port: PORT,
      host: "0.0.0.0",
    });

    console.log(`🚀 Server is running on port ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();