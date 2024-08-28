// executado o comando npm install express
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // esta executando o express
const port = 3000;
const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  // a "/" e indicado como rota principal
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
