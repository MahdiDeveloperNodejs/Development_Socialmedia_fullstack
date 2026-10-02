const express = require("express");
require("dotenv").config();
const path = require("path");
const mainRouter = require("./src/routes");
const AllExpansionHandler = require("./src/common/expansion/AllExpansionHandler");
const NotFoundHandler = require("./src/common/expansion/NotFoundHandler");
//const setHeaders = require("./src/guard/header.guard");

function main() {
  const app = express();
  const PORT = process.env.PORT;
  require("./src/config/config.mongodb");
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  //app.use(setHeaders);//
  app.use("/css", express.static(path.join(__dirname, "public/css")));
  app.use("/js", express.static(path.join(__dirname, "public/js")));
  app.use("/images", express.static(path.join(__dirname, "public/images")));

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  //r
  //NotFoundHandler(app);
  AllExpansionHandler(app);
  app.use(mainRouter);
  app.listen(PORT, () => {
    console.log(`server: http://localhost:${PORT}`);
  });
}
main();

