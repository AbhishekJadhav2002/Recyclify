const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  type: { type: String },
  resAddress: { houseNo: String, lane: String, city: String, pincode: Number },
  delAddress: { houseNo: String, lane: String, city: String, pincode: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
