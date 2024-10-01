// pesquisar qual pacote o sequelize utilliza para conectar ao postgres

const express = require("express");
const { create } = require("express-handlebars");
const { Client } = require("pg");
const conn = require("./db/conn");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Criando uma instância do Handlebars
const hbs = create({ extname: ".handlebars" });

// Configurando o Handlebars como engine de template
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Definindo uma rota para o caminho "/"
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
