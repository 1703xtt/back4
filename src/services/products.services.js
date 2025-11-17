import { db } from "../config/firebase.js";
import { collection, getDocs, query, where, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Obtener todos los productos
export const obtenerProductos = async () => {
  const productosRef = collection(db, "colxl5");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(d => d.data());
};

// Obtener producto por docId
export const obtenerProductoPorDocId = async (docId) => {
  const productosRef = collection(db, "colxl5");
  const q = query(productosRef, where("docId", "==", docId));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return snapshot.docs[0].data();
};

// Agregar producto
export const agregarProducto = async (producto) => {
  const productosRef = collection(db, "colxl5");
  await addDoc(productosRef, producto);
  return producto;
};

// Modificar producto
export const modificarProducto = async (docId, campos) => {
  const productosRef = collection(db, "colxl5");
  const q = query(productosRef, where("docId", "==", docId));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;

  const docRef = doc(db, "colxl5", snapshot.docs[0].id);
  await updateDoc(docRef, campos);
  const updatedSnapshot = await getDocs(query(collection(db, "colxl5"), where("docId", "==", docId)));
  return updatedSnapshot.docs[0].data();
};

// Eliminar producto
export const eliminarProducto = async (docId) => {
  const productosRef = collection(db, "colxl5");
  const q = query(productosRef, where("docId", "==", docId));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return false;

  const docRef = doc(db, "colxl5", snapshot.docs[0].id);
  await deleteDoc(docRef);
  return true;
};
