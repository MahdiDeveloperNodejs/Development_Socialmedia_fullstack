const { default: autoBind } = require("auto-bind");
const UserModel = require("../user/user.model");
const createHttpError = require("http-errors");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async create(name, password, email, username) {
    const isFirstUser = (await UserModel.countDocuments()) === 0;
    let role = "USER";
    if (isFirstUser) {
      role = "ADMIN";
    }

    const createUser = await this.#model.create({
      email,
      username,
      password,
      name,
      role,
    });
    return createUser;
  }

  async isExistUser(email, username) {
    const isExistUsers = await this.#model.findOne({
      $or: [{ email }, { username }],
    });
    if (isExistUsers)
      throw new createHttpError.Unauthorized(AuthMessages.alreadyRegistered);
  }
}

module.exports = new AuthService();
