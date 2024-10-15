const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

conn.sync().then(() => {
  app.listen(3000);
});

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(3000, () => {
  console.log("server on!! http://localhost:3000");
});
