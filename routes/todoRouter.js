const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");
//======get todo list
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch {
    res.send(err);
  }
});
//======post todo list
router.post("/", async (req, res) => {
  const todoData = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const todo1 = await todoData.save();
    res.json(todo1);
  } catch {
    res.send(err);
  }
});

module.exports = router;
