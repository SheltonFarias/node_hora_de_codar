import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.write("oi http"); // informando esse objeto no navegador
  res.end();
});

server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
