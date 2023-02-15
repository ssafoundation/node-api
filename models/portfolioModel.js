const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },

    tags: [{ type: String, trim: true, required: true }],
  },
  {
    timestamps: true,
  }
);
const portfolioModel = mongoose.model("Portfolio", portfolioSchema);
module.exports = portfolioModel;
