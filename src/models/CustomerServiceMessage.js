const mongoose = require("mongoose");

const CSMessagesSchema = new mongoose.Schema({
  idCustomerService: { type: mongoose.Schema.Types.ObjectId, required: true },
  idUser: { type: mongoose.Schema.Types.ObjectId },
  idCustomer: { type: mongoose.Schema.Types.ObjectId },
  message: { type: mongoose.Schema.Types.Mixed, required: true },
  date: { type: Date, default: Date.now() },
  sender: { type: String, enum: ["CUSTOMER", "USER"] },
  edit: { type: Boolean },
});

module.exports = mongoose.model("CSMessages", CSMessagesSchema);
