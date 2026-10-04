const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");

class AuthController {
  #Model;
  constructor() {
    autoBind(this);
    this.#Model = UserModel;
  }
  async create(req, res, next) {
    try {
      const { name, email, password, username } = req.body;
      console.log("name, email, password, username");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
