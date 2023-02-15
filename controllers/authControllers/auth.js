const UserModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//======================= singup =======================
exports.signUp = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { name, userName, email, password, profile } = req.body;
    const user = await UserModel.create({
      name,
      userName,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `Hello ${name} `,
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
};
//================ login =================
exports.login = async (req, res, next) => {
  const { userName, password } = req.body;
  // res.send("Welcome");
  try {
    const user = await UserModel.findOne({ userName });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Username or password incorrect",
      });
    }
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      return res.status(400).json({
        message: "Password dosen't metch!",
      });
    }
    const token = await jwt.sign(
      { userName, _id: user._id },
      process.env.PRIVET_KEY,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
    });
  }
};
//================ get all users =================
//================ update user =================

//================ update user =================
