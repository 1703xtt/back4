import { db } from "./src/config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const testConnection = async () => {
  try {
    const productosRef = collection(db, "colxl5"); // Nombre de tu colección
    const snapshot = await getDocs(productosRef);
    const productos = snapshot.docs.map(doc => doc.data());
    console.log("Conexión exitosa. Productos en la colección:", productos);
  } catch (error) {
    console.error("Error conectando a Firestore:", error);
  }
};

testConnection();
