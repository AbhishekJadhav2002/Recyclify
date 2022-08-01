const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  productType: String,
  items: String,
  quantity: String,
  address: { houseNo: String, lane: String, city: String, pincode: Number },
  phone: Number,
  completed: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
