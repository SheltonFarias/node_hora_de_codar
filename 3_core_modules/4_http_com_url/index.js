import http from "http";
import url from "url";

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true); // transforma a url em um string de melhor manipulação

  const name = urlInfo.query.name; // pega o elemento informado na url

  res.statusCode = 200;

  res.setHeader("Contenty-Type", "text/html");

  if (!name) {
    res.end(
      "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/> <input type='submit' value='enviar'></form>"
    );
  } else {
    res.end(`<h1>Seja Bem vindo ${name}</h1>`);
  }
});

server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
