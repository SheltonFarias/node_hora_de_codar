const Task = require("../models/Task");

class Taskcontroller {
  static createTask(req, res) {
    res.render("tasks/create");
  }
  static showTasks(req, res) {
    res.render("tasks/all");
  }
}
