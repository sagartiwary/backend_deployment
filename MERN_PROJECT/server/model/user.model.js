const mongoose = require("mongoose");

//schema
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

// Model

const UserModel = mongoose.model("posts", userSchema);
module.exports = {
  UserModel,
};
