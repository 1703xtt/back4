import express from "express";
import {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/products.controllers.js"; // asegurate del plural "controllers"

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Aplicar autenticación a todas las rutas
router.use(authMiddleware);

// 🔹 Rutas de productos
router.get("/products", getProductos);
router.get("/products/:docId", getProducto);
router.post("/products/create", postProducto);
router.put("/products/:docId", putProducto);
router.delete("/products/:docId", deleteProducto);

export default router;
