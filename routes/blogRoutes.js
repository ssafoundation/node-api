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
    single: {
      title: req.body.title,
      description: req.body.description,
    },
  });
  try {
    const blog1 = await blogData.save();
    res.json(blog1);
  } catch {
    res.send(err);
  }
});

module.exports = router;
