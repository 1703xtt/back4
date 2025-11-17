/*
export class Producto {
  constructor({ docId, producto, descripcion, precio, imagen }) {
    this.docId = docId;
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
  }
}
*/

// ✅ Definición del modelo de Producto
export class Product {
  constructor({ producto, descripcion, precio, imagen }) {
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
  }

  // 🔹 Validación simple antes de guardar
  static validate(data) {
    if (!data.producto || !data.descripcion || !data.precio || !data.imagen) {
      throw new Error("Todos los campos del producto son obligatorios");
    }
  }
}


