const express = require("express");
const router = express.Router();

const Blog = require("../models/blog");
//======get blog list
router.get("/", async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
  } catch {
    res.send(err);
  }
});
//======post blog list
router.post("/", async (req, res) => {
  const blogData = new Blog({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const blog1 = await blogData.save();
    res.json(blog1);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
