const {
  getAllUser,
  getSingleUser,
  updateSingleUser,
} = require("../../controllers/userControler");
const { authMiddleware } = require("../../middlewares/auth");

const userRoute = require("express").Router();
userRoute.get("/", authMiddleware, getAllUser);
userRoute.get("/:id", authMiddleware, getSingleUser);
userRoute.put("/:userId", authMiddleware, updateSingleUser);

module.exports = userRoute;
