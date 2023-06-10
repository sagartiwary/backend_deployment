const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
require("dotenv").config()

// registration for the users at the first time

userRouter.post("/register", async (req, res) => {
  const { name, gender, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        let newUser = new UserModel({ name, gender, email, password: hash });
        await newUser.save();
        res.status(200).json({ msg: "You are registered thankyou!!" });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// login

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let existUser = await UserModel.findOne({ email });
    if (existUser) {
      bcrypt.compare(password, existUser.password, async (err, result) => {
        if (result) {
          const token = jwt.sign({
            userID: existUser._id,
            user: existUser.name,
          },process.env.KEY);
          res.status(200).json({ msg: "You ar logged in", token: token });
        } else {
          res.status(400).json({ error: err.message });
        }
      });
    } else {
      res.status(400).json({ msg: "Please login first!!!" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = {
  userRouter,
};
