export const errorHandler = (err, req, res, next) => {
  console.error("Error interno:", err.message);
  res.status(500).json({ error: "Error interno del servidor" });
};
