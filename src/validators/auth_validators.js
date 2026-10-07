const yup = require("yup");

exports.ValidatorsAndAuth = yup.object({
  email: yup
    .string()
    .email("این فیلد نا متبر هست لفا درست وارد کنید ")
    .required("امیل رو وارد کنید"),
  username: yup.string().required("یوزرنیم رو درست وارد کنید").min(3),
  password: yup.string().required(),
  name: yup.string().required().min(3),
});
