// testServer.js
import http from "http";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQsImlhdCI6MTc2MzEyNjE3MiwiZXhwIjoxNzYzMTI5NzcyfQ.6-P5nfHu4CUcKk7yaV93V6OHPZBlxNuBbKh3HVQ4030";

const endpoints = [
  { path: "/api/products", label: "📦 Productos (GET)" },
  { path: "/api/nada", label: "🚫 Ruta inexistente (404)" },
  { path: "/api/error", label: "🔥 Error forzado (500)" },
];

endpoints.forEach(({ path, label }) => {
  const options = {
    hostname: "localhost",
    port: 3000,
    path,
    method: "GET",
    headers: {
      Authorization: TOKEN,
      "Content-Type": "application/json",
    },
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      console.log(`\n${label}`);
      console.log(`➡️ ${path}`);
      console.log(`Status: ${res.statusCode}`);
      console.log(`Response: ${data}`);
    });
  });

  req.on("error", (err) => {
    console.error(`❌ Error al probar ${path}:`, err.message);
  });

  req.end();
});
