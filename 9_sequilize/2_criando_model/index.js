// pesquisar qual pacote o sequelize utilliza para conectar ao postgres

// Criando um model
// - Para criar Model temos que instanciar uma classe que representará uma tabela
// - Um model User cria uma nova tabela chamada users
// - Colocamos os campos e os tipos dele como prioridades do Model;
// - Futuramente ele será utilizado para as operações entre aplicação e banco
// - O método sync faz a criação das tabelas baseada no models

const express = require("express");
const { create } = require("express-handlebars");
const { Client } = require("pg");
const conn = require("./db/conn");
const { User } = require("./models/User");

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

app.use(express.static("public"));

// Definindo uma rota para o caminho "/"
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

// Uma promisse para conectar/criar as tabelas e rodar servidor local
conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));
