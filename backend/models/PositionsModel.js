const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// ❌ NO "new", NO destructuring
const PositionsModel = model("position", PositionsSchema);


module.exports = PositionsModel;    