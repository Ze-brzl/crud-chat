const mongoose = require("mongoose");

const CSMessagesSchema = new mongoose.Schema({
  idCustomerService: { type: mongoose.Schema.Types.ObjectId, required: true },
  idUser: { type: mongoose.Schema.Types.ObjectId, required: true },
  message: { type: mongoose.Schema.Types.Mixed, required: true },
  idCustomer: { type: mongoose.Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now() },
  sender: { type: String, enum: ["CUSTOMER", "USER"] },
});

module.exports = mongoose.model("CSMessages", CSMessagesSchema);
