const mongoose = require("mongoose");

const collectorSchema = new mongoose.Schema({
  name: String,
  company: String,
  phone: Number,
  password: String,
  email: String,
  city: String,
});

const Collector = mongoose.model("Collector", collectorSchema);

module.exports = Collector;
