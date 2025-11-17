import dotenv from "dotenv";
dotenv.config();

console.log("🔐 JWT_SECRET cargado:", process.env.JWT_SECRET);

import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

// Middlewares
import { logger } from "./src/middlewares/logger.js";
import { notFound } from "./src/middlewares/notFound.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
  origin: ["http://localhost:3000", "https://midominio.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(logger);

// Rutas principales
app.use("/api", rutasProductos); 
app.use("/auth", authRoutes);

// Rutas no encontradas
app.use(notFound);

// Manejo global de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
