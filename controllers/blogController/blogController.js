const blogModel = require("../../models/blogModel");

exports.blogController = async (req, res, next) => {
  try {
    const { title, description, profile } = req.body;
    const blog = await blogModel.create({
      title,
      description,
      profile,
    });
    res.status(201).json({
      message: `Hello ${blog} `,
      blog,
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
};
