const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwtToken");
const collection = require("../config/collection");

//Admin Login function
const LoginAdmin = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.compare(password, process.env.ADMIN_PASSWORD).then((status) => {
    if (status) {      
      if (email == process.env.ADMIN) {
        const Token = generateToken(email);
        res.status(200).json({
          email,
          Token,
        });
      } else {
        res.status(400).json({
          error: "email ID Invalid",
        });
      }
    } else {
      res.status(401).json({
        error: "Invalid Password",
      });
    }
  });
});

module.exports = { LoginAdmin };
