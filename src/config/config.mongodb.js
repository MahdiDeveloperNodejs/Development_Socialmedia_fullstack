const { default: mongoose } = require("mongoose");

require("dotenv").config();
const URL = process.env.URL_MONGODB;

async function connected() {
  await mongoose
    .connect(URL)
    .then(console.log(`Mongodb and Connected.`))
    .catch((err) => {
      console.log(err, "mongodb dent connected");
      process.exit(1);
    });
}

connected();
