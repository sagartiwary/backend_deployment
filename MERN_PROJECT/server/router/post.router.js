const express = require("express");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middleware");
// const cors=require('cors')
// postRouter.use(cors())
postRouter.use(auth);
postRouter.post("/create", async (req, res) => {
  try {
    let newPost = new PostModel(req.body);
    await newPost.save();
    res.status(200).json({ msg: "new post added", post: newPost });
  } catch (error) {
    res.status(400).json({ msg: "something missing" });
  }
});
//get
postRouter.get("/", async (req, res) => {
  try {
    let post = await PostModel.find({ userID: req.body.userID });
    res.send(post);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

postRouter.patch("/update/:postID", async (req, res) => {
  let userDocID = req.body.userID;
  // console.log("userDocID:", userDocID, "postDocId", postID);
  try {
    let { postID } = req.params;
    let post = await PostModel.findOne({ _id: postID });
    let postedDocId = post.userID;
    if (userDocID === postedDocId) {
      await PostModel.findByIdAndUpdate({ _id: postID }, req.body);
      res.status(200).json({ msg: "Post has been updated" });
    } else {
      res.status(400).json({ msg: "Post didnot updated" });
    }
  } catch (error) {
    console.log("something error");
    res.status(400).json({ err: error.message });
  }
});

postRouter.delete("/delete/:postID", async (req, res) => {
  let userDocID = req.body.userID;
  // console.log("userDocID:", userDocID, "postDocId", postID);
  try {
    let { postID } = req.params;
    let post = await PostModel.findOne({ _id: postID });
    let postedDocId = post.userID;
    if (userDocID === postedDocId) {
      await PostModel.findByIdAndDelete({ _id: postID }, req.body);
      res.status(200).json({ msg: "Post has been Deleted" });
    } else {
      res.status(400).json({ msg: "Post didnot deleted" });
    }
  } catch (error) {
    console.log("something error");
    res.status(400).json({ err: error.message });
  }
});

module.exports = {
  postRouter,
};
