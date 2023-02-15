const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
app.use(cors());
const authRoute = require("./routes/users/auth/authRouter");
const userRoute = require("./routes/users/userRoute");
const blogRoute = require("./routes/blog/blogRouter");
const portfolioRoute = require("./routes/portfolio/portfolioRoute");

dotenv.config();
app.use(express.json());
mongoose.set("strictQuery", false);
//========== auth ===========
app.use("/api/auth", authRoute);
//========= users============
app.use("/api/users", userRoute);
//========= blog============
app.use("/api/blog", blogRoute);
//=========== portfolio =================
app.use("/api/portfolio", portfolioRoute);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connectDB();
});
