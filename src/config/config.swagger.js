const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
  const swaggerD = swaggerJsDoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Project And Sosa's",
        version: "1.0.0",
        description: "Routing and Swagger",
      },
    },

    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });

  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerD));
}

module.exports = swaggerConfig;
