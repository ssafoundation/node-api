const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    next();
    // if (!token) {
    //   return res.status(401).json({
    //     message: "Access not allowed",
    //   });
    // }
    // const sToken = token.split(" ")[1];
    // const decode = jwt.verify(sToken, process.env.PRIVET_KEY);
    // const id = decode.id;
    // const user = await UserModel.findById(id);
    // req.user = user;
    // next();
  } catch (error) {
    res.status(401).json({ message: "Invalid" });
  }
  // next();
};
