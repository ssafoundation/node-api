const {
  portfolioController,
  getPortfolioAll,
} = require("../../controllers/portfolioController/portfolioController");

const portfolioRoute = require("express").Router();
portfolioRoute.get("/", getPortfolioAll);
portfolioRoute.post("/", portfolioController);

module.exports = portfolioRoute;
