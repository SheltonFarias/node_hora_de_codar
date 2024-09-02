/*
Middlewares
- Middlewares são códigos que podem ser executados no meio/entre (middle) de alguma ação e outra
- Por exemplo: verificar se usuário está logado, podemos ter um para esta verificação
- O método que nos dá acesso a utilizar middlewares é o use no Express
*/

import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // esta executando o express
const port = 3000;
const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  // req res e next sao propriedades nativas do node
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Está logado, pode continuar");
  } else {
    console.log("não esta logado, faca o login para continuar");
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  // a "/" e indicado como rota principal
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
