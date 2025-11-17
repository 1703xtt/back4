import jwt from "jsonwebtoken";

export const loginController = (req, res) => {
  const { user, password } = req.body;

  // Validar campos
  if (user == null || password == null) {
    return res.status(400).json({ error: "Usuario y contraseña son requeridos" });
  }

  // Usuario permitido: user numérico 1234, contraseña admin
  if (user === 1234 && password === "admin") {
    const token = jwt.sign(
      { userId: user },
      process.env.JWT_SECRET || "secreto123",
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciales inválidas" });
};
