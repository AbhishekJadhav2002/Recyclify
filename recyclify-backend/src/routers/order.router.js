const {
  getAllOrders,
  placeOrder,
  orderBycity,
  completedorders,
  orderCompleted,
} = require("../controller/order.controller");

const orderRouter = require("express").Router();

orderRouter.get("/userOrders", getAllOrders);
orderRouter.post("/placeOrder", placeOrder);
orderRouter.get("/orderBycity", orderBycity);
orderRouter.get("/completedorders", completedorders);
orderRouter.patch("/ordercomplete", orderCompleted);
module.exports = orderRouter;
