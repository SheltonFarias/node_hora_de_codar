import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, "../templates");
const router = express.Router();

app.get("/", (req, res) => {
  // a "/" e indicado como rota principal
  res.sendFile(`${basePath}/index.html`);
});

app.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  console.log(`O nome do usuario é ${name} e ele tem ${age} anos`);
  res.sendFile(`${basePath}/useform.html`);
});

app.get("/:id", (req, res) => {
  const id = req.params.id; // puxa parametros por ID
  // Leitura da tabela users, resgatar um usuario do banco
  console.log(`Estamos buscando pelo usuario: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});
