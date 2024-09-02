/*
Enviando dados por POST

- Para enviar os dados vamos precisar criar um form e mandar os dados via POST para alguma URL
- No express precisamos colocar alguns middlewares como express.json para ler os dados do body
- E também uma roda que vai receber estes dados , utilizando o método post do Express
*/

import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // esta executando o express
const port = 3000;
const basePath = path.join(__dirname, "templates");

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  // a "/" e indicado como rota principal
  res.sendFile(`${basePath}/index.html`);
});

// app.get("/users/add", (req, res) => {
//   res.sendFile(`${basePath}/userform.html`);
// });

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuario é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/useform.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id; // puxa parametros por ID

  // Leitura da tabela users, resgatar um usuario do banco
  console.log(`Estamos buscando pelo usuario: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
