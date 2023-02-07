const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);
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

const blogsRouter = require("./routes/blogRoutes");
app.use("/blog", blogsRouter);

//===================
const todosRouter = require("./routes/todoRouter");
app.use("/todo", todosRouter);

app.listen(9001, () => {
  console.log("banck end running");
});
