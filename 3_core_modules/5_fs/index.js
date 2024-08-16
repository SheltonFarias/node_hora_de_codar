import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("mensagem.html", (err, data) => {
    /* readFile aceita dois argumentos o arquivo.html e uma funçao(com erro e os dados) */
    res.writeHead(200, { "Contente-Type": "text/html" }); //
    res.write(data); // write vai receber data
    return res.end(); // sempre tem que encerrar a requisição
  });
});

server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
