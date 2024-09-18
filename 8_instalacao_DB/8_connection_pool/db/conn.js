// limitando as conexões e fazendo ela antes da aplicação

const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "postgres",
  host: "localhost", // Ou o host do seu servidor PostgreSQL
  database: "farias",
  password: "tributario",
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
