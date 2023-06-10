const express = require("express");
const app = express();
const { connection } = require("./db/db");
const cors=require('cors')
require("dotenv").config();
const port = process.env.PORT;
const { userRouter } = require("./router/user.router");
const { postRouter } = require("./router/post.router");
app.use(express.json());
app.use(cors())
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.listen(port, async (req, res) => {
  try {
    await connection;
    console.log("db is connected now");
    console.log(`it is running on this ${port}`);
  } catch (error) {
    console.log("something wrong");
    console.log(error);
  }
});
