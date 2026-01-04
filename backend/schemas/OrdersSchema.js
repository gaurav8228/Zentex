const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: String,
  mode: String,
});

module.exports = OrdersSchema;
