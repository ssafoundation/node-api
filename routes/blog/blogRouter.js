const {
  blogController,
} = require("../../controllers/blogController/blogController");

const blogRoute = require("express").Router();
blogRoute.post("/", blogController);

module.exports = blogRoute;
