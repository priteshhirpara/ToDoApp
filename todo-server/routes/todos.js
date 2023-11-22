const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const ToDo = require("../models/ToDo");
require('dotenv').config({path:__dirname+'\\.env'});
const privateKey = process.env.JWT_PRIVATE_KEY;
router.use(function (req, res, next) {
    if (req.header("Authorization")) {
      try {
        req.payload = jwt.verify(req.header("Authorization"), privateKey, {
          algorithms: ["RS256"],
        });
        next();
      } catch (error) {
        return res.status(401).json({ error: error.message });
      }
    } else {
      return res.status(401).json({ error: "Authorization header missing." });
    }
  });
  
  router.post("/", async function (req, res) {

    const post = new ToDo({
      title:req.body.title,
      description:req.body.description,
      author:req.payload.id
    });
    post
      .save()
      .then((savedToDo) => {
        return res.status(201).json({
          id: savedToDo._id,
          title: savedToDo.title,
          description: savedToDo.description,
          author: savedToDo.author,
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  });
  
  router.get("/", async function (req, res) {
    ToDo.find()
      .where("author")
      .equals(req.payload.id)
      .then((todos) => {
        return res.status(200).json(todos);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  });
  
  router.patch("/:id", async function (req, res) {
    try {
      const { title, description, complete, dateCompleted } = req.body;
  
      const updatedTodo = await ToDo.findOneAndUpdate(
        { _id: req.params.id, author: req.payload.id },
        { title, description, complete, dateCompleted },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found or unauthorized" });
      }
  
      return res.status(200).json({
        id: updatedTodo._id,
        title: updatedTodo.title,
        description: updatedTodo.description,
        complete: updatedTodo.complete,
        dateCompleted: updatedTodo.dateCompleted,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  
  router.delete("/:id", async function (req, res) {
    ToDo.findByIdAndDelete(req.params.id)
      .where("author")
      .equals(req.payload.id)
      .then((todo) => {
        if (todo) {
          return res.status(200).json({
            id: todo._id,
            title: todo.title,
            description: todo.content,});
          }}).catch((error) => {
            return res.status(500).json({ error: error.message });
          });
      });
  
  module.exports = router;
