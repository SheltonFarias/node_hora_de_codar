/*
Rotas com Node.js puro

- Podemos criar um sistema de roteamento simples com Node.js e seus Core Modules;
-As rotas são basicamente as páginas que acessamos nos sites;
- Vamo falar mais sobre esse recurso em outros módulos
- A ideia é identificar os arquivos acessados pela URL e retorná-los, se existirem

*/

import http from "http";
import fs from "fs";
import url from "url";

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { "Contente-Type": "text/html" }); //
        res.write(data); // write vai receber data
        return res.end(); // sempre tem que encerrar a requisição
      });
    } else {
    }
  }
});

server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
