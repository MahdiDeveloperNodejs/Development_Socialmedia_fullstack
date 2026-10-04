const { Router } = require("express");
const { AuthRouter } = require("./modules/auth/auth.routes");
const mainRouter = Router();
// routing and routes

mainRouter.use("/Auth", AuthRouter);

// mainRouter.get("/", (req, res) => {
//   return res.render("index");
// });

module.exports = mainRouter;
