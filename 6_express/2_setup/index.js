/* 
Primeiros passos

- O setup inicial do Express é simples, mas precisamos seguir alguns passos
- Importar o Express e invocá-lo
- Definir uma porta base para a aplicação
- Criar um rota (URL que será acessada)
- Executar o método listen na porta específica
*/

// executado o comando npm install express

import express from "express";

const app = express(); // esta executando o express
const port = 3000;

app.get("/", (req, res) => {
  // a "/" e indicado como rota principal
  res.send("Olá Mundo!!");
});

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
