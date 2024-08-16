import http from "http";
import fs from "fs";
import url from "url";

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Contente-Type": "text/html" }); //
      res.write(data); // write vai receber data
      return res.end(); // sempre tem que encerrar a requisição
    });
  } else {
    const nameNewLine = name + ",\r\n"; // vai trazer o nome juntamento com uma quebra de linha

    fs.appendFile("arquivo.txt", nameNewLine, (err, data) => {
      res.writeHead(302, {
        location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
