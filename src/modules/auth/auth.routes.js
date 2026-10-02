const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();

router.post("/create", authController.create);

module.exports = {
  AuthRouter: router,
};
