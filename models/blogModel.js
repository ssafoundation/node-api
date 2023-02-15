const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
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

    profile: {
      type: String,
      default: "avatar.png",
    },
  },
  {
    timestamps: true,
  }
);
const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;
