import express from "express";
import users from "./users";

const app = express(); // esta executando o express
const port = 3000;

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/users", users);

app.listen(port, () => {
  console.log(`servidor ON! http://localhost:${port}`);
});
