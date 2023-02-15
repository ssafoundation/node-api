const { signUp, login } = require("../../../controllers/authControllers/auth");

const authRoute = require("express").Router();
authRoute.post("/singup", signUp);
authRoute.post("/login", login);

module.exports = authRoute;
