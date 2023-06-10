const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.KEY);
      if (decoded) {
        // console.log(decoded);
        req.body.userID = decoded.userID;
        req.body.user = decoded.user;
        next();
      } else {
        res.status(200).json({ msg: "Token not recognised" });
      }
    } catch (error) {
      res.status(200).json({ err: error.message });
    }
  } else {
    res.status(200).json({ msg: "There should be logged in!!" });
  }
};

module.exports = {
  auth,
};
