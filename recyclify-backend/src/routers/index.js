const Router = require("express").Router();
const auth = require("./auth.router");
const order = require("./order.router");
Router.use("/auth", auth);
Router.use("/order", order);
Router.get("/", (req, res) => {
  res.send("Welcome to our website");
});

module.exports = Router;
