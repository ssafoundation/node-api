const UserModel = require("../models/userModel");

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};
exports.getSingleUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};
exports.updateSingleUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Wrong user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};
