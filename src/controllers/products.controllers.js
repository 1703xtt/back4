// src/controllers/products.controllers.js

import {
  obtenerProductos,
  obtenerProductoPorDocId,
  agregarProducto,
  modificarProducto,
  eliminarProducto
} from "../services/products.services.js";

export const getProductos = async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const docId = Number(req.params.docId);
    const producto = await obtenerProductoPorDocId(docId);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

export const postProducto = async (req, res) => {
  try {
    const producto = req.body;

    await agregarProducto(producto);

    res.status(201).json({ message: "Producto agregado", producto });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar producto" });
  }
};

export const putProducto = async (req, res) => {
  try {
    const docId = Number(req.params.docId);
    const campos = req.body;

    const productoActualizado = await modificarProducto(docId, campos);

    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al modificar producto" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const docId = Number(req.params.docId);

    const eliminado = await eliminarProducto(docId);

    if (!eliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
