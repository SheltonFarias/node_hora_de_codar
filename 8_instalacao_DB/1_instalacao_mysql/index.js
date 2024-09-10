const express = require("express");
const { create } = require("express-handlebars");
const { Client } = require("pg");

const app = express();

// Criando uma instância do Handlebars
const hbs = create({ extname: ".handlebars" });

// Configurando o Handlebars como engine de template
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Definindo uma rota para o caminho "/"
app.get("/", (req, res) => {
  res.render("home");
});

// Configurando o cliente do PostgreSQL
const client = new Client({
  user: "postgres",
  host: "localhost", // Ou o host do seu servidor PostgreSQL
  database: "teste",
  password: "tributario",
  port: 5432, // Porta padrão do PostgreSQL
});

// Conectando ao banco e inicializando o servidor
client.connect(function (err) {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }

  console.log("Banco de dados conectado");

  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
});
