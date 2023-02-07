const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  single: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("todo", todoSchema);
