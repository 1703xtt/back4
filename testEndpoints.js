import fetch from "node-fetch";

const BASE_URL = "http://localhost:3000/api/products";

// 🔹 PEGÁ ACÁ TU TOKEN JWT
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQsImlhdCI6MTc2MzM5NDUzOCwiZXhwIjoxNzYzMzk4MTM4fQ.efCck4ctHdQ_JLeLpx_Sv2hLWNDpFOnytGpY3JmxVRg";

// 🔹 Helper para agregar headers del token
const authHeaders = {
  "Content-Type": "application/json",
  Authorization: TOKEN,
};

const runTests = async () => {
  try {
    console.log("1. Obtener todos los productos:");
    let res = await fetch(BASE_URL, { headers: authHeaders });
    let data = await res.json();
    console.log(data);

    console.log("\n2. Agregar nuevo producto:");
    const nuevoProducto = {
      docId: 99,
      producto: "Prueba Producto",
      descripcion: "Descripción de prueba",
      precio: 123,
      imagen: "url-prueba",
    };

    res = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(nuevoProducto),
    });
    data = await res.json();
    console.log(data);

    console.log("\n3. Obtener producto por docId:");
    res = await fetch(`${BASE_URL}/99`, { headers: authHeaders });
    data = await res.json();
    console.log(data);

    console.log("\n4. Modificar producto:");
    const camposActualizados = { precio: 999, descripcion: "Actualizado" };

    res = await fetch(`${BASE_URL}/99`, {
      method: "PUT",
      headers: authHeaders,
      body: JSON.stringify(camposActualizados),
    });
    data = await res.json();
    console.log(data);

    console.log("\n5. Eliminar producto:");
    res = await fetch(`${BASE_URL}/99`, {
      method: "DELETE",
      headers: authHeaders,
    });
    data = await res.json();
    console.log(data);

    console.log("\n6. Verificar productos finales:");
    res = await fetch(BASE_URL, { headers: authHeaders });
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error en los tests:", error);
  }
};

runTests();
