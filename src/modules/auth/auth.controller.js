const { default: autoBind } = require("auto-bind");
const authService = require("./auth.service");

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }

  async create(req, res, next) {
    try {
      const { email, username, name, password } = req.body;
      await this.#service.create({
        email,
        username,
        name,
        password,
      });
      return res.status(201).json({
        message: AuthMessages.CreatedSuccessFully,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
