const portfolioModel = require("../../models/portfolioModel");

exports.portfolioController = async (req, res, next) => {
  try {
    const { image, title, description, tags } = req.body;
    const portfolio = await portfolioModel.create({
      image,
      title,
      description,
      tags,
    });
    res.status(201).json({
      message: `Hello ${portfolio} `,
      portfolio,
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
};
exports.getPortfolioAll = async (req, res, next) => {
  try {
    const portfolio = await portfolioModel.find();
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};
