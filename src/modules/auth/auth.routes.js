const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();

router.route("/create").get(authController.registerer).post(authController.create);

module.exports = {
  AuthRouter: router,
};
