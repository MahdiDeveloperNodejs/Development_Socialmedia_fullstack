const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    username: { type: String, required: true, unique: true },
    biography: { type: String },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "/images/profile-1.jpg" },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN"] },
    private: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = model("User", userSchema);
module.exports = UserModel;
