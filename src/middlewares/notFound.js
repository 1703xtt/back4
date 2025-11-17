export const notFound = (req, res) => {
  res.status(404).json({ error: "Recurso no encontrado o ruta inválida" });
};
