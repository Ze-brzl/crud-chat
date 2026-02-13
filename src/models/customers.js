const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ssn: { type: String, required: true, index: { unique: true, sparse: true } },
  status: { type: String, required: true, enum: ["active", "inactive"] },
});

module.exports = mongoose.model("Customers", customerSchema);
