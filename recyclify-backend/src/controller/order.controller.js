const User = require("../models/user.model");
const Order = require("../models/order.model");
const Collector = require("../models/collector.model");

async function getAllOrders(req, res) {
  const user = req.body;
  console.log(user.userID);
  try {
    const userOrders = await Order.find({ userId: user.userID });
    return res.status(200).send(userOrders);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function placeOrder(req, res) {
  const order = req.body;
  try {
    const response = await Order.create({
      userId: order.userID,
      productType: order.productType,
      items: order.items,
      quantity: order.quantity,
      address: {
        houseNo: order.address.houseNo,
        lane: order.address.lane,
        city: order.address.city,
        pincode: order.address.pincode,
        date: new Date().toISOString().split("T")[0],
      },
    });
    return res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function orderBycity(req, res) {
  const collector = req.body;
  try {
    const collectorcity = await Collector.findOne({ _id: collector.id });
    const orderBycity = await Order.find({
      "address.$.city": collectorcity.city,
    });
    return res.status(200).send(orderBycity);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function completedorders(req, res) {
  const { userId } = req.body;
  try {
    const completedorders = await Order.find({
      $and: [{ userId: userId }, { completed: true }],
    }).lean();
    return res.status(200).send(completedorders);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function orderCompleted(req, res) {
  const order = req.body;

  try {
    const updateOrder = await Order.updateOne(
      { _id: order.id },
      { completed: true }
    );
    return res.status(200).send(updateOrder);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

module.exports = {
  getAllOrders,
  placeOrder,
  orderBycity,
  completedorders,
  orderCompleted,
};
