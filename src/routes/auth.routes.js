import express from "express";
import { loginController } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /auth/login → devuelve un token JWT si las credenciales son válidas
router.post("/login", loginController);

export default router;
