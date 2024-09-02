/*
Parâmetros por URL

- Podemos resgatar os parâmetros da url por meio do req
- Acessamos req.params.<nome>;
- Onde nome deve ser o que esta definido na URL do Express
- Que fica desta forma:/users/:id
- Neste caso estaríamos buscando o usuario no banco de dados pelo id;
*/

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

app.get("/users/:id", (req, res) => {
  const id = req.params.id; // puxa parametros por ID

  // Leitura da tabela users, resgatar um usuario do banco
  console.log(`Estamos buscando pelo usuario: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
