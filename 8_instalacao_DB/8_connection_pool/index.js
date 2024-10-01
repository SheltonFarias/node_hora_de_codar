const express = require("express");
const { create } = require("express-handlebars");
const { Client } = require("pg");
const pool = require("./db/conn");

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

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM farias";

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    console.log(books);

    res.render("books", { books });
  });
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO farias (title, pageqty) values ('${title}', '${pageqty}')`;

  pool.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/");
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM farias WHERE id = ${id} `;

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("book", { book });
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM FARIAS WHERE id = ${id}`;

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];

    res.render("editbook", { book });
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `UPDATE books SET title = ${title}, pageqty = ${pageqty} WHERE id = ${id}`;

  pool.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE id = ${id}`;

  pool.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
