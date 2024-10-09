const express = require("express");
const exphbs = require("express-hadlebars");

const app = express();

const conn = require("./db/conn");

const Task = require("./models/Task");

const taskRoutes = require("./routes/taskRouter");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRoutes);

app.use(express.json());

app.use(express.static("public"));

conn
  .sync()
  .then(() => {
    app.listen(300);
  })
  .catch((err) => console.log(err));
