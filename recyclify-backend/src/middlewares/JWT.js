require("dotenv").config();
const User = require("../models/user.model");
const tokenRouter = require("express").Router();
const res = require("express/lib/response");
const JWT = require("jsonwebtoken");

async function generateToken(user) {
  const token = await JWT.sign(
    {
      id: user._id,
    },
    process.env.Secret,
    {
      expiresIn: 6000000,
    }
  );
  return token;
}

async function checkToken(req, res, next) {
  const token = req.headers["authorization"];
  // console.log(token);
  if (!token) {
    return res.status(400).json({
      msg: "No token found",
    });
  }

  try {
    const user = JWT.verify(token, process.env.Secret);
    req.body.userID = user.id;
  } catch (error) {
    return res.status(400).json({
      msg: "Token Invalid",
    });
  }
  return next();
}

module.exports = { generateToken, checkToken };
