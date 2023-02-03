const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
mongoose.connect(
  "mongodb://127.0.0.1:27017/blog",
  // "mongodb+srv://techMass:sabah@cluster0.vctvobn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connectMongodd = mongoose.connection;
connectMongodd.on("open", () => {
  console.log("database connection successful");
});
app.use(express.json());

const blogsRouter = require("./routes/blogRoutes");
app.use("/blog", blogsRouter);

app.listen(9001, () => {
  console.log("banck end running");
});
