const mongoose = require("mongoose");

//schema
const postSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    device: String,
    userID:String,
    user:String
  },
  {
    versionKey: false,
  }
);

// Model

const PostModel = mongoose.model("posted", postSchema);
module.exports = {
  PostModel,
};
