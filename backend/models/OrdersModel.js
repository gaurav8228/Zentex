const mongoose = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

// Create Mongoose model
const OrdersModel = mongoose.model("orders", OrdersSchema);

module.exports = OrdersModel; // ⚠️ export directly, no {}
