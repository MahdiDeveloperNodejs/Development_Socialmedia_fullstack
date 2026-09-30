const { Router } = require("express");
const mainRouter = Router();
// routing and routes

mainRouter.get("/", (req, res) => {
  return res.render("index");
});

module.exports = mainRouter;
