const { errorResponse, successResponse } = require("../../utils/Response");
const UserModel = require("../user/user.model");
const AuthMessages = require("./auth.message");
const { ValidatorsAndAuth } = require("../../validators/auth_validators");

exports.create = async (req, res, next) => {
  try {
    const { username, email, password, name } = req.body;

    await ValidatorsAndAuth.validate(
      { username, email, password, name },
      { abortEarly: false },
    );

    const isExistByEmailUsername = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isExistByEmailUsername) {
      return errorResponse(res, 400, "همچین شخصی قبلا صبت نام کرده است");
    }

    const isFearsUser = (await UserModel.countDocuments()) == 0;

    let role = "USER";
    if (isFearsUser) {
      role = "ADMIN";
    }

    const newUser = new UserModel({ username, email, password, name });
    newUser = await newUser.save();

    return successResponse(res, 201, {
      message: AuthMessages.CreatedSuccessFully,
      newUser: { ...newUser, password: undefined },
    });
  } catch (error) {
    next(error);
  }
};
